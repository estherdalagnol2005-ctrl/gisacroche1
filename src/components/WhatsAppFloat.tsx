'use client';

import React from 'react';
import { getWhatsAppUrl } from '../data/products';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-glow"
      aria-label="Fazer encomenda no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 90,
        backgroundColor: 'var(--color-whatsapp)',
        color: '#FFFFFF',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <MessageCircle size={32} />
    </a>
  );
};
