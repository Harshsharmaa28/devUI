"use client";
import React, { useState } from "react";
import RightWrapper from "./RightWrapper";
import { data } from "@/utils";
import { ArrowUpRight } from "lucide-react";

const Components = () => {
  const [selectedBox, setSelectedBox] = useState("Introduction");

  const handleBox = (id) => {
    setSelectedBox(id);
  };

  return (
    <div className="flex h-[88vh] md: flex-col vsm:max-sm: md:flex-row">
      <div className="flex md:flex-col w-full md:w-[280px] bg-gray-900 text-white md:overflow-hidden overflow-x-auto md:py-8">
        <div className="flex overflow-scroll md:flex-col gap-3 md:gap-5 px-4 py-4 md:px-6 whitespace-nowrap">
          {data.map((item) => (
            <span
              key={item.input}
              onClick={() => handleBox(item.input)}
              className={`cursor-pointer px-3 py-2 rounded-md text-sm md:text-lg font-semibold transition ${
                selectedBox === item.input
                  ? "bg-[#2892a5] text-white"
                  : "bg-gray-900 hover:bg-gray-700"
              }`}
            >
              {item.input}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-blue-50 rounded-xl vsm:max-sm:m-2 mt-4 mb-4 mr-4">
        <div className="flex rounded-lg vsm:max-sm:px-4 overflow-hidden justify-center items-center h-[100%]">
          {selectedBox && <RightWrapper selectedKey={selectedBox} />}
        </div>
      </div>
    </div>
  );
};

export default Components;
