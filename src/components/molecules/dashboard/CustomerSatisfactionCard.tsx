import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", last: 50, current: 80 },
  { month: "Feb", last: 90, current: 130 },
  { month: "Mar", last: 70, current: 110 },
  { month: "Apr", last: 95, current: 150 },
  { month: "May", last: 80, current: 140 },
  { month: "Jun", last: 110, current: 170 },
  { month: "Jul", last: 90, current: 160 },
];

const CustomerSatisfactionCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Customer Satisfaction
      </h2>

      <div className="flex-1 min-h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="lastGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="currentGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" hide />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="last"
              stroke="#3b82f6"
              strokeWidth={2.5}
              fill="url(#lastGrad)"
              dot={{ r: 3, fill: "#3b82f6" }}
            />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#22c55e"
              strokeWidth={2.5}
              fill="url(#currentGrad)"
              dot={{ r: 3, fill: "#22c55e" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-4 mt-2 border-t border-gray-100 text-center">
        <div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            Last Month
          </div>
          <div className="text-base font-semibold text-gray-900 mt-1">
            $3,004
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            This Month
          </div>
          <div className="text-base font-semibold text-gray-900 mt-1">
            $4,504
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfactionCard;
