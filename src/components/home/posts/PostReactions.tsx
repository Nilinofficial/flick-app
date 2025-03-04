import { View, Text } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const PostReactions = () => {
  return (
    <View className="flex flex-row pt-2 items-center justify-between">
      <View className="flex flex-row pt-2 gap-3">
        <View className="flex flex-row items-center gap-1">
          <FontAwesome6 name="heart" size={24} color="white" />
          <Text className="text-white text-md">102</Text>
        </View>
        <View className="flex flex-row items-center gap-1">
          <FontAwesome6 name="comment" size={24} color="white" />
          <Text className="text-white text-md">25</Text>
        </View>
        <MaterialIcons name="send" size={26} color="white" />
      </View>
      <View>
        <FontAwesome6 name="bookmark" size={24} color="white" />
      </View>
    </View>
  );
};

export default PostReactions;
