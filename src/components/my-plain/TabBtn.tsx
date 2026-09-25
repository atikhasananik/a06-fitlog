"use client";

import { tabBtnData } from "@/context/TabBtnContext";
import { ItabDataProps } from "@/types/workoutCard.Type";
import React, { useContext } from "react";

const TabBtn = () => {
  const { tabData, setTabData } = useContext(tabBtnData) as ItabDataProps;

  const handelTabBtn = (dets: "plan" | "saved") => {
    setTabData(dets);
  };

  return (
    <div className="tabs  inline-block  transition-all duration-300 tabs-box">
      <input
        onChange={() => {
          return handelTabBtn("plan");
        }}
        type="radio"
        name="my_tabs_1"
        className="tab text-md transition-all duration-400 font-semibold checked:bg-[#2b303dcb] checked:text-primary-content"
        aria-label="Today's Plan"
        checked={tabData === "plan"}
      />
      <input
        onChange={() => {
          return handelTabBtn("saved");
        }}
        type="radio"
        name="my_tabs_1"
        className="tab text-md transition-all duration-400 font-semibold checked:bg-[#2b303dcb] checked:text-primary-content"
        aria-label="Saved"
        checked={tabData === "saved"}
      />
    </div>
  );
};

export default TabBtn;
