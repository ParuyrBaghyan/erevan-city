import Collections from "@/components/collections/collections";
import "./page.scss";
import { Metadata } from "next";
import { cookies } from "next/headers";

export async function generateMetadata({ params }: any): Promise<Metadata> {

  return {
    title: "post.title",
    description: "post.description",
  };
}

export default function Page() {
  return (
    <div className="collections-page">
      <Collections />
    </div>
  );
}