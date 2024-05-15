import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/imgs/warfront-logo.png";
import { navLinks } from "@/constants";
import TelegramIcon from "@/public/icons/telegram-icon.svg";
import DiscordiconIcon from "@/public/icons/discord-icon.svg";
import TwitterIcon from "@/public/icons/twitter-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, TelescopeIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 py-4 z-20">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="img"
            priority
            width={126.417}
            height={58}
            className="w-[106px] lg:w-full h-auto"
          />
        </Link>
        <ul className="max-lg:hidden flex gap-16 ">
          {navLinks.map((item, index) => (
            <li key={index} className="uppercase font-alumiSans text-[22px] text-white">
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          <Link href="/">
            <Image
              src={TelegramIcon}
              alt="img"
              priority
              width={126.417}
              height={58}
              className="w-[106px] lg:w-full h-auto"
            />
          </Link>
          <Link href="/">
            <Image
              src={DiscordiconIcon}
              alt="img"
              priority
              width={126.417}
              height={58}
              className="w-[106px] lg:w-full h-auto"
            />
          </Link>
          <Link href="/">
            <Image
              src={TwitterIcon}
              alt="img"
              priority
              width={126.417}
              height={58}
              className="w-[106px] lg:w-full h-auto"
            />
          </Link>
          <Link href="/">
            <Image
              src={InstagramIcon}
              alt="img"
              priority
              width={126.417}
              height={58}
              className="w-[106px] lg:w-full h-auto"
            />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <AlignJustify className="w-8 h-8" />
          </SheetTrigger>
          <SheetContent className="lg:hidden">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
