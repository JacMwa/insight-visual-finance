
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { PortfolioChart } from "@/components/PortfolioChart";
import { PieChart, BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortfolioPage = () => {
  // Portfolio assets data
  const portfolioAssets = [
    { name: "Apple Inc.", ticker: "AAPL", value: 120000, change: 3.2, changeType: "positive" },
    { name: "Microsoft", ticker: "MSFT", value: 95000, change: 1.8, changeType: "positive" },
    { name: "Tesla", ticker: "TSLA", value: 75000, change: -2.3, changeType: "negative" },
    { name: "Amazon", ticker: "AMZN", value: 85000, change: 0.9, changeType: "positive" },
    { name: "Google", ticker: "GOOGL", value: 65000, change: -0.5, changeType: "negative" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Portfolio Management</h1>
        
        {/* Portfolio Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Portfolio Value"
            value="$1.85M"
            change="+15.3%"
            changeType="positive"
            icon={PieChart}
            description="YTD"
          />
          <MetricCard
            title="Annual Return"
            value="12.8%"
            change="+3.2%"
            changeType="positive"
            icon={ArrowUpRight}
            description="vs benchmark"
          />
          <MetricCard
            title="Risk Score"
            value="65/100"
            change="-5"
            changeType="neutral"
            icon={BarChart3}
            description="moderate risk"
          />
          <MetricCard
            title="Diversification"
            value="82%"
            change="+4%"
            changeType="positive"
            icon={PieChart}
            description="well diversified"
          />
        </div>

        {/* Portfolio Allocation Chart */}
        <PortfolioChart />

        {/* Top Portfolio Assets */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Top Portfolio Assets</CardTitle>
            <p className="text-sm text-gray-600">Your highest value investments</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Asset</th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Ticker</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">Value</th>
                    <th className="text-right py-3 px-2 text-sm font-medium text-gray-700">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioAssets.map((asset) => (
                    <tr key={asset.ticker} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 font-medium text-gray-900">{asset.name}</td>
                      <td className="py-3 px-2 text-gray-600">{asset.ticker}</td>
                      <td className="py-3 px-2 text-right font-medium text-gray-900">
                        ${asset.value.toLocaleString()}
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex items-center justify-end">
                          {asset.changeType === "positive" ? (
                            <ArrowUpRight className="h-4 w-4 text-green-600" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-red-600" />
                          )}
                          <span 
                            className={`ml-1 font-medium ${
                              asset.changeType === "positive" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {asset.change > 0 ? "+" : ""}{asset.change}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PortfolioPage;
