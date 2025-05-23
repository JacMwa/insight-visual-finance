
import { useState } from "react";
import { HealthLayout } from "@/components/HealthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Thermometer, Droplet, Plus } from "lucide-react";

const VitalsPage = () => {
  const [heartRate, setHeartRate] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [temperature, setTemperature] = useState("");

  const recentVitals = [
    { date: "Today, 9:30 AM", heartRate: "72 BPM", bloodPressure: "120/80", temperature: "98.6°F" },
    { date: "Yesterday, 8:15 AM", heartRate: "68 BPM", bloodPressure: "118/78", temperature: "98.4°F" },
    { date: "2 days ago, 7:45 AM", heartRate: "70 BPM", bloodPressure: "122/82", temperature: "98.5°F" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Vitals submitted:", { heartRate, bloodPressure, temperature });
    // Reset form
    setHeartRate("");
    setBloodPressure("");
    setTemperature("");
  };

  return (
    <HealthLayout>
      <div className="space-y-6 p-4 md:p-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Vital Signs</h1>
          <p className="text-gray-600">Track and monitor your health vitals</p>
        </div>

        {/* Add New Vitals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-green-500" />
              Log New Vitals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="heartRate" className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    Heart Rate (BPM)
                  </Label>
                  <Input
                    id="heartRate"
                    type="number"
                    placeholder="72"
                    value={heartRate}
                    onChange={(e) => setHeartRate(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodPressure" className="flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-blue-500" />
                    Blood Pressure
                  </Label>
                  <Input
                    id="bloodPressure"
                    placeholder="120/80"
                    value={bloodPressure}
                    onChange={(e) => setBloodPressure(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="temperature" className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-orange-500" />
                    Temperature (°F)
                  </Label>
                  <Input
                    id="temperature"
                    type="number"
                    step="0.1"
                    placeholder="98.6"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Save Vitals
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Vitals */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Measurements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVitals.map((vital, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-1 md:space-y-0">
                    <p className="font-medium text-gray-900">{vital.date}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-2 md:mt-0">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Heart Rate</p>
                      <p className="font-semibold text-red-600">{vital.heartRate}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Blood Pressure</p>
                      <p className="font-semibold text-blue-600">{vital.bloodPressure}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Temperature</p>
                      <p className="font-semibold text-orange-600">{vital.temperature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </HealthLayout>
  );
};

export default VitalsPage;
