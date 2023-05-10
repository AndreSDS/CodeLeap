import { FC, useEffect } from "react";
import { getPosts } from "../../services/postApi";
import { setPosts } from "../../actions/postSlice";
import { Post } from "../Post";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const PostsList: FC = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);

  async function fetchPosts() {
    const data = await getPosts();

    if (data) {
      dispatch(setPosts(data));
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {posts.map((post) => {
        return <Post key={JSON.stringify(post)} post={post} />;
      })}
    </div>
  );
};
