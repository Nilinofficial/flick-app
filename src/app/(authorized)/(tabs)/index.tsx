import { Pressable, ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/home/Header";
import Stories from "../../../components/home/stories/Stories";
import Posts from "../../../components/home/posts/Posts";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Header />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        className="p-4"
      >
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
