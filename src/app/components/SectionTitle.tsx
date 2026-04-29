interface SectionTitleProps {
  children: string;
  marginBottom?: string;
}

export function SectionTitle({ children, marginBottom = 'var(--space-section-sm)' }: SectionTitleProps) {
  return (
    <h2
      style={{
        fontFamily: 'var(--display)',
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
