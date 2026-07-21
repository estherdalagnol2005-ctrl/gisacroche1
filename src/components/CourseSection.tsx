'use client';

import React from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  Infinity as InfinityIcon,
  MessageCircle,
  PlayCircle,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { courses } from '../data/courses';

const highlightIcons = [PlayCircle, InfinityIcon, MessageCircle];

export const CourseSection: React.FC = () => {
  return (
    <section id="cursos" className="courses-section">
      <div className="container">
        <div className="courses-heading">
          <span className="badge badge-terracota">
            <BookOpen size={15} />
            Aprenda com a Gisa
          </span>

          <h2 className="heading-serif">Mais de 10 anos de experiência, agora em aulas completas</h2>

          <p>
            A Gisa transformou tudo o que aprendeu ao longo dos anos em cursos detalhados,
            pensados para ensinar cada etapa com clareza, cuidado e acompanhamento.
          </p>
        </div>

        <div className="courses-list">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="course-visual" aria-hidden="true">
                <span className="course-platform">Disponível na {course.platform}</span>
                <div className="course-icon-ring">
                  <ShoppingBag size={76} strokeWidth={1.4} />
                </div>
                <div className="course-visual-copy">
                  <span>Curso online</span>
                  <strong>Bolsa Barbie</strong>
                </div>
                <Sparkles className="sparkle sparkle-one" size={28} />
                <Sparkles className="sparkle sparkle-two" size={20} />
              </div>

              <div className="course-content">
                <span className="course-eyebrow">{course.eyebrow}</span>
                <h3 className="heading-serif">{course.title}</h3>
                <p className="course-description">{course.description}</p>

                <div className="course-highlights">
                  {course.highlights.map((highlight, index) => {
                    const Icon = highlightIcons[index] ?? Clock3;

                    return (
                      <div className="course-highlight" key={highlight}>
                        <span className="highlight-icon">
                          <Icon size={18} />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    );
                  })}
                </div>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-button"
                >
                  Conhecer o curso
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .courses-section {
          padding: 6rem 0;
          background: var(--color-surface-soft);
          position: relative;
          overflow: hidden;
        }

        .courses-section::before {
          content: '';
          position: absolute;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          top: -250px;
          right: -120px;
          background: rgba(232, 165, 152, 0.2);
          filter: blur(4px);
        }

        .courses-heading {
          max-width: 760px;
          margin: 0 auto 3rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .courses-heading h2 {
          margin: 1rem 0 1.1rem;
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          line-height: 1.08;
          color: var(--color-text);
        }

        .courses-heading p {
          max-width: 680px;
          margin: 0 auto;
          color: var(--color-text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .courses-list {
          display: grid;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .course-card {
          display: grid;
          grid-template-columns: minmax(300px, 0.9fr) minmax(320px, 1.1fr);
          min-height: 480px;
          overflow: hidden;
          border-radius: calc(var(--radius-lg) + 6px);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
        }

        .course-visual {
          min-height: 100%;
          padding: 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: #fff;
          background:
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3), transparent 28%),
            linear-gradient(145deg, #e9a3b3 0%, #c86d7f 45%, #6b2737 100%);
        }

        .course-visual::after {
          content: '';
          position: absolute;
          width: 270px;
          height: 270px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.22);
          transform: translate(80px, -90px);
        }

        .course-platform {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          padding: 0.5rem 0.8rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.24);
          backdrop-filter: blur(8px);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .course-icon-ring {
          width: 178px;
          height: 178px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: inset 0 0 0 14px rgba(255, 255, 255, 0.06);
          margin-bottom: 1.5rem;
        }

        .course-visual-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .course-visual-copy span {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          opacity: 0.82;
          margin-bottom: 0.25rem;
        }

        .course-visual-copy strong {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 4vw, 3.1rem);
          font-weight: 600;
          line-height: 1;
        }

        .sparkle {
          position: absolute;
          opacity: 0.82;
        }

        .sparkle-one {
          top: 25%;
          right: 14%;
        }

        .sparkle-two {
          bottom: 18%;
          left: 16%;
        }

        .course-content {
          padding: clamp(2rem, 5vw, 4rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .course-eyebrow {
          color: var(--color-primary);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.7rem;
        }

        .course-content h3 {
          color: var(--color-text);
          font-size: clamp(2.2rem, 4vw, 3rem);
          line-height: 1.05;
          margin-bottom: 1.1rem;
        }

        .course-description {
          color: var(--color-text-muted);
          font-size: 1.03rem;
          line-height: 1.75;
          margin-bottom: 1.7rem;
        }

        .course-highlights {
          display: grid;
          gap: 0.85rem;
          margin-bottom: 2rem;
        }

        .course-highlight {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-text);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .highlight-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          color: var(--color-deep);
          background: var(--color-pink-light);
        }

        .course-button {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 0.95rem 1.55rem;
          border-radius: var(--radius-full);
          background: var(--color-deep);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }

        .course-button:hover {
          background: var(--color-deep-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        @media (max-width: 820px) {
          .courses-section {
            padding: 4.5rem 0;
          }

          .course-card {
            grid-template-columns: 1fr;
            min-height: 0;
          }

          .course-visual {
            min-height: 360px;
          }
        }

        @media (max-width: 520px) {
          .courses-heading {
            text-align: left;
            margin-bottom: 2rem;
          }

          .courses-heading p {
            font-size: 0.98rem;
          }

          .course-card {
            border-radius: var(--radius-lg);
          }

          .course-visual {
            min-height: 315px;
            padding: 1.5rem;
          }

          .course-icon-ring {
            width: 148px;
            height: 148px;
          }

          .course-content {
            padding: 1.75rem 1.35rem 2rem;
          }

          .course-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
