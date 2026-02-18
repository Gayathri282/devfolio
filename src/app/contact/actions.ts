"use server";

import { z } from 'zod';

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
  
  console.log("New contact message received:");
  console.log(validatedFields.data);
  
  return {
    message: "Thank you for your message! I'll get back to you soon.",
    status: 'success',
  };
}
