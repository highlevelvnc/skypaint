export const SITE = {
  brand: "Skypaint",
  tagline: "Pinturas. Reformas. Acabamentos de excelência.",
  city: "Cascais",
  region: "Lisboa",
  phoneDisplay: "+351 910 346 159",
  phoneTel: "+351910346159",
  whatsapp: "https://wa.me/351910346159",
  email: "geral@skypaint.pt",
  yearsExperience: 4,
  projectsDelivered: 480,
  satisfaction: 99,
};

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  cover: string;
  gallery: string[];
};

export const SERVICES: Service[] = [
  {
    id: "pintura",
    number: "01",
    title: "Pintura Interior & Exterior",
    short: "Acabamentos premium para residências, escritórios e espaços públicos.",
    description:
      "Trabalhamos com tintas de alta gama, preparação rigorosa de superfícies e técnicas que garantem um acabamento perfeito, durável e uniforme. Consulte cores, texturas e efeitos personalizados.",
    bullets: [
      "Pintura de paredes, tetos e rodapés",
      "Tintas ecológicas e de alta durabilidade",
      "Preparação completa: lixado, betumado e isolamento",
      "Atenção aos detalhes em molduras e acabamentos",
    ],
    cover: "/images/painting/painting-6.webp",
    gallery: Array.from({ length: 16 }, (_, i) => `/images/painting/painting-${i + 1}.webp`),
  },
  {
    id: "predial",
    number: "02",
    title: "Pintura Predial — Trabalho em Corda",
    short: "Pintura e impermeabilização de fachadas, telhados e edifícios em altura.",
    description:
      "Equipa certificada em trabalhos verticais com técnica de rappel/corda. Pintura de fachadas, impermeabilização de coberturas e reparação de fissuras com total segurança e sem necessidade de andaimes.",
    bullets: [
      "Técnicos certificados em trabalho em altura",
      "Impermeabilização de telhados e coberturas",
      "Pintura de fachadas e edifícios verticais",
      "Sem custos com andaimes — solução ágil",
    ],
    cover: "/images/rope/rope-3.webp",
    gallery: Array.from({ length: 3 }, (_, i) => `/images/rope/rope-${i + 1}.webp`),
  },
  {
    id: "banheiro",
    number: "03",
    title: "Reforma de Banheiros",
    short: "Banheiros completos, do projeto à entrega — chave-na-mão.",
    description:
      "Coordenamos toda a obra: hidráulica, elétrica, revestimento, louças, mobiliário e acabamentos. Banheiros modernos, funcionais e duráveis, com gestão integral do projeto.",
    bullets: [
      "Projeto e gestão integral chave-na-mão",
      "Hidráulica, elétrica e impermeabilização",
      "Instalação de louças, móveis e box",
      "Revestimentos cerâmicos premium",
    ],
    cover: "/images/bathroom/bathroom-5.webp",
    gallery: Array.from({ length: 7 }, (_, i) => `/images/bathroom/bathroom-${i + 1}.webp`),
  },
  {
    id: "deck",
    number: "04",
    title: "Deck de Madeira",
    short: "Instalação e restauro de decks para piscinas, terraços e jardins.",
    description:
      "Decks em madeira nobre tratada para exterior. Da seleção do material ao envernizamento final, garantimos beleza e resistência ao tempo, sol e humidade da costa portuguesa.",
    bullets: [
      "Madeiras nobres tratadas para exterior",
      "Instalação em piscinas, terraços e jardins",
      "Restauro, lixado e re-envernizamento",
      "Acabamentos resistentes ao clima atlântico",
    ],
    cover: "/images/deck/deck-1.webp",
    gallery: Array.from({ length: 2 }, (_, i) => `/images/deck/deck-${i + 1}.webp`),
  },
  {
    id: "pladur",
    number: "05",
    title: "Aplicação de Pladur",
    short: "Tetos falsos, divisórias e nichos de design em pladur.",
    description:
      "Soluções rápidas e limpas para criar ou redesenhar espaços. Tetos rebaixados, paredes divisórias acústicas, sancas, nichos LED e mobiliário embutido em pladur.",
    bullets: [
      "Tetos rebaixados e sancas com iluminação",
      "Divisórias acústicas e térmicas",
      "Nichos, prateleiras e mobiliário embutido",
      "Acabamento liso pronto para pintura",
    ],
    cover: "/images/pladur/pladur-1.webp",
    gallery: Array.from({ length: 2 }, (_, i) => `/images/pladur/pladur-${i + 1}.webp`),
  },
  {
    id: "ceramico",
    number: "06",
    title: "Revestimento Cerâmico",
    short: "Assentamento de azulejo, porcelanato e pedra natural com precisão milimétrica.",
    description:
      "Aplicação de cerâmica em paredes e pisos com nivelamento técnico, juntas perfeitas e impermeabilização adequada. Trabalhamos com porcelanato, pastilha, pedra natural e mosaico.",
    bullets: [
      "Porcelanato, azulejo, pedra e mosaico",
      "Nivelamento laser e juntas técnicas",
      "Impermeabilização prévia de áreas húmidas",
      "Cortes precisos e acabamentos perfeitos",
    ],
    cover: "/images/ceramic/ceramic-3.webp",
    gallery: Array.from({ length: 4 }, (_, i) => `/images/ceramic/ceramic-${i + 1}.webp`),
  },
  {
    id: "marido",
    number: "07",
    title: "Marido de Aluguer",
    short: "Pequenas reparações e melhorias domésticas, sem dor de cabeça.",
    description:
      "Aquele profissional de confiança para resolver tudo o que precisa em casa: montar móveis, colocar prateleiras, reparar canalização leve, trocar fechaduras, pendurar quadros e muito mais.",
    bullets: [
      "Pequenas reparações domésticas",
      "Montagem de móveis e instalações",
      "Substituição de fechaduras e dobradiças",
      "Atendimento rápido e flexível",
    ],
    cover: "/images/handyman/handyman-2.webp",
    gallery: Array.from({ length: 3 }, (_, i) => `/images/handyman/handyman-${i + 1}.webp`),
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnóstico",
    body:
      "Visita técnica gratuita ao seu espaço. Avaliamos necessidades, materiais e medições com rigor profissional.",
  },
  {
    step: "02",
    title: "Orçamento Transparente",
    body:
      "Proposta detalhada, sem surpresas. Cada material, cada hora, cada acabamento — tudo claro à partida.",
  },
  {
    step: "03",
    title: "Execução",
    body:
      "Equipa especializada, ferramentas profissionais e um planeamento que respeita prazos e a sua rotina.",
  },
  {
    step: "04",
    title: "Entrega & Garantia",
    body:
      "Espaço entregue limpo, revisto e com garantia escrita. O seu acabamento perfeito, à sua hora.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mariana S.",
    role: "Cascais",
    text:
      "Pintaram a minha casa toda em 4 dias e o resultado é impecável. Equipa pontual, limpa e muito profissional.",
  },
  {
    name: "João P.",
    role: "Estoril",
    text:
      "Reforma completa do banheiro entregue antes do prazo. Acabamentos de altíssima qualidade. Recomendo sem hesitar.",
  },
  {
    name: "Sofia R.",
    role: "Lisboa",
    text:
      "Fizeram a impermeabilização do telhado em corda, sem andaimes. Rápido, seguro e a um preço justo.",
  },
  {
    name: "Carlos M.",
    role: "Oeiras",
    text:
      "Instalaram o deck à volta da piscina. Material excelente, ajuste milimétrico e um acabamento de fazer inveja.",
  },
];
