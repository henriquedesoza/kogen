# Kōgen 光玄 — Omakase & Sushi

Site de demonstração de um restaurante japonês premium (omakase), construído com
**Next.js 16 (App Router)** + **Tailwind CSS 4** + **TypeScript**.

> Restaurante fictício. Todo o conteúdo (endereço, telefone, equipe, cardápio) é de mentira.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de produção:

```bash
npm run build
npm run start
```

## O que tem

- **Página única com rolagem** e navegação fixa no topo.
- **Bilíngue PT/EN** — botão de troca de idioma no topo. Todo o texto fica em
  `src/lib/content.ts`, com um objeto `{ pt, en }` por string.
- **Seções**: hero, sobre, cardápio (7 categorias em abas), galeria (8 fotos),
  equipe (3 pessoas), imprensa/depoimentos, reserva de mesa, localização + horários.
- **Formulário de reserva** com validação no cliente e confirmação simulada
  (sem backend — é um demo).
- **Mapa** do OpenStreetMap com filtro escuro/ouro para combinar com o tema.
- **Animações** de aparição ao rolar (`IntersectionObserver`), respeitando
  `prefers-reduced-motion`.

## Estrutura

```
src/
├─ app/
│  ├─ globals.css      # tema (cores dark & gold), utilitários
│  ├─ layout.tsx       # fontes, metadata, LangProvider
│  └─ page.tsx         # monta as seções
├─ lib/
│  ├─ content.ts       # TODO o conteúdo, bilíngue (pt/en) + URLs das fotos
│  └─ lang.tsx         # contexto de idioma (useLang)
└─ components/
   ├─ Nav.tsx          # header fixo + menu mobile
   ├─ Hero.tsx
   ├─ About.tsx
   ├─ MenuSection.tsx  # abas por categoria
   ├─ Gallery.tsx
   ├─ Team.tsx
   ├─ Press.tsx
   ├─ Reserve.tsx      # formulário + validação
   ├─ Contact.tsx      # horários, telefone, mapa
   ├─ Footer.tsx
   └─ Reveal.tsx       # animação de aparição ao rolar
```

## Imagens

Fotos reais do Unsplash, carregadas via `next/image` e otimizadas pelo Next.
Para trocar uma foto, altere a URL em `src/lib/content.ts` (`IMG`).

## Cores

| Token        | Valor     | Uso                     |
| ------------ | --------- | ----------------------- |
| `ink`        | `#0a0907` | fundo principal         |
| `ink-2/3`    | `#100e0b` | blocos alternados       |
| `gold`       | `#c8a24a` | acentos, preços, CTA    |
| `gold-2`     | `#e7cf9b` | texto de destaque       |
| `bone`       | `#efe9de` | texto principal         |
| `ash` / `ash-2` | `#a79d8e` / `#867d6f` | texto secundário |

Tipografia: **Cormorant Garamond** (títulos) + **Inter** (corpo). Os caracteres
japoneses usam a mincho do sistema (`.ja`), sem download de fonte extra.

---

Site de demonstração. Feito para fins de exemplo/portfolio.
