import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of projects by Gayathri Mukundan.',
};

const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Project Alpha',
    description: 'A cutting-edge dashboard for data visualization, built with React and D3.js. Features real-time updates and a highly interactive user interface.',
    tags: ['React', 'D3.js', 'TypeScript', 'Node.js'],
    imageId: 'project-1',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj2',
    title: 'E-commerce Storefront',
    description: 'A fully functional e-commerce platform with a custom CMS. Integrated with Stripe for payments and built on Next.js for optimal performance.',
    tags: ['Next.js', 'Stripe', 'GraphQL', 'PostgreSQL'],
    imageId: 'project-2',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj3',
    title: 'Blogging Platform',
    description: 'A developer-focused blogging platform with Markdown support, syntax highlighting, and a sleek, minimalist design. Supports static site generation.',
    tags: ['Gatsby', 'Contentful', 'Tailwind CSS'],
    imageId: 'project-3',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">My Work</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Here are some of the projects I'm proud to have worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const image = PlaceHolderImages.find((img) => img.id === project.imageId);
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2 shadow-lg hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {image && (
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-4">
                {project.githubUrl && (
                  <Button asChild variant="outline" size="icon">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub Repository</span>
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
