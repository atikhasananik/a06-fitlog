"use client"

import { IContextAPIProps, IWorkoutCard } from "@/types/workoutCard.Type";

import { createContext, ReactNode, useState } from "react";

export const ContextAPIWorkoutData = createContext<IContextAPIProps | []>([]);




const ContextAPIWorkoutDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [addedWorkoutCards, setAddedWorkoutCards] = useState<
    IWorkoutCard[] | []
  >([]);
  const [sevedWorkoutCards, setSevedWorkoutCards] = useState<
    IWorkoutCard[] | []
  >([]);
  const data: IContextAPIProps = {
    addedWorkoutCards,
    setAddedWorkoutCards,
    sevedWorkoutCards,
    setSevedWorkoutCards,
  };
  return (
    <ContextAPIWorkoutData.Provider value={data}>
      {children}
    </ContextAPIWorkoutData.Provider>
  );
};

export default ContextAPIWorkoutDataProvider;
