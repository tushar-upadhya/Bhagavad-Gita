"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();
  // console.log("pathName:", pathName);

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transition-all"
      } sticky top-0 z-30 transition-all ${pathName === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyle={"hidden xl:flex gap-x-8 items-center"}
              linkStyles={"relative hover:text-primary transition-all"}
              underlineStyle={
                "absolute left-0 top-full h-[2px] bg-primary w-full"
              }
            />
            <ThemeToggle />

            <div className="xl:hidden">
              {/* mobile */}
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
