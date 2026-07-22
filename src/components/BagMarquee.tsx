'use client';

import React from 'react';
import { PRODUCTS } from '../data/products';

const bagImages = PRODUCTS.filter((product) => product.category === 'bolsas');
const marqueeItems = [...bagImages, ...bagImages, ...bagImages, ...bagImages];

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
          padding: 1rem 0 1.15rem;
          background: #fff;
          border-bottom: 1px solid var(--color-border-light);
        }

        .bag-marquee-track {
          width: max-content;
          display: flex;
          gap: 0.9rem;
          padding: 0 0.9rem;
          animation: bagMarquee 34s linear infinite;
          will-change: transform;
        }

        .bag-marquee:hover .bag-marquee-track {
          animation-play-state: paused;
        }

        .bag-marquee-item {
          width: 112px;
          height: 138px;
          flex: 0 0 auto;
          overflow: hidden;
          border-radius: 10px;
          background: var(--color-pink-light);
          box-shadow: 0 4px 14px rgba(68, 38, 32, 0.08);
          transition: transform 180ms ease;
        }

        .bag-marquee-item:hover {
          transform: translateY(-3px);
        }

        .bag-marquee-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        @keyframes bagMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-25% - 0.25rem)); }
        }

        @media (max-width: 900px) {
          .bag-marquee {
            padding: 0.58rem 0 0.72rem;
          }

          .bag-marquee-track {
            gap: 0.52rem;
            padding: 0 0.52rem;
            animation-duration: 28s;
          }

          .bag-marquee-item {
            width: 76px;
            height: 94px;
            border-radius: 7px;
            box-shadow: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bag-marquee-track {
            max-width: 100vw;
            overflow-x: auto;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};
