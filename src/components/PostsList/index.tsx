import { FC } from "react";
import { useSelector } from "react-redux";
import { Post } from "../Post";
import { RootState } from "../../redux/store";

export const PostsList: FC = () => {
  const { posts } = useSelector((state: RootState) => state.posts);

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => {
        return <Post key={JSON.stringify(post)} post={post} />;
      })}
    </div>
  );
};
