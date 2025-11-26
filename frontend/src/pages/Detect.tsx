import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, AlertTriangle, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

const Detect = () => {
  const runDetection = () => {
    // Redirect to the Streamlit detection app
    window.location.href = "https://spacedetection.streamlit.app/";
  };

  return (
    <div className="min-h-screen bg-background star-field">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI <span className="holographic-text">Object Detection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload an image to detect hazardous objects with AI-powered analysis
            </p>
          </div>

          {/* Detection Action Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Scan className="w-6 h-6 text-primary" />
                  Start Object Detection
                </CardTitle>
                <CardDescription>
                  Launch the AI-powered detection system to identify hazardous objects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Scan className="w-10 h-10 text-primary animate-pulse" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Click the button below to access the detection interface where you can upload images 
                    and analyze them for potential hazards in real-time.
                  </p>
                </div>

                <Button
                  onClick={runDetection}
                  className="w-full gap-2 glow-on-hover text-lg py-6"
                  size="lg"
                >
                  <Scan className="w-5 h-5" />
                  Detect Objects
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Info Section */}
          <Card className="mt-8 border-primary/30 bg-card/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">About Detection System</h3>
                  <p className="text-sm text-muted-foreground">
                    Astro X uses YOLOv8-S model with 87% mAP accuracy to identify hazardous objects
                    including oxygen tanks, fire extinguishers, loose tools, and electrical equipment.
                    Each detection includes confidence scoring and risk classification.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Detect;
