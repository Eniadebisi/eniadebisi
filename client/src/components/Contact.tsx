"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "./ui/button";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "eniadebisi@gmail.com";
  const phone = "(202) 751-6267";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/eniadebisi",
      color: "hover:text-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="h-5 w-5" />,
      url: "https://github.com/eniadebisi",
      color: "hover:text-foreground",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-contact">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground">I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="bg-card border border-card-border rounded-md p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="font-mono" data-testid="text-email">
                    {email}
                  </span>
                </div>
                <Button variant="outline" size="sm" onClick={copyEmail} data-testid="button-copy-email">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              <div className="bg-card border border-card-border rounded-md p-6">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">📱</span>
                  <span className="font-mono" data-testid="text-phone">
                    {phone}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="lg" asChild className="gap-2" data-testid={`button-${link.name.toLowerCase()}`}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>

            <div className="pt-8">
              <Button size="lg" data-testid="button-download-resume-footer">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Enioluwa Adebisi. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
