import axios, { AxiosError } from "axios";
import { loginProps } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthSession } from "../providers/AuthProvider";
import { router } from "expo-router";

interface ApiError {
  message?: string;
}

const BASE_URL = process.env.BASE_URL;
const loginUser = async ({ email, password }: loginProps) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });

  return response.data;
};

export const useLogin = () => {
  const { setToken } = useAuthSession();
  return useMutation({
    mutationFn: loginUser,
    mutationKey: ["loginUser"],
    onSuccess: async (data) => {
      await AsyncStorage.setItem("@token", data.token);
      setToken(data.token);
      router.push("/");
    },
    onError: (err: AxiosError<ApiError>) => {
      return err;
    },
  });
};
