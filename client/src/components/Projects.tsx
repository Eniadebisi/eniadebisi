'use client';

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  embedUrl?: string;
  imageUrl?: string;
};

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Student Management CRM",
      description: "Full-stack CRM to manage student registration, class scheduling, and attendance tracking with role-based authentication and real-time validation.",
      category: "Web Apps",
      tech: ["SvelteKit", "Prisma", "MariaDB", "Agentic AI"],
      embedUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Proconomy (Startup App)",
      description: "Developed core components to increase user sign-ups and mentor participation. Converted 100+ Figma frames into a functional app with Firebase integration.",
      category: "Mobile",
      tech: ["Android Studio", "Figma", "Firebase"],
    },
    {
      id: 3,
      title: "Sockets-Based Chat Application",
      description: "Real-time chat platform with multi-client support, structured message passing, and error recovery for stability.",
      category: "Web Apps",
      tech: ["Python", "Multiprocessing", "Sockets"],
    },
    {
      id: 4,
      title: "HWPL Website Revamp",
      description: "Revamped organization's WordPress website using Elementor, enabling 10,000+ annual membership sign-ups and improving user experience.",
      category: "Web Apps",
      tech: ["WordPress", "Elementor", "JavaScript"],
    },
    {
      id: 5,
      title: "Secure Authentication System",
      description: "Led team to build secure authentication with encryption, session control, and responsive UI for CRM platform—improved security and onboarding time by 30%.",
      category: "Web Apps",
      tech: ["SvelteKit", "Prisma", "JavaScript"],
    },
  ];

  const categories = ["All", "Web Apps", "Mobile", "Design", "Data"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-projects">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A selection of my recent work showcasing various technologies and problem-solving approaches.
            </p>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList data-testid="tabs-project-filter">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  data-testid={`tab-${category.toLowerCase().replace(' ', '-')}`}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  {project.embedUrl ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-2 p-4">
                        <div className="text-4xl">🚀</div>
                        <p className="text-sm text-muted-foreground">Live Demo Available</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-6xl opacity-20">📱</div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs"
                        data-testid={`badge-tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    data-testid={`button-view-project-${project.id}`}
                  >
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
