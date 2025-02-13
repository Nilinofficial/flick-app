import { View, Text, TextInput, Button, Image, Pressable } from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";

const index = () => {
  return (
    <View className="h-full bg-primaryBg ">
      <View className="flex  flex-col justify-around h-full mx-3">
        <View className="w-full flex items-center justify-center">
          <Image
            source={logo}
            style={{ width: 100, height: 80, objectFit: "cover" }}
          />
        </View>

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
              placeholder="Enter your email"
              placeholderTextColor="#6b7280"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#6b7280"
              className="p-2 py-5 bg-primaryInput text-primaryText  rounded-xl"
            />
          </View>
        </View>

        <View className=" w-full flex flex-col items-center px-6">
          <Text className="mb-2 text-lg text-primaryText">
            Don't have an account?{" "}
            <Text className="text-blue-500">Register</Text>
          </Text>
          <Pressable
            className="w-full bg-blue-600 py-5 rounded-xl mt-3 "
            onPress={() => console.log("Sign In Pressed")}
          >
            <Text className="text-white text-center font-bold text-xl">
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default index;
