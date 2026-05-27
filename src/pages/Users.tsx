import { useMemo, useState } from "react";
import { Alert, Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/APIs/users";
import type { User } from "../services/Types/user";
import Usertable from "../components/molecules/users/UserTable";
import SearchBox from "../components/atom/SearchBox";
import { useDebounce } from "../hooks/useDebounce";

const UsersPage = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const [search, setSearch] = useState("");
  const [city, setCity] = useState<string | undefined>(undefined);
  const debouncedSearch = useDebounce(search, 500);

  const cityOptions = useMemo(() => {
    const unique = Array.from(new Set(users.map((u) => u.address.city))).sort();
    return unique.map((c) => ({ label: c, value: c }));
  }, [users]);

  const filteredUsers = useMemo(() => {
    const term = debouncedSearch.trim().toLowerCase();
    return users.filter((u) => {
      const matchesSearch =
        !term ||
        u.name.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term);
      const matchesCity = !city || u.address.city === city;
      return matchesSearch && matchesCity;
    });
  }, [users, debouncedSearch, city]);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
      <h1 className="text-lg font-bold text-gray-900 mb-4">Users</h1>

      {isError && (
        <Alert
          type="error"
          title="Could not load users"
          description={error?.message}
          showIcon
          className="mb-4"
        />
      )}

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <SearchBox
            placeholder="Search by name or email..."
            value={search}
            onChange={setSearch}
            className="w-70!"
          />
        </div>
        <Select
          allowClear
          placeholder="Filter by city"
          options={cityOptions}
          value={city}
          onChange={(value) => setCity(value)}
          size="large"
          className="sm:w-56"
        />
      </div>

      <Usertable users={filteredUsers} isLoading={isLoading} />
    </div>
  );
};

export default UsersPage;
