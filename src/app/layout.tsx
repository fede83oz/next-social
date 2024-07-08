import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Vis Inserti e Utensilli",
    description: "Vendita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="w-full">
          <Navbar ></Navbar>
        </div>
        <div className="bg-greenvogue-800 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4">
          {children}
        </div>
      
       </body>
    </html>
  );
}