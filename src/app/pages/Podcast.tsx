import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ComingSoonBadge } from '../components/ComingSoonBadge';
import { Link } from 'react-router';

export default function Podcast() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .podcast-hero-section {
          background-color: #1E1E1E;
          padding: 100px 48px;
        }
        
        .podcast-hero-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 64px;
          align-items: center;
        }
        
        .podcast-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 52px;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 16px;
        }
        
        .podcast-platform-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
        }
        
        .podcast-section-padding {
          padding: 80px 48px;
        }
        
        .podcast-subscribe-btn {
          transition: all 0.2s ease;
        }
        
        .podcast-subscribe-btn:hover {
          background-color: #2C6E7F;
          border-color: #2C6E7F;
          color: #FFFFFF;
        }
        
        .podcast-subscribe-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px #2C6E7F;
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
          .podcast-hero-section {
            padding: 56px 24px;
          }
          
          .podcast-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .podcast-hero-title {
            font-size: 32px;
          }
          
          .podcast-platform-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .podcast-section-padding {
            padding: 48px 24px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="podcast-hero-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="podcast-hero-grid">
            {/* Show Art Placeholder */}
            <div
              style={{
                width: '300px',
                height: '300px',
                backgroundColor: '#444444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888888',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                borderRadius: '8px',
              }}
            >
              [Show Art Placeholder]
            </div>

            {/* Right Content */}
            <div>
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
                THE PODCAST
              </div>

              {/* Show Title */}
              <h1 className="podcast-hero-title">
                Ethics A-side
              </h1>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '24px',
                  lineHeight: '1.6',
                }}
              >
                Bi-weekly conversations with UX researchers, product leaders, and ethicists about building inclusive research practices and addressing algorithmic bias.
              </p>

              {/* Coming Soon Badge */}
              <ComingSoonBadge />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="podcast-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderLeft: '4px solid #1F5364',
              borderRadius: '8px',
              padding: '40px',
            }}
          >
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: '#444444',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}
            >
              Every other week, I sit down with people who are grappling with the ethical challenges of modern product development. We talk about the hard questions: How do you balance business goals with user protection? What does responsible AI research actually look like? How do you build diverse teams in an industry that still has so far to go?
            </p>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: '#444444',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}
            >
              These aren't theoretical conversations. My guests share real stories from the trenches — the times they got it wrong, the frameworks they built, the organizational battles they fought. We explore systems thinking, bias in data, inclusive research practices, and what ethical leadership actually means in practice.
            </p>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: '#444444',
                lineHeight: '1.7',
              }}
            >
              The show launches in April 2026. Subscribe below to get notified when the first episode drops.
            </p>
          </div>
        </div>
      </section>

      {/* Stay in the Loop */}
      <section className="podcast-section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              padding: '56px 48px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '32px',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Stay in the loop
            </h2>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6',
                marginBottom: '32px',
              }}
            >
              Get notified when new episodes drop, plus exclusive behind-the-scenes content.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                className="primary-cta-gold"
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
                Subscribe via Email →
              </button>
              <button
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#FFFFFF',
                  backgroundColor: 'transparent',
                  padding: '14px 32px',
                  borderRadius: '6px',
                  border: '2px solid #FFFFFF',
                  cursor: 'pointer',
                }}
              >
                Follow on LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="podcast-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '32px',
              color: '#1E1E1E',
              marginBottom: '48px',
            }}
          >
            Preview Episodes
          </h2>

          {/* Episode Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Episode 1 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                {/* Episode Number */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    flexShrink: 0,
                    backgroundColor: '#FAF7F2',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #EEEEEE',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: '#1E1E1E',
                    }}
                  >
                    01
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    The Researcher Who Said No: When Ethics Conflicts with Business Goals
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '16px',
                    }}
                  >
                    My guest share the story of refusing to run a research study that would have violated user trust — and what happened next. We explore when to push back, how to build ethical frameworks, and the cost of saying no.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#1F5364',
                        backgroundColor: '#FAF7F2',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Ethics
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#1F5364',
                        backgroundColor: '#FAF7F2',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Leadership
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#1F5364',
                        backgroundColor: '#FAF7F2',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      User Trust
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode 2 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                {/* Episode Number */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    flexShrink: 0,
                    backgroundColor: '#FAF7F2',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #EEEEEE',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: '#1E1E1E',
                    }}
                  >
                    02
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    Building Research Teams That Reflect Your Users
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '16px',
                    }}
                  >
                    A conversation about hiring for diversity, creating inclusive team cultures, and why homogeneous research teams produce biased insights. My guest shares their framework for building teams that bring different lived experiences to the work.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#C4622D',
                        backgroundColor: '#FEF3EE',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Team Building
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#C4622D',
                        backgroundColor: '#FEF3EE',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Diversity
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#C4622D',
                        backgroundColor: '#FEF3EE',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Inclusion
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Episode 3 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                {/* Episode Number */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    flexShrink: 0,
                    backgroundColor: '#FAF7F2',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #EEEEEE',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: '#1E1E1E',
                    }}
                  >
                    03
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: '#1E1E1E',
                      marginBottom: '12px',
                    }}
                  >
                    AI Bias Audits: What Companies Get Wrong
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: '1.6',
                      marginBottom: '16px',
                    }}
                  >
                    An AI ethicist walks us through real bias audits they've conducted — from hiring algorithms that discriminated against women to recommendation systems that amplified harmful content. We discuss what meaningful bias testing looks like.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#1F5364',
                        backgroundColor: '#FAF7F2',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      AI Ethics
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#1F5364',
                        backgroundColor: '#FAF7F2',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Bias Testing
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: '#1F5364',
                        backgroundColor: '#FAF7F2',
                        border: '1px solid #EEEEEE',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Algorithms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="podcast-section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '32px',
              color: '#1E1E1E',
              marginBottom: '16px',
            }}
          >
            Listen on your favorite platform
          </h2>
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '17px',
              color: '#444444',
              marginBottom: '48px',
            }}
          >
            Subscribe now so you don't miss the premiere in April 2026.
          </p>

          {/* Platform Cards */}
          <div className="podcast-platform-grid">
            {/* Apple Podcasts */}
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
                  backgroundColor: '#D4A843',
                  borderRadius: '16px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E1E1E',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                }}
              >
                🎙
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
                Apple Podcasts
              </h3>
              <button
                className="podcast-subscribe-btn"
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

            {/* Spotify */}
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
                  backgroundColor: '#1F5364',
                  borderRadius: '16px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                }}
              >
                🎵
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
                Spotify
              </h3>
              <button
                className="podcast-subscribe-btn"
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

            {/* YouTube */}
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
                  backgroundColor: '#1F5364',
                  borderRadius: '16px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ▶
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
                YouTube
              </h3>
              <button
                className="podcast-subscribe-btn"
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
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
              Want to be a guest on the show?
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
              I'm looking for researchers, product leaders, and ethicists with stories to share.
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