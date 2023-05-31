"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import NProgress from "nprogress";

export default function LoadingBarLinks() {
  const pathname = usePathname();
  const ref = useRef(pathname);

  useEffect(() => {
    const links = document.querySelectorAll("#nextjs-links");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (link.getAttribute("href") === pathname) {
          NProgress.done();
        } else {
          NProgress.start();
        }
      });
    });

    if (ref.current !== pathname) {
      NProgress.start();
      ref.current = pathname;
    }

    if (ref.current === pathname) {
      NProgress.done();
    }
  });

  return <></>;
}
