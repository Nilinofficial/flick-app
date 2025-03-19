import { View, Text } from "react-native";
import React from "react";

interface UserDetailsProps {
  firstName: string;
}

const UserDetails = ({ firstName }: UserDetailsProps) => {
  return (
    <View className=" self-center w-full  items-center   bottom-14">
      <View className="items-center">
        <Text className="text-primaryText  font-bold text-2xl">
          {firstName}
        </Text>

        <Text className="text-gray-400 text-sm ">Member of ABC industry</Text>
      </View>

      <View className="flex flex-row items-center  justify-center   gap-20  mt-6 ml-4 ">
        <View className="flex flex-col items-center">
          <Text className="text-primaryText font-bold">110</Text>
          <Text className="text-primaryText">Posts</Text>
        </View>

        <View className="flex flex-col items-center">
          <Text className="text-primaryText font-bold">700</Text>
          <Text className="text-primaryText">Followers</Text>
        </View>

        <View className="flex flex-col items-center">
          <Text className="text-primaryText font-bold">150</Text>
          <Text className="text-primaryText">Following</Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
