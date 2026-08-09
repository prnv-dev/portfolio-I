"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-20 mt-6 sm:mt-10 md:mt-40 w-full z-[20] gap-4 md:gap-0"
    >
      {/* DESKTOP ONLY: Technology Orbit SVG (Original Desktop Presentation) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full h-full justify-center items-center order-2"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>

      {/* Text Content (Starts directly below navbar on Mobile, Left on Desktop) */}
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-start items-start order-1 md:order-1">
        {/* "The Developer" Badge - FIRST element on Mobile */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
           𝙏𝙝𝙚 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-6 mt-2 md:mt-6 text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight"
        >
          <span>
            Hi, I&apos;m{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r from-purple-500 to-cyan-500
                font-extrabold
                name-flicker
              "
            >
              Pranav
            </span>
            <br />
            I build modern software experiences.
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-2 md:my-5 max-w-[600px] leading-relaxed"
        >
          I&apos;m a Full Stack Developer who builds complete digital products — from
          modern web applications and secure backend systems to desktop EXE tools and
          AI-powered assistants. I enjoy creating fast, scalable solutions, developing
          custom tools, and experimenting with game modding to understand systems at a
          deeper level.
        </motion.p>

        {/* Button */}
        <Link href="/about-pranav">
          <motion.div
            variants={slideInFromLeft(1)}
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            All Details
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};
