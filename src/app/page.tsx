import "./page.scss";
import Animations from "@/components/animations/animations";
import TrendBrands from "@/components/trendBrands/trendBrands";
import Sales from "@/components/sales/sales";
import LineOfProducts from "@/components/lineOfProducts/lineOfProducts";
import Collections from "@/components/collections/collections";
import GetAppBanner from "../components/getAppBanner/getAppBanner";
import Slider from "@/components/slider/slider";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "Գլխավոր էջ",
    description: "Երևան Սիթի սուպերմարկետների ցանցի գլխավոր էջ",
  };
}

export default function Home() {
  return (
    <div className="home-page">
      <Slider />
      {/* <Animations /> */}
      <TrendBrands />
      <Sales />
      <LineOfProducts />
      <Collections />
      <GetAppBanner />
    </div>
  );
}
