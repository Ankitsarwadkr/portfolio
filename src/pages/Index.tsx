import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Architecture />
        <Contact />
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 Ankit Sarwadkar. Built with React, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
