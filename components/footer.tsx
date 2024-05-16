import Logo from "@/public/icons/footer-convival-logo.svg";
import Image from "next/image";
import TelegramIcon from "@/public/icons/telegram-icon.svg";
import DiscordiconIcon from "@/public/icons/discord-icon.svg";
import TwitterIcon from "@/public/icons/twitter-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flex items-center border-l border-r">
          <div className="px-[59px] py-[80px] flex flex-col gap-6 justify-between items-center w-[39%]">
            <Image src={Logo} alt="img" className="" />
            <p className="font-alumiSans font-medium text-lg text-center text-muted">
              Prepare for the ultimate war experience as you step onto the front
              lines. Command your troops, strategize your moves, and lead your
              faction to victory. The battlefield awaits your tactical
              brilliance and fearless leadership.
            </p>
          </div>
          <div className="flex justify-end gap-[160px] px-[59px] w-full f-full">
            <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium">
              <h4 className="font-semibold">THE PROJECT</h4>
              <li>game</li>
              <li>ROADMAP</li>
              <li>NFT MINT</li>
            </ul>
            <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium">
              <h4 className="font-semibold">LEAGAL STUFF</h4>
              <li>TERMS & CONDITIONS</li>
              <li>PRIVACY POLICY</li>
              <li>FAQ & SUPPORT</li>
              <li>CONTACT</li>
            </ul>
            <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium">
              <h4 className="font-semibold">MORE STUFF</h4>
              <li>MARKETPLACE</li>
              <li>WHITEPAPER</li>
              <li>AUCTION TERMS</li>
              <li>NETWORK</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t px-[130px] 2xl:px-[379px] py-8 flex justify-between">
        <p className="font-alumiSans font-medium text-lg text-[#C0C0C0]">
          Copyright ©2024, Warfront Assault. All rights reserved.
        </p>
        <div className="flex gap-9">
          <Link href="/">
            <Image alt="icon" src={TelegramIcon} />
          </Link>
          <Link href="/">
            <Image alt="icon" src={DiscordiconIcon} />
          </Link>
          <Link href="/">
            <Image alt="icon" src={TwitterIcon} />
          </Link>
          <Link href="/">
            <Image alt="icon" src={InstagramIcon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
