import Hero from "@/components/sections/Hero";
import Patrimonio from "@/components/sections/Patrimonio";
import Evolucao from "@/components/sections/Evolucao";
import ProblemaInvisivel from "@/components/sections/ProblemaInvisivel";
import Reconhecimento from "@/components/sections/Reconhecimento";
import Marca from "@/components/sections/Marca";
import PapelDaIA from "@/components/sections/PapelDaIA";
import IAComIdentidade from "@/components/ia/IAComIdentidade";
import IAProvaVisual from "@/components/ia/IAProvaVisual";
import IARitualDeAprovacao from "@/components/ia/IARitualDeAprovacao";
import Manifesto from "@/components/sections/Manifesto";
import Encerramento from "@/components/sections/Encerramento";

export default function Home() {
  return (
    <main>
      <Hero />
      <Patrimonio />
      <Evolucao />
      <ProblemaInvisivel />
      <Reconhecimento />
      <Marca />
      <PapelDaIA />
      {/* Ato V — IA com Identidade */}
      <IAComIdentidade />
      <IAProvaVisual />
      <IARitualDeAprovacao />
      {/* Ato VI — Manifesto e compromisso */}
      <Manifesto />
      <Encerramento />
    </main>
  );
}
