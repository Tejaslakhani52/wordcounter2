"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [secondPath, setSecondPath] = useState("");
  const [thirdPath, setThirdPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.pathname;
      const secondPath = url.split("/")[1];
      setSecondPath(secondPath);
      const thirdPath = url.split("/")[2];
      setThirdPath(thirdPath);
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
        <Header lang={secondPath} path={thirdPath} />
        <div className="mt-[80px]">{children}</div>
        <Toaster position="bottom-left" reverseOrder={false} />
        <Footer lang={secondPath} />
      </body>
    </html>
  );
}
