import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Github, Linkedin, Mail, MapPin, Phone, Download, Trophy, Code2, Star, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Sajjad Ahmed T A
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              ML-Integrated Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pre-Final Year Engineering Student specializing in AI-driven applications, 
              Computer Vision, and Problem Solving with 450+ DSA problems solved
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+918667497930" className="hover:text-primary transition-colors">
                +91 86674 97930
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:sajjad2k3ahmed@gmail.com" className="hover:text-primary transition-colors">
                sajjad2k3ahmed@gmail.com
              </a>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            <Card className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter end={450} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">DSA Problems</p>
            </Card>
            
            <Card className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">ML Projects</p>
            </Card>
            
            <Card className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter end={881} prefix="8." />
              </div>
              <p className="text-sm text-muted-foreground">CGPA</p>
            </Card>
            
            <Card className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button asChild size="lg" className="shadow-lg hover:shadow-glow transition-all">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/Sajjad_Ahmed_Resume.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://github.com/Sajjadahmeddd" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://www.linkedin.com/in/sajjad-ahmed-30969531a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;