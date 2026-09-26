"use client";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const HeroContent = () => {
  const reduceMotion = useReducedMotion();
  const enter = (delay:number) => ({ initial: reduceMotion ? {opacity:1} : {opacity:0,y:18}, animate:{opacity:1,y:0}, transition:{duration:.58,delay,ease:[.22,1,.36,1] as const} });
  return <div className="page-shell grid min-h-[calc(100svh-1rem)] items-center gap-8 pb-14 pt-28 lg:grid-cols-[1.03fr_.97fr] lg:gap-2 lg:pt-32">
    <div className="relative z-10 order-1 max-w-2xl">
      <motion.div {...enter(.06)} className="eyebrow"><SparklesIcon className="h-4 w-4"/>The Developer</motion.div>
      <motion.h1 {...enter(.14)} className="display-title mt-6">Hi, I&apos;m <span className="gradient-text">Pranav.</span><br/><span className="text-zinc-100">I build modern software experiences.</span></motion.h1>
      <motion.p {...enter(.23)} className="muted-copy mt-7 max-w-xl text-base sm:text-lg">I&apos;m a Full Stack Developer who builds complete digital products — from modern web applications and secure backend systems to desktop EXE tools and AI-powered assistants. I enjoy creating fast, scalable solutions, developing custom tools, and experimenting with game modding to understand systems at a deeper level.</motion.p>
      <motion.div {...enter(.31)} className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="button-primary focus-ring">Explore projects <ArrowRight size={16}/></Link><Link href="/about" className="button-secondary focus-ring">About me</Link><a href="https://github.com/pranavop45" target="_blank" rel="noreferrer" aria-label="Pranav on GitHub" className="button-secondary focus-ring"><Github size={17}/></a></motion.div>
    </div>
    <motion.div initial={reduceMotion ? {opacity:1}:{opacity:0,scale:.94,y:20}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.8,delay:.16,ease:[.22,1,.36,1]}} className="relative order-2 mx-auto w-full max-w-[620px] lg:justify-self-end">
      <div className="absolute inset-[18%] rounded-full bg-purple-600/15 blur-[75px]" aria-hidden="true"/>
      <Image src="/hero-bg.svg" alt="Technology icons orbiting a glowing portal" width={650} height={650} priority draggable={false} className="orbital-glow relative h-auto w-full select-none"/>
    </motion.div>
  </div>;
};
