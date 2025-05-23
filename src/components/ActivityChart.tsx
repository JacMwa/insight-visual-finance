
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const activityData = [
  { day: "Mon", steps: 8500, calories: 320 },
  { day: "Tue", steps: 9200, calories: 380 },
  { day: "Wed", steps: 7800, calories: 290 },
  { day: "Thu", steps: 10200, calories: 420 },
  { day: "Fri", steps: 9800, calories: 400 },
  { day: "Sat", steps: 11500, calories: 480 },
  { day: "Sun", steps: 8900, calories: 350 },
];

export function ActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Weekly Activity</CardTitle>
        <p className="text-sm text-gray-600">Steps and calories burned this week</p>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="steps" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                name="Steps"
              />
              <Line 
                type="monotone" 
                dataKey="calories" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                name="Calories"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
