'use client';

import { useState, useEffect } from 'react';
import { CollectionReference, Query, onSnapshot } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export function useCollection<T>(
    query: Query | CollectionReference | null
): { data: (T & { id:string })[] | null; loading: boolean; error: FirestorePermissionError | null } {
    const [data, setData] = useState<(T & { id:string })[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<FirestorePermissionError | null>(null);

    useEffect(() => {
        if (!query) {
            setData(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        const unsubscribe = onSnapshot(
            query,
            (querySnapshot) => {
                const docs = querySnapshot.docs.map((doc) => ({
                    ...(doc.data() as T),
                    id: doc.id,
                }));
                setData(docs);
                setLoading(false);
            },
            async (serverError) => {
                // Best effort to get the path. This may not be perfect for complex queries.
                const path = (query as any)._query?.path?.segments.join('/') || 'unknown path';
                const permissionError = new FirestorePermissionError({
                    path: path,
                    operation: 'list',
                });
                errorEmitter.emit('permission-error', permissionError);
                setError(permissionError);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [query]);

    return { data, loading, error };
}
