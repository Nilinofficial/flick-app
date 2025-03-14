import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useProfile } from "../../../queries/useProfile";

const Profile = () => {
  const handleLogout = async () => {
    await AsyncStorage.setItem("@token", "");
    await AsyncStorage.setItem("@user", "");
    router.push("/login");
  };

  const { data: profile } = useProfile();

  console.log(profile?.data.firstName);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView>
        <Pressable
          onPress={handleLogout}
          className="bg-blue-300 text w-48 mt-10 p-8"
        >
          <Text>Logout</Text>
        </Pressable>

        <Text className="text-white">{profile && profile.data.firstName}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
