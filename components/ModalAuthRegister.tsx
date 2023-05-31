"use client";

import { faSignIn, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import Alert from "./Alert";
import Modal from "./Modal";

interface Props {
  show: boolean;
  onClose?: () => void;
}

export default function ModalAuthRegister({ show, onClose }: Props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [alertType, setAlertType] = useState<"success" | "error">("error");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (password1 !== password2) {
      setIsLoading(false);
      setAlertMessage("Mohon masukkan konfirmasi kata sandi yang sama.");
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    const response = await fetch(process.env.SERVER_API + "/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password2,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setShowAlert(true);
      if (String(result.message).startsWith("UNIQUE")) {
        setAlertMessage(
          "Username atau alamat email yang anda masukkan sudah digunakan oleh pengguna lain."
        );
        setAlertType("error");
        setIsLoading(false);
        return;
      }
      setAlertMessage(result.message);
      setAlertType("error");
      setIsLoading(false);
      return;
    }

    if (response.ok) {
      setIsLoading(false);
      setAlertMessage(
        "Berhasil mendaftarkan akun dengan nama pengguna `" + username + "`."
      );
      setShowAlert(true);
      setAlertType("success");
      return;
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <>
        <div className="">
          <h5 className="text-xl font-bold">Daftar Akun</h5>
          <Alert
            type={alertType}
            show={showAlert}
            onClose={() => setShowAlert(false)}
          >
            {alertMessage}
          </Alert>
          <form method="post" className="mt-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-3">
                <label htmlFor="first_name">Nama depan</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="last_name">Nama belakang</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  onChange={(e) => setLastname(e.target.value)}
                  className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="email">Alamat email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="password1">Kata sandi</label>
                <input
                  type="password"
                  id="password1"
                  name="password1"
                  onChange={(e) => setPassword1(e.target.value)}
                  className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-3">
                <label htmlFor="password2">Konfirmasi kata sandi</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  onChange={(e) => setPassword2(e.target.value)}
                  className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
                  required
                />
              </div>
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
              <span>Daftar</span>
            </button>
          </form>
        </div>
      </>
    </Modal>
  );
}
