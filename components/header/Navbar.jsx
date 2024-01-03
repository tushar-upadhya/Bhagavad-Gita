import { navLinks } from "@/utils/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ containerStyles, linkStyle, underLineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles} text-x font-semibold text-slate-600`}>
      {navLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyle}`}
          >
            {navLinks.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
