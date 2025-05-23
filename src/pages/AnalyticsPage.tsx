
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

// Performance trend data
const performanceData = [
  { month: "Jan", actual: 67, projected: 65 },
  { month: "Feb", actual: 68, projected: 66 },
  { month: "Mar", actual: 70, projected: 68 },
  { month: "Apr", actual: 72, projected: 70 },
  { month: "May", actual: 75, projected: 72 },
  { month: "Jun", actual: 74, projected: 73 },
  { month: "Jul", actual: 78, projected: 75 },
  { month: "Aug", actual: 82, projected: 77 },
  { month: "Sep", actual: 85, projected: 79 },
  { month: "Oct", actual: 89, projected: 81 },
  { month: "Nov", actual: 92, projected: 83 },
  { month: "Dec", actual: 95, projected: 85 },
];

// Industry comparison data
const industryData = [
  { name: "Your Portfolio", value: 15.3 },
  { name: "Industry Average", value: 10.1 },
  { name: "S&P 500", value: 12.5 },
  { name: "Top Quartile", value: 18.2 },
];

// Risk assessment data
const riskData = [
  { name: "Market Risk", value: 35 },
  { name: "Credit Risk", value: 20 },
  { name: "Liquidity Risk", value: 15 },
  { name: "Operational Risk", value: 10 },
  { name: "Other Risks", value: 20 },
];

const AnalyticsPage = () => {
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#6b7280"];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        
        {/* Analytics Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="YTD Performance"
            value="+15.3%"
            change="+2.8%"
            changeType="positive"
            icon={TrendingUp}
            description="vs benchmark"
          />
          <MetricCard
            title="Volatility"
            value="12.5%"
            change="-1.3%"
            changeType="positive"
            icon={Activity}
            description="decreasing"
          />
          <MetricCard
            title="Sharpe Ratio"
            value="1.85"
            change="+0.23"
            changeType="positive"
            icon={BarChart3}
            description="excellent"
          />
          <MetricCard
            title="Beta"
            value="0.92"
            change="-0.05"
            changeType="neutral"
            icon={PieChart}
            description="vs market"
          />
        </div>
        
        {/* Performance Trend Chart */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Performance Trend</CardTitle>
            <p className="text-sm text-gray-600">Actual vs Projected Performance</p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6b7280"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    fontSize={12}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, '']}
                    labelStyle={{ color: '#374151' }}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    name="Actual" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="projected" 
                    name="Projected" 
                    stroke="#6b7280" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#6b7280', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#6b7280', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Industry Comparison & Risk Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Industry Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Industry Comparison</CardTitle>
              <p className="text-sm text-gray-600">Annual Return (%)</p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={industryData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis type="number" stroke="#6b7280" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={12} width={100} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Annual Return']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Risk Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Risk Assessment</CardTitle>
              <p className="text-sm text-gray-600">Distribution of portfolio risk factors</p>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Risk Factor']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
