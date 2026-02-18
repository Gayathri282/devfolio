import { FirebaseApp, initializeApp, getApps, getApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import firebaseConfig from './config';

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let firestore: Firestore | undefined;

function initializeFirebase() {
    if (getApps().length === 0) {
        if (firebaseConfig.apiKey) {
            app = initializeApp(firebaseConfig);
            auth = getAuth(app);
            firestore = getFirestore(app);
        }
    } else {
        app = getApp();
        auth = getAuth(app);
        firestore = getFirestore(app);
    }

    return { app, auth, firestore };
}

export { app, auth, firestore, initializeFirebase };

export * from './provider';
export * from './client-provider';
