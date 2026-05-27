import TodaysSalesCard from "../components/molecules/dashboard/TodaysSalesCard";
import VisitorInsightsCard from "../components/molecules/dashboard/VisitorInsightsCard";
import TotalRevenueCard from "../components/molecules/dashboard/TotalRevenueCard";
import CustomerSatisfactionCard from "../components/molecules/dashboard/CustomerSatisfactionCard";
import TargetVsRealityCard from "../components/molecules/dashboard/TargetVsRealityCard";
import TopProductsCard from "../components/molecules/dashboard/TopProductsCard";
import SalesMappingCard from "../components/molecules/dashboard/SalesMappingCard";
import VolumeServiceCard from "../components/molecules/dashboard/VolumeServiceCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {/* Row 1 — 2 columns (2:1 on lg+) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <TodaysSalesCard />
        </div>
        <div className="lg:col-span-1">
          <VisitorInsightsCard />
        </div>
      </div>

      {/* Row 2 — 3 columns (2:1:1 on lg+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="md:col-span-2 lg:col-span-2">
          <TotalRevenueCard />
        </div>
        <div className="lg:col-span-1">
          <CustomerSatisfactionCard />
        </div>
        <div className="lg:col-span-1">
          <TargetVsRealityCard />
        </div>
      </div>

      {/* Row 3 — 3 columns (2:1:1 on lg+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="md:col-span-2 lg:col-span-2">
          <TopProductsCard />
        </div>
        <div className="lg:col-span-1">
          <SalesMappingCard />
        </div>
        <div className="lg:col-span-1">
          <VolumeServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
