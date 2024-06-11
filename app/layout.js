"use client";
import Head from "next/head";
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
      </Head>
      <body style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
        <Header lang={secondPath} path={thirdPath} />
        <div className="mt-[80px]">{children}</div>
        <Footer lang={secondPath} />
      </body>
    </html>
  );
}
