interface EyebrowProps {
  children: string;
  color?: string;
  marginBottom?: string;
}

export function Eyebrow({ 
  children, 
  color = 'var(--gold)', 
  marginBottom = 'var(--space-sm)' 
}: EyebrowProps) {
  return (
    <div
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: 'var(--font-size-xs)',
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
