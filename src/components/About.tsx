import { Card } from "@/components/ui/card";
import { Code2, Brain, Trophy, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground">
              Passionate developer with a strong foundation in problem-solving and AI
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I'm a pre-final year Information Technology student at Easwari Engineering College 
              with a strong passion for building innovative solutions. My journey in tech combines 
              deep problem-solving skills with cutting-edge AI and computer vision technologies.
            </p>
            <p className="text-lg leading-relaxed">
              Currently working as an intern at Ethical Intelligent Technologies, where I'm developing 
              ML-powered solutions for real-world problems including face recognition systems, fall detection, 
              safety monitoring, and crime analytics - all part of a comprehensive ML showcase platform 
              for potential clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Problem Solving Expertise</h3>
                  <p className="text-muted-foreground">
                    Solved 350+ problems on LeetCode and 450+ problems across various platforms. 
                    Strong foundation in Data Structures and Algorithms with efficient problem-solving skills.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">AI & ML Focus</h3>
                  <p className="text-muted-foreground">
                    Specialized in Computer Vision using OpenCV and ResNet. Building ML-integrated 
                    full-stack applications with React.js and Flask to create intelligent, user-friendly solutions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Achievements</h3>
                  <p className="text-muted-foreground">
                    CGPA: 8.81 | 95% in 12th Grade | Hackathon Finalist at SSN College of Engineering | 
                    Multiple certifications in Java and Python
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Beyond Code</h3>
                  <p className="text-muted-foreground">
                    Football is my passion and hobby outside of technology. The teamwork, strategy, 
                    and dedication required in football mirror the collaborative spirit I bring to software development.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;