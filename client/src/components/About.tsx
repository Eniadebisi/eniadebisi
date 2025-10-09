export function About() {
  const milestones = [
    { year: "2024", title: "Senior Developer", company: "Tech Company" },
    { year: "2022", title: "Full Stack Developer", company: "Startup Inc" },
    { year: "2020", title: "Junior Developer", company: "Digital Agency" },
  ];

  const quickFacts = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Technologies", value: "15+" },
    { label: "Coffee Consumed", value: "∞" },
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
              I'm a passionate full stack developer with a keen eye for creating seamless user experiences 
              and robust backend systems. With over 5 years of experience in the industry, I've had the 
              privilege of working on diverse projects ranging from e-commerce platforms to AI-powered applications.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines technical expertise with creative problem-solving, always keeping the 
              end user in mind. I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold">Career Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4" data-testid={`milestone-${index}`}>
                    <div className="text-sm font-mono text-accent w-16">{milestone.year}</div>
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
                    <div className="text-3xl font-bold text-primary">{fact.value}</div>
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
