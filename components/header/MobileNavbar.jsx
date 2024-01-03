import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Socials from "../Socials";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navbar
              containerStyles="flex flx-col items-center gap-x-6"
              linkStyle={"text-2xl"}
            />
          </div>
          <Socials containerStyles={"flex gap-x-4"} iconsStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
