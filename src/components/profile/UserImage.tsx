import { Pressable, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useAuthSession } from "../../providers/AuthProvider";

const UserImage = () => {
  const handleLogout = async () => {
    await AsyncStorage.setItem("@token", "");
    await AsyncStorage.setItem("@user", "");
    router.push("/login");
  };

  const { userDetails } = useAuthSession();

  return (
    <View>
      <Image
        source={{
          uri: "https://static.vecteezy.com/system/resources/thumbnails/023/790/661/small_2x/beautiful-lake-under-the-mountains-ai-generated-photo.jpg",
        }}
        style={{ width: "auto", height: 220, objectFit: "cover" }}
      />
      <Image
        source={{
          uri:
            userDetails.profilePicUrl ||
            "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
        }}
        style={{
          width: 120,
          height: 120,
          objectFit: "cover",
          borderRadius: 70,
          bottom: 60,
          alignSelf: "center",
        }}
      />

      <Pressable onPress={handleLogout} className="absolute right-4 top-4  ">
        <MaterialIcons name="logout" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default UserImage;
