import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#FAF7F2',
        padding: '20px 48px',
        borderBottom: '1px solid #EEEEEE',
        zIndex: 1000,
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Wordmark */}
        <Link
          to="/"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            color: '#1E1E1E',
            letterSpacing: '1px',
            textDecoration: 'none',
          }}
          aria-label="Jesse Lee Despard - Home"
        >
          JESSE LEE DESPARD
        </Link>

        {/* Desktop Nav Links */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '32px', 
            alignItems: 'center' 
          }}
          className="desktop-nav"
        >
          <Link
            to="/work"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#444444',
              textDecoration: 'none',
              borderBottom: isActive('/work') ? '2px solid #1F5364' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            Work
          </Link>
          <Link
            to="/writing"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#444444',
              textDecoration: 'none',
              borderBottom: isActive('/writing') ? '2px solid #1F5364' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            Writing
          </Link>
          <Link
            to="/podcast"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#444444',
              textDecoration: 'none',
              borderBottom: isActive('/podcast') ? '2px solid #1F5364' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            Podcast
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              color: '#444444',
              textDecoration: 'none',
              borderBottom: isActive('/about') ? '2px solid #1F5364' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            About Me
          </Link>
          <Link
            to="/hiring"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#1E1E1E',
              backgroundColor: '#D4A843',
              padding: '8px 18px',
              borderRadius: '6px',
              textDecoration: 'none',
              border: 'none',
            }}
          >
            Hiring?
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#1E1E1E',
          }}
          className="mobile-menu-button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            // Close icon (X)
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            // Hamburger icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '69px', // Height of nav bar
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#FAF7F2',
            padding: '24px 48px',
            display: 'none',
            flexDirection: 'column',
            gap: '8px',
            borderTop: '1px solid #EEEEEE',
          }}
          className="mobile-menu"
          id="mobile-menu"
          role="menu"
        >
          <Link
            to="/work"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: '#444444',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid #EEEEEE',
              borderLeft: isActive('/work') ? '3px solid #1F5364' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            Work
          </Link>
          <Link
            to="/writing"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: '#444444',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid #EEEEEE',
              borderLeft: isActive('/writing') ? '3px solid #1F5364' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            Writing
          </Link>
          <Link
            to="/podcast"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: '#444444',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid #EEEEEE',
              borderLeft: isActive('/podcast') ? '3px solid #1F5364' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            Podcast
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              color: '#444444',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid #EEEEEE',
              borderLeft: isActive('/about') ? '3px solid #1F5364' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            About Me
          </Link>
          <Link
            to="/hiring"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              color: '#1E1E1E',
              backgroundColor: '#D4A843',
              padding: '16px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              border: 'none',
              marginTop: '16px',
              textAlign: 'center',
              display: 'block',
            }}
            role="menuitem"
          >
            Hiring?
          </Link>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        /* Desktop - hide mobile menu button */
        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }

        /* Mobile - show hamburger, hide desktop nav */
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu {
            display: flex !important;
          }
          nav {
            padding: 16px 24px !important;
          }
        }

        /* Hover states for desktop */
        @media (min-width: 769px) {
          .desktop-nav a:hover {
            color: #1E1E1E;
          }
          .desktop-nav a:focus {
            outline: 2px solid #1F5364;
            outline-offset: 4px;
            border-radius: 4px;
          }
        }

        /* Hover states for mobile */
        @media (max-width: 768px) {
          .mobile-menu a:hover {
            background-color: rgba(31, 83, 100, 0.05);
          }
          .mobile-menu a:focus {
            outline: 2px solid #1F5364;
            outline-offset: 2px;
          }
        }

        /* Hamburger button focus state */
        .mobile-menu-button:focus {
          outline: 2px solid #1F5364;
          outline-offset: 4px;
          border-radius: 4px;
        }
      `}</style>
    </nav>
  );
}