import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';

export default function Writing() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .writing-hero-section {
          background-color: #1E1E1E;
          padding: 100px 48px;
        }
        
        .writing-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 52px;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 900px;
        }
        
        .writing-hero-subtitle {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-style: italic;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.65);
          max-width: 700px;
          line-height: 1.6;
        }
        
        .writing-section-padding {
          padding: 64px 48px;
        }
        
        .article-link {
          transition: color 0.2s ease;
        }
        
        .article-link:hover {
          color: #2C6E7F !important;
        }
        
        .article-card {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        
        .article-card:hover {
          border-color: #2C6E7F;
          box-shadow: 0 4px 12px rgba(44, 110, 127, 0.08);
        }
        
        @media (max-width: 768px) {
          .writing-hero-section {
            padding: 56px 24px;
          }
          
          .writing-hero-title {
            font-size: 32px;
          }
          
          .writing-hero-subtitle {
            font-size: 16px;
          }
          
          .writing-section-padding {
            padding: 48px 24px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="writing-hero-section">
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
            WRITING
          </div>

          {/* Headline */}
          <h1 className="writing-hero-title">
            Essays on ethical leadership — told through parable, analyzed through systems thinking
          </h1>

          {/* Italic Subheading */}
          <p className="writing-hero-subtitle">
            Stories and frameworks for building more ethical research practices and product teams.
          </p>
        </div>
      </section>

      {/* Framing Strip */}
      <section style={{ padding: '48px', backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderLeft: '4px solid #1F5364',
              borderRadius: '8px',
              padding: '32px 40px',
            }}
          >
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: '#444444',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              I write about the intersection of ethics, leadership, and product development. Each piece explores real challenges facing research leaders today — from algorithmic bias to building inclusive teams.
            </p>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: '#444444',
                lineHeight: '1.6',
              }}
            >
              Some are parables. Some are frameworks. All are designed to help you think more deeply about the work we do and the impact it has.
            </p>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section style={{ padding: '32px 48px', backgroundColor: '#FAF7F2', borderBottom: '1px solid #EEEEEE' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Essay */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1F5364' }} />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#444444',
                  fontWeight: 500,
                }}
              >
                Essay
              </span>
            </div>

            {/* Parable */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#D4A843' }} />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#444444',
                  fontWeight: 500,
                }}
              >
                Parable
              </span>
            </div>

            {/* Analysis */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#C4622D' }} />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#444444',
                  fontWeight: 500,
                }}
              >
                Analysis
              </span>
            </div>

            {/* Community */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#888888' }} />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#444444',
                  fontWeight: 500,
                }}
              >
                Community
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Post Stack */}
      <section className="writing-section-padding">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Post 1 - Essay */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            className="article-card"
          >
            {/* Top accent bar */}
            <div style={{ height: '4px', backgroundColor: '#1F5364' }} />

            <div style={{ padding: '32px' }}>
              {/* Badge + Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    color: '#1F5364',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  ESSAY
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  March 12, 2026
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px',
                }}
              >
                The Ethics of AI Research: Balancing Innovation with User Protection
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  color: '#1F5364',
                  marginBottom: '16px',
                }}
              >
                How do we study user behavior while protecting privacy and preventing algorithmic bias?
              </p>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                As AI becomes more integrated into product development, UX researchers face new ethical challenges. The traditional frameworks we've relied on — informed consent, anonymization, bias testing — are no longer sufficient when dealing with systems that learn and adapt...
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  8 min read
                </span>
                <Link
                  to="/writing/ethics-ai-research"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1F5364',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  className="article-link"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          {/* Post 2 - Parable */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            className="article-card"
          >
            {/* Top accent bar */}
            <div style={{ height: '4px', backgroundColor: '#D4A843' }} />

            <div style={{ padding: '32px' }}>
              {/* Badge + Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    color: '#D4A843',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  PARABLE
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  February 28, 2026
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px',
                }}
              >
                The Mapmaker's Dilemma
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  color: '#D4A843',
                  marginBottom: '16px',
                }}
              >
                A story about the responsibility that comes with defining how others see the world.
              </p>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                Once there was a cartographer who drew maps for a growing kingdom. Her maps were so detailed and beautiful that everyone relied on them. One day, she discovered that a road she'd marked as safe actually passed through dangerous territory...
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  5 min read
                </span>
                <Link
                  to="/writing/mapmakers-dilemma"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#D4A843',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  className="article-link"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          {/* Post 3 - Analysis */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            className="article-card"
          >
            {/* Top accent bar */}
            <div style={{ height: '4px', backgroundColor: '#C4622D' }} />

            <div style={{ padding: '32px' }}>
              {/* Badge + Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    color: '#C4622D',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  ANALYSIS
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  February 14, 2026
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px',
                }}
              >
                Systems Thinking for Research Leaders
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  color: '#C4622D',
                  marginBottom: '16px',
                }}
              >
                Why individual studies fail when the system around them isn't designed to learn.
              </p>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                Most organizations treat research as a series of discrete projects. But research is a system — with inputs, outputs, feedback loops, and emergent properties. When we only optimize individual studies, we miss the bigger picture...
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  12 min read
                </span>
                <Link
                  to="/writing/systems-thinking"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#C4622D',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  className="article-link"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          {/* Post 4 - Community */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            className="article-card"
          >
            {/* Top accent bar */}
            <div style={{ height: '4px', backgroundColor: '#888888' }} />

            <div style={{ padding: '32px' }}>
              {/* Badge + Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    color: '#888888',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  COMMUNITY
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  January 30, 2026
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px',
                }}
              >
                Building Inclusive Research Communities
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  color: '#888888',
                  marginBottom: '16px',
                }}
              >
                Lessons from organizing research meetups for underrepresented voices.
              </p>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                For the past three years, I've helped organize monthly meetups for researchers from underrepresented backgrounds. What started as informal coffee chats has grown into a community of 200+ researchers who support each other through career transitions...
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  6 min read
                </span>
                <Link
                  to="/writing/inclusive-communities"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#888888',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  className="article-link"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          {/* Post 5 - Essay */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            className="article-card"
          >
            {/* Top accent bar */}
            <div style={{ height: '4px', backgroundColor: '#1F5364' }} />

            <div style={{ padding: '32px' }}>
              {/* Badge + Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    color: '#1F5364',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  ESSAY
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  January 18, 2026
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#1E1E1E',
                  marginBottom: '8px',
                }}
              >
                What Hiring Managers Get Wrong About Research Leadership
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  color: '#1F5364',
                  marginBottom: '16px',
                }}
              >
                The skills that make a great researcher don't always make a great research leader.
              </p>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                }}
              >
                I've interviewed for dozens of research leadership roles, and I've noticed a pattern. Hiring managers often look for the best researcher on the team and promote them to lead. But being good at research and being good at leading researchers are fundamentally different skills...
              </p>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  10 min read
                </span>
                <Link
                  to="/writing/research-leadership"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1F5364',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  className="article-link"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}