import { Code2, Database, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java (DSA)", "Python", "HTML", "CSS", "C"],
    color: "primary",
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: ["N8N", "Make", "Figma", "Canva", "GitHub"],
    color: "accent",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL"],
    color: "primary",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Time Management", "Interpersonal Skills", "Problem-Solving"],
    color: "accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up delay-100">
            What I Can Do
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isAccent = category.color === "accent";
            
            return (
              <div
                key={category.title}
                className="glass rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-smooth animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'}`}>
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth hover:scale-105 ${
                        isAccent 
                          ? 'bg-accent/10 text-accent' 
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        <div className="mt-12 text-center animate-fade-up delay-600">
          <h3 className="text-xl font-semibold text-foreground mb-4">Languages I Speak</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Tamil", "English", "French"].map((lang) => (
              <span
                key={lang}
                className="px-6 py-3 rounded-full bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
