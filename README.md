# A IA não cria marcas. Pessoas criam.

Landing page imersiva para a equipe de Marketing do Praia Clube, conforme o PRD Final. Experiência em formato keynote (Apple/Stripe/Linear) sobre uso estratégico de IA e preservação da identidade visual.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll cinematográfico, parallax, text reveal, sticky sections)
- Lenis (smooth scroll)
- Componentes no padrão shadcn/ui (`components/ui`)

## Rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura (5 atos)

| Seção | Arquivo |
|---|---|
| Hero cinematográfico | `components/sections/Hero.tsx` |
| Ato I — O Patrimônio (timeline 1935 → 90 anos) | `components/sections/Patrimonio.tsx` |
| Ato II — O Problema Invisível | `components/sections/ProblemaInvisivel.tsx` |
| Ato III — Como reconhecemos uma marca | `components/sections/Reconhecimento.tsx` |
| Ato IV — O papel da IA (fluxo + comparador Antes x Depois) | `components/sections/PapelDaIA.tsx` |
| Ato V — Manifesto e compromisso | `components/sections/Manifesto.tsx` |
| Encerramento (tela preta + logo) | `components/sections/Encerramento.tsx` |

## Personalização pendente

1. **Logo oficial**: substituir o placeholder "PC" em `Encerramento.tsx` pelo SVG oficial (download em praiaclube.org.br/manual-de-marca).
2. **Fotografias em tela cheia**: o Hero usa gradiente como placeholder — trocar por foto do clube (ex.: vista aérea noturna).
3. **Cores**: amarelo oficial `#FFDC0E` já configurado em `tailwind.config.ts` (token `praia-yellow`).
