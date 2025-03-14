import { Text, View } from "react-native";
import PostCard from "./PostCard";
import { useGetAllPosts } from "../../../queries/usePosts";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

const Posts = () => {
  const { data: posts, refetch } = useGetAllPosts();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (!posts) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  }

  return (
    <View className="flex flex-col gap-6 pb-10 ">
      {posts.map((post: any) => (
        <PostCard
          key={post._id}
          username={post.userId.firstName}
          postUrl={post.postUrl}
          caption={post.caption}
        />
      ))}
    </View>
  );
};

export default Posts;
