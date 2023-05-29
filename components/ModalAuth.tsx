"use client";

import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";

interface Props {
  show: boolean;
  onClose?: () => void;
}

export default function ModalAuth({ show, onClose }: Props) {
  return (
    <Modal show={show} onClose={onClose}>
      <>
        <div className="">
          <h5 className="text-xl font-bold">Login</h5>
          <form action="" method="post" className="mt-4">
            <div className="flex flex-col mb-3">
              <label htmlFor="email">Alamat email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="password">Kata sandi</label>
              <input
                type="password"
                id="password"
                name="password"
                className="px-3 py-2 rounded w-full bg-transparent  border border-gray-300 dark:border-gray-600 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white text-sm px-3 py-2 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faSignIn} />
              <span>Login</span>
            </button>
          </form>
        </div>
      </>
    </Modal>
  );
}
