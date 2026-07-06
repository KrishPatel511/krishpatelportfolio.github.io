import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "Real-time inventory tracking with live stock updates via WebSockets. Built with React 18, Node.js, Express, and Socket.io.",
    tags: ["React 18", "Node.js", "Socket.io", "Express"],
    githubUrl: "https://github.com/KrishPatel511/inventory-app",
    demoUrl: "#",
    gradient: "from-cyan-500/30 to-blue-500/10",
  },
  {
    id: 2,
    slug: "expense-tracker-fullstack",
    title: "Expense Tracker (Full-Stack)",
    description:
      "Full-stack expense tracker with face recognition login, JWT auth, NestJS backend, and MongoDB. React 18 frontend with Context API.",
    tags: ["React 18", "NestJS", "MongoDB", "face-api.js", "JWT"],
    githubUrl: "https://github.com/KrishPatel511/expense-tracker-Fullstack",
    demoUrl: "#",
    gradient: "from-purple-500/30 to-pink-500/10",
  },
  {
    id: 3,
    slug: "oracle-apex-enterprise-app",
    title: "Oracle APEX Enterprise App",
    description:
      "Enterprise-grade application on Oracle APEX with PL/SQL business logic, custom UI themes, and deep Oracle Database integration.",
    tags: ["Oracle APEX", "PL/SQL", "Oracle DB", "SQL"],
    githubUrl: "https://github.com/KrishPatel511",
    demoUrl: "#",
    gradient: "from-orange-500/30 to-red-500/10",
  },
];

export const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project reflects my
          experience in React.js, Oracle APEX, and full-stack development.
          Click any card to explore details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.slug}`)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient Banner */}
              <div className={`h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5" />
                <span className="text-4xl font-black text-foreground/10 group-hover:text-foreground/20 transition-colors duration-300 select-none">
                  {project.title.charAt(0)}
                </span>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    View Details →
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    Click to explore
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KrishPatel511"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
