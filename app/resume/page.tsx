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
        title="Resume"
        lede="Software engineer — desktop, web and AI applications. Preview it here or download the original."
      />
      <section className="px-gutter py-16 sm:py-24">
        <ResumeViewer />
      </section>
    </>
  );
}
