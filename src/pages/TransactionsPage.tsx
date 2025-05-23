
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { TransactionTable } from "@/components/TransactionTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download } from "lucide-react";

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter options (for a real app, these would be interactive filters)
  const filterOptions = [
    { name: "All Types", active: true },
    { name: "Investments", active: false },
    { name: "Dividends", active: false },
    { name: "Interest", active: false },
    { name: "Crypto", active: false },
  ];

  const timeRanges = [
    { name: "Last 7 days", active: false },
    { name: "Last 30 days", active: true },
    { name: "Last 90 days", active: false },
    { name: "This year", active: false },
    { name: "All time", active: false },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Transaction History</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        {/* Search & Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {timeRanges.map((range) => (
                  <Badge 
                    key={range.name}
                    variant={range.active ? "default" : "outline"}
                    className="cursor-pointer"
                  >
                    {range.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Transaction filters */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => (
            <Badge 
              key={filter.name}
              variant={filter.active ? "default" : "outline"}
              className="cursor-pointer"
            >
              {filter.name}
            </Badge>
          ))}
        </div>
        
        {/* Transactions Table */}
        <TransactionTable />
        
        {/* Pagination Example */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransactionsPage;
