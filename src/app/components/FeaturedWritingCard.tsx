import { Link } from 'react-router';
import { ReactNode } from 'react';

interface FeaturedWritingCardProps {
  title: string;
  description: string;
  primaryLinkText: string;
  primaryLinkTo: string;
  secondaryLinkText?: string;
  secondaryLinkTo?: string;
  borderColor?: string;
}

export function FeaturedWritingCard({
  title,
  description,
  primaryLinkText,
  primaryLinkTo,
  secondaryLinkText,
  secondaryLinkTo,
  borderColor = 'var(--gold)',
}: FeaturedWritingCardProps) {
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
      <h3
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 700,
          fontSize: 'var(--font-size-xl)',
          color: 'var(--charcoal)',
          marginBottom: 'var(--space-sm)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--body)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--dark-gray)',
          lineHeight: '1.6',
          marginBottom: 'var(--space-card-mobile)',
        }}
      >
        {description}
      </p>
      <div className="card-cta-row">
        <Link
          to={primaryLinkTo}
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-sm)',
            color: 'var(--teal-dark)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {primaryLinkText}
        </Link>
        {secondaryLinkText && secondaryLinkTo && (
          <Link
            to={secondaryLinkTo}
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--teal-dark)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {secondaryLinkText}
          </Link>
        )}
      </div>
    </div>
  );
}
