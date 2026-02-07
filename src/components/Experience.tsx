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
                    <span>Developed full-stack web applications using <span className="text-accent">Java</span>, <span className="text-accent">JSP</span>, and <span className="text-accent">MySQL</span>, implementing features including user authentication, registration, and role-based access control</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Designed and implemented <span className="text-accent">RESTful APIs</span> and backend business logic for dynamic web applications, handling user sessions and database transactions</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Integrated <span className="text-accent">AJAX</span> for asynchronous server communication, enabling real-time UI updates and improved user experience without full page reloads</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Debugged and optimized database queries and application code, resolving critical production bugs and improving overall system performance and reliability</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Collaborated with senior developers in code reviews and implemented best practices for clean code, error handling, and security measures</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Context Section */}
        <div className="mt-6 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">tech_stack.txt</span>
          </div>
          
          <div className="p-6">
            <div className="code-block text-sm">
              <pre>
                <code>
{`# Technologies Used During Internship
$ cat tech_stack.txt

Backend:
├── Java (Core & Advanced)
├── JavaServer Pages (JSP)
├── Servlets & JDBC
└── MySQL Database

Frontend:
├── HTML5 & CSS3
├── JavaScript (ES6+)
├── AJAX for async operations
└── Bootstrap for responsive design

Tools & Workflow:
├── Git for version control
├── IntelliJ IDEA / Eclipse
└── Apache Tomcat Server`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;