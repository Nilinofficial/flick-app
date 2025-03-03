import { Pressable, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/home/Header";
import Stories from "../../../components/home/Stories";
import Posts from "../../../components/home/Posts";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Header />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
