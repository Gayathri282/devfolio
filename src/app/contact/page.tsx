import { Metadata } from 'next';
import { ContactForm } from './contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Gayathri Mukundan.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground">
                You can reach out to me via the form or through the following channels. I'm looking forward to connecting!
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent" />
                    <a href="mailto:gayathrimukundan02@gmail.com" className="hover:text-primary transition-colors">
                        gayathrimukundan02@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent" />
                    <span className="text-muted-foreground">(+91) 123-456-7890</span>
                </div>
            </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
