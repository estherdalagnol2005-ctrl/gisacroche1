import React from 'react';
import { Sparkles, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-deep)',
        color: '#FAF6F0',
        padding: '0.6rem 1rem',
        fontSize: '0.825rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        textAlign: 'center',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-pink)' }}>
          <Sparkles size={14} /> Encomendas abertas
        </span>
        <span style={{ opacity: 0.5 }}>•</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <Truck size={14} style={{ color: 'var(--color-pink)' }} /> Envio seguro para todo o Brasil
        </span>
      </div>
    </div>
  );
};
