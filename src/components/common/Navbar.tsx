import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "../../routing/NavLink";
import Link from "next/link";
import NavLinkBtn from "@/routing/NavLinkBtn";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-100 navbar border-b border-b-slate-800 bg-black items-center justify-between px-2 sm:px-10 py-6 shadow-sm">
      <div className="flex gap-3 items-center">
        <Image src={logo} alt="Fit Log logo"></Image>
        <h1>
          <Link href={"/"} className="text-3xl tracking-wide font-bold ">
            FITLOG
          </Link>
        </h1>
      </div>

      <NavLink />
      <NavLinkBtn />
    </nav>
  );
};

export default Navbar;
