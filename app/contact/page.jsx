"use client";
import React from "react";
import useScreenHeight from "../customeHooks/useScreenHeight";
import { handleEmailClick } from "../commonFunction/emailCheck";

export default function page() {
  const screenHeight = useScreenHeight();
  return (
    <div
      className="w-[75%] mx-auto max-md:w-[95%]"
      style={{ height: `${screenHeight - 165}px` }}
    >
      <h1 className="text-[25px] text_linear font-semibold mb-3">About US</h1>

      <p className="mb-3">Please describe the contact details in detail.</p>

      <p className="mb-3">
        Email:{" "}
        <button className="text_linear" onClick={handleEmailClick}>
          {" "}
          contact.fbdownloader@gmail.com
        </button>
      </p>
    </div>
  );
}
