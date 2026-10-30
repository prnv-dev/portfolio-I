import type { Metadata } from "next";
import { ArrowRight, FileText } from "lucide-react";
import AboutGrid from "@/components/about/AboutGrid/AboutGrid";
import Button from "@/components/shared/Button/Button";
import PageHeader from "@/components/shared/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pranav Kadam — final-year AIML engineering student at Sandip University, Nashik, building a multi-product software company.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={["About", "Pranav"]}
        lede="Final-year AIML engineering student, building a software company out of Nashik. The short version is below; the longer one is in the README."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/about-pranav" icon={<ArrowRight size={15} />}>
            Read the README
          </Button>
          <Button href="/resume" variant="ghost" icon={<FileText size={15} />}>
            Resume
          </Button>
        </div>
      </PageHeader>
      <section className="px-gutter py-16 sm:py-24">
        <AboutGrid />
      </section>
    </>
  );
}
