"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AlertProps {
  children: React.ReactNode;
  show: boolean;
  type: "error" | "success";
  onClose?: () => void;
}

export default function Alert({ children, show, onClose, type }: AlertProps) {
  return (
    <>
      {show && (
        <div
          className={`p-4 my-4 ${
            type === "error"
              ? "border border-rose-600 text-rose-600 text-sm"
              : "border border-sky-600 text-sky-600 text-sm"
          } font-bold relative`}
          role="alert"
        >
          {children}
          <button
            className={`absolute top-1 right-1 text-lg ${
              type === "error" ? "text-rose-600" : "text-sky-600"
            }`}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      )}
    </>
  );
}
