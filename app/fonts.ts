import { Montserrat, Syncopate , Alumni_Sans } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
  });
  
  export const syncopate = Syncopate({
    weight: ["400","700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-syncopate",
  });
  export const alumni_sans = Alumni_Sans({
    weight: ["400","700","800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-alumniSans",
  });