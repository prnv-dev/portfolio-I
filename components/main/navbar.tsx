"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [{ title: "About me", href: "/about" }, { title: "Skills", href: "/skills" }, { title: "Projects", href: "/projects" }, { title: "GitHub", href: "/github" }];
export const Navbar = () => {
  const pathname = usePathname(); const [menuOpen, setMenuOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 18); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => setMenuOpen(false), [pathname]);
  return <motion.header initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease: [0.22,1,.36,1] }} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
    <nav className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${scrolled ? "border-white/15 bg-[#08031b]/88 shadow-[0_12px_45px_rgba(3,0,20,.5)] backdrop-blur-2xl" : "border-purple-400/15 bg-[#08031b]/58 backdrop-blur-xl"}`} aria-label="Primary navigation">
      <Link href="/" className="group flex min-w-0 items-center rounded-xl focus-ring"><Image src="/logo.png" alt="PK" width={54} height={54} priority className="h-11 w-11 object-contain" /><span className="ml-1 hidden text-xs font-bold tracking-[0.24em] text-purple-300 sm:block">PORTFOLIO</span></Link>
      <div className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-xl border border-white/10 bg-white/[0.035] p-1 lg:flex">{links.map(link => { const active = pathname === link.href; return <Link key={link.href} href={link.href} className={`relative rounded-lg px-4 py-2 text-sm transition-colors focus-ring ${active ? "text-white" : "text-zinc-400 hover:text-white"}`}>{active && <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-lg border border-purple-400/20 bg-purple-400/10 shadow-[inset_0_0_16px_rgba(168,85,247,.12)]" />}{link.title}</Link>; })}</div>
      <div className="hidden items-center gap-2 lg:flex"><Link href="/resume" className="nav-quiet focus-ring">Resume</Link><Link href="/contact" className="nav-quiet focus-ring">Contact</Link><Link href="/lets-fun" className="fun-button focus-ring"><span>✦</span> Let&apos;s Fun!</Link></div>
      <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white focus-ring lg:hidden">{menuOpen ? <X size={20}/> : <Menu size={21}/>}</button>
    </nav>
    <AnimatePresence>{menuOpen && <motion.div initial={{ opacity: 0, y: -8, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .98 }} transition={{ duration: .2 }} className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#08031b]/95 p-2 shadow-2xl backdrop-blur-2xl lg:hidden">{[{title:"Home",href:"/"},...links,{title:"Resume",href:"/resume"},{title:"Contact",href:"/contact"}].map(link => <Link key={link.href} href={link.href} className={`flex min-h-12 items-center rounded-xl px-4 text-sm ${pathname === link.href ? "bg-purple-500/15 text-purple-200" : "text-zinc-300 hover:bg-white/5"}`}>{link.title}</Link>)}<Link href="/lets-fun" className="fun-button mt-2 flex min-h-12 w-full justify-center focus-ring"><span>✦</span> Let&apos;s Fun!</Link></motion.div>}</AnimatePresence>
  </motion.header>;
};
