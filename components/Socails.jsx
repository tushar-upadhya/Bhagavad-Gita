"use client";

import { icons } from "@/utils/utils";
import Link from "next/link";

const Socails = ({ containerStyles, iconsStyle }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={"icon.path"}>
            <div className={`${iconsStyle}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socails;
