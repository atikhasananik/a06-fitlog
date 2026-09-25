import MyPlanCountBar from "@/components/my-plain/MyPlanCountBar";
import SelectedWorkoutCards from "@/components/my-plain/SelectedWorkoutCards";
import TabBtn from "@/components/my-plain/TabBtn";
import React from "react";

const page = () => {
  return (
    <div className="m-10 space-y-8.5">
      <div className="  space-y-2">
        <h1 className="text-4xl font-bold md:text-6xl tracking-wide">
          MY PLAN
        </h1>
        <p className="text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

     <MyPlanCountBar></MyPlanCountBar>

      <div className="  flex justify-between items-center">
        <TabBtn></TabBtn>

        <div className=" w-[30%] inline-flex justify-end items-center gap-4">
          <p className="text-gray-400">Sort By</p>

          <select defaultValue="Pick a color" className="select p-2">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
      <div className="border border-gray-800 rounded-3xl  p-5  ">
        <SelectedWorkoutCards  ></SelectedWorkoutCards>
      </div>
    </div>
  );
};

export default page;
