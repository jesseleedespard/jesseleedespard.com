export function ComingSoonBadge() {
  return (
    <>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#D4A843',
          border: '1px solid #D4A843',
          borderRadius: '20px',
          padding: '8px 16px',
        }}
      >
        {/* Pulsing Dot */}
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#1E1E1E',
            animation: 'pulse 2s infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '12px',
            color: '#1E1E1E',
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