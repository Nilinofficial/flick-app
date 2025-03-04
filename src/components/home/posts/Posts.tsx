import { View } from "react-native";
import { posts } from "../../../contants";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <View className="flex flex-col gap-6 ">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          postUrl={post.postUrl}
        />
      ))}
    </View>
  );
};

export default Posts;
