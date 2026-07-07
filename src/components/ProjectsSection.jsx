import { ArrowRight, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "Real-time inventory tracking with live stock updates via WebSockets. Built with React 18, Node.js, Express, and Socket.io — no traditional database needed.",
    tags: ["React 18", "Node.js", "Socket.io", "Express"],
    githubUrl: "https://github.com/KrishPatel511/inventory-app",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    accent: "#06b6d4",
    accentClass: "from-cyan-500 to-blue-600",
    badgeClass: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    number: "01",
  },
  {
    id: 2,
    slug: "expense-tracker-fullstack",
    title: "Expense Tracker Full-Stack",
    description:
      "Full-stack expense tracker with face recognition login, JWT auth, NestJS TypeScript backend, and MongoDB. React 18 frontend with Context API state management.",
    tags: ["React 18", "NestJS", "MongoDB", "face-api.js", "JWT"],
    githubUrl: "https://github.com/KrishPatel511/expense-tracker-Fullstack",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    accent: "#a855f7",
    accentClass: "from-purple-500 to-pink-600",
    badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    number: "02",
  },
  {
    id: 3,
    slug: "oracle-apex-enterprise-app",
    title: "Oracle APEX Enterprise App",
    description:
      "Enterprise-grade application on Oracle APEX with complex PL/SQL business logic, custom UI themes, role-based access control, and deep Oracle Database integration.",
    tags: ["Oracle APEX", "PL/SQL", "Oracle DB", "SQL"],
    githubUrl: "https://github.com/KrishPatel511",
    demoUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#f97316",
    accentClass: "from-orange-500 to-red-600",
    badgeClass: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    number: "03",
  },
];

export const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work across full-stack development, real-time systems,
            and enterprise applications. Click any card to explore the full details.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/${project.slug}`)}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Gradient overlay bottom */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accentClass} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Project number */}
                <div className="absolute top-4 left-4">
                  <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-300 select-none leading-none">
                    {project.number}
                  </span>
                </div>

                {/* Top-right arrow icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>

                {/* Tags on image */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-xs font-medium rounded-full border backdrop-blur-sm ${project.badgeClass}`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full border backdrop-blur-sm bg-white/10 text-white border-white/20">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Accent line */}
                <div
                  className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${project.accentClass} mb-4 group-hover:w-16 transition-all duration-500`}
                />

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    View Details <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KrishPatel511"
          >
            View All on GitHub <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
