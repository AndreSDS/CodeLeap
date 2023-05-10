import { FC } from "react";
import { useDispatch } from "react-redux";
import { PostSchema, Post, PostResponse } from "../../schemas";
import { Card, Form, Modal } from "..";
import { editPost } from "../../actions/postSlice";
import { updatePost } from "../../services/postApi";

interface ModalEditProps {
  post: PostResponse;
  onCancel: () => void;
}

export const ModalEditForm: FC<ModalEditProps> = ({ post, onCancel }) => {
  const dispatch = useDispatch();

  const defaultValues = {
    title: post.title,
    content: post.content,
  };

  const onSubmit = async (data: Post) => {
    const postUpdated = await updatePost(post.id, data);

    if (postUpdated) {
      dispatch(editPost(postUpdated));
      onCancel();
    }
  };

  return (
    <Modal>
      <Card addClassName="w-[660px] flex-col gap-6">
        <Form
          titleForm="Edit Item"
          textBtnConfirm="Save"
          btnConfirmStyle="confirm"
          onSubmit={onSubmit}
          schema={PostSchema}
          defaultValues={defaultValues}
          hasBtnCancel
          btnCancelStyle="cancel"
          onCancel={onCancel}
        />
      </Card>
    </Modal>
  );
};
