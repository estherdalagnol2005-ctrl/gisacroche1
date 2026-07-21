import React from 'react';
import { Logo } from './Logo';
import { INSTAGRAM_URL, YOUTUBE_URL, getWhatsAppUrl } from '../data/products';
import { Instagram, Youtube, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-deep)',
        color: '#FAF6F0',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand Info Column */}
          <div>
            <Logo variant="light" size="md" className="mb-4" />
            <p style={{ fontSize: '0.925rem', opacity: 0.8, lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.5rem', maxWidth: '320px' }}>
              Ateliê artesanal autoral de bolsas e moda em crochê. Peças tecidas à mão com afeto, elegância e acabamento impecável.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'var(--transition)',
                }}
                title="Instagram @gisacrocheoficial"
              >
                <Instagram size={18} />
              </a>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'var(--transition)',
                }}
                title="YouTube Gisa Crochê"
              >
                <Youtube size={18} />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(37, 211, 102, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  transition: 'var(--transition)',
                }}
                title="Atendimento via WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-pink)',
                marginBottom: '1.25rem',
              }}
            >
              Navegação
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem', opacity: 0.85 }}>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#categorias">Categorias</a></li>
              <li><a href="#catalogo">Catálogo Completo</a></li>
              <li><a href="#sob-medida">Encomendas Sob Medida</a></li>
              <li><a href="#sobre">Sobre a Gisa</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-pink)',
                marginBottom: '1.25rem',
              }}
            >
              Linha de Peças
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem', opacity: 0.85 }}>
              <li><a href="#catalogo">Bolsas Dumpling & Donut</a></li>
              <li><a href="#catalogo">Croppeds & Tops Rendados</a></li>
              <li><a href="#catalogo">Vestidos Granny Square</a></li>
              <li><a href="#sob-medida">Projetos Especiais</a></li>
              <li><a href="#sob-medida">Paletas & Fios Personalizados</a></li>
            </ul>
          </div>

          {/* Contact Box */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-pink)',
                marginBottom: '1.25rem',
              }}
            >
              Atendimento & Encomendas
            </h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1rem', lineHeight: 1.5 }}>
              Segunda a Sábado, das 09h às 18h.<br />
              Atendimento direto no WhatsApp com a artesã.
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '0.75rem 1.35rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <MessageCircle size={16} />
              <span>(48) 98464-7213</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.825rem',
            opacity: 0.75,
          }}
        >
          <p>© {new Date().getFullYear()} Gisa Crochê. Todos os direitos reservados.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Feito com <Heart size={14} fill="var(--color-pink)" style={{ color: 'var(--color-pink)' }} /> artesanalmente no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};
