"use client";
import { ArrowLeft } from "lucide-react";

const OneStepBackBtn = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex-1 min-w-35 bg-[#181a20] group hover:bg-[#20232c] active:scale-95 text-gray-200 border border-gray-800 font-semibold text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg"
    >
      <span className="group-hover:-translate-x-1 transition-all duration-300">
        <ArrowLeft size={16} />
      </span>
      <span>Go Back</span>
    </button>
  );
};

export default OneStepBackBtn;
