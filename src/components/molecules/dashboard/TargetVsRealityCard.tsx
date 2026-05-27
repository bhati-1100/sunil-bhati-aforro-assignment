import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import { ShoppingOutlined, FolderOpenOutlined } from "@ant-design/icons";

const data = [
  { month: "Jan", reality: 6, target: 8 },
  { month: "Feb", reality: 9, target: 11 },
  { month: "Mar", reality: 10, target: 8 },
  { month: "Apr", reality: 7, target: 9 },
  { month: "May", reality: 13, target: 12 },
  { month: "Jun", reality: 12, target: 10 },
  { month: "Jul", reality: 11, target: 13 },
];

const TargetVsRealityCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Target vs Reality</h2>

      <div className="flex-1 min-h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8", fontSize: 11 }}
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
            <Bar dataKey="reality" fill="#facc15" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
            <ShoppingOutlined />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">
              Reality Sales
            </div>
            <div className="text-xs text-gray-500">Global</div>
          </div>
          <div className="text-sm font-semibold text-green-600">8.823</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
            <FolderOpenOutlined />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Target Sales</div>
            <div className="text-xs text-gray-500">Commercial</div>
          </div>
          <div className="text-sm font-semibold text-amber-600">12.122</div>
        </div>
      </div>
    </div>
  );
};

export default TargetVsRealityCard;
