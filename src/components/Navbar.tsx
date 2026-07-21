'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../data/products';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Sob Medida', href: '#sob-medida' },
    { label: 'Sobre a Gisa', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--color-bg)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
        borderBottom: '1px solid var(--color-border-light)',
        transition: 'var(--transition)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        {/* Brand Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.25rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.925rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#FFFFFF',
              padding: '0.65rem 1.35rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <MessageCircle size={16} />
            <span>Falar com a Gisa</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Abrir Menu"
            style={{
              padding: '0.5rem',
              color: 'var(--color-text)',
              display: 'none', // Managed by responsive CSS
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--color-border-light)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              backgroundColor: 'var(--color-whatsapp)',
              color: '#FFFFFF',
              padding: '0.85rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              fontWeight: 600,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem',
            }}
          >
            <MessageCircle size={18} />
            <span>Fazer Encomenda no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Embedded Responsive Media Queries */}
      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          :global(.mobile-toggle) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
