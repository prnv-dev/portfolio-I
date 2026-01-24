"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

export default function MobileBlocker() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      // 👇 hard block mobile even in desktop mode
      setBlocked(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!blocked) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014] px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-md text-center text-white"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-purple-500/20">
            <Monitor size={42} className="text-purple-400" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-3 tracking-wide">
          Desktop Experience Required
        </h1>

        <p className="text-sm text-gray-300 leading-relaxed">
          This portfolio is carefully crafted for{" "}
          <span className="text-purple-400 font-medium">
            laptops and desktop screens
          </span>{" "}
          to deliver the best visuals, animations, and overall experience.
        </p>

        <p className="mt-4 text-xs text-gray-400">
          🚫 Mobile devices are not supported — even in desktop mode.
          <br />
          💻 Please open this site on a laptop or computer.
        </p>
      </motion.div>
    </div>
  );
}
