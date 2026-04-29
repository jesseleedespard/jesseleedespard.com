import { ReactNode } from 'react';

interface Tag {
  label: string;
  color: string;
  backgroundColor: string;
}

interface EpisodeCardProps {
  episodeNumber: string;
  title: string;
  description: string;
  tags: Tag[];
}

export function EpisodeCard({ episodeNumber, title, description, tags }: EpisodeCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        border: '1px solid var(--light-gray)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-card)',
      }}
    >
      <div style={{ display: 'flex', gap: 'var(--space-card-mobile)', alignItems: 'flex-start' }}>
        {/* Episode Number */}
        <div
          style={{
            width: '64px',
            height: '64px',
            flexShrink: 0,
            backgroundColor: 'var(--cream)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--light-gray)',
          }}
        >
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xl)',
              color: 'var(--gold)',
            }}
          >
            {episodeNumber}
          </span>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
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
              fontFamily: 'Lora, serif',
              fontSize: 'var(--font-size-base)',
              color: 'var(--dark-gray)',
              lineHeight: '1.6',
              marginBottom: '16px',
            }}
          >
            {description}
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-xs)',
                  color: tag.color,
                  backgroundColor: tag.backgroundColor,
                  border: '1px solid var(--light-gray)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '4px 12px',
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
