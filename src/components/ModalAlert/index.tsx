import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Modal } from "..";
import { removePost } from "../../actions/postSlice";
import { deletePost } from "../../services/postApi";

interface ModalAlertProps {
  postId: number;
  title: string;
  onCancel: () => void;
}

export const ModalAlert: FC<ModalAlertProps> = ({
  title,
  postId,
  onCancel,
}) => {
  const dispatch = useDispatch();
  const [isLoagind, setIsLoading] = useState(false);

  const onConfirm = async () => {
    setIsLoading(true);

    await deletePost(postId);

    setIsLoading(false);

    dispatch(removePost(postId));
  };

  return (
    <Modal>
      <Card addClassName="flex-col gap-10 w-[660px]">
        <h1 className="text-left w-full font-bold text-[22px]/[26px] text-black">
          {title}
        </h1>

        <div className="ml-auto flex items-center gap-4">
          <Button
            onClick={onCancel}
            textButton="Cancel"
            isDisabled={false}
            style="cancel"
          />

          <Button
            onClick={onConfirm}
            textButton="Delete"
            isDisabled={false}
            style="delete"
            isLoading={isLoagind}
          />
        </div>
      </Card>
    </Modal>
  );
};
