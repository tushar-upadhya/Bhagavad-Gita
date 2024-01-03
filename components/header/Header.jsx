"use client";

import Logo from "./Logo";
import Navbar from "./Navbar";
// import ThemeToggle from "../ThemeToggle";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();
  // console.log("pathName:", pathName);

  useEffect(() => {
    const scrollYPosition = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPosition);
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathName === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles={"hidden xl:flex gap-x-8 item-center"}
              linkStyle={"relative hover:text-primary transition-all"}
              underLineStyles={
                "absolute left:0 top-full h-[2px] bg-primary w-full"
              }
            />

            {/* <ThemeToggle /> */}

            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
