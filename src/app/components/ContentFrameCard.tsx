import { ReactNode } from 'react';

interface ContentFrameCardProps {
  children: ReactNode;
  borderColor?: string;
}

export function ContentFrameCard({ children, borderColor = '#1F5364' }: ContentFrameCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        borderLeft: `4px solid ${borderColor}`,
        borderRadius: '8px',
        padding: '40px',
      }}
    >
      {children}
    </div>
  );
}