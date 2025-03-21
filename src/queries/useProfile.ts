import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../contants";

export const fetchProfile = async () => {
  const token = await AsyncStorage.getItem("@token");

  return await axios.get(`${BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const useProfile = () => {
  return useQuery({
    queryFn: fetchProfile,
    queryKey: ["fetchUserProfile"],
  });
};
