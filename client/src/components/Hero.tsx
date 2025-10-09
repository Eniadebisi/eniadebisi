import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import profileImage from "@assets/2025-03-11 12-42-28_1760033110328.jpeg";

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
                  Enioluwa Adebisi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Graduate building full-stack solutions and scalable systems
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-javascript">
                JavaScript
              </Badge>
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-python">
                Python
              </Badge>
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-sveltekit">
                SvelteKit
              </Badge>
              <Badge variant="secondary" className="text-sm" data-testid="badge-skill-sql">
                SQL
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Currently</p>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium" data-testid="text-availability">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-2xl bg-card border border-card-border flex items-center justify-center overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Enioluwa Adebisi" 
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
