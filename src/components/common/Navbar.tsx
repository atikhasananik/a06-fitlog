import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "../routing/NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar border-b border-b-slate-800 bg-black items-center justify-between px-10 py-6 shadow-sm">
      <div className="flex gap-3 items-center">
        <Image src={logo} alt="Fit Log logo"></Image>
        <h1>
          <Link href={"/"} className="text-3xl tracking-wide font-bold ">
            FITLOG
          </Link>
        </h1>
      </div>

      <NavLink />

      <div className="flex items-center">
        <Link href={"/my-plan"}>
          <button className="hover:bg-[#c2f8003a] py-2 px-4 rounded-3xl transition-all duration-300">
            Plan{" "}
            <span className=" outline-0 ml-1 border-0 bg-[#C2F800] text-black  font-bold  p-2 py-0.5 rounded-full ">
              {0}
            </span>
          </button>
        </Link>
        <Link href={"/my-plan"}>
          <button className="hover:bg-[#c2f8003a] py-2 px-4  rounded-3xl transition-all duration-300">
            Saved{" "}
            <span className=" outline-0 ml-1  border-gray-400 border  p-2 py-0.5 rounded-full font-bold ">
              {0}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
