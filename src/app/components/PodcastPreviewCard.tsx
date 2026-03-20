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
        backgroundColor: '#1E1E1E',
        borderRadius: '8px',
        padding: '48px',
      }}
    >
      <h3
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: '24px',
          color: '#FFFFFF',
          marginBottom: '16px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'Lora, serif',
          fontSize: '17px',
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: '1.6',
          marginBottom: '32px',
          maxWidth: '700px',
        }}
      >
        {description}
      </p>
      <Button variant="primary" size="medium" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
}
