"use client"

import { ContextAPIWorkoutData } from '@/context/ContextAPI.workoutData';
import { IContextAPIProps } from '@/types/workoutCard.Type';
import Link from 'next/link';
import React, { useContext } from 'react';

const NavLinkBtn = () => {

    const {addedWorkoutCards,sevedWorkoutCards}=useContext(ContextAPIWorkoutData) as IContextAPIProps
    
    return (
         <div className="hidden sm:flex items-center">
        <Link href={"/my-plan"}>
          <button className="hover:bg-[#c2f8003a] py-2 px-4 rounded-3xl transition-all duration-300">
            Plan
            <span className=" outline-0 ml-1 border-0 bg-[#ccff00] text-black  font-bold w-2 h-2 p-2 py-0.5 rounded-full ">
              {addedWorkoutCards.length}
            </span>
          </button>
        </Link>
        <Link href={"/my-plan"}>
          <button className="hover:bg-[#c2f8003a] py-2 px-4  rounded-3xl transition-all duration-300">
            Saved
            <span className=" outline-0 ml-1  border-gray-400 border  p-2 py-0.5 rounded-full font-bold ">
              {sevedWorkoutCards.length}
            </span>
          </button>
        </Link>
      </div>
    );
};

export default NavLinkBtn;