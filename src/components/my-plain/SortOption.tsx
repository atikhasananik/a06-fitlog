"use client";
import { SortOptionContextData } from "@/context/SortOptionContext";
import { ISortOptionProps, TSortType } from "@/types/workoutCard.Type";
import React, { useContext } from "react";

const SortOption = () => {
  const { sortOption, setsortOption } = useContext(
    SortOptionContextData,
  ) as ISortOptionProps;
  const handleOption = (dets: TSortType): void => {
    setsortOption(dets);
  };
  console.log(sortOption);
  return (
    <select
      defaultValue={sortOption}
      className="select outline-0 border-0  w-auto inline-block min-w-25 font-semibold p-2"
    >
      <option onClick={() => handleOption("duration")}
        value="duration"
        >Duration</option>
      <option onClick={() => handleOption("caloriesBurned")}
        value="caloriesBurned"
        >Calories</option>
      <option onClick={() => handleOption("rating")}
        value="rating"
        >Rating</option>
    </select>
  );
};

export default SortOption;
