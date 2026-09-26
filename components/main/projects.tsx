"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
export const Projects=()=> <section className="page-shell page-top"><div className="max-w-3xl"><span className="eyebrow"><span className="eyebrow-dot"/>Selected builds</span><h1 className="display-title mt-5 gradient-text">Projects with purpose.</h1><p className="muted-copy mt-6 max-w-2xl">Real products, platforms and experiments — taken from concept to deployment.</p></div><div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{PROJECTS.map((project,i)=><motion.div key={project.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.45,delay:Math.min(i*.055,.25)}} className={i===0?"md:col-span-2 lg:col-span-2":""}><ProjectCard project={project} featured={i===0}/></motion.div>)}</div></section>;
