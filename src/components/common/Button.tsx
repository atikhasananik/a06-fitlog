"use client";

import { useContext, useState } from "react";
import { Calendar, Bookmark } from "lucide-react";
import { toast } from "react-toastify";
import { IContextAPIProps, IWorkoutCard } from "@/types/workoutCard.Type";
import { ContextAPIWorkoutData } from "@/context/ContextAPI.workoutData";

interface IWorkoutCardProps {
  workoutCard: IWorkoutCard;
}

const Button = ({ workoutCard }: IWorkoutCardProps) => {
 
  const {
    addedWorkoutCards,
    sevedWorkoutCards,
    setAddedWorkoutCards,
    setSevedWorkoutCards,
  } = useContext(ContextAPIWorkoutData) as IContextAPIProps;

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleSavedBtn = (data: boolean) => {
    setIsSaved(data);

    if (!isSaved) {
      setSevedWorkoutCards([...sevedWorkoutCards, workoutCard]);
      toast.success("seved successfuly!");
    } else {
      toast.warning("Already Seved!");
    }
  };

  const handleAddedBtn = (data: boolean) => {
    setIsAdded(data);

    if (!isAdded) {
      setAddedWorkoutCards([...addedWorkoutCards, workoutCard]);
      toast.success("Today's Plan added successfuly!");
    } else {
      toast.warning("Already Added Today's Plan!");
    }
  };

  return (
    <div className="pt-2 flex flex-wrap items-center gap-3">
      <button
        onClick={() => handleAddedBtn(true)}
        className="flex-1 min-w-45 bg-[#c0fd12] hover:bg-[#b0eb0e] active:scale-[0.98] text-black font-semibold text-sm py-3 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all"
      >
        <Calendar size={16} />
        <span>{isAdded ? "Added!" : "Add to today's plan"}</span>
      </button>

      <button
        onClick={() => handleSavedBtn(true)}
        className="bg-[#181a20] hover:bg-[#20232c] active:scale-[0.98] text-gray-200 border border-gray-700/80 font-medium text-sm py-3 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all"
      >
        <Bookmark
          size={16}
          className={isSaved ? "fill-[#c0fd12] text-[#c0fd12]" : ""}
        />
        <span>{isSaved ? "Saved" : "Save for later"}</span>
      </button>
    </div>
  );
};

export default Button;
