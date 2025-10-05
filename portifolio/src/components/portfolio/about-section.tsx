import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and professional
              journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Personal Info */}
            <Card className="card-professional lg:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Personal Info</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I’m a passionate and dedicated Python Full-Stack Developer,
                  recently graduated in 2024, developing a strong passion for
                  Full-Stack Development and Web Technologies I bring fresh
                  perspectives and a strong desire to apply modern development
                  practices to real-world projects. My growing interest in
                  software development comes from a curiosity about building
                  efficient, scalable, and user-focused web applications.
                </p>
                <br />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I thrive on learning new technologies and solving complex
                  problems. My approach combines technical expertise with
                  creative problem-solving to deliver high-quality solutions
                  that meet both user needs and business objectives.
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <div className="text-muted-foreground">Internship</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Education */}
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">
                      Bachelor of Electronics and Communication
                    </h4>
                    <p className="text-muted-foreground font-medium">
                      Anil Neerkonda Institute of Technology and Science's{" "}
                    </p>
                    <p className="text-sm text-muted-foreground">2020 - 2024</p>
                    <p className="text-muted-foreground mt-2">
                      Graduated with distinction, developing a strong passion
                      for Full-Stack Development and Web Technologies through
                      self-learning and hands-on projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Experience</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-primary">
                      PivotalSoft
                    </h4>
                    <p className="text-muted-foreground font-medium">
                      Intern
                    </p>
                    <p className="text-sm text-muted-foreground">
                      June 2025 - October 2025
                    </p>
                    <p className="text-muted-foreground mt-2">
                      During my project, I built a Django-based dashboard
                      integrated with frontend templates and MySQL, which
                      improved data accessibility, reporting efficiency, and
                      overall usability by 30%. I also designed and implemented
                      RESTful APIs to ensure seamless communication between the
                      frontend and backend systems. In addition, I developed a
                      responsive and user-friendly interface with secure
                      authentication, which enhanced the user experience and
                      reduced page load time by 20%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
