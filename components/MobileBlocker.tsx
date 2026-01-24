"use client";

import { useEffect, useState } from "react";

export default function MobileBlocker({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

if (isMobile) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050014] px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Desktop Experience Recommended 🖥️
        </h1>

        <p className="text-gray-400 mb-5 leading-relaxed">
          This portfolio is designed for desktop and laptop screens to deliver
          the best visuals, animations, and overall experience.
        </p>

        <p className="text-gray-500 mb-6">
          👉 You can enable <span className="text-white">“Desktop site”</span> in your
          mobile browser settings to preview it,  
          but for the best experience, we recommend opening this site on a
          <span className="text-white"> laptop or computer</span>.
        </p>

        <div className="text-sm text-gray-600">
          Recommended screen width: 1024px or higher
        </div>
      </div>
    </div>
  );
}

  return <>{children}</>;
}
