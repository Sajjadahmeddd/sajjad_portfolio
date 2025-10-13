import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Education & Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Academic excellence and continuous learning
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">Bachelor of Information Technology</h3>
                      <p className="text-lg text-muted-foreground font-medium">
                        Easwari Engineering College
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-primary">CGPA: 8.81</p>
                      <p className="text-muted-foreground">2023 - 2027</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Pre-final year student specializing in AI, Machine Learning, and Full-Stack Development. 
                    Strong focus on Data Structures, Algorithms, and Computer Vision applications.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">12th Grade - Computer Science (PCM)</h3>
                      <p className="text-lg text-muted-foreground font-medium">
                        Dhanish Matriculation Higher Secondary School
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-primary">95%</p>
                      <p className="text-muted-foreground">2022 - 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">Java for AP Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Oracle</p>
                  </div>
                  <Badge variant="secondary">Certified</Badge>
                </div>
              </Card>

              <Card className="p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">Python Programming</h4>
                    <p className="text-sm text-muted-foreground">Elewayte (Pandas, NumPy, Matplotlib, Seaborn)</p>
                  </div>
                  <Badge variant="secondary">Certified</Badge>
                </div>
              </Card>

              <Card className="p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">ML Engineering Internship</h4>
                    <p className="text-sm text-muted-foreground">Ethical Intelligent Technologies</p>
                  </div>
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20">
                    Extended Opportunity
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-lg">Hackathon Finalist</h4>
                    <p className="text-sm text-muted-foreground">SSN College of Engineering (12-hour event)</p>
                  </div>
                  <Badge className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-500/20">
                    Achievement
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;