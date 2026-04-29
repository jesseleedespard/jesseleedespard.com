import { ReactNode } from 'react';

interface ContentFrameCardProps {
  children: ReactNode;
  borderColor?: string;
}

export function ContentFrameCard({ children, borderColor = 'var(--teal-dark)' }: ContentFrameCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        border: '1px solid var(--light-gray)',
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        padding: '40px',
      }}
    >
      {children}
    </div>
  );
}
