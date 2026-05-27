import { Menu, Button } from "antd";
import {
  AppleOutlined,
  DashboardOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

type SidebarProps = {
  onNavigate?: () => void;
};

const menuItems = [
  { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
  { key: "/users", icon: <UserOutlined />, label: "Users" },
  { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
  { key: "/signout", icon: <LogoutOutlined />, label: "Sign Out" },
];

const Sidebar = ({ onNavigate }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedKey =
    menuItems.find(
      (item) =>
        item.key === location.pathname ||
        (item.key !== "/" && location.pathname.startsWith(item.key))
    )?.key ?? "/";

  const handleClick = ({ key }: { key: string }) => {
    navigate(key);
    onNavigate?.();
  };

  return (
    <div className="h-full flex flex-col p-5 gap-6">
      <div className="flex items-center gap-2.5 px-2">
        <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-lg">
          <AppleOutlined />
        </span>
        <span className="text-xl font-bold text-gray-900">Dabang</span>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
        onClick={handleClick}
        className="border-none! flex-1"
      />

      <div className="rounded-2xl bg-brand-soft p-4 text-center">
        <div className="w-10 h-10 rounded-full bg-brand mx-auto mb-3" />
        <div className="font-semibold text-gray-900">Dabang Pro</div>
        <div className="text-xs text-gray-500 mb-3">
          Get access to all features on Dabang
        </div>
        <Button type="primary" block>
          Get Pro
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
