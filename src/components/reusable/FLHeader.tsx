import { View, Text } from "react-native";
import React from "react";

interface FLHeaderProps {
  title: string;
  icon: React.ReactNode;
}

const FLHeader = ({ title, icon }: FLHeaderProps) => {
  return (
    <View className="flex flex-row w-full items-center justify-between">
      <Text className="text-white text-2xl font-bold">{title}</Text>

      <View>{icon}</View>
    </View>
  );
};

export default FLHeader;
