import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { useLogin } from "../../queries/useAuth";
import { router } from "expo-router";

const index = () => {
  const [userConfig, setUserConfig] = useState({ email: "", password: "" });
  const { mutate, error, isError, isPending } = useLogin();

  const handleSubmit = () => {
    mutate({ email: userConfig.email, password: userConfig.password });
  };

  const showToast = (error: string | undefined) => {
    ToastAndroid.show(error || "", ToastAndroid.SHORT);
  };

  useEffect(() => {
    if (isError) {
      showToast(error.response?.data.message);
    }
  }, [isError]);

  return (
    <View className="h-full bg-primaryBg ">
      <View className="flex  flex-col justify-around h-full mx-3">
        <Logo />
        <View className="space-y-4 ">
          <View className="ml-4">
            <Text className="text-5xl  font-semibold text-primaryText">
              Let's sign you in
            </Text>

            <View className="mt-4 ">
              <Text className="text-2xl text-gray-500">Welcome back,</Text>
              <Text className="text-2xl text-gray-500">You've been missed</Text>
            </View>
          </View>

          <View className="  flex flex-col mx-4 mt-6">
            <TextInput
              value={userConfig.email}
              onChangeText={(text) =>
                setUserConfig({ ...userConfig, email: text })
              }
              placeholder="Enter your email"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />

            <TextInput
              value={userConfig.password}
              onChangeText={(text) =>
                setUserConfig({ ...userConfig, password: text })
              }
              placeholder="Enter your password"
              placeholderTextColor="#6b7280"
              secureTextEntry
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl"
            />
          </View>
        </View>

        <View className=" w-full flex flex-col items-center px-6">
          <Text className="mb-2 text-lg text-primaryText">
            Don't have an account?{" "}
            <Text
              onPress={() => router.push("/register")}
              className="text-blue-500"
            >
              Register
            </Text>
          </Text>
          <Pressable
            className="w-full bg-blue-600 py-5 rounded-xl mt-3  flex flex-row justify-center items-center "
            onPress={handleSubmit}
            disabled={isPending}
          >
            <Text className="text-white text-center font-bold text-xl ">
              Sign In
            </Text>

            <View className="pl-2">
              {isPending && <ActivityIndicator color="fff" />}
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default index;
