"use client";

import { faSignIn, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCookie } from "cookies-next";
import { FormEvent, useState } from "react";
import Alert from "./Alert";
import Modal from "./Modal";

interface Props {
  show: boolean;
  onClose?: () => void;
}

export default function ModalAuthLogin({ show, onClose }: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertType, setAlertType] = useState<"success" | "error">("error");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch(process.env.SERVER_API + "/user/get-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();

    if (response.status !== 200) {
      setShowAlert(true);
      setAlertMessage(result.message);
      setAlertType("error");
      setIsLoading(false);
      return;
    }

    if (response.status === 200) {
      setCookie("token", result.token);
      window.location.href = "/dashboard";
      return;
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <>
        <div className="">
          <h5 className="text-xl font-bold">Login</h5>
          <Alert
            type={alertType}
            show={showAlert}
            onClose={() => setShowAlert(false)}
          >
            {alertMessage}
          </Alert>
          <form method="post" className="mt-4" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="password">Kata sandi</label>
              <input
                type="password"
                id="password"
                name="password"
                className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white text-sm px-3 py-2 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <FontAwesomeIcon icon={faSignIn} />
              )}
              <span>Login</span>
            </button>
          </form>
        </div>
      </>
    </Modal>
  );
}
