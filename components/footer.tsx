import Logo from "@/public/imgs/warfront-logo-footer.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flex border-x">
          <div className="basis-1/4 flex flex-col items-center">
            <Image src={Logo} alt="img" width={92.742} height={93} />
            <p className="text-sm text-muted text-center">
              Prepare for the ultimate war experience as you step onto the front
              lines. Command your troops, strategize your moves, and lead your
              faction to victory. The battlefield awaits your tactical
              brilliance and fearless leadership.
            </p>
          </div>

          
        </div>
      </div>
    </footer>
  );
}
