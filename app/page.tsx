import Hero from "@/components/home/Hero/Hero";
import ProductReel from "@/components/home/ProductReel/ProductReel";
import Statement from "@/components/home/Statement/Statement";
import Toolkit from "@/components/home/Toolkit/Toolkit";
import WorkList from "@/components/home/WorkList/WorkList";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <ProductReel />
      <WorkList />
      <Toolkit />
    </>
  );
}
