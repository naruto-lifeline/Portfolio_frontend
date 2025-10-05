import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Resume Analyzer",
      description: "Developed a web app to extract and analyze PDF/DOCX resumes, using Python and spaCy to match skills and experience against job requirements. Built a Django backend with REST APIs and a React frontend, streamlining recruitment insights and decision-making.",
      technologies: ["Django", "React", "MySQL", "REST API", "Tailwind CSS", "spaCy", "Python"],
      githubUrl: "https://github.com/naruto-lifeline?tab=repositories",
      // liveUrl: "",
      highlights: ["NLP-spaCy", "Responsive Design", "User Authentication"]
    },
    {
      title: "Box Cricket Web Application",
      description: "Developed a full-stack web application for booking and managing box cricket matches. Built a React frontend for user-friendly navigation and live booking, and a Django backend with MySQL for match scheduling, payment processing, and venue management. Implemented dynamic APIs for smooth interaction between frontend and backend, enhancing user experience and operational efficiency.",
      technologies: ["Django", "React", "MYSQL", "Django Restframework", "CSS3"],
      githubUrl: "https://github.com/naruto-lifeline?tab=repositories",
      // liveUrl: "",
      highlights: ["Slot Booking", "User Authentication", "Responsive Design", "Payment Integration"]
    },
    {
      title: "Portfolio Website",
      description: "Built a personal portfolio website using Vite for a fast, responsive frontend and Django for backend data management. Showcases projects, skills, and contact functionality with seamless interaction between frontend and backend, enhancing online professional presence.",
      technologies: ["Django", "Django REST", "SQLite", "TypeScript", "JavaScript", "Python","Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/naruto-lifeline?tab=repositories",
      // liveUrl: "",
      highlights: ["RESTful API"," Responsive Design","API Integration"]
    },
    {
      title: "Weather App",
      description: "Developed an interactive weather application using HTML, CSS, and JavaScript that fetches real-time data from the OpenWeather API. Dynamically updates background visuals based on user-selected cities, providing a visually engaging and accurate weather experience.",
      technologies: ["HTML", "JavaScript"," CSS3", "API"],
      githubUrl: "https://github.com/naruto-lifeline?tab=repositories",
      // liveUrl: "",
      highlights: ["API Key", "Real-time weather data", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work, demonstrating expertise in full-stack technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-professional group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </span>
                    <Code className="h-5 w-5 text-primary" />
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <Badge 
                          key={highlightIndex} 
                          className="bg-success/10 text-success border-success/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {/* <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://github.com/naruto-lifeline', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};