import { View, Image } from "react-native";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <View className="w-full flex items-center justify-center">
      <Image
        source={logo}
        style={{ width: 100, height: 80, objectFit: "cover" }}
      />
    </View>
  );
};

export default Logo;
