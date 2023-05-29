"use client";

import {
  faComment,
  faEye,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import Alert from "../Alert";
import LoadImage from "../LoadImage";
import Modal from "../Modal";
import Tooltips from "../Tooltips";

export default function Overview() {
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  return (
    <>
      <section className="pt-[150px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Ringkasan</h1>
            <p className="text-sm text-sky-600 dark:text-sky-300 font-extralight">
              Halaman untuk melihat seluruh artikel anda.
            </p>
          </div>
          <Tooltips
            bodyElement={
              <button className="px-4 py-2 rounded bg-sky-600 hover:bg-sky-700 text-white text-lg">
                Tambah Data
              </button>
            }
            mode="click"
            placement="bottom-end"
          >
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setShowModalAdd(true)}
                className="w-full text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-500 px-4 py-1 rounded"
              >
                Tambah Artikel
              </button>
              <Link
                href="/"
                className="w-full text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-500 px-4 py-1 rounded"
              >
                Tambah Tags
              </Link>
              <Link
                href="/"
                className="w-full text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-500 px-4 py-1 rounded"
              >
                Another Link
              </Link>
            </div>
          </Tooltips>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map((_value, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-600 rounded hover:shadow-md hover:shadow-gray-300 hover:dark:shadow-gray-600"
              >
                <LoadImage
                  image="/avatar.webp"
                  alt="img"
                  width={2200}
                  height={880}
                  className="w-full h-[300px]"
                />
                <div className="p-4">
                  <h5 className="text-xl font-bold mb-2">Title for article</h5>
                  <p className="text-sm font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio, dolor.
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faEye} />
                      <span>30</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faThumbsUp} />
                      <span>102</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faComment} />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal show={showModalAdd} onClose={() => setShowModalAdd(false)}>
        <h4 className="text-xl font-extrabold">Tambah Kelas</h4>

        <form action="" className="mt-5">
          <div className="flex flex-col mb-2">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              id="title"
              name="title"
              className="px-3 py-2 outline-none border border-gray-300 dark:border-gray-600 w-full rounded-md bg-transparent"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="description">Deskripsi</label>
            <input
              type="text"
              id="description"
              name="description"
              className="px-3 py-2 outline-none border border-gray-300 dark:border-gray-600 w-full rounded-md bg-transparent"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="content">Konten</label>
            <textarea
              id="content"
              name="content"
              className="px-3 py-2 outline-none border border-gray-300 dark:border-gray-600 w-full rounded-md bg-transparent"
            />
            <div className="text-sm font-extralight">
              Masukkan konten dengan menggunakan gaya{" "}
              <span className="italic">Markdown</span>
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="Logo">Logo</label>
            <input
              type="file"
              accept=".jpg,.png,.svg,.webp"
              id="Logo"
              name="Logo"
              className="px-3 py-2 outline-none border border-gray-300 dark:border-gray-600 w-full rounded-md bg-transparent"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              className="px-3 py-2 outline-none border border-gray-300 dark:border-gray-600 w-full rounded-md bg-transparent"
            >
              <option value="DRAFTED">Draft</option>
              <option value="PUBLISHED">Publish</option>
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="tags">Tag</label>
            <select
              id="tags"
              name="tags"
              className="px-3 py-2 outline-none border border-gray-300 dark:border-gray-600 w-full rounded-md bg-transparent"
              multiple
            >
              <option value="javascript">Javascript</option>
              <option value="golang">Golang</option>
              <option value="python">Python</option>
            </select>

            <button
              type="button"
              onClick={() => {
                setShowModalAdd(false);
                setShowAlert(true);
              }}
              className="my-5 w-full bg-sky-600 hover:bg-sky-700 px-4 py-1 text-white text-lg"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>

      <Alert show={showAlert} onClose={() => setShowAlert(false)}>
        <p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
      </Alert>
    </>
  );
}
