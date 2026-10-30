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
        path="~/about-pranav"
        title="README.md"
        lede="The long-form profile — what I'm working on now, where I came from, and how I build."
      />
      <section className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20">
        <Readme />
      </section>
    </>
  );
}
