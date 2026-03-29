import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Work() {
  const [activeTab, setActiveTab] = useState<'research' | 'leadership'>('research');

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .work-hero-section {
          background-color: #1E1E1E;
          padding: 100px 48px 60px;
        }
        
        .work-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 52px;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 24px;
        }
        
        .work-hero-subtitle {
          font-family: 'Lora', serif;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.65);
          max-width: 700px;
          line-height: 1.6;
        }
        
        .work-tab-section {
          background-color: #1E1E1E;
          border-bottom: 1px solid #444444;
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
        
        .work-cta-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        
        .work-card-title {
          font-size: 19px;
        }
        
        .work-cta-title {
          font-size: 21px;
        }
        
        @media (max-width: 768px) {
          .work-hero-section {
            padding: 56px 24px 40px;
          }
          
          .work-hero-title {
            font-size: 32px;
          }
          
          .work-hero-subtitle {
            font-size: 16px;
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
          
          .work-cta-flex {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .work-card-title {
            font-size: 18px;
          }
          
          .work-cta-title {
            font-size: 18px;
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
              fontSize: '11px',
              color: '#D4A843',
              marginBottom: '20px',
              letterSpacing: '1.5px',
            }}
          >
            WORK
          </div>

          {/* Headline */}
          <h1 className="work-hero-title">
            Work that changed something.
          </h1>

          {/* Subheading */}
          <p className="work-hero-subtitle">
            From building research practices from scratch to shipping products that served millions of users, here's a selection of work I'm proud of.
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
                fontSize: '15px',
                color: activeTab === 'research' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'research' ? '3px solid #1F5364' : '3px solid transparent',
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
                  fontSize: '11px',
                  color: activeTab === 'research' ? '#FFFFFF' : '#1E1E1E',
                  backgroundColor: activeTab === 'research' ? '#1F5364' : '#888888',
                  borderRadius: '10px',
                  padding: '2px 8px',
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                4
              </span>
            </button>

            {/* Leadership Tab */}
            <button
              onClick={() => setActiveTab('leadership')}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: activeTab === 'leadership' ? 700 : 500,
                fontSize: '15px',
                color: activeTab === 'leadership' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'leadership' ? '3px solid #1F5364' : '3px solid transparent',
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
                  fontSize: '11px',
                  color: activeTab === 'leadership' ? '#FFFFFF' : '#1E1E1E',
                  backgroundColor: activeTab === 'leadership' ? '#1F5364' : '#888888',
                  borderRadius: '10px',
                  padding: '2px 8px',
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                2
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* UX Research Panel */}
      {activeTab === 'research' && (
        <section className="work-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* 2x2 Card Grid */}
            <div className="work-card-grid">
              {/* Card 1 - Coming Soon */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  opacity: 0.5,
                }}
              >
                {/* Gray Accent Bar */}
                <div style={{ height: '4px', backgroundColor: '#CCCCCC' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      color: '#888888',
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
                      fontSize: '24px',
                      color: '#888888',
                      marginBottom: '12px',
                    }}
                  >
                    Coming Soon
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '15px',
                      color: '#888888',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Building trust and safety frameworks for a rental marketplace serving vulnerable populations.
                  </p>

                  {/* Link Disabled */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#CCCCCC',
                    }}
                  >
                    Case Study →
                  </div>
                </div>
              </div>

              {/* Card 2 - AI Product */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Teal Accent Bar */}
                <div style={{ height: '4px', backgroundColor: '#2C6E7F' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      color: '#2C6E7F',
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
                      fontSize: '24px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    Designing an AI Product for a Real Estate Startup
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '15px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Helping a PropTech startup navigate ethical AI challenges when building predictive pricing models that impact housing access.
                  </p>

                  {/* Link */}
                  <Link
                    to="/case-studies/ai-real-estate"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#2C6E7F',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>

              {/* Card 3 - AI Personalization */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Teal Accent Bar */}
                <div style={{ height: '4px', backgroundColor: '#2C6E7F' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      color: '#2C6E7F',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    CASE STUDY · EDTECH
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    The Work Before the Tools: Defining AI Personalization
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '15px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Establishing ethical frameworks for personalized learning algorithms that served 2M+ students without perpetuating educational inequity.
                  </p>

                  {/* Link */}
                  <Link
                    to="/case-studies/ai-personalization"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#2C6E7F',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>

              {/* Card 4 - Customer Onboarding */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Teal Accent Bar */}
                <div style={{ height: '4px', backgroundColor: '#2C6E7F' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      color: '#2C6E7F',
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
                      fontSize: '24px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    Reducing the Time of Customer Onboarding
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '15px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    A 37-question onboarding form reduced by 20% — cutting onboarding call time by 50% via A/B test.
                  </p>

                  {/* Link */}
                  <Link
                    to="/case-studies/healthtech-onboarding"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#2C6E7F',
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
        </section>
      )}

      {/* Leadership Panel */}
      {activeTab === 'leadership' && (
        <section className="work-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Left-side note */}
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: '#888888',
                fontStyle: 'italic',
                marginBottom: '32px',
                padding: '12px 20px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '6px',
              }}
            >
              This panel shows when Leadership tab is clicked
            </div>

            {/* 2 Cards Side by Side */}
            <div className="work-card-grid">
              {/* Card 1 */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Terracotta Accent Bar */}
                <div style={{ height: '4px', backgroundColor: '#C4622D' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      color: '#C4622D',
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
                      fontSize: '24px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    Building a Research Practice from Zero
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '15px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Establishing frameworks, hiring researchers, and creating a data-driven culture at scale — from 0 to 8 researchers in 18 months.
                  </p>

                  {/* Link */}
                  <Link
                    to="/case-studies/building-research-practice"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#C4622D',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EEEEEE',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                {/* Terracotta Accent Bar */}
                <div style={{ height: '4px', backgroundColor: '#C4622D' }} />

                <div style={{ padding: '32px' }}>
                  {/* Tag */}
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      color: '#C4622D',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    LEADERSHIP · HEALTHTECH
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    Scaling Research Operations Across 3 Product Teams
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '15px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '24px',
                    }}
                  >
                    Creating shared research infrastructure, insight repositories, and processes that helped 40+ product managers make better decisions.
                  </p>

                  {/* Link */}
                  <Link
                    to="/case-studies/scaling-research-ops"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#C4622D',
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
        </section>
      )}

      {/* CTA Strip */}
      <section
        style={{
          backgroundColor: '#C4622D',
          padding: '48px',
        }}
      >
        <div className="work-cta-flex" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <h3
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '21px',
                color: '#1E1E1E',
                marginBottom: '10px',
              }}
            >
              Looking for a research leader who can drive impact?
            </h3>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '16px',
                color: '#1E1E1E',
                opacity: 0.85,
                lineHeight: '1.5',
              }}
            >
              Let's talk about how I can help your team build better products through ethical research practices.
            </p>
          </div>
          <Link
            to="/hiring"
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
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}