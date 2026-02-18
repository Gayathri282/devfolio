'use client';

import { useState, useEffect } from 'react';
import { DocumentReference, onSnapshot } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export function useDoc<T>(
    ref: DocumentReference | null
): { data: (T & { id: string }) | null; loading: boolean; error: FirestorePermissionError | null } {
    const [data, setData] = useState<(T & { id: string }) | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<FirestorePermissionError | null>(null);

    useEffect(() => {
        if (!ref) {
            setData(null);
            setLoading(false);
            return;
        }
        
        setLoading(true);
        setError(null);
        const unsubscribe = onSnapshot(
            ref,
            (doc) => {
                if (doc.exists()) {
                    setData({ ...(doc.data() as T), id: doc.id });
                } else {
                    setData(null);
                }
                setLoading(false);
            },
            async (serverError) => {
                const permissionError = new FirestorePermissionError({
                    path: ref.path,
                    operation: 'get',
                });
                errorEmitter.emit('permission-error', permissionError);
                setError(permissionError);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [ref]);

    return { data, loading, error };
}
