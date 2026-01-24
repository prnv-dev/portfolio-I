'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#about-me");

  // Default active section on load
  useEffect(() => {
    setActiveHash("#about-me");
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 z-50 px-10
      bg-[#03001427] backdrop-blur-md
      shadow-lg shadow-[#2A0E61]/50"
    >
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">


{/* Logo */}
<Link
  href="#about-me"
  onClick={() => setActiveHash("#about-me")}
  className="flex items-center"
>
  <Image
    src="/logo.png"
    alt="Logo"
    width={70}
    height={70}
    draggable={false}
  />

  <div
    className="
      hidden md:flex
      ml-[10px]
      text-purple-400
      font-bold
      tracking-widest
      flicker
    "
  >
    ＰＯＲＴＦＯＬＩＯ
  </div>
</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full
            border border-[rgba(112,66,248,0.38)]
            bg-[rgba(3,0,20,0.37)]
            px-[20px] py-[10px]
            rounded-full"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeHash === link.link;

              return (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={() => setActiveHash(link.link)}
                  className={`px-4 py-1 rounded-full text-sm transition-all duration-300
                    ${
                      isActive
                        ? "text-purple-300 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                        : "text-gray-300 hover:text-purple-400"
                    }`}
                >
                  {link.title}
                </Link>
              );
            })}

            {/* GitHub */}
            <Link
              href={LINKS.GitHub}
              target="_blank"
              className="text-gray-300 hover:text-purple-400 transition"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Brain Mode Button */}
        <div className="hidden md:flex">
          <Link
            href="/brain-mode"
            className="px-4 py-2 rounded-full
              border border-purple-500
              text-purple-300
              hover:bg-purple-600 hover:text-white
              transition text-sm font-semibold"
          >
            🧠 Brain Mode
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]
          p-5 flex flex-col items-center md:hidden"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeHash === link.link;

            return (
              <Link
                key={link.title}
                href={link.link}
                onClick={() => {
                  setActiveHash(link.link);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-full transition-all
                  ${
                    isActive
                      ? "text-purple-300 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
              >
                {link.title}
              </Link>
            );
          })}

          <Link
            href={LINKS.GitHub}
            target="_blank"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-gray-300 hover:text-purple-400"
          >
            GitHub
          </Link>

          <Link
            href="/brain-mode"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-2 rounded-full
              border border-purple-500
              text-purple-300
              hover:bg-purple-600 hover:text-white
              transition font-semibold"
          >
            🧠 Brain Mode
          </Link>
        </div>
      )}
    </div>
  );
};
