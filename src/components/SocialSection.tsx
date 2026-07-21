'use client';

import React from 'react';
import { INSTAGRAM_URL, YOUTUBE_URL } from '../data/products';
import { Instagram, Youtube, ArrowUpRight, Heart, Play } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const instagramPosts = [
    {
      id: 'post-1',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
      likes: '1.2k',
      caption: 'Bolsa Dumpling em produção para envio!',
    },
    {
      id: 'post-2',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
      likes: '980',
      caption: 'Cropped floral nas cores terracota e creme ✨',
    },
    {
      id: 'post-3',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      likes: '1.5k',
      caption: 'Donut Rosé: elegância artesanal em cada ponto.',
    },
    {
      id: 'post-4',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
      likes: '2.1k',
      caption: 'Vestido Granny Square sob medida para nossa cliente.',
    },
  ];

  return (
    <section
      id="redes-sociais"
      style={{
        paddingTop: '5.5rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border-light)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '650px',
            margin: '0 auto 3.5rem auto',
          }}
        >
          <span className="badge badge-terracota" style={{ marginBottom: '0.85rem' }}>
            Comunidade & Bastidores
          </span>
          <h2
            className="heading-serif"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}
          >
            Acompanhe a Gisa nas Redes
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            Confira nosso dia a dia no ateliê, tutoriais de crochê no YouTube e lançamentos diários no Instagram.
          </p>
        </div>

        {/* Instagram Grid Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '280px',
                display: 'block',
                boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.post-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.post-overlay') as HTMLElement;
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img
                src={post.image}
                alt={post.caption}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              <div
                className="post-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(107, 39, 55, 0.75)',
                  color: '#FFFFFF',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Instagram size={32} style={{ marginBottom: '0.75rem' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.5rem' }}>
                  <Heart size={16} fill="#FFFFFF" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{post.likes}</span>
                </div>
                <p style={{ fontSize: '0.825rem', opacity: 0.9 }}>{post.caption}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Dual Social CTA Banners */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Instagram Banner */}
          <div
            style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.25rem',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', color: 'var(--color-deep)' }}>
                <Instagram size={24} />
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>@gisacrocheoficial</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Bastidores, novos modelos e inspirações diárias em nosso perfil oficial.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--color-deep)',
                color: '#FFFFFF',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Seguir</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* YouTube Banner */}
          <div
            style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.25rem',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', color: '#FF0000' }}>
                <Youtube size={24} />
                <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-text)' }}>Canal Gisa Crochê</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Vídeos detalhados, dicas de pontos e processo criativo do ateliê.
              </p>
            </div>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#FF0000',
                color: '#FFFFFF',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap',
              }}
            >
              <Play size={14} fill="#FFFFFF" />
              <span>Inscrever-se</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
