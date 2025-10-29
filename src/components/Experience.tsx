import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-accent">$</span>
          <Briefcase className="w-6 h-6 text-primary" />
          Experience
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">experience.log</span>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-primary">Software Developer Intern</h3>
                  <span className="text-sm text-muted-foreground">Feb 2025 – Jun 2025</span>
                </div>
                <p className="text-accent mb-3">IntelliseIT, Solapur</p>
                
                <div className="space-y-2 text-sm text-foreground">
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Developed web applications using <span className="text-accent">Java</span>, <span className="text-accent">JSP</span>, and <span className="text-accent">MySQL</span>, implementing features like user registration and data management</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Contributed to backend logic for dynamic web applications</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Integrated <span className="text-accent">AJAX</span> for dynamic page rendering and real-time data updates</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Performed debugging, testing, and code optimization to ensure application performance</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
