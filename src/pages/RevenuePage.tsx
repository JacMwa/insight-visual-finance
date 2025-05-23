
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { RevenueChart } from "@/components/RevenueChart";
import { DollarSign, TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RevenuePage = () => {
  // Revenue breakdown data
  const revenueBreakdown = [
    { source: "Product Sales", amount: 520000, percentage: 43.3 },
    { source: "Subscription Fees", amount: 380000, percentage: 31.7 },
    { source: "Service Contracts", amount: 185000, percentage: 15.4 },
    { source: "Consulting", amount: 65000, percentage: 5.4 },
    { source: "Other", amount: 50000, percentage: 4.2 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Revenue Dashboard</h1>
        
        {/* Key Revenue Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value="$1.2M"
            change="+12.5%"
            changeType="positive"
            icon={DollarSign}
            description="vs last month"
          />
          <MetricCard
            title="Monthly Growth"
            value="8.2%"
            change="+2.1%"
            changeType="positive"
            icon={TrendingUp}
            description="vs last month"
          />
          <MetricCard
            title="Customer Acquisition Cost"
            value="$125"
            change="-5.3%"
            changeType="positive"
            icon={TrendingDown}
            description="vs last month"
          />
          <MetricCard
            title="Avg. Revenue Per User"
            value="$85"
            change="+3.8%"
            changeType="positive"
            icon={BarChart3}
            description="vs last month"
          />
        </div>

        {/* Revenue Chart */}
        <RevenueChart />

        {/* Revenue Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Revenue Breakdown</CardTitle>
            <p className="text-sm text-gray-600">Revenue sources and their contribution</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueBreakdown.map((item) => (
                <div key={item.source} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{item.source}</p>
                    <p className="text-sm text-gray-500">{item.percentage}% of total revenue</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${(item.amount / 1000).toFixed(1)}k</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RevenuePage;
