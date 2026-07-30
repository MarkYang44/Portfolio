import type { Metadata } from "next";
import { DetailPage } from "@/components/layout/detail-page";
import { detailPages } from "@/data/detail-pages";

export const metadata: Metadata = {
  title: "Projects | Mark Yang",
  description: detailPages.projects.introduction,
};

export default function ProjectsPage() {
  return <DetailPage page={detailPages.projects} activePath="/projects" />;
}
