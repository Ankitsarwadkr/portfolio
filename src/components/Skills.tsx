import { Code, Database, Wrench, Layout } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code,
      skills: ["Java", "Spring Boot", "Hibernate", "JDBC", "REST APIs", "JSP"]
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["MySQL", "DBMS", "Database Design", "Query Optimization"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Postman", "VS Code", "IntelliJ IDEA", "AJAX"]
    },
    {
      title: "Frontend (Secondary)",
      icon: Layout,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
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
            <span className="text-xs text-muted-foreground ml-2">additional_skills.sh</span>
          </div>
          
          <div className="p-6">
            <div className="code-block text-sm">
              <pre>
                <code>
{`# Additional Competencies
$ cat competencies.txt

├── Data Structures & Algorithms
├── Object-Oriented Programming (OOP)
├── Software Development Life Cycle (SDLC)
├── RESTful API Design
├── Version Control (Git)
└── Problem Solving & Debugging

# Currently Learning
$ ls learning/
├── Cloud Platforms (AWS, Azure basics)
└── Advanced Spring Boot Features`}
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
