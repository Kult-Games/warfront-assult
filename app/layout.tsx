import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { Montserrat, Syncopate } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const syncopate = Syncopate({
  weight: ["400","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: "Warfront Assult",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${syncopate.className}`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
