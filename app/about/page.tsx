import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "About",
  description: "Madison Armstrong's background, experience, and education in fashion merchandising, editorial, styling, and buying.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={<>Madison <span className="italic text-red">Armstrong</span></>} />
      <About />
      <Experience />
    </>
  );
}
