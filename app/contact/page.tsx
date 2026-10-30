import type { Metadata } from "next";
import ContactPanel from "@/components/contact/ContactPanel/ContactPanel";
import PageHeader from "@/components/shared/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pranav Kadam by email, LinkedIn, GitHub, Telegram, Instagram or Discord.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title={["Get in", "touch"]}
        lede="Projects, roles, questions about the products — email reaches me fastest. Everything else is listed alongside."
      />
      <section className="px-gutter py-16 sm:py-24">
        <ContactPanel />
      </section>
    </>
  );
}
