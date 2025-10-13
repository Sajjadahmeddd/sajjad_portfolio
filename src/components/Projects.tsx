import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Web App for Contactless Attendance",
      description: "A comprehensive attendance management system leveraging face recognition technology for secure and efficient tracking.",
      details: [
        "Implemented face detection and recognition using OpenCV and ResNet-based deep learning model",
        "Real-time video processing with automated attendance logging",
        "Secure database integration ensuring fast, reliable, and duplicate-free records",
        "Web-based interface for easy access and management"
      ],
      tags: ["OpenCV", "ResNet", "Deep Learning", "Flask", "Python", "Face Recognition"],
      featured: true
    },
    {
      title: "Neuro Assist AI with Face Recognition & TTS",
      description: "An innovative assistive tool designed to help neurodivergent students improve attention and engagement through AI.",
      details: [
        "Built face detection system using OpenCV for real-time attention tracking",
        "Integrated pyttsx3 for text-to-speech voice output and feedback",
        "Real-time feedback system to improve student attention and engagement",
        "Developing performance analysis dashboard for individual tracking and insights"
      ],
      tags: ["OpenCV", "AI", "TTS", "pyttsx3", "Flask", "Accessibility"],
      featured: true
    },
    {
      title: "Fall Detection System",
      description: "Real-time fall detection system for elderly care and safety monitoring applications.",
      details: [
        "Computer vision-based fall detection using pose estimation",
        "Real-time alert system for immediate response",
        "Designed for healthcare and elderly care facilities",
        "Part of ML solutions platform for client showcasing"
      ],
      tags: ["Computer Vision", "OpenCV", "Safety", "Healthcare"],
      featured: false
    },
    {
      title: "Construction Site Safety Monitor",
      description: "Helmet detection system ensuring worker safety compliance on construction sites.",
      details: [
        "Real-time helmet detection using object detection models",
        "Automated safety compliance reporting",
        "Alert system for safety violations",
        "Scalable solution for large construction sites"
      ],
      tags: ["Object Detection", "Safety", "Computer Vision", "OpenCV"],
      featured: false
    },
    {
      title: "Crime Spot Analyzer",
      description: "Predictive analytics system for analyzing crime patterns and trends.",
      details: [
        "Analysis based on time, area, and historical crime data",
        "Visualization of crime hotspots and patterns",
        "Predictive modeling for crime prevention",
        "Data-driven insights for law enforcement"
      ],
      tags: ["Data Analysis", "Machine Learning", "Python", "pandas", "matplotlib"],
      featured: false
    },
    {
      title: "Image Color Picker Tool",
      description: "Utility application for extracting and analyzing color palettes from images.",
      details: [
        "Color extraction and palette generation",
        "Hex, RGB, and HSL color code support",
        "User-friendly interface for designers and developers",
        "Integration with image processing workflows"
      ],
      tags: ["OpenCV", "Python", "Image Processing", "UI/UX"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Innovative AI and ML solutions solving real-world problems
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`p-8 space-y-6 hover:shadow-xl transition-all hover:-translate-y-1 ${
                  project.featured ? 'border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        {project.featured && (
                          <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                        )}
                      </div>
                      <p className="text-lg text-muted-foreground">{project.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Want to see more?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, contributions, and code samples
              </p>
              <Button asChild size="lg" className="shadow-lg hover:shadow-glow transition-all">
                <a 
                  href="https://github.com/Sajjadahmeddd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Visit GitHub Profile
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;