"use client"
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Dumbbell, 
  Compass, 
  Flame, 
  RefreshCw,
  Sparkles,
  Award
} from 'lucide-react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const [reps, setReps] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLiftRep = () => {
    if (isLifting) return;
    setIsLifting(true);
    setReps((prev) => prev + 1);
    setTimeout(() => {
      setIsLifting(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0e0f12] text-white flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-hidden font-sans selection:bg-[#c0fd12] selection:text-black">
      
      {}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow spots */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c0fd12]/10 rounded-full blur-[140px] transition-transform duration-700 ease-out"
          style={{ transform: `translate(calc(-50% + ${mousePos.x * 2}px), calc(-50% + ${mousePos.y * 2}px))` }}
        />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#c0fd12]/5 rounded-full blur-[120px]" />
        
        {/* Modern Cyber Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a20] border border-gray-800/80 shadow-inner mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#c0fd12] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Error 404 • Page Out Of Bounds
          </span>
        </div>

        {}
        <div className="relative my-2 select-none">
          <h1 className="text-[10rem] sm:text-[13rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800/40 drop-shadow-2xl">
            404
          </h1>
          
          {/* Floating Dumbbell inside 404 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="p-4 sm:p-5 rounded-2xl bg-[#181a20]/90 border border-[#c0fd12]/30 shadow-[0_0_50px_rgba(192,253,18,0.25)] backdrop-blur-xl transform transition-transform duration-300 hover:scale-110 cursor-pointer group"
              onClick={handleLiftRep}
              title="Click to perform a rep!"
            >
              <Dumbbell 
                size={48} 
                className={`text-[#c0fd12] transition-transform duration-300 ${
                  isLifting ? '-rotate-45 scale-125' : 'group-hover:rotate-12'
                }`}
              />
            </div>
          </div>
        </div>

        {}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase mt-2">
          Looks like this set was dropped
        </h2>
        <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
          The page you are looking for has been moved, renamed, or doesnt exist in our workout routine.
        </p>

        {}
        <div className="mt-6 flex items-center gap-4 bg-[#181a20]/80 border border-gray-800 rounded-2xl px-5 py-3 backdrop-blur-md shadow-lg">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Flame size={16} className="text-[#c0fd12]" />
            <span>Bonus Reps Earned:</span>
          </div>
          <span className="text-xl font-bold text-[#c0fd12] font-mono">{reps}</span>
          <button 
            onClick={handleLiftRep}
            className="text-xs bg-[#c0fd12]/10 hover:bg-[#c0fd12]/20 text-[#c0fd12] font-semibold px-3 py-1.5 rounded-lg border border-[#c0fd12]/20 transition-all active:scale-95"
          >
            Lift +1 Rep
          </button>
        </div>

        {}
        <div className="w-full max-w-md mt-8 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search exercises, workouts, or guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181a20] border border-gray-800 focus:border-[#c0fd12] text-sm text-white placeholder-gray-500 rounded-2xl pl-11 pr-4 py-3.5 outline-none transition-all shadow-inner focus:ring-1 focus:ring-[#c0fd12]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
          <button
            onClick={() => window.history.back()}
            className="flex-1 min-w-[140px] bg-[#181a20] hover:bg-[#20232c] active:scale-95 text-gray-200 border border-gray-800 font-semibold text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 min-w-[140px] bg-[#c0fd12] hover:bg-[#b0eb0e] active:scale-95 text-black font-bold text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(192,253,18,0.25)]"
          >
            <Home size={16} />
            <span>Return Home</span>
          </button>
        </div>

        {}
        <div className="mt-10 pt-6 border-t border-gray-800/60 w-full max-w-md flex justify-center items-center gap-6 text-xs text-gray-400 font-medium">
          <a href="#" className="hover:text-[#c0fd12] transition-colors flex items-center gap-1.5">
            <Compass size={14} /> Workout Library
          </a>
          <span>•</span>
          <a href="#" className="hover:text-[#c0fd12] transition-colors flex items-center gap-1.5">
            <Award size={14} /> Training Plans
          </a>
          <span>•</span>
          <a href="#" className="hover:text-[#c0fd12] transition-colors flex items-center gap-1.5">
            <Sparkles size={14} /> Support
          </a>
        </div>

      </div>
    </div>
  );
}