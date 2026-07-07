import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Avatar */}
          <div className="flex justify-center mb-2 opacity-0 animate-fade-in">
            <div className="relative">
              <div className="w-24 h-24 rounded-full ring-4 ring-primary/40 shadow-lg shadow-primary/30 overflow-hidden">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=KrishPatel&backgroundColor=b6e3f4,c0aede&top=shortHair,shortHairShortFlat,shortHairShortRound&facialHairType=blank&accessories=blank&clotheType=hoodie,blazerShirt&eyeType=happy,wink&mouthType=smile,twinkle"
                  alt="Krish Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-background" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Krish </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">Patel</span>
          </h1>

          {/* Typing role */}
          <div className="h-8 flex items-center justify-center opacity-0 animate-fade-in-delay-3">
            <span className="text-lg md:text-xl font-medium text-primary">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full Stack Developer with <span className="text-foreground font-semibold">1.5+ years</span> of experience
            crafting end-to-end web solutions with React, Node.js, NestJS, and Oracle APEX.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 pt-2 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://github.com/KrishPatel511"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 text-muted-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/krishpatel511"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 text-muted-foreground"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:krishpatel51151@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 text-muted-foreground"
            >
              <Mail size={20} />
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
