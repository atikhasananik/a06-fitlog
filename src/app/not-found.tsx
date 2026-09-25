"use client";
import React, { useState } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {


  return (
    <div className="min-h-screen bg-[#0e0f12] text-white flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden font-sans selection:bg-[#c0fd12] selection:text-black">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#c0fd12]/10 rounded-full blur-[140px] transition-transform duration-700 ease-out"
         
        />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#c0fd12]/5 rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a20] border border-gray-800/80 shadow-inner mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#c0fd12] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Error 404 • Page Out Of Bounds
          </span>
        </div>

        <div className="relative my-2 select-none">
          <h1 className="text-[10rem] sm:text-[13rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-800/40 drop-shadow-2xl">
            404
          </h1>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase mt-2">
          Looks like this set was dropped
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
          The page you are looking for has been moved, renamed, or doesnt exist
          in our workout routine.
        </p>

        <div className="w-full max-w-md mt-8 relative"></div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
          <button
            onClick={() => window.history.back()}
            className="flex-1 min-w-35 bg-[#181a20] hover:bg-[#20232c] active:scale-95 text-gray-200 border border-gray-800 font-semibold text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>
          <Link href="/">
            <button className="flex-1 min-w-35 bg-[#c0fd12] hover:bg-[#b0eb0e] active:scale-95 text-black font-bold text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(192,253,18,0.25)]">
              <Home size={16} />
              <span>Return Home</span>
            </button>
          </Link>
        </div>

        {}
      </div>
    </div>
  );
}
