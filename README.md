# Devfolio - A Next.js Portfolio

This is a Next.js portfolio website built with Firebase Studio. It features a modern design, project showcases, and a contact form.

## Getting Started

To run the application locally, you'll need Node.js installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Key Features

*   **Next.js App Router:** For modern, performant React applications.
*   **Tailwind CSS & ShadCN UI:** For beautiful and responsive styling.
*   **Server Actions:** The contact form uses a server action to process submissions.

## Deployment

This project is a **dynamic Next.js application**. For all its features to work, it needs to be deployed to a hosting provider that supports Node.js environments.

### Recommended: Vercel (Free)

This project can be easily deployed with **Vercel**, a platform from the creators of Next.js that is optimized for Next.js applications and offers a generous free tier.

1.  **Push to GitHub:**
    Create a new repository on your GitHub account and push the project code to it.

2.  **Import Project on Vercel:**
    - Go to your [Vercel dashboard](https://vercel.com/dashboard).
    - Click the "Add New..." button and select "Project".
    - Import your GitHub repository.
    - Vercel will automatically detect that it's a Next.js project and configure the build settings.

3.  **Deploy:**
    Click the "Deploy" button. Your site will be built and deployed. Vercel will provide you with a URL to your live site.

### Extending the Contact Form

Currently, the contact form logs submissions to the server console. On Vercel, you can view these logs in the project's "Logs" tab.

To receive emails, you can integrate a service like [Resend](https://resend.com/) or [Nodemailer](https://nodemailer.com/). You would typically add the email sending logic to the `sendEmail` server action in `src/app/contact/actions.ts` and set up any required API keys as environment variables on Vercel.

---
*This project was bootstraed with Firebase Studio.*
