import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-accent">$</span>
          <GraduationCap className="w-6 h-6 text-primary" />
          Education
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">education.json</span>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="code-block">
              <pre className="text-sm">
                <code>
{`{
  "degree": "Master of Computer Applications (MCA)",
  "university": "Punyashlok Ahilyadevi Holkar Solapur University",
  "graduation": "June 2025",
  "cgpa": 8.60,
  "coursework": [
    "Java Programming",
    "Spring Boot Framework",
    "Database Management Systems",
    "REST API Development",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Software Development Life Cycle"
  ]
}`}
                </code>
              </pre>
            </div>

            <div className="code-block">
              <pre className="text-sm">
                <code>
{`{
  "degree": "Bachelor of Computer Applications (BCA)",
  "college": "Hirachand Nemchand College of Commerce",
  "location": "Solapur",
  "graduation": "July 2023",
  "cgpa": 8.47
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
