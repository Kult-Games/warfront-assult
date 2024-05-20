import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/icons/warfront-logo.svg";
import { navLinks } from "@/constants";
import TelegramIcon from "@/public/icons/telegram-icon.svg";
import DiscordiconIcon from "@/public/icons/discord-icon.svg";
import TwitterIcon from "@/public/icons/twitter-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import HamburgeIcon from "@/public/icons/mobile- hamburge-menu-icon.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Globe, Images, TelescopeIcon } from "lucide-react";

export default function Header() {
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
            {/* <Link href="/">
              <Image
                src={DiscordiconIcon}
                alt="img"
                priority
                width={126.417}
                height={58}
                className="w-[106px] lg:w-full h-auto"
              />
            </Link> */}
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
              <Globe className="text-border"/>
            </Link>
            {/* <Link href="/">
              <Image
                src={InstagramIcon}
                alt="img"
                priority
                width={126.417}
                height={58}
                className="w-[106px] lg:w-full h-auto"
              />
            </Link> */}
          </div>
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            {/* <AlignJustify className="w-8 h-8" /> */}
            <Image src={HamburgeIcon} alt="img" className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent className="lg:hidden bg-black">
            {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader> */}
            <ul className=" flex flex-col justify-center items-center gap-5 ">
              <li>GAME MODES</li>
              <li>GENESIS PASS</li>
              <li>ROADMAP</li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
