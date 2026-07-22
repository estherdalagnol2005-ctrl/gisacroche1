'use client';

import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../data/products';
import { Menu, MessageCircle, Search, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Sob Medida', href: '#sob-medida' },
  { label: 'Sobre a Gisa', href: '#sobre' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToCatalog = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="desktop-header container">
        <a href="#inicio" aria-label="Ir para o início">
          <Logo size="md" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="desktop-whatsapp" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} />
          Falar com a Gisa
        </a>
      </div>

      <div className="mobile-header">
        <button
          className="mobile-icon-button"
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <a className="mobile-logo" href="#inicio" aria-label="Gisa Crochê - início" onClick={closeMenu}>
          <Logo size="sm" />
        </a>

        <div className="mobile-actions">
          <button className="mobile-icon-button" type="button" onClick={scrollToCatalog} aria-label="Ir para o catálogo">
            <Search size={20} />
          </button>
          <a
            className="mobile-icon-button"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Gisa pelo WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <div className="mobile-trust-strip">
        <strong>Mais de 10 anos de experiência</strong>
        <span>•</span>
        <span>Peças autorais e sob medida</span>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu-panel">
          <nav aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="mobile-menu-cta" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <MessageCircle size={17} /> Fazer encomenda
          </a>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border-light);
          transition: background 180ms ease, box-shadow 180ms ease;
        }

        .site-header.is-scrolled {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(44, 34, 30, 0.07);
        }

        .desktop-header {
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1rem, 2.2vw, 2rem);
        }

        .desktop-nav a {
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 180ms ease;
          white-space: nowrap;
        }

        .desktop-nav a:hover {
          color: var(--color-primary);
        }

        .desktop-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 0.48rem;
          padding: 0.68rem 1.2rem;
          border-radius: var(--radius-full);
          background: var(--color-primary);
          color: #fff;
          font-size: 0.84rem;
          font-weight: 700;
          box-shadow: var(--shadow-sm);
          transition: transform 180ms ease, background 180ms ease;
          white-space: nowrap;
        }

        .desktop-whatsapp:hover {
          background: var(--color-primary-hover);
          transform: translateY(-2px);
        }

        .mobile-header,
        .mobile-trust-strip,
        .mobile-menu-panel {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-header {
            display: none;
          }

          .mobile-header {
            position: relative;
            min-height: 58px;
            padding: 0 13px;
            display: grid;
            grid-template-columns: 72px 1fr 72px;
            align-items: center;
            background: #fff;
          }

          .mobile-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 58px;
            overflow: hidden;
          }

          .mobile-logo :global(span) {
            transform: scale(0.76);
          }

          .mobile-icon-button {
            width: 38px;
            height: 38px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #171311;
            border-radius: 50%;
            transition: background 160ms ease;
          }

          .mobile-icon-button:hover {
            background: var(--color-surface-soft);
          }

          .mobile-actions {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 0;
          }

          .mobile-trust-strip {
            min-height: 40px;
            padding: 0.42rem 0.7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.42rem;
            background: #fff;
            border-top: 1px solid var(--color-border-light);
            color: var(--color-text);
            font-size: 0.67rem;
            text-align: center;
            line-height: 1.2;
          }

          .mobile-trust-strip strong {
            font-weight: 800;
          }

          .mobile-trust-strip span:last-child {
            color: var(--color-text-muted);
          }

          .mobile-menu-panel {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            display: block;
            padding: 1rem 1rem 1.2rem;
            background: #fff;
            border-top: 1px solid var(--color-border-light);
            box-shadow: 0 18px 35px rgba(44, 34, 30, 0.14);
            animation: mobileMenuIn 180ms ease-out;
          }

          .mobile-menu-panel nav {
            display: grid;
          }

          .mobile-menu-panel nav a {
            padding: 0.8rem 0.25rem;
            border-bottom: 1px solid var(--color-border-light);
            color: var(--color-text);
            font-size: 0.94rem;
            font-weight: 650;
          }

          .mobile-menu-cta {
            margin-top: 1rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.82rem 1rem;
            border-radius: 10px;
            background: var(--color-deep);
            color: #fff;
            font-size: 0.9rem;
            font-weight: 700;
          }
        }

        @media (max-width: 390px) {
          .mobile-trust-strip {
            font-size: 0.62rem;
          }
        }

        @keyframes mobileMenuIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};
