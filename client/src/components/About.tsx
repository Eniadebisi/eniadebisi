export function About() {
  const milestones = [
    { year: "2026–Present", title: "DevOps Engineer (Contract)", company: "JSSI" },
    { year: "2022-2025", title: "Front End Web Dev & Networking", company: "HWPL Nonprofit" },
    { year: "2016-2020", title: "AV Tech & Networking", company: "New Wine Assembly" },
  ];

  const quickFacts = [
    { label: "Education", value: "B.S." },
    { label: "School", value: "GA Tech" },
    { label: "Location", value: "Atlanta" },
    { label: "Status", value: "US Citizen" },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12" data-testid="heading-about">
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-foreground">
              I'm a Computer Science graduate from Georgia Institute of Technology (May 2025) working in cloud platform
              engineering on Azure. I design landing zones, networking, and observability, and I codify it all as
              infrastructure so application teams can ship on secure, consistent foundations.
            </p>
            <p className="text-lg text-muted-foreground">
              My background in software development with JavaScript, Python, and SQL shapes how I automate infrastructure,
              and years of hands-on networking work, now backed by CompTIA Network+ and Microsoft Azure Fundamentals,
              ground my approach to cloud architecture.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4" data-testid={`milestone-${index}`}>
                    <div className="text-sm font-mono text-accent w-24 shrink-0">{milestone.year}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{milestone.title}</div>
                      <div className="text-sm text-muted-foreground">{milestone.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-card border border-card-border rounded-md p-8 space-y-6">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="space-y-1" data-testid={`fact-${index}`}>
                    <div className="text-2xl font-bold text-primary">{fact.value}</div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
