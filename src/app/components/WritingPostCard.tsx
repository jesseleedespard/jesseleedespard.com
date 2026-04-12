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
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '4px', backgroundColor: accentColor }} />

      <div style={{ padding: '32px' }}>
        {/* Badge + Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
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
              fontSize: '14px',
              color: '#444444',
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
            fontSize: '24px',
            color: '#1E1E1E',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
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
            fontSize: '16px',
            color: '#444444',
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
              fontSize: '14px',
              color: '#444444',
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
                fontSize: '14px',
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