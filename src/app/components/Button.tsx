import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'medium' | 'large';
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'large'
}: ButtonProps) {
  const getStyles = () => {
    const baseStyles = {
      fontFamily: 'var(--display)',
      fontWeight: 700,
      fontSize: 'var(--font-size-sm)',
      padding: size === 'large' ? 'var(--space-sm) var(--space-card)' : 'var(--space-sm) var(--space-card-mobile)',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap' as const,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          color: 'var(--charcoal)',
          backgroundColor: 'var(--gold)',
        };
      case 'secondary':
        return {
          ...baseStyles,
          color: 'var(--white)',
          backgroundColor: 'var(--charcoal)',
        };
      case 'outline':
        return {
          ...baseStyles,
          color: 'var(--white)',
          backgroundColor: 'transparent',
          border: '2px solid var(--white)',
        };
      default:
        return baseStyles;
    }
  };

  return (
    <button onClick={onClick} style={getStyles()}>
      {children}
    </button>
  );
}
