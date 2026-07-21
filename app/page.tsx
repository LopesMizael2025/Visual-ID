import Hero from "@/components/sections/Hero";
import Patrimonio from "@/components/sections/Patrimonio";
import Evolucao from "@/components/sections/Evolucao";
import ProblemaInvisivel from "@/components/sections/ProblemaInvisivel";
import Reconhecimento from "@/components/sections/Reconhecimento";
import Marca from "@/components/sections/Marca";
import PapelDaIA from "@/components/sections/PapelDaIA";
import IAComIdentidade from "@/components/ia/IAComIdentidade";
import IAProvaVisual from "@/components/ia/IAProvaVisual";
import IADicasFerramentas from "@/components/ia/IADicasFerramentas";
import IARitualDeAprovacao from "@/components/ia/IARitualDeAprovacao";
import Manifesto from "@/components/sections/Manifesto";
import Encerramento from "@/components/sections/Encerramento";
import ProgressoAtos from "@/components/ui/ProgressoAtos";

export default function Home() {
  return (
    <main>
      <Hero />
      <div data-ato="1">
        <Patrimonio />
        <Evolucao />
      </div>
      <div data-ato="2">
        <ProblemaInvisivel />
      </div>
      <div data-ato="3">
        <Reconhecimento />
        <Marca />
      </div>
      <div data-ato="4">
        <PapelDaIA />
      </div>
      <div data-ato="5">
        <IAComIdentidade />
        <IAProvaVisual />
        <IADicasFerramentas />
        <IARitualDeAprovacao />
      </div>
      <div data-ato="6">
        <Manifesto />
        <Encerramento />
      </div>
      <ProgressoAtos />
    </main>
  );
}
