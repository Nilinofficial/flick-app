import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { useProfile } from "../../../queries/useProfile";
import UserImage from "../../../components/profile/UserImage";
import UserDetails from "../../../components/profile/UserDetails";
import UserInteraction from "../../../components/profile/UserInteraction";
import UserPhotoGrid from "../../../components/profile/UserPhotoGrid";

const Profile = () => {
  const { data: profile } = useProfile();

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView>
        <UserImage />
        <UserDetails firstName={profile?.data.firstName} />
        <UserInteraction />
        <UserPhotoGrid />

        <View className="mt-32"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
