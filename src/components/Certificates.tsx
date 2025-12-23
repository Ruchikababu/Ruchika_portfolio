import { Award, Trophy, Medal, Cpu } from "lucide-react";

const certificates = [
  {
    title: "Java Certification",
    issuer: "Skill Intern",
    icon: Award,
    type: "certification",
  },
  {
    title: "2nd Prize - Inter-college Project Expo",
    description: "Secured 2nd prize for MAC (Medical Assistance & Care) project",
    icon: Trophy,
    type: "achievement",
  },
  {
    title: "3rd Place - National Level Symposium",
    description: "Achieved 3rd place at Sree Sakthi College for presenting MAC project",
    icon: Medal,
    type: "achievement",
  },
  {
    title: "Paper Presentation",
    description: "Participated in paper presentation event at Karpagam College",
    icon: Award,
    type: "participation",
  },
  {
    title: "Arduino Board Boot Camp",
    description: "Participated in inter-college Arduino board boot camp",
    icon: Cpu,
    type: "participation",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up delay-100">
            Certificates & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            const isAchievement = cert.type === "achievement";
            
            return (
              <div
                key={cert.title}
                className={`glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-smooth group animate-fade-up ${
                  isAchievement ? 'md:col-span-1' : ''
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                    isAchievement ? 'bg-gradient-accent' : 'bg-gradient-primary'
                  } group-hover:scale-110 transition-smooth`}>
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-smooth">
                      {cert.title}
                    </h3>
                    {cert.issuer && (
                      <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                    )}
                    {cert.description && (
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Internship */}
        <div className="mt-12 max-w-2xl mx-auto animate-fade-up delay-700">
          <div className="glass rounded-2xl p-8 shadow-soft text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Internship Experience
            </span>
            <h3 className="text-2xl font-bold text-foreground mb-2">Java Developer Intern</h3>
            <p className="text-primary font-medium mb-2">Esoft IT Solution, Trichy</p>
            <p className="text-muted-foreground">
              Gained hands-on experience in Java development, working on real-world projects 
              and enhancing problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
