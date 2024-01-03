"use client";

import UseScroll from "@/hooks/UseScroll";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = UseScroll();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed top-0 bottom-0 right-0 z-50 w-1 transition-all duration-700 bg-primary"
      >
        <div className="h-[400px]"></div>
      </span>
    </>
  );
};

export default Template;
