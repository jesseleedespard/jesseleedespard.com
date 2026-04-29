import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .home-hero-section {
          background-color: var(--charcoal);
          padding: var(--space-hero) var(--space-page-side);
        }
        
        .home-hero-title {
          font-family: var(--display);
          font-weight: 700;
          font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl));
          color: var(--white);
          line-height: 1.15;
          margin-bottom: var(--space-card-mobile);
          max-width: 900px;
        }
        
        .home-hero-subtitle {
          font-family: var(--body);
          font-weight: 400;
          font-size: var(--font-size-lg);
          color: var(--hero-subtitle-color);
          margin-bottom: 40px;
          line-height: 1.6;
          font-style: italic;
        }
        
        .home-case-studies-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-gap);
          margin-bottom: var(--space-card);
        }
        
        .home-hero-inner {
          display: flex;
          align-items: center;
          gap: 64px;
          max-width: var(--max-width-layout);
          margin: 0 auto;
        }
        
        .home-section-padding {
          padding: var(--space-section) var(--space-page-side);
        }
        
        .home-section-title {
          font-size: var(--font-size-2xl);
        }
        
        .home-card-title {
          font-size: var(--font-size-lg);
        }
        
        .home-featured-title {
          font-size: var(--font-size-xl);
        }
        
        .home-podcast-title {
          font-size: var(--font-size-xl);
        }
        
        .primary-cta-gold {
          background-color: var(--gold);
          transition: background-color 0.2s ease;
        }
        
        .primary-cta-gold:hover {
          background-color: var(--gold-hover);
        }
        
        .primary-cta-gold:focus {
          outline: var(--focus-ring-width) solid var(--focus-ring-color-on-dark);
          outline-offset: var(--focus-ring-offset);
        }

        .podcast-listen-btn {
          background-color: var(--gold);
          transition: background-color 0.2s ease;
        }

        .podcast-listen-btn:hover {
          background-color: var(--gold-hover);
        }

        .podcast-listen-btn:focus {
          outline: var(--focus-ring-width) solid var(--focus-ring-color-on-dark);
          outline-offset: var(--focus-ring-offset);
        }
        
        @media (max-width: 768px) {
          .home-hero-section {
            padding: var(--space-hero-mobile) var(--space-page-side-mobile);
          }
          
          .home-hero-inner {
            flex-direction: column;
          }
          
          .home-hero-inner img {
            width: 100%;
            height: 260px;
          }
          
          .home-hero-subtitle {
            font-size: var(--font-size-base);
          }
          
          .home-case-studies-grid {
            grid-template-columns: 1fr;
            gap: var(--space-gap-mobile);
          }
          
          .home-section-padding {
            padding: var(--space-section-sm) var(--space-page-side-mobile);
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

          .primary-cta-gold {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }

          .podcast-listen-btn {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }
          
        }
      `}</style>
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-inner">
          {/* Left column */}
          <div style={{ flex: 1 }}>
            {/* Eyebrow */}
            <div
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 'var(--font-size-xs)',
                color: 'var(--gold)',
                marginBottom: 'var(--space-card-mobile)',
                letterSpacing: '1.5px',
              }}
            >
              AI x UX RESEARCH LEADER
            </div>

            {/* Headline */}
            <h1 className="home-hero-title">
              Hey! <span style={{ color: 'var(--gold)' }}>I'm Jesse.</span>
            </h1>

            {/* Subheading */}
            <p className="home-hero-subtitle">
              I build research practices, teams, and frameworks that help companies understand people, and make better decisions because of it.
            </p>

            {/* CTA Button */}
            <Link
              to="/hiring"
              className="primary-cta-gold"
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 'var(--font-size-sm)',
                color: 'var(--charcoal)',
                padding: 'var(--space-sm) var(--space-card)',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Hiring?
            </Link>
          </div>

          {/* Right column — photo */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/jesse_hero.jpg"
              alt="Jesse and their dog in a park"
              style={{
                width: '380px',
                height: '380px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Case Study Teasers */}
      <section className="home-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-sm)',
            }}
          >
            CASE STUDIES
          </div>

          {/* Section Title */}
          <h2
            className="home-section-title"
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              color: 'var(--charcoal)',
              marginBottom: 'var(--space-page-side)',
            }}
          >
            Recent Work
          </h2>

          {/* Cards */}
          <div className="home-case-studies-grid">
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/healthtech_cardsort_after.jpg"
                alt="Card sort results after HealthTech onboarding redesign"
                style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block', objectPosition: 'center 30%' }}
              />

              {/* Card Content */}
              <div style={{ padding: 'var(--space-card)' }}>
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--teal-dark)',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  CASE STUDY · HEALTHTECH
                </div>
                <h3
                  className="home-card-title"
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    color: 'var(--charcoal)',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  From 90 Minutes to 45: Redesigning a Broken Onboarding Flow
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--dark-gray)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-card-mobile)',
                  }}
                >
                  A 37-question form reduced by 20% — cutting onboarding call time by 50% via A/B test.
                </p>
                <div className="card-cta-row">
                  <Link
                    to="/case-studies/healthtech-onboarding"
                    className="brand-link--cta"
                    style={{
                      color: 'var(--teal-dark)',
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
              <div
                style={{
                  width: '100%',
                  height: '240px',
                  backgroundColor: 'var(--charcoal)',
                  borderLeft: '4px solid var(--gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 'var(--space-card)',
                  boxSizing: 'border-box',
                }}
              >
                <p style={{ fontFamily: 'var(--body)', fontSize: 'var(--font-size-base)', color: 'var(--white)', fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 12px' }}>
                  &ldquo;I didn&apos;t gatekeep research. I made it visible, made myself vulnerable, and let people come to it on their own terms.&rdquo;
                </p>
                <p style={{ fontFamily: 'var(--display)', fontSize: 'var(--font-size-xs)', color: 'var(--gold)', margin: 0 }}>
                  — Jesse Lee Despard
                </p>
              </div>

              {/* Card Content */}
              <div style={{ padding: 'var(--space-card)' }}>
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--terra)',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  LEADERSHIP · REAL ESTATE TECH
                </div>
                <h3
                  className="home-card-title"
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    color: 'var(--charcoal)',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  Building a Research Function from the Ground Up, and Through an Acquisition
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--dark-gray)',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-card-mobile)',
                  }}
                >
                  Built a research practice from scratch, survived an acquisition, and turned research from a gatekept discipline into something the whole org could see and use.
                </p>
                <div className="card-cta-row">
                  <Link
                    to="/leadership/research-function"
                    className="brand-link--cta"
                    style={{
                      color: 'var(--terra)',
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
              className="brand-link--cta"
              style={{
                color: 'var(--teal-dark)',
                whiteSpace: 'nowrap',
              }}
            >
              See All Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'var(--light-gray)', maxWidth: 'var(--max-width-layout)', margin: '0 auto' }} />

      {/* Writing Teaser */}
      <section className="home-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-card)',
            }}
          >
            LATEST WRITING
          </div>

          {/* Featured Post Card */}
          <div
            style={{
              backgroundColor: 'var(--white)',
              border: '1px solid var(--light-gray)',
              borderLeft: '4px solid var(--gold)',
              borderRadius: 'var(--radius-md)',
              padding: '40px',
            }}
          >
            <h3
              className="home-featured-title"
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 700,
                color: 'var(--charcoal)',
                marginBottom: '12px',
              }}
            >
              Ethical Leadership Is Not Just a Soft Skill
            </h3>
            <p
              style={{
                fontFamily: 'var(--body)',
                fontSize: 'var(--font-size-base)',
                fontStyle: 'italic',
                color: 'var(--dark-gray)',
                lineHeight: '1.55',
                marginBottom: '20px',
              }}
            >
              Why ethical management shows up in the quiet places — not the policies.
            </p>
            <p
              style={{
                fontFamily: 'var(--body)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--dark-gray)',
                lineHeight: '1.6',
                marginBottom: 'var(--space-card-mobile)',
              }}
            >
              Ethical management isn’t about being nice. It isn’t about having the right values written on a website. It shows up when someone on your team says something feels off, and you decide whether curiosity or defensiveness comes first.
            </p>
            <div className="card-cta-row">
              <Link
                to="/writing"
                className="brand-link--cta"
                style={{
                  color: 'var(--teal-dark)',
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
      <div style={{ height: '1px', backgroundColor: 'var(--light-gray)', maxWidth: 'var(--max-width-layout)', margin: '0 auto' }} />

      {/* Podcast Teaser */}
      <section className="home-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-card)',
            }}
          >
            PODCAST
          </div>

          {/* Dark Card */}
          <div
            style={{
              backgroundColor: 'var(--charcoal)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-page-side)',
            }}
          >
            <h3
              className="home-podcast-title"
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: 'var(--space-sm)',
              }}
            >
              <span style={{ color: 'var(--gold)' }}>Ethics</span> <span style={{ color: 'var(--terra)' }}>&#123;</span><span style={{ color: 'var(--white)' }}>A</span><span style={{ color: 'var(--terra)' }}>&#125;</span> <span style={{ color: 'var(--teal)' }}>Side</span>
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-gap)', flexWrap: 'wrap' }}>
              <p
                style={{
                  fontFamily: 'var(--body)',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--hero-subtitle-color-soft)',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                  minWidth: '200px',
                }}
              >
                Conversations with UX and product leaders about what being an ethical leader means, and how companies can be ethical.
              </p>
              <Link
                to="/podcast"
                className="podcast-listen-btn"
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--charcoal)',
                  padding: 'var(--space-sm) var(--space-card)',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              >
                Listen Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <MarketingCtaStrip
        title="Looking to hire a UX Research leader?"
        body="I build research practices that scale — from establishing frameworks to growing high-performing teams."
        cta={<Link to="/work" className="primary-cta-dark">View My Work →</Link>}
      />

      <Footer />
    </div>
  );
}