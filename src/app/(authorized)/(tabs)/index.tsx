import { useState, useCallback } from "react";
import { ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/home/Header";
import Stories from "../../../components/home/stories/Stories";
import Posts from "../../../components/home/posts/Posts";
import { useGetAllPosts } from "../../../queries/usePosts";
import { useFocusEffect } from "expo-router";

const Index = () => {
  const { data: posts, refetch } = useGetAllPosts();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    refetch();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-black pb-16">
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        className="p-4"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            // progressViewOffset={50}
          />
        }
      >
        <Header />
        <Stories />
        <Posts posts={posts} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
