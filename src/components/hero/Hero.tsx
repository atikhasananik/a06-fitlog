import heroImg from "@/assets/banner.png";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="rounded-2xl border border-gray-800/80 bg-[#16171d] mx-2 my-3 sm:mx-10 sm:my-20 p-8 md:p-12 lg:p-20 text-white overflow-hidden shadow-2xl">
      <div className="mx-auto max-sm:text-center max-sm:items-center max-sm:justify-center flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex-1 max-w-4xl   space-y-6">
          <div className="text-xs font-bold mb-8 uppercase tracking-wider text-[#ccff00]">
            Workout Library
          </div>

          <h1 className="md:text-4xl text-4xl xl:text-8xl font-black uppercase tracking-tight  font-sans">
            Train with intent. Log <br></br> every set.
          </h1>

          <p className="text-gray-400 max-sm:text-center max-sm:mx-auto text-base sm:text-lg font-normal max-w-[80%] leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2 ">
           <a href="#library">

              <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wide py-3.5 px-6 rounded-lg transition-colors duration-200 cursor-pointer shadow-md active:scale-[0.98]">
                Browse Workouts
              </button>
          
           </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-lg">
          <Image
            className="w-[120%] hover:scale-110 transition-all duration-1000"
            src={heroImg}
            alt="hero img"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
