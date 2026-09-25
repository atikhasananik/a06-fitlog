"use client";
import { SortOptionContextData } from "@/context/SortOptionContext";
import { ISortOptionProps, TSortType } from "@/types/workoutCard.Type";
import React, { useContext } from "react";

const SortOption = () => {
  const { sortOption, setsortOption } = useContext(
    SortOptionContextData,
  ) as ISortOptionProps;
  const handleOption = (dets: TSortType):void => {
    setsortOption(dets);
  };

  console.log(sortOption)
  return (
    <select
      defaultValue="Duration"
      className="select  w-auto inline-block min-w-25 font-semibold p-2"
    >
      <option onClick={() => handleOption("duration")}>Duration</option>
      <option onClick={() => handleOption("caloriesBurned")}>Calories</option>
      <option onClick={() => handleOption("rating")}>Rating</option>
    </select>
  );
};

export default SortOption;
