'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      // For development, we throw it to make it highly visible in the Next.js overlay.
      if (process.env.NODE_ENV === 'development') {
        // Throwing the error in a timeout ensures it's uncaught by React's
        // error boundaries and is picked up by the Next.js error overlay.
        setTimeout(() => {
          throw error;
        }, 0);
      } else {
        // In production, you might log this to a service like Sentry.
        console.error(error);
      }
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, []);

  return null; // This component doesn't render anything.
}
