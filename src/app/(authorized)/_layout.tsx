import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router, Stack } from "expo-router";
import { ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useProfile } from "../../queries/useProfile";
import { setUser } from "../../slices/userSlice";

export default function RootLayout(): ReactNode {
  const [validUser, setValidUser] = useState(true);
  const { data: profileData, isSuccess } = useProfile();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess && profileData?.data) {
      const { email, firstName, lastName, isVerified } = profileData.data;
      dispatch(setUser({ email, firstname: firstName, lastName, isVerified }));
    }
  }, [isSuccess, profileData, dispatch]);

  const isValidUser = async () => {
    const token = await AsyncStorage.getItem("@token");
    if (!token) setValidUser(false);
  };

  useEffect(() => {
    isValidUser();
  }, []);

  if (!validUser) {
    return <Redirect href="/login" />;
  }

  if (validUser && !profileData?.data.isVerified) {
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
