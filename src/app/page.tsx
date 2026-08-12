import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TechnologyWall from "@/components/TechnologyWall";
import Sonar from "@/components/Sonar";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Hero />
      <Philosophy />
      <Sonar />
      <TechnologyWall />
    </>
  );
}
