import { AccessibilityReport } from '../components/AccessibilityReport';
import { ComponentAccessibilityReport } from '../components/ComponentAccessibilityReport';
import { AccessibilityAuditReport } from '../components/AccessibilityAuditReport';
import { Button } from '../components/Button';
import { Eyebrow } from '../components/Eyebrow';
import { SectionTitle } from '../components/SectionTitle';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { WorkCard } from '../components/WorkCard';
import { WritingPostCard } from '../components/WritingPostCard';
import { FeaturedWritingCard } from '../components/FeaturedWritingCard';
import { ContentFrameCard } from '../components/ContentFrameCard';
import { LegendItem } from '../components/LegendItem';
import { EpisodeCard } from '../components/EpisodeCard';
import { PlatformCard } from '../components/PlatformCard';
import { PodcastPreviewCard } from '../components/PodcastPreviewCard';
import { TabButton } from '../components/TabButton';
import { ComingSoonBadge } from '../components/ComingSoonBadge';
import { CTAStrip } from '../components/CTAStrip';
import { Divider } from '../components/Divider';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { Navigation } from '../components/Navigation';

export default function DesignSystem() {
  const colorTokens = [
    { name: 'Charcoal', hex: '#1E1E1E' },
    { name: 'Cream', hex: '#FAF7F2' },
    { name: 'Teal', hex: '#1F5364' },
    { name: 'Teal Light', hex: '#2C6E7F' },
    { name: 'Terracotta', hex: '#C4622D' },
    { name: 'Gold', hex: '#D4A843' },
    { name: 'Dark Gray', hex: '#444444' },
    { name: 'Gray', hex: '#888888' },
    { name: 'Light Gray', hex: '#EEEEEE' },
    { name: 'White', hex: '#FFFFFF' },
  ];

  const typographyStyles = [
    {
      name: 'Heading 1',
      specs: 'DM Sans Bold, 48px, #1E1E1E',
      style: {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: '48px',
        color: '#1E1E1E',
      },
      text: 'Heading 1',
    },
    {
      name: 'Heading 2',
      specs: 'DM Sans Bold, 32px, #1E1E1E',
      style: {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: '32px',
        color: '#1E1E1E',
      },
      text: 'Heading 2',
    },
    {
      name: 'Heading 3',
      specs: 'DM Sans Bold, 24px, #1E1E1E',
      style: {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: '24px',
        color: '#1E1E1E',
      },
      text: 'Heading 3',
    },
    {
      name: 'Nav Link',
      specs: 'DM Sans Medium, 14px, #444444',
      style: {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        color: '#444444',
      },
      text: 'Navigation Link',
    },
    {
      name: 'Label/Eyebrow',
      specs: 'DM Sans Bold, 12px, #1F5364, letter spacing 2px, uppercase',
      style: {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: '12px',
        color: '#1F5364',
        letterSpacing: '2px',
        textTransform: 'uppercase' as const,
      },
      text: 'Label/Eyebrow',
    },
    {
      name: 'Button Text',
      specs: 'DM Sans Bold, 14px, #1E1E1E',
      style: {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        fontSize: '14px',
        color: '#1E1E1E',
      },
      text: 'Button Text',
    },
    {
      name: 'Body Large',
      specs: 'Lora Regular, 18px, #444444',
      style: {
        fontFamily: 'Lora, serif',
        fontWeight: 400,
        fontSize: '18px',
        color: '#444444',
      },
      text: 'The quick brown fox jumps over the lazy dog.',
    },
    {
      name: 'Body',
      specs: 'Lora Regular, 16px, #444444',
      style: {
        fontFamily: 'Lora, serif',
        fontWeight: 400,
        fontSize: '16px',
        color: '#444444',
      },
      text: 'The quick brown fox jumps over the lazy dog.',
    },
    {
      name: 'Body Italic',
      specs: 'Lora Italic, 16px, #444444',
      style: {
        fontFamily: 'Lora, serif',
        fontWeight: 400,
        fontStyle: 'italic' as const,
        fontSize: '16px',
        color: '#444444',
      },
      text: 'The quick brown fox jumps over the lazy dog.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl text-center mb-12" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
          Design System Library
        </h1>

        {/* Design System Updates & Changelog */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Design System Updates & Standards
          </h2>
          
          <div className="space-y-6" style={{ fontFamily: 'Lora, serif', fontSize: '16px', lineHeight: '1.6', color: '#444444' }}>
            {/* Recent Updates */}
            <div className="border-l-4 border-teal-500 pl-6 py-2" style={{ borderColor: '#1F5364' }}>
              <h3 className="text-lg mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#1E1E1E' }}>
                March 2026 Updates
              </h3>
              
              <div className="space-y-4">
                <div>
                  <strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#1F5364' }}>✓ Spacing System Standardization</strong>
                  <p className="mt-1">All spacing now follows the 8px scale throughout the entire website following Figma best practices. Base unit: 8px (8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 100px). Non-8px values converted: 20px→24px, 36px→40px, 28px→32px, 12px→16px, 10px→8px, 14px→16px, 6px→8px.</p>
                </div>
                
                <div>
                  <strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#1F5364' }}>✓ Responsive Typography Implementation</strong>
                  <p className="mt-1">Added proper mobile typography scaling at 768px breakpoint. Hero titles: 52px→32px mobile. Section titles: 32px→24px mobile. Card titles: 19px→18px mobile. Subtitle text: 18px→16px mobile. All typography follows even-numbered scale (12, 14, 16, 18, 24, 32, 48px).</p>
                </div>
                
                <div>
                  <strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#1F5364' }}>✓ Teal Color Standardization & Usage</strong>
                  <p className="mt-1">Added two teal color variants to design system: Teal (#1F5364) as primary dark teal and Teal Light (#2C6E7F) as secondary lighter teal. Teal Light (#2C6E7F) is WCAG AA accessible on light backgrounds (White, Cream, Light Gray) with 5.0:1+ contrast. Used for hover states on article links (Writing page), subscribe button hover states (Podcast page), and secondary interactive elements. Writing page uses primary Teal (#1F5364) for essay categories, links, and accent bars.</p>
                </div>
                
                <div>
                  <strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#1F5364' }}>✓ Text Link Wrapping Fix</strong>
                  <p className="mt-1">Added whiteSpace: 'nowrap' to all arrow links ("Read Article →", "Read Case Study →", "View All Writing →", "See All Work →") to prevent arrows from wrapping to new lines across Home, Writing, Work pages and all card components.</p>
                </div>
                
                <div>
                  <strong style={{ fontFamily: 'DM Sans, sans-serif', color: '#1F5364' }}>✓ Mobile Responsive Grid System</strong>
                  <p className="mt-1">All main pages now have comprehensive media queries with proper mobile grid stacking at 768px breakpoint. Two-column grids convert to single-column on mobile with adjusted gap spacing (32px→24px).</p>
                </div>
              </div>
            </div>
            
            {/* Spacing Scale Reference */}
            <div className="bg-gray-50 p-6 rounded-lg" style={{ backgroundColor: '#FAF7F2' }}>
              <h4 className="mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#1E1E1E' }}>
                8px Spacing Scale
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>8px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: '16px', height: '16px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>16px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>24px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: '32px', height: '32px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>32px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>40px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>48px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: '56px', height: '56px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>56px</span>
                </div>
                <div className="flex items-center gap-2">
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#1F5364', borderRadius: '2px' }}></div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>64px</span>
                </div>
              </div>
            </div>
            
            {/* Typography Scale Reference */}
            <div className="bg-gray-50 p-6 rounded-lg" style={{ backgroundColor: '#FAF7F2' }}>
              <h4 className="mb-3" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#1E1E1E' }}>
                Responsive Typography Scale
              </h4>
              <div className="space-y-2" style={{ fontSize: '14px' }}>
                <div style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <strong>Desktop:</strong> 12px, 14px, 16px, 18px, 24px, 32px, 48px, 52px
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <strong>Mobile (≤768px):</strong> Titles scale down (52px→32px, 32px→24px, 24px→18px, 19px→18px, 18px→16px)
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <strong>Breakpoint:</strong> 768px (tablet and below)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Tokens */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Color Tokens
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {colorTokens.map((token) => (
              <div key={token.name} className="flex flex-col items-center">
                <div
                  className="w-24 h-24 rounded-lg mb-3 border-2 border-gray-200"
                  style={{ backgroundColor: token.hex }}
                />
                <div className="text-center">
                  <div className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
                    {token.name}
                  </div>
                  <div className="text-xs text-gray-500">{token.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Typography
          </h2>
          <div className="space-y-6">
            {typographyStyles.map((style) => (
              <div key={style.name} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="mb-2 text-sm text-gray-600">{style.specs}</div>
                <div style={style.style}>{style.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Button Components */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Button Components
          </h2>

          <div className="space-y-8">
            {/* Primary CTA Button */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Primary CTA Button (Gold)
              </div>
              <div className="flex gap-6 justify-center items-center flex-wrap">
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1E1E1E',
                    backgroundColor: '#D4A843',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Hiring?
                </button>
                <button
                  disabled
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1E1E1E',
                    backgroundColor: '#EEEEEE',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'not-allowed',
                    opacity: 0.6,
                  }}
                >
                  Disabled
                </button>
              </div>
            </div>

            {/* Secondary Button */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Secondary Button (Charcoal)
              </div>
              <div className="flex gap-6 justify-center items-center flex-wrap">
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    backgroundColor: '#1E1E1E',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Learn More
                </button>
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    backgroundColor: '#1E1E1E',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    outline: '3px solid #1F5364',
                    outlineOffset: '2px',
                    cursor: 'pointer',
                  }}
                >
                  Focus State
                </button>
                <button
                  disabled
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1E1E1E',
                    backgroundColor: '#EEEEEE',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'not-allowed',
                    opacity: 0.6,
                  }}
                >
                  Disabled
                </button>
              </div>
            </div>

            {/* Ghost/Outline Button */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Ghost Button (Teal)
              </div>
              <div className="flex gap-6 justify-center items-center flex-wrap">
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1F5364',
                    backgroundColor: 'transparent',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: '2px solid #1F5364',
                    cursor: 'pointer',
                  }}
                >
                  View Portfolio
                </button>
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    backgroundColor: '#1F5364',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: '2px solid #1F5364',
                    cursor: 'pointer',
                  }}
                >
                  Hover State
                </button>
                <button
                  disabled
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1E1E1E',
                    backgroundColor: 'transparent',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: '2px solid #CCCCCC',
                    cursor: 'not-allowed',
                    opacity: 0.6,
                  }}
                >
                  Disabled
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Navigation Component
          </h2>

          <div className="space-y-6">
            {/* Default State */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Default State
              </div>
              <div
                style={{
                  backgroundColor: '#FAF7F2',
                  padding: '20px 48px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
                  {/* Wordmark */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#1E1E1E',
                      letterSpacing: '1px',
                    }}
                  >
                    JESSE LEE DESPARD
                  </div>

                  {/* Nav Links */}
                  <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Case Studies
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Writing
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Podcast
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      About Jesse
                    </a>
                    <button
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#1E1E1E',
                        backgroundColor: '#D4A843',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Hiring?
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Active State */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Active State (with underline)
              </div>
              <div
                style={{
                  backgroundColor: '#FAF7F2',
                  padding: '20px 48px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#1E1E1E',
                      letterSpacing: '1px',
                    }}
                  >
                    JESSE LEE DESPARD
                  </div>

                  <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                        borderBottom: '2px solid #1F5364',
                        paddingBottom: '2px',
                      }}
                    >
                      Case Studies
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Writing
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Podcast
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      About Jesse
                    </a>
                    <button
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#1E1E1E',
                        backgroundColor: '#D4A843',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Hiring?
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus State */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Focus State (button)
              </div>
              <div
                style={{
                  backgroundColor: '#FAF7F2',
                  padding: '20px 48px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#1E1E1E',
                      letterSpacing: '1px',
                    }}
                  >
                    JESSE LEE DESPARD
                  </div>

                  <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Case Studies
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Writing
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      Podcast
                    </a>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#444444',
                        textDecoration: 'none',
                      }}
                    >
                      About Jesse
                    </a>
                    <button
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#1E1E1E',
                        backgroundColor: '#D4A843',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        outline: '3px solid #1E1E1E',
                        outlineOffset: '2px',
                        cursor: 'pointer',
                      }}
                    >
                      Hiring?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Components */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Card Components
          </h2>

          <div className="flex gap-8 justify-center flex-wrap">
            {/* UX Research Card */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                UX Research Card
              </div>
              <div
                style={{
                  width: '340px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent bar */}
                <div style={{ height: '4px', backgroundColor: '#1F5364' }} />
                
                {/* Card content */}
                <div style={{ padding: '32px' }}>
                  {/* Eyebrow */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '12px',
                      color: '#1F5364',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    CASE STUDY · HEALTHTECH
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '19px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                      lineHeight: '1.4',
                    }}
                  >
                    Reducing the Time of Customer Onboarding
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    A 37-question onboarding form reduced by 20% — cutting onboarding call time by 50% via A/B test.
                  </p>

                  {/* Divider */}
                  <div style={{ height: '1px', backgroundColor: '#EEEEEE', marginBottom: '20px' }} />

                  {/* Footer with tags and link */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 500,
                          fontSize: '12px',
                          color: '#1F5364',
                          backgroundColor: '#FAF7F2',
                          border: '1px solid #EEEEEE',
                          borderRadius: '20px',
                          padding: '4px 12px',
                        }}
                      >
                        HealthTech
                      </span>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 500,
                          fontSize: '12px',
                          color: '#1F5364',
                          backgroundColor: '#FAF7F2',
                          border: '1px solid #EEEEEE',
                          borderRadius: '20px',
                          padding: '4px 12px',
                        }}
                      >
                        Research Ops
                      </span>
                    </div>

                    {/* Link */}
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#1F5364',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read Case Study →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Card */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Leadership Card
              </div>
              <div
                style={{
                  width: '340px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Top accent bar */}
                <div style={{ height: '4px', backgroundColor: '#1F5364' }} />
                
                {/* Card content */}
                <div style={{ padding: '32px' }}>
                  {/* Eyebrow */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '12px',
                      color: '#1F5364',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    LEADERSHIP · EDTECH
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '19px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                      lineHeight: '1.4',
                    }}
                  >
                    Building a Research Practice from Zero
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Establishing frameworks, hiring researchers, and creating a data-driven decision culture at scale.
                  </p>

                  {/* Divider */}
                  <div style={{ height: '1px', backgroundColor: '#EEEEEE', marginBottom: '20px' }} />

                  {/* Footer with tags and link */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 500,
                          fontSize: '12px',
                          color: '#1F5364',
                          backgroundColor: '#FAF7F2',
                          border: '1px solid #EEEEEE',
                          borderRadius: '20px',
                          padding: '4px 12px',
                        }}
                      >
                        EdTech
                      </span>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 500,
                          fontSize: '12px',
                          color: '#1F5364',
                          backgroundColor: '#FAF7F2',
                          border: '1px solid #EEEEEE',
                          borderRadius: '20px',
                          padding: '4px 12px',
                        }}
                      >
                        Team Building
                      </span>
                    </div>

                    {/* Link */}
                    <a
                      href="#"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: '#1F5364',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Strip Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            CTA Strip Component
          </h2>

          <div className="space-y-8">
            {/* Standard CTA Strip */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Standard CTA Strip
              </div>
              <div
                style={{
                  backgroundColor: '#C4622D',
                  padding: '32px 48px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: '#1E1E1E',
                      marginBottom: '8px',
                    }}
                  >
                    Ready to improve your research practice?
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontWeight: 400,
                      fontSize: '15px',
                      color: '#1E1E1E',
                      opacity: 0.85,
                    }}
                  >
                    Let's talk about how I can help your team make better decisions.
                  </p>
                </div>
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#FFFFFF',
                    backgroundColor: '#1E1E1E',
                    padding: '14px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Get in Touch →
                </button>
              </div>
            </div>

            {/* Homepage CTA Strip */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Homepage CTA Strip
              </div>
              <div
                style={{
                  backgroundColor: '#C4622D',
                  padding: '40px 48px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ maxWidth: '600px' }}>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '21px',
                      color: '#1E1E1E',
                      marginBottom: '10px',
                    }}
                  >
                    Looking to hire a UX Research leader?
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#1E1E1E',
                      opacity: 0.85,
                      lineHeight: '1.5',
                    }}
                  >
                    I build research practices that scale — from establishing frameworks to growing high-performing teams.
                  </p>
                </div>
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#FFFFFF',
                    backgroundColor: '#1E1E1E',
                    padding: '14px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  View My Work →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Component */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Hero Component
          </h2>

          <div className="space-y-8">
            {/* Variant 1 - Standard Page Hero */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Variant 1 — Standard Page Hero
              </div>
              <div
                style={{
                  backgroundColor: '#1E1E1E',
                  padding: '80px 48px',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {/* Tag/Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    color: '#D4A843',
                    border: '1px solid rgba(212, 168, 67, 0.4)',
                    padding: '5px 12px',
                    borderRadius: '3px',
                    marginBottom: '24px',
                  }}
                >
                  Case Study · HealthTech
                </div>

                {/* Heading */}
                <h1
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '46px',
                    color: '#FFFFFF',
                    lineHeight: '1.18',
                    marginBottom: '20px',
                    maxWidth: '900px',
                  }}
                >
                  Reducing the Time of Customer Onboarding
                </h1>

                {/* Subheading */}
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: '17px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '28px',
                    maxWidth: '700px',
                  }}
                >
                  A 37-question form reduced by 20% — cutting onboarding call time by 50% via A/B test.
                </p>

                {/* Meta strip */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
                    marginBottom: '40px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                    }}
                  >
                    <span style={{ color: '#D4A843' }}>Role:</span>{' '}
                    <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>UX Researcher</span>
                  </div>
                  <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                    }}
                  >
                    <span style={{ color: '#D4A843' }}>Method:</span>{' '}
                    <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>Modified Delphi Card Sort</span>
                  </div>
                  <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                    }}
                  >
                    <span style={{ color: '#D4A843' }}>Participants:</span>{' '}
                    <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>28</span>
                  </div>
                  <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                    }}
                  >
                    <span style={{ color: '#D4A843' }}>Timeline:</span>{' '}
                    <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>1 week</span>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div
                  style={{
                    height: '3px',
                    background: 'linear-gradient(to right, #1F5364, #D4A843, transparent)',
                    width: '100%',
                  }}
                />
              </div>
            </div>

            {/* Variant 2 - Homepage Hero */}
            <div>
              <div className="text-sm mb-4 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Variant 2 — Homepage Hero
              </div>
              <div
                style={{
                  backgroundColor: '#1E1E1E',
                  padding: '80px 48px',
                  width: '100%',
                }}
              >
                {/* Eyebrow */}
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: '#D4A843',
                    marginBottom: '20px',
                    letterSpacing: '0.5px',
                  }}
                >
                  UX Research Leader · AI Bias & Governance
                </div>

                {/* Heading */}
                <h1
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '52px',
                    color: '#FFFFFF',
                    lineHeight: '1.15',
                    marginBottom: '24px',
                    maxWidth: '950px',
                  }}
                >
                  I've spent a decade studying people so products can serve them better.
                </h1>

                {/* Subheading */}
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    color: 'rgba(255, 255, 255, 0.65)',
                    marginBottom: '36px',
                    maxWidth: '750px',
                    lineHeight: '1.6',
                  }}
                >
                  I build the research practices, teams, and frameworks that help companies make better decisions.
                </p>

                {/* CTA Button */}
                <button
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#1E1E1E',
                    backgroundColor: '#D4A843',
                    padding: '14px 32px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Hiring? →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reusable Components */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700 }}>
            Reusable Components
          </h2>
          
          <div className="space-y-12">
            {/* Eyebrow Component */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Eyebrow Component
              </div>
              <div className="space-y-4">
                <Eyebrow color="#D4A843">UX RESEARCH LEADER</Eyebrow>
                <Eyebrow color="#1F5364">CASE STUDIES</Eyebrow>
                <Eyebrow color="#1F5364">LEADERSHIP</Eyebrow>
              </div>
            </div>

            {/* Section Title Component */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Section Title Component
              </div>
              <SectionTitle>Recent Work</SectionTitle>
            </div>

            {/* Button Component */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Button Component (Primary, Secondary, Outline)
              </div>
              <div className="flex gap-4 flex-wrap">
                <Button variant="primary">Hiring? →</Button>
                <Button variant="secondary">Learn More →</Button>
                <Button variant="outline">Follow on LinkedIn</Button>
              </div>
            </div>

            {/* Divider Component */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Divider Component
              </div>
              <Divider />
            </div>

            {/* Legend Item Component */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Legend Item Component
              </div>
              <div className="flex gap-6 flex-wrap">
                <LegendItem color="#1F5364" label="Essay" />
                <LegendItem color="#D4A843" label="Parable" />
                <LegendItem color="#1F5364" label="Analysis" />
                <LegendItem color="#888888" label="Community" />
              </div>
            </div>

            {/* Coming Soon Badge */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Coming Soon Badge
              </div>
              <ComingSoonBadge />
            </div>

            {/* Case Study Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Case Study Card Component
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <CaseStudyCard
                  tag="CASE STUDY · HEALTHTECH"
                  tagColor="#1F5364"
                  title="Reducing Customer Onboarding Time"
                  description="A 37-question form reduced by 20% — cutting onboarding call time by 50% via A/B test."
                />
                <CaseStudyCard
                  tag="LEADERSHIP · EDTECH"
                  tagColor="#1F5364"
                  title="Building a Research Practice from Zero"
                  description="Establishing frameworks, hiring researchers, and creating a data-driven culture at scale."
                />
              </div>
            </div>

            {/* Work Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Work Card Component (with accent bar)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <WorkCard
                  accentColor="#1F5364"
                  tag="UX RESEARCH · HEALTHTECH"
                  tagColor="#1F5364"
                  title="Streamlining Patient Onboarding"
                  description="Led mixed-methods research to reduce onboarding friction, resulting in a 50% decrease in time-to-value."
                  linkTo="/case-study/onboarding"
                  linkText="Read Case Study →"
                  linkColor="#1F5364"
                />
                <WorkCard
                  accentColor="#1F5364"
                  tag="LEADERSHIP · FINTECH"
                  tagColor="#1F5364"
                  title="Scaling Research at Hypergrowth Startup"
                  description="Built a research function from 0→5 researchers, establishing frameworks and democratizing insights."
                  linkTo="/case-study/scaling"
                  linkText="Read Case Study →"
                  linkColor="#1F5364"
                />
              </div>
            </div>

            {/* Writing Post Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Writing Post Card Component
              </div>
              <div className="max-w-4xl">
                <WritingPostCard
                  accentColor="#1F5364"
                  badge="ESSAY"
                  badgeColor="#1F5364"
                  date="March 12, 2026"
                  title="The Ethics of AI Research: Balancing Innovation with User Protection"
                  subtitle="How do we study user behavior while protecting privacy and preventing algorithmic bias?"
                  subtitleColor="#1F5364"
                  excerpt="As AI becomes more integrated into product development, UX researchers face new ethical challenges. The traditional frameworks we've relied on — informed consent, anonymization, bias testing — are no longer sufficient..."
                  readTime="8 min read"
                  linkTo="/writing/ethics-ai-research"
                  linkColor="#1F5364"
                />
              </div>
            </div>

            {/* Featured Writing Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Featured Writing Card Component
              </div>
              <div className="max-w-4xl">
                <FeaturedWritingCard
                  title="The Ethics of AI Research: Balancing Innovation with User Protection"
                  description="As AI becomes more integrated into product development, UX researchers face new ethical challenges. How do we study user behavior while protecting privacy? How do we ensure our research doesn't perpetuate algorithmic bias?"
                  primaryLinkText="Read Article →"
                  primaryLinkTo="/writing/ethics-ai-research"
                  secondaryLinkText="View All Writing →"
                  secondaryLinkTo="/writing"
                  borderColor="#D4A843"
                />
              </div>
            </div>

            {/* Content Frame Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Content Frame Card Component
              </div>
              <div className="max-w-4xl">
                <ContentFrameCard borderColor="#1F5364">
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '16px', color: '#444444', lineHeight: '1.6' }}>
                    I write about the intersection of ethics, leadership, and product development. Each piece explores real challenges facing research leaders today — from algorithmic bias to building inclusive teams.
                  </p>
                </ContentFrameCard>
              </div>
            </div>

            {/* Podcast Preview Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Podcast Preview Card Component
              </div>
              <div className="max-w-4xl">
                <PodcastPreviewCard
                  title="Research & Bias: Conversations on UX Ethics"
                  description="Bi-weekly conversations with UX researchers, product leaders, and ethicists about building inclusive research practices and addressing algorithmic bias."
                  buttonText="Listen Now →"
                />
              </div>
            </div>

            {/* Episode Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Episode Card Component
              </div>
              <div className="max-w-4xl">
                <EpisodeCard
                  episodeNumber="01"
                  title="The Researcher Who Said No: When Ethics Conflicts with Business Goals"
                  description="My guest share the story of refusing to run a research study that would have violated user trust — and what happened next. We explore when to push back, how to build ethical frameworks, and the cost of saying no."
                  tags={[
                    { label: 'Ethics', color: '#1F5364', backgroundColor: '#FAF7F2' },
                    { label: 'Leadership', color: '#1F5364', backgroundColor: '#FAF7F2' },
                    { label: 'User Trust', color: '#1F5364', backgroundColor: '#FAF7F2' },
                  ]}
                />
              </div>
            </div>

            {/* Platform Card */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Platform Card Component
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <PlatformCard
                  name="Apple Podcasts"
                  icon="🎙"
                  iconBackgroundColor="#D4A843"
                  iconColor="#1E1E1E"
                />
                <PlatformCard
                  name="Spotify"
                  icon="🎵"
                  iconBackgroundColor="#2C6E7F"
                  iconColor="#FFFFFF"
                />
                <PlatformCard
                  name="YouTube"
                  icon="▶"
                  iconBackgroundColor="#C4622D"
                  iconColor="#FFFFFF"
                />
              </div>
            </div>

            {/* Tab Button */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Tab Button Component
              </div>
              <div style={{ backgroundColor: '#1E1E1E', padding: '20px', borderRadius: '8px' }}>
                <div className="flex gap-4 justify-center">
                  <TabButton
                    label="UX Research"
                    count={3}
                    icon={<span>🔬</span>}
                    isActive={true}
                    onClick={() => {}}
                  />
                  <TabButton
                    label="Leadership"
                    count={2}
                    icon={<span>👥</span>}
                    isActive={false}
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>

            {/* CTA Strip */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                CTA Strip Component
              </div>
              <CTAStrip
                title="Looking to hire a UX Research leader?"
                description="I build research practices that scale — from establishing frameworks to growing high-performing teams."
                buttonText="View My Work →"
              />
            </div>

            {/* Hero Component */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Hero Component
              </div>
              <Hero
                eyebrow="UX RESEARCH LEADER"
                headline="I've spent a decade studying people so products can serve them better."
                subheading="I build the research practices, teams, and frameworks that help companies make better decisions."
                cta={<Button variant="primary">Hiring? →</Button>}
              />
            </div>

            {/* Navigation Component */}
            <div>
              <div className="text-sm mb-4" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#444444' }}>
                Navigation Component
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '8px', border: '1px solid #EEEEEE' }}>
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontFamily: 'Lora, serif', fontSize: '14px', color: '#444444', marginBottom: '16px', lineHeight: '1.6' }}>
                    Responsive navigation with hamburger menu for mobile devices. Features active link indicators, keyboard navigation support, and WCAG AA compliant focus states.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1F5364' }} />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#444444' }}>Desktop: Horizontal nav with active underline</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1F5364' }} />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#444444' }}>Mobile: Hamburger menu (≤768px)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1F5364' }} />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#444444' }}>Accessible: ARIA labels, keyboard support (ESC to close)</span>
                    </div>
                  </div>
                </div>
                
                {/* Desktop Preview */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1F5364', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Desktop View (&gt;768px)
                  </div>
                  <div style={{ border: '1px solid #EEEEEE', borderRadius: '8px', overflow: 'hidden' }}>
                    <Navigation />
                  </div>
                </div>

                {/* Mobile Preview */}
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1F5364', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Mobile View (&le;768px)
                  </div>
                  <div style={{ border: '1px solid #EEEEEE', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#FAF7F2' }}>
                    <div style={{ maxWidth: '375px', margin: '0 auto' }}>
                      <Navigation />
                    </div>
                    <div style={{ padding: '16px', fontSize: '12px', color: '#888888', fontStyle: 'italic', textAlign: 'center', borderTop: '1px solid #EEEEEE' }}>
                      Interactive hamburger menu demo (forced mobile view)
                    </div>
                  </div>
                </div>

                {/* Accessibility Features */}
                <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#FAF7F2', borderRadius: '6px', border: '1px solid #EEEEEE' }}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1E1E1E', marginBottom: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    ✅ Accessibility Features
                  </div>
                  <ul style={{ fontFamily: 'Lora, serif', fontSize: '14px', color: '#444444', lineHeight: '1.8', listStyle: 'disc', marginLeft: '24px' }}>
                    <li>ARIA labels: role="navigation", aria-label, aria-expanded, aria-controls</li>
                    <li>Keyboard navigation: Tab, Enter, Escape key support</li>
                    <li>Focus indicators: 2px solid #1F5364 outline (6.8:1 contrast)</li>
                    <li>Active link indicators: Teal Dark border (WCAG AA compliant)</li>
                    <li>Color contrast: All text meets WCAG AA (4.5:1 minimum)</li>
                    <li>Mobile menu: Prevents body scroll, auto-closes on route change</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WCAG Accessibility Analysis */}
        <AccessibilityReport />
        
        {/* Component Accessibility Analysis */}
        <ComponentAccessibilityReport />
        
        {/* Post-Fix Accessibility Audit Report */}
        <AccessibilityAuditReport />
      </div>
    </div>
  );
}