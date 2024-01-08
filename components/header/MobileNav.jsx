import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import Socails from "../Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav containerStyle={"flex flex-col items-center gap-y-6"} />
          </div>
          <Socails containerStyles={"flex gap-x-4"} iconsStyle={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
