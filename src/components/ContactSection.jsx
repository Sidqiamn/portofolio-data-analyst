import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import linkdin from "../../public/projects/linkdin.jpg";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      toast({ title: "Error", description: "Please fill in all fields before submitting." });
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm("service_mqii2bp", "template_omk1j4y", form, "YcMC8zJU0UE4bfYlC")
      .then(
        () => {
          toast({ title: "Message sent! 🎉", description: "Thank you! I'll get back to you soon." });
          form.reset();
        },
        () => {
          toast({ title: "Error", description: "Failed to send message. Please try again." });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactItems = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "shidqiamanullah.sa@gmail.com",
      href: "mailto:shidqiamanullah.sa@gmail.com",
      color: "#3b82f6",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+62 823-1983-0019",
      href: "tel:+6282319830019",
      color: "#10b981",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Garut, Indonesia",
      href: null,
      color: "#E97627",
    },
  ];

  return (
    <section
      data-aos="fade-down"
      id="contact"
      className="py-20 px-4 relative"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--secondary)/0.3) 0%, hsl(var(--background)) 100%)",
      }}
    >
      <div className="container mx-auto max-w-5xl">

        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60
                           border border-primary/20 px-4 py-1 rounded-full bg-primary/5">
            Contact
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto text-sm leading-relaxed">
          Punya project atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
          Selalu terbuka untuk peluang baru.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ── LEFT: Contact info ── */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>

            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                              transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.color + "15", color: item.color, border: `1.5px solid ${item.color}25` }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-foreground">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* LinkedIn */}
            <div className="pt-6 border-t border-border">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                Connect With Me
              </p>
              <a
                href="https://www.linkedin.com/in/sidqi-amanullah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-border
                           bg-card hover:border-blue-300 hover:bg-blue-50 transition-all duration-300
                           hover:-translate-y-0.5 hover:shadow-md group"
              >
                <img src={linkdin} className="h-7 rounded-md" alt="LinkedIn" />
                <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-blue-700 transition-colors">
                    Sidqi Amanullah
                  </div>
                  <div className="text-xs text-muted-foreground">linkedin.com/in/sidqi-amanullah</div>
                </div>
              </a>
            </div>

            {/* Quick links */}
            <div className="pt-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                Quick Links
              </p>
              <a
                href="https://projectshow-dataanalyst-uh28.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white
                           text-xs font-bold transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #E97627, #217346)",
                  boxShadow: "0 3px 12px rgba(233,118,39,0.25)",
                }}
              >
                📊 Data Analyst Showcase
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="bg-card rounded-2xl border border-border p-7 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Send a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background
                             text-sm focus:outline-none focus:ring-2 focus:ring-primary/30
                             focus:border-primary transition-all placeholder:text-muted-foreground/50"
                  placeholder="Sidqi Amanullah"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background
                             text-sm focus:outline-none focus:ring-2 focus:ring-primary/30
                             focus:border-primary transition-all placeholder:text-muted-foreground/50"
                  placeholder="anonym@gmail.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background
                             text-sm focus:outline-none focus:ring-2 focus:ring-primary/30
                             focus:border-primary transition-all resize-none
                             placeholder:text-muted-foreground/50"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-sm font-bold",
                  "disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
