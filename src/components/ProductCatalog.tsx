'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, getWhatsAppUrl, Product } from '../data/products';
import { MessageCircle, Eye, Sparkles, CheckCircle2, X } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory = 'todos',
  onCategoryChange,
}) => {
  const [activeTab, setActiveTab] = useState(selectedCategory);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onCategoryChange) {
      onCategoryChange(tabId);
    }
  };

  const filteredProducts = activeTab === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="catalogo"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto 3rem auto',
          }}
        >
          <span className="badge badge-bordo" style={{ marginBottom: '0.85rem' }}>
            Acervo Autoral
          </span>
          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}
          >
            Catálogo de Peças Exclusivas
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            Cada criação é tecida individualmente à mão. Escolha a sua peça favorita e faça o pedido diretamente via WhatsApp.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                style={{
                  padding: '0.75rem 1.6rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  transition: 'var(--transition)',
                  backgroundColor: isActive ? 'var(--color-deep)' : 'var(--color-surface)',
                  color: isActive ? '#FFFFFF' : 'var(--color-text)',
                  border: isActive ? '1px solid var(--color-deep)' : '1px solid var(--color-border)',
                  boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2.25rem',
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Product Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '310px',
                  backgroundColor: 'var(--color-surface-soft)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />

                {/* Badge Overlay */}
                {product.badge && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      zIndex: 10,
                    }}
                  >
                    <span className="badge badge-terracota" style={{ boxShadow: 'var(--shadow-sm)' }}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick View Floating Button */}
                <button
                  onClick={() => setQuickViewProduct(product)}
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(6px)',
                    color: 'var(--color-text)',
                    padding: '0.55rem',
                    borderRadius: '50%',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'var(--transition)',
                  }}
                  title="Detalhes da peça"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)')}
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.775rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', fontWeight: 600 }}>
                    {product.categoryLabel}
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-deep)',
                      backgroundColor: 'var(--color-pink-light)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {product.price}
                  </span>
                </div>

                <h3
                  className="heading-serif"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    marginBottom: '0.6rem',
                    lineHeight: 1.25,
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.5,
                    flexGrow: 1,
                  }}
                >
                  {product.description}
                </p>

                {/* Primary WhatsApp Order Button Required */}
                <a
                  href={getWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--color-whatsapp)',
                    color: '#FFFFFF',
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-whatsapp-hover)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-whatsapp)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Encomendar no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(44, 34, 30, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '720px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              animation: 'fadeIn 0.3s ease-out',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 10,
                backgroundColor: '#FFFFFF',
                borderRadius: '50%',
                padding: '0.4rem',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div style={{ height: '100%', minHeight: '320px' }}>
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Modal Info */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge badge-terracota" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
                {quickViewProduct.categoryLabel}
              </span>
              <h3 className="heading-serif" style={{ fontSize: '1.85rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                {quickViewProduct.name}
              </h3>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-deep)', marginBottom: '1rem' }}>
                Preço: {quickViewProduct.price}
              </p>

              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                {quickViewProduct.description}
              </p>

              <div style={{ marginBottom: '1.75rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                  Especificações da Peça:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {quickViewProduct.details.map((detail, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(quickViewProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'var(--color-whatsapp)',
                  color: '#FFFFFF',
                  padding: '0.95rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                }}
              >
                <MessageCircle size={20} />
                <span>Pedir esta peça via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
