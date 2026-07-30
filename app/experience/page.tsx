import type { Metadata } from "next";
import { DetailPage } from "@/components/layout/detail-page";
import { detailPages } from "@/data/detail-pages";

export const metadata: Metadata = {
  title: "Experience | Mark Yang",
  description: detailPages.experience.introduction,
};

export default function ExperiencePage() {
  return <DetailPage page={detailPages.experience} activePath="/experience" />;
}
