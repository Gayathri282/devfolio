import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Wind, Star, GitFork, BookOpen } from 'lucide-react';
import type { Skill, GithubRepo } from '@/lib/types';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Gayathri Mukundan, her skills, and experience.',
};

const skills: { category: string; list: Skill[] }[] = [
  {
    category: 'Frontend',
    list: [
      { name: 'React / Next.js', icon: Code },
      { name: 'TypeScript', icon: Code },
      { name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    category: 'Backend',
    list: [
      { name: 'Node.js', icon: Code },
      { name: 'Firebase', icon: Database },
      { name: 'PostgreSQL', icon: Database },
    ],
  },
];

// Mock GitHub data
const githubRepos: GithubRepo[] = [
    { id: 1, name: 'devfolio', description: 'The portfolio website you are currently viewing.', url: '#', stars: 12, forks: 3 },
    { id: 2, name: 'react-query-essentials', description: 'A guide and example repo for mastering React Query.', url: '#', stars: 150, forks: 25 },
    { id: 3, name: 'tailwind-snippets', description: 'A collection of useful Tailwind CSS components and snippets.', url: '#', stars: 42, forks: 8 },
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-me-image');

  return (
    <div className="space-y-16 animate-fade-in">
       <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Developer, creator, and lifelong learner.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6 text-lg text-foreground/90 leading-relaxed">
          <p>
            Hello! I'm Gayathri, a web developer with a passion for building beautiful, functional, and user-centric web applications. My journey into code started years ago, and since then, I've been hooked on the endless possibilities of the web.
          </p>
          <p>
            I specialize in the JavaScript ecosystem, with a strong focus on React and its frameworks like Next.js. I enjoy tackling complex problems and turning them into simple, elegant solutions. I'm always eager to learn new technologies and improve my craft.
          </p>
          <p>
            When I'm not coding, you can find me exploring new coffee shops, reading a good book, or contributing to open-source projects. I believe that the best products are built by people who are passionate about their work, and I bring that passion to every project I take on.
          </p>
        </div>
        
        {aboutImage && (
          <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-xl group">
             <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={aboutImage.imageHint}
                sizes="(max-width: 1024px) 90vw, 30vw"
              />
          </div>
        )}
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-primary">My Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="shadow-lg">
              <CardHeader>
                <CardTitle>{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillCategory.list.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <skill.icon className="w-6 h-6 text-accent" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-primary">GitHub Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.map((repo) => (
                <Card key={repo.id} className="flex flex-col hover:shadow-xl transition-shadow">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                          <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
                          <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:underline truncate">{repo.name}</Link>
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm line-clamp-2">{repo.description}</p>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground flex items-center gap-4 pt-4">
                      <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{repo.forks}</span>
                      </div>
                  </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
