import { IWorkoutCard } from '@/types/workoutCard.Type';
import Image from 'next/image';


interface ISelectedWorkoutCardProps {
  workout: IWorkoutCard;
}

export const SelectedWorkoutCard = ({ workout }:ISelectedWorkoutCardProps) => {
  return (
    <div className="w-full bg-[#16171d] border border-gray-800/80 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white shadow-xl relative overflow-hidden">
      
      
      <div className="flex items-center gap-4 flex-1 min-w-0">
      
        <div className="w-28 h-20 sm:w-40 sm:h-36 rounded-xl overflow-hidden bg-gray-900 shrink-0">
          <Image
          width={500}
          height={500}
            src={workout.image}
            alt={workout.name}
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="flex flex-col justify-center space-y-2 min-w-0">
          <h3 className="text-base sm:text-2xl md:text-5xl font-black uppercase tracking-tight text-white truncate">
            {workout.name}
          </h3>
          <p className="text-gray-400 text-sm font-medium truncate">
            {workout.equipment}
          </p>

          
          <div className="flex items-center gap-4 text-gray-400 text-sm font-medium pt-1">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 CCFF00"
                fill="none"
                stroke="#CCFF00"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center  text-gray-400 gap-1.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke='#CCFF00'
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c0 0-5 4-5 8.5C7 13.5 9.2 16 12 16s5-2.5 5-5.5C17 6 12 2 12 2z" />
              </svg>
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 "
                fill="none"
                stroke="#CCFF00"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
        {/* View Details Button */}
        <button className="border border-gray-700/80 hover:bg-gray-800/60 text-gray-200 font-semibold text-xs py-2.5 px-4 rounded-full transition-colors cursor-pointer">
          View Details
        </button>

        {/* Mark as Done Button */}
        <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs py-2.5 px-4 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-md">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Mark as Done</span>
        </button>

        {/* Remove/Close Button */}
        <button className="text-gray-500 hover:text-gray-300 p-1.5 rounded-lg transition-colors cursor-pointer ml-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default SelectedWorkoutCard;