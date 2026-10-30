import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid/ProjectGrid";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Live products and work in progress by Pranav Kadam — DeepScan AI, CodeVault, CleanMaster Pro and more.",
};

const live = PROJECTS.filter((project) => project.status === "live").length;
const soon = PROJECTS.length - live;

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        path="~/projects"
        title="Projects"
        lede={`${live} deployed and public, ${soon} in development. Desktop software, web platforms and AI products — each one built and shipped end to end.`}
      />
      <section className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20">
        <ProjectGrid />
      </section>
    </>
  );
}
