"use client";

import { useEffect, useState } from "react";

export default function MobileBlocker() {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobile =
        window.innerWidth < 1024 ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      setIsBlocked(isMobile);

      // HARD LOCK scrolling & zoom
      if (isMobile) {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!isBlocked) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014] px-6">
      <div className="max-w-md text-center space-y-6 select-none">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-purple-500/10">
          <span className="text-3xl">🖥️</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Desktop Experience Required
        </h1>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          This portfolio is crafted exclusively for{" "}
          <span className="text-purple-400 font-medium">
            laptops & desktop screens
          </span>{" "}
          to deliver premium visuals, smooth animations, and the best possible
          experience.
        </p>

        {/* Warning */}
        <div className="text-sm text-red-400 flex items-center justify-center gap-2">
          <span>⛔</span>
          <span>
            Mobile devices are not supported — even in desktop mode.
          </span>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500">
          Recommended screen width: <span className="text-gray-300">1024px+</span>
        </p>
      </div>
    </div>
  );
}
