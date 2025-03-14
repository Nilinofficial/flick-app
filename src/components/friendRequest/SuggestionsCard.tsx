import { View, Text, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";

const SuggestionsCard = ({ firstName, lastName, profilePicUrl }: any) => {
  return (
    <View className="mt-4 p-6 bg-gray-900 flex flex-row  rounded-full w-full items-center justify-between">
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
            className="text-center text-white font-bold "
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ maxWidth: 120, flexShrink: 1 }}
          >
            {`${firstName} ${lastName}`}
          </Text>
        </View>
      </View>

      <View className="flex flex-col items-center justify-center  gap-3">
        <Pressable className="bg-green-700 p-1 rounded-full px-4 ">
          <Text className="text-white font-bold">ADD FRIEND</Text>
        </Pressable>

        <Pressable className="bg-red-700 p-1 px-4 rounded-full ">
          <Text className="text-white font-bold">IGNORE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SuggestionsCard;
