'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'bolsas',
      title: 'Bolsas em Crochê',
      subtitle: 'Modelos Dumpling, Sacolas & Clutches',
      count: '8 modelos artesanais',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      badge: 'Destaque',
    },
    {
      id: 'moda',
      title: 'Moda em Crochê',
      subtitle: 'Croppeds, Blusas & Vestidos',
      count: 'Caimento fluido e leve',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      badge: 'Exclusivo',
    },
    {
      id: 'sob-medida',
      title: 'Sob Medida',
      subtitle: 'Peças personalizadas para você',
      count: 'Escolha cores e tamanhos',
      image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
      badge: 'Personalizável',
    },
  ];

  const handleCategoryClick = (id: string) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    }
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="categorias"
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto 3.5rem auto',
          }}
        >
          <span className="badge badge-terracota" style={{ marginBottom: '0.85rem' }}>
            Explorar Universos
          </span>
          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}
          >
            Categorias de Destaque
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            Navegue por nossas coleções criadas com fios selecionados, acabamento impecável e alta sensibilidade artesanal.
          </p>
        </div>

        {/* Categories Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                height: '420px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(44, 34, 30, 0.85) 0%, rgba(44, 34, 30, 0.2) 60%, rgba(0,0,0,0) 100%)',
                }}
              />

              {/* Top Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                }}
              >
                <span className="badge badge-creme" style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}>
                  {cat.badge}
                </span>
              </div>

              {/* Card Content Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                  color: '#FFFFFF',
                }}
              >
                <p style={{ fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.85, marginBottom: '0.4rem' }}>
                  {cat.count}
                </p>
                <h3
                  className="heading-serif"
                  style={{
                    fontSize: '1.85rem',
                    fontWeight: 500,
                    marginBottom: '0.35rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{cat.title}</span>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </div>
                </h3>
                <p style={{ fontSize: '0.95rem', opacity: 0.9, fontWeight: 300 }}>
                  {cat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
