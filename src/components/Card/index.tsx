import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  addClassName?: string;
}

export const Card = ({ children, addClassName }: CardProps) => {
  return (
    <div
      className={`flex items-center justify-center p-6 bg-white border-[1px] border-solid border-[#999] rounded-2xl ${addClassName}`}
    >
      {children}
    </div>
  );
};
