import { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

interface HeroProps {
  eyebrow: string;
  headline: string;
  subheading: string;
  cta?: ReactNode;
  backgroundColor?: string;
  padding?: string;
  maxWidth?: string;
}

export function Hero({
  eyebrow,
  headline,
  subheading,
  cta,
  backgroundColor = '#1E1E1E',
  padding = '100px 48px',
  maxWidth = '900px',
}: HeroProps) {
  return (
    <section style={{ backgroundColor, padding }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Eyebrow color="#D4A843">{eyebrow}</Eyebrow>

        <h1
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: '52px',
            color: '#FFFFFF',
            lineHeight: '1.15',
            marginBottom: '24px',
            maxWidth,
          }}
        >
          {headline}
        </h1>

        <p
          style={{
            fontFamily: 'var(--body)',
            fontWeight: 400,
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.65)',
            marginBottom: cta ? '36px' : '0',
            maxWidth: '700px',
            lineHeight: '1.6',
          }}
        >
          {subheading}
        </p>

        {cta}
      </div>
    </section>
  );
}
