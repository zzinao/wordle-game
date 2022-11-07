import React, { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div
      className="absolute bg-white rounded text-center shadow-2xl
              w-12/12 h-1/2 p-6 left-0 right-0 mx-auto top-1/4
             grid grid-rows-4"
    >
      {children}
    </div>
  );
};

export default Modal;
