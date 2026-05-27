import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { label: "A", volume: 70, services: 30 },
  { label: "B", volume: 55, services: 25 },
  { label: "C", volume: 80, services: 35 },
  { label: "D", volume: 45, services: 20 },
  { label: "E", volume: 65, services: 30 },
];

const VolumeServiceCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Volume vs Service Level
      </h2>

      <div className="flex-1 min-h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 5, left: 5, bottom: 0 }}
            barCategoryGap="35%"
          >
            <XAxis dataKey="label" hide />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 12,
              }}
            />
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="services"
              stackId="a"
              fill="#22c55e"
              radius={[0, 0, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-4 mt-2 border-t border-gray-100 text-center">
        <div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            Volume
          </div>
          <div className="text-base font-semibold text-gray-900 mt-1">
            1,135
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            Services
          </div>
          <div className="text-base font-semibold text-gray-900 mt-1">635</div>
        </div>
      </div>
    </div>
  );
};

export default VolumeServiceCard;
