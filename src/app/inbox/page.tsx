'use client';
import { useMemo } from 'react';
import { useCollection } from '@/firebase/firestore/use-collection';
import { useFirebase } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ContactMessage } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function formatTimestamp(timestamp: Timestamp | Date | null): string {
  if (!timestamp) {
    return 'N/A';
  }
  const date = timestamp instanceof Timestamp ? timestamp.toDate() : timestamp;
  return date.toLocaleString();
}

export default function InboxPage() {
  const { firestore } = useFirebase();

  const messagesQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, 'contactMessages'),
      orderBy('createdAt', 'desc')
    );
  }, [firestore]);

  const { data: messages, loading, error } = useCollection<ContactMessage>(messagesQuery);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Inbox
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Messages from your contact form.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Received Messages</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ) : error ? (
             <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Permission Error</AlertTitle>
                <AlertDescription>
                  Could not load messages. This is likely a Firestore security rule issue.
                </AlertDescription>
              </Alert>
          ) : messages && messages.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Received</TableHead>
                  <TableHead className="w-[150px]">Name</TableHead>
                  <TableHead className="w-[200px]">Email</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((msg) => (
                  <TableRow key={msg.id}>
                    <TableCell>
                      <Badge variant="outline">
                        {formatTimestamp(msg.createdAt)}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{msg.name}</TableCell>
                    <TableCell>{msg.email}</TableCell>
                    <TableCell>{msg.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground py-8">
              No messages yet.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
