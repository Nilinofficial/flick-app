import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { DEV_BASE_URL } from "./useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchProfile = async () => {
  const token = await AsyncStorage.getItem("@token");

  const profileData = await axios.get(`${DEV_BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return profileData;
};

export const useProfile = () => {
  return useQuery({
    queryFn: fetchProfile,
    queryKey: ["fetchUserProfile"],
  });
};
