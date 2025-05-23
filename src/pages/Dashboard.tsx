
import { HealthLayout } from "@/components/HealthLayout";
import { HealthMetricCard } from "@/components/HealthMetricCard";
import { ActivityChart } from "@/components/ActivityChart";
import { VitalSignsChart } from "@/components/VitalSignsChart";
import { Heart, Activity, Droplet, Moon, Target, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const todayMetrics = [
    {
      title: "Heart Rate",
      value: "72 BPM",
      change: "+2 BPM",
      changeType: "neutral" as const,
      icon: Heart,
      description: "Resting heart rate",
      color: "text-red-500"
    },
    {
      title: "Steps",
      value: "8,432",
      change: "+1,200",
      changeType: "positive" as const,
      icon: Activity,
      description: "Daily goal: 10,000",
      color: "text-blue-500"
    },
    {
      title: "Water Intake",
      value: "6 glasses",
      change: "2 remaining",
      changeType: "neutral" as const,
      icon: Droplet,
      description: "Daily goal: 8 glasses",
      color: "text-cyan-500"
    },
    {
      title: "Sleep",
      value: "7h 23m",
      change: "+45 min",
      changeType: "positive" as const,
      icon: Moon,
      description: "Last night",
      color: "text-purple-500"
    }
  ];

  const weeklyGoals = [
    { name: "Exercise", progress: 75, target: "5 workouts/week" },
    { name: "Water", progress: 85, target: "8 glasses/day" },
    { name: "Sleep", progress: 60, target: "8 hours/night" },
    { name: "Steps", progress: 90, target: "10,000 steps/day" }
  ];

  return (
    <HealthLayout>
      <div className="space-y-6 p-4 md:p-6">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Good morning, Alex!</h1>
          <p className="text-gray-600">Here's your health summary for today</p>
        </div>

        {/* Today's Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {todayMetrics.map((metric) => (
            <HealthMetricCard key={metric.title} {...metric} />
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-green-500" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-16 flex-col gap-1">
                <Heart className="h-5 w-5" />
                <span className="text-xs">Log Vitals</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-1">
                <Activity className="h-5 w-5" />
                <span className="text-xs">Start Workout</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-1">
                <Droplet className="h-5 w-5" />
                <span className="text-xs">Log Water</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-1">
                <Calendar className="h-5 w-5" />
                <span className="text-xs">Schedule</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityChart />
          <VitalSignsChart />
        </div>

        {/* Weekly Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weekly Goals Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyGoals.map((goal) => (
                <div key={goal.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{goal.name}</span>
                    <span className="text-sm text-gray-600">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{goal.target}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </HealthLayout>
  );
};

export default Dashboard;
