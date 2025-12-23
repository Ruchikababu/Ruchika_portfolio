import { ExternalLink, Github, Heart, Brain, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "MAC - Medical Assistance & Care",
    description: "A real-time platform ensuring immediate access to hospitals. Features include emergency response coordination, hospital availability tracking, and seamless patient-hospital communication.",
    icon: Heart,
    tags: ["Healthcare", "Real-time", "Platform"],
    gradient: "from-rose-500 to-pink-500",
    achievement: "🏆 2nd Prize at Inter-college Project Expo • 3rd Place at National Symposium",
  },
  {
    title: "AI Based EV Optimization System",
    description: "An intelligent system that uses AI to optimize electric vehicle performance and efficiency. Leverages machine learning algorithms for battery management, route optimization, and energy consumption analysis.",
    icon: Brain,
    tags: ["AI/ML", "Electric Vehicles", "Optimization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Enhanced Meal Planner",
    description: "Smart AI meal planner that generates recipes tailored to your diet, allergies, and nutrition goals. Uses AI to create personalized meal plans with nutritional analysis.",
    icon: Utensils,
    tags: ["AI", "Health Tech", "Personalization"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-up delay-100">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-smooth animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Header with gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-10 -right-5 w-24 h-24 bg-white/10 rounded-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.achievement && (
                    <div className="mb-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <p className="text-xs text-accent font-medium">{project.achievement}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 animate-fade-up delay-500">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/RuchikaBabu" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
