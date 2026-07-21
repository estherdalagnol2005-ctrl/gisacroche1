export interface Product {
  id: string;
  name: string;
  category: 'bolsas' | 'moda' | 'sob-medida';
  categoryLabel: string;
  price: string;
  description: string;
  details: string[];
  image: string;
  badge?: string;
  featured?: boolean;
}

export const WHATSAPP_NUMBER = '554884647213';
export const WHATSAPP_BASE_URL = 'https://wa.me/';
export const INSTAGRAM_URL = 'https://www.instagram.com/gisacrocheoficial';
export const YOUTUBE_URL = 'https://www.youtube.com/@gisacroche';

export function getWhatsAppUrl(productName?: string): string {
  const message = productName
    ? `Olá! Gostaria de saber mais sobre a peça *${productName}* e consultar informações para encomendar.`
    : `Olá! Gostaria de tirar dúvidas e fazer uma encomenda personalizada em crochê.`;
  return `${WHATSAPP_BASE_URL}${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CATEGORIES = [
  {
    id: 'todos',
    name: 'Todas as Peças',
    description: 'Explore todo o nosso acervo artesanal de bolsas, moda e encomendas únicas.',
  },
  {
    id: 'bolsas',
    name: 'Bolsas em Crochê',
    description: 'Bolsas estruturadas, modelos dumpling, sacolas e clutches com design moderno.',
  },
  {
    id: 'moda',
    name: 'Moda em Crochê',
    description: 'Croppeds, vestidos, cardigãs e tops tecidos com fios nobres e acabamento impecável.',
  },
  {
    id: 'sob-medida',
    name: 'Sob Medida',
    description: 'Desenvolvimento de peças exclusivas na cor, tamanho e modelo que você desejar.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'bolsa-dumpling-gisa',
    name: 'Bolsa Dumpling Gisa',
    category: 'bolsas',
    categoryLabel: 'Bolsas em Crochê',
    price: 'Sob consulta',
    description: 'Formato orgânico inspirado nos melhores designs artesanais mundiais. Super macia, leve e com fechamento seguro.',
    details: ['Fio de algodão premium', 'Alça trançada resistente', 'Forro interno opcional', 'Várias opções de cores'],
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Desejada',
    featured: true,
  },
  {
    id: 'bolsa-donut-rose',
    name: 'Bolsa Donut Rosé',
    category: 'bolsas',
    categoryLabel: 'Bolsas em Crochê',
    price: 'Sob consulta',
    description: 'Design circular contemporâneo em tom rosa terroso. Um acessório versátil que transforma qualquer look.',
    details: ['Estrutura firme artesanal', 'Argolas metálicas de alto padrão', 'Espaço ideal para essenciais'],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    badge: 'Edição Limitada',
    featured: true,
  },
  {
    id: 'cropped-flores-terracota',
    name: 'Cropped Flores Terracota',
    category: 'moda',
    categoryLabel: 'Moda em Crochê',
    price: 'Sob consulta',
    description: 'Blusa artesanal com relevo floral nas tonalidades terracota e creme. Caimento delicado e fresco.',
    details: ['Fio 100% algodão respirável', 'Pontos rendados manuais', 'Ajuste personalizado no corpo'],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    badge: 'Novo Modelo',
    featured: true,
  },
  {
    id: 'vestido-granny-square-bordo',
    name: 'Vestido Granny Square Bordô',
    category: 'moda',
    categoryLabel: 'Moda em Crochê',
    price: 'Sob consulta',
    description: 'Vestido midi em crochê com a clássica trama de quadrados de vovó reimaginada com sofisticação.',
    details: ['Peça 100% autoral', 'Harmonia em tons bordô e creme', 'Tecimento sob encomenda sob medida'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    badge: 'Exclusivo',
    featured: true,
  },
  {
    id: 'bolsa-shopper-twisty',
    name: 'Bolsa Shopper Twisty',
    category: 'bolsas',
    categoryLabel: 'Bolsas em Crochê',
    price: 'Sob consulta',
    description: 'Espaçosa, elegante e durável. Perfeita para quem busca uma bolsa espaçosa sem perder o toque feito à mão.',
    details: ['Trama torcida reforçada', 'Capacidade para livros e tablet', 'Cores sob consulta'],
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'conjunto-top-saia-creme',
    name: 'Conjunto Top & Saia Creme',
    category: 'moda',
    categoryLabel: 'Moda em Crochê',
    price: 'Sob consulta',
    description: 'Conjunto boho-chic artesanal para ocasiões especiais. Textura fluida e acabamento elegante.',
    details: ['Design feminino e moderno', 'Elasticidade natural do ponto', 'Sob medida para seu biotipo'],
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80',
    badge: 'Tendência',
    featured: false,
  },
  {
    id: 'bolsa-clutch-noite-bordo',
    name: 'Bolsa Clutch Noite Bordô',
    category: 'bolsas',
    categoryLabel: 'Bolsas em Crochê',
    price: 'Sob consulta',
    description: 'Bolsa de mão artesanal em tom bordô profundo. Perfeita para eventos, jantares e ocasiões especiais.',
    details: ['Fecho magnético de alta qualidade', 'Toque aveludado sofisticado', 'Acompanha corrente removível'],
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'encomenda-personalizada-sob-medida',
    name: 'Peça Exclusiva Sob Medida',
    category: 'sob-medida',
    categoryLabel: 'Sob Medida',
    price: 'Sob consulta',
    description: 'Tem uma referência ou ideia especial? Criamos qualquer modelo de bolsa ou roupa do zero com suas preferências.',
    details: ['Escolha de paleta e fios', 'Tamanho adaptado perfeitamente', 'Acompanhamento do processo via WhatsApp'],
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    badge: 'Personalizado',
    featured: true,
  },
];

export const FAQS = [
  {
    question: 'Como faço para encomendar uma peça?',
    answer: 'É muito simples! Basta clicar no botão "Encomendar" em qualquer peça do catálogo ou no botão do WhatsApp. Você será direcionada ao nosso atendimento onde combinaremos a cor, tamanho e todos os detalhes da sua encomenda.',
  },
  {
    question: 'Qual é o prazo de confecção das peças?',
    answer: 'Como cada peça é 100% feita à mão com carinho e precisão, o tempo médio de produção varia entre 5 a 15 dias úteis, dependendo da complexidade do modelo e da nossa fila de encomendas.',
  },
  {
    question: 'Vocês enviam para todo o Brasil?',
    answer: 'Sim! Enviamos para todo o território nacional através dos Correios (SEDEX ou PAC) e transportadoras. Calculamos o valor e prazo de envio diretamente no atendimento.',
  },
  {
    question: 'Posso personalizar as cores e os tamanhos?',
    answer: 'Com certeza! Essa é a magia do feito à mão. Você pode alterar a cartela de cores, solicitar ajustes de alça, tamanho e forro em praticamente todos os nossos modelos.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos Pix (com desconto especial de encomenda), cartões de crédito e boleto bancário no momento de confirmar o seu pedido.',
  },
];
