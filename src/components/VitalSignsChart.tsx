
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const vitalData = [
  { time: "6 AM", heartRate: 68, bloodPressure: 120 },
  { time: "9 AM", heartRate: 72, bloodPressure: 118 },
  { time: "12 PM", heartRate: 76, bloodPressure: 125 },
  { time: "3 PM", heartRate: 74, bloodPressure: 122 },
  { time: "6 PM", heartRate: 78, bloodPressure: 128 },
  { time: "9 PM", heartRate: 70, bloodPressure: 116 },
];

export function VitalSignsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Today's Vitals</CardTitle>
        <p className="text-sm text-gray-600">Heart rate and blood pressure trends</p>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={vitalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="time" 
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
              <Area
                type="monotone"
                dataKey="heartRate"
                stackId="1"
                stroke="#ef4444"
                fill="#ef444450"
                name="Heart Rate (BPM)"
              />
              <Area
                type="monotone"
                dataKey="bloodPressure"
                stackId="2"
                stroke="#8b5cf6"
                fill="#8b5cf650"
                name="Blood Pressure"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
