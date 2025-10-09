import { Code2, Database, Globe, Palette, Server, Wrench } from "lucide-react";

type Skill = {
  category: string;
  icon: React.ReactNode;
  items: string[];
};

export function Skills() {
  const skills: Skill[] = [
    {
      category: "Languages",
      icon: <Code2 className="h-6 w-6" />,
      items: ["JavaScript", "TypeScript", "Python", "Java"],
    },
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      items: ["React", "Next.js", "Vue", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Express", "Django", "FastAPI"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      category: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      items: ["Git", "Docker", "AWS", "CI/CD"],
    },
    {
      category: "Design",
      icon: <Palette className="h-6 w-6" />,
      items: ["Figma", "UI/UX", "Responsive", "Accessibility"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-skills">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A comprehensive toolkit built over years of hands-on experience and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-card border border-card-border rounded-md p-6 space-y-4"
                data-testid={`card-skill-${skill.category.toLowerCase()}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-muted-foreground"
                      data-testid={`text-skill-${item.toLowerCase().replace(/\./g, '-').replace(/\//g, '-')}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
