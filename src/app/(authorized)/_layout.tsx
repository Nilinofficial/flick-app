import { Redirect, Stack } from "expo-router";
import { useAuthSession } from "../../providers/AuthProvider";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const { token, isLoading, userDetails, isFetching } = useAuthSession();

  if (isLoading || isFetching) {
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
    return <Redirect href="/verification" />;
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
