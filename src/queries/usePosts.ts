import axios, { AxiosError } from "axios";
import { BASE_URL } from "../contants";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddPostData } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApiError } from "./useAuth";
import { router } from "expo-router";

const addPost = async (formData: AddPostData) => {
  const token = await AsyncStorage.getItem("@token");
  await axios.post(`${BASE_URL}/posts/addPost`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};

const getAllPosts = async () => {
  const token = await AsyncStorage.getItem("@token");
  const response = await axios.get(`${BASE_URL}/posts/getAllPosts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.json;
};

export const useAddPost = () => {
  return useMutation({
    mutationFn: addPost,
    mutationKey: ["addPost"],
    onSuccess: () => {
      router.push("/");
    },
    onError: (err: AxiosError<ApiError>) => {
      console.log(err.response?.data.message);
    },
  });
};

export const useGetAllPosts = () => {
  return useQuery({
    queryFn: getAllPosts,
    queryKey: ["getAllPosts"],
  });
};
