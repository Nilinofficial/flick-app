import { Pressable, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const UserImage = () => {
  const handleLogout = async () => {
    await AsyncStorage.setItem("@token", "");
    await AsyncStorage.setItem("@user", "");
    router.push("/login");
  };

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
          uri: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
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
