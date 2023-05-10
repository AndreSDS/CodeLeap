import { FC } from "react";
import { Label } from "..";

interface TextAreaProps {
  label: string;
  placeHolder: string;
  register: any;
}

export const TextArea: FC<TextAreaProps> = ({
  label,
  placeHolder,
  register,
}) => {
  return (
    <div className="w-full">
      <Label title={label} />

      <textarea
        placeholder={placeHolder}
        {...register}
        className="w-full p-2 mt-2 border-[1px] border-solid border-[#777777] rounded-lg"
      />
    </div>
  );
};
