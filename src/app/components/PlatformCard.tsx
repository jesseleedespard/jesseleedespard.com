interface PlatformCardProps {
  name: string;
  icon: string;
  iconBackgroundColor: string;
  iconColor: string;
}

export function PlatformCard({ name, icon, iconBackgroundColor, iconColor }: PlatformCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--cream)',
        border: '1px solid var(--light-gray)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-card)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '80px',
          height: '80px',
          backgroundColor: iconBackgroundColor,
          borderRadius: '16px',
          margin: '0 auto var(--space-sm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: iconColor,
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: 'var(--font-size-2xl)',
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: 'var(--font-size-lg)',
          color: 'var(--charcoal)',
          marginBottom: '12px',
        }}
      >
        {name}
      </h3>
      <button
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: 'var(--font-size-sm)',
          color: 'var(--teal-dark)',
          backgroundColor: 'transparent',
          padding: 'var(--space-sm) var(--space-card)',
          borderRadius: 'var(--radius-sm)',
          border: '2px solid var(--teal-dark)',
          cursor: 'pointer',
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
