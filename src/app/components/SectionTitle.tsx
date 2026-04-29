interface SectionTitleProps {
  children: string;
  marginBottom?: string;
}

export function SectionTitle({ children, marginBottom = 'var(--space-section-mobile)' }: SectionTitleProps) {
  return (
    <h2
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: 'var(--font-size-2xl)',
        color: 'var(--charcoal)',
        marginBottom,
      }}
    >
      {children}
    </h2>
  );
}
