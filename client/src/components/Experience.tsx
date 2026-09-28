import { Award } from "lucide-react";
import { Badge } from "./ui/badge";

type BulletGroup = {
  heading: string;
  bullets: string[];
};

type Role = {
  title: string;
  company: string;
  location: string;
  dates: string;
  summary: string;
  groups: BulletGroup[];
  tech: string[];
};

type Certification = {
  name: string;
  issuer: string;
};

export function Experience() {
  const roles: Role[] = [
    {
      title: "DevOps Engineer, Cloud Platform & Infrastructure (Contract)",
      company: "Jet Support Services, Inc. (JSSI)",
      location: "Chicago, IL",
      dates: "Jan 2026 – Present",
      summary:
        "Cloud platform engineer designing and standardizing a multi-subscription Azure environment: landing zone architecture, networking, observability, and infrastructure as code. I partner with application teams so they can build on secure, consistent cloud foundations.",
      groups: [
        {
          heading: "Cloud Architecture & Migration",
          bullets: [
            "Led usage discovery across 100+ resources in a legacy Azure estate to plan migration into a new enterprise landing zone",
            "Design landing zone components, including subscription structure, Entra ID, hub-spoke networking, VNet peering, private endpoints, and private DNS",
            "Assessed Azure resources against Well-Architected Framework pillars by connecting Claude (AI) to the environment through MCP with read-only access, with a human reviewing every finding",
          ],
        },
        {
          heading: "Observability & Automation",
          bullets: [
            "Automated deployment of 1,000+ Azure Monitor alerts across 11 resource archetypes plus subscription-wide alerts using PowerShell and Azure CLI, bringing 50% of the production estate under a ratified alerting standard. Migration to Terraform is planned.",
            "Prototype and productionize AI-powered automation with security guardrails, giving app teams self-service cloud tooling",
          ],
        },
        {
          heading: "Infrastructure as Code & CI/CD",
          bullets: [
            "Build reusable Terraform modules and standardize Azure DevOps pipelines for consistent, repeatable deployments",
            "Support Azure Kubernetes Service (AKS) workloads and Azure PaaS services, including Azure Functions",
          ],
        },
      ],
      tech: ["Azure", "Terraform", "Azure DevOps", "AKS", "Azure Monitor", "Entra ID", "PowerShell"],
    },
  ];

  const certifications: Certification[] = [
    { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft Certified" },
    { name: "Network+", issuer: "CompTIA" },
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-experience">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Building secure, standardized cloud platforms on Azure.
            </p>
          </div>

          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-card border border-card-border rounded-md p-6 md:p-8 space-y-6"
              data-testid={`card-role-${index}`}
            >
              <div className="space-y-2">
                <div className="text-sm font-mono text-accent">{role.dates}</div>
                <h3 className="text-xl md:text-2xl font-semibold">{role.title}</h3>
                <div className="text-muted-foreground">
                  {role.company} · {role.location}
                </div>
              </div>

              <p className="text-foreground">{role.summary}</p>

              <div className="grid lg:grid-cols-3 gap-8">
                {role.groups.map((group) => (
                  <div key={group.heading} className="space-y-3">
                    <h4 className="font-semibold">{group.heading}</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      {group.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-card border border-card-border rounded-md p-6 flex items-center gap-4"
                  data-testid={`card-cert-${cert.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <div className="text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
