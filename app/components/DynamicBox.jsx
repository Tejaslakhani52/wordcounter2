import React from "react";

export default function DynamicBox(props) {
  return (
    <div className="w-[75%] mx-auto pb-8 max-md:w-[95%]">
      <div className="py-8 flex flex-col items-center text-center bg_linear px-3 rounded-[8px]">
        <p className="text-white text-[22px] font-semibold mb-2">
          {props.title}
        </p>

        <p className="text-white mb-5">{props.text}</p>

        <a className="bg-white py-2 px-[20px] rounded-[5px]" href={props.link}>
          <span className="text_linear">{props.buttonName}</span>
        </a>
      </div>
    </div>
  );
}
