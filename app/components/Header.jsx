"use client";
import React, { useEffect, useState } from "react";
import { headerName } from "../constants/commonWords";

const MenuOptions = ({ lang }) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    const fullPath = window.location.pathname;
    const currentPath = fullPath.split("/").slice(2).join("/");
    setPath(currentPath);
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    const baseUrl = window.location.origin;
    if (path === "facebook-reels-download") {
      window.location.href = `${baseUrl}/${selectedLanguage}/facebook-reels-download`;
    } else {
      window.location.href = `${baseUrl}/${selectedLanguage}`;
    }
  };

  return (
    <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white ">
      <li>
        <a
          href={`/${lang}`}
          className="block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-700 md:p-0"
          aria-current="page"
        >
          {headerName?.[lang]?.menu1 ?? headerName?.["en"]?.menu1}
        </a>
      </li>

      <li>
        {lang ? (
          <a
            href={`/${lang ?? "en"}/facebook-reels-download`}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            {headerName?.[lang]?.menu2 ?? headerName?.["en"]?.menu2}
          </a>
        ) : (
          <a
            href={`/en/facebook-reels-download`}
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
          >
            {headerName?.[lang]?.menu2 ?? headerName?.["en"]?.menu2}
          </a>
        )}
      </li>
      <li>
        <select
          className="py-2 px-3 bg-transparent"
          onChange={handleLanguageChange}
          value={`/${lang}`}
        >
          <option value="/en" className="px-[20px] py-2">
            English
          </option>
          <option value="/vi" className="px-[20px] py-2">
            Tiếng Việt
          </option>
          <option value="/ar" className="px-[20px] py-2">
            العربية
          </option>
          <option value="/cz" className="px-[20px] py-2">
            čeština
          </option>
          <option value="/de" className="px-[20px] py-2">
            Deutsch
          </option>
          <option value="/es" className="px-[20px] py-2">
            Español
          </option>
          <option value="/fr" className="px-[20px] py-2">
            Français
          </option>
          <option value="/hi" className="px-[20px] py-2">
            हिन्दी‎
          </option>
          <option value="/id" className="px-[20px] py-2">
            Bahasa Indonesia‬
          </option>
          <option value="/it" className="px-[20px] py-2">
            Italiano
          </option>
          <option value="/ja" className="px-[20px] py-2">
            日本語
          </option>
          <option value="/ko" className="px-[20px] py-2">
            한국어
          </option>
          <option value="/pl" className="px-[20px] py-2">
            Polski‎
          </option>
          <option value="/pt" className="px-[20px] py-2">
            Português
          </option>
          <option value="/ro" className="px-[20px] py-2">
            Română
          </option>
          <option value="/ru" className="px-[20px] py-2">
            Русский
          </option>
          <option value="/th" className="px-[20px] py-2">
            ภาษาไทย
          </option>
          <option value="/tr" className="px-[20px] py-2">
            Türkçe‬
          </option>
          <option value="/uk" className="px-[20px] py-2">
            Українська‬
          </option>
          <option value="/zh-cn">简体中文</option>
          <option value="/zh-tw">繁體中文</option>
        </select>
      </li>
    </ul>
  );
};

export default function Header({ lang, path }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 right-0 bg-white z-[100]"
      style={{
        borderBottom: "1px solid rgb(226 232 240)",
      }}
    >
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="logo flex items-center gap-3 cursor-pointer">
            <a className="text-[22px] font-bold text_linear" href={`/${lang}`}>
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
            <MenuOptions lang={lang} />
          </div>

          <div
            className="w-full"
            id="navbar-dropdown"
            style={{ display: openMobileMenu ? "block" : "none" }}
          >
            <MenuOptions lang={lang} path={path} />
          </div>
        </div>
      </nav>
    </div>
  );
}
