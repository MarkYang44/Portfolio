import type { Metadata } from "next";
import { DetailPage } from "@/components/layout/detail-page";
import { detailPages } from "@/data/detail-pages";

export const metadata: Metadata = {
  title: "Skills | Mark Yang",
  description: detailPages.skills.introduction,
};

export default function SkillsPage() {
  return <DetailPage page={detailPages.skills} activePath="/skills" />;
}
