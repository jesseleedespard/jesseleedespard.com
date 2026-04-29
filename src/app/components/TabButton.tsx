import { ReactNode } from 'react';

interface TabButtonProps {
  label: string;
  count: number;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ label, count, icon, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: 'var(--display)',
        fontWeight: isActive ? 700 : 500,
        fontSize: 'var(--font-size-sm)',
        color: isActive ? 'var(--white)' : 'var(--hero-subtitle-color-soft)',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: isActive ? '3px solid var(--teal-dark)' : '3px solid transparent',
        padding: 'var(--space-sm) var(--space-card-mobile)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
      }}
    >
      {icon}
      {label}
      {/* Count Badge */}
      <span
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 700,
          fontSize: 'var(--font-size-xs)',
          color: isActive ? 'var(--white)' : 'var(--charcoal)',
          backgroundColor: isActive ? 'var(--teal-dark)' : 'var(--gray)',
          borderRadius: 'var(--radius-md)',
          padding: '2px 8px',
          minWidth: '20px',
          textAlign: 'center',
        }}
      >
        {count}
      </span>
    </button>
  );
}
