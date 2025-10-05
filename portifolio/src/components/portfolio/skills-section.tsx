import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Layers,
  Settings
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
      title: "Frontend Development", 
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Vue js"]
    },
    {
      title: "Development Tools",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Git", "GitHub", "MySQL Workbench", "VS Code", "Postman", "npm", "WhiteNoise"]
    },
    {
      title: "Methodologies",
      icon: <Layers className="h-6 w-6" />,
      skills: ["RESTful APIs", "MVC Architecture", "Responsive Web Design"]
    }
  ];

  const technicalSkills = [
    { name: "Python", level: 80 },
    { name: "Django", level: 75 },
    { name: "React", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "Git", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "REST APIs", level: 80 }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and development capabilities
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-professional group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold ml-3">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Levels */}
          <Card className="card-professional">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};