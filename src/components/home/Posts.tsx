import { View, Image } from "react-native";
import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <View className="flex flex-col gap-6">
      <Post />
      <Post />
      <Post />
      <Post />
    </View>
  );
};

export default Posts;
