import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSendOtp, useVerifyOtp } from "../../queries/useAuth";

const index = () => {
  const [otp, setOtp] = useState<string>("");
  const { mutate, isPending } = useVerifyOtp();
  const { mutate: sendOtpMutate } = useSendOtp();

  const handleVerifyOtp = () => {
    mutate(otp);
  };

  const handleSendOtp = () => {
    sendOtpMutate();
  };

  return (
    <View className="h-full bg-primaryBg ">
      <View className="flex  flex-col justify-around h-full mx-3">
        <Logo />
        <View className="space-y-4 ">
          <View className="ml-4">
            <Text className="text-5xl  font-semibold text-primaryText">
              Verify OTP
            </Text>

            <View className="mt-4  w-80">
              <Text className="text-lg text-gray-500 ">
                Enter the verification code sent to your registered email.
              </Text>
            </View>
          </View>

          <View className=" flex w-full flex-row justify-center  mt-6">
            <OtpInput
              focusColor="pink"
              numberOfDigits={6}
              onTextChange={(text) => setOtp(text)}
              theme={{
                containerStyle: {
                  paddingHorizontal: 16,
                },
                pinCodeTextStyle: {
                  color: "#fafafa",
                },
              }}
            />
          </View>
        </View>

        <View className=" w-full flex flex-col items-center px-6">
          <Text className="mb-2 text-lg text-primaryText">
            Don't receive OTP?{" "}
            <Text onPress={handleSendOtp} className="text-blue-500">
              Resend OTP
            </Text>
          </Text>
          <Pressable
            onPress={handleVerifyOtp}
            className="w-full bg-blue-600 py-5 rounded-xl mt-3  flex flex-row justify-center items-center "
            disabled={isPending}
          >
            <Text className="text-white text-center font-bold text-xl ">
              {!isPending ? "Verify" : "Verifying"}
            </Text>

            <View className="pl-2">
              {isPending && <ActivityIndicator color="#fafafa" />}
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default index;
