
import { useState } from "react";
import { HealthLayout } from "@/components/HealthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, Bell, Shield, Target } from "lucide-react";

const ProfilePage = () => {
  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    workoutReminders: true,
    mealReminders: false,
    sleepReminders: true,
  });

  const userStats = [
    { label: "Days Active", value: "127", icon: "🏃" },
    { label: "Health Score", value: "85%", icon: "💪" },
    { label: "Goals Achieved", value: "23", icon: "🎯" },
    { label: "Streak", value: "7 days", icon: "🔥" },
  ];

  const healthGoals = [
    { goal: "Walk 10,000 steps daily", status: "active", progress: 85 },
    { goal: "Drink 8 glasses of water", status: "active", progress: 92 },
    { goal: "Sleep 8 hours nightly", status: "paused", progress: 60 },
    { goal: "Exercise 5 times per week", status: "active", progress: 78 },
  ];

  return (
    <HealthLayout>
      <div className="space-y-6 p-4 md:p-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Profile & Settings</h1>
          <p className="text-gray-600">Manage your health profile and app preferences</p>
        </div>

        {/* Profile Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-500" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="text-2xl">AJ</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">Change Photo</Button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.johnson@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" defaultValue="28" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" type="number" defaultValue="175" />
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Your Health Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {userStats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Health Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {healthGoals.map((goal, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-medium text-gray-900">{goal.goal}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        goal.status === 'active' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {goal.status}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{goal.progress}% completed</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    Edit
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Target className="h-4 w-4 mr-2" />
                Add New Goal
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-yellow-500" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Daily Health Reminders</p>
                  <p className="text-sm text-gray-600">Get reminded to log your daily health metrics</p>
                </div>
                <Switch 
                  checked={notifications.dailyReminders}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, dailyReminders: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Workout Reminders</p>
                  <p className="text-sm text-gray-600">Get notified about scheduled workouts</p>
                </div>
                <Switch 
                  checked={notifications.workoutReminders}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, workoutReminders: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Meal Reminders</p>
                  <p className="text-sm text-gray-600">Get reminded to log your meals</p>
                </div>
                <Switch 
                  checked={notifications.mealReminders}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, mealReminders: checked }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sleep Reminders</p>
                  <p className="text-sm text-gray-600">Get reminded about bedtime and wake up times</p>
                </div>
                <Switch 
                  checked={notifications.sleepReminders}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, sleepReminders: checked }))
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-500" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Data Export
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Privacy Settings
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                <User className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </HealthLayout>
  );
};

export default ProfilePage;
