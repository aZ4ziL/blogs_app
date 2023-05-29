"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

interface ModalProps {
  show: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function Modal({ show, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (modalRef.current.dataset.modalIsShow === "true") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div
      ref={modalRef}
      className={`fixed z-50 inset-0 flex items-center justify-center ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-200 ease-in-out`}
      role="dialog"
      data-modal-is-show={show ? "true" : "false"}
    >
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div
        ref={modalContentRef}
        className={`bg-white dark:bg-gray-900 rounded-lg p-8 w-[90%] md:w-[70%] lg:w-[40%] max-h-screen overflow-auto relative ${
          show ? "scale-100" : "scale-0"
        } transition-all duration-200 ease-in-out`}
      >
        {children}
        <button
          className="absolute top-0 right-0 p-4"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </div>
  );
}
