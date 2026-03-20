interface EyebrowProps {
  children: string;
  color?: string;
  marginBottom?: string;
}

export function Eyebrow({ 
  children, 
  color = '#D4A843', 
  marginBottom = '20px' 
}: EyebrowProps) {
  return (
    <div
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: '12px',
        color,
        marginBottom,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </div>
  );
}