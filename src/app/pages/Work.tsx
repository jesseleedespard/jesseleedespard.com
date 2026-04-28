import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Work() {
  const [activeTab, setActiveTab] = useState<'research' | 'leadership'>('research');

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .work-hero-section {
          background-color: var(--charcoal);
          padding: var(--space-hero) var(--space-page-side) 60px;
        }
        
        .work-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl));
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 24px;
        }
        
        .work-hero-subtitle {
          font-family: 'Lora', serif;
          font-size: var(--font-size-lg);
          color: var(--hero-subtitle-color);
          line-height: 1.6;
          font-style: italic;
        }
        
        .work-tab-section {
          background-color: var(--charcoal);
          border-bottom: 1px solid var(--dark-gray);
          padding: 0 48px;
        }
        
        .work-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        
        .work-section-padding {
          padding: 80px 48px;
        }
        
        @media (max-width: 768px) {
          .work-hero-section {
            padding: var(--space-hero-mobile) var(--space-page-side-mobile) 40px;
          }
          
          .work-hero-subtitle {
            font-size: var(--font-size-base);
          }
          
          .work-tab-section {
            padding: 0 24px;
          }
          
          .work-card-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .work-section-padding {
            padding: 48px 24px;
          }
          
        }
      `}</style>

      {/* Hero Section */}
      <section className="work-hero-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--gold)',
              marginBottom: '20px',
              letterSpacing: '1.5px',
            }}
          >
            WORK
          </div>

          {/* Headline */}
          <h1 className="work-hero-title">
            Work that <span style={{ color: 'var(--gold)' }}>changed something.</span>
          </h1>

          {/* Subheading */}
          <p className="work-hero-subtitle">
            From building UX practices from scratch, democratizing research, to leading UX teams. My work influenced people, systems, and moved business metrics.
          </p>
        </div>
      </section>

      {/* Tab Bar */}
      <section className="work-tab-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0', justifyContent: 'center' }}>
            {/* UX Research Tab */}
            <button
              onClick={() => setActiveTab('research')}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: activeTab === 'research' ? 700 : 500,
                fontSize: 'var(--font-size-sm)',
                color: activeTab === 'research' ? 'var(--white)' : 'rgba(255, 255, 255, 0.6)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'research' ? '3px solid var(--teal-dark)' : '3px solid transparent',
                padding: '16px 24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {/* Search Icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              UX Research
              {/* Count Badge */}
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xs)',
                  color: activeTab === 'research' ? 'var(--white)' : 'var(--charcoal)',
                  backgroundColor: activeTab === 'research' ? 'var(--teal-dark)' : 'var(--gray)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2px 8px',
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                3
              </span>
            </button>

            {/* Leadership Tab */}
            <button
              onClick={() => setActiveTab('leadership')}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: activeTab === 'leadership' ? 700 : 500,
                fontSize: 'var(--font-size-sm)',
                color: activeTab === 'leadership' ? 'var(--white)' : 'rgba(255, 255, 255, 0.6)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'leadership' ? '3px solid var(--teal-dark)' : '3px solid transparent',
                padding: '16px 24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {/* Star Icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 2L9.5 6.5H14L10.5 9.5L12 14L8 11L4 14L5.5 9.5L2 6.5H6.5L8 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              Leadership
              {/* Count Badge */}
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xs)',
                  color: activeTab === 'leadership' ? 'var(--white)' : 'var(--charcoal)',
                  backgroundColor: activeTab === 'leadership' ? 'var(--teal-dark)' : 'var(--gray)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2px 8px',
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                3
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* UX Research Panel */}
      {activeTab === 'research' && (
        <section className="work-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* 2x2 Card Grid */}
            <div className="work-card-grid">
              {/* Card 1 - Coming Soon */}
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--light-gray)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  opacity: 0.5,
                }}
              >
                {/* Gray Accent Bar */}
                <div style={{ height: '4px', backgroundColor: 'var(--mid-gray)' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--gray)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    CASE STUDY · AI
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--gray)',
                      marginBottom: '12px',
                    }}
                  >
                    Coming Soon
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--gray)',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Using AI as a collaborator to design and build this entire portfolio from scratch — a case study in research practice, craft, and what it means to work with emerging tools.
                  </p>

                  {/* Link Disabled */}
                  <div className="card-cta-row">
                    <div
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--mid-gray)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read Case Study →
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - AI Product */}
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--light-gray)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                {/* Teal Accent Bar */}
                <div style={{ height: '4px', backgroundColor: 'var(--teal)' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--teal)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    CASE STUDY · PROPTECH
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    Ethical AI Research That Doubled Product-Market Fit for a PropTech Startup
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Helping a PropTech startup navigate ethical AI challenges when building predictive pricing models that impact housing access.
                  </p>

                  {/* Link */}
                  <div className="card-cta-row">
                    <Link
                      to="/case-studies/proptech"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--teal)',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 - Customer Onboarding */}
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--light-gray)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                {/* Teal Accent Bar */}
                <div style={{ height: '4px', backgroundColor: 'var(--teal)' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--teal)',
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
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    From 90 Minutes to 45: Redesigning a Broken Onboarding Flow
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    A 37-question onboarding form reduced by 20% — cutting onboarding call time by 50% via A/B test.
                  </p>

                  {/* Link */}
                  <div className="card-cta-row">
                    <Link
                      to="/case-studies/healthtech-onboarding"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--teal)',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Leadership Panel */}
      {activeTab === 'leadership' && (
        <section className="work-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* 2 Cards Side by Side */}
            <div className="work-card-grid">
              {/* Card 1 */}
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--light-gray)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                {/* Terracotta Accent Bar */}
                <div style={{ height: '4px', backgroundColor: 'var(--terra)' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--terra)',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    LEADERSHIP · REAL ESTATE TECH
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    Building a Research Function from the Ground Up, and Through an Acquisition
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Built a research practice from scratch, led it through an acquisition, and merged two separate research teams into one cohesive function.
                  </p>

                  {/* Link */}
                  <div className="card-cta-row">
                    <Link
                      to="/leadership/research-function"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--terra)',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--light-gray)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                {/* Terracotta Accent Bar */}
                <div style={{ height: '4px', backgroundColor: 'var(--terra)' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--terra)',
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
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    Scaling Research Operations Across 3 Product Teams
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Built the conditions for three product disciplines to trust each other and move faster — 30% velocity increase, 25% collaboration lift, and a team that kept operating the same way after I left.
                  </p>

                  {/* Link */}
                  <div className="card-cta-row">
                    <Link
                      to="/leadership/three-disciplines-one-team"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--terra)',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 - AI Personalization */}
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--light-gray)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                }}
              >
                {/* Terracotta Accent Bar */}
                <div style={{ height: '4px', backgroundColor: 'var(--terra)' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xs)',
                      color: 'var(--terra)',
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
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    The Work Before the Tools: Defining AI Personalization
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--dark-gray)',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    A cross-functional workshop that defined what AI personalization should mean for users — before a single tool was selected.
                  </p>

                  {/* Link */}
                  <div className="card-cta-row">
                    <Link
                      to="/leadership/work-before-the-tools"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--terra)',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Strip */}
      <MarketingCtaStrip
        title="Looking for a research leader who can drive impact?"
        body="Let's talk about how I can help your team build better products through ethical research practices."
        cta={<Link to="/hiring" className="primary-cta-dark">Get in Touch →</Link>}
      />

      <Footer />
    </div>
  );
}