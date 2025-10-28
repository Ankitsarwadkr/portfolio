import { Code2, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "BookMyTurf - Turf Booking Portal",
      period: "Feb 2025 – April 2025",
      description: "A dynamic booking system for turf owners and users with real-time slot availability and secure authentication.",
      techStack: ["JSP", "AJAX", "MySQL", "Bootstrap"],
      features: [
        "Real-time slot availability checking and booking",
        "User authentication and session management",
        "CRUD operations for bookings, user profiles, and cancellations",
        "Booking confirmation system",
        "Admin panel for turf and slot management",
        "Concurrency control for simultaneous bookings"
      ],
      github: "#"
    },
    {
      title: "Blog Application - RESTful Web App",
      period: "Jan 2025 – Mar 2025",
      description: "A secure REST API blogging platform with JWT-based authentication and role-based access control (Admin/User).",
      techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate"],
      features: [
        "JWT-based authentication and role-based access control",
        "CRUD APIs for users, posts, comments, and likes with ownership checks",
        "Google OAuth2 integration for social authentication",
        "OpenAI API integration for automated category suggestions",
        "DTO-based mapping to separate database entities from API responses",
        "Unit testing using JUnit & Mockito"
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
      github: "#"
    },
    {
      title: "Shop Landing Page with Multilingual Support",
      period: "Oct 2024 – Dec 2024",
      description: "A multilingual e-commerce landing page with Spring Boot backend, MySQL database, and Google Translation API integration for seamless language switching.",
      techStack: ["Spring Boot", "MySQL", "Google Translation API", "REST APIs", "HTML/CSS"],
      features: [
        "Dynamic language toggle (English/Marathi)",
        "Admin panel for product and content management",
        "REST API endpoints for product catalog",
        "Database-driven content management",
        "Responsive design with Bootstrap",
        "Real-time translation using Google Translation API"
      ],
      apiExample: `// Product API Response
{
  "productId": 101,
  "name": "Premium Laptop",
  "description": "High-performance laptop for developers",
  "price": 75000,
  "category": "Electronics",
  "inStock": true,
  "language": "en"
}

// Translation API Response
{
  "originalText": "Premium Laptop",
  "translatedText": "प्रीमियम लॅपटॉप",
  "targetLanguage": "mr",
  "sourceLanguage": "en"
}`,
      databaseSchema: `-- Products Table
CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100),
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Translations Table
CREATE TABLE translations (
  translation_id INT PRIMARY KEY AUTO_INCREMENT,
  entity_type VARCHAR(50),
  entity_id INT,
  field_name VARCHAR(100),
  language_code VARCHAR(5),
  translated_text TEXT,
  FOREIGN KEY (entity_id) REFERENCES products(product_id)
);`,
      github: "#"
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

                {project.apiExample && (
                  <div className="code-block">
                    <pre className="text-xs md:text-sm overflow-x-auto">
                      <code>{project.apiExample}</code>
                    </pre>
                  </div>
                )}

                {project.databaseSchema && (
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-3">Database Schema:</h4>
                    <div className="code-block">
                      <pre className="text-xs md:text-sm overflow-x-auto">
                        <code>{project.databaseSchema}</code>
                      </pre>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
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
