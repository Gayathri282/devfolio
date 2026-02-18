'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Auth }  from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { initializeFirebase } from './index';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

interface FirebaseContextType {
    app: FirebaseApp | undefined;
    auth: Auth | undefined;
    firestore: Firestore | undefined;
}

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const firebase = useMemo(() => initializeFirebase(), []);

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
            <FirebaseErrorListener />
        </FirebaseContext.Provider>
    );
};

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error('useFirebase must be used within a FirebaseProvider');
    }
    return context;
};

export const useFirebaseApp = () => useFirebase()?.app;
export const useFirestore = () => useFirebase()?.firestore;
export const useAuth = () => useFirebase()?.auth;
