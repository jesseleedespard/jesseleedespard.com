import { Button } from './Button';

interface PodcastPreviewCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export function PodcastPreviewCard({ 
  title, 
  description, 
  buttonText, 
  onButtonClick 
}: PodcastPreviewCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--charcoal)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-section-sm)',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 700,
          fontSize: 'var(--font-size-xl)',
          color: 'var(--white)',
          marginBottom: 'var(--space-sm)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--body)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--hero-subtitle-color-soft)',
          lineHeight: '1.6',
          marginBottom: 'var(--space-card)',
          maxWidth: '700px',
        }}
      >
        {description}
      </p>
      <div className="card-cta-row">
        <Button variant="primary" size="medium" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
