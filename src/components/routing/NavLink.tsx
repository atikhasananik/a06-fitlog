"use client";
import Link from "next/link";
import React, { useState } from "react";

type TnavStatus = "workouts" | "myplan";

const NavLink = () => {
  const [navStatus, setnavStatus] = useState<TnavStatus>("workouts");

  const handleNavLink = (dets: TnavStatus): void => {
    setnavStatus(dets);
  };

  return (
    <>
      <ul className="flex items-center ">
        <li>
          <Link
          
            className={`${navStatus === "workouts" ? "bg-[#c2f8003a] text-[#c8ff00]" : ""} py-2 px-4 rounded-2xl text-sm tracking-wide  `}
            onClick={() => handleNavLink("workouts")}
            href={"/"}
          >
            Workouts
          </Link>
        </li>
        <li>
          <Link
            className={`${navStatus === "myplan" ? "bg-[#c2f8003a] text-[#C2F800]" : ""}  py-2 px-4 rounded-2xl text-sm tracking-wide `}
            onClick={() => handleNavLink("myplan")}
            href={"/my-plan"}
          >
            My Plan
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavLink;
