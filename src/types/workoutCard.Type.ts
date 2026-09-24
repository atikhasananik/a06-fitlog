import { Dispatch, SetStateAction } from "react"

export interface IWorkoutCard {
  id: number
  name: string
  image: string
  muscleGroups: string[]
  equipment: string
  difficulty: string
  duration: number
  caloriesBurned: number
  sets: number
  reps: string
  rating: number
  description: string
  instructions: string[]
}


export interface IContextAPIProps {
  addedWorkoutCards: [] | IWorkoutCard[];
  setAddedWorkoutCards: Dispatch<SetStateAction<[] | IWorkoutCard[]>>;
  sevedWorkoutCards: [] | IWorkoutCard[];
  setSevedWorkoutCards: Dispatch<SetStateAction<IWorkoutCard[]|[]>>;
}
