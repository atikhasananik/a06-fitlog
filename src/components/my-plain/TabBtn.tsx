"use client";
import { ItabDataProps, tabBtnData } from "@/context/TabBtnContext";
import React, { useContext } from "react";

const TabBtn = () => {
  const { setTabData } = useContext(tabBtnData) as ItabDataProps;

  const handelTabBtn = (dets: "plan" | "saved") => {
    setTabData(dets);
  };

  return (
    <div className="tabs p-2  inline-block  transition-all duration-300 tabs-box">
      <input
        onClick={() => {
          return handelTabBtn("plan");
        }}
        type="radio"
        name="my_tabs_1"
        className="tab text-md transition-all duration-400 font-semibold checked:bg-[#2b303dcb] checked:text-primary-content"
        aria-label="Today's Plan"
        defaultChecked
      />
      <input
        onClick={() => {
          return handelTabBtn("saved");
        }}
        type="radio"
        name="my_tabs_1"
        className="tab text-md transition-all duration-400 font-semibold checked:bg-[#2b303dcb] checked:text-primary-content"
        aria-label="Saved"
      />
    </div>
  );
};

export default TabBtn;
