export type Lang = "pt" | "en";
export type L = Record<Lang, string>;

const q = "?auto=format&fit=crop&w=1600&q=72";

export const IMG = {
  hero: "https://images.unsplash.com/photo-1696449241254-11cf7f18ce32" + q,
  about: "https://images.unsplash.com/photo-1742968922506-16be51d4f4da" + q,
  counter: "https://images.unsplash.com/photo-1743592889729-d8a92388412e" + q,
  gallery: [
    "https://images.unsplash.com/photo-1611143669185-af224c5e3252",
    "https://images.unsplash.com/photo-1743653258526-84f0245660c5",
    "https://images.unsplash.com/photo-1617870314635-fc819547ec11",
    "https://images.unsplash.com/photo-1553621042-f6e147245754",
    "https://images.unsplash.com/photo-1752135534175-44aa59a1bb50",
    "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56",
    "https://images.unsplash.com/photo-1563612116625-3012372fccce",
    "https://images.unsplash.com/photo-1758384075930-6e3835d22b1d",
  ].map((u) => u + q),
  team: [
    "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df",
    "https://images.unsplash.com/photo-1600961459395-62759980991e",
    "https://images.unsplash.com/photo-1522701025355-3b334358d451",
  ].map((u) => u + q),
} as const;

export const galleryCaptions: L[] = [
  { pt: "Otoro sobre arroz a 37 °C", en: "Otoro over rice at 37 °C" },
  { pt: "Sashimi do dia, cortado à frente", en: "Today's sashimi, cut in front of you" },
  { pt: "Lanternas da Rua Haddock Lobo", en: "Lanterns on Haddock Lobo Street" },
  { pt: "Nigiri servido um a um", en: "Nigiri served one by one" },
  { pt: "O balcão às 19h", en: "The counter at 7 pm" },
  { pt: "Kinmedai, grelhado na brasa", en: "Kinmedai, grilled over embers" },
  { pt: "Tsuchi-gawara, o prato da casa", en: "Tsuchi-gawara, the house plate" },
  { pt: "Seleção de peixes da baía", en: "Bay catch selection" },
];

export const nav: { id: string; label: L }[] = [
  { id: "sobre", label: { pt: "Sobre", en: "About" } },
  { id: "cardapio", label: { pt: "Cardápio", en: "Menu" } },
  { id: "galeria", label: { pt: "Galeria", en: "Gallery" } },
  { id: "equipe", label: { pt: "Equipe", en: "Team" } },
  { id: "imprensa", label: { pt: "Imprensa", en: "Press" } },
  { id: "local", label: { pt: "Contato", en: "Contact" } },
];

export const site = {
  name: "Kōgen",
  kanji: "光玄",
  hero: {
    eyebrow: { pt: "Omakase · Jardins · São Paulo", en: "Omakase · Jardins · São Paulo" },
    title: "Kōgen",
    line1: { pt: "Dezoito tempos.", en: "Eighteen courses." },
    line2: { pt: "Um só balcão.", en: "One counter." },
    sub: {
      pt: "Vinte lugares, uma lanterna e o peixe que chegou de madrugada. Aqui você não escolhe: você confia.",
      en: "Twenty seats, one lantern, and the fish that arrived before dawn. You don't choose here — you trust.",
    },
    cta1: { pt: "Reservar mesa", en: "Reserve a table" },
    cta2: { pt: "Ver cardápio", en: "See the menu" },
    scroll: { pt: "Role para descobrir", en: "Scroll to discover" },
  },
  about: {
    label: { pt: "Nossa história", en: "Our story" },
    title: {
      pt: "O balcão onde o peixe encontra o tempo",
      en: "The counter where fish meets time",
    },
    p1: {
      pt: "Kōgen abriu em 2011 num sobrado dos Jardins com uma ideia teimosa: servir omakase do jeito que se serve em Tóquio — sem cardápio, sem pressa, sem ruído. Oitenta e uma cadeiras viraram vinte. O que sobrou foi o essencial.",
      en: "Kōgen opened in 2011 in a townhouse in Jardins with one stubborn idea: serve omakase the way it is served in Tokyo — no menu, no rush, no noise. Eighty-one seats became twenty. What remained was the essential.",
    },
    p2: {
      pt: "O arroz é temperado com vinagre de mil anos, da casa de Masu. O peixe vem da Baía de Santos e, três vezes por semana, do mercado de Toyosu. O corte acontece a quarenta centímetros do seu prato.",
      en: "The rice is seasoned with thousand-year vinegar from the Masu house. Fish comes from Santos Bay and, three times a week, from Toyosu market. The cut happens forty centimetres from your plate.",
    },
    stats: [
      { n: "20", l: { pt: "lugares", en: "seats" } },
      { n: "18", l: { pt: "tempos", en: "courses" } },
      { n: "2011", l: { pt: "desde", en: "since" } },
    ],
    signature: { pt: "Haruki Tanabe, Itamae-chō", en: "Haruki Tanabe, Itamae-chō" },
  },
  menu: {
    label: { pt: "Cardápio", en: "Menu" },
    title: { pt: "O que o balcão oferece hoje", en: "What the counter offers today" },
    note: {
      pt: "Cardápio sujeito ao que o mar entregar. Valores em reais, serviço não incluído.",
      en: "The menu follows whatever the sea delivers. Prices in Brazilian reais, service not included.",
    },
    omakaseNote: {
      pt: "Escolha um percurso e deixe o restante com o itamae.",
      en: "Pick a journey and leave the rest to the itamae.",
    },
    reserve: { pt: "Reservar", en: "Reserve" },
  },
  gallery: {
    label: { pt: "Galeria", en: "Gallery" },
    title: { pt: "Fragmentos de uma noite", en: "Fragments of an evening" },
  },
  team: {
    label: { pt: "A equipe", en: "The team" },
    title: { pt: "Quem está atrás do balcão", en: "Who stands behind the counter" },
  },
  press: {
    label: { pt: "Imprensa", en: "Press" },
    title: { pt: "O que dizem de nós", en: "What they say about us" },
  },
  reserve: {
    label: { pt: "Reservas", en: "Reservations" },
    title: { pt: "Garanta seu lugar no balcão", en: "Claim your seat at the counter" },
    sub: {
      pt: "Aceitamos reservas com até 60 dias de antecedência. Mesas para até 6 pessoas; grupos maiores mediante conversa.",
      en: "We accept reservations up to 60 days ahead. Tables for up to 6 guests; larger parties by arrangement.",
    },
    fields: {
      name: { pt: "Nome completo", en: "Full name" },
      email: { pt: "E-mail", en: "Email" },
      phone: { pt: "Telefone", en: "Phone" },
      date: { pt: "Data", en: "Date" },
      time: { pt: "Horário", en: "Time" },
      guests: { pt: "Pessoas", en: "Guests" },
      occasion: { pt: "Ocasião (opcional)", en: "Occasion (optional)" },
      notes: { pt: "Observações · restrições alimentares", en: "Notes · dietary restrictions" },
    },
    occasions: {
      none: { pt: "Selecione", en: "Select" },
      bday: { pt: "Aniversário", en: "Birthday" },
      anniv: { pt: "Aniversário de namoro", en: "Anniversary" },
      business: { pt: "Jantar de negócios", en: "Business dinner" },
      other: { pt: "Outro", en: "Other" },
    },
    times: ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
    submit: { pt: "Solicitar reserva", en: "Request reservation" },
    sending: { pt: "Enviando…", en: "Sending…" },
    errors: {
      required: { pt: "Preencha este campo.", en: "Please fill this field." },
      email: { pt: "E-mail inválido.", en: "Invalid email." },
      past: { pt: "Escolha uma data futura.", en: "Pick a future date." },
    },
    okTitle: { pt: "Pedido recebido", en: "Request received" },
    okBody: {
      pt: "Nossa equipe confirma por telefone em até 2 horas. Se preferir, ligue para (11) 3062-4417.",
      en: "Our team will confirm by phone within 2 hours. Prefer to talk? Call +55 11 3062-4417.",
    },
    okAgain: { pt: "Fazer outra reserva", en: "Make another reservation" },
    legend: { pt: "Campos obrigatórios", en: "Required fields" },
  },
  contact: {
    label: { pt: "Onde estamos", en: "Where we are" },
    title: { pt: "Rua Haddock Lobo, 1626", en: "1626 Haddock Lobo Street" },
    addr: {
      pt: "Cerqueira César · São Paulo · SP · 01414-001",
      en: "Cerqueira César · São Paulo · SP · Brazil",
    },
    hoursTitle: { pt: "Funcionamento", en: "Hours" },
    hours: [
      { d: { pt: "Terça a quinta", en: "Tuesday to Thursday" }, h: "18:30 — 23:00" },
      { d: { pt: "Sexta e sábado", en: "Friday and Saturday" }, h: "18:30 — 00:00" },
      { d: { pt: "Domingo", en: "Sunday" }, h: "12:30 — 16:00" },
      { d: { pt: "Segunda", en: "Monday" }, h: { pt: "Fechado", en: "Closed" } as L },
    ],
    phoneTitle: { pt: "Telefone", en: "Phone" },
    phone: "+55 11 3062-4417",
    mailTitle: { pt: "E-mail", en: "Email" },
    mail: "mesa@kogen.com.br",
    dress: {
      pt: "Traje: esporte fino. Pedimos que evite perfume forte — o balcão é curto e o aroma faz parte do prato.",
      en: "Dress code: smart casual. Please avoid strong perfume — the counter is short and aroma is part of the dish.",
    },
    mapAria: { pt: "Mapa da localização do Kōgen", en: "Map showing Kōgen location" },
    openMap: { pt: "Abrir no Google Maps", en: "Open in Google Maps" },
  },
  footer: {
    rights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
    made: { pt: "Site de demonstração", en: "Demo website" },
    links: { pt: "Navegação", en: "Navigation" },
    hours: { pt: "Horários", en: "Hours" },
    backTop: { pt: "Voltar ao topo", en: "Back to top" },
  },
  langSwitch: { pt: "English", en: "Português" },
  langAria: { pt: "Mudar idioma para inglês", en: "Switch language to Portuguese" },
  menuBtn: { pt: "Abrir menu", en: "Open menu" },
  closeBtn: { pt: "Fechar menu", en: "Close menu" },
  reserveNav: { pt: "Reservar", en: "Reserve" },
};

export type MenuItem = { name: L; jp: string; desc: L; price: string };
export type MenuCategory = {
  id: string;
  title: L;
  jp: string;
  note?: L;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "omakase",
    title: { pt: "Percurso Omakase", en: "Omakase Journey" },
    jp: "おまかせ",
    note: {
      pt: "Para a mesa inteira. Servido no ritmo do itamae.",
      en: "For the whole table. Served at the itamae's pace.",
    },
    items: [
      {
        jp: "光",
        name: { pt: "Omakase Hikari", en: "Omakase Hikari" },
        desc: {
          pt: "18 tempos — das ostras de Mihama ao tamago. A experiência completa, com sake pareado.",
          en: "18 courses — from Mihama oysters to tamago. The full experience, with paired sake.",
        },
        price: "680",
      },
      {
        jp: "月",
        name: { pt: "Omakase Tsuki", en: "Omakase Tsuki" },
        desc: {
          pt: "12 tempos — o percurso clássico, com quatro nigiri de peixe azul e sobremesa da casa.",
          en: "12 courses — the classic journey, with four blue-fish nigiri and a house dessert.",
        },
        price: "480",
      },
      {
        jp: "空",
        name: { pt: "Omakase Sora", en: "Omakase Sora" },
        desc: {
          pt: "8 tempos — entrada, sashimi, quatro nigiri e doce. Ideal para um primeiro encontro.",
          en: "8 courses — starter, sashimi, four nigiri and a sweet. Ideal for a first visit.",
        },
        price: "320",
      },
    ],
  },
  {
    id: "nigiri",
    title: { pt: "Nigiri", en: "Nigiri" },
    jp: "握り",
    note: { pt: "Duas unidades por pedido.", en: "Two pieces per order." },
    items: [
      {
        jp: "大とろ",
        name: { pt: "Ōtoro", en: "Ōtoro" },
        desc: { pt: "Barriga de atum bluefin, derrete a 28 °C.", en: "Bluefin tuna belly, melts at 28 °C." },
        price: "48",
      },
      {
        jp: "中とろ",
        name: { pt: "Chūtoro", en: "Chūtoro" },
        desc: { pt: "Ventre medio com nervos de gelatina.", en: "Medium belly with gelatinous sinew." },
        price: "38",
      },
      {
        jp: "金目鯛",
        name: { pt: "Kinmedai", en: "Kinmedai" },
        desc: { pt: "Snapper vermelho, escaldado no açúcar.", en: "Red snapper, blanched in sugar." },
        price: "42",
      },
      {
        jp: "ほたて",
        name: { pt: "Hotate", en: "Hotate" },
        desc: { pt: "Concha de Hokkaido com zest de yuzu.", en: "Hokkaido scallop with yuzu zest." },
        price: "34",
      },
      {
        jp: "うなぎ",
        name: { pt: "Unagi", en: "Unagi" },
        desc: { pt: "Enguia grelhada, tare de três gerações.", en: "Grilled eel, three-generation tare." },
        price: "36",
      },
      {
        jp: "和牛",
        name: { pt: "Wagyu A5", en: "Wagyu A5" },
        desc: { pt: "Kobe cortado em 18 g, flambado na mesa.", en: "Kobe cut at 18 g, flambéed at the table." },
        price: "62",
      },
      {
        jp: "鮭",
        name: { pt: "Sake", en: "Sake" },
        desc: { pt: "Salmão curado 48 h em sal e kombu.", en: "Salmon cured 48 h in salt and kombu." },
        price: "26",
      },
      {
        jp: "縞鯵",
        name: { pt: "Shima-aji", en: "Shima-aji" },
        desc: { pt: "Carapau-listrado, o peixe da casa.", en: "Striped jack, the house fish." },
        price: "44",
      },
    ],
  },
  {
    id: "sashimi",
    title: { pt: "Sashimi", en: "Sashimi" },
    jp: "刺し身",
    items: [
      {
        jp: "お造り",
        name: { pt: "Otsukuri do Itamae", en: "Itamae's Otsukuri" },
        desc: {
          pt: "Cinco cortes escolhidos da manhã, com wasabi fresco de Shizuoka.",
          en: "Five cuts chosen that morning, with fresh Shizuoka wasabi.",
        },
        price: "190",
      },
      {
        jp: "鮪",
        name: { pt: "Maguro trio", en: "Maguro trio" },
        desc: { pt: "Akami, chūtoro e ōtoro do mesmo lote.", en: "Akami, chūtoro and ōtoro from the same fish." },
        price: "168",
      },
      {
        jp: "鯛",
        name: { pt: "Madai", en: "Madai" },
        desc: { pt: "Robalo-vermelho, envelhecido três dias.", en: "Red sea bream, aged three days." },
        price: "132",
      },
    ],
  },
  {
    id: "makimono",
    title: { pt: "Makimono", en: "Makimono" },
    jp: "巻き物",
    items: [
      {
        jp: "河童",
        name: { pt: "Kappa", en: "Kappa" },
        desc: { pt: "Pepino, gergelim, um fio de shoyu da casa.", en: "Cucumber, sesame, a thread of house shoyu." },
        price: "28",
      },
      {
        jp: "ねぎとろ",
        name: { pt: "Negitoro", en: "Negitoro" },
        desc: { pt: "Atum picado com cebolinha e nori tostado.", en: "Chopped tuna with scallion and toasted nori." },
        price: "46",
      },
      {
        jp: "香玄巻",
        name: { pt: "Futomaki Kōgen", en: "Kōgen Futomaki" },
        desc: { pt: "Oito ingredientes, o único prato que não muda.", en: "Eight ingredients, the one dish that never changes." },
        price: "68",
      },
      {
        jp: "椎茸",
        name: { pt: "Shiitake", en: "Shiitake" },
        desc: { pt: "Cogumelo shiitake confitado no damasco.", en: "Shiitake confited in mirin." },
        price: "34",
      },
    ],
  },
  {
    id: "yakimono",
    title: { pt: "Pratos quentes", en: "Hot dishes" },
    jp: "焼き物",
    items: [
      {
        jp: "銀鱈西京焼",
        name: { pt: "Gindara Saikyo-yaki", en: "Gindara Saikyo-yaki" },
        desc: { pt: "Pescada branca em missô branco por 48 horas.", en: "White cod in white miso for 48 hours." },
        price: "148",
      },
      {
        jp: "和牛しゃぶ",
        name: { pt: "Wagyu no Shabu", en: "Wagyu no Shabu" },
        desc: { pt: "Fatias de 1,5 mm em caldo dashi fervendo.", en: "1.5 mm slices in bubbling dashi broth." },
        price: "190",
      },
      {
        jp: "天ぷら",
        name: { pt: "Tempura Moriawase", en: "Tempura Moriawase" },
        desc: { pt: "Sete temperos da estação, fritura à vista.", en: "Seven seasonal vegetables, fried in view." },
        price: "88",
      },
      {
        jp: "茶碗蒸し",
        name: { pt: "Chawanmushi", en: "Chawanmushi" },
        desc: { pt: "Creme de ovos com cogumelo maitake e ginkgo.", en: "Egg custard with maitake mushroom and ginkgo." },
        price: "54",
      },
      {
        jp: "揚げ出し",
        name: { pt: "Agedashi Dōfu", en: "Agedashi Dōfu" },
        desc: { pt: "Tofu crocante, daikon ralado, katsuobushi.", en: "Crisp tofu, grated daikon, bonito flakes." },
        price: "62",
      },
    ],
  },
  {
    id: "sobremesas",
    title: { pt: "Sobremesas", en: "Desserts" },
    jp: "甘味",
    items: [
      {
        jp: "柚子餅",
        name: { pt: "Mochi de Yuzu", en: "Yuzu Mochi" },
        desc: { pt: "Mochi fresco, yuzu de Kōchi, azuki.", en: "Fresh mochi, Kōchi yuzu, azuki." },
        price: "42",
      },
      {
        jp: "わらび餅",
        name: { pt: "Warabi Mochi", en: "Warabi Mochi" },
        desc: { pt: "Batata brava do Japão com kinako tostado.", en: "Japanese bracken starch with toasted kinako." },
        price: "44",
      },
      {
        jp: "どら焼き",
        name: { pt: "Dorayaki de Matcha", en: "Matcha Dorayaki" },
        desc: { pt: "Panqueca de matcha com creme deanko.", en: "Matcha pancake with anko cream." },
        price: "38",
      },
      {
        jp: "酒粕",
        name: { pt: "Sake Kasu Panna Cotta", en: "Sake Kasu Panna Cotta" },
        desc: { pt: "Leite de sake com pera nashi.", en: "Sake-lees milk with nashi pear." },
        price: "46",
      },
    ],
  },
  {
    id: "bebidas",
    title: { pt: "Sake & bebidas", en: "Sake & drinks" },
    jp: "酒",
    items: [
      {
        jp: "純米大吟醸",
        name: { pt: "Junmai Daiginjo · taça", en: "Junmai Daiginjo · glass" },
        desc: { pt: "Polimento 40%, servido a 12 °C.", en: "40% polish, served at 12 °C." },
        price: "58",
      },
      {
        jp: "にごり",
        name: { pt: "Nigori · taça", en: "Nigori · glass" },
        desc: { pt: "Sake filtrado, cremoso, levemente doce.", en: "Unfiltered sake, creamy, slightly sweet." },
        price: "42",
      },
      {
        jp: "柚子サワー",
        name: { pt: "Yuzu Sour", en: "Yuzu Sour" },
        desc: { pt: "Shochu, yuzu, açúcar de demerara.", en: "Shochu, yuzu, demerara sugar." },
        price: "48",
      },
      {
        jp: "焙じ茶",
        name: { pt: "Hojicha", en: "Hojicha" },
        desc: { pt: "Chá torrado, servido em kettle de ferro.", en: "Roasted tea, served from an iron kettle." },
        price: "26",
      },
    ],
  },
];

export const team: {
  name: L;
  jp: string;
  role: L;
  bio: L;
}[] = [
  {
    name: { pt: "Haruki Tanabe", en: "Haruki Tanabe" },
    jp: "田辺 春樹",
    role: { pt: "Itamae-chō · Chef executivo", en: "Itamae-chō · Executive chef" },
    bio: {
      pt: "Dez anos no balcão do Sushi Saito, em Tóquio. Chegou a São Paulo em 2010 com uma faca e um caderno de recortes.",
      en: "Ten years at the counter of Sushi Saito in Tokyo. Arrived in São Paulo in 2010 with one knife and a scrapbook.",
    },
  },
  {
    name: { pt: "Mitsuko Arai", en: "Mitsuko Arai" },
    jp: "新井 光子",
    role: { pt: "Sommelier de sake", en: "Sake sommelier" },
    bio: {
      pt: "Formada em Nara, traz da família um pequeno brinquedo de Ishikawa. Escolhe o par de cada tempo.",
      en: "Trained in Nara, brings a small Ishikawa brewery from her family. Chooses the pairing for every course.",
    },
  },
  {
    name: { pt: "Rafael Okamoto", en: "Rafael Okamoto" },
    jp: "岡本 ラファエル",
    role: { pt: "Sous-chef · Yakimono", en: "Sous-chef · Hot kitchen" },
    bio: {
      pt: "Brasileiro de Campinas, formado no Instituto Ishida. Cuida do fogo, do missô e da paciência.",
      en: "Brazilian from Campinas, trained at Instituto Ishida. Keeps the fire, the miso and the patience.",
    },
  },
];

export const press: { quote: L; author: L; source: L }[] = [
  {
    quote: {
      pt: "Sentei-me às 19h e levantei às 22h sem perceber. É raro um lugar tão silencioso fazer tanto barulho na memória.",
      en: "I sat down at 7 pm and stood up at 10 without noticing. It is rare for somewhere so quiet to make so much noise in memory.",
    },
    author: { pt: "Cláudia Buarque", en: "Cláudia Buarque" },
    source: { pt: "Revista Prazeres da Mesa", en: "Prazeres da Mesa magazine" },
  },
  {
    quote: {
      pt: "O ōtoro do Kōgen é o melhor que se come a oeste de Ginza. Ponto final.",
      en: "Kōgen's ōtoro is the best you'll eat west of Ginza. Full stop.",
    },
    author: { pt: "Editoria de Gastronomia", en: "Food desk" },
    source: { pt: "Guia Quatro Rodas", en: "Quatro Rodas Guide" },
  },
  {
    quote: {
      pt: "Não há cardápio, não há música, não há pressa. Há um homem, uma faca e peixe frio. Perfeito.",
      en: "No menu, no music, no hurry. Just a man, a knife and cold fish. Perfect.",
    },
    author: { pt: "Daniel Nishimura", en: "Daniel Nishimura" },
    source: { pt: "The São Paulo Review", en: "The São Paulo Review" },
  },
];

export const galleryAlts: L[] = [
  { pt: "Nigiri de otoro servido em prato de cerâmica preta", en: "Otoro nigiri on a black ceramic plate" },
  { pt: "Sashimi fresco disposto sobre gelo", en: "Fresh sashimi arranged over ice" },
  { pt: "Lanternas de papel vermelhas numa ruela de Tóquio", en: "Red paper lanterns in a Tokyo alley" },
  { pt: "Variedade de sushis sobre tampo escuro", en: "Assorted sushi on a dark surface" },
  { pt: "Chef preparando sushi atrás do balcão", en: "Chef preparing sushi behind the counter" },
  { pt: "Pedaços de sushi em prato quadrado preto", en: "Sushi pieces on a square black plate" },
  { pt: "Sushi disposto em tábua de madeira", en: "Sushi arranged on a wooden board" },
  { pt: "Travessa de sashimi com atum, salmão e camarão", en: "Sashimi platter with tuna, salmon and shrimp" },
];

export const teamAlts: L[] = [
  { pt: "Retrato do chef Haruki Tanabe", en: "Portrait of chef Haruki Tanabe" },
  { pt: "Retrato da sommelier Mitsuko Arai", en: "Portrait of sake sommelier Mitsuko Arai" },
  { pt: "Retrato do sous-chef Rafael Okamoto", en: "Portrait of sous-chef Rafael Okamoto" },
];
