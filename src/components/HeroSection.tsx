'use client';

import React from 'react';
import { getWhatsAppUrl } from '../data/products';
import { Sparkles, ArrowRight, Heart, ShieldCheck, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        paddingTop: '4.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: 'var(--color-bg)',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Decorative Gradient Spheres */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 165, 152, 0.25) 0%, rgba(250, 246, 240, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 109, 81, 0.15) 0%, rgba(250, 246, 240, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Text Content Column */}
          <div style={{ maxWidth: '620px' }} className="animate-fade-in">
            {/* Top Brand Pill */}
            <div
              className="badge badge-terracota"
              style={{
                marginBottom: '1.5rem',
                fontSize: '0.8rem',
                padding: '0.45rem 1rem',
                gap: '0.5rem',
              }}
            >
              <Heart size={14} fill="var(--color-deep)" />
              <span>Alta Crocheteria Artesanal</span>
            </div>

            {/* Main Title Required */}
            <h1
              className="heading-serif"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: 1.12,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                fontWeight: 500,
              }}
            >
              Peças que carregam afeto em cada ponto
            </h1>

            {/* Main Subtitle Required */}
            <p
              style={{
                fontSize: '1.175rem',
                color: 'var(--color-text-muted)',
                marginBottom: '2.5rem',
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              Bolsas e moda em crochê feitas à mão, com modelos exclusivos e encomendas sob medida.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {/* Primary Button Required */}
              <a
                href="#catalogo"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  padding: '1.05rem 2.2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <span>Conheça as peças</span>
                <ArrowRight size={18} />
              </a>

              {/* Secondary WhatsApp CTA */}
              <a
                href={getWhatsAppUrl('Encomenda Personalizada')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-deep)',
                  border: '1.5px solid var(--color-border)',
                  padding: '1.05rem 2rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '1.025rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-deep)';
                  e.currentTarget.style.backgroundColor = 'var(--color-pink-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                }}
              >
                <Sparkles size={18} style={{ color: 'var(--color-primary)' }} />
                <span>Pedir Sob Medida</span>
              </a>
            </div>

            {/* Social Trust Indicators */}
            <div
              style={{
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', color: '#EAB308' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  4.9/5 Avaliações
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                <span>100% Artesanal & Sob Medida</span>
              </div>
            </div>
          </div>

          {/* Visual Grid Gallery Showcase (Inspired by bygalk.com layout) */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                position: 'relative',
              }}
            >
              {/* Main Featured Image Card */}
              <div
                style={{
                  gridColumn: '1 / 2',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '4px solid #FFFFFF',
                  transform: 'rotate(-2deg)',
                  transition: 'var(--transition)',
                }}
                className="animate-float"
              >
                <img
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
                  alt="Bolsa Dumpling Crochê Gisa"
                  style={{ width: '100%', height: '340px', objectFit: 'cover' }}
                />
              </div>

              {/* Secondary Fashion Image Card */}
              <div
                style={{
                  gridColumn: '2 / 3',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '4px solid #FFFFFF',
                  marginTop: '2.5rem',
                  transform: 'rotate(2deg)',
                  transition: 'var(--transition)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
                  alt="Moda em Crochê Terracota"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Floating Highlight Sticker */}
            <div
              style={{
                position: 'absolute',
                bottom: '-15px',
                left: '20%',
                backgroundColor: 'var(--color-deep)',
                color: '#FFFFFF',
                padding: '0.85rem 1.35rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                fontSize: '0.875rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                zIndex: 20,
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>✨</span>
              <div>
                <p style={{ margin: 0, leading: 1.1 }}>Acabamento Impecável</p>
                <p style={{ margin: 0, fontSize: '0.725rem', opacity: 0.8, fontWeight: 400 }}>Fios selecionados à mão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
