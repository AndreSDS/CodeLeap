import { useState } from "react";
import { useSelector } from "react-redux";
import { PostResponse } from "../../schemas";
import { RootState } from "../../redux/store";
import { Header, ModalAlert, ModalEditForm } from "..";
import { formatDate } from "../../helpers/utils";

interface PostProps {
  post: PostResponse;
}

export const Post = ({ post }: PostProps) => {
  const { user } = useSelector((state: RootState) => state.user);
  const [modalInfo, setModalInfo] = useState({
    open: false,
    action: "",
  });

  const { username, title, content, created_datetime } = post;

  const userLogged = localStorage.getItem("user") || "";
  const userLoggedName = JSON.parse(userLogged).username || "";

  const isOwner = [userLoggedName, user.username].includes(username);
  const dateFormated = `${formatDate(created_datetime)} ago`;

  const handleEdit = () => {
    setModalInfo({
      open: true,
      action: "edit",
    });
  };

  const handleDelete = () => {
    setModalInfo({
      open: true,
      action: "delete",
    });
  };

  const closeModal = () => {
    setModalInfo({
      open: false,
      action: "",
    });
  };

  return (
    <>
      {modalInfo.action === "delete" && (
        <ModalAlert
          postId={post.id}
          title="Are you sure you want to delete this post?"
          onCancel={closeModal}
        />
      )}

      {modalInfo.action === "edit" && (
        <ModalEditForm post={post} onCancel={closeModal} />
      )}

      <div className="post w-full overflow-hidden bg-white rounded-2xl border-[1px] border-solid border-[#999]">
        <Header
          title={title}
          isOwner={isOwner}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <div className="content p-6">
          <div className="info mb-4 flex items-center justify-between">
            <strong className="font-bold text-[18px]/[21px] text-[#777]">
              {username}
            </strong>
            <span className="text-[18px]/[21px] text-[#777]">
              {dateFormated}
            </span>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <p className="flex items-center flex-wrap overflow-hidden">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
