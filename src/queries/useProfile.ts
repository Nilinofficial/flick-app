import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = process.env.BASE_URL;

export const fetchProfile = async () => {
  const token = await AsyncStorage.getItem("@token");

  const profileData = await axios.get(`${BASE_URL}/profile`, {
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
