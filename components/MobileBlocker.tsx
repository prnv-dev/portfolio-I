"use client";

import { useEffect, useState } from "react";

export default function MobileBlocker() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      // Detect desktop mode on mobile
      const isDesktopUA = !/Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );

      // If mobile width AND not desktop mode → block
      if (width < 1024 && !isDesktopUA) {
        setBlocked(true);
      } else {
        setBlocked(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!blocked) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014] text-white px-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-semibold">
          Desktop Experience Recommended 💻
        </h1>

        <p className="text-sm text-gray-300 leading-relaxed">
          This portfolio is designed for desktop and laptop screens to deliver
          the best visuals, animations, and overall experience.
        </p>

        <p className="text-sm text-gray-400">
          👉 You can enable <b>“Desktop site”</b> in your mobile browser to
          preview it, but for the best experience, we recommend opening this
          site on a laptop or computer.
        </p>
      </div>
    </div>
  );
}
