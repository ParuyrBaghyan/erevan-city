// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.scss";
// import Header from "@/components/header/header";
// import { Providers } from "./store/provider";
// import Footer from "@/components/footer/footer";
// import ResponsiveNavBar from "@/components/responsiveNavBar/responsiveNavBar";
// import Support from "@/components/support/support";
// import ToTop from "@/components/toTop/toTop";
// import en from "@/app/translations/english.json";
// import am from "@/app/translations/armenian.json";
// import ru from "@/app/translations/russian.json";
// import { cookies } from "next/headers";

// const inter = Inter({ subsets: ["latin"] });

// // const cookieStore = cookies();
// // const lang: any = cookieStore.get("lang");

// // export const metadata: Metadata = {
// //   title: {
// //     default:
// //       lang === "en"
// //         ? en.metadata.title.default
// //         : lang === "ru"
// //         ? ru.metadata.title.default
// //         : am.metadata.title.default,
// //     template: "%s - Yerevan City",
// //   },
// //   description: "Կատարեք գնումներ Երևան սիթիից",
// // };


// export async function generateMetadata({ params }: any): Promise<Metadata> {
//   const cookieStore = cookies();
//   const lang = cookieStore.get("lang");
//   return {
//     title: {
//       default:
//         lang === "en"
//           ? en.metadata.title.default
//           : lang === "ru"
//           ? ru.metadata.title.default
//           : am.metadata.title.default,
//       template: "%s - Yerevan City",
//     },
//     description: "Կատարեք գնումներ Երևան սիթիից",
//   };
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Providers>
//           <Header />
//           <div className="space"></div>
//           {children}
//           <Footer />
//           <ResponsiveNavBar />
//           <ToTop />
//           <Support />
//         </Providers>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";
import { Providers } from "./store/provider";
import Footer from "@/components/footer/footer";
import ResponsiveNavBar from "@/components/responsiveNavBar/responsiveNavBar";
import Support from "@/components/support/support";
import ToTop from "@/components/toTop/toTop";
import en from "@/app/translations/english.json";
import am from "@/app/translations/armenian.json";
import ru from "@/app/translations/russian.json";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata(): Promise<Metadata> {
//   const cookieStore = cookies();
//   const lang = cookieStore.get("lang")?.value || "en"; // Fallback to "en" if no cookie exists

//   let selectedLangData = en; 
//   if (lang === "ru") {
//     selectedLangData = ru;
//   } else if (lang === "am") {
//     selectedLangData = am;
//   }

//   return {
  //   title: {
  //     default: selectedLangData.metadata.title.default,
  //     template: "%s - Yerevan City",
  //   },
  //   description: "Կատարեք գնումներ Երևան սիթիից",
  // };
// }

export const metadata: Metadata = {
  title: {
    default: 'asdfghjkl',
    template: "%s - Yerevan City",
  },
  description: "Կատարեք գնումներ Երևան սիթիից",
    twitter: {
    card: "summary_large_image",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en"; // Default to English if no cookie is found

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className="space"></div>
          {children}
          <Footer />
          <ResponsiveNavBar />
          <ToTop />
          <Support />
        </Providers>
      </body>
    </html>
  );
}
