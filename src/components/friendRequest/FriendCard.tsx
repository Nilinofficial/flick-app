import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  useAddConnectionRequest,
  useRespondRequest,
} from "../../queries/useRequests";

interface FriendCardProps {
  firstName: string;
  lastName: string;
  requestId: string;
  profilePicUrl?: string;
  isSuggestion?: boolean;
}

const FriendCard = ({
  firstName,
  lastName,
  requestId,
  profilePicUrl,
  isSuggestion = false,
}: FriendCardProps) => {
  const { mutate: mutateRequest } = useRespondRequest();
  const { mutate: mutateConnection } = useAddConnectionRequest();

  const handleRequest = (status: string, id: string) => {
    if (isSuggestion) mutateConnection({ status, userId: id });
    else mutateRequest({ status, userId: id });
  };

  return (
    <View className="mt-4 p-6 bg-gray-900 flex flex-row rounded-full w-full items-center justify-between">
      <Image
        source={{
          uri: profilePicUrl,
        }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}
      />

      <View className="items-start">
        <View className="flex flex-row">
          <Text
            className="text-center text-white font-bold"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ maxWidth: 120, flexShrink: 1 }}
          >
            {`${firstName} ${lastName}`}
          </Text>
          {!isSuggestion && <Text className="text-white"> wants</Text>}
        </View>

        {!isSuggestion && <Text className="text-white">to be your friend</Text>}
      </View>

      <View className="flex flex-col items-center justify-center gap-3">
        <Pressable
          onPress={() =>
            handleRequest(isSuggestion ? "interested" : "accepted", requestId)
          }
          className="bg-green-700 p-1 rounded-full px-4"
        >
          <Text className="text-white font-bold">
            {isSuggestion ? "CONNECT" : "ACCEPT"}
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            handleRequest(isSuggestion ? "ignored" : "rejected", requestId)
          }
          className="bg-red-700 p-1 px-4 rounded-full"
        >
          <Text className="text-white font-bold">
            {isSuggestion ? "IGNORE" : "REJECT"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FriendCard;
