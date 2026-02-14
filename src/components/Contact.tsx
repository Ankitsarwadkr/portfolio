import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-accent">$</span>
          <Mail className="w-6 h-6 text-primary" />
          Contact
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">contact.sh</span>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <span className="text-primary">~</span>/portfolio <span className="text-accent">$</span> cat contact_info.txt
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:work@ankitsarwadkar.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      work@ankitsarwadkar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Solapur, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Github className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com/Ankitsarwadkr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors break-all"
                    >
                      github.com/Ankitsarwadkr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Linkedin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/ankitsarwadkar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors break-all"
                    >
                      linkedin.com/in/ankitsarwadkar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="code-block">
                <pre className="text-sm">
                  <code>
{`# Let's connect and build something amazing!
$ echo "Open to backend development opportunities"
> Open to backend development opportunities

$ echo "Available from: June 2025"
> Available from: June 2025

$ echo "Interested in: Full-time | Internship"
> Interested in: Full-time | Internship`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="default" size="sm" asChild>
                <a href="mailto:work@ankitsarwadkar.com">
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.linkedin.com/in/ankitsarwadkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://github.com/Ankitsarwadkr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
