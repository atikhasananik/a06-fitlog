import Button from "@/components/common/Button";
import OneStepBackBtn from "@/components/common/OneStepBackBtn";
import { getData } from "@/lib/fetchAPI";
import { IWorkoutCard } from "@/types/workoutCard.Type";
import Image from "next/image";

interface IDetailsProps {
  params: { cardID: string };
}

const Details = async ({ params }: IDetailsProps) => {
  const { cardID } = await params;
  const data = await getData();

  const exist = data.find((card: IWorkoutCard) => {
    return card.id === Number(cardID);
  });

  if (!exist) {
    return <div>no card yet</div>;
  }

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${Number(cardID)}`,
  {cache:"force-cache"});
  const workoutCard = (await res.json()) as IWorkoutCard;

  return (
    <div className="min-h-screen relative  text-white flex items-center justify-center p-4 sm:p-8 lg:p-12 font-sans selection:bg-[#c0fd12] selection:text-black">
       <div className="absolute top-25 left-20">
        <OneStepBackBtn></OneStepBackBtn>
      </div>
      <div className="w-full h-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="w-full h-full">
          <div className="hover-3d relative h-full rounded-3xl ">
            {/* content */}
            <figure className=" rounded-2xl">
              <Image
                width={600}
                height={900}
                src={workoutCard.image}
                alt="Barbell Bench Press"
                className="w-full hover:scale-100 transition-all duration-500 h-full object-cover"
              />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

         
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
              {workoutCard.name}
            </h1>
            <p className="mt-2 text-gray-400 text-sm sm:text-base leading-relaxed">
              {workoutCard.description}
            </p>

            <div className="flex items-center gap-2 mt-4">
              {workoutCard.muscleGroups.map((mus, idx) => {
                return (
                  <span
                    key={idx}
                    className="bg-[#c0fd12] text-black font-semibold text-xs px-3 py-1 rounded-full"
                  >
                    {mus}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="bg-[#181a20] rounded-2xl border border-gray-800/80 p-5 space-y-3.5 shadow-lg">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-semibold text-gray-500 tracking-wider uppercase">
                EQUIPMENT
              </span>
              <span className="text-gray-200 font-medium">
                {workoutCard.equipment}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-semibold text-gray-500 tracking-wider uppercase">
                DIFFICULTY
              </span>
              <span className="text-gray-200 font-medium">
                {workoutCard.difficulty}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-semibold text-gray-500 tracking-wider uppercase">
                SETS
              </span>
              <span className="text-gray-200 font-medium">
                {workoutCard.sets}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-semibold text-gray-500 tracking-wider uppercase">
                REPS
              </span>
              <span className="text-gray-200 font-medium">
                {workoutCard.reps}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-semibold text-gray-500 tracking-wider uppercase">
                DURATION
              </span>
              <span className="text-gray-200 font-medium">
                {workoutCard.duration}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-semibold text-gray-500 tracking-wider uppercase">
                CALORIES
              </span>
              <span className="text-gray-200 font-medium">
                {workoutCard.caloriesBurned}
              </span>
            </div>

            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="font-semibold text-gray-500 tracking-wider uppercase">
                RATING
              </span>
              <span className="text-gray-200 font-medium">
                {workoutCard.rating}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              INSTRUCTIONS
            </h2>
            <ol className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
              {workoutCard.instructions.map((ins, idx) => {
                return (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400 font-medium">
                      {idx + 1}.
                    </span>
                    <span>{ins}</span>
                  </li>
                );
              })}
            </ol>
          </div>
          <Button workoutCard= {workoutCard}></Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
