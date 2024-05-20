import Logo from "@/public/icons/footer-logo.svg";
import Image from "next/image";
import TelegramIcon from "@/public/icons/telegram-icon.svg";
import DiscordiconIcon from "@/public/icons/discord-icon.svg";
import TwitterIcon from "@/public/icons/twitter-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import Link from "next/link";

import AptosImg from "@/public/imgs/aptos-logo.png";
import ConvivalImg from "@/public/imgs/convival-text-img.png";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container hidden lg:block ">
        <div className="bg-[linear-gradient(360deg,#cfc796_0%,#000_100%)] px-[1px]">
          <div className="flex items-center justify-between bg-background ">
            <div className="px-16 py-10 flex flex-col gap-6 justify-between items-start w-[33%]">
              <Image src={Logo} alt="img" className="w-[40%]" />
              <p className="font-alumiSans font-medium text-lg text-muted">
                Engage in the ultimate combat experience on Aptos Your
                battlefield, your rules. Deploy now!
              </p>
            </div>

            <div className="flex flex-col items-end gap-10 pr-12">
              <div className="flex gap-9">
                <Link href="https://t.me/convival">
                  <Image alt="icon" src={TelegramIcon} />
                </Link>
                <Link href="https://x.com/convival_io?s=21">
                  <Image alt="icon" src={TwitterIcon} />
                </Link>
                <Link href="https://www.convival.io/">
                  <Globe className="text-border" />
                </Link>
              </div>
              <div className="flex items-center justify-end gap-5">
                <Image src={ConvivalImg} alt="img" className="w-[40%]" />
                <Image src={AptosImg} alt="img" className="w-[20%]" />
              </div>
            </div>
            {/* <div className="flex justify-end gap-[160px] px-[59px] w-full f-full">
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
            </div> */}
          </div>
        </div>
      </div>
      <div className="hidden border-t container py-4 lg:flex">
        <p className="font-alumiSans font-medium text-lg text-[#C0C0C0]">
          Copyright ©2024, Warfront Assault. All rights reserved.
        </p>
        {/* <div className="flex gap-9">
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
        </div> */}
      </div>

      {/* Mobile Footer Section */}
      <div className="lg:hidden">
        <div className="container">
          <div className="flex flex-col items-center justify-between my-6 ">
            <div className="px-[59px] py-[80px] flex flex-col gap-6 justify-between items-center ">
              <Image src={Logo} alt="img" />
              <p className="font-alumiSans font-medium text-lg text-muted text-center">
                Engage in the ultimate combat experience on Aptos Your
                battlefield, your rules. Deploy now!
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://t.me/convival">
                <Image alt="icon" src={TelegramIcon} />
              </Link>
              <Link href="https://x.com/convival_io?s=21">
                <Image alt="icon" src={TwitterIcon} />
              </Link>
              <Link href="https://www.convival.io/">
                <Globe className="text-border" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-5 mt-5">
              <Image src={ConvivalImg} alt="img" className="w-[40%]" />
              <Image src={AptosImg} alt="img" className="w-[20%]" />
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
