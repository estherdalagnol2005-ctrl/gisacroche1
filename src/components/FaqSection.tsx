'use client';

import React, { useState } from 'react';
import { FAQS, getWhatsAppUrl } from '../data/products';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Section Title */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
          }}
        >
          <span className="badge badge-terracota" style={{ marginBottom: '0.85rem' }}>
            Tire Suas Dúvidas
          </span>
          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}
          >
            Perguntas Frequentes
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            Tudo o que você precisa saber sobre prazos, personalização, envios e encomendas sob medida.
          </p>
        </div>

        {/* Accordion List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  transition: 'var(--transition)',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.35rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    color: 'var(--color-text)',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    {faq.question}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: 'var(--color-primary)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.75rem 1.5rem 3.25rem',
                      color: 'var(--color-text-muted)',
                      fontSize: '0.975rem',
                      lineHeight: 1.65,
                      animation: 'fadeIn 0.3s ease-out',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div
          style={{
            backgroundColor: 'var(--color-pink-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center',
            border: '1px solid var(--color-border)',
          }}
        >
          <h3 className="heading-serif" style={{ fontSize: '1.65rem', color: 'var(--color-deep)', marginBottom: '0.5rem' }}>
            Ainda tem alguma dúvida específica?
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.975rem', marginBottom: '1.5rem' }}>
            Fale diretamente com a Gisa no WhatsApp e receba um atendimento personalizado para a sua encomenda.
          </p>

          <a
            href={getWhatsAppUrl('Dúvidas sobre encomendas')}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-whatsapp)',
              color: '#FFFFFF',
              padding: '0.9rem 2rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.975rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
            }}
          >
            <MessageCircle size={18} />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
