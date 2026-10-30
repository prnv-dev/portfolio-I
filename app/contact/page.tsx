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
        path="~/contact"
        title="Get in touch"
        lede="Projects, roles, questions about the products — email reaches me fastest. Everything else is listed alongside."
      />
      <section className="mx-auto w-full max-w-shell px-5 py-16 sm:px-8 sm:py-20">
        <ContactPanel />
      </section>
    </>
  );
}
