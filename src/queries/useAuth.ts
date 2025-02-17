import axios, { AxiosError } from "axios";
import { loginProps, registerProps } from "../types";
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthSession } from "../providers/AuthProvider";
import { router } from "expo-router";
import { BASE_URL } from "../contants";

interface ApiError {
  message?: string;
}

const loginUser = async ({ email, password }: loginProps) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });

  return response.data;
};

const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}: registerProps) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, {
    firstName,
    lastName,
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

export const useRegister = () => {
  const { setToken } = useAuthSession();

  return useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUser,
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
