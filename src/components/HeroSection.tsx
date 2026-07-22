'use client';

import React from 'react';
import { ArrowRight, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/products';

const heroImage =
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1400&q=88';
const secondaryImage =
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=86';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="desktop-hero container">
        <div className="desktop-copy animate-fade-in">
          <span className="hero-badge">
            <Heart size={14} fill="currentColor" /> Alta crocheteria artesanal
          </span>

          <h1 className="heading-serif">Peças que carregam afeto em cada ponto</h1>
          <p className="hero-description">
            Bolsas e moda em crochê feitas à mão, com modelos exclusivos e encomendas sob medida.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#catalogo">
              Conheça as peças <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href={getWhatsAppUrl('Encomenda Personalizada')} target="_blank" rel="noopener noreferrer">
              <Sparkles size={17} /> Pedir sob medida
            </a>
          </div>

          <div className="desktop-trust">
            <span><strong>10+ anos</strong> de experiência</span>
            <span><ShieldCheck size={17} /> Peças artesanais e personalizáveis</span>
          </div>
        </div>

        <div className="desktop-gallery">
          <div className="gallery-card gallery-main animate-float">
            <img src={heroImage} alt="Bolsa artesanal em destaque" />
          </div>
          <div className="gallery-card gallery-secondary">
            <img src={secondaryImage} alt="Moda artesanal em crochê" />
          </div>
          <div className="gallery-sticker">
            <span>✦</span>
            <div>
              <strong>Feito à mão</strong>
              <small>com cuidado em cada detalhe</small>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-hero">
        <img className="mobile-hero-image" src={heroImage} alt="Peças artesanais da Gisa Crochê" />
        <div className="mobile-hero-overlay" />
        <div className="mobile-hero-label">Coleção autoral</div>
        <div className="mobile-hero-copy">
          <p>Feito à mão em Santa Catarina</p>
          <h1 className="heading-serif">Peças únicas, ponto por ponto</h1>
          <a href="#catalogo">Ver catálogo <ArrowRight size={16} /></a>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          background: var(--color-bg);
        }

        .desktop-hero {
          position: relative;
          z-index: 1;
          min-height: 650px;
          padding-top: 4.5rem;
          padding-bottom: 5.5rem;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.92fr);
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: center;
        }

        .desktop-hero::before,
        .desktop-hero::after {
          content: '';
          position: absolute;
          z-index: -1;
          border-radius: 50%;
          pointer-events: none;
        }

        .desktop-hero::before {
          width: 480px;
          height: 480px;
          top: -170px;
          right: -130px;
          background: radial-gradient(circle, rgba(232, 165, 152, 0.25), transparent 68%);
        }

        .desktop-hero::after {
          width: 500px;
          height: 500px;
          bottom: -260px;
          left: -180px;
          background: radial-gradient(circle, rgba(200, 109, 81, 0.15), transparent 68%);
        }

        .desktop-copy {
          max-width: 620px;
        }

        .hero-badge {
          width: fit-content;
          margin-bottom: 1.4rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.42rem 0.9rem;
          border-radius: var(--radius-full);
          background: var(--color-pink-light);
          color: var(--color-deep);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.055em;
          text-transform: uppercase;
        }

        .desktop-copy h1 {
          max-width: 600px;
          margin-bottom: 1.35rem;
          color: var(--color-text);
          font-size: clamp(3rem, 5.2vw, 4.35rem);
          font-weight: 500;
          line-height: 1.04;
        }

        .hero-description {
          max-width: 560px;
          margin-bottom: 2.25rem;
          color: var(--color-text-muted);
          font-size: 1.08rem;
          line-height: 1.7;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
        }

        .primary-action,
        .secondary-action {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 0.9rem 1.65rem;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          transition: transform 180ms ease, background 180ms ease, border 180ms ease;
        }

        .primary-action {
          background: var(--color-primary);
          color: #fff;
          box-shadow: var(--shadow-md);
        }

        .primary-action:hover {
          background: var(--color-primary-hover);
          transform: translateY(-2px);
        }

        .secondary-action {
          background: #fff;
          color: var(--color-deep);
          border: 1px solid var(--color-border);
        }

        .secondary-action:hover {
          background: var(--color-pink-light);
          border-color: var(--color-primary);
        }

        .desktop-trust {
          margin-top: 3rem;
          padding-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.4rem;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-size: 0.82rem;
        }

        .desktop-trust span {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .desktop-trust strong {
          color: var(--color-text);
        }

        .desktop-gallery {
          position: relative;
          min-height: 410px;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 1rem;
          align-items: center;
        }

        .gallery-card {
          overflow: hidden;
          border: 4px solid #fff;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-main {
          height: 370px;
          transform: rotate(-1.7deg);
        }

        .gallery-secondary {
          height: 315px;
          margin-top: 2.6rem;
          transform: rotate(1.7deg);
        }

        .gallery-sticker {
          position: absolute;
          left: 16%;
          bottom: -10px;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          background: var(--color-deep);
          color: #fff;
          box-shadow: var(--shadow-lg);
        }

        .gallery-sticker div {
          display: grid;
        }

        .gallery-sticker strong {
          font-size: 0.78rem;
        }

        .gallery-sticker small {
          opacity: 0.76;
          font-size: 0.64rem;
        }

        .mobile-hero {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-hero {
            display: none;
          }

          .mobile-hero {
            position: relative;
            display: block;
            width: 100%;
            height: clamp(430px, 67svh, 610px);
            min-height: 430px;
            overflow: hidden;
            background: #d9c8ba;
          }

          .mobile-hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 54%;
            transform: scale(1.015);
          }

          .mobile-hero-overlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(to bottom, rgba(35, 22, 19, 0.03) 30%, rgba(35, 22, 19, 0.7) 100%),
              linear-gradient(to right, rgba(35, 22, 19, 0.18), transparent 62%);
          }

          .mobile-hero-label {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.38rem 0.65rem;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.86);
            color: var(--color-deep);
            backdrop-filter: blur(8px);
            font-size: 0.62rem;
            font-weight: 800;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }

          .mobile-hero-copy {
            position: absolute;
            left: 1rem;
            right: 1rem;
            bottom: 1.15rem;
            color: #fff;
          }

          .mobile-hero-copy p {
            margin-bottom: 0.35rem;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .mobile-hero-copy h1 {
            max-width: 300px;
            margin-bottom: 0.9rem;
            font-size: clamp(2.25rem, 11vw, 3.2rem);
            font-weight: 600;
            line-height: 0.98;
            text-shadow: 0 2px 18px rgba(0, 0, 0, 0.24);
          }

          .mobile-hero-copy a {
            width: fit-content;
            min-height: 42px;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.68rem 1rem;
            border-radius: 999px;
            background: #fff;
            color: var(--color-deep);
            font-size: 0.78rem;
            font-weight: 800;
          }
        }

        @media (max-width: 390px) {
          .mobile-hero {
            height: 58svh;
            min-height: 410px;
          }

          .mobile-hero-copy h1 {
            max-width: 270px;
          }
        }
      `}</style>
    </section>
  );
};
