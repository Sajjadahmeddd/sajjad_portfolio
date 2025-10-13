import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, Calendar, Code2, Trophy, Users } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const technicalProfiles = [
    {
      name: "LeetCode",
      username: "sajjadahmeddd",
      url: "https://leetcode.com/sajjadahmeddd/",
      icon: Code2,
      description: "450+ Problems Solved",
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20"
    },
    {
      name: "HackerRank",
      username: "sajjadahmeddd",
      url: "https://www.hackerrank.com/sajjadahmeddd",
      icon: Trophy,
      description: "Problem Solving Expert",
      color: "bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20"
    },
    {
      name: "CodeChef",
      username: "sajjadahmeddd",
      url: "https://www.codechef.com/users/sajjadahmeddd",
      icon: Users,
      description: "Competitive Programmer",
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20"
    }
  ];

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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Send me a message</h3>
                <p className="text-muted-foreground">
                  I'd love to hear from you! Let's discuss your ideas and how we can work together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me more about your project or idea..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full shadow-lg hover:shadow-glow transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Info & Profiles */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:sajjad2k3ahmed@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">sajjad2k3ahmed@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+918667497930"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91 86674 97930</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3 rounded-lg">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Chennai, India</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Calendar Booking */}
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Schedule a Meeting</h3>
                <p className="text-muted-foreground text-sm">
                  Book a 30-minute technical discussion to explore collaboration opportunities.
                </p>
                <Button asChild className="w-full" variant="outline">
                  <a 
                    href="https://calendly.com/sajjadahmeddd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Book a Call
                  </a>
                </Button>
              </Card>

              {/* Technical Profiles */}
              <Card className="p-6 space-y-6">
                <h3 className="text-xl font-bold">Technical Profiles</h3>
                
                <div className="space-y-3">
                  {technicalProfiles.map((profile) => (
                    <Button
                      key={profile.name}
                      asChild
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-4 hover:shadow-md transition-all"
                    >
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <profile.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">{profile.name}</p>
                          <p className="text-sm text-muted-foreground">{profile.description}</p>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Connect With Me</h3>
                
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="icon">
                    <a 
                      href="https://github.com/Sajjadahmeddd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a 
                      href="https://www.linkedin.com/in/sajjad-ahmed-30969531a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild className="flex-1">
                    <a 
                      href="/Sajjad_Ahmed_Resume.pdf" 
                      download
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <div className="pt-8 border-t text-center">
            <p className="text-muted-foreground">
              Open to opportunities in ML Engineering, Full-Stack Development, and AI-driven solutions. 
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;