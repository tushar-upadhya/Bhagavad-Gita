import image from "../assets/hero.png";
import { RiArrowDownSFill } from "react-icons/ri";
import DevImg from "./DevImg";
import Badge from "./Badge";
import { InfinityIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse justify-between lg:flex-row gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto leading-8 lg:mx-0 text-center lg:text-left">
            <di className="text-l font-bold uppercase  mb-4 text-primary tracking-[4px]">
              Bhagavad Gita
            </di>
            <p className="subtitle max-w-[490px] font-bold mx-auto lg:mx-0">
              The Song of The Lord is a practical guide to one's life that
              guides one to re-organise their life, achieve inner peace and
              approach the Supreme Lord{" "}
              <span className="font-semibold text-[#cca14ac6]">
                (the Ultimate Reality)
              </span>
              . It is a 700-verse text in Sanskrit which comprises chapters 23
              through 40 in the Bhishma-Parva section of the Mahabharata.
            </p>
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            {/* badge */}

            <Badge
              containerStyles={"absolute top-[80%] -left-[1rem]"}
              badgeText={"Keshav"}
              icon={<InfinityIcon />}
            />

            <Badge
              containerStyles={"absolute top-[55%] -right-8"}
              icon={<InfinityIcon />}
              badgeText={"Madhusudan"}
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>

            <DevImg
              containerStyles={
                "w-[410px] h-[362px] bg-no-repeat bg-cover relative border-bottom"
              }
              imgSrc={image}
            />
          </div>
        </div>
        <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSFill className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
