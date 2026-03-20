interface CaseStudyCardProps {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
}

export function CaseStudyCard({ tag, title, description, tagColor = '#1F5364' }: CaseStudyCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EEEEEE',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Placeholder Image */}
      <div
        style={{
          width: '100%',
          height: '240px',
          backgroundColor: '#CCCCCC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#888888',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '14px',
        }}
      >
        [Image Placeholder]
      </div>

      {/* Card Content */}
      <div style={{ padding: '28px' }}>
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '12px',
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
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '19px',
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
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}