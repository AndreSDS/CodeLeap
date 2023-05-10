import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <>
      {createPortal(
        <div className="px-6 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#777]/80">
          {children}
        </div>,
        document.body
      )}
    </>
  );
};
