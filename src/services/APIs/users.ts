import axiosInstance from "../axiosInstance";
import type { User } from "../Types/user";

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axiosInstance.get<User[]>("/users");
  return data;
};
