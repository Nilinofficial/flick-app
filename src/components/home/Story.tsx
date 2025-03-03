import { View, Text, Image } from "react-native";
import React from "react";

const Story = () => {
  return (
    <View className="px-2">
      <View className="rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 p-[2px]">
        <Image
          source={{
            uri: "https://static.toiimg.com/thumb/msid-115198452,imgsize-34448,width-400,resizemode-4/115198452.jpg",
          }}
          className="w-16 h-16 rounded-full"
          alt="story-image"
        />
      </View>
    </View>
  );
};

export default Story;
