import React, { useEffect, useState } from "react";
import Tooltip from "../components/Tooltip";
import toast from "react-hot-toast";

const fontSize = ["14px", "17px", "22px"];

const fontFamily = [
  "Montserrat",
  "'Inconsolata', monospace",
  "'Inter', sans-serif",
];

export default function ActionBox({
  setText,
  activeFontSize,
  setActiveFontSize,
  activeFontFamily,
  setActiveFontFamily,
  grammerCheck,
  setGrammerCheck,
  autoSave,
  setAutoSave,
}) {
  return (
    <div
      className="xl:absolute w-[fit-content] xl:w-[50px] bg-white left-[-85px] gap-[15px] xl:gap-[10px] flex xl:flex-col items-center px-[15px] xl:px-[0] py-[10px] xl:py-[15px] rounded-[4px] shadow-lg  mb-5 xl:mb-0"
      style={{ border: "1px solid rgb(226 232 240)" }}
    >
      <Tooltip
        button={
          <div
            className="opacity-70 relative"
            onClick={() => {
              setText("");
              toast.success("Editor cleard");
              localStorage.setItem("text", "");
            }}
          >
            <i class="fa-solid fa-arrows-spin text-[22px]"></i>
          </div>
        }
      >
        <p className="opacity-70">Clear Text</p>
      </Tooltip>
      <div className="divider" />

      <Tooltip
        button={
          <div className=" relative font-bold opacity-70">
            <span className="text-[18px]">T</span>
            <span className="text-[10px]">T</span>
          </div>
        }
      >
        <div className="flex gap-[10px] opacity-70">
          {fontSize?.map((item) => (
            <button
              onClick={() => {
                setActiveFontSize(item);
                toast.success("Font size updated");
                localStorage.setItem("activeFontSize", item);
              }}
              style={{
                fontSize: item,
                fontWeight: "800",
                padding: "0 10px",
                backgroundColor: item === activeFontSize ? "#f6f8fa" : "",
                border:
                  item === activeFontSize ? "1px solid rgb(226 232 240)" : "",
                borderRadius: "4px",
              }}
            >
              T
            </button>
          ))}
        </div>
      </Tooltip>
      <div className="divider" />

      <Tooltip
        button={
          <div className=" relative font-bold opacity-70">
            <span className="text-[18px]">A</span>
            <span className="text-[10px]">a</span>
          </div>
        }
      >
        {fontFamily?.map((item) => (
          <button
            onClick={() => {
              setActiveFontFamily(item);
              toast.success("Typeface updated");
              localStorage.setItem("activeFontFamily", item);
            }}
            style={{
              fontSize: item,
              fontWeight: "800",
              padding: "0 10px",
              backgroundColor: item === activeFontFamily ? "#f6f8fa" : "",
              border:
                item === activeFontFamily ? "1px solid rgb(226 232 240)" : "",
              borderRadius: "4px",
              opacity: "0.7",
              fontFamily: item,
            }}
          >
            <span className="text-[18px]">A</span>
            <span className="text-[10px]">a</span>
          </button>
        ))}
      </Tooltip>
    </div>
  );
}
