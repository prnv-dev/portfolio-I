import type { Metadata } from "next";
import SkillGroups from "@/components/skills/SkillGroups/SkillGroups";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { ALL_SKILLS } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "The languages, platforms and tools Pranav Kadam builds with — web, systems, AI and everyday tooling.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Toolkit"
        lede={`${ALL_SKILLS.length} tools across web, systems, AI and everyday tooling — the stack behind the desktop apps, web platforms and AI products.`}
      />
      <section className="px-gutter py-16 sm:py-24">
        <SkillGroups />
      </section>
    </>
  );
}
