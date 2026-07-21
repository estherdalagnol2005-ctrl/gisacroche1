import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', size = 'md' }) => {
  const sizes = {
    sm: { height: 36, width: 140, textClass: 'text-lg' },
    md: { height: 48, width: 180, textClass: 'text-xl' },
    lg: { height: 60, width: 220, textClass: 'text-2xl' },
  };

  const currentSize = sizes[size];
  const textColor = variant === 'light' ? '#FFFFFF' : '#2C221E';
  const accentColor = '#C86D51'; // Terracota
  const deepColor = variant === 'light' ? '#E8A598' : '#6B2737'; // Bordô / Pink

  return (
    <div className={`inline-flex items-center gap-2.5 font-serif font-semibold ${className}`}>
      {/* Artisanal Crochet Needle & Yarn Loop SVG Icon */}
      <svg
        width={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
        height={size === 'sm' ? 32 : size === 'md' ? 40 : 48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        <circle cx="24" cy="24" r="22" fill={variant === 'light' ? 'rgba(255,255,255,0.15)' : '#FAF6F0'} stroke={accentColor} strokeWidth="1.5" />
        {/* Decorative Yarn Loop */}
        <path
          d="M16 28C14 24 16 18 20 16C24 14 30 16 32 20C34 24 32 30 28 32C24 34 18 32 16 28Z"
          stroke={deepColor}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M20 22C19 20 20 17 23 16C26 15 29 17 30 20C31 23 29 26 26 27C23 28 20 26 20 22Z"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeDasharray="2 2"
        />
        {/* Hook Detail */}
        <path d="M12 36L34 12" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M34 12C36 10 38 12 36 14" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "var(--font-serif), 'Cormorant Garamond', serif",
            color: textColor,
            fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.5rem' : '1.85rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          Gisa Crochê
        </span>
        <span
          style={{
            color: accentColor,
            fontSize: size === 'sm' ? '0.6rem' : size === 'md' ? '0.7rem' : '0.8rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginTop: '3px',
          }}
        >
          Ateliê Manufaturado
        </span>
      </div>
    </div>
  );
};
