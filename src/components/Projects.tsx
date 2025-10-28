import { Code2, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "BookMyTurf - Turf Booking Portal",
      period: "Feb 2025 – April 2025",
      description: "A comprehensive turf booking system with real-time slot availability, user authentication, and booking management.",
      techStack: ["Java", "JSP", "MySQL", "AJAX", "Bootstrap"],
      features: [
        "Real-time slot availability checking and booking",
        "User authentication and session management",
        "CRUD operations for bookings, user profiles, and cancellations",
        "Booking confirmation with email notifications",
        "Admin panel for turf and slot management",
        "Concurrency control for simultaneous bookings"
      ],
      apiExample: `// API Response Example
{
  "status": "success",
  "booking": {
    "id": "BK12345",
    "turfName": "Green Valley Turf",
    "date": "2025-05-15",
    "timeSlot": "18:00-19:00",
    "user": "ankit@example.com",
    "amount": 500,
    "status": "confirmed"
  }
}`,
      github: "#",
      demo: "#"
    },
    {
      title: "Car Rental Management System",
      period: "Aug 2024 – Sep 2024",
      description: "Desktop-based car rental management system with comprehensive CRUD operations and inventory management.",
      techStack: ["Java Swing", "MySQL", "JDBC"],
      features: [
        "Customer booking and registration system",
        "Vehicle inventory management with availability tracking",
        "Automated billing and invoice generation",
        "Rental history and reports",
        "CRUD operations for customers, vehicles, and bookings",
        "Database-driven architecture with MySQL"
      ],
      apiExample: `// Database Schema Example
CREATE TABLE bookings (
  booking_id INT PRIMARY KEY,
  customer_id INT,
  vehicle_id INT,
  start_date DATE,
  end_date DATE,
  total_amount DECIMAL(10,2),
  status VARCHAR(20),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);`,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-accent">$</span>
          <Code2 className="w-6 h-6 text-primary" />
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-xs text-muted-foreground ml-2">
                  project_{index + 1}.md
                </span>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.period}</span>
                  </div>
                  <p className="text-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-accent mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="code-block">
                  <pre className="text-xs md:text-sm overflow-x-auto">
                    <code>{project.apiExample}</code>
                  </pre>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
