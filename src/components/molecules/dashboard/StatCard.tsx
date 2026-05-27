import type { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  value: string | number;
  label: string;
  delta: string;
  bgClass: string;
  iconBgClass: string;
  deltaClass: string;
};

const StatCard = ({
  icon,
  value,
  label,
  delta,
  bgClass,
  iconBgClass,
  deltaClass,
}: StatCardProps) => {
  return (
    <div className={`rounded-2xl p-4 sm:p-5 ${bgClass}`}>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg mb-4 ${iconBgClass}`}
      >
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-700 mt-1 font-medium">{label}</div>
      <div className={`text-xs mt-2 ${deltaClass}`}>{delta}</div>
    </div>
  );
};

export default StatCard;
