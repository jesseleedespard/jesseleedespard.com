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
        backgroundColor: 'var(--cream)',
        padding: '20px 48px',
        borderBottom: '1px solid var(--light-gray)',
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
            fontFamily: 'var(--display)',
            fontWeight: 700,
            fontSize: 'var(--font-size-sm)',
            color: 'var(--charcoal)',
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
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              borderBottom: isActive('/work') ? '2px solid var(--teal-dark)' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            Work
          </Link>
          <Link
            to="/writing"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              borderBottom: isActive('/writing') ? '2px solid var(--teal-dark)' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            Writing
          </Link>
          <Link
            to="/podcast"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              borderBottom: isActive('/podcast') ? '2px solid var(--teal-dark)' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            Podcast
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              borderBottom: isActive('/about') ? '2px solid var(--teal-dark)' : '2px solid transparent',
              paddingBottom: '4px',
            }}
          >
            About Me
          </Link>
          <Link
            to="/hiring"
            className="nav-cta-gold"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--charcoal)',
              padding: '8px 18px',
              borderRadius: 'var(--radius-sm)',
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
            color: 'var(--charcoal)',
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
            backgroundColor: 'var(--cream)',
            padding: '24px 48px',
            display: 'none',
            flexDirection: 'column',
            gap: '8px',
            borderTop: '1px solid var(--light-gray)',
          }}
          className="mobile-menu"
          id="mobile-menu"
          role="menu"
        >
          <Link
            to="/work"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-base)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid var(--light-gray)',
              borderLeft: isActive('/work') ? '3px solid var(--teal-dark)' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            Work
          </Link>
          <Link
            to="/writing"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-base)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid var(--light-gray)',
              borderLeft: isActive('/writing') ? '3px solid var(--teal-dark)' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            Writing
          </Link>
          <Link
            to="/podcast"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-base)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid var(--light-gray)',
              borderLeft: isActive('/podcast') ? '3px solid var(--teal-dark)' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            Podcast
          </Link>
          <Link
            to="/about"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontSize: 'var(--font-size-base)',
              color: 'var(--dark-gray)',
              textDecoration: 'none',
              padding: '16px 0',
              borderBottom: '1px solid var(--light-gray)',
              borderLeft: isActive('/about') ? '3px solid var(--teal-dark)' : '3px solid transparent',
              paddingLeft: '16px',
            }}
            role="menuitem"
          >
            About Me
          </Link>
          <Link
            to="/hiring"
            className="nav-cta-gold"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-base)',
              color: 'var(--charcoal)',
              padding: '16px 24px',
              borderRadius: 'var(--radius-sm)',
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
          .desktop-nav a:not(.nav-cta-gold):hover {
            color: var(--charcoal);
            text-decoration: underline !important;
            text-decoration-color: var(--teal-dark);
            text-underline-offset: 3px;
          }
          .desktop-nav a:focus {
            outline: var(--focus-ring-width) solid var(--focus-ring-color);
            outline-offset: var(--focus-ring-offset);
            border-radius: 4px;
          }
        }

        /* Hover states for mobile */
        @media (max-width: 768px) {
          .mobile-menu a:hover {
            background-color: color-mix(in srgb, var(--teal-dark) 5%, transparent);
          }
          .mobile-menu a:focus {
            outline: var(--focus-ring-width) solid var(--focus-ring-color);
            outline-offset: var(--focus-ring-offset);
          }
        }

        /* Hamburger button focus state */
        .mobile-menu-button:focus {
          outline: var(--focus-ring-width) solid var(--focus-ring-color);
          outline-offset: var(--focus-ring-offset);
          border-radius: 4px;
        }

        /* Gold CTA — Hiring? button (desktop + mobile) */
        .nav-cta-gold {
          background-color: var(--gold);
          transition: background-color 0.2s ease;
        }

        .nav-cta-gold:hover {
          background-color: var(--gold-hover);
        }

        .nav-cta-gold:focus {
          outline: var(--focus-ring-width) solid var(--focus-ring-color);
          outline-offset: var(--focus-ring-offset);
        }
      `}</style>
    </nav>
  );
}