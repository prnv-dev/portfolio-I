import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden pt-[65px] md:pt-0">
      {/* Desktop Only Black Hole Background Video */}
      <video
        autoPlay
        muted
        loop
        className="hidden md:block rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 pointer-events-none"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
