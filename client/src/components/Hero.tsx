'use client';

import { ArrowRight, FolderOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import profileImage from "@/lib/ProfilePic.jpeg";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-[80vh] flex items-center py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Enioluwa Adebisi               ...
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Cloud & DevOps Engineer building secure, standardized Azure platforms with Terraform and automation
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-azure">
                Azure
              </Badge>
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-terraform">
                Terraform
              </Badge>
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-azure-devops">
                Azure DevOps
              </Badge>
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-aks">
                AKS
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("experience")}
                data-testid="button-view-experience"
              >
                View Experience <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
              >
                <FolderOpen className="mr-2 h-5 w-5" /> View Projects
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Currently</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium" data-testid="text-availability">
                  DevOps Engineer @ JSSI
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-2xl bg-card border border-card-border flex items-center justify-center overflow-hidden">
                <Image 
                  src={profileImage} 
                  alt="Enioluwa Adebisi" 
                  fill
                  className="object-cover"
                  data-testid="img-profile"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
