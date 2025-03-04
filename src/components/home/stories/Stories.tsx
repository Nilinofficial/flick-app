import { ScrollView } from "react-native";
import { stories } from "../../../contants";
import StoryCard from "./StoryCard";

const Stories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="w-full mt-2"
    >
      {stories.map((story) => (
        <StoryCard key={story.id} url={story.storyUrl} />
      ))}
    </ScrollView>
  );
};

export default Stories;
