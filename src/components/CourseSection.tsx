'use client';

import React from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  Infinity as InfinityIcon,
  MessageCircle,
  PlayCircle,
} from 'lucide-react';
import { courses } from '../data/courses';

const highlightIcons = [PlayCircle, InfinityIcon, MessageCircle];

export const CourseSection: React.FC = () => {
  return (
    <section id="cursos" className="courses-section">
      <div className="container">
        <div className="courses-heading">
          <span className="badge badge-terracota">
            <BookOpen size={14} />
            Aprenda com a Gisa
          </span>

          <h2 className="heading-serif">Cursos para transformar experiência em novas criações</h2>

          <p>
            Aulas detalhadas, práticas e feitas com o cuidado de quem trabalha com crochê há mais de 10 anos.
          </p>
        </div>

        <div className="courses-list">
          {courses.map((course) => (
            <article className="course-card" key={course.id}>
              <div className="course-visual">
                <img src={course.image} alt={`Capa do curso ${course.title}`} />
                <span className="course-platform">Disponível na {course.platform}</span>
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
                          <Icon size={16} />
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
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .courses-section {
          padding: 4.25rem 0;
          background: var(--color-surface-soft);
          position: relative;
          overflow: hidden;
        }

        .courses-heading {
          max-width: 650px;
          margin: 0 auto 2.15rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .courses-heading h2 {
          margin: 0.8rem 0 0.75rem;
          font-size: clamp(2rem, 4vw, 2.8rem);
          line-height: 1.08;
          color: var(--color-text);
        }

        .courses-heading p {
          max-width: 590px;
          margin: 0 auto;
          color: var(--color-text-muted);
          font-size: 0.96rem;
          line-height: 1.6;
        }

        .courses-list {
          display: grid;
          gap: 1.4rem;
          position: relative;
          z-index: 1;
        }

        .course-card {
          width: min(100%, 980px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(310px, 1fr) minmax(320px, 0.9fr);
          overflow: hidden;
          border-radius: var(--radius-lg);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
        }

        .course-visual {
          position: relative;
          aspect-ratio: 16 / 9;
          min-height: 100%;
          overflow: hidden;
          background: var(--color-pink-light);
        }

        .course-visual img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .course-platform {
          position: absolute;
          top: 0.9rem;
          left: 0.9rem;
          padding: 0.38rem 0.68rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.88);
          color: var(--color-deep);
          border: 1px solid rgba(107, 39, 55, 0.12);
          backdrop-filter: blur(8px);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .course-content {
          padding: 2.1rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .course-eyebrow {
          color: var(--color-primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 0.48rem;
        }

        .course-content h3 {
          color: var(--color-text);
          font-size: clamp(1.8rem, 3vw, 2.35rem);
          line-height: 1.05;
          margin-bottom: 0.8rem;
        }

        .course-description {
          color: var(--color-text-muted);
          font-size: 0.92rem;
          line-height: 1.62;
          margin-bottom: 1.15rem;
        }

        .course-highlights {
          display: grid;
          gap: 0.62rem;
          margin-bottom: 1.35rem;
        }

        .course-highlight {
          display: flex;
          align-items: center;
          gap: 0.62rem;
          color: var(--color-text);
          font-size: 0.84rem;
          font-weight: 600;
        }

        .highlight-icon {
          width: 32px;
          height: 32px;
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
          gap: 0.52rem;
          padding: 0.78rem 1.2rem;
          border-radius: var(--radius-full);
          background: var(--color-deep);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .course-button:hover {
          background: var(--color-deep-hover);
          transform: translateY(-2px);
        }

        @media (max-width: 820px) {
          .courses-section {
            padding: 3.5rem 0;
          }

          .course-card {
            grid-template-columns: 1fr;
            width: min(100%, 620px);
          }

          .course-visual {
            min-height: auto;
          }
        }

        @media (max-width: 520px) {
          .courses-section {
            padding: 2.9rem 0;
          }

          .courses-heading {
            text-align: left;
            margin-bottom: 1.5rem;
          }

          .courses-heading h2 {
            font-size: clamp(1.75rem, 8vw, 2.15rem);
            margin-top: 0.7rem;
          }

          .courses-heading p {
            font-size: 0.9rem;
          }

          .course-card {
            border-radius: var(--radius-md);
          }

          .course-content {
            padding: 1.45rem 1.2rem 1.55rem;
          }

          .course-content h3 {
            font-size: 1.75rem;
          }

          .course-description {
            font-size: 0.88rem;
          }

          .course-button {
            width: 100%;
            padding: 0.82rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};
