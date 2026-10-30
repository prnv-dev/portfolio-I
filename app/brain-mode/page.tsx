import type { Metadata } from "next";
import BrainQuiz from "@/components/play/BrainQuiz/BrainQuiz";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { QUIZ } from "@/data/brain-quiz";

export const metadata: Metadata = {
  title: "Brain mode",
  description: "A short JavaScript quiz: read the snippet, predict what it prints.",
};

export default function BrainModePage() {
  return (
    <>
      <PageHeader
        title={["Brain", "mode"]}
        lede={`${QUIZ.length} JavaScript snippets. Read each one and predict what it prints — coercion, the event loop, scoping and a few classics.`}
      />
      <section className="px-gutter py-16 sm:py-24">
        <BrainQuiz />
      </section>
    </>
  );
}
