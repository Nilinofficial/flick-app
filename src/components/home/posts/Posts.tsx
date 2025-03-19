import { Text, View } from "react-native";
import PostCard from "./PostCard";

type Post = {
  __v: number;
  _id: string;
  caption: string;
  createdAt: string;
  postUrl: string;
  updatedAt: string;
  userId: {
    _id: string;
    firstName: string;
  };
};

type PostsProps = {
  posts: Post[];
};

const Posts = ({ posts }: PostsProps) => {
  if (!posts || posts.length === 0) {
    return (
      <>
        <Text>No Posts...</Text>
      </>
    );
  }

  return (
    <View className="flex flex-col gap-6 pb-10 ">
      {posts
        .slice()
        .reverse()
        .map((post: any) => (
          <PostCard
            key={post._id}
            username={post.userId.firstName}
            postUrl={post.postUrl}
            caption={post.caption}
            profilePicUrl={post.userId.profilePicUrl}
          />
        ))}
    </View>
  );
};

export default Posts;
