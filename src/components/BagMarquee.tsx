'use client';

import React from 'react';
import { PRODUCTS } from '../data/products';

const bagImages = PRODUCTS.filter((product) => product.category === 'bolsas');
const marqueeItems = [...bagImages, ...bagImages, ...bagImages];

export const BagMarquee: React.FC = () => {
  return (
    <section id="inspiracoes" className="bag-marquee" aria-label="Inspirações de bolsas Gisa Crochê">
      <div className="bag-marquee-track">
        {marqueeItems.map((product, index) => (
          <a
            href="#catalogo"
            className="bag-marquee-item"
            key={`${product.id}-${index}`}
            aria-label={`Ver ${product.name} no catálogo`}
          >
            <img src={product.image} alt={product.name} loading="lazy" />
          </a>
        ))}
      </div>

      <style jsx>{`
        .bag-marquee {
          width: 100%;
          overflow: hidden;
          padding: 1.2rem 0 1.35rem;
          background: var(--color-surface);
          border-top: 1px solid var(--color-border-light);
          border-bottom: 1px solid var(--color-border-light);
        }

        .bag-marquee-track {
          display: flex;
          width: max-content;
          gap: 1rem;
          padding: 0 1rem;
          animation: bagMarquee 32s linear infinite;
          will-change: transform;
        }

        .bag-marquee:hover .bag-marquee-track {
          animation-play-state: paused;
        }

        .bag-marquee-item {
          width: 118px;
          height: 145px;
          flex: 0 0 auto;
          overflow: hidden;
          border-radius: 12px;
          background: var(--color-pink-light);
          box-shadow: 0 6px 18px rgba(68, 38, 32, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .bag-marquee-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(68, 38, 32, 0.14);
        }

        .bag-marquee-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes bagMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-33.333% - 0.34rem));
          }
        }

        @media (max-width: 700px) {
          .bag-marquee {
            padding: 0.9rem 0 1rem;
          }

          .bag-marquee-track {
            gap: 0.7rem;
            padding: 0 0.7rem;
            animation-duration: 25s;
          }

          .bag-marquee-item {
            width: 92px;
            height: 116px;
            border-radius: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bag-marquee-track {
            animation: none;
            overflow-x: auto;
            max-width: 100vw;
          }
        }
      `}</style>
    </section>
  );
};
