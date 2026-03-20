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
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: isActive ? 700 : 500,
        fontSize: '15px',
        color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: isActive ? '3px solid #1F5364' : '3px solid transparent',
        padding: '16px 24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {icon}
      {label}
      {/* Count Badge */}
      <span
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: '12px',
          color: isActive ? '#FFFFFF' : '#1E1E1E',
          backgroundColor: isActive ? '#1F5364' : '#888888',
          borderRadius: '10px',
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