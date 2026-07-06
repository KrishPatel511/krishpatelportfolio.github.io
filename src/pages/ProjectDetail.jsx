import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const projectsData = {
  "inventory-management-system": {
    title: "Inventory Management System",
    description:
      "A real-time inventory management system built with React 18 and Node.js. Features live stock updates via WebSockets, product CRUD operations, and a clean dashboard interface — all without a traditional database, using in-memory JS arrays for fast prototyping.",
    githubUrl: "https://github.com/KrishPatel511/inventory-app",
    demoUrl: "#",
    tags: ["React 18", "Vite", "Node.js", "Express", "Socket.io", "Axios"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "text-cyan-400",
    techStack: [
      {
        layer: "Frontend",
        items: [
          { label: "Framework", value: "React 18 (Vite)" },
          { label: "HTTP Client", value: "Axios" },
        ],
      },
      {
        layer: "Backend",
        items: [
          { label: "Runtime", value: "Node.js" },
          { label: "Framework", value: "Express" },
        ],
      },
      {
        layer: "Real-time",
        items: [{ label: "WebSockets", value: "Socket.io" }],
      },
      {
        layer: "Database",
        items: [{ label: "Storage", value: "In-memory (JS arrays, no DB)" }],
      },
    ],
    highlights: [
      "Real-time stock updates using Socket.io WebSockets",
      "Full CRUD operations for inventory items",
      "Live dashboard with instant UI sync across clients",
      "Lightweight architecture — no database setup required",
      "RESTful API with Express.js backend",
    ],
  },
  "expense-tracker-fullstack": {
    title: "Expense Tracker (Full-Stack)",
    description:
      "A full-stack expense tracking application with face recognition login, JWT authentication, and a NestJS + MongoDB backend. Users can register, log in via face recognition or credentials, and manage their expenses with a clean React frontend.",
    githubUrl: "https://github.com/KrishPatel511/expense-tracker-Fullstack",
    demoUrl: "#",
    tags: ["React 18", "NestJS", "MongoDB", "JWT", "face-api.js", "TypeScript"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-purple-400",
    techStack: [
      {
        layer: "Frontend",
        items: [
          { label: "Framework", value: "React 18 + Vite 5" },
          { label: "Routing", value: "React Router DOM v6" },
          { label: "HTTP Client", value: "Axios" },
          { label: "Face Recognition", value: "face-api.js 0.22 (in-browser)" },
          { label: "Styling", value: "Pure CSS (custom)" },
          { label: "State", value: "React Context API" },
        ],
      },
      {
        layer: "Backend",
        items: [
          { label: "Framework", value: "NestJS 10 (TypeScript)" },
          { label: "Database", value: "MongoDB via Mongoose 8" },
          { label: "Auth", value: "Passport.js + JWT" },
          { label: "Password Hashing", value: "bcrypt" },
          { label: "Validation", value: "class-validator + class-transformer" },
          { label: "Config", value: "@nestjs/config (.env)" },
        ],
      },
    ],
    highlights: [
      "Face recognition login using face-api.js (runs entirely in-browser)",
      "JWT-based authentication with Passport.js",
      "NestJS TypeScript backend with modular architecture",
      "MongoDB with Mongoose for persistent data storage",
      "Secure password hashing with bcrypt",
      "React Context API for global state management",
    ],
  },
  "oracle-apex-enterprise-app": {
    title: "Oracle APEX Enterprise App",
    description:
      "An enterprise-grade application developed on Oracle Application Express (APEX) platform. Features complex PL/SQL business logic, custom UI themes, and deep Oracle Database integration for robust data management.",
    githubUrl: "https://github.com/KrishPatel511",
    demoUrl: "#",
    tags: ["Oracle APEX", "PL/SQL", "Oracle DB", "SQL", "JavaScript"],
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
    accentColor: "text-orange-400",
    techStack: [
      {
        layer: "Platform",
        items: [
          { label: "Framework", value: "Oracle APEX" },
          { label: "Database", value: "Oracle Database" },
        ],
      },
      {
        layer: "Backend Logic",
        items: [
          { label: "Language", value: "PL/SQL" },
          { label: "Queries", value: "SQL" },
        ],
      },
      {
        layer: "Frontend",
        items: [{ label: "Scripting", value: "JavaScript (APEX plugins)" }],
      },
    ],
    highlights: [
      "Built on Oracle Application Express (APEX) low-code platform",
      "Complex PL/SQL stored procedures and triggers",
      "Custom UI themes and interactive reports",
      "Role-based access control and security",
      "Deep Oracle Database integration",
    ],
  },
};

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button onClick={() => navigate("/")} className="cosmic-button">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <div className={`relative w-full py-24 px-4 bg-gradient-to-br ${project.gradient} border-b border-border`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/5 animate-pulse"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                top: `${10 + i * 12}%`,
                left: `${5 + i * 15}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">{project.description}</p>

          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="cosmic-button flex items-center gap-2"
            >
              <Github size={18} /> View on GitHub
            </a>
            {project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Tech Stack */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <div className="space-y-6">
            {project.techStack.map((section) => (
              <div key={section.layer} className="gradient-border p-5 rounded-lg">
                <h3 className={`font-semibold text-sm uppercase tracking-wider mb-3 ${project.accentColor}`}>
                  {section.layer}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground text-right max-w-[55%]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Key <span className="text-primary">Highlights</span>
          </h2>
          <ul className="space-y-4">
            {project.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-5 rounded-lg bg-card border border-border">
            <p className="text-sm text-muted-foreground mb-3">Explore the source code</p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-primary hover:underline font-medium text-sm break-all"
            >
              <Github size={16} />
              {project.githubUrl}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
