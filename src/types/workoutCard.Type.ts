import { Dispatch, SetStateAction } from "react";

export interface IWorkoutCard {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface IContextAPIProps {
  addedWorkoutCards: [] | IWorkoutCard[];
  setAddedWorkoutCards: Dispatch<SetStateAction<[] | IWorkoutCard[]>>;
  sevedWorkoutCards: [] | IWorkoutCard[];
  setSevedWorkoutCards: Dispatch<SetStateAction<IWorkoutCard[] | []>>;
}

export type TSortType = "duration" | "caloriesBurned" | "rating";

export interface ISortOptionProps {
  sortOption: TSortType;
  setsortOption: Dispatch<SetStateAction<TSortType>>;

}

export interface ItabDataProps {
  tabData: "plan" | "saved";
  setTabData: Dispatch<SetStateAction<"plan" | "saved">>;
  isClicked: number[];
  setIsClicked: Dispatch<SetStateAction<number[]>>;
}


export interface IcardArrProps {
  workout: IWorkoutCard;
}