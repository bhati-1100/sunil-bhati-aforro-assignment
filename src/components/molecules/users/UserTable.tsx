import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { User } from "../../../services/Types/user";

interface UserTableProps {
  users: User[];
  isLoading: boolean;
}

const Usertable: React.FC<UserTableProps> = ({ users, isLoading }) => {
  const columns: ColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Company Name",
      dataIndex: ["company", "name"],
      key: "company",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
  ];

  return (
    <Table<User>
      rowKey="id"
      columns={columns}
      dataSource={users}
      loading={isLoading}
      pagination={{ pageSize: 10 }}
      scroll={{ x: "max-content" }}
    />
  );
};

export default React.memo(Usertable);
