
import WorkoutCard from "../common/WorkoutCard";
import { getData } from "@/lib/fetchAPI";
import { IWorkoutCard } from "@/types/workoutCard.Type";

const LibrarySection = async () => {
    const data = await getData()



  return (
    <div id="library" className="my-5 mx-2 sm:m-10 pt-5">
      <div>
        <h2 className="text-4xl font-bold tracking-wide ">The Library </h2>
        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 xl:px-30">
        {data.map((workout: IWorkoutCard) => {
          return <WorkoutCard  key={workout.id} workout={workout}></WorkoutCard>;
        })}
      </div>
    </div>
  );
};

export default LibrarySection;
