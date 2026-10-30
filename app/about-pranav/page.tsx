import type { Metadata } from "next";
import Readme from "@/components/about/Readme/Readme";
import PageHeader from "@/components/shared/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "README",
  description: "The long-form profile of Pranav Kadam: what he's doing now, his background and how he builds.",
};

export default function AboutPranavPage() {
  return (
    <>
      <PageHeader
        title="README.md"
        lede="The long-form profile — what I'm working on now, where I came from, and how I build."
      />
      <section className="px-gutter py-16 sm:py-24">
        <Readme />
      </section>
    </>
  );
}
