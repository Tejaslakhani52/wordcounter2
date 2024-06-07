"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const MenuOptions = () => {
  return (
    <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a
          href="/"
          className="block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-700 md:p-0"
          aria-current="page"
        >
          Facebook Downloader
        </a>
      </li>

      <li>
        <a
          href="/facebook-reels-download"
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        >
          Facebook Reels Downloader
        </a>
      </li>
      <li>
        <select className="py-2 px-3 bg-transparent">
          <option
            onClick={() => router.push("http://localhost/facebook/en")}
            className="px-[20px] py-2"
          >
            {" "}
            English
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/vi")}
            className="px-[20px] py-2"
          >
            {" "}
            Tiếng Việt
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/ar")}
            className="px-[20px] py-2"
          >
            {" "}
            العربية
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/cz")}
            className="px-[20px] py-2"
          >
            {" "}
            čeština
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/de")}
            className="px-[20px] py-2"
          >
            {" "}
            Deutsch
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/es")}
            className="px-[20px] py-2"
          >
            {" "}
            Español
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/fr")}
            className="px-[20px] py-2"
          >
            {" "}
            Français
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/hi")}
            className="px-[20px] py-2"
          >
            {" "}
            हिन्दी‎
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/id")}
            className="px-[20px] py-2"
          >
            {" "}
            Bahasa Indonesia‬
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/it")}
            className="px-[20px] py-2"
          >
            {" "}
            Italiano
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/ja")}
            className="px-[20px] py-2"
          >
            {" "}
            日本語
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/ko")}
            className="px-[20px] py-2"
          >
            {" "}
            한국어
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/pl")}
            className="px-[20px] py-2"
          >
            {" "}
            Polski‎
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/pt")}
            className="px-[20px] py-2"
          >
            {" "}
            Português
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/ro")}
            className="px-[20px] py-2"
          >
            {" "}
            Română
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/ru")}
            className="px-[20px] py-2"
          >
            {" "}
            Русский
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/th")}
            className="px-[20px] py-2"
          >
            {" "}
            ภาษาไทย
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/tr")}
            className="px-[20px] py-2"
          >
            {" "}
            Türkçe‬
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/uk")}
            className="px-[20px] py-2"
          >
            {" "}
            Українська‬
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/zh-cn")}
          >
            {" "}
            简体中文
          </option>
          <option
            onClick={() => router.push("http://localhost/facebook/zh-tw")}
          >
            {" "}
            繁體中文
          </option>
        </select>
      </li>
    </ul>
  );
};

export default function Header() {
  const router = useRouter();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 right-0 bg-white z-[100]"
      style={{
        borderBottom: "1px solid rgb(226 232 240)",
        // boxShadow: "0 0 20px #afafaf4f",
      }}
    >
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            className="logo flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <a className="text-[22px] font-bold text_linear">
              FBDownloaderr.net
            </a>
          </div>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
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
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <MenuOptions />
          </div>

          <div
            className="w-full"
            id="navbar-dropdown"
            style={{ display: openMobileMenu ? "block" : "none" }}
          >
            <MenuOptions />
          </div>
        </div>
      </nav>
    </div>
  );
}
