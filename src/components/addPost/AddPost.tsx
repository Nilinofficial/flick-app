import {
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { Feather, Ionicons } from "@expo/vector-icons"; // Icons for modern UI
import { useAddPost } from "../../queries/usePosts";

const AddPost = () => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const { mutate: uploadPostFn, isPending } = useAddPost();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const removeImage = () => {
    setImage(null);
    setCaption("");
  };

  const uploadPost = async () => {
    if (!image) {
      Alert.alert("Error", "Please select an image and enter a caption.");
      return;
    }

    let formData: any = new FormData();
    formData.append("caption", caption);
    formData.append("image", {
      uri: image,
      name: `photo_${Date.now()}.jpg`,
      type: "image/jpeg",
    });

    uploadPostFn(formData);
    setImage("");
  };

  return (
    <View className="flex-1 items-center justify-center bg-black px-6">
      <Text className="text-2xl font-semibold text-primaryText mb-6">
        Upload Your Photo
      </Text>

      {image ? (
        <View className="relative">
          <Image
            source={{ uri: image }}
            style={{ width: 176, height: 176, borderRadius: 12 }}
          />
          <Pressable
            className="absolute -top-2 -right-2 bg-red-600 p-2 rounded-full"
            onPress={removeImage}
          >
            <Ionicons name="close" size={16} color="prtext-primaryText" />
          </Pressable>
        </View>
      ) : (
        <View className="w-44 h-44 bg-gray-800 rounded-xl mb-6 flex items-center justify-center">
          <Text className="text-gray-400">No Image Selected</Text>
        </View>
      )}

      <TextInput
        className="w-full bg-gray-800 text-primaryText py-3 px-4 rounded-xl my-4"
        placeholder="Add a caption..."
        placeholderTextColor="#999"
        value={caption}
        onChangeText={(text) => {
          setCaption(text);
        }}
      />

      <View className="w-full flex-row justify-between">
        <Pressable
          className="flex-1 bg-gray-700 py-4 rounded-xl flex-row items-center justify-center mr-2"
          onPress={pickImage}
        >
          <Feather name="image" size={24} color="prtext-primaryText" />
          <Text className="text-primaryText text-lg font-medium ml-2">
            {image ? "Change Image" : "Choose Photo"}
          </Text>
        </Pressable>

        {/* Upload Button */}
        <Pressable
          disabled={isPending}
          onPress={uploadPost}
          className="flex-1 bg-blue-500 py-4 rounded-xl flex-row items-center justify-center ml-2"
        >
          <Feather name="upload" size={24} color="prtext-primaryText" />
          <Text className="text-primaryText text-lg font-medium ml-2">
            {isPending ? "Uploading Post" : "Upload Post"}
          </Text>

          <View className="pl-2">
            {isPending && <ActivityIndicator color="#fafafa" />}
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default AddPost;
