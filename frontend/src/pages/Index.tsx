import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Shield, Zap, Brain, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-space-station.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "YOLOv8-S model with 87% mAP accuracy for real-time hazard identification",
    },
    {
      icon: Shield,
      title: "Hazard Prevention",
      description: "Identify dangerous objects before they become critical safety issues",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process images in milliseconds with confidence scoring",
    },
  ];

  const stats = [
    { value: "87%", label: "Model Accuracy (mAP)" },
    { value: "90%", label: "Precision Rate" },
    { value: "<100ms", label: "Detection Speed" },
    { value: "24/7", label: "Monitoring" },
  ];

  const useCases = [
    "Space Stations & Satellites",
    "Warehouse Operations",
    "Manufacturing Facilities",
    "Industrial Environments",
  ];

  return (
    <div className="min-h-screen bg-background star-field">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
              >
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">AI-Powered Hazard Detection</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black leading-tight"
              >
                Secure Your Space with{" "}
                <span className="holographic-text">Astro X</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-xl"
              >
                Advanced AI object detection system for identifying hazardous materials in
                space stations, warehouses, and industrial facilities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/detect">
                  <Button
                    size="lg"
                    className="gap-2 text-lg px-8 py-6 glow-on-hover shadow-[0_0_30px_hsl(188_100%_50%_/_0.3)]"
                  >
                    Start Detection
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
                  >
                    View Dashboard
                  </Button>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 pt-8"
              >
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg border border-border bg-card/50">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_hsl(188_100%_50%_/_0.3)]">
                <img
                  src={heroImage}
                  alt="Astro X AI Hazard Detection System in action"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Floating detection badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-primary/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-success-green/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-success-green" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Detection Active</div>
                      <div className="text-xs text-muted-foreground">87% Confidence</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powered by Advanced <span className="holographic-text">AI Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on YOLOv8-S architecture for unparalleled detection accuracy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_hsl(188_100%_50%_/_0.4)] transition-shadow">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="holographic-text">Critical Environments</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all flex items-center justify-center text-center"
              >
                <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-semibold">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-primary/30 p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Secure Your Space?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start detecting hazards with AI-powered precision today
              </p>
              <Link to="/detect">
                <Button
                  size="lg"
                  className="gap-2 text-lg px-10 py-7 glow-on-hover shadow-[0_0_40px_hsl(188_100%_50%_/_0.4)]"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
