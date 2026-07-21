import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gisa Crochê | Bolsas & Moda em Crochê Sob Medida',
  description: 'Peças que carregam afeto em cada ponto. Bolsas e moda em crochê feitas à mão, com modelos exclusivos e encomendas sob medida.',
  keywords: ['crochê', 'bolsas de crochê', 'moda em crochê', 'artesanal', 'feito à mão', 'sob medida', 'Gisa Crochê'],
  openGraph: {
    title: 'Gisa Crochê | Peças que carregam afeto em cada ponto',
    description: 'Bolsas e moda em crochê feitas à mão, com modelos exclusivos e encomendas sob medida.',
    url: 'https://gisacroche.vercel.app',
    siteName: 'Gisa Crochê',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
