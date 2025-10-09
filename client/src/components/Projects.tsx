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
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and AI-powered recommendations.",
      category: "Web Apps",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      embedUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with real-time updates and advanced analytics.",
      category: "Web Apps",
      tech: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
      embedUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application with workout plans and progress visualization.",
      category: "Mobile",
      tech: ["React Native", "Firebase", "TensorFlow"],
    },
    {
      id: 4,
      title: "Design System",
      description: "Comprehensive design system and component library for enterprise applications.",
      category: "Design",
      tech: ["React", "Storybook", "Figma", "Tailwind"],
    },
    {
      id: 5,
      title: "Data Analytics Platform",
      description: "Business intelligence dashboard with interactive visualizations and real-time data processing.",
      category: "Data",
      tech: ["Python", "FastAPI", "D3.js", "Apache Kafka"],
    },
    {
      id: 6,
      title: "AI Chatbot",
      description: "Intelligent conversational AI for customer support with natural language understanding.",
      category: "Web Apps",
      tech: ["Python", "OpenAI", "LangChain", "React"],
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
