"use client";
import { useEffect } from "react";
import Download from "./components/Download";
import FDownloaderContent from "./components/FDownloaderContent";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Download
        title="Facebook Video Downloader"
        text="Download high-quality Facebook videos in 1080p, 2k, and 4k."
        placeHolder="Enter the Facebook video link here"
        button="Download"
        tableT1="Quality"
        tableT2="Download"
        more="Download more videos"
        load="Retrieving data, please wait a few seconds!"
      />
      <FDownloaderContent />
    </div>
  );
}
