"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface ItabDataProps {
  tabData: "plan" | "saved";
  setTabData: Dispatch<SetStateAction<"plan" | "saved">>;
}

export const tabBtnData = createContext<ItabDataProps|null>(null);


const TabBtnDataProvider = ({ children }: { children: ReactNode }) => {
  const [tabData, setTabData] = useState<"plan" | "saved">("plan");
  const data = {
    tabData,
    setTabData,
  } as ItabDataProps;
  return <tabBtnData.Provider value={data}>{children}</tabBtnData.Provider>;
};

export default TabBtnDataProvider;
