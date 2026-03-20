import { ReactNode } from 'react';

interface CTAStripProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export function CTAStrip({ title, description, buttonText, onButtonClick }: CTAStripProps) {
  return (
    <section
      style={{
        backgroundColor: '#C4622D',
        padding: '48px',
      }}
    >
      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '32px', 
          flexWrap: 'wrap' 
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '21px',
              color: '#1E1E1E',
              marginBottom: '10px',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '16px',
              color: '#1E1E1E',
              opacity: 0.85,
              lineHeight: '1.5',
            }}
          >
            {description}
          </p>
        </div>
        <button
          onClick={onButtonClick}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            color: '#FFFFFF',
            backgroundColor: '#1E1E1E',
            padding: '14px 32px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
