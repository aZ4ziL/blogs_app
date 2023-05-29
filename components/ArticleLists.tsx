"use client";

import { fetchAllArticle } from "@/lib/fetchArticle";
import { faEye, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

interface Props {
  articles: [{ [key: string]: any }];
}

function formatTime(dataTime: string): string {
  const monthNames: string[] = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dateObj: Date = new Date(dataTime);

  const month: string = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year: string = String(dateObj.getFullYear());
  const date: string = String(dateObj.getDate()).padStart(2, "0");

  const hours: string = String(dateObj.getHours()).padStart(2, "0");
  const minutes: string = String(dateObj.getMinutes()).padStart(2, "0");
  const time: string = `${hours}.${minutes}`;

  const formattedDateTime: string = `${month} ${
    monthNames[dateObj.getMonth()]
  } ${year} - ${time} WIB`;

  return formattedDateTime;
}

export default function ArticleLists({ articles: serverArticles }: Props) {
  const [offset, setOffset] = useState<number>(4);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newArticles, setNewArticles] = useState<any>(serverArticles);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setOffset((value: number) => value + 4);
    fetchAllArticle("PUBLISHED", offset, 4, undefined, "desc").then((data) => {
      if (data.length == 0) {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
      setNewArticles((value: any) => [...value, ...data]);
    });
    setIsLoading(false);
  };

  return (
    <section className="pt-[150px]">
      <h1 className="text-4xl font-bold mb-10">New Post</h1>

      <div className="border-t border-t-gray-300 dark:border-t-gray-600 pt-5">
        {newArticles?.map((value: any, index: number) => (
          <div key={index} className="flex flex-col md:flex-row mb-5">
            <div className="w-full md:w-[300px]">
              <span className="text-gray-400 dark:text-gray-500 text-sm">
                {formatTime(value.created_at)}
              </span>
            </div>
            <div className="w-full">
              <Link href={`/blog/${value.id}`} className="text-2xl font-bold">
                {value.title}
              </Link>
              <div className="flex items-center gap-2 mb-3">
                {value.tags.map((tag: any, index: number) => (
                  <Link
                    key={index}
                    href="/"
                    className="text-xs font-extralight text-sky-600 uppercase"
                  >
                    {tag.title}
                  </Link>
                ))}
              </div>
              <div className="text-lg font-light">
                <p>{value.description}</p>
                <div className="mt-3 flex items-center gap-3 text-xs font-extralight">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faEye} />
                    <span>{value.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        {!isEmpty && (
          <>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="text-sky-600 animate-spin"
                />
              </div>
            ) : (
              <button
                className="bg-sky-600 hover:bg-sky-700 text-white text-lg rounded px-4 py-2"
                onClick={handleLoadMore}
              >
                Muat Lagi
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
