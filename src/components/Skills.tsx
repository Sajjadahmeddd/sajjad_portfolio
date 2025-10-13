import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Problem Solving & DSA",
      skills: [
        "Data Structures & Algorithms",
        "LeetCode (350+ problems)",
        "Competitive Programming",
        "Algorithm Optimization",
        "System Design Basics"
      ],
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300"
    },
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript", "SQL"],
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300"
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "OpenCV",
        "ResNet (Deep Learning)",
        "Computer Vision",
        "Face Recognition",
        "Image Processing",
        "pandas",
        "matplotlib",
        "NumPy",
        "Seaborn"
      ],
      color: "bg-green-500/10 text-green-700 dark:text-green-300"
    },
    {
      title: "Web Development",
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Flask (Python)",
        "Responsive Design"
      ],
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "VS Code",
        "POSTMAN API",
        "Google Colab",
        "n8n Automation",
        "pyttsx3 (TTS)"
      ],
      color: "bg-pink-500/10 text-pink-700 dark:text-pink-300"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for building intelligent applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.color} border-none`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Core Strengths</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Strong analytical mindset with 450+ coding problems solved across platforms. 
                Expertise in building ML-integrated full-stack applications with a focus on 
                computer vision, real-time processing, and creating intelligent, user-centric solutions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;