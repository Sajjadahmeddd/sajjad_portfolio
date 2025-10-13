import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <InteractiveTimeline />
      <Education />
      <Contact />
      
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sajjad Ahmed T A. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
