
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { RevenueChart } from "@/components/RevenueChart";
import { PortfolioChart } from "@/components/PortfolioChart";
import { TransactionTable } from "@/components/TransactionTable";
import { DollarSign, TrendingUp, TrendingDown, PieChart } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Key Metrics */}
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
            title="Net Profit"
            value="$342K"
            change="+8.2%"
            changeType="positive"
            icon={TrendingUp}
            description="vs last month"
          />
          <MetricCard
            title="Total Expenses"
            value="$892K"
            change="-3.1%"
            changeType="negative"
            icon={TrendingDown}
            description="vs last month"
          />
          <MetricCard
            title="Portfolio Value"
            value="$1.85M"
            change="+15.3%"
            changeType="positive"
            icon={PieChart}
            description="vs last month"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RevenueChart />
          <PortfolioChart />
        </div>

        {/* Transactions Table */}
        <div className="grid grid-cols-1 gap-6">
          <TransactionTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
