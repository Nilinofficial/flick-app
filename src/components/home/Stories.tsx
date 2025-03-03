import { ScrollView, View } from "react-native";
import React from "react";
import Story from "./Story";

const Stories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="w-full mt-2"
    >
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </ScrollView>
  );
};

export default Stories;
