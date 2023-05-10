import { Label } from "..";

export interface InputProps {
  label: string;
  placeHolder: string;
  register: any;
}

export const Input = ({ label, placeHolder, register }: InputProps) => {
  return (
    <div className="w-full">
      <Label title={label} />

      <input
        {...register}
        className="w-full p-2 mt-2 border-[1px] border-solid border-[#777777] rounded-lg"
        placeholder={placeHolder}
      />
    </div>
  );
};
