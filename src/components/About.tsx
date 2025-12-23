import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up delay-100">
            Get to Know Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 shadow-soft animate-fade-up delay-200">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a passionate <span className="text-primary font-semibold">Computer Science Engineering</span> student 
              at SNS College of Technology, Coimbatore. With a strong foundation in programming and a keen interest 
              in <span className="text-accent font-semibold">Artificial Intelligence</span> and 
              <span className="text-accent font-semibold"> Automation</span>, I'm constantly exploring new technologies 
              and building innovative solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My journey includes developing AI-powered systems for healthcare, electric vehicles, and personalized 
              nutrition. I believe in the power of technology to create meaningful impact and am always eager to 
              learn and contribute to exciting projects.
            </p>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <span>Trichy, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <span>+91 6379118254</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <span>ruchikababurp@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="text-primary" size={18} />
                </div>
                <span>B.E CSE (2023 - 2027)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
