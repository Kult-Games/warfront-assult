import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { alumni_sans, montserrat, syncopate } from "./fonts";





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
      <body className={`${montserrat.variable} ${syncopate.variable} ${alumni_sans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
