import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ChangeEvent, KeyboardEvent } from "react";

type SearchBoxProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
};

const SearchBox = ({
  placeholder = "Search here...",
  value,
  onChange,
  onSearch,
  className = "",
}: SearchBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    onSearch?.((e.target as HTMLInputElement).value);
  };

  return (
    <Input
      size="large"
      variant="filled"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onPressEnter={handlePressEnter}
      prefix={<SearchOutlined className="text-brand text-base" />}
      className={`rounded-full! bg-gray-100! hover:bg-gray-100! ${className}`}
    />
  );
};

export default SearchBox;
