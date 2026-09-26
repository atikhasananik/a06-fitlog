"use client";
import { ContextAPIWorkoutData } from "@/context/ContextAPI.workoutData";
import { tabBtnData } from "@/context/TabBtnContext";
import {
  IcardArrProps,
  IContextAPIProps,
  ItabDataProps,
} from "@/types/workoutCard.Type";
import { useContext } from "react";
import { toast } from "react-toastify";



const SelectedCardDeleteBtn = ({ workout }: IcardArrProps) => {
  const { tabData } = useContext(tabBtnData) as ItabDataProps;
  const {
    addedWorkoutCards,
    setAddedWorkoutCards,
    sevedWorkoutCards,
    setSevedWorkoutCards,
  } = useContext(ContextAPIWorkoutData) as IContextAPIProps;

  const handleDeleteBtn = () => {
    if (tabData === "plan") {
      const newCardArr = addedWorkoutCards.filter((card) => {
        return card.id !== workout.id;
      });

      setAddedWorkoutCards(newCardArr);
      toast.success("Successfully remove")
    } else {
      const newCardArr = sevedWorkoutCards.filter((card) => {
        return card.id !== workout.id;
      });

      setSevedWorkoutCards(newCardArr);
      toast.success("Successfully remove")
    }
  };

  
  return (
    <button
      onClick={handleDeleteBtn}
      className="text-gray-500 hover:text-gray-300 p-1.5 rounded-lg transition-colors cursor-pointer ml-1"
    >
      <svg
        className="w-7  h-7 hover:text-red-500 transition-all duration-300  "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default SelectedCardDeleteBtn;
