import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const UserPhotoImage = () => {
  return (
    <Image
      source={{
        uri: "https://static.toiimg.com/thumb/msid-115198452,width-1280,height-720,resizemode-4/115198452.jpg",
      }}
      style={{
        width: 185,
        height: 200,
        objectFit: "cover",
        borderRadius: 10,
      }}
    />
  );
};

export default UserPhotoImage;
