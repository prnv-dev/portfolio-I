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
        path="~/play/brain-mode"
        title="Brain mode"
        lede={`${QUIZ.length} JavaScript snippets. Read each one and predict what it prints — coercion, the event loop, scoping and a few classics.`}
      />
      <section className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20">
        <BrainQuiz />
      </section>
    </>
  );
}
