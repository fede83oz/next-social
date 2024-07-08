import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import qs from "qs";
import NavMenu from "@/components/navmenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Vis",
  description: "Inserti e utensili in vendita",
};



const homePageQuery = qs.stringify({
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: {
            populate: true,
          },
        },
      },
    },
  });
  
  async function getStrapiData(path:string){
    const baseUrl = "http://127.0.0.1:1337";
  
    const url = new URL(path, baseUrl);
    url.search = homePageQuery;
  
    try{
      const reponse = await fetch(url.href);
      const data = await reponse.json(); 
      console.log(data)   ;
      return data;
    }
    catch (error){
      console.error(error);
    }
  }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main>
      <NavMenu data={}></NavMenu>
      <body className={inter.className}>{children}</body>
      </main>
    </html>
  );
}
