"use client";
import React from "react";
import useScreenHeight from "../customeHooks/useScreenHeight";

export default function page() {
  const screenHeight = useScreenHeight();
  return (
    <div
      className="w-[75%] mx-auto max-md:w-[95%]"
      style={{ height: `${screenHeight - 165}px` }}
    >
      <h1 className="text-[25px] text_linear font-semibold mb-3">About US</h1>

      <p className="mb-3">
        FBDownloaderr is a completely free online tool that allows users to
        effortlessly download multimedia content such as videos, music, audio,
        and GIF files from various social networks. However, it does not provide
        users with direct download links.
      </p>

      <p className="mb-3">
        Kindly take note that our tool does not support the downloading of
        content from websites that engage in copyright infringement.
      </p>
    </div>
  );
}
