'use client';

import React from 'react';
import { getWhatsAppUrl } from '../data/products';
import { Palette, Sparkles, MessageCircle, Ruler, HeartHandshake } from 'lucide-react';

export const CustomOrdersSection: React.FC = () => {
  const steps = [
    {
      icon: <Palette size={28} style={{ color: 'var(--color-primary)' }} />,
      step: '01',
      title: 'Escolha a Referência & Cores',
      description: 'Envie uma foto, modelo do nosso catálogo ou uma ideia própria com sua cartela de cores favorita.',
    },
    {
      icon: <Ruler size={28} style={{ color: 'var(--color-primary)' }} />,
      step: '02',
      title: 'Ajuste de Tamanho & Forro',
      description: 'Definimos juntas o tamanho ideal para o seu corpo ou as dimensões perfeitas para sua bolsa.',
    },
    {
      icon: <HeartHandshake size={28} style={{ color: 'var(--color-primary)' }} />,
      step: '03',
      title: 'Orçamento & Fila de Produção',
      description: 'Combinamos os prazos de confecção e enviamos o orçamento detalhado diretamente via WhatsApp.',
    },
    {
      icon: <Sparkles size={28} style={{ color: 'var(--color-primary)' }} />,
      step: '04',
      title: 'Confecção Artesanal com Amor',
      description: 'Cada ponto é produzido manualmente com os melhores fios, até ser embalado e entregue na sua casa.',
    },
  ];

  return (
    <section
      id="sob-medida"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface-soft)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Heading and Info */}
          <div>
            <span className="badge badge-terracota" style={{ marginBottom: '1rem' }}>
              Ateliê de Encomendas
            </span>
            <h2
              className="heading-serif"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                color: 'var(--color-text)',
                marginBottom: '1.25rem',
                lineHeight: 1.15,
              }}
            >
              Encomendas Personalizadas & Peças Sob Medida
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                lineHeight: 1.65,
              }}
            >
              Tem um modelo em mente ou gostaria de adaptar as cores e dimensões de uma bolsa? No ateliê Gisa Crochê, produzimos a peça dos seus sonhos exclusivamente para você.
            </p>

            <a
              href={getWhatsAppUrl('Encomenda Sob Medida Especial')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--color-deep)',
                color: '#FFFFFF',
                padding: '1rem 2.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '1.025rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-deep-hover)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-deep)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle size={20} />
              <span>Iniciar Projeto Sob Medida</span>
            </a>
          </div>

          {/* Right Column: Step by Step Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {steps.map((item) => (
              <div
                key={item.step}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-pink-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.85rem',
                      fontWeight: 700,
                      color: 'var(--color-pink)',
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="heading-serif"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
