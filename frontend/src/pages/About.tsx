import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Zap, Github, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import aiNetworkImage from "@/assets/ai-network.jpg";

const About = () => {
  const techStack = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "AI Model", items: ["YOLOv8-S", "Ultralytics", "PyTorch"] },
    { category: "Backend", items: ["Flask API", "FastAPI", "Docker"] },
    { category: "Deployment", items: ["Hugging Face", "Vercel", "Docker"] },
  ];

  const modelMetrics = [
    { metric: "Mean Average Precision (mAP)", value: "0.87", description: "87% overall accuracy" },
    { metric: "Precision", value: "0.90", description: "90% precision rate" },
    { metric: "Recall", value: "0.85", description: "85% recall rate" },
    { metric: "Inference Speed", value: "<100ms", description: "Real-time detection" },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Leverages YOLOv8-S architecture for state-of-the-art object detection with high accuracy and speed.",
    },
    {
      icon: Target,
      title: "Multi-Object Recognition",
      description: "Simultaneously detects multiple hazardous objects including oxygen tanks, fire extinguishers, tools, and equipment.",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Processes images in under 100ms, enabling instant hazard identification and response.",
    },
  ];

  return (
    <div className="min-h-screen bg-background star-field">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="holographic-text">Astro X</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced AI hazard detection system designed for space stations, warehouses, 
              and industrial facilities with limited manpower
            </p>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-16 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_hsl(188_100%_50%_/_0.3)]"
          >
            <img
              src={aiNetworkImage}
              alt="AI neural network visualization"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>

          {/* Mission Statement */}
          <Card className="mb-12 border-primary/30 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Astro X was created to address critical safety challenges in environments with limited 
                human oversight. By combining cutting-edge computer vision with deep learning, we provide 
                an autonomous system that continuously monitors for hazardous objects, reducing risks and 
                protecting personnel in space stations, industrial facilities, and remote locations.
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key <span className="holographic-text">Capabilities</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Model Performance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Model <span className="holographic-text">Performance</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modelMetrics.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border bg-card/50 backdrop-blur-sm text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                      <div className="font-semibold mb-1">{item.metric}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technology <span className="holographic-text">Stack</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {techStack.map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-primary">{stack.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {stack.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Open Source & Collaboration</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Astro X is an open-source project. Contribute to the codebase, report issues, 
                or explore the technical documentation on GitHub.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="gap-2 glow-on-hover" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-primary/50" asChild>
                  <a href="https://docs.astro.ai" target="_blank" rel="noopener noreferrer">
                    Documentation
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
