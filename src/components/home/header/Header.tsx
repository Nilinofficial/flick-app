import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Header = () => {
  return (
    <View className="h-14 flex flex-row justify-between items-center p-2 bg-black rounded-lg">
      <View className="flex flex-row">
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>
      <Text className=" text-primaryText font-bold text-2xl italic">Flick</Text>

      <View className="flex flex-row">
        <AntDesign
          name="pluscircleo"
          size={24}
          color="white"
          onPress={() => router.push("/addPosts")}
        />
      </View>
    </View>
  );
};

export default Header;
