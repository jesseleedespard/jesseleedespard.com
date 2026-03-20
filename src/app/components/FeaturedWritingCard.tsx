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
  borderColor = '#D4A843',
}: FeaturedWritingCardProps) {
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
      <h3
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: '24px',
          color: '#1E1E1E',
          marginBottom: '16px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'Lora, serif',
          fontSize: '16px',
          color: '#444444',
          lineHeight: '1.6',
          marginBottom: '24px',
        }}
      >
        {description}
      </p>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link
          to={primaryLinkTo}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: '#1F5364',
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
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#1F5364',
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