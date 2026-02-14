import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const skills = [
    "Java", "Spring Boot", "Hibernate", "REST APIs", 
    "MySQL", "Git", "Postman"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">backend-dev.sh</span>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <span className="text-primary">~</span>/portfolio <span className="text-accent">$</span> whoami
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-primary">
                Ankit Sarwadkar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                <span className="text-accent">&gt;</span> Java Backend Developer | MCA Graduate
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <span className="text-primary">~</span>/portfolio <span className="text-accent">$</span> cat about.txt
              </p>
              <p className="text-foreground leading-relaxed">
                Hi, I'm Ankit Sarwadkar, an MCA graduate specializing in Java backend development with hands on experience 
                in building scalable web applications using Spring Boot, REST APIs, and MySQL. 
                Passionate about clean code, efficient database design, and modern backend architectures.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                <span className="text-primary">~</span>/portfolio <span className="text-accent">$</span> ls -la skills/
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-xs md:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button 
                variant="default" 
                size="sm" 
                className="gap-2" 
                asChild
              >
                <a 
                  href="/Ankit_Sarwadkar_Java_Developer.pdf" 
                  download="Ankit_Sarwadkar_Java_Developer.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>

              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="https://github.com/Ankitsarwadkr" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="https://www.linkedin.com/in/ankitsarwadkar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="mailto:work@ankitsarwadkar.com">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;