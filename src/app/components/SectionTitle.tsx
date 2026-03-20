interface SectionTitleProps {
  children: string;
  marginBottom?: string;
}

export function SectionTitle({ children, marginBottom = '48px' }: SectionTitleProps) {
  return (
    <h2
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: '32px',
        color: '#1E1E1E',
        marginBottom,
      }}
    >
      {children}
    </h2>
  );
}
