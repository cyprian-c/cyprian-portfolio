"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="fixed inset-0 z-40 pointer-events-none flex"
      >
        <Stairs />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
