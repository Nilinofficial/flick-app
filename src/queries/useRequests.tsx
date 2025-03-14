import axios from "axios";
import { BASE_URL } from "../contants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

interface RespondRequestProps {
  status: string;
  userId: string;
}

interface ConnectionRequestProps {
  status: string;
  userId: string;
}

const getRequests = async () => {
  const token = await AsyncStorage.getItem("@token");
  const response = await axios.get(`${BASE_URL}/user/requests`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

const respondToRequest = async ({ status, userId }: RespondRequestProps) => {
  const token = await AsyncStorage.getItem("@token");
  await axios.post(
    `${BASE_URL}/request/respond/${status}/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    }
  );
};

const getFriendSuggestions = async () => {
  const token = await AsyncStorage.getItem("@token");
  const response = await axios.get(`${BASE_URL}/user/findFriends`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

const addorRejectConnection = async ({
  status,
  userId,
}: ConnectionRequestProps) => {
  const token = await AsyncStorage.getItem("@token");

  await axios.post(
    `${BASE_URL}/request/send/${status}/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const useGetFriendRequests = () => {
  return useQuery({
    queryFn: getRequests,
    queryKey: ["getFriendRequests"],
  });
};

export const useRespondRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: respondToRequest,
    mutationKey: ["respondToRequest"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getFriendRequests"] });
    },
  });
};

export const useGetFriendSuggestions = () => {
  return useQuery({
    queryKey: ["getFriendSuggestion"],
    queryFn: getFriendSuggestions,
  });
};

export const useAddConnectionRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addorRejectConnection,
    mutationKey: ["addOrRejectConnection"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getFriendRequests", "getFriendSuggestion"],
      });
    },
  });
};
