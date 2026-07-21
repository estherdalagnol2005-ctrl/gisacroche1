import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const sizes = {
    sm: { width: 88, height: 56 },
    md: { width: 116, height: 74 },
    lg: { width: 156, height: 99 },
  };

  const currentSize = sizes[size];

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: currentSize.width,
        height: currentSize.height,
        padding: variant === 'light' ? '7px' : 0,
        borderRadius: variant === 'light' ? '12px' : 0,
        backgroundColor: variant === 'light' ? 'rgba(250, 246, 240, 0.96)' : 'transparent',
        flexShrink: 0,
      }}
    >
      <img
        src="/images/logo-gisa-croche.svg"
        alt="Gisa Crochê"
        width={currentSize.width}
        height={currentSize.height}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </span>
  );
};
