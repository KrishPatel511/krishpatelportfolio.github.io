import { Briefcase, Code, Database, GraduationCap } from "lucide-react";

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "5+", label: "Projects Built" },
   { value: "10+", label: "Technologies" },
  { value: "MCA", label: "Post Graduate" },
 
];

const experiences = [
  {
    role: "Software Developer",
    period: "March 2026 – Present",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  },
  {
    role: "Junior Oracle APEX Developer",
    period: "April 2025 – February 2026",
    icon: <Database className="h-5 w-5 text-primary" />,
  },
  {
    role: "Web Developer Intern (React.js)",
    period: "December 2024 – April 2025",
    icon: <Code className="h-5 w-5 text-primary" />,
  },
  {
    role: "MCA – Master of Computer Applications",
    period: "2023 – 2025",
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
  },
];

const cards = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Frontend Development",
    desc: "Building responsive, dynamic web apps using React.js, modern JavaScript, and component-driven architecture.",
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Backend Development",
    desc: "Designing REST APIs and server-side logic with Node.js, NestJS, MongoDB, PostgreSQL, and Oracle.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Enterprise (Oracle APEX)",
    desc: "Delivering enterprise-grade apps with Oracle APEX and PL/SQL, including government systems with hardware integrations.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/50 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl font-black text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Bio + Buttons */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Full Stack Developer</h3>

            <p className="text-muted-foreground leading-relaxed">
              A Full Stack Developer with <span className="text-foreground font-medium">1.5+ years</span> of
              hands-on experience in React.js, Node.js, NestJS, and Oracle APEX. I've worked on
              enterprise-grade government projects involving complex business workflows, REST API
              integrations, and end-to-end application development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I hold an <span className="text-foreground font-medium">MCA (2025)</span> and{" "}
              <span className="text-foreground font-medium">BCA (2022)</span>. Currently deepening
              my expertise in the Node.js ecosystem including NestJS and MongoDB.
            </p>

            {/* Timeline */}
            {/* <div className="space-y-3 pt-2">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors duration-200"
                >
                  <div className="p-2 rounded-full bg-primary/10 mt-0.5 flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{exp.role}</p>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="https://github.com/KrishPatel511"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right — Skill Cards */}
          <div className="grid grid-cols-1 gap-5">
            {cards.map((card, i) => (
              <div key={i} className="gradient-border p-6 card-hover rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-1">{card.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
