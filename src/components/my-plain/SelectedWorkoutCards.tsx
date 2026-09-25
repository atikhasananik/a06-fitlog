"use client";
import { ContextAPIWorkoutData } from "@/context/ContextAPI.workoutData";
import { ItabDataProps, tabBtnData } from "@/context/TabBtnContext";
import { IContextAPIProps } from "@/types/workoutCard.Type";
import React, { useContext } from "react";
import SelectedWorkoutCard from "./SelectedWorkoutCard";

const SelectedWorkoutCards = () => {
  const { addedWorkoutCards, sevedWorkoutCards } = useContext(
    ContextAPIWorkoutData,
  ) as IContextAPIProps;
  const { tabData } = useContext(tabBtnData) as ItabDataProps;

  if (tabData === "plan" && addedWorkoutCards.length !== 0) {
    return (
      <div className="space-y-4">
        {addedWorkoutCards.map((workout) => {
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
        {sevedWorkoutCards.map((workout) => {
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
  return <div>no card selected!</div>;
};

export default SelectedWorkoutCards;
