import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Code2, 
  Brain,
  Calendar,
  ChevronRight,
  ChevronDown
} from "lucide-react";

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'work' | 'achievement' | 'project';
  skills?: string[];
  expanded?: boolean;
}

const InteractiveTimeline = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const timelineData: TimelineItem[] = [
    {
      id: "1",
      date: "June 2025 - Present",
      title: "ML Engineering Intern",
      subtitle: "Ethical Intelligent Technologies",
      description: "Currently developing an Indoor Tracking System using BLE technology and creating a comprehensive ML solutions platform featuring face recognition, fall detection, safety monitoring, and crime analytics systems.",
      type: "work",
      skills: ["Computer Vision", "OpenCV", "ResNet", "BLE Technology", "Flask", "Python"]
    },
    {
      id: "2", 
      date: "2025",
      title: "Hackathon Finalist",
      subtitle: "SSN College of Engineering",
      description: "Achieved finalist position in a competitive 12-hour hackathon, demonstrating problem-solving skills and ability to work under pressure while building innovative solutions.",
      type: "achievement",
      skills: ["Team Leadership", "Problem Solving", "Innovation"]
    },
    {
      id: "3",
      date: "2024-2025",
      title: "Smart Attendance & Neuro Assist AI",
      subtitle: "Featured Projects Development", 
      description: "Built contactless attendance system using face recognition with OpenCV and ResNet. Developed Neuro Assist AI for neurodivergent students with attention tracking and TTS feedback.",
      type: "project",
      skills: ["OpenCV", "Deep Learning", "ResNet", "TTS", "Flask", "AI/ML"]
    },
    {
      id: "4",
      date: "2023-2024",
      title: "Competitive Programming Journey",
      subtitle: "450+ Problems Solved",
      description: "Achieved significant milestone in problem-solving with 450+ DSA problems solved across multiple platforms including LeetCode (350+), building strong algorithmic thinking and optimization skills.",
      type: "achievement", 
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Java", "Python"]
    },
    {
      id: "5",
      date: "2023 - 2027",
      title: "Bachelor of Information Technology",
      subtitle: "Easwari Engineering College",
      description: "Currently pursuing B.Tech in Information Technology with CGPA 8.81. Specializing in AI, Machine Learning, Computer Vision, and Full-Stack Development with strong focus on practical applications.",
      type: "education",
      skills: ["AI/ML", "Computer Vision", "Full-Stack Development", "Database Systems"]
    },
    {
      id: "6",
      date: "2022-2023", 
      title: "12th Grade - Computer Science",
      subtitle: "Dhanish Matriculation Higher Secondary School",
      description: "Completed higher secondary education with 95% marks in PCM+Computer Science stream, building strong foundation in mathematics, physics, and programming concepts.",
      type: "education",
      skills: ["Mathematics", "Physics", "Computer Science", "Programming Fundamentals"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      case 'work':
        return <Briefcase className="h-5 w-5" />;
      case 'achievement':
        return <Trophy className="h-5 w-5" />;
      case 'project':
        return <Brain className="h-5 w-5" />;
      default:
        return <Code2 className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20";
      case 'work':
        return "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20";
      case 'achievement':
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-500/20";
      case 'project':
        return "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/20";
    }
  };

  return (
    <section id="journey" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">My Journey</h2>
            <p className="text-xl text-muted-foreground">
              Interactive timeline of my learning, growth, and achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary"></div>

            <div className="space-y-8">
              {timelineData.map((item, index) => {
                const isExpanded = expandedItems.has(item.id);
                
                return (
                  <div key={item.id} className="relative">
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-5 h-5 rounded-full border-2 border-background ${getTypeColor(item.type)} flex items-center justify-center z-10`}>
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                    </div>

                    <Card className="ml-16 p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3 flex-wrap">
                              <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                                {getIcon(item.type)}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground font-medium">{item.subtitle}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{item.date}</span>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpanded(item.id)}
                            className="flex-shrink-0"
                          >
                            {isExpanded ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </Button>
                        </div>

                        <p className="text-muted-foreground">
                          {isExpanded ? item.description : `${item.description.substring(0, 120)}...`}
                        </p>

                        {isExpanded && item.skills && (
                          <div className="space-y-3 pt-4 border-t">
                            <h4 className="font-semibold text-sm">Key Skills & Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <Badge
                                  key={skillIndex}
                                  variant="secondary"
                                  className={getTypeColor(item.type)}
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;