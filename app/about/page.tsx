import type { Metadata } from "next";
import { DetailPage } from "@/components/layout/detail-page";
import { detailPages } from "@/data/detail-pages";

export const metadata: Metadata = {
  title: "About | Mark Yang",
  description: detailPages.about.introduction,
};

export default function AboutPage() {
  return <DetailPage page={detailPages.about} activePath="/about" />;
}
