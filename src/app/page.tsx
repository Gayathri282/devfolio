import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Wind } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <div className="space-y-20 md:space-y-28">
      <section className="animate-fade-in text-center pt-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-primary animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
          Hi, I'm Gayathri Mukundan
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          A passionate Web Developer creating modern, responsive, and user-friendly web applications.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {heroImage && (
        <section className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="relative w-full max-w-4xl aspect-[2/1] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={heroImage.imageHint}
                priority
              />
               <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
        </section>
      )}

      <section className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <h2 className="text-3xl font-bold text-primary mb-2">My Skills</h2>
        <p className="text-muted-foreground mb-8">Technologies I love to work with.</p>
        <div className="flex justify-center flex-wrap gap-4 md:gap-8 max-w-3xl mx-auto">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Firebase'].map((skill, index) => (
            <div key={skill} className="bg-card p-3 px-5 rounded-lg shadow-sm text-foreground font-medium transform transition-transform duration-300 hover:-translate-y-1">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
