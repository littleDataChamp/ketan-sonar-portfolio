import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import TechnologyWall from "@/components/TechnologyWall";
import Cursor from "@/components/ui/Cursor";
import HomeCapabilities from "@/components/home/HomeCapabilities";
import HomeWork from "@/components/home/HomeWork";
import HomeExperience from "@/components/home/HomeExperience";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Cursor />
      <Hero />
      <Philosophy />
      <HomeCapabilities />
      <HomeWork />
      <TechnologyWall />
      <HomeExperience />
      <HomeCTA />
    </>
  );
}
