import { Activity, Cloud, Code2, GitBranch, Network, Sparkles } from "lucide-react";

type Skill = {
  category: string;
  icon: React.ReactNode;
  items: string[];
};

export function Skills() {
  const skills: Skill[] = [
    {
      category: "Cloud",
      icon: <Cloud className="h-6 w-6" />,
      items: ["Azure", "Landing Zones", "Well-Architected Framework", "Entra ID", "Azure Functions", "AKS"],
    },
    {
      category: "Networking",
      icon: <Network className="h-6 w-6" />,
      items: ["Hub-Spoke", "VNet Peering", "Private Endpoints", "DNS", "TCP/IP", "Subnetting"],
    },
    {
      category: "IaC & CI/CD",
      icon: <GitBranch className="h-6 w-6" />,
      items: ["Terraform", "Azure DevOps", "PowerShell", "Azure CLI", "Git"],
    },
    {
      category: "Observability",
      icon: <Activity className="h-6 w-6" />,
      items: ["Azure Monitor", "Log Analytics", "Alerting Standards"],
    },
    {
      category: "AI & Automation",
      icon: <Sparkles className="h-6 w-6" />,
      items: ["Claude", "MCP", "Agentic AI", "Generative AI"],
    },
    {
      category: "Development",
      icon: <Code2 className="h-6 w-6" />,
      items: ["JavaScript", "Python", "SQL", "React", "SvelteKit", "PostgreSQL"],
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
              A cloud-first toolkit spanning Azure architecture, networking, infrastructure as code, and automation.
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
