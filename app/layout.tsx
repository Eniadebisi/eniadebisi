import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../client/src/index.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Enioluwa Adebisi - Cloud & DevOps Engineer | Azure, Terraform",
  description: "Cloud & DevOps Engineer building Azure landing zones, Terraform modules, Azure DevOps pipelines, and observability at scale. Microsoft Azure Fundamentals (AZ-900) and CompTIA Network+ certified. Georgia Tech CS graduate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
