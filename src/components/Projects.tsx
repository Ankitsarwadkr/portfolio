import { Code2, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
  title: "BookMyTurf - Two-Sided Marketplace Platform",
  period: "Feb 2025 – Present",
  description:
    "Production-grade two-sided marketplace connecting users and turf owners with complete payment orchestration, automated payout settlements, and real-time transaction handling. Features role-based authentication, Razorpay integration for both payments and payouts, and advanced concurrency control.",
  techStack: ["Spring Boot", "PostgreSQL", "Razorpay API", "Spring Security", "JWT", "Cloudinary", "Spring Mail", "Spring Scheduler", "React", "TypeScript"],
  features: [
    "Razorpay dual integration: Payment Gateway for bookings + Payout API for owner settlements with automated weekly batch processing",
    "Multi-role authentication (USER/OWNER/ADMIN) with cookie-based JWT, document upload verification, and multi-stage admin approval workflow",
    "Pessimistic database locking to prevent double-booking in high-concurrency scenarios, ensuring data consistency across simultaneous reservations",
    "Dynamic pricing engine with time-based slot pricing and automated 7-day slot generation using Spring Scheduler",
    "Weekly payout batch system with complex business logic, platform fee deduction, execution tracking, and automatic retry mechanism for failed transfers",
    "Webhook handling for Razorpay payment confirmations with signature validation and automated email notifications for transaction lifecycle",
    "Cloudinary CDN integration for scalable image management, storing only URLs in PostgreSQL for optimized query performance",
    "State machine implementation for booking lifecycle (PENDING → CONFIRMED → EXPIRED) and payout execution (PENDING → PAID/FAILED)",
    "Admin dashboard with owner verification, payout batch management, execution monitoring, and detailed audit trails with retry history",
    "Automated email system using Spring Mail for booking confirmations, payment updates, verification results, and payout alerts"
  ],
  apiExample: `// Booking Creation with Payment
POST /api/customer/bookings/create
{
  "turfId": 5,
  "slotIds": [12, 13, 14]
}
Response: {
  "bookingId": "BKG123456",
  "totalAmount": 1500,
  "status": "PENDING_PAYMENT",
  "razorpayOrderId": "order_abc123"
}

// Razorpay Payment Verification
POST /api/customer/payments/verify
{
  "bookingId": "BKG123456",
  "razorpayOrderId": "order_abc123",
  "razorpayPaymentId": "pay_xyz789",
  "razorpaySignature": "sig_hash..."
}

// Webhook - Payment Confirmation
POST /api/webhooks/razorpay
X-Razorpay-Signature: webhook_signature
{
  "event": "payment.captured",
  "payload": {...}
}

// Weekly Payout Batch Processing
POST /api/admin/payouts/batch/create
Response: {
  "batchId": "BATCH_2025_WK8",
  "totalOwners": 15,
  "totalAmount": 125000,
  "platformFee": 12500,
  "netPayout": 112500
}

// Payout Execution with Retry
POST /api/admin/payouts/batch/{batchId}/execute
Response: {
  "executionId": "EXEC_001",
  "status": "IN_PROGRESS",
  "successful": 12,
  "failed": 3,
  "retryPending": 3
}`,
  github: "https://github.com/Ankitsarwadkr/turf_Backend",
},
    {
      title: "Blog Application - RESTful Web App",
      period: "Jan 2025 – Mar 2025",
      description:
        "A secure REST API blogging platform with JWT-based authentication and role-based access control (Admin/User).",
      techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "Hibernate", "JUnit", "Mockito"],
      features: [
        "JWT-based authentication and role-based access control",
        "CRUD APIs for users, posts, comments, and likes with ownership checks",
        "Google OAuth2 integration for social authentication",
        "OpenAI API integration for automated category suggestions",
        "DTO-based mapping to separate database entities from API responses",
        "Unit testing using JUnit & Mockito for service layer validation"
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
      title: "Multilingual Services Shop",
      period: "Oct 2024 – Dec 2024",
      description:
        "A multilingual online services shop with Spring Boot backend, Google Translation API integration, and dynamic language switching (English/Marathi).",
      techStack: [
        "Spring Boot",
        "MySQL",
        "Google Translation API",
        "REST APIs",
        "HTML/CSS",
        "Tailwind CSS"
      ],
      features: [
        "Dynamic real-time language toggle between English and Marathi",
        "Admin panel for services catalog management (CRUD operations)",
        "RESTful API endpoints for fetching and managing services",
        "Database-driven multilingual content management",
        "Responsive design with Tailwind CSS for mobile compatibility",
        "Google Translation API integration for seamless translations",
        "Service enquiry form with email notifications"
      ],
      apiExample: `// Get Services API Response
GET /api/services

Response:
{
  "id": 24,
  "titleEn": "DSC Enrollment",
  "titleMr": "डीएससी नोंदणी",
  "descriptionEn": "DSC enrollment services available",
  "descriptionMr": "डीएससी नोंदणी सेवा उपलब्ध",
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