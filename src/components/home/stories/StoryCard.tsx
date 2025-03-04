import { View, Text, Image } from "react-native";
import React from "react";

interface StoryProps {
  url: string;
}

const StoryCard = ({ url }: StoryProps) => {
  return (
    <View className="px-2">
      <View className="rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 p-[2px]">
        <Image
          source={{
            uri: url,
          }}
          className="w-16 h-16 rounded-full"
          alt="story-image"
        />
      </View>
    </View>
  );
};

export default StoryCard;
