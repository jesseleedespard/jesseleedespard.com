import type { CSSProperties, ReactNode } from 'react';

export type MarketingCtaStripProps = {
  title: string;
  body: ReactNode;
  cta: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Terra hiring / marketing CTA — same structure and theme classes as the Home page strip.
 */
export function MarketingCtaStrip({ title, body, cta, className, style }: MarketingCtaStripProps) {
  const sectionClass = ['home-cta-strip', className].filter(Boolean).join(' ');
  return (
    <section className={sectionClass} style={style}>
      <div className="home-cta-strip__inner">
        <div className="home-cta-strip__copy">
          <h3 className="home-cta-strip__title">{title}</h3>
          <p className="home-cta-strip__body">{body}</p>
        </div>
        {cta}
      </div>
    </section>
  );
}
