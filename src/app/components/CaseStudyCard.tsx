import { Link } from 'react-router';

interface CaseStudyCardProps {
  tag: string;
  title: string;
  description: string;
  linkTo: string;
  tagColor?: string;
  linkColor?: string;
  linkText?: string;
}

export function CaseStudyCard({
  tag,
  title,
  description,
  linkTo,
  tagColor = 'var(--teal-dark)',
  linkColor,
  linkText = 'Read Case Study →',
}: CaseStudyCardProps) {
  const ctaColor = linkColor ?? tagColor;

  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        border: '1px solid var(--light-gray)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
      }}
    >
      {/* Placeholder Image */}
      <div
        style={{
          width: '100%',
          height: '240px',
          backgroundColor: 'var(--mid-gray)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--gray)',
          fontFamily: 'var(--display)',
          fontSize: 'var(--font-size-sm)',
        }}
      >
        [Image Placeholder]
      </div>

      {/* Card Content */}
      <div style={{ padding: 'var(--space-card)' }}>
        <div
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-xs)',
            color: tagColor,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {tag}
        </div>
        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-lg)',
            color: 'var(--charcoal)',
            marginBottom: '12px',
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
            to={linkTo}
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-sm)',
              color: ctaColor,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
