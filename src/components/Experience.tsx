import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            <p className="text-xl text-muted-foreground">
              Building innovative ML solutions for real-world applications
            </p>
          </div>

          <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-2xl font-bold">ML Engineering Intern</h3>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">
                    Ethical Intelligent Technologies
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>June 2025 - Present</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-primary">
                    Current Project: Indoor Tracking System
                  </h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Engineered an Indoor Tracking System using Bluetooth Low Energy (BLE) tags and Bluetooth gateways for accurate indoor movement tracking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Developed real-time data collection for location estimation with optimized signal strength calibration and strategic gateway placement</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <h4 className="text-lg font-semibold text-primary">
                    ML Solutions Platform Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating a comprehensive ML showcase platform where customers can explore and order various 
                    intelligent solutions for their business needs:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Contactless Attendance System:</strong> Face recognition-based attendance using OpenCV and ResNet with real-time processing and automated logging</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Fall Detection System:</strong> Real-time fall detection for elderly care and safety monitoring applications</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Construction Safety Monitor:</strong> Helmet detection system for construction sites ensuring worker safety compliance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Image Color Picker Tool:</strong> Utility for extracting and analyzing color palettes from images</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong>Crime Spot Analyzer:</strong> Predictive analytics system analyzing crime patterns based on time, location, and historical data</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Computer Vision</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">OpenCV</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Deep Learning</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">ResNet</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">BLE Technology</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Real-time Processing</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Flask</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Python</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;