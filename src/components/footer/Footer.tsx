import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-between max-sm:justify-center max-sm:flex-col items-center m-10 mt-10 sm:mt-30 border-t pt-10 border-gray-800">
      <div className="flex gap-3 items-center">
        <Image src={logo} alt="Fit Log logo"></Image>
        <h1>
          <Link href={"/"} className="text-3xl tracking-wide font-bold ">
            FITLOG
          </Link>
        </h1>
      </div>
      <p className="text-[#6B7280]  text-sm ">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  );
};

export default Footer;
