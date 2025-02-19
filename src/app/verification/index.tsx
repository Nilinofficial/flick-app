import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuthSession } from "../../providers/AuthProvider";

const index = () => {
  const logout = async () => {
    await AsyncStorage.setItem("@token", "");
    await AsyncStorage.setItem("@user", "");
    router.push("/login");
  };
  const { userDetails } = useAuthSession();
  return (
    <View>
      <Text>Verficiation</Text>

      <Text>{userDetails?.email}</Text>

      <Text>{userDetails?.isVerified ? "true" : "false"}</Text>

      <Pressable className="p-4 bg-red-700" onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
