import Command from "@/components/containers/command";
import Convival from "@/components/containers/convival";
import Gamemode from "@/components/containers/gamemode";
import Hero from "@/components/containers/hero";
import Nft from "@/components/containers/nft";
import Roadmap from "@/components/containers/roadmap";
import Trailer from "@/components/containers/trailer";
import Update from "@/components/containers/update";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <Trailer />
      <Command/>
      <Gamemode/>
      <Convival/>
      {/* <Nft/> */}
      <Update/>
      <Roadmap/>
      {/* <Command/> */}
    </main>
  );
}
