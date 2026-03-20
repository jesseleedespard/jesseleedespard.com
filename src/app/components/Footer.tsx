import { Link } from 'react-router';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#FAF7F2',
        padding: '48px',
        borderTop: '1px solid #EEEEEE',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto', flexWrap: 'wrap', gap: '24px' }}>
        {/* Name */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            color: '#1E1E1E',
          }}
        >
          Jesse Lee Despard
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link
            to="/work"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#444444',
              textDecoration: 'none',
            }}
          >
            Work
          </Link>
          <Link
            to="/writing"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#444444',
              textDecoration: 'none',
            }}
          >
            Writing
          </Link>
          <Link
            to="/podcast"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#444444',
              textDecoration: 'none',
            }}
          >
            Podcast
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#444444',
              textDecoration: 'none',
            }}
          >
            About
          </Link>
        </div>

        {/* Copyright */}
        <div
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: '#888888',
          }}
        >
          © 2026 Jesse Lee Despard
        </div>
      </div>
    </footer>
  );
}