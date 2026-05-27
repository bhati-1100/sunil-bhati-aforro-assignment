import { WorldMap, type DataItem } from "react-svg-worldmap";

const data: DataItem<number>[] = [
  { country: "us", value: 80 },
  { country: "ca", value: 30 },
  { country: "br", value: 70 },
  { country: "mx", value: 60 },
  { country: "gb", value: 45 },
  { country: "fr", value: 40 },
  { country: "de", value: 35 },
  { country: "in", value: 75 },
  { country: "cn", value: 90 },
  { country: "ru", value: 55 },
  { country: "au", value: 25 },
  { country: "za", value: 30 },
];

const SalesMappingCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Sales Mapping by Country
      </h2>

      <div className="flex-1 flex items-center justify-center min-h-40">
        <WorldMap
          color="#3b82f6"
          backgroundColor="transparent"
          borderColor="#e5e7eb"
          size="responsive"
          data={data}
          richInteraction
        />
      </div>
    </div>
  );
};

export default SalesMappingCard;
