import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "SNS College of Technology, Coimbatore",
    period: "2023 - 2027",
    current: true,
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    field: "Science Stream",
    institution: "Government Girls Hr Sec School, Thathiyengarpet",
    period: "2022 - 2023",
    current: false,
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    field: "General Education",
    institution: "Sowdambikka Matric Hr Sec School, Thathiyengarpet",
    period: "2020 - 2021",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up delay-100">
            Academic Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="relative flex gap-6 mb-8 last:mb-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-2">
                  <div className={`w-4 h-4 rounded-full ${edu.current ? 'bg-gradient-accent shadow-accent' : 'bg-primary'} z-10`} />
                </div>

                {/* Card */}
                <div className={`flex-1 glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-smooth ${edu.current ? 'border-l-4 border-accent' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${edu.current ? 'bg-gradient-accent' : 'bg-gradient-primary'}`}>
                        <GraduationCap className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.field}</p>
                      </div>
                    </div>
                    
                    {edu.current && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
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

export default Education;
