import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuthSession } from "../../../providers/AuthProvider";
import Header from "../../../components/home/Header";
import Stories from "../../../components/home/Stories";

const index = () => {
  const { userDetails } = useAuthSession();

  const logout = async () => {
    await AsyncStorage.setItem("@token", "");
    await AsyncStorage.setItem("@user", "");
    router.push("/login");
  };

  return (
    <View className="bg-black flex-1">
      <Header />
      <Stories />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
