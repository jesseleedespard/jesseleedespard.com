import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .home-hero-section {
          background-color: #1E1E1E;
          padding: 100px 48px;
        }
        
        .home-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 52px;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 900px;
        }
        
        .home-hero-subtitle {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 40px;
          line-height: 1.6;
        }
        
        .home-case-studies-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }
        
        .home-section-padding {
          padding: 80px 48px;
        }
        
        .home-cta-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        
        .home-section-title {
          font-size: var(--font-size-2xl);
        }
        
        .home-card-title {
          font-size: 19px;
        }
        
        .home-featured-title {
          font-size: var(--font-size-xl);
        }
        
        .home-podcast-title {
          font-size: var(--font-size-xl);
        }
        
        .home-cta-title {
          font-size: 21px;
        }
        
        .primary-cta-gold {
          transition: all 0.2s ease;
        }
        
        .primary-cta-gold:hover {
          background-color: #C49A3A;
        }
        
        .primary-cta-gold:focus {
          outline: none;
          box-shadow: 0 0 0 3px #2C6E7F;
        }
        
        .primary-cta-dark {
          transition: all 0.2s ease;
        }
        
        .primary-cta-dark:hover {
          background-color: #333333;
        }
        
        .primary-cta-dark:focus {
          outline: none;
          box-shadow: 0 0 0 3px #2C6E7F;
        }
        
        @media (max-width: 768px) {
          .home-hero-section {
            padding: 56px 24px;
          }
          
          .home-hero-title {
            font-size: var(--font-size-2xl);
          }
          
          .home-hero-subtitle {
            font-size: var(--font-size-base);
          }
          
          .home-case-studies-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .home-section-padding {
            padding: 48px 24px;
          }
          
          .home-cta-flex {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .home-section-title {
            font-size: var(--font-size-xl);
          }
          
          .home-card-title {
            font-size: var(--font-size-lg);
          }
          
          .home-featured-title {
            font-size: var(--font-size-lg);
          }
          
          .home-podcast-title {
            font-size: var(--font-size-lg);
          }
          
          .home-cta-title {
            font-size: var(--font-size-lg);
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="home-hero-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#D4A843',
              marginBottom: '24px',
              letterSpacing: '1.5px',
            }}
          >
            UX RESEARCH LEADER
          </div>

          {/* Headline */}
          <h1 className="home-hero-title">
            I've spent a decade studying people so products can serve them better.
          </h1>

          {/* Subheading */}
          <p className="home-hero-subtitle">
            I build the research practices, teams, and frameworks that help companies make better decisions.
          </p>

          {/* CTA Button */}
          <Link
            to="/hiring"
            className="primary-cta-gold"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              color: '#1E1E1E',
              backgroundColor: '#D4A843',
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Hiring? →
          </Link>
        </div>
      </section>

      {/* Case Study Teasers */}
      <section className="home-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            CASE STUDIES
          </div>

          {/* Section Title */}
          <h2
            className="home-section-title"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              color: '#1E1E1E',
              marginBottom: '48px',
            }}
          >
            Recent Work
          </h2>

          {/* Cards */}
          <div className="home-case-studies-grid">
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {/* Placeholder Image */}
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  backgroundColor: '#CCCCCC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888888',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-sm)',
                }}
              >
                [Image Placeholder]
              </div>

              {/* Card Content */}
              <div style={{ padding: '32px' }}>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-xs)',
                    color: '#1F5364',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  CASE STUDY · HEALTHTECH
                </div>
                <h3
                  className="home-card-title"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    color: '#1E1E1E',
                    marginBottom: '16px',
                  }}
                >
                  From 90 Minutes to 45: Redesigning a Broken Onboarding Flow
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'var(--font-size-base)',
                    color: '#444444',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  A 37-question form reduced by 20% — cutting onboarding call time by 50% via A/B test.
                </p>
                <div className="card-cta-row">
                  <Link
                    to="/case-studies/healthtech-onboarding"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-sm)',
                      color: '#1F5364',
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
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {/* Placeholder Image */}
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  backgroundColor: '#CCCCCC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#888888',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-sm)',
                }}
              >
                [Image Placeholder]
              </div>

              {/* Card Content */}
              <div style={{ padding: '32px' }}>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-xs)',
                    color: '#C4622D',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  LEADERSHIP · REAL ESTATE TECH
                </div>
                <h3
                  className="home-card-title"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    color: '#1E1E1E',
                    marginBottom: '16px',
                  }}
                >
                  Building a Research Function from the Ground Up, and Through an Acquisition
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'var(--font-size-base)',
                    color: '#444444',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  Built a research practice from scratch, survived an acquisition, and turned research from a gatekept discipline into something the whole org could see and use.
                </p>
                <div className="card-cta-row">
                  <Link
                    to="/leadership/research-function"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-sm)',
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

          {/* See All Link */}
          <div className="card-cta-row">
            <Link
              to="/work"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                color: '#1F5364',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              See All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#EEEEEE', maxWidth: '1200px', margin: '0 auto' }} />

      {/* Writing Teaser */}
      <section className="home-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            LATEST WRITING
          </div>

          {/* Featured Post Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderLeft: '4px solid #D4A843',
              borderRadius: '8px',
              padding: '40px',
            }}
          >
            <h3
              className="home-featured-title"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                color: '#1E1E1E',
                marginBottom: '12px',
              }}
            >
              Ethical Leadership Is Not Just a Soft Skill
            </h3>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                fontStyle: 'italic',
                color: '#555555',
                lineHeight: '1.55',
                marginBottom: '20px',
              }}
            >
              Why ethical management shows up in the quiet places — not the policies
            </p>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: '#444444',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              Ethical management isn’t about being nice. It isn’t about having the right values written on a website. It shows up when someone on your team says something feels off, and you decide whether curiosity or defensiveness comes first.
            </p>
            <div className="card-cta-row">
              <Link
                to="/writing"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-sm)',
                  color: '#1F5364',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                View All Writing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#EEEEEE', maxWidth: '1200px', margin: '0 auto' }} />

      {/* Podcast Teaser */}
      <section className="home-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            PODCAST
          </div>

          {/* Dark Card */}
          <div
            style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              padding: '48px',
            }}
          >
            <h3
              className="home-podcast-title"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Research & Bias: Conversations on UX Ethics
            </h3>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6',
                marginBottom: '32px',
                maxWidth: '700px',
              }}
            >
              Bi-weekly conversations with UX researchers, product leaders, and ethicists about building inclusive research practices and addressing algorithmic bias.
            </p>
            <div className="card-cta-row">
              <button
                type="button"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-sm)',
                  color: '#1E1E1E',
                  backgroundColor: '#D4A843',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Listen Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section
        style={{
          backgroundColor: '#C4622D',
          padding: '48px',
        }}
      >
        <div className="home-cta-flex" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <h3
              className="home-cta-title"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                color: '#1E1E1E',
                marginBottom: '8px',
              }}
            >
              Looking to hire a UX Research leader?
            </h3>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: 'var(--font-size-base)',
                color: '#1E1E1E',
                opacity: 0.85,
                lineHeight: '1.5',
              }}
            >
              I build research practices that scale — from establishing frameworks to growing high-performing teams.
            </p>
          </div>
          <Link
            to="/work"
            className="primary-cta-dark"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              color: '#FFFFFF',
              backgroundColor: '#1E1E1E',
              padding: '16px 32px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            View My Work →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}