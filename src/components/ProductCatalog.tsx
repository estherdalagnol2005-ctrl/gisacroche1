'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle2, Eye, MessageCircle, X } from 'lucide-react';
import { CATEGORIES, getWhatsAppUrl, Product, PRODUCTS } from '../data/products';

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

  useEffect(() => setActiveTab(selectedCategory), [selectedCategory]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onCategoryChange?.(tabId);
  };

  const filteredProducts =
    activeTab === 'todos' ? PRODUCTS : PRODUCTS.filter((product) => product.category === activeTab);

  return (
    <section id="catalogo" className="catalog-section">
      <div className="container">
        <header className="catalog-heading">
          <span className="badge badge-bordo catalog-badge">Acervo autoral</span>
          <h2 className="heading-serif">
            <span className="desktop-title">Catálogo de Peças Exclusivas</span>
            <span className="mobile-title">Peças da Gisa</span>
          </h2>
          <p>
            Cada criação é tecida individualmente à mão. Escolha sua favorita e faça o pedido pelo WhatsApp.
          </p>
        </header>

        <div className="catalog-tabs" role="tablist" aria-label="Categorias de produtos">
          {CATEGORIES.map((category) => {
            const active = activeTab === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={active ? 'is-active' : ''}
                onClick={() => handleTabChange(category.id)}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />

                {product.badge && <span className="product-badge">{product.badge}</span>}

                <button
                  type="button"
                  className="quick-view"
                  onClick={() => setQuickViewProduct(product)}
                  aria-label={`Ver detalhes de ${product.name}`}
                >
                  <Eye size={17} />
                </button>
              </div>

              <div className="product-content">
                <div className="product-meta">
                  <span className="product-category">{product.categoryLabel}</span>
                  <span className="product-price">{product.price}</span>
                </div>

                <h3 className="heading-serif">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <a
                  className="order-button"
                  href={getWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} />
                  <span className="desktop-order-label">Encomendar no WhatsApp</span>
                  <span className="mobile-order-label">Encomendar</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {quickViewProduct && (
        <div className="modal-backdrop" onClick={() => setQuickViewProduct(null)}>
          <div className="quick-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setQuickViewProduct(null)} aria-label="Fechar detalhes">
              <X size={20} />
            </button>

            <div className="modal-image">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} />
            </div>

            <div className="modal-content">
              <span className="badge badge-terracota">{quickViewProduct.categoryLabel}</span>
              <h3 className="heading-serif">{quickViewProduct.name}</h3>
              <strong>Preço: {quickViewProduct.price}</strong>
              <p>{quickViewProduct.description}</p>

              <ul>
                {quickViewProduct.details.map((detail) => (
                  <li key={detail}>
                    <CheckCircle2 size={16} /> {detail}
                  </li>
                ))}
              </ul>

              <a href={getWhatsAppUrl(quickViewProduct.name)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} /> Encomendar esta peça
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .catalog-section {
          padding: 5.25rem 0 5.75rem;
          background: var(--color-bg);
        }

        .catalog-heading {
          max-width: 680px;
          margin: 0 auto 2.75rem;
          text-align: center;
        }

        .catalog-heading h2 {
          margin: 0.8rem 0 0.8rem;
          color: var(--color-text);
          font-size: clamp(2.3rem, 4.5vw, 3.3rem);
          line-height: 1.08;
        }

        .catalog-heading p {
          color: var(--color-text-muted);
          font-size: 1rem;
          line-height: 1.65;
        }

        .mobile-title,
        .mobile-order-label {
          display: none;
        }

        .catalog-tabs {
          margin: 0 auto 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .catalog-tabs button {
          min-height: 43px;
          padding: 0.7rem 1.45rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          background: #fff;
          color: var(--color-text);
          font-size: 0.88rem;
          font-weight: 700;
          white-space: nowrap;
          transition: background 180ms ease, color 180ms ease, border 180ms ease;
        }

        .catalog-tabs button.is-active {
          border-color: var(--color-deep);
          background: var(--color-deep);
          color: #fff;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
          gap: 2rem;
        }

        .product-card {
          min-width: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          background: #fff;
          box-shadow: var(--shadow-sm);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
        }

        .product-image-wrap {
          position: relative;
          aspect-ratio: 4 / 4.4;
          overflow: hidden;
          background: var(--color-surface-soft);
        }

        .product-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 420ms ease;
        }

        .product-card:hover .product-image-wrap img {
          transform: scale(1.035);
        }

        .product-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          max-width: calc(100% - 3.8rem);
          padding: 0.36rem 0.72rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.91);
          color: var(--color-deep);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        .quick-view {
          position: absolute;
          right: 0.8rem;
          bottom: 0.8rem;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--color-text);
          box-shadow: var(--shadow-sm);
          backdrop-filter: blur(8px);
        }

        .product-content {
          flex: 1;
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
        }

        .product-meta {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .product-category {
          color: var(--color-primary);
          font-size: 0.69rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .product-price {
          padding: 0.2rem 0.58rem;
          border-radius: 999px;
          background: var(--color-pink-light);
          color: var(--color-deep);
          font-size: 0.78rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .product-content h3 {
          margin-bottom: 0.55rem;
          color: var(--color-text);
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.2;
        }

        .product-description {
          flex: 1;
          margin-bottom: 1.3rem;
          color: var(--color-text-muted);
          font-size: 0.86rem;
          line-height: 1.55;
        }

        .order-button {
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.48rem;
          padding: 0.72rem 0.8rem;
          border-radius: 10px;
          background: var(--color-whatsapp);
          color: #fff;
          font-size: 0.86rem;
          font-weight: 800;
          transition: background 180ms ease, transform 180ms ease;
        }

        .order-button:hover {
          background: var(--color-whatsapp-hover);
          transform: translateY(-1px);
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          padding: 1.25rem;
          display: grid;
          place-items: center;
          background: rgba(35, 25, 22, 0.68);
          backdrop-filter: blur(7px);
        }

        .quick-modal {
          position: relative;
          width: min(760px, 100%);
          max-height: 90svh;
          overflow: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: var(--radius-lg);
          background: #fff;
          box-shadow: var(--shadow-lg);
        }

        .modal-close {
          position: absolute;
          z-index: 2;
          top: 0.8rem;
          right: 0.8rem;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: var(--color-text);
          box-shadow: var(--shadow-sm);
        }

        .modal-image {
          min-height: 390px;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .modal-content > span {
          width: fit-content;
          margin-bottom: 0.7rem;
        }

        .modal-content h3 {
          margin-bottom: 0.4rem;
          color: var(--color-text);
          font-size: 2rem;
        }

        .modal-content > strong {
          margin-bottom: 0.8rem;
          color: var(--color-deep);
        }

        .modal-content > p {
          margin-bottom: 1rem;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .modal-content ul {
          margin-bottom: 1.35rem;
          display: grid;
          gap: 0.45rem;
          list-style: none;
        }

        .modal-content li {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--color-text-muted);
          font-size: 0.84rem;
        }

        .modal-content li :global(svg) {
          flex: 0 0 auto;
          color: var(--color-primary);
        }

        .modal-content > a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.82rem;
          border-radius: 10px;
          background: var(--color-whatsapp);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 800;
        }

        @media (max-width: 700px) {
          .catalog-section {
            padding: 2.5rem 0 3.6rem;
          }

          .catalog-heading {
            margin: 0 0 1.15rem;
            text-align: left;
          }

          .catalog-badge,
          .catalog-heading p,
          .desktop-title,
          .desktop-order-label {
            display: none;
          }

          .mobile-title,
          .mobile-order-label {
            display: inline;
          }

          .catalog-heading h2 {
            margin: 0;
            font-size: 2rem;
            line-height: 1;
          }

          .catalog-tabs {
            width: calc(100% + 1.5rem);
            margin: 0 -0.75rem 1.25rem;
            padding: 0 0.75rem 0.25rem;
            justify-content: flex-start;
            flex-wrap: nowrap;
            gap: 0.5rem;
            overflow-x: auto;
            scrollbar-width: none;
          }

          .catalog-tabs::-webkit-scrollbar {
            display: none;
          }

          .catalog-tabs button {
            min-height: 36px;
            padding: 0.52rem 0.9rem;
            font-size: 0.72rem;
          }

          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.72rem;
          }

          .product-card {
            border: 0;
            border-radius: 8px;
            box-shadow: none;
          }

          .product-card:hover {
            transform: none;
            box-shadow: none;
          }

          .product-image-wrap {
            aspect-ratio: 4 / 5;
            border-radius: 8px;
          }

          .product-badge {
            top: 0.45rem;
            left: 0.45rem;
            max-width: calc(100% - 2.7rem);
            padding: 0.25rem 0.45rem;
            font-size: 0.5rem;
          }

          .quick-view {
            right: 0.4rem;
            bottom: 0.4rem;
            width: 31px;
            height: 31px;
          }

          .quick-view :global(svg) {
            width: 15px;
            height: 15px;
          }

          .product-content {
            padding: 0.62rem 0.15rem 0;
          }

          .product-meta {
            margin-bottom: 0.28rem;
          }

          .product-category,
          .product-description {
            display: none;
          }

          .product-price {
            margin-left: auto;
            padding: 0;
            background: transparent;
            font-size: 0.64rem;
          }

          .product-content h3 {
            min-height: 2.2em;
            margin-bottom: 0.5rem;
            font-size: clamp(0.98rem, 4.6vw, 1.15rem);
            line-height: 1.08;
          }

          .order-button {
            min-height: 36px;
            padding: 0.55rem 0.35rem;
            border-radius: 7px;
            font-size: 0.7rem;
          }

          .order-button :global(svg) {
            width: 14px;
            height: 14px;
          }

          .quick-modal {
            grid-template-columns: 1fr;
            border-radius: 14px;
          }

          .modal-image {
            min-height: 270px;
            max-height: 42svh;
          }

          .modal-content {
            padding: 1.25rem;
          }

          .modal-content h3 {
            font-size: 1.65rem;
          }
        }

        @media (max-width: 370px) {
          .products-grid {
            gap: 0.55rem;
          }

          .product-content h3 {
            font-size: 0.94rem;
          }
        }
      `}</style>
    </section>
  );
};
