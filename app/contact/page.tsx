import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Madison Armstrong by email or LinkedIn.",
};

export default function ContactPage() {
  return <Contact />;
}
