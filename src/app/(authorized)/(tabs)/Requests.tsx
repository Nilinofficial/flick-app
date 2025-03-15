import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import FLHeader from "../../../components/reusable/FLHeader";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FriendCard from "../../../components/friendRequest/FriendCard";
import {
  useGetFriendRequests,
  useGetFriendSuggestions,
} from "../../../queries/useRequests";

interface FriendRequestProps {
  _id: string;
  fromUserId: {
    _id: string;
    firstName: string;
    lastName: string;
    profilePicUrl?: string;
  };
  toUserId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Requests = () => {
  const { data: friendRequests, refetch: refetchFriendRequests } =
    useGetFriendRequests();
  const { data: friendSuggestions, refetch: refetchFriendSuggestions } =
    useGetFriendSuggestions();

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        className="p-4 "
      >
        <FLHeader
          title="Friend Requests"
          icon={<MaterialIcons name="more-vert" size={24} color="white" />}
        />

        <Text className="text-gray-400 mb-2  mt-2">
          You have {friendRequests && friendRequests.length} pending requests
        </Text>

        <View className="flex flex-row flex-wrap w-full gap-4 ">
          {friendRequests &&
            friendRequests.map((friendRequest: FriendRequestProps) => (
              <FriendCard
                key={friendRequest._id}
                requestId={friendRequest._id}
                firstName={friendRequest.fromUserId.firstName}
                lastName={friendRequest.fromUserId.lastName}
                profilePicUrl={friendRequest.fromUserId.profilePicUrl}
              />
            ))}
        </View>

        <View className="flex flex-row w-full items-center justify-between mt-6">
          <Text className="text-white text-2xl font-bold">
            Friend Suggestions
          </Text>
        </View>

        <View className="flex flex-row flex-wrap w-full gap-4 ">
          {friendSuggestions &&
            friendSuggestions.map((friendSuggestion: any) => (
              <FriendCard
                isSuggestion={true}
                key={friendSuggestion._id}
                requestId={friendSuggestion._id}
                firstName={friendSuggestion.firstName}
                lastName={friendSuggestion.lastName}
                profilePicUrl={friendSuggestion.profilePicUrl}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Requests;
