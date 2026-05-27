import { Progress } from "antd";

type Product = {
  rank: string;
  name: string;
  popularity: number;
  sales: number;
  color: string;
  badgeBg: string;
  badgeText: string;
};

const products: Product[] = [
  {
    rank: "01",
    name: "Home Decor Range",
    popularity: 45,
    sales: 45,
    color: "#3b82f6",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
  },
  {
    rank: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 29,
    sales: 29,
    color: "#22c55e",
    badgeBg: "bg-green-50",
    badgeText: "text-green-600",
  },
  {
    rank: "03",
    name: "Bathroom Essentials",
    popularity: 18,
    sales: 18,
    color: "#a855f7",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-600",
  },
  {
    rank: "04",
    name: "Apple Smartwatches",
    popularity: 25,
    sales: 25,
    color: "#f97316",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-600",
  },
];

const TopProductsCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Top Products</h2>

      <div className="hidden sm:grid grid-cols-12 gap-3 text-xs text-gray-400 pb-2 border-b border-gray-100">
        <div className="col-span-1">#</div>
        <div className="col-span-4">Name</div>
        <div className="col-span-5">Popularity</div>
        <div className="col-span-2 text-right">Sales</div>
      </div>

      <div className="flex-1 divide-y divide-gray-50">
        {products.map((p) => (
          <div
            key={p.rank}
            className="grid grid-cols-12 gap-3 items-center py-3 text-sm"
          >
            <div className="col-span-2 sm:col-span-1 text-gray-400">
              {p.rank}
            </div>
            <div className="col-span-10 sm:col-span-4 text-gray-800 truncate">
              {p.name}
            </div>
            <div className="col-span-9 sm:col-span-5">
              <Progress
                percent={p.popularity}
                showInfo={false}
                strokeColor={p.color}
                size="small"
              />
            </div>
            <div className="col-span-3 sm:col-span-2 flex justify-end">
              <span
                className={`px-2 py-0.5 rounded-md text-xs font-medium border ${p.badgeBg} ${p.badgeText}`}
                style={{ borderColor: p.color }}
              >
                {p.sales}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsCard;
