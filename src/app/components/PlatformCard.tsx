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
        backgroundColor: '#FAF7F2',
        border: '1px solid #EEEEEE',
        borderRadius: '8px',
        padding: '32px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '80px',
          height: '80px',
          backgroundColor: iconBackgroundColor,
          borderRadius: '16px',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: iconColor,
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: '32px',
        }}
      >
        {icon}
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
        {name}
      </h3>
      <button
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700,
          fontSize: '14px',
          color: '#1F5364',
          backgroundColor: 'transparent',
          padding: '10px 24px',
          borderRadius: '6px',
          border: '2px solid #1F5364',
          cursor: 'pointer',
        }}
      >
        Subscribe
      </button>
    </div>
  );
}