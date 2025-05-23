
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface HealthMetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description: string;
  color: string;
}

export function HealthMetricCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  description,
  color
}: HealthMetricCardProps) {
  const changeColor = 
    changeType === "positive" 
      ? "text-green-600" 
      : changeType === "negative"
      ? "text-red-600"
      : "text-gray-600";

  return (
    <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className={`p-2 rounded-lg bg-gray-50 ${color}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center justify-between">
            <p className={`text-sm font-medium ${changeColor}`}>{change}</p>
          </div>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
