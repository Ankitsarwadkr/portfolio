import { Network } from "lucide-react";

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-accent">$</span>
          <Network className="w-6 h-6 text-primary" />
          Backend Architecture
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
            <span className="text-xs text-muted-foreground ml-2">architecture.flow</span>
          </div>
          
          <div className="p-6 md:p-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Request Flow Architecture</h3>
              <div className="code-block text-xs md:text-sm">
                <pre>
{`
┌─────────┐      HTTP      ┌────────────┐      ┌────────────┐
│         │   Request      │            │      │            │
│  Client │ ────────────> │   Servlet  │ ───> │ Controller │
│         │                │  Container │      │   Layer    │
└─────────┘                └────────────┘      └─────┬──────┘
     ▲                                               │
     │                                               ▼
     │                                         ┌────────────┐
     │         JSON Response                   │  Service   │
     └───────────────────────────────────────  │   Layer    │
                                                └─────┬──────┘
                                                      │
                                                      ▼
                                                ┌────────────┐
                                                │ Repository │
                                                │   Layer    │
                                                └─────┬──────┘
                                                      │
                                                      ▼
                                                ┌────────────┐
                                                │   MySQL    │
                                                │  Database  │
                                                └────────────┘
`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Spring Boot Application Structure</h3>
              <div className="code-block text-xs md:text-sm">
                <pre>
{`
com.ankit.project
├── controller/
│   ├── UserController.java       // REST endpoints
│   ├── BookingController.java    // HTTP request handling
│   └── AdminController.java      // Request validation
│
├── service/
│   ├── UserService.java          // Business logic
│   ├── BookingService.java       // Transaction management
│   └── EmailService.java         // Core functionality
│
├── repository/
│   ├── UserRepository.java       // Data access
│   ├── BookingRepository.java    // CRUD operations
│   └── TurfRepository.java       // Database queries
│
├── model/
│   ├── User.java                 // Entity classes
│   ├── Booking.java              // Database mapping
│   └── Turf.java                 // Data models
│
└── config/
    ├── SecurityConfig.java       // Security setup
    └── DatabaseConfig.java       // DB configuration
`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">API Request Example</h3>
              <div className="code-block text-xs md:text-sm">
                <pre>
{`// POST /api/bookings - Create new booking

@PostMapping("/api/bookings")
public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest request) {
    // 1. Controller receives HTTP request
    // 2. Validates request parameters
    
    // 3. Service layer handles business logic
    Booking booking = bookingService.createBooking(request);
    
    // 4. Repository saves to database
    // 5. Response sent back to client
    return ResponseEntity.ok(booking);
}

// Request Flow:
// Client → Controller → Service → Repository → Database
// Database → Repository → Service → Controller → Client
`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Database Schema Example</h3>
              <div className="code-block text-xs md:text-sm">
                <pre>
{`users                    bookings                turfs
├── id (PK)              ├── id (PK)              ├── id (PK)
├── username             ├── user_id (FK)         ├── name
├── email                ├── turf_id (FK)         ├── location
├── password             ├── date                 ├── price_per_hour
├── role                 ├── time_slot            ├── capacity
└── created_at           ├── status               └── available
                         └── created_at

Relationships:
users (1) ───< bookings >─── (1) turfs
         1:N             N:1
`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
