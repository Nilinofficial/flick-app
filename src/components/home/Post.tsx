import {
  View,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  ImageLoadEventData,
  Text,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Post = () => {
  const screenWidth = Dimensions.get("window").width;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageRatio, setImageRatio] = useState(1);

  const handleImageLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { width, height } = e.nativeEvent.source;
    setImageRatio(height / width);
    setImageLoaded(true);
  };

  return (
    <View className="w-full mt-4 flex flex-col  rounded-lg overflow-hidden ">
      <View className="flex flex-row justify-between items-center p-2 ">
        <View className="flex flex-row items-center gap-2 ">
          <Image
            source={{
              uri: "",
            }}
            className="w-10 h-10 rounded-full"
          />
          <Text className="text-white">test_name</Text>
        </View>

        <View>
          <MaterialIcons name="more-horiz" size={24} color="white" />
        </View>
      </View>

      <Image
        source={{
          uri: "https://i.ibb.co/vvHkCPQ3/ann-zarah-20250303-0002.jpg",
        }}
        style={{
          width: screenWidth,
          height: imageLoaded ? screenWidth * imageRatio : screenWidth,
        }}
        alt="post-image"
        resizeMode="contain"
        onLoad={handleImageLoad}
      />
    </View>
  );
};

export default Post;
