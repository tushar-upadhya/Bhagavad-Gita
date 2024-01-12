import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Bhagavad Gita
            </div>
            <h1 className="mb-4 h1">Also known as the Gita</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              "The Song of The Lord" is a practical guide to one's life that
              guides one to re-organise their life, achieve inner peace and
              approach the Supreme Lord (the Ultimate Reality). It is a
              700-verse text in Sanskrit which comprises chapters 23 through 40
              in the Bhishma-Parva section of the Mahabharata.
            </p>
            {/* buttons */}
            {/* <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
            </div> */}
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            {/* <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              badgeText="Years Of Experience"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              badgeText="Madhusudan"
            />
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              badgeText="Keshava"
            /> */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2" />
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/hero.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
