import Hero from "@/components/sections/Hero";
import Patrimonio from "@/components/sections/Patrimonio";
import Evolucao from "@/components/sections/Evolucao";
import ProblemaInvisivel from "@/components/sections/ProblemaInvisivel";
import Reconhecimento from "@/components/sections/Reconhecimento";
import Marca from "@/components/sections/Marca";
import PapelDaIA from "@/components/sections/PapelDaIA";
import IAHero from "@/components/ia/IAHero";
import IAWorkflow from "@/components/ia/IAWorkflow";
import IAContextEngineering from "@/components/ia/IAContextEngineering";
import IADNA from "@/components/ia/IADNA";
import IAPromptBase from "@/components/ia/IAPromptBase";
import IALibrary from "@/components/ia/IALibrary";
import IAPersonas from "@/components/ia/IAPersonas";
import IABoasPraticas from "@/components/ia/IABoasPraticas";
import IAChecklist from "@/components/ia/IAChecklist";
import IAManifesto from "@/components/ia/IAManifesto";
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
      {/* Ato VI — IA com Identidade */}
      <IAHero />
      <IAWorkflow />
      <IAContextEngineering />
      <IADNA />
      <IAPromptBase />
      <IALibrary />
      <IAPersonas />
      <IABoasPraticas />
      <IAChecklist />
      <IAManifesto />
      {/* Manifesto final */}
      <Manifesto />
      <Encerramento />
    </main>
  );
}
