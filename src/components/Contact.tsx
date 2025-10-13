import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's connect and discuss how we can work together
            </p>
          </div>

          <Card className="p-8 md:p-12 space-y-8 bg-gradient-to-br from-card to-secondary/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:sajjad2k3ahmed@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">sajjad2k3ahmed@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+918667497930"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 86674 97930</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Chennai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Connect With Me</h3>
                
                <div className="space-y-4">
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start text-left h-auto p-4"
                  >
                    <a 
                      href="https://github.com/Sajjadahmeddd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">GitHub</p>
                        <p className="font-medium">@Sajjadahmeddd</p>
                      </div>
                    </a>
                  </Button>

                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full justify-start text-left h-auto p-4"
                  >
                    <a 
                      href="https://www.linkedin.com/in/sajjad-ahmed-30969531a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                        <p className="font-medium">Sajjad Ahmed</p>
                      </div>
                    </a>
                  </Button>

                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full shadow-lg hover:shadow-glow transition-all"
                  >
                    <a 
                      href="/Sajjad_Ahmed_Resume.pdf" 
                      download
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t text-center">
              <p className="text-muted-foreground">
                Open to opportunities in ML Engineering, Full-Stack Development, and AI-driven solutions. 
                Let's build something amazing together!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;