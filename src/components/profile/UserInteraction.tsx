import { View, Text, Pressable } from "react-native";
import React from "react";

const UserInteraction = () => {
  return (
    <View className="w-full items-center -mt-14">
      {/* <View className="flex flex-row gap-4">
        <Pressable
          className="bg-blue-400 w-36 rounded-md py-3 flex items-center justify-center"
          android_ripple={{
            color: "rgba(255, 255, 255, 0.3)",
            borderless: false,
          }}
        >
          <Text className="text-primaryText text-center font-bold">Follow</Text>
        </Pressable>
        <Pressable
          android_ripple={{
            color: "rgba(0, 122, 255, 0.2)",
            borderless: false,
          }}
          className="border-2 border-blue-500 w-36 rounded-md py-3 flex items-center justify-center"
        >
          <Text className="text-primaryText">Message</Text>
        </Pressable>
      </View> */}
    </View>
  );
};

export default UserInteraction;
