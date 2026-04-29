import { Link } from 'react-router';

interface WritingPostCardProps {
  accentColor: string;
  badge: string;
  badgeColor: string;
  date: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
  excerpt: string;
  readTime: string;
  linkTo: string;
  linkColor: string;
}

export function WritingPostCard({
  accentColor,
  badge,
  badgeColor,
  date,
  title,
  subtitle,
  subtitleColor,
  excerpt,
  readTime,
  linkTo,
  linkColor,
}: WritingPostCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        border: '1px solid var(--light-gray)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '4px', backgroundColor: accentColor }} />

      <div style={{ padding: 'var(--space-card)' }}>
        {/* Badge + Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: badgeColor,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--dark-gray)',
            }}
          >
            {date}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'var(--font-size-xl)',
            color: 'var(--charcoal)',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'var(--font-size-base)',
            color: subtitleColor,
            marginBottom: '16px',
          }}
        >
          {subtitle}
        </p>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: 'Lora, serif',
            fontSize: 'var(--font-size-base)',
            color: 'var(--dark-gray)',
            lineHeight: '1.6',
            marginBottom: '24px',
          }}
        >
          {excerpt}
        </p>

        {/* Footer */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--dark-gray)',
              alignSelf: 'flex-start',
            }}
          >
            {readTime}
          </span>
          <div className="card-cta-row">
            <Link
              to={linkTo}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                color: linkColor,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Read Article →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
