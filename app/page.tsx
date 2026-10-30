import ContactBand from "@/components/home/ContactBand/ContactBand";
import FeatureGrid from "@/components/home/FeatureGrid/FeatureGrid";
import Hero from "@/components/home/Hero/Hero";
import ProjectsPreview from "@/components/home/ProjectsPreview/ProjectsPreview";
import SkillsPreview from "@/components/home/SkillsPreview/SkillsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ProjectsPreview />
      <SkillsPreview />
      <ContactBand />
    </>
  );
}
