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
          padding: 3.75rem 0;
          background: var(--color-surface-soft);
          overflow: hidden;
        }

        .courses-heading {
          max-width: 650px;
          margin: 0 auto 1.9rem;
          text-align: center;
        }

        .courses-heading h2 {
          margin: 0.75rem 0 0.65rem;
          font-size: clamp(1.9rem, 3.8vw, 2.65rem);
          line-height: 1.08;
          color: var(--color-text);
        }

        .courses-heading p {
          max-width: 580px;
          margin: 0 auto;
          color: var(--color-text-muted);
          font-size: 0.94rem;
          line-height: 1.58;
        }

        .courses-list {
          display: grid;
          gap: 1.25rem;
        }

        .course-card {
          width: min(100%, 920px);
          margin: 0 auto;
          display: flex;
          align-items: stretch;
          overflow: hidden;
          border-radius: var(--radius-lg);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
        }

        .course-visual,
        .course-content {
          min-width: 0;
        }

        .course-visual {
          position: relative;
          flex: 1.05 1 0;
          min-height: 315px;
          overflow: hidden;
          background: var(--color-pink-light);
        }

        .course-visual img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .course-platform {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          z-index: 1;
          padding: 0.36rem 0.65rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.9);
          color: var(--color-deep);
          border: 1px solid rgba(107, 39, 55, 0.12);
          backdrop-filter: blur(8px);
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.035em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .course-content {
          flex: 0.95 1 0;
          padding: 1.85rem 1.8rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .course-eyebrow {
          color: var(--color-primary);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 0.42rem;
        }

        .course-content h3 {
          color: var(--color-text);
          font-size: clamp(1.7rem, 2.7vw, 2.2rem);
          line-height: 1.05;
          margin-bottom: 0.7rem;
        }

        .course-description {
          color: var(--color-text-muted);
          font-size: 0.88rem;
          line-height: 1.58;
          margin-bottom: 1rem;
        }

        .course-highlights {
          display: grid;
          gap: 0.55rem;
          margin-bottom: 1.15rem;
        }

        .course-highlight {
          display: flex;
          align-items: center;
          gap: 0.58rem;
          color: var(--color-text);
          font-size: 0.81rem;
          font-weight: 600;
        }

        .highlight-icon {
          width: 30px;
          height: 30px;
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
          gap: 0.48rem;
          padding: 0.74rem 1.1rem;
          border-radius: var(--radius-full);
          background: var(--color-deep);
          color: #fff;
          font-size: 0.82rem;
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
            padding: 3.2rem 0;
          }

          .course-card {
            width: min(100%, 620px);
            flex-direction: column;
          }

          .course-visual {
            flex: none;
            min-height: 0;
            aspect-ratio: 16 / 9;
          }
        }

        @media (max-width: 520px) {
          .courses-section {
            padding: 2.65rem 0;
          }

          .courses-heading {
            text-align: left;
            margin-bottom: 1.35rem;
          }

          .courses-heading h2 {
            font-size: clamp(1.65rem, 7.5vw, 2rem);
          }

          .courses-heading p {
            font-size: 0.88rem;
          }

          .course-card {
            border-radius: var(--radius-md);
          }

          .course-content {
            padding: 1.3rem 1.1rem 1.4rem;
          }

          .course-content h3 {
            font-size: 1.65rem;
          }

          .course-description {
            font-size: 0.86rem;
          }

          .course-button {
            width: 100%;
            padding: 0.8rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};
