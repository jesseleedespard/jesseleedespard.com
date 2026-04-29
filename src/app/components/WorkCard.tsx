import { Link } from 'react-router';

interface WorkCardProps {
  accentColor: string;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
  linkColor: string;
  disabled?: boolean;
}

export function WorkCard({
  accentColor,
  tag,
  tagColor,
  title,
  description,
  linkTo,
  linkText,
  linkColor,
  disabled = false,
}: WorkCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        border: '1px solid var(--light-gray)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {/* Accent Bar */}
      <div style={{ height: '4px', backgroundColor: accentColor }} />

      <div style={{ padding: 'var(--space-card)' }}>
        {/* Tag */}
        <div
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-xs)',
            color: tagColor,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: 'var(--space-sm)',
          }}
        >
          {tag}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-xl)',
            color: disabled ? 'var(--gray)' : 'var(--charcoal)',
            marginBottom: '12px',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--body)',
            fontSize: 'var(--font-size-base)',
            color: disabled ? 'var(--gray)' : 'var(--dark-gray)',
            lineHeight: '1.6',
            marginBottom: 'var(--space-card-mobile)',
          }}
        >
          {description}
        </p>

        {/* Link */}
        <div className="card-cta-row">
          {disabled ? (
            <div
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                color: 'var(--mid-gray)',
                whiteSpace: 'nowrap',
              }}
            >
              {linkText}
            </div>
          ) : (
            <Link
              to={linkTo}
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                color: linkColor,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
