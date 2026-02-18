# Devfolio - A Next.js Portfolio

This is a Next.js portfolio website built with Firebase Studio. It features a modern design, project showcases, a contact form, and a private inbox to view messages.

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
*   **Firebase Firestore:** To store messages from the contact form. This is a dynamic, server-side feature.
*   **Firebase App Hosting:** For easy and free deployment.

## Deployment

This project is a **dynamic Next.js application**, which means it uses server-side features (like the contact form). For these features to work, it needs to be deployed to a hosting provider that supports Node.js environments.

### Recommended: Firebase App Hosting (Free)

This project is pre-configured for deployment on **Firebase App Hosting**, which is a free and robust option for hosting dynamic Next.js apps. When you deploy to Firebase, your contact form will work correctly.

#### From Firebase Studio
If you are working within Firebase Studio, you can typically deploy your application directly from the interface. Look for a "Deploy" or "Publish" button.

#### Using the Firebase CLI

If you have your project on your local machine, you can deploy using the Firebase Command Line Interface (CLI).

1.  **Install the Firebase CLI:**
    If you don't have it installed, run:
    ```bash
    npm install -g firebase-tools
    ```

2.  **Login to Firebase:**
    ```bash
    firebase login
    ```

3.  **Deploy the application:**
    In your project root directory, run:
    ```bash
    firebase deploy --only appHosting
    ```

### Hosting on GitHub Pages (Not Recommended)

While you can store your code on GitHub, using **GitHub Pages** for hosting this project is **not recommended**.

GitHub Pages is designed for **static websites**. Because this is a dynamic Next.js application, critical features like the **contact form will not work** if you deploy to GitHub Pages. It requires a server environment to process form submissions and save them to the database.

For all features of your portfolio to work as intended, please use a hosting service designed for dynamic applications, like the recommended Firebase App Hosting.

---
*This project was bootstraed with Firebase Studio.*
