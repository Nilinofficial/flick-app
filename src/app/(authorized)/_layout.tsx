import { Redirect, Stack } from "expo-router";
import { useAuthSession } from "../../providers/AuthProvider";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const { token, isLoading, userDetails } = useAuthSession();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!token) {
    return <Redirect href="/login" />;
  }

  if (token && !userDetails.isVerified) {
    AsyncStorage.setItem("@token", "");
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
