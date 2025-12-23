import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-hero relative overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                👋 Hello, I'm
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-up delay-100">
              Ruchika P
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-6 animate-fade-up delay-200">
              Computer Science Student & 
              <span className="text-gradient-accent font-semibold"> AI Enthusiast</span>
            </p>
            
            <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              Passionate about building intelligent systems, exploring AI/ML solutions, 
              and creating impactful technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              <Button variant="hero" size="xl" onClick={scrollToProjects}>
                View My Work
                <ArrowDown className="ml-2" />
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="mailto:ruchikababurp@gmail.com">
                  <Mail className="mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8 animate-fade-up delay-500">
              <a 
                href="https://github.com/RuchikaBabu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://lnk.ink/kKkK6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:ruchikababurp@gmail.com"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-scale-in delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Ruchika P" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary-foreground/40" size={28} />
      </div>
    </section>
  );
};

export default Hero;
