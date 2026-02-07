import { Code, Database, Wrench, Layout, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code,
      skills: ["Java", "Spring Boot", "Hibernate", "JDBC", "REST APIs", "JSP", "Servlets"]
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["MySQL", "Database Design", "Query Optimization", "Transaction Management"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git & GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Maven", "AJAX"]
    },
    {
      title: "Frontend (Basic)",
      icon: Layout,
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Bootstrap"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-accent">$</span>
          <Code className="w-6 h-6 text-primary" />
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-xs text-muted-foreground ml-2">
                    {category.title.toLowerCase().replace(/\s+/g, '_')}.txt
                  </span>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">core_competencies.sh</span>
          </div>
          
          <div className="p-6">
            <div className="code-block text-sm">
              <pre>
                <code>
{`# Core Competencies
$ cat competencies.txt
├── Data Structures & Algorithms
├── Object-Oriented Programming (OOP)
├── Software Development Life Cycle (SDLC)
├── RESTful API Design & Development
├── Database Schema Design & Optimization
├── Version Control (Git & GitHub)
└── Problem Solving & Debugging`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* NEW: Currently Learning Section */}
        <div className="mt-6 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">learning_path.txt</span>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-primary">Currently Learning</h3>
            </div>
            
            <div className="code-block text-sm">
              <pre>
                <code>
{`$ ls learning/
├── Spring Security (Advanced Authentication & Authorization)
├── Microservices Architecture (Spring Cloud)
├── Docker & Containerization
├── AWS Basics (EC2, S3, RDS)
└── Redis for Caching

# Next on Roadmap
$ cat 2025_goals.txt
> Master Spring Boot ecosystem
> Build and deploy microservices
> Learn CI/CD pipelines
> Contribute to open-source projects`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;