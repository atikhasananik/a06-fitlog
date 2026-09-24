import { IWorkoutCard } from "@/types/workoutCard.Type";

import Image from "next/image";
import Link from "next/link";


interface WorkoutCardProps {
  workout: IWorkoutCard;
}

export const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const {
    image,
    muscleGroups,
    name,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link href={`/details/${workout.id}`}>
      <div className="w-full group  rounded-2xl bg-[#16171d] border border-gray-800/80 overflow-hidden shadow-xl text-white transition-all duration-300 hover:border-gray-700 flex flex-col justify-between">
        {/* Top Image Container */}
        <div className="relative object-bottom  group-hover:scale-105 transition-all duration-300 w-full h-62 overflow-hidden bg-gray-900">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover "
          />
        </div>

        {/* Card Body */}
        <div className="p-5  flex flex-col justify-between flex-1">
          <div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#ccff00] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>

            
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">
              {name}
            </h3>

            <p className="text-gray-400 text-xs font-medium mb-6">
              {equipment}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-800/80 flex items-center gap-5 text-gray-400 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c0 0-5 4-5 8.5C7 13.5 9.2 16 12 16s5-2.5 5-5.5C17 6 12 2 12 2z" />
              </svg>
              <span>{caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
