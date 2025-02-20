import axios, { AxiosError } from "axios";
import { loginProps, registerProps } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthSession } from "../providers/AuthProvider";
import { router } from "expo-router";
import { BASE_URL } from "../contants";
import { fetchProfile } from "./useProfile";
import { showToast } from "../utils/utils";

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

const sendOtp = async () => {
  const token = await AsyncStorage.getItem("@token");
  const response = await axios.post(
    `${BASE_URL}/auth/sendOtp`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

const verifyOtp = async (otp: string) => {
  const token = await AsyncStorage.getItem("@token");
  const response = await axios.post(
    `${BASE_URL}/auth/verifyOtp`,
    { otp },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// queries
export const useLogin = () => {
  const queryClient = useQueryClient();
  const { setToken, setUser } = useAuthSession();
  return useMutation({
    mutationFn: loginUser,
    mutationKey: ["loginUser"],
    onSuccess: async (data) => {
      await AsyncStorage.setItem("@token", data.token);
      setToken(data.token);

      const { data: profileData } = await queryClient.fetchQuery({
        queryKey: ["fetchProfile"],
        queryFn: fetchProfile,
      });
      setUser(profileData);
      if (profileData.isVerified) {
        router.push("/");
      } else {
        await queryClient.fetchQuery({
          queryKey: ["sendOtp"],
          queryFn: sendOtp,
        });
        router.push("/verification");
      }
    },
    onError: (err: AxiosError<ApiError>) => {
      showToast(err.response?.data.message);
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  const { setToken } = useAuthSession();

  return useMutation({
    mutationKey: ["registerUser"],
    mutationFn: registerUser,
    onSuccess: async (data) => {
      await AsyncStorage.setItem("@token", data.token);
      setToken(data.token);
      await queryClient.fetchQuery({
        queryKey: ["sendOtp"],
        queryFn: sendOtp,
      });
      router.push("/verification");
    },
    onError: (err: AxiosError<ApiError>) => {
      showToast(err.response?.data.message);
    },
  });
};

export const useSendOtp = () => {
  return useMutation({
    mutationKey: ["sendOtp"],
    mutationFn: sendOtp,
    onSuccess: (data) => {
      showToast(data.message);
    },
  });
};

export const useVerifyOtp = () => {
  const queryClient = useQueryClient();
  const { setUser } = useAuthSession();
  return useMutation({
    mutationKey: ["verifyOtp"],
    mutationFn: verifyOtp,
    onSuccess: async (data) => {
      console.log(data);

      showToast(data.message);
      const { data: profileData } = await queryClient.fetchQuery({
        queryKey: ["fetchProfile"],
        queryFn: fetchProfile,
      });
      setUser(profileData);
      router.push(profileData.isVerified ? "/" : "/verification");
    },
    onError: (err: AxiosError<ApiError>) => {
      console.log(err);

      showToast(err.response?.data.message);
    },
  });
};
