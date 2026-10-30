import type { Metadata } from "next";
import ResumeViewer from "@/components/resume/ResumeViewer/ResumeViewer";
import PageHeader from "@/components/shared/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Pranav Kadam — software engineer working across desktop, web and AI applications.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        path="~/resume"
        title="Resume"
        lede="Software engineer — desktop, web and AI applications. Preview it here or download the original."
      />
      <section className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20">
        <ResumeViewer />
      </section>
    </>
  );
}
