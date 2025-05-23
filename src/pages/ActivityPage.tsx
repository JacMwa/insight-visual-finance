
import { HealthLayout } from "@/components/HealthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Timer, Target, Play, Pause } from "lucide-react";
import { ActivityChart } from "@/components/ActivityChart";

const ActivityPage = () => {
  const workoutTypes = [
    { name: "Walking", duration: "30 min", calories: "150 cal", icon: "🚶" },
    { name: "Running", duration: "20 min", calories: "300 cal", icon: "🏃" },
    { name: "Cycling", duration: "45 min", calories: "400 cal", icon: "🚴" },
    { name: "Swimming", duration: "30 min", calories: "350 cal", icon: "🏊" },
    { name: "Yoga", duration: "60 min", calories: "200 cal", icon: "🧘" },
    { name: "Strength", duration: "45 min", calories: "250 cal", icon: "💪" },
  ];

  const todayStats = [
    { label: "Steps", value: "8,432", goal: "10,000", progress: 84 },
    { label: "Calories", value: "340", goal: "500", progress: 68 },
    { label: "Distance", value: "5.2 km", goal: "8 km", progress: 65 },
    { label: "Active Time", value: "45 min", goal: "60 min", progress: 75 },
  ];

  return (
    <HealthLayout>
      <div className="space-y-6 p-4 md:p-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Activity Tracking</h1>
          <p className="text-gray-600">Monitor your daily activities and workouts</p>
        </div>

        {/* Today's Progress */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {todayStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-500">{stat.progress}%</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-xs text-gray-500">Goal: {stat.goal}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Workout */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5 text-green-500" />
              Quick Start Workout
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {workoutTypes.map((workout) => (
                <Button
                  key={workout.name}
                  variant="outline"
                  className="h-24 flex-col gap-2 hover:bg-green-50 hover:border-green-300"
                >
                  <span className="text-2xl">{workout.icon}</span>
                  <div className="text-center">
                    <p className="font-medium text-sm">{workout.name}</p>
                    <p className="text-xs text-gray-500">{workout.duration}</p>
                    <p className="text-xs text-gray-500">{workout.calories}</p>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Workout Timer */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Timer className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold">Ready to start your workout?</h3>
              </div>
              <p className="text-gray-600">Choose a workout type above or start a free session</p>
              <div className="flex justify-center gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Play className="h-4 w-4 mr-2" />
                  Start Session
                </Button>
                <Button variant="outline">
                  <Target className="h-4 w-4 mr-2" />
                  Set Goal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Chart */}
        <ActivityChart />
      </div>
    </HealthLayout>
  );
};

export default ActivityPage;
