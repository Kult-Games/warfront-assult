import Hero from "@/components/containers/hero";
import StroyLine from "@/components/containers/stroyline";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <StroyLine/>
    </main>
  );
}
