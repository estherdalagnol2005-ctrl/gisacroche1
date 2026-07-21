'use client';

import React from 'react';
import { getWhatsAppUrl } from '../data/products';
import { Heart, Sparkles, Award, Scissors } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Artisan Image Collage */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '6px solid var(--color-surface)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80"
                alt="Sobre a Gisa Crochê - Processo Artesanal"
                style={{ width: '100%', height: '440px', objectFit: 'cover' }}
              />
            </div>

            {/* Quote Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-15px',
                backgroundColor: 'var(--color-surface)',
                padding: '1.25rem 1.75rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)',
                maxWidth: '280px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--color-deep)',
                  marginBottom: '0.4rem',
                }}
              >
                "O crochê é a minha forma de traduzir afeto e sofisticação em nós e tramas únicos."
              </p>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                — Gisa Dalagnol
              </p>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div>
            <span className="badge badge-terracota" style={{ marginBottom: '1rem' }}>
              Nossa História & Essência
            </span>
            <h2
              className="heading-serif"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                lineHeight: 1.15,
              }}
            >
              Sobre a Gisa Crochê
            </h2>

            <p style={{ fontSize: '1.075rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              A <strong>Gisa Crochê</strong> nasceu da paixão em transformar fios nobres em peças exclusivas cheias de estilo e personalidade. Cada modelo é desenhado e confeccionado manualmente, unindo técnicas tradicionais de crocheteria com um design contemporâneo, elegante e atemporal.
            </p>

            <p style={{ fontSize: '1.025rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Acreditamos na beleza do consumo consciente e na exclusividade de ter uma peça sob medida criada especialmente para você. Das bolsas com design orgânico aos croppeds e vestidos rendados, colocamos intenção e cuidado em cada detalhe.
            </p>

            {/* Brand Values Checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Scissors size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  100% Feito à Mão
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Sparkles size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Fios Nobres & Leves
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Award size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Modelos Autorais
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Heart size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Atendimento Afetivo
                </span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Conhecer mais sobre o trabalho da Gisa')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '0.95rem 2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '1rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            >
              <span>Conversar com a Gisa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
