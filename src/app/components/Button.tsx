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
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 700,
      fontSize: size === 'large' ? '15px' : '14px',
      padding: size === 'large' ? '14px 32px' : '12px 28px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap' as const,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          color: '#1E1E1E',
          backgroundColor: '#D4A843',
        };
      case 'secondary':
        return {
          ...baseStyles,
          color: '#FFFFFF',
          backgroundColor: '#1E1E1E',
        };
      case 'outline':
        return {
          ...baseStyles,
          color: '#FFFFFF',
          backgroundColor: 'transparent',
          border: '2px solid #FFFFFF',
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
