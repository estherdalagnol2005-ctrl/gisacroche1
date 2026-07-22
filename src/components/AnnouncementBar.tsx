import React from 'react';
import { Sparkles, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <span className="announcement-message">
          <Sparkles size={13} /> Encomendas abertas
        </span>
        <span className="announcement-divider">•</span>
        <span className="announcement-message announcement-shipping">
          <Truck size={13} /> Envio para todo o Brasil
        </span>
      </div>

      <style jsx>{`
        .announcement-bar {
          position: relative;
          z-index: 60;
          padding: 0.55rem 1rem;
          background: var(--color-deep);
          color: #fffaf4;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.035em;
          text-align: center;
        }

        .announcement-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
        }

        .announcement-message {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
        }

        .announcement-message:first-child {
          color: var(--color-pink);
        }

        .announcement-divider {
          opacity: 0.45;
        }

        @media (max-width: 520px) {
          .announcement-bar {
            min-height: 29px;
            padding: 0.36rem 0.65rem;
            font-size: 0.64rem;
            letter-spacing: 0.03em;
          }

          .announcement-inner {
            gap: 0.4rem;
          }

          .announcement-shipping svg {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .announcement-divider,
          .announcement-shipping {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
