"use client";

import useScroll from "@/hooks/useScroll";
import { UtilsVariants } from "@/utils/utils";
import { motion } from "framer-motion";

const Template = ({ children }) => {
  const completion = useScroll();
  return (
    <>
      <motion.main
        variants={UtilsVariants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed top-0 bottom-0 right-0 z-50 w-1 transition-all duration-700 bg-primary"
      ></span>
    </>
  );
};

export default Template;
