import { Loading } from "..";

interface ButtonProps {
  textButton: string;
  isDisabled: boolean;
  isLoading?: boolean;
  type?: "button" | "submit";
  style?: "cancel" | "confirm" | "delete";
  onClick?: () => void;
}

export const Button = ({
  textButton,
  isDisabled,
  isLoading,
  type = "button",
  style,
  onClick,
}: ButtonProps) => {
  const styles: {
    [key: string]: string;
  } = {
    delete: "bg-[#FF5151] text-white border-none",
    cancel: "bg-white text-black border-[1px] border-solid border-[#999]",
    confirm: "bg-[#47B960] text-white border-none",
  };

  const styleBtn = style
    ? styles[style]
    : "bg-[#7695EC] text-white border-none";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[120px] h-[32px] flex items-center justify-center rounded-lg ${styleBtn} disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={isDisabled}
    >
      {isLoading ? <Loading /> : textButton}
    </button>
  );
};
