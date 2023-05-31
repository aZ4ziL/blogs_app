"use client";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Logout() {
  const [isLogout, setIsLogout] = useState<boolean>(false);

  if (isLogout) {
    window.location.href = "/";
  }

  useEffect(() => {
    deleteCookie("token");

    setTimeout(() => {
      setIsLogout(true);
    }, 2000);
  });

  return (
    <>
      <div className="fixed z-[2000] top-0 left-0 right-0 bottom-0 bg-white text-sky-600">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <FontAwesomeIcon
            icon={faSpinner}
            size="2x"
            className="animate-spin"
          />
        </div>
      </div>
    </>
  );
}
