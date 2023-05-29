"use client";

import { useEffect } from "react";

interface AlertProps {
  children: React.ReactNode;
  show: boolean;
  onClose?: () => void;
}

export default function Alert({ children, show, onClose }: AlertProps) {
  useEffect(() => {
    if (!onClose) return;

    if (show) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  });

  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-200 ease-in-out`}
      role="dialog"
      data-modal-is-show={show ? "true" : "false"}
    >
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div
        className={`bg-white dark:bg-gray-900 rounded-lg p-8 w-[90%] md:w-[70%] lg:w-[40%] max-h-screen overflow-auto relative ${
          show ? "scale-100" : "scale-0"
        } transition-all duration-200 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
}
