'use client';

import React from 'react';
import { BookOpen, Clock3, Heart, Scissors } from 'lucide-react';

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
                alt="Sobre a Gisa Crochê e seu processo artesanal"
                style={{ width: '100%', height: '440px', objectFit: 'cover' }}
              />
            </div>

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
                “Amo o que faço e quero ensinar cada detalhe que aprendi ao longo desses anos.”
              </p>
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                }}
              >
                — Giselle, Gisa Crochê
              </p>
            </div>
          </div>

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

            <p
              style={{
                fontSize: '1.075rem',
                color: 'var(--color-text-muted)',
                marginBottom: '1.25rem',
                lineHeight: 1.7,
              }}
            >
              Meu nome é <strong>Giselle</strong> e sou a artesã e professora por trás do Ateliê Gisa Crochê.
              Faço crochê há mais de 10 anos e amo transformar fios em peças únicas, produzidas à mão
              com cuidado, criatividade e personalidade.
            </p>

            <p
              style={{
                fontSize: '1.025rem',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                lineHeight: 1.7,
              }}
            >
              Depois de anos aperfeiçoando técnicas, criando encomendas e compartilhando conteúdos,
              decidi transformar esse conhecimento em aulas completas. Ensino cada etapa com calma e
              detalhes para que outras pessoas também possam criar suas próprias peças e descobrir novas
              possibilidades com o crochê.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock3 size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Mais de 10 anos de experiência
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Scissors size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Peças feitas à mão
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <BookOpen size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Cursos passo a passo
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Heart size={20} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  Encomendas personalizadas
                </span>
              </div>
            </div>

            <a
              href="#cursos"
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
              <BookOpen size={18} />
              <span>Conhecer os cursos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
