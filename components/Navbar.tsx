"use client";

import {
  faArrowLeft,
  faBars,
  faMoon,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import ModalAuthLogin from "./ModalAuthLogin";
import ModalAuthRegister from "./ModalAuthRegister";

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const linksRef = useRef<HTMLUListElement | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // check is blog detail pathname
  const pathSplit = pathname.split("/");
  const isBlogDetail = pathSplit.length > 2 && pathSplit[1] === "blog";

  // modal auth
  const [showModalAuthLogin, setShowModalAuthLogin] = useState<boolean>(false);
  const [showModalAuthRegister, setShowModalAuthRegister] =
    useState<boolean>(false);

  // check cookies if user is login
  const [isLogined, setIsLogined] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie("token");

    if (!token) {
      setIsLogined(false);
    } else {
      setIsLogined(true);
    }
  }, []);

  useEffect(() => {
    if (!linksRef.current) return;

    function handleClickoutside(e: Event) {
      if (!linksRef.current?.contains(e.target as Element)) {
        setShow(false);
      }
    }

    document.documentElement.addEventListener("click", handleClickoutside);

    return () => {
      document.documentElement.removeEventListener("click", handleClickoutside);
    };
  });

  useEffect(() => {
    function scrollDown() {
      if (window.scrollY > 50) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    }

    window.addEventListener("scroll", scrollDown);
    return () => {
      window.removeEventListener("scroll", scrollDown);
    };
  });

  useEffect(() => {
    const navbarLinks = document.querySelectorAll("#navbar-links");
    navbarLinks.forEach((value: Element, _key: number) => {
      value?.addEventListener("click", () => {
        setShow(false);
      });
      return () => {
        value?.removeEventListener("click", () => {
          setShow(false);
        });
      };
    });
  });

  // Dark Mode
  useEffect(() => {
    if (isDark) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <>
      <nav
        className={`w-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-md ${
          isScrollDown
            ? "py-4 shadow shadow-gray-300 dark:shadow-gray-600"
            : "py-10"
        } fixed top-0 left-0 right-0 z-30 transition-all duration-200 ease-in-out`}
      >
        <Container>
          <div className="flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              {/* Brand */}
              <div className="flex items-center justify-between w-full md:w-auto px-4 md:p-0">
                <div className="flex items-center gap-2">
                  {isBlogDetail ? (
                    <button
                      className="text-lg lg:text-xl font-bold"
                      onClick={() => router.back()}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                  ) : (
                    <Link href="/" className="text-lg lg:text-xl font-bold">
                      Viper Code
                    </Link>
                  )}
                </div>
                <button
                  className="text-lg lg:text-xl font-bold md:hidden"
                  onClick={() => setShow(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              {/* Links */}
              <ul
                ref={linksRef}
                className={`flex flex-col md:flex-row items-start md:items-center md:justify-center gap-4 absolute md:static top-0 ${
                  show ? "left-0" : "-left-[700px]"
                } w-[60%] md:w-auto h-screen md:h-auto bg-white dark:bg-gray-900 md:bg-inherit dark:md:bg-inherit p-10 md:p-0 border-r border-r-gray-300 dark:border-r-gray-600 md:border-none transition-all duration-300 ease-in-out`}
              >
                <div className="w-full mb-4 flex items-center justify-between md:hidden">
                  <span className="text-xl font-bold">Menu</span>
                  <button
                    className="text-lg lg:text-xl font-bold"
                    onClick={() => setShow(false)}
                  >
                    <FontAwesomeIcon icon={faX} size="2x" />
                  </button>
                </div>
                <li>
                  <Link
                    id="navbar-links"
                    href="/"
                    className="text-sm font-bold text-gray-800 dark:text-gray-300 hover:text-sky-600"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    id="navbar-links"
                    href="/blog"
                    className="text-sm font-bold text-gray-800 dark:text-gray-300 hover:text-sky-600"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    id="navbar-links"
                    href="/tags"
                    className="text-sm font-bold text-gray-800 dark:text-gray-300 hover:text-sky-600"
                  >
                    Tag
                  </Link>
                </li>
                <li>
                  <Link
                    id="navbar-links"
                    href="/about"
                    className="text-sm font-bold text-gray-800 dark:text-gray-300 hover:text-sky-600"
                  >
                    Tentang
                  </Link>
                </li>
                {isLogined && (
                  <li>
                    <Link
                      id="navbar-links"
                      href="/dashboard"
                      className="text-sm font-bold text-gray-800 dark:text-gray-300 hover:text-sky-600"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="text-lg font-bold text-gray-800 dark:text-gray-300 hover:text-sky-600"
                  >
                    <FontAwesomeIcon icon={faMoon} />
                  </button>
                </li>
                {!isLogined ? (
                  <>
                    <li>
                      <button
                        id="navbar-links"
                        type="button"
                        onClick={() => setShowModalAuthLogin(true)}
                        className="px-3 py-1 text-sm text-white bg-sky-600 hover:bg-sky-700 rounded w-full md:w-auto"
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        id="navbar-links"
                        type="button"
                        onClick={() => setShowModalAuthRegister(true)}
                        className="px-3 py-1 text-sm text-white bg-green-600 hover:bg-green-700 rounded w-full md:w-auto"
                      >
                        Daftar
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <a
                      href="/logout"
                      className="px-3 py-1 text-sm text-white bg-rose-600 hover:bg-rose-700 rounded w-full md:w-auto"
                    >
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
            {pathname.startsWith("/dashboard") && (
              <>
                {/* Dashboard */}
                <div className="w-full flex items-center overflow-y-auto pt-2">
                  <Link
                    href="/dashboard"
                    className={`text-gray-600 dark:text-gray-300 ${
                      pathname === "/dashboard"
                        ? "bg-gray-300 dark:bg-gray-600"
                        : "hover:bg-gray-300 dark:hover:bg-gray-600"
                    } px-3 py-1 rounded`}
                  >
                    Ringkasan
                  </Link>
                  <Link
                    href="/dashboard/earnings"
                    className={`text-gray-600 dark:text-gray-300 ${
                      pathname === "/dashboard/earnings"
                        ? "bg-gray-300 dark:bg-gray-600"
                        : "hover:bg-gray-300 dark:hover:bg-gray-600"
                    } px-3 py-1 rounded`}
                  >
                    Pendapatan
                  </Link>
                  <Link
                    href="/dashboard/account"
                    className={`text-gray-600 dark:text-gray-300 ${
                      pathname === "/dashboard/account"
                        ? "bg-gray-300 dark:bg-gray-600"
                        : "hover:bg-gray-300 dark:hover:bg-gray-600"
                    } px-3 py-1 rounded`}
                  >
                    Akun
                  </Link>
                </div>
              </>
            )}
          </div>
        </Container>
      </nav>

      <ModalAuthLogin
        show={showModalAuthLogin}
        onClose={() => setShowModalAuthLogin(false)}
      />

      <ModalAuthRegister
        show={showModalAuthRegister}
        onClose={() => setShowModalAuthRegister(false)}
      />
    </>
  );
}
