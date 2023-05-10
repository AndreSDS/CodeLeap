import { useDispatch, useSelector } from "react-redux";
import { Post, PostRequest, PostResponse, PostSchema } from "../../schemas";
import { RootState } from "../../redux/store";
import { setPosts } from "../../actions/postSlice";
import { Card, Form, Header, PostsList } from "../../components";
import { createPost } from "../../services/postApi";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);
  const { user } = useSelector((state: RootState) => state.user);

  const defaultValues = {
    title: "",
    content: "",
  };

  const onSubmit = async (data: Post) => {
    const postRequest: PostRequest = {
      username: user.username,
      ...data,
    };

    const newPost = await createPost(postRequest);

    const postListUpdated = [newPost, ...posts] as PostResponse[];
    dispatch(setPosts(postListUpdated));
  };

  return (
    <main className="h-full w-full overflow-auto">
      <div className="w-full flex items-center justify-center bg-[#7695EC]">
        <Header title="CodeLeap Network" addClassName="max-w-3xl" />
      </div>

      <div className="flex flex-col gap-6 py-6 px-6 max-w-3xl mx-auto">
        <Card addClassName="border-[#ccc] flex-col gap-6 items-start">
          <Form
            titleForm="What's on your mind?"
            textBtnConfirm="Create"
            onSubmit={onSubmit}
            schema={PostSchema}
            defaultValues={defaultValues}
          />
        </Card>

        <PostsList />
      </div>
    </main>
  );
};
