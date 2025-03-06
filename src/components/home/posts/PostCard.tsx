import {
  View,
  Text,
  Image,
  Dimensions,
  NativeSyntheticEvent,
  ImageLoadEventData,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import PostReactions from "./PostReactions";

interface PostProps {
  username: string;
  postUrl: string;
  caption: string;
}

const PostCard = ({ username, postUrl, caption }: PostProps) => {
  const screenWidth = Dimensions.get("window").width;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageRatio, setImageRatio] = useState(1);

  const handleImageLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { width, height } = e.nativeEvent.source;
    setImageRatio(height / width);
    setImageLoaded(true);
  };

  return (
    <View className="w-full mt-4 pt-3 flex flex-col  overflow-hidden">
      <View className="flex flex-row justify-between items-center w-full">
        <View className="flex flex-row items-center gap-2">
          <Image
            source={{
              uri: "https://i.ibb.co/kkP7PWc/its-me-nilin-20250306-0001.jpg",
            }}
            className="w-10 h-10 rounded-full bg-orange-800"
          />
          <View className="flex flex-col">
            <Text className="text-white">{username}</Text>
            <Text className="text-gray-500 text-sm">Some Place, Erumely</Text>
          </View>
        </View>

        <View>
          <MaterialIcons name="more-horiz" size={28} color="white" />
        </View>
      </View>

      <View className="mt-4 bg-slate-500 rounded-md">
        <Image
          source={{
            uri: postUrl,
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
      <PostReactions />

      <View className="flex flex-row items-center gap-3 mt-2">
        <Text className="text-white font-bold">{username}</Text>
        <Text className="text-white">{caption}</Text>
      </View>
    </View>
  );
};

export default PostCard;
