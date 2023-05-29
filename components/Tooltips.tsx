"use client";

import { useEffect, useState } from "react";
import { usePopper } from "react-popper";

interface TooltipsProps {
  bodyElement: React.ReactNode;
  children: React.ReactNode;
  placement:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "top-start"
    | "top-end"
    | "left"
    | "left-start"
    | "left-end"
    | "right"
    | "right-start"
    | "right-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end";
  mode: "hover" | "click";
}

export default function Tooltips({
  bodyElement,
  children,
  placement,
  mode,
}: TooltipsProps) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
    ],
    placement: placement,
  });

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const tooltip = document.querySelector("#tooltip");
    function handleClickOutside(e: Event) {
      if (!tooltip?.contains(e.target as Element)) {
        setShow(false);
      }
    }

    document.documentElement.addEventListener("click", handleClickOutside);
    return () => {
      document.documentElement.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={() => {
          if (mode === "hover") {
            setShow(true);
          }
        }}
        onMouseLeave={() => {
          if (mode === "hover") {
            setShow(false);
          }
        }}
        onClick={() => {
          if (mode === "click") {
            setShow(!show);
          }
        }}
      >
        {bodyElement}
      </div>

      <div
        id="tooltip"
        style={styles.popper}
        {...attributes.popper}
        ref={setPopperElement}
        className={`z-20 bg-white dark:bg-gray-900 text-black dark:text-white ${
          show ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-0"
        } shadow-md shadow-gray-300 dark:shadow-gray-600 transition-all duration-300 ease-in-out`}
      >
        {children}
        <div id="arrow" ref={setArrowElement} style={styles.arrow}></div>
      </div>
    </>
  );
}
