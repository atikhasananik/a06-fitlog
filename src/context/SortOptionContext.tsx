"use client";
import { ISortOptionProps, TSortType } from "@/types/workoutCard.Type";
import React, { createContext, ReactNode, useState } from "react";

export const SortOptionContextData = createContext<
  ISortOptionProps | "duration"
>("duration");

const SortOptionContext = ({ children }: { children: ReactNode }) => {
  const [sortOption, setsortOption] = useState<TSortType>("duration");
  const data = {
    sortOption,
    setsortOption,
  } as ISortOptionProps;
  return <SortOptionContextData value={data}>{children}</SortOptionContextData>;
};

export default SortOptionContext;
