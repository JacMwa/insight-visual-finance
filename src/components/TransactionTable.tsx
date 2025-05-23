
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentTransactions = [
  {
    id: "TXN001",
    description: "Apple Inc. Stock Purchase",
    amount: -15750,
    type: "investment",
    date: "2024-05-23",
    status: "completed"
  },
  {
    id: "TXN002",
    description: "Dividend Payment - Microsoft",
    amount: 285,
    type: "dividend",
    date: "2024-05-22",
    status: "completed"
  },
  {
    id: "TXN003",
    description: "Real Estate Investment Trust",
    amount: -8500,
    type: "investment",
    date: "2024-05-21",
    status: "pending"
  },
  {
    id: "TXN004",
    description: "Bond Interest Payment",
    amount: 420,
    type: "interest",
    date: "2024-05-20",
    status: "completed"
  },
  {
    id: "TXN005",
    description: "Cryptocurrency Purchase - Bitcoin",
    amount: -3200,
    type: "crypto",
    date: "2024-05-19",
    status: "completed"
  },
];

export function TransactionTable() {
  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800"
    };
    return variants[status as keyof typeof variants] || variants.completed;
  };

  const getTypeBadge = (type: string) => {
    const variants = {
      investment: "bg-blue-100 text-blue-800",
      dividend: "bg-green-100 text-green-800",
      interest: "bg-purple-100 text-purple-800",
      crypto: "bg-orange-100 text-orange-800"
    };
    return variants[type as keyof typeof variants] || variants.investment;
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Transactions</CardTitle>
        <p className="text-sm text-gray-600">Latest financial activities and investments</p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Transaction</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Amount</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2">
                    <div>
                      <div className="font-medium text-gray-900">{transaction.description}</div>
                      <div className="text-xs text-gray-500">{transaction.id}</div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <Badge variant="secondary" className={getTypeBadge(transaction.type)}>
                      {transaction.type}
                    </Badge>
                  </td>
                  <td className="py-3 px-2">
                    <span className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-2">
                    <Badge variant="secondary" className={getStatusBadge(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
