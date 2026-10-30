import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Terminal from "@/components/play/Terminal/Terminal";
import Button from "@/components/shared/Button/Button";
import PageHeader from "@/components/shared/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Playground",
  description: "A working terminal for exploring Pranav Kadam's projects, products and links.",
};

export default function LetsFunPage() {
  return (
    <>
      <PageHeader
        title="Playground"
        lede="A small shell wired to this site's data. Poke around, open a project, or head to Brain mode for a quiz."
      >
        <Button href="/brain-mode" variant="ghost" icon={<ArrowRight size={15} />}>
          Brain mode
        </Button>
      </PageHeader>
      <section className="px-gutter py-16 sm:py-24">
        <Terminal />
      </section>
    </>
  );
}
