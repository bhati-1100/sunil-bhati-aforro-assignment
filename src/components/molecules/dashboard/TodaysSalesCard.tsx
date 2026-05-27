import { Button } from "antd";
import {
  BarChartOutlined,
  FileTextOutlined,
  EditOutlined,
  UserAddOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import StatCard from "./StatCard";

const stats = [
  {
    icon: <BarChartOutlined />,
    value: "$1k",
    label: "Total Sales",
    delta: "+8% from yesterday",
    bgClass: "bg-rose-100",
    iconBgClass: "bg-rose-500",
    deltaClass: "text-[#3b82f6]",
  },
  {
    icon: <FileTextOutlined />,
    value: "300",
    label: "Total Order",
    delta: "+5% from yesterday",
    bgClass: "bg-orange-100",
    iconBgClass: "bg-orange-400",
    deltaClass: "text-[#3b82f6]",
  },
  {
    icon: <EditOutlined />,
    value: "5",
    label: "Product Sold",
    delta: "+1,2% from yesterday",
    bgClass: "bg-green-100",
    iconBgClass: "bg-green-500",
    deltaClass: "text-[#3b82f6]",
  },
  {
    icon: <UserAddOutlined />,
    value: "8",
    label: "New Customers",
    delta: "0,5% from yesterday",
    bgClass: "bg-purple-100",
    iconBgClass: "bg-purple-400",
    deltaClass: "text-[#3b82f6]",
  },
];

const TodaysSalesCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Today's Sales</h2>
          <p className="text-sm text-gray-500 mt-1">Sales Summary</p>
        </div>
        <Button icon={<ExportOutlined />} className="font-medium">
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default TodaysSalesCard;
