import axios, { AxiosError } from "axios";
import { authProfileProps, loginProps } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUser } from "../slices/userSlice";
import { setToken } from "../slices/tokenSlice";

interface ApiError {
  message?: string;
}

export const DEV_BASE_URL = "http://192.168.1.102:4000";
const loginUser = async ({ email, password }: loginProps) => {
  const response = await axios.post(`${DEV_BASE_URL}/auth/login`, {
    email,
    password,
  });

  return response.data;
};
const fetchProfile = async () => {
  const token = await AsyncStorage.getItem("@token");

  const profileData = await axios.get(`${DEV_BASE_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return profileData;
};

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    mutationKey: ["loginUser"],
    onSuccess: async (data) => {
      await AsyncStorage.setItem("@token", data.token);
      dispatch(setToken(data.token));

      const { data: profileData } = await queryClient.fetchQuery({
        queryKey: ["fetchProfile"],
        queryFn: fetchProfile,
      });

      if (profileData.isVerified) {
        router.push("/");
      } else {
        router.push("/verification");
      }
    },
    onError: (err: AxiosError<ApiError>) => {
      return err;
    },
  });
};
