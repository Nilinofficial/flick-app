import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import UserPhotoImage from "./UserPhotoImage";

const UserPhotoGrid = () => {
  return (
    <View className="flex flex-row flex-wrap gap-4 w-full justify-between  mt-8 px-4">
      <UserPhotoImage />
      <UserPhotoImage />
      <UserPhotoImage />
      <UserPhotoImage />
      <UserPhotoImage />
      <UserPhotoImage />
    </View>
  );
};

export default UserPhotoGrid;
