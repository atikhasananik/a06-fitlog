"use client";

import { tabBtnData } from "@/context/TabBtnContext";
import { ItabDataProps } from "@/types/workoutCard.Type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const MarkAsDoneBtn = ({ workout }: { workout: number }) => {
  const { isClicked, setIsClicked ,tabData} = useContext(tabBtnData) as ItabDataProps;
  const exest = isClicked.includes(workout);
  const handleMarkBtn = () => {
    if (!exest) {
      const newArr = [...isClicked,workout];
      setIsClicked(newArr);
      toast.success("successfully done")
    }
  };

  return (
    <button
      onClick={() => handleMarkBtn()}
      className={`bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm ${tabData==="saved"&&"hidden"} py-4 px-6  rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-md`}
    >
      <span className={`${exest ? "block" : "hidden"}`}>
        <svg
          className={`w-4 h-4 `}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      <span>Mark as Done</span>
    </button>
  );
};

export default MarkAsDoneBtn;
