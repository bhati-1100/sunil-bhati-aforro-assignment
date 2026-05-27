import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Monday", online: 14000, offline: 13000 },
  { day: "Tuesday", online: 18000, offline: 8000 },
  { day: "Wednesday", online: 20000, offline: 4000 },
  { day: "Thursday", online: 13000, offline: 10000 },
  { day: "Friday", online: 16000, offline: 13000 },
  { day: "Saturday", online: 13000, offline: 11000 },
  { day: "Sunday", online: 20000, offline: 14000 },
];

const formatTick = (v: number) => (v >= 1000 ? `${v / 1000}k` : `${v}`);

const TotalRevenueCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Total Revenue</h2>

      <div className="flex-1 min-h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            barCategoryGap="20%"
          >
            <CartesianGrid stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatTick}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
              }}
            />
            <Bar dataKey="online" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="offline" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-xs text-gray-600">Online Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-xs text-gray-600">Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueCard;
