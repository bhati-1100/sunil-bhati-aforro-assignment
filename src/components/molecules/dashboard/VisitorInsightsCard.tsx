import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
} from "recharts";

const data = [
  { month: "Jan", loyal: 220, new: 120, unique: 200 },
  { month: "Feb", loyal: 200, new: 150, unique: 180 },
  { month: "Mar", loyal: 240, new: 200, unique: 160 },
  { month: "Apr", loyal: 260, new: 240, unique: 200 },
  { month: "May", loyal: 240, new: 280, unique: 250 },
  { month: "Jun", loyal: 200, new: 320, unique: 300 },
  { month: "Jul", loyal: 240, new: 360, unique: 320 },
  { month: "Aug", loyal: 280, new: 300, unique: 340 },
  { month: "Sept", loyal: 300, new: 260, unique: 320 },
  { month: "Oct", loyal: 260, new: 220, unique: 280 },
  { month: "Nov", loyal: 220, new: 200, unique: 240 },
  { month: "Dec", loyal: 200, new: 180, unique: 220 },
];

const series = [
  { key: "loyal", label: "Loyal Customers", color: "#a855f7" },
  { key: "new", label: "New Customers", color: "#ef4444" },
  { key: "unique", label: "Unique Customers", color: "#22c55e" },
];

const VisitorInsightsCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Visitor Insights</h2>

      <div className="flex-1 min-h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
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
            <ReferenceLine x="Jul" stroke="#ef4444" strokeDasharray="4 4" />
            {series.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
        {series.map((s) => (
          <div key={s.key} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: s.color }}
            />
            <span className="text-xs text-gray-600">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorInsightsCard;
