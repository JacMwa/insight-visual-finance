
import { HealthLayout } from "@/components/HealthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Clock, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const SleepPage = () => {
  const sleepData = [
    { day: "Mon", hours: 7.5, quality: 85 },
    { day: "Tue", hours: 6.8, quality: 70 },
    { day: "Wed", hours: 8.2, quality: 90 },
    { day: "Thu", hours: 7.1, quality: 75 },
    { day: "Fri", hours: 6.5, quality: 65 },
    { day: "Sat", hours: 9.0, quality: 95 },
    { day: "Sun", hours: 8.5, quality: 88 },
  ];

  const sleepStages = [
    { stage: "Deep Sleep", hours: 2.1, percentage: 28, color: "bg-blue-600" },
    { stage: "Light Sleep", hours: 3.8, percentage: 51, color: "bg-blue-400" },
    { stage: "REM Sleep", hours: 1.5, percentage: 21, color: "bg-purple-500" },
  ];

  const lastNight = {
    bedtime: "10:30 PM",
    wakeTime: "6:15 AM",
    totalSleep: "7h 45m",
    efficiency: "89%",
    quality: "Good"
  };

  return (
    <HealthLayout>
      <div className="space-y-6 p-4 md:p-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sleep Tracking</h1>
          <p className="text-gray-600">Monitor your sleep patterns and quality</p>
        </div>

        {/* Last Night's Sleep */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Moon className="h-5 w-5 text-blue-600" />
              Last Night's Sleep
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Moon className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Bedtime</p>
                <p className="text-lg font-semibold">{lastNight.bedtime}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sun className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-sm text-gray-600">Wake Time</p>
                <p className="text-lg font-semibold">{lastNight.wakeTime}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Total Sleep</p>
                <p className="text-lg font-semibold">{lastNight.totalSleep}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Efficiency</p>
                <p className="text-lg font-semibold">{lastNight.efficiency}</p>
              </div>
              <div className="text-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">Quality</p>
                <p className="text-lg font-semibold">{lastNight.quality}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sleep Stages */}
        <Card>
          <CardHeader>
            <CardTitle>Sleep Stages Breakdown</CardTitle>
            <p className="text-sm text-gray-600">How you spent your sleep time last night</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sleepStages.map((stage) => (
                <div key={stage.stage} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{stage.stage}</span>
                    <div className="text-right">
                      <span className="font-semibold">{stage.hours}h</span>
                      <span className="text-sm text-gray-500 ml-2">{stage.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-300 ${stage.color}`}
                      style={{ width: `${stage.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Sleep Trend */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sleep Hours This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sleepData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sleep Quality Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sleepData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="quality"
                      stroke="#8b5cf6"
                      fill="#8b5cf650"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sleep Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Sleep Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-16 bg-blue-600 hover:bg-blue-700">
                <Moon className="h-5 w-5 mr-2" />
                Start Sleep Timer
              </Button>
              <Button variant="outline" className="h-16">
                <Clock className="h-5 w-5 mr-2" />
                Set Bedtime
              </Button>
              <Button variant="outline" className="h-16">
                <Sun className="h-5 w-5 mr-2" />
                Log Sleep Manually
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </HealthLayout>
  );
};

export default SleepPage;
