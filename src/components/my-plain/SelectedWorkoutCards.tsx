"use client";
import { ContextAPIWorkoutData } from "@/context/ContextAPI.workoutData";
import { ItabDataProps, tabBtnData } from "@/context/TabBtnContext";
import { IContextAPIProps, ISortOptionProps } from "@/types/workoutCard.Type";
import React, { useContext } from "react";
import SelectedWorkoutCard from "./SelectedWorkoutCard";
import Link from "next/link";
import { SortOptionContextData } from "@/context/SortOptionContext";

const SelectedWorkoutCards = () => {
  const { addedWorkoutCards, sevedWorkoutCards } = useContext(
    ContextAPIWorkoutData,
  ) as IContextAPIProps;
  const { tabData } = useContext(tabBtnData) as ItabDataProps;
  const { sortOption } = useContext(SortOptionContextData) as ISortOptionProps;

  if (tabData === "plan" && addedWorkoutCards.length !== 0) {
    return (
      <div className="space-y-4">
        {addedWorkoutCards
          .sort((a, b) => {
            return b[sortOption] - a[sortOption];
          })
          .map((workout) => {
            return (
              <SelectedWorkoutCard
                key={workout.id}
                workout={workout}
              ></SelectedWorkoutCard>
            );
          })}
      </div>
    );
  } else if (tabData === "saved" && sevedWorkoutCards.length !== 0) {
    return (
      <div className="space-y-4">
        {sevedWorkoutCards
          .sort((a, b) => {
            return b[sortOption] - a[sortOption];
          })
          .map((workout) => {
            return (
              <SelectedWorkoutCard
                key={workout.id}
                workout={workout}
              ></SelectedWorkoutCard>
            );
          })}
      </div>
    );
  }
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-4 py-30">
      <h2 className="text-3xl tracking-wide font-bold">NOTHING HERE YET</h2>
      <p className="text-sm text-gray-500">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/">
        <button className="px-4 cursor-pointer py-2 rounded-full bg-[#CCFF00] text-black text-sm font-bold">
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default SelectedWorkoutCards;
