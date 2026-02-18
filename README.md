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
*   **Formspree Integration:** The contact form is ready to be connected to the Formspree service.

## Setting up the Contact Form

The contact form is powered by [Formspree](https://formspree.io/), which provides a simple way to receive email notifications from your form without any backend code.

1.  **Create a Formspree Account:** If you don't have one, sign up for a free account at [formspree.io](https://formspree.io/).
2.  **Create a New Form:** From your Formspree dashboard, create a new form and get your unique endpoint URL. It will look something like `https://formspree.io/f/xxxxxxxx`.
3.  **Update the Code:** Open the file `src/app/contact/contact-form.tsx` and replace the placeholder `https://formspree.io/f/YOUR_FORMSPREE_CODE` with your actual Formspree endpoint URL.

That's it! Your form will now send submissions directly to your email.

## Deployment

This project is ready for deployment on any static or Next.js hosting provider.

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

---
*This project was bootstraed with Firebase Studio.*
