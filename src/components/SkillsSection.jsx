import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "from-cyan-400/20 to-cyan-400/5",
    border: "hover:border-cyan-400/50",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "from-yellow-400/20 to-yellow-400/5",
    border: "hover:border-yellow-400/50",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "from-orange-500/20 to-orange-500/5",
    border: "hover:border-orange-500/50",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "from-blue-500/20 to-blue-500/5",
    border: "hover:border-blue-500/50",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "from-teal-400/20 to-teal-400/5",
    border: "hover:border-teal-400/50",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "from-blue-600/20 to-blue-600/5",
    border: "hover:border-blue-600/50",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "from-green-500/20 to-green-500/5",
    border: "hover:border-green-500/50",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "from-gray-400/20 to-gray-400/5",
    border: "hover:border-gray-400/50",
  },
  {
    name: "NestJS",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    color: "from-red-500/20 to-red-500/5",
    border: "hover:border-red-500/50",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "from-green-600/20 to-green-600/5",
    border: "hover:border-green-600/50",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "from-blue-700/20 to-blue-700/5",
    border: "hover:border-blue-700/50",
  },
  {
    name: "SQL / PL-SQL",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    color: "from-red-600/20 to-red-600/5",
    border: "hover:border-red-600/50",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "hover:border-emerald-500/50",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "from-orange-600/20 to-orange-600/5",
    border: "hover:border-orange-600/50",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "from-gray-500/20 to-gray-500/5",
    border: "hover:border-gray-500/50",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "from-blue-500/20 to-blue-500/5",
    border: "hover:border-blue-500/50",
  },
  {
    name: "Postman",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    color: "from-orange-500/20 to-orange-500/5",
    border: "hover:border-orange-500/50",
  },
  {
    name: "Oracle DB",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    color: "from-red-500/20 to-red-500/5",
    border: "hover:border-red-500/50",
  },
  {
    name: "Mongoose",
    category: "tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "from-green-500/20 to-green-500/5",
    border: "hover:border-green-500/50",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "group relative bg-card rounded-xl p-5 border border-border transition-all duration-300",
                "hover:scale-105 hover:shadow-lg cursor-default",
                skill.border
              )}
            >
              {/* Gradient background on hover */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  skill.color
                )}
              />

              <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-background/60 p-2 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <span
                    className="hidden w-10 h-10 items-center justify-center text-lg font-bold text-primary"
                  >
                    {skill.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-semibold text-foreground leading-tight">
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
