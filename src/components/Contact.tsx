import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-up delay-100">
            Let's Connect
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto animate-fade-up delay-200">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up delay-300">
              <a 
                href="mailto:ruchikababurp@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Mail className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Email</p>
                  <p className="text-primary-foreground font-medium">ruchikababurp@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+916379118254"
                className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-smooth group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Phone className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Phone</p>
                  <p className="text-primary-foreground font-medium">+91 6379118254</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Location</p>
                  <p className="text-primary-foreground font-medium">Trichy, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center animate-fade-up delay-400">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">Find me on</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://github.com/RuchikaBabu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-smooth group"
                >
                  <div className="w-12 h-12 rounded-xl bg-foreground/90 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Github className="text-background" size={24} />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">GitHub</p>
                    <p className="text-primary-foreground/60 text-sm">@RuchikaBabu</p>
                  </div>
                </a>

                <a 
                  href="https://lnk.ink/kKkK6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-smooth group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium">LinkedIn</p>
                    <p className="text-primary-foreground/60 text-sm">Connect with me</p>
                  </div>
                </a>
              </div>

              <Button variant="hero" size="xl" className="mt-8" asChild>
                <a href="mailto:ruchikababurp@gmail.com">
                  <Send className="mr-2" size={20} />
                  Send a Message
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2024 Ruchika P. Built with passion & purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
