import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Logo from "../../components/Logo";
import { router } from "expo-router";

const index = () => {
  return (
    <View className="h-full bg-primaryBg ">
      <View className="flex  flex-col justify-around h-full mx-3">
        <Logo />
        <View className="space-y-4 ">
          <View className="ml-4">
            <Text className="text-5xl  font-semibold text-primaryText">
              Lets Flick Up!
            </Text>

            <View className="mt-4">
              <Text className="text-2xl text-gray-500">Welcome aboard,</Text>
              <Text className="text-2xl text-gray-500">
                Your journey starts here!
              </Text>
            </View>
          </View>

          <View className="  flex flex-col mx-4 mt-6">
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#6b7280"
              secureTextEntry
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl"
            />
          </View>
        </View>

        <View className=" w-full flex flex-col items-center px-6">
          <Text className="mb-2 text-lg text-primaryText">
            Already have an account?{" "}
            <Text
              className="text-blue-500"
              onPress={() => router.push("/login")}
            >
              Sign In
            </Text>
          </Text>
          <Pressable className="w-full bg-blue-600 py-5 rounded-xl mt-3  flex flex-row justify-center items-center ">
            <Text className="text-white text-center font-bold text-xl ">
              Register
            </Text>

            <View className="pl-2">
              <ActivityIndicator color="fff" />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default index;
