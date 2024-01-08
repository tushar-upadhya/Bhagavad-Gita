import { Download, Send } from "lucide-react";
import { Button } from "./ui/button";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiArrowDownSLine,
  RiTodoFill,
} from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socails from "./Socials";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Tushar Upadhyay</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what i engage in professional success
            </p>
            {/* buttons */}
            <div className="flex flex-col mx-auto mb-12 gap-y-3 md:flex-row gap-x-3 xl:mx-0">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />{" "}
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />{" "}
                </Button>
              </Link>
            </div>
            {/* socails */}
            <Socails
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconsStyle={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            {/* badge */}
            {/* <Badge icon={<RiBriefcase4Fill />} /> */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyle={
                  "bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                }
                imgSrc={"/assets/hero/developer.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
