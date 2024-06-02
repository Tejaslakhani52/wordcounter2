"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const currentPath = window.location.pathname;
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div
      className="fixed top-0 left-0 right-0 bg-white z-[100]"
      style={{
        borderBottom: "1px solid rgb(226 232 240)",
        boxShadow: "0 0 20px #afafaf4f",
      }}
    >
      <div className="h-[65px] flex items-center justify-between lg:px-[30px] w-[95%] md:w-[80%] mx-auto ">
        <div
          className="logo flex items-center gap-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          {/* <img
            src={"/images/logo.svg"}
            alt=""
            className="w-[45px] sm:w-[50px]"
          /> */}
          <a className="text-[22px] font-bold text_linear">FBDownloader.com</a>
        </div>

        <div
          className="block md:hidden pr-[10px] cursor-pointer"
          onClick={() => setMobileMenu(true)}
        >
          <i class="fa-solid fa-bars text-[25px]"></i>
        </div>

        <div className="hidden gap-[40px] md:flex">
          <button
            className="text-[15px] hover:text-[blue] p-[10px]"
            style={{ color: currentPath === "/blog" ? "blue" : "" }}
            onClick={() =>
              (window.location.href = "https://thewordcounter.online/blog")
            }
          >
            Facebook Downloader
          </button>
          <button
            className="text-[15px] hover:text-[blue] p-[10px]"
            style={{ color: currentPath === "/grammar" ? "blue" : "" }}
            onClick={() => {
              router.push("/grammar");
            }}
          >
            Facebook Reels Downloader
          </button>
          <button
            className="text-[15px] hover:text-[blue] p-[10px]"
            style={{ color: currentPath === "/faqs" ? "blue" : "" }}
            onClick={() => router.push("/faqs")}
          >
            FAQ
          </button>
          <button
            className="text-[15px] hover:text-[blue] p-[10px]"
            style={{ color: currentPath === "/contact" ? "blue" : "" }}
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
        </div>
        <div
          className="fixed top-[0] bg-[black] w-[100%] bottom-[0] left-0  bg-[black]"
          style={{
            opacity: mobileMenu ? "0.2" : "0",
            transition: "0.3s all",
            visibility: mobileMenu ? "visible" : "hidden",
          }}
          onClick={() => setMobileMenu(false)}
        ></div>
        <div
          className="fixed top-[0] bg-[white] w-[50%] bottom-[0]"
          style={{
            right: mobileMenu ? "0" : "-200%",
            transition: "0.3s all",
            opacity: mobileMenu ? "1" : "0",
          }}
        >
          <div className="flex flex-col items-end pr-[10px]">
            <button
              className="text-[15px] hover:text-[blue] p-[10px] pt-[20px]"
              onClick={() => setMobileMenu(false)}
            >
              <i class="fa-solid fa-xmark text-[25px]"></i>
            </button>
            <button
              className="text-[15px] hover:text-[blue] p-[10px]"
              style={{ color: currentPath === "/blog" ? "blue" : "" }}
              onClick={() =>
                (window.location.href = "https://thewordcounter.online/blog")
              }
            >
              Blog
            </button>
            <button
              className="text-[15px] hover:text-[blue] p-[10px]"
              style={{ color: currentPath === "/grammar" ? "blue" : "" }}
              onClick={() => {
                router.push("/grammar");
                setMobileMenu(false);
              }}
            >
              Grammar
            </button>
            <button
              className="text-[15px] hover:text-[blue] p-[10px]"
              style={{ color: currentPath === "/faqs" ? "blue" : "" }}
              onClick={() => {
                router.push("/faqs");
                setMobileMenu(false);
              }}
            >
              FAQ
            </button>
            <button
              className="text-[15px] hover:text-[blue]  p-[10px]"
              style={{ color: currentPath === "/contact" ? "blue" : "" }}
              onClick={() => {
                router.push("/contact");
                setMobileMenu(false);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
