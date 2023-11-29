"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Link from "next/link";
import { initFlowbite } from "flowbite";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className="mx-32">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-secondary">
              Nyèloteh
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {data?.user ? (
              <div className="hidden lg:block">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Welcome, {data?.user?.name}{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => signIn("google")}
                className="bg-secondary text-white px-4 py-3 rounded text-sm hover:bg-primary hidden lg:block"
              >
                Masuk dengan Google
              </button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center  text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col gap-y-3 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href={"/"}
                  className={`block py-2 px-3 hover:bg-secondary hover:text-white ${
                    pathname === "/"
                      ? "bg-primary text-white md:text-primary md:bg-transparent"
                      : "text-black"
                  } rounded md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:text-blue-500`}
                >
                  Beranda
                </Link>
                <div
                  className={`w-[5px] h-[5px] bg-primary rounded-full hidden mx-auto ${
                    pathname === "/" ? "md:block" : ""
                  }`}
                ></div>
              </li>
              <li>
                <Link
                  href={"/articles"}
                  className={`block py-2 px-3 hover:bg-secondary hover:text-white ${
                    pathname === "/articles"
                      ? "bg-primary text-white md:text-primary md:bg-transparent"
                      : "text-black"
                  } rounded md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:text-blue-500`}
                >
                  Artikel
                </Link>
                <div
                  className={`w-[5px] h-[5px] bg-primary rounded-full hidden mx-auto ${
                    pathname === "/articles" ? "md:block" : ""
                  }`}
                ></div>
              </li>
              <li>
                <Link
                  href={"/#subscribe"}
                  className={`block py-2 px-3 hover:bg-secondary hover:text-white ${
                    pathname === "#subscribe"
                      ? "bg-primary text-white md:text-primary md:bg-transparent"
                      : "text-black"
                  } rounded md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:text-blue-500`}
                >
                  Berlangganan
                </Link>
                <div
                  className={`w-[5px] h-[5px] bg-primary rounded-full hidden mx-auto ${
                    pathname === "/subscribe" ? "md:block" : ""
                  }`}
                ></div>
              </li>
              <li>
                <Link
                  href={"/whois"}
                  className={`block py-2 px-3 hover:bg-secondary hover:text-white ${
                    pathname === "/whois"
                      ? "bg-primary text-white md:text-primary md:bg-transparent"
                      : "text-black"
                  } rounded md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:text-blue-500`}
                >
                  Tentang Kami
                </Link>
                <div
                  className={`w-[5px] h-[5px] bg-primary rounded-full hidden mx-auto ${
                    pathname === "/whois" ? "md:block" : ""
                  }`}
                ></div>
              </li>
              <li>
                {data?.user ? (
                  <div className="block lg:hidden">
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbarDesktop"
                      className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      Welcome, {data?.user?.name}{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdownNavbarDesktop"
                      className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <Link
                            href="/dashboard"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </Link>
                        </li>
                      </ul>
                      <div className="py-1">
                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => signIn("google")}
                    className="bg-secondary text-white px-4 py-3 rounded text-sm hover:bg-primary block lg:hidden"
                  >
                    Masuk dengan Google
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
