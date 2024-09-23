import GeneralBanner from "@/components/BLOG/general-banner/generalBanner";
import "./page.scss";
import Title from "@/components/BLOG/title/title";
import NewFeature from "@/components/BLOG/new-feature/newFeature";
import { Metadata } from "next";
import images from "@/public/opengraph-image.png"


export async function generateMetadata({ params }: any): Promise<Metadata> {
  const imageUrl = '../opengraph-image.png'
  
  return {
    title: "Բլոգ - Թարմացումներ",
    description: "Ամենը մեր կայքի նորությունների մասին",
    openGraph: {
      images:"https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fimg-cdn.pixlr.com%2Fimage-generator%2Fhistory%2F65bb506dcb310754719cf81f%2Fede935de-1138-4f66-8ed7-44bd16efc709%2Fmedium.webp&imgrefurl=https%3A%2F%2Fpixlr.com%2Ffr%2Fimage-generator%2F&docid=DavFKDRjkRRs9M&tbnid=B_ypq20yGKrazM&vet=12ahUKEwiYysai_9iIAxUwSvEDHRVGA-sQM3oECGcQAA..i&w=500&h=500&hcb=2&itg=1&ved=2ahUKEwiYysai_9iIAxUwSvEDHRVGA-sQM3oECGcQAA"
    }
  };
}

export default function Page() {
  return (
    <div className="blog-page">
      <GeneralBanner />
      <Title />
      <NewFeature />
    </div>
  );
}
