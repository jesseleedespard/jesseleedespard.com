export function ComingSoonBadge() {
  return (
    <>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          backgroundColor: 'var(--gold)',
          border: '1px solid var(--gold)',
          borderRadius: 'var(--radius-pill)',
          padding: '8px 16px',
        }}
      >
        {/* Pulsing Dot */}
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--charcoal)',
            animation: 'pulse 2s infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'var(--font-size-xs)',
            color: 'var(--charcoal)',
            letterSpacing: '0.5px',
          }}
        >
          COMING SOON
        </span>
      </div>
      {/* Add pulsing animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
}
