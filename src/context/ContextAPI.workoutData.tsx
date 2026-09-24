import { IWorkoutCard } from "@/types/workoutCard.Type";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

interface Idata {
  addedWorkoutCards: [] | IWorkoutCard[];
  setAddedWorkoutCards: Dispatch<SetStateAction<[] | IWorkoutCard[]>>;
  sevedWorkoutCards: [] | IWorkoutCard[];
  setSevedWorkoutCards: Dispatch<SetStateAction<IWorkoutCard[]>>;
}

export const ContextAPIWorkoutData = createContext<Idata | []>([]);

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
  const data: Idata = {
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
