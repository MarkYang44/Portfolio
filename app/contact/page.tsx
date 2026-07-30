import type { Metadata } from "next";
import { DetailPage } from "@/components/layout/detail-page";
import { detailPages } from "@/data/detail-pages";

export const metadata: Metadata = {
  title: "Contact | Mark Yang",
  description: detailPages.contact.introduction,
};

export default function ContactPage() {
  return <DetailPage page={detailPages.contact} activePath="/contact" />;
}
