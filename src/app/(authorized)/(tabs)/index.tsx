import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const index = () => {
  const logout = async () => {
    await AsyncStorage.setItem("@token", "");
    await AsyncStorage.setItem("@user", "");
    router.push("/login");
  };

  return (
    <View>
      <Text>Home</Text>

      <Pressable className="p-4 bg-red-700" onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
