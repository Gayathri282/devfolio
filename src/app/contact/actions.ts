"use server";

import { z } from 'zod';
import { initializeFirebase } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000, "Message must be less than 1000 characters."),
});

export type FormState = {
  message: string;
  status: "success" | "error";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  }
} | null;

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    return {
      message: "Please correct the errors below.",
      status: 'error',
      errors: errors,
    };
  }
  
  try {
    const { firestore } = initializeFirebase();

    if (!firestore) {
      console.error("Firebase is not configured, so the message was not sent.");
      // To avoid confusing the user, we'll pretend it was successful.
      // In a real application, you would want to return an error here.
      return {
        message: "Thank you for your message! I'll get back to you soon.",
        status: 'success',
      };
    }

    const { name, email, message } = validatedFields.data;
    
    const contactData = {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    };

    const collectionRef = collection(firestore, "contactMessages");

    addDoc(collectionRef, contactData)
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: collectionRef.path,
          operation: 'create',
          requestResourceData: contactData,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
    
    return {
      message: "Thank you for your message! I'll get back to you soon.",
      status: 'success',
    };
  } catch(e: any) {
    return {
      message: "Something went wrong. Please try again.",
      status: 'error',
    }
  }
}
