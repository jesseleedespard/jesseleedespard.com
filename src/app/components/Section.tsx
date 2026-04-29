import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  backgroundColor?: string;
  padding?: string;
}

export function Section({ 
  children, 
  backgroundColor = 'var(--cream)', 
  padding = 'var(--space-section) var(--space-page-side)' 
}: SectionProps) {
  return (
    <section style={{ padding, backgroundColor }}>
      <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
}
