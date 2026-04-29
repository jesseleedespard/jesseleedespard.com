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
        padding: '48px',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 700,
          fontSize: 'var(--font-size-xl)',
          color: 'var(--white)',
          marginBottom: '16px',
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
          marginBottom: '32px',
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
