import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Facebook Downloader",
  description: "",
};

export default function RootLayout({ children }) {
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
        <Header />
        <div className="mt-[80px]">{children}</div>
        <Toaster position="bottom-left" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
