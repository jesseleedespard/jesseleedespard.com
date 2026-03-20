import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  backgroundColor?: string;
  padding?: string;
}

export function Section({ 
  children, 
  backgroundColor = '#FAF7F2', 
  padding = '80px 48px' 
}: SectionProps) {
  return (
    <section style={{ padding, backgroundColor }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
}
