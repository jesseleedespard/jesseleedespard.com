import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';
import { ComingSoonBadge } from '../components/ComingSoonBadge';
import { Link } from 'react-router';

export default function Podcast() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .podcast-hero-section {
          background-color: var(--charcoal);
          padding: var(--space-hero) var(--space-page-side);
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
          font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl));
          color: var(--white);
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
          background-color: var(--teal);
          border-color: var(--teal);
          color: var(--white);
        }
        
        .podcast-subscribe-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px var(--teal);
        }
        
        .primary-cta-gold {
          transition: all 0.2s ease;
        }
        
        .primary-cta-gold:hover {
          background-color: var(--gold-dark);
        }
        
        .primary-cta-gold:focus {
          outline: none;
          box-shadow: 0 0 0 3px var(--teal);
        }
        
        @media (max-width: 768px) {
          .podcast-hero-section {
            padding: var(--space-hero-mobile) var(--space-page-side-mobile);
          }
          
          .podcast-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
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
                backgroundColor: 'var(--dark-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gray)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'var(--font-size-sm)',
                borderRadius: 'var(--radius-md)',
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
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--gold)',
                  marginBottom: '20px',
                  letterSpacing: '1.5px',
                }}
              >
                THE PODCAST
              </div>

              {/* Show Title */}
              <h1 className="podcast-hero-title">
                Ethics {'{'}A{'}'}Side
              </h1>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--hero-subtitle-color)',
                  fontStyle: 'italic',
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
      <section className="podcast-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: 'var(--font-size-base)',
                color: 'var(--dark-gray)',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}
            >
              Every other week, I sit down with people who are grappling with the ethical challenges of modern product development. We talk about the hard questions: How do you balance business goals with user protection? What does responsible AI research actually look like? How do you build diverse teams in an industry that still has so far to go?
            </p>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: 'var(--font-size-base)',
                color: 'var(--dark-gray)',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}
            >
              These aren't theoretical conversations. My guests share real stories from the trenches — the times they got it wrong, the frameworks they built, the organizational battles they fought. We explore systems thinking, bias in data, inclusive research practices, and what ethical leadership actually means in practice.
            </p>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: 'var(--font-size-base)',
                color: 'var(--dark-gray)',
                lineHeight: '1.7',
              }}
            >
              The show launches in April 2026. Subscribe below to get notified when the first episode drops.
            </p>
        </div>
      </section>

      {/* Stay in the Loop */}
      <section className="podcast-section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: 'var(--charcoal)',
              borderRadius: 'var(--radius-md)',
              padding: '56px 48px',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: 'var(--font-size-2xl)',
                color: 'var(--white)',
                marginBottom: '16px',
              }}
            >
              Stay in the loop
            </h2>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: 'var(--font-size-base)',
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
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--charcoal)',
                  backgroundColor: 'var(--gold)',
                  padding: '14px 32px',
                  borderRadius: 'var(--radius-sm)',
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
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--white)',
                  backgroundColor: 'transparent',
                  padding: '14px 32px',
                  borderRadius: 'var(--radius-sm)',
                  border: '2px solid var(--white)',
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
      <section className="podcast-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: 'var(--charcoal)',
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
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
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
                    backgroundColor: 'var(--cream)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--light-gray)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
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
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    The Researcher Who Said No: When Ethics Conflicts with Business Goals
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--dark-gray)',
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
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--teal-dark)',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--light-gray)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Ethics
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--teal-dark)',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--light-gray)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Leadership
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--teal-dark)',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--light-gray)',
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
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
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
                    backgroundColor: 'var(--cream)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--light-gray)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
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
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    Building Research Teams That Reflect Your Users
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--dark-gray)',
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
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--terra)',
                        backgroundColor: 'var(--terra-tint)',
                        border: '1px solid var(--light-gray)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Team Building
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--terra)',
                        backgroundColor: 'var(--terra-tint)',
                        border: '1px solid var(--light-gray)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Diversity
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--terra)',
                        backgroundColor: 'var(--terra-tint)',
                        border: '1px solid var(--light-gray)',
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
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
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
                    backgroundColor: 'var(--cream)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--light-gray)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: 'var(--font-size-xl)',
                      color: 'var(--charcoal)',
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
                      fontSize: 'var(--font-size-lg)',
                      color: 'var(--charcoal)',
                      marginBottom: '12px',
                    }}
                  >
                    AI Bias Audits: What Companies Get Wrong
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--dark-gray)',
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
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--teal-dark)',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--light-gray)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      AI Ethics
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--teal-dark)',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--light-gray)',
                        borderRadius: '20px',
                        padding: '4px 12px',
                      }}
                    >
                      Bias Testing
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--teal-dark)',
                        backgroundColor: 'var(--cream)',
                        border: '1px solid var(--light-gray)',
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
      <section className="podcast-section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: 'var(--charcoal)',
              marginBottom: '16px',
            }}
          >
            Listen on your favorite platform
          </h2>
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontSize: 'var(--font-size-base)',
              color: 'var(--dark-gray)',
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
                backgroundColor: 'var(--cream)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--gold)',
                  borderRadius: '16px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--charcoal)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-2xl)',
                }}
              >
                🎙
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--charcoal)',
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
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--teal-dark)',
                  backgroundColor: 'transparent',
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-sm)',
                  border: '2px solid var(--teal-dark)',
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Spotify */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--teal-dark)',
                  borderRadius: '16px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-2xl)',
                }}
              >
                🎵
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--charcoal)',
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
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--teal-dark)',
                  backgroundColor: 'transparent',
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-sm)',
                  border: '2px solid var(--teal-dark)',
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </div>

            {/* YouTube */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--teal-dark)',
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
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--charcoal)',
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
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--teal-dark)',
                  backgroundColor: 'transparent',
                  padding: '10px 24px',
                  borderRadius: 'var(--radius-sm)',
                  border: '2px solid var(--teal-dark)',
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
      <MarketingCtaStrip
        title="Want to be a guest on the show?"
        body="I'm looking for researchers, product leaders, and ethicists with stories to share."
        cta={<Link to="/hiring" className="primary-cta-dark">Get in Touch →</Link>}
      />

      <Footer />
    </div>
  );
}
