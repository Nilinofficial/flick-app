import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../components/Logo";
import { router } from "expo-router";
import { useRegister } from "../../queries/useAuth";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const index = () => {
  const [userConfig, setUserConfig] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending } = useRegister();
  const handleRegister = () => {
    mutate({
      firstName: userConfig.firstName,
      lastName: userConfig.lastName,
      email: userConfig.email,
      password: userConfig.password,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-primaryBg "
    >
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
              onChangeText={(text) =>
                setUserConfig({ ...userConfig, firstName: text })
              }
              placeholder="First Name"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />
            <TextInput
              onChangeText={(text) =>
                setUserConfig({ ...userConfig, lastName: text })
              }
              placeholder="Last Name"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />
            <TextInput
              onChangeText={(text) =>
                setUserConfig({ ...userConfig, email: text })
              }
              placeholder="Email address"
              placeholderTextColor="#6b7280"
              keyboardType="email-address"
              autoCapitalize="none"
              className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl mb-4"
            />

            <View className="flex justify-center">
              <TextInput
                onChangeText={(text) =>
                  setUserConfig({ ...userConfig, password: text })
                }
                placeholder="Password"
                placeholderTextColor="#6b7280"
                secureTextEntry={showPassword ? false : true}
                className="p-2 py-5 bg-primaryInput text-primaryText rounded-xl"
              />

              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#6b7280"
                />
              </Pressable>
            </View>
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
          <Pressable
            onPress={handleRegister}
            disabled={isPending}
            className="w-full bg-blue-600 py-5 rounded-xl mt-3  flex flex-row justify-center items-center "
          >
            <Text className="text-white text-center font-bold text-xl ">
              {!isPending ? "Register" : "Registering"}
            </Text>

            <View className="pl-2">
              {isPending && <ActivityIndicator color="#fafafa" />}
            </View>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default index;
