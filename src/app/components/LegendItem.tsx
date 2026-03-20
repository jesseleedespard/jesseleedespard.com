interface LegendItemProps {
  color: string;
  label: string;
}

export function LegendItem({ color, label }: LegendItemProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div 
        style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '50%', 
          backgroundColor: color 
        }} 
      />
      <span
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          color: '#444444',
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  );
}
