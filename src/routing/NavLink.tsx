"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathName = usePathname();

  return (
    <>
      <ul className="flex items-center ">
        <li>
          <Link
            className={`${pathName === "/" ? "bg-[#c2f8003a] text-[#c8ff00]" : ""} py-2 px-4 rounded-2xl text-sm tracking-wide  `}
            href={"/"}
          >
            Workouts
          </Link>
        </li>
        <li>
          <Link
            className={`${pathName === "/my-plan" ? "bg-[#c2f8003a] text-[#C2F800]" : ""}  py-2 px-4 rounded-2xl text-sm tracking-wide `}
            href={"/my-plan"}
          >
            My Plan
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavLink;
