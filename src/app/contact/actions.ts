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
  
  const { name, email, message } = validatedFields.data;
  const recipientEmail = 'gayathrimukundan02@gmail.com';

  // In a real application, you would use a service like SendGrid, Resend, or Nodemailer.
  // For this example, we'll just log to the console to simulate the action.
  console.log("--- New Contact Form Submission ---");
  console.log(`To: ${recipientEmail}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Message: ${message}`);
  console.log("------------------------------------");

  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: "Thank you for your message! I'll get back to you soon.",
    status: 'success',
  };
}
