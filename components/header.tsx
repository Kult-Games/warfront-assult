"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icons/warfront-logo.svg";
import { navLinks } from "@/constants";
import TelegramIcon from "@/public/icons/telegram-icon.svg";
import DiscordiconIcon from "@/public/icons/discord-icon.svg";
import TwitterIcon from "@/public/icons/twitter-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import HamburgeIcon from "@/public/icons/mobile- hamburge-menu-icon.svg";
import { X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AlignJustify, Globe, Images, TelescopeIcon } from "lucide-react";

export default function Header() {
  const handleButtonClick = () => {
    window.open(
      "https://forms.gle/CUM3anjAYegSB9RN9",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <header className="absolute lg:mt-0 top-0 inset-x-0 z-20">
      <nav className="container flex items-center justify-between py-3">
        <Link href="/">
          <Image
            src={Logo}
            alt="img"
            priority
            // width={126.417}
            // height={58}
            // className="h-[100px] w-[100px] lg:h-[78px] lg:w-[78px]"
          />
        </Link>
        <ul className="max-lg:hidden flex gap-16 ">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="uppercase font-alumiSans text-[22px] text-white"
            >
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <div className="flex items-center gap-10">
            <div className="flex gap-6">
              <Link href="https://t.me/convival">
                <Image
                  src={TelegramIcon}
                  alt="img"
                  priority
                  width={126.417}
                  height={58}
                  className="w-[106px] lg:w-full h-auto"
                />
              </Link>
              <Link href="https://x.com/convival_io?s=21">
                <Image
                  src={TwitterIcon}
                  alt="img"
                  priority
                  width={126.417}
                  height={58}
                  className="w-[106px] lg:w-full h-auto"
                />
              </Link>
              <Link href=" https://www.convival.io/">
                <Globe className="text-border" />
              </Link>
            </div>
            <button
              className="kave-btn px-8 py-4 flex items-center gap-3 font-medium"
              onClick={handleButtonClick}
            >
              BECOME A TESTER
            </button>
          </div>
        </div>
        <button
          className=" lg:hidden kave-btn px-5 py-3 flex items-center gap-3 font-medium bg-black"
          onClick={handleButtonClick}
        >
          BECOME A TESTER
        </button>
        {/* <Sheet>
          <SheetTrigger className="lg:hidden">
            <Image src={HamburgeIcon} alt="img" className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent side={"left"} className="lg:hidden bg-black">
            <div className="flex justify-between items-center">
              <Image src={Logo} alt="img" />
              <SheetClose>
                <X />
              </SheetClose>
            </div>
            <div className="pt-[50px] ">
              <button
                className="kave-btn px-8 py-4 flex items-center gap-3 font-medium"
                onClick={handleButtonClick}
              >
                BECOME A TESTER
              </button>
              <ul className="flex flex-col justify-center items-start gap-5 text-[#cfc796] text-2xl mt-7">
                <li>GAME MODES</li>
                <li>GENESIS PASS</li>
                <li>ROADMAP</li>
              </ul>
            </div>
          </SheetContent>
        </Sheet> */}
      </nav>
    </header>
  );
}
