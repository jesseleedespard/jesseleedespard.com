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
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        borderRadius: '8px',
        padding: '32px',
      }}
    >
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        {/* Episode Number */}
        <div
          style={{
            width: '64px',
            height: '64px',
            flexShrink: 0,
            backgroundColor: '#FAF7F2',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #EEEEEE',
          }}
        >
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              color: '#D4A843',
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
              fontSize: '20px',
              color: '#1E1E1E',
              marginBottom: '12px',
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
              marginBottom: '16px',
            }}
          >
            {description}
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: tag.color,
                  backgroundColor: tag.backgroundColor,
                  border: '1px solid #EEEEEE',
                  borderRadius: '20px',
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