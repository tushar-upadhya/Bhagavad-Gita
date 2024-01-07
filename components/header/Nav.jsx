import { utilsNavLink } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Nav = ({ containerStyle, linkStyles, underlineStyle }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyle}`}>
      {utilsNavLink.map((link, index) => {
        return (
          <Link href={link.path} className={`capitalize ${linkStyles}`}>
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyle}`}
              />
            )}
            {link.name}{" "}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
