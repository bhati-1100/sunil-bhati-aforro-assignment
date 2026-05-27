import { Avatar, Badge, Button, Dropdown } from "antd";
import {
  BellOutlined,
  DownOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SearchBox from "../atom/SearchBox";

type HeaderProps = {
  onOpenSidebar: () => void;
};

const languageItems = [
  { key: "en-us", label: "🇺🇸 English (US)" },
  { key: "en-uk", label: "🇬🇧 English (UK)" },
];

const profileItems = [
  { key: "profile", label: "My Profile" },
  { key: "settings", label: "Settings" },
  { type: "divider" as const },
  { key: "signout", label: "Sign Out", danger: true },
];

const Header = ({ onOpenSidebar }: HeaderProps) => {
  return (
    <div className="h-full flex justify-between items-center gap-4 px-4 sm:px-8">
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={onOpenSidebar}
        className="lg:hidden!"
        aria-label="Open menu"
      />

      <h1 className="text-lg sm:text-xl font-bold shrink-0">Dashboard</h1>

      <div className="hidden md:block flex-1 max-w-sm">
        <SearchBox />
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <Dropdown menu={{ items: languageItems }} trigger={["click"]}>
          <button className="hidden md:flex items-center gap-2 cursor-pointer">
            <span className="text-base">🇺🇸</span>
            <span className="text-sm font-medium text-gray-800">Eng (US)</span>
            <DownOutlined className="text-[10px] text-gray-400" />
          </button>
        </Dropdown>

        <Badge dot color="red" offset={[-4, 4]}>
          <button className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center cursor-pointer">
            <BellOutlined className="text-amber-500 text-lg" />
          </button>
        </Badge>

        <Dropdown menu={{ items: profileItems }} trigger={["click"]}>
          <button className="flex items-center gap-6 cursor-pointer">
            <div className="flex items-center gap-2">
              <Avatar
                size={40}
                icon={<UserOutlined />}
                className="bg-blue-100! text-blue-500!"
              />
              <div className="hidden sm:block text-left leading-tight">
                <div className="text-sm font-semibold text-gray-900">
                  Musfiq
                </div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            </div>
            <DownOutlined className="hidden sm:inline text-[10px] text-gray-400" />
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
