"use client";
import Download from "./components/Download";
import DynamicBox from "./components/DynamicBox";
import FDownloaderContent from "./components/FDownloaderContent";

export default function Home() {
  return (
    <div>
      <title>Download Facebook Video Online - Free & Fast</title>
      <meta
        name="description"
        content="Download Facebook videos online quickly and easily. Save any Facebook video in HD without software. Simple, fast, and free video downloader for all devices."
      />
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

      <DynamicBox
        title="Do you want to download Facebook video?"
        text="By clicking this button you can go to facebook video downloader page
          and download any facebook video in good quality."
        buttonName="Facebook Downloader"
        link="https://FBDownloaderr.net/en"
      />
      <FDownloaderContent />
    </div>
  );
}
