import Logo from "@/public/imgs/warfront-logo.webp";
import Image from "next/image";
import TelegramIcon from "@/public/icons/telegram-icon.svg";
import DiscordiconIcon from "@/public/icons/discord-icon.svg";
import TwitterIcon from "@/public/icons/twitter-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container hidden lg:block ">
        <div className="bg-[linear-gradient(360deg,#cfc796_0%,#000_100%)] px-[1px]">
          <div className="flex items-center bg-background">
            <div className="px-[59px] py-[80px] flex flex-col gap-6 justify-between items-center w-[39%]">
              <Image src={Logo} alt="img" className="h-[100px] w-[100px]"/>
              <p className="font-alumiSans font-medium text-lg text-center text-muted">
                Prepare for the ultimate war experience as you step onto the
                front lines. Command your troops, strategize your moves, and
                lead your faction to victory. The battlefield awaits your
                tactical brilliance and fearless leadership.
              </p>
            </div>
            <div className="flex justify-end gap-[160px] px-[59px] w-full f-full">
              <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium">
                <h4 className="font-semibold  bg-text">THE PROJECT</h4>
                <li>game</li>
                <li>ROADMAP</li>
                <li>NFT MINT</li>
              </ul>
              <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium">
                <h4 className="font-semibold  bg-text">LEAGAL STUFF</h4>
                <li>TERMS & CONDITIONS</li>
                <li>PRIVACY POLICY</li>
                <li>FAQ & SUPPORT</li>
                <li>CONTACT</li>
              </ul>
              <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium">
                <h4 className="font-semibold bg-text">MORE STUFF</h4>
                <li>MARKETPLACE</li>
                <li>WHITEPAPER</li>
                <li>AUCTION TERMS</li>
                <li>NETWORK</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:lock border-t px-[130px] 2xl:px-[379px] py-8 lg:flex justify-between ">
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

      {/* Mobile Footer Section */}
      <div className="lg:hidden">
        <div className="container">
          <div className="flex items-center justify-between my-6 ">
            <Image src={Logo} alt="img" className="h-[78px] w-[78px]" />
            <div className="flex gap-4">
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
          <div className="bg-[linear-gradient(360deg,#cfc796_0%,#000_100%)] px-[1px]">
            <div className="flex flex-wrap justify-between items-start p-6 bg-background ">
              <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium ">
                <h4 className="font-semibold bg-text ">THE PROJECT</h4>
                <li>game</li>
                <li>ROADMAP</li>
                <li>NFT MINT</li>
              </ul>
              <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium ">
                <h4 className="font-semibold bg-text">LEAGAL STUFF</h4>
                <li>TERMS & CONDITIONS</li>
                <li>PRIVACY POLICY</li>
                <li>FAQ & SUPPORT</li>
                <li>CONTACT</li>
              </ul>
              <ul className="flex flex-col gap-4 font-alumiSans uppercase text-2xl font-medium ">
                <h4 className="font-semibold bg-text">MORE STUFF</h4>
                <li>MARKETPLACE</li>
                <li>WHITEPAPER</li>
                <li>AUCTION TERMS</li>
                <li>NETWORK</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="font-alumiSans font-medium text-lg text-[#C0C0C0] border-t text-center py-4">
          Copyright ©2024, Warfront Assault. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
