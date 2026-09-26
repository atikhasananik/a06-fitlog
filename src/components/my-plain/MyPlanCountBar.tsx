"use client";

import { ContextAPIWorkoutData } from "@/context/ContextAPI.workoutData";
import { tabBtnData } from "@/context/TabBtnContext";
import { IContextAPIProps, ItabDataProps} from "@/types/workoutCard.Type";
import React, { useContext } from "react";

const MyPlanCountBar = () => {
  const { tabData } = useContext(tabBtnData) as ItabDataProps;
  const { addedWorkoutCards, sevedWorkoutCards } = useContext(
    ContextAPIWorkoutData,
  ) as IContextAPIProps;

  return (
    <div className="stats stats-vertical grid  rounded-2xl m py-5 border border-gray-800 lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title">Exercises</div>
        <div className="stat-value text-[#CCFF00]">
          {tabData === "plan"
            ? addedWorkoutCards.length
            : tabData === "saved"
              ? sevedWorkoutCards.length
              : null}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Minutes</div>
        <div className="stat-value">
          {tabData === "plan"
            ? addedWorkoutCards.reduce((acc, cur) => {
                return acc + cur.duration;
              }, 0)
            : sevedWorkoutCards.reduce((acc, cur) => {
                return acc + cur.duration;
              }, 0)}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Calories</div>
        <div className="stat-value"> {tabData === "plan"
            ? addedWorkoutCards.reduce((acc, cur) => {
                return acc + cur.caloriesBurned;
              }, 0)
            : sevedWorkoutCards.reduce((acc, cur) => {
                return acc + cur.caloriesBurned;
              }, 0)}</div>
      </div>
    </div>
  );
};

export default MyPlanCountBar;
