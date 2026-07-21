export type Course = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  platform: string;
  url: string;
  image: string;
  highlights: string[];
};

export const courses: Course[] = [
  {
    id: 'bolsa-barbie',
    title: 'Bolsa Barbie',
    eyebrow: 'Curso online de crochê',
    description:
      'Aprenda a confeccionar a Bolsa Barbie com uma aula detalhada, acompanhando cada etapa da peça com a experiência de quem trabalha com crochê há mais de 10 anos.',
    platform: 'Hotmart',
    url: 'https://hotmart.com/pt-br/marketplace/produtos/bolsa-de-croche-rosa/O84531432A',
    image: '/images/course-bolsa-barbie.svg',
    highlights: [
      'Passo a passo completo',
      'Acesso vitalício ao curso',
      '3 meses de suporte pelo WhatsApp',
    ],
  },
];
