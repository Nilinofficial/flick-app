import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="h-12 flex flex-row justify-between items-center pl-2 ">
      <Text className=" text-white font-bold text-2xl ">Flick</Text>

      <View className="flex flex-row">
        <AntDesign name="pluscircleo" size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;
