import { SERVICES } from "./site";

export interface ServiceSEO {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  longDescription: string;
  keywords: string;
}

export const SERVICE_SEO: ServiceSEO[] = [
  {
    slug: "pintura-interior-exterior",
    title: "Pintura Interior e Exterior em Cascais e Lisboa | Skypaint",
    metaDescription:
      "Serviço profissional de pintura interior e exterior em Cascais, Estoril, Oeiras e Lisboa. Tintas ecológicas de alta durabilidade, preparação completa de superfícies e acabamentos premium. Orçamento gratuito.",
    h1: "Pintura Interior e Exterior em Cascais e Lisboa",
    longDescription:
      "A Skypaint oferece serviços de pintura interior e exterior para residências, escritórios, espaços comerciais e edifícios públicos em toda a região de Cascais e Lisboa. Trabalhamos com tintas de alta gama das melhores marcas do mercado, garantindo durabilidade extrema e acabamentos impecáveis. A nossa equipa realiza preparação rigorosa de superfícies — incluindo lixado, betumado, isolamento de fissuras e aplicação de primário — antes de cada demão. Utilizamos tintas ecológicas de baixo VOC que protegem a saúde da sua família e o meio ambiente. Seja uma moradia em Cascais, um apartamento no Estoril ou um escritório em Lisboa, a Skypaint entrega o acabamento perfeito, sempre dentro do prazo combinado.",
    keywords:
      "pintura interior cascais, pintura exterior cascais, pintor cascais, pintor estoril, pintura residencial lisboa, pintura escritório oeiras, pintura de paredes cascais",
  },
  {
    slug: "pintura-predial-rappel",
    title: "Pintura Predial em Corda (Rappel) em Cascais | Skypaint",
    metaDescription:
      "Pintura predial e impermeabilização de fachadas em Cascais e Lisboa com técnica de rappel. Sem andaimes, mais rápido e económico. Equipa certificada em trabalho em altura.",
    h1: "Pintura Predial em Corda — Trabalho em Rappel",
    longDescription:
      "A Skypaint é especialista em pintura predial utilizando técnica de rappel (trabalho em corda) em Cascais, Estoril, Oeiras, Sintra e toda a região de Lisboa. Esta técnica elimina a necessidade de andaimes dispendiosos, tornando o processo mais rápido, mais económico e com menos perturbação para os moradores do edifício. A nossa equipa é certificada em trabalhos verticais e utiliza equipamento de segurança homologado. Realizamos pintura de fachadas, impermeabilização de telhados e coberturas, reparação de fissuras estruturais e tratamento anti-humidade. Ideal para edifícios de apartamentos, condomínios e edifícios comerciais onde o acesso convencional é difícil ou caro.",
    keywords:
      "pintura predial cascais, pintura fachada cascais, rappel pintura lisboa, impermeabilização telhado cascais, pintura edifício corda, trabalho em altura cascais",
  },
  {
    slug: "reforma-banheiro",
    title: "Reforma de Banheiro em Cascais e Lisboa | Skypaint",
    metaDescription:
      "Reforma completa de banheiros chave-na-mão em Cascais e Lisboa. Hidráulica, elétrica, revestimentos, louças e acabamentos premium. Do projeto à entrega.",
    h1: "Reforma Completa de Banheiros em Cascais e Lisboa",
    longDescription:
      "A Skypaint coordena reformas completas de banheiros em Cascais, Estoril, Oeiras, Sintra e toda a região de Lisboa — do projeto inicial à entrega final, tudo chave-na-mão. O nosso serviço inclui demolição controlada, nova hidráulica e elétrica, impermeabilização profissional, assentamento de revestimentos cerâmicos ou em pedra natural, instalação de louças sanitárias, móveis de casa de banho, box de duche e espelhos. Trabalhamos com materiais premium de marcas reconhecidas e garantimos acabamentos perfeitos com atenção ao último detalhe. Cada projeto inclui gestão integral — o cliente não precisa de coordenar diferentes profissionais. Banheiros modernos, funcionais e duráveis, entregues dentro do prazo e orçamento acordados.",
    keywords:
      "reforma banheiro cascais, remodelação casa de banho cascais, reforma banheiro lisboa, banheiro chave na mão estoril, casa de banho moderna oeiras",
  },
  {
    slug: "deck-madeira",
    title: "Instalação de Deck de Madeira em Cascais | Skypaint",
    metaDescription:
      "Instalação e restauro de decks de madeira para piscinas, terraços e jardins em Cascais e Lisboa. Madeiras nobres tratadas para o clima atlântico português.",
    h1: "Deck de Madeira para Piscinas, Terraços e Jardins",
    longDescription:
      "A Skypaint instala e restaura decks de madeira em Cascais, Estoril, Oeiras e toda a região de Lisboa. Utilizamos madeiras nobres tratadas para exterior — como ipê, cumaru e teca — que resistem ao sol intenso, à humidade e ao sal do clima atlântico português. O nosso serviço abrange desde a preparação do terreno e nivelamento até à instalação com sistemas de fixação invisível, acabamento com verniz ou óleo protetor e manutenção periódica. Ideal para áreas de piscina, terraços, varandas, jardins e áreas de lazer. Também realizamos restauro de decks existentes: lixado completo, tratamento anti-fungos e re-envernizamento para devolver o brilho original à madeira.",
    keywords:
      "deck madeira cascais, deck piscina cascais, deck terraço lisboa, instalação deck estoril, restauro deck madeira oeiras, deck exterior cascais",
  },
  {
    slug: "pladur",
    title: "Aplicação de Pladur em Cascais e Lisboa | Skypaint",
    metaDescription:
      "Aplicação de pladur em Cascais e Lisboa. Tetos falsos, divisórias acústicas, sancas com iluminação LED e nichos de design. Acabamento pronto para pintura.",
    h1: "Aplicação de Pladur — Tetos Falsos e Divisórias",
    longDescription:
      "A Skypaint é especialista em aplicação de pladur (gesso cartonado) em Cascais, Estoril, Oeiras, Sintra e Lisboa. Criamos soluções rápidas, limpas e versáteis para transformar ou redesenhar qualquer espaço interior. Os nossos serviços incluem: tetos falsos rebaixados com possibilidade de integração de iluminação LED, sancas decorativas, divisórias acústicas e térmicas para separar ambientes, nichos e prateleiras embutidas, revestimento de paredes para isolamento e mobiliário integrado. Todo o trabalho é entregue com acabamento liso de nível 5 — pronto para pintura — garantindo superfícies perfeitas sem necessidade de trabalho adicional. Ideal para remodelações residenciais, escritórios e espaços comerciais.",
    keywords:
      "pladur cascais, teto falso cascais, divisória pladur lisboa, sanca pladur estoril, gesso cartonado oeiras, pladur teto rebaixado cascais",
  },
  {
    slug: "revestimento-ceramico",
    title: "Revestimento Cerâmico em Cascais e Lisboa | Skypaint",
    metaDescription:
      "Assentamento de azulejo, porcelanato e pedra natural em Cascais e Lisboa. Nivelamento laser, juntas técnicas e impermeabilização. Precisão milimétrica.",
    h1: "Revestimento Cerâmico — Azulejo, Porcelanato e Pedra Natural",
    longDescription:
      "A Skypaint realiza aplicação profissional de revestimentos cerâmicos em Cascais, Estoril, Oeiras e toda a região de Lisboa. Trabalhamos com porcelanato de grande formato, azulejo tradicional português, pedra natural (mármore, granito, travertino), pastilha e mosaico decorativo. A nossa técnica inclui nivelamento por laser para garantir planimetria perfeita, impermeabilização prévia de áreas húmidas (banheiros, cozinhas, varandas), execução de juntas técnicas com materiais elásticos e cortes de precisão com serra diamantada. O resultado são superfícies duráveis, higiénicas e visualmente impecáveis. Aplicamos em pisos, paredes, bancadas, piscinas e fachadas ventiladas.",
    keywords:
      "revestimento cerâmico cascais, azulejo cascais, porcelanato cascais, pedra natural lisboa, ladrilhador estoril, cerâmica banheiro oeiras",
  },
  {
    slug: "marido-aluguer",
    title: "Marido de Aluguer em Cascais e Lisboa | Skypaint",
    metaDescription:
      "Serviço de marido de aluguer em Cascais e Lisboa. Pequenas reparações, montagem de móveis, canalização leve, fechaduras e melhorias domésticas. Resposta rápida.",
    h1: "Marido de Aluguer — Reparações e Melhorias Domésticas",
    longDescription:
      "O serviço de Marido de Aluguer da Skypaint é a solução para todas as pequenas reparações e melhorias que a sua casa em Cascais, Estoril, Oeiras ou Lisboa precisa. A nossa equipa resolve rapidamente: montagem de móveis IKEA e de outras marcas, instalação de prateleiras, estantes e quadros, reparação de canalização leve (torneiras, autoclismos, sifões), substituição de fechaduras e dobradiças, reparação de portas e janelas, instalação de cortinas e estores, pequenas reparações elétricas (tomadas, interruptores, lâmpadas) e pintura de retoques. Atendimento rápido, flexível e com profissional de confiança. Um único contacto resolve todos os problemas domésticos.",
    keywords:
      "marido aluguer cascais, marido aluguer lisboa, pequenas reparações cascais, montagem móveis estoril, reparações domésticas oeiras, handyman cascais",
  },
];

/** Map service.id → slug for routing */
export const SERVICE_SLUG_MAP: Record<string, string> = {};
SERVICES.forEach((s, i) => {
  SERVICE_SLUG_MAP[s.id] = SERVICE_SEO[i].slug;
});
