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
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        borderRadius: '8px',
        overflow: 'hidden',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {/* Accent Bar */}
      <div style={{ height: '4px', backgroundColor: accentColor }} />

      <div style={{ padding: '32px' }}>
        {/* Tag */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '12px',
            color: tagColor,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {tag}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '24px',
            color: disabled ? '#888888' : '#1E1E1E',
            marginBottom: '12px',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Lora, serif',
            fontSize: '16px',
            color: disabled ? '#888888' : '#444444',
            lineHeight: '1.6',
            marginBottom: '24px',
          }}
        >
          {description}
        </p>

        {/* Link */}
        {disabled ? (
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#CCCCCC',
              whiteSpace: 'nowrap',
            }}
          >
            {linkText}
          </div>
        ) : (
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
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
}