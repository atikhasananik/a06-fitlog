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

      <div className="stats stats-vertical grid  rounded-2xl m py-5 border border-gray-800 lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Exercises</div>
          <div className="stat-value">31K</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Minutes</div>
          <div className="stat-value">4,200</div>
        </div>

        <div className="stat">
          <div className="stat-title">Calories</div>
          <div className="stat-value">1,200</div>
        </div>
      </div>

      <div className="  flex justify-between items-center">
        <div className="tabs p-2  inline-block  transition-all duration-300 tabs-box">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab text-md transition-all duration-400 font-semibold checked:bg-[#2b303dcb] checked:text-primary-content"
            aria-label="Today's Plan"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab text-md transition-all duration-400 font-semibold checked:bg-[#2b303dcb] checked:text-primary-content"
            aria-label="Saved"
          />
        </div>

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
      <div className="border  ">h</div>
    </div>
  );
};

export default page;
