import Hero from "@/components/Hero";
import HowWeHelp from "@/components/HowWeHelp";
import ContentResults from "@/components/ContentResults";
import Process from "@/components/Process";
import Pilot from "@/components/Pilot";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <HowWeHelp />
      </Reveal>
      <Reveal>
        <ContentResults />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <Pilot />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}
