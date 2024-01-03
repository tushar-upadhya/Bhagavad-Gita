"use client";

import { socialsIcons } from "@/utils/utils";
import Link from "next/link";

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialsIcons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles} hover:text-sky-800`}>
              {icon.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
