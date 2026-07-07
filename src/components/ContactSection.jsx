import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "krishpatel51151@gmail.com",
    href: "mailto:krishpatel51151@gmail.com",
    color: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/10 text-blue-400",
    border: "hover:border-blue-500/40",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "Available on request",
    href: "#",
    color: "from-green-500/20 to-green-500/5",
    iconBg: "bg-green-500/10 text-green-400",
    border: "hover:border-green-500/40",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "India",
    href: "#",
    color: "from-orange-500/20 to-orange-500/5",
    iconBg: "bg-orange-500/10 text-orange-400",
    border: "hover:border-orange-500/40",
  },
];

const socials = [
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/krishpatel511",
    color: "hover:bg-blue-600 hover:border-blue-600",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/KrishPatel511",
    color: "hover:bg-gray-700 hover:border-gray-700",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    href: "mailto:krishpatel51151@gmail.com",
    color: "hover:bg-primary hover:border-primary",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <MessageSquare size={14} />
            Let's Talk
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open
            to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left Panel */}
          <div className="lg:col-span-2 space-y-5">

            {/* Contact Info Cards */}
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-300",
                  item.border,
                  "hover:shadow-md hover:-translate-y-0.5"
                )}
              >
                <div className={cn("p-3 rounded-xl flex-shrink-0 transition-all duration-300", item.iconBg)}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Connect with me</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className={cn(
                      "flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:text-white hover:scale-110 hover:shadow-lg",
                      s.color
                    )}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <p className="text-sm text-green-400 font-medium">
                Available for new opportunities
              </p>
            </div>
          </div>

          {/* Right Panel — Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Send size={18} className="text-primary" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 placeholder:text-muted-foreground/50"
                      placeholder="john@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none placeholder:text-muted-foreground/50"
                    placeholder="Hello Krish, I'd like to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all duration-300",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
