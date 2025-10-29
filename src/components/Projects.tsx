import { Code2, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "BookMyTurf - Turf Booking Portal",
      period: "Feb 2025 – April 2025",
      description:
        "A dynamic booking system for turf owners and users with real-time slot availability and secure authentication.",
      techStack: ["JSP", "AJAX", "MySQL", "Bootstrap"],
      features: [
        "Real-time slot availability checking and booking",
        "User authentication and session management",
        "CRUD operations for bookings, user profiles, and cancellations",
        "Booking confirmation system",
        "Admin panel for Turf owner and user management",
        "Owner dashboard for turfs and slot management",
      ],
    },
    {
      title: "Blog Application - RESTful Web App",
      period: "Jan 2025 – Mar 2025",
      description:
        "A secure REST API blogging platform with JWT-based authentication and role-based access control (Admin/User).",
      techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate"],
      features: [
        "JWT-based authentication and role-based access control",
        "CRUD APIs for users, posts, comments, and likes with ownership checks",
        "Google OAuth2 integration for social authentication",
        "OpenAI API integration for automated category suggestions",
        "DTO-based mapping to separate database entities from API responses",
        "Unit testing using JUnit & Mockito",
      ],
      apiExample: `// Authentication API Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "ankit_dev",
    "email": "ankit@example.com",
    "role": "ADMIN"
  }
}

// Post Creation Response
{
  "postId": 123,
  "title": "Understanding Spring Security",
  "content": "...",
  "author": "ankit_dev",
  "category": "Backend Development",
  "createdAt": "2025-03-15T10:30:00Z"
}`,
      github: "https://github.com/Ankitsarwadkr/BlogApplication.git",
    },
    {
      title: "Shop Landing Page with Multilingual Support",
      period: "Oct 2024 – Dec 2024",
      description:
        "A multilingual online services shop landing page with Vanilla JS frontend, Spring Boot backend, MySQL database, and Google Translation API integration for seamless language switching.",
      techStack: [
        "Spring Boot",
        "MySQL",
        "Google Translation API",
        "REST APIs",
        "HTML/CSS",
      ],
      features: [
        "Dynamic language toggle (English/Marathi)",
        "Admin panel for services management",
        "REST API endpoints for services catalog",
        "Database-driven catalog management",
        "Responsive design with Tailwind CSS",
        "Real-time translation using Google Translation API",
        "Users can send service enquiries directly from the website.",
      ],
      apiExample: `// getservices API Response

{
  "id": 24,
  "titleEn": "DSC Enrollment",
  "titleMr": "डीएससी नोंदणी",
  "descriptionEn": "DSC enrollment will be done here",
  "descriptionMr": "डीएससी नोंदणी येथे केली जाईल.",
  "categoryEn": "EPFO",
  "categoryMr": "ईपीएफओ",
  "imageUrl": "images/dsc.jpg"
}`,
      liveDemo: "https://www.sangameshwarnetcafe.in",
    },
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
                    <h3 className="text-xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {project.period}
                    </span>
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
                  <h4 className="text-sm font-semibold text-accent mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.apiExample && (
                  <div className="code-block">
                    <pre className="text-xs md:text-sm overflow-x-auto">
                      <code>{project.apiExample}</code>
                    </pre>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {/* GitHub button only if project.github exists */}
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    </Button>
                  )}

                  {/* Live Demo button only if project.liveDemo exists */}
                  {project.liveDemo && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
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
