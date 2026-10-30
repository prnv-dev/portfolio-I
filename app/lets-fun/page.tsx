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
        path="~/play"
        title="Playground"
        lede="A small shell wired to this site's data. Poke around, open a project, or head to Brain mode for a quiz."
      >
        <Button href="/brain-mode" variant="ghost" icon={<ArrowRight size={15} />}>
          Brain mode
        </Button>
      </PageHeader>
      <section className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20">
        <Terminal />
      </section>
    </>
  );
}
