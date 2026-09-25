"use client";

import { ItabDataProps } from "@/types/workoutCard.Type";
import { createContext, ReactNode, useState } from "react";

export const tabBtnData = createContext<ItabDataProps | "plan">("plan");

const TabBtnDataProvider = ({ children }: { children: ReactNode }) => {
  const [tabData, setTabData] = useState<"plan" | "saved">("plan");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const data = {
    tabData,
    setTabData,
    isClicked,
    setIsClicked,
  } as ItabDataProps;
  return <tabBtnData.Provider value={data}>{children}</tabBtnData.Provider>;
};

export default TabBtnDataProvider;
