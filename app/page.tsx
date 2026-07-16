import Hero from "@/components/sections/Hero";
import Patrimonio from "@/components/sections/Patrimonio";
import ProblemaInvisivel from "@/components/sections/ProblemaInvisivel";
import Reconhecimento from "@/components/sections/Reconhecimento";
import PapelDaIA from "@/components/sections/PapelDaIA";
import Manifesto from "@/components/sections/Manifesto";
import Encerramento from "@/components/sections/Encerramento";

export default function Home() {
  return (
    <main>
      <Hero />
      <Patrimonio />
      <ProblemaInvisivel />
      <Reconhecimento />
      <PapelDaIA />
      <Manifesto />
      <Encerramento />
    </main>
  );
}
