import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Detections",
      value: "1,247",
      change: "+12.5%",
      icon: Activity,
      color: "text-primary",
    },
    {
      title: "High Risk Objects",
      value: "23",
      change: "-8.2%",
      icon: AlertTriangle,
      color: "text-destructive",
    },
    {
      title: "Success Rate",
      value: "94.3%",
      change: "+2.1%",
      icon: CheckCircle,
      color: "text-success-green",
    },
    {
      title: "Avg Confidence",
      value: "87.5%",
      change: "+3.4%",
      icon: TrendingUp,
      color: "text-warning-orange",
    },
  ];

  const recentDetections = [
    { id: 1, object: "Oxygen Tank", confidence: 92, risk: "high", time: "2 mins ago" },
    { id: 2, object: "Fire Extinguisher", confidence: 88, risk: "medium", time: "15 mins ago" },
    { id: 3, object: "Loose Tool", confidence: 85, risk: "medium", time: "1 hour ago" },
    { id: 4, object: "Electrical Panel", confidence: 78, risk: "low", time: "2 hours ago" },
    { id: 5, object: "Oxygen Tank", confidence: 91, risk: "high", time: "3 hours ago" },
  ];

  const objectTypes = [
    { name: "Oxygen Tanks", count: 342, percentage: 27.4 },
    { name: "Fire Extinguishers", count: 298, percentage: 23.9 },
    { name: "Loose Tools", count: 256, percentage: 20.5 },
    { name: "Electrical Panels", count: 189, percentage: 15.2 },
    { name: "Other", count: 162, percentage: 13.0 },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning-orange";
      case "low":
        return "text-success-green";
      default:
        return "text-muted-foreground";
    }
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
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Analytics <span className="holographic-text">Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Monitor detection performance and hazard statistics
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-full ${stat.color} bg-current/10 flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-success-green' : 'text-destructive'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Detections */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Detections</CardTitle>
                <CardDescription>Latest objects identified by the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDetections.map((detection) => (
                    <div
                      key={detection.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${getRiskColor(detection.risk)} bg-current`} />
                        <div>
                          <p className="font-semibold">{detection.object}</p>
                          <p className="text-sm text-muted-foreground">{detection.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-mono font-semibold">{detection.confidence}%</p>
                        <p className="text-xs text-muted-foreground uppercase">{detection.risk} risk</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Object Types Distribution */}
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Detection Distribution</CardTitle>
                <CardDescription>Breakdown by object type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {objectTypes.map((type, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{type.name}</span>
                        <span className="text-muted-foreground">{type.count} ({type.percentage}%)</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${type.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Chart Placeholder */}
          <Card className="mt-8 border-primary/30 bg-card/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Detection Performance</CardTitle>
              <CardDescription>Model accuracy and confidence over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border border-dashed border-border rounded-lg">
                <div className="text-center text-muted-foreground">
                  <Activity className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Performance chart visualization</p>
                  <p className="text-sm mt-2">Real-time data integration coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
