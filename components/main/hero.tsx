import { HeroContent } from "@/components/sub/hero-content";
export const Hero = () => <section className="relative min-h-screen overflow-hidden"><video autoPlay muted loop playsInline className="absolute inset-x-0 -top-32 -z-10 hidden h-[760px] w-full rotate-180 object-cover opacity-70 md:block"><source src="/videos/blackhole.webm" type="video/webm"/></video><HeroContent/></section>;
