import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Hiring() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--white)' }}>
      <style>{`
        .hiring-hero-section {
          background-color: var(--charcoal);
          padding: 100px 48px;
        }
        
        .hiring-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: var(--font-size-3xl);
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 900px;
        }
        
        .hiring-hero-subtitle {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-size: var(--font-size-lg);
          color: color-mix(in srgb, var(--white) 65%, transparent);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .hiring-steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
        }
        
        .hiring-section-padding {
          padding: 80px 48px;
        }
        
        .hiring-pull-quote-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .hiring-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hiring-who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .hiring-contact-email {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: var(--font-size-xl);
          color: var(--white);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .hiring-contact-email:hover {
          color: var(--gold);
        }

        .hiring-contact-email:focus-visible {
          outline: 2px solid var(--cream);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .hiring-hero-section {
            padding: 56px 24px;
          }
          
          .hiring-hero-title {
            font-size: var(--font-size-2xl);
          }
          
          .hiring-hero-subtitle {
            font-size: var(--font-size-base);
          }
          
          .hiring-steps-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .hiring-section-padding {
            padding: 48px 24px;
          }

          .hiring-bottom-grid {
            grid-template-columns: 1fr;
          }

          .hiring-who-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="hiring-hero-section">
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
            Hiring?
          </div>

          {/* Headline */}
          <h1 className="hiring-hero-title">Let's figure out if we're a good fit for each other.</h1>

          {/* Subheading */}
          <p className="hiring-hero-subtitle">
            I take on a small number of engagements at a time so I can do the work properly. If what you're dealing with sounds like something I can help with, let's talk.
          </p>
        </div>
      </section>

      {/* Pull quote */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="hiring-pull-quote-inner">
          <div
            style={{
              backgroundColor: 'var(--white)',
              border: '1px solid var(--light-gray)',
              borderLeft: '4px solid var(--teal-dark)',
              padding: '40px',
              borderRadius: 'var(--radius-md)',
            }}
          >
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: 'var(--font-size-xl)',
                color: 'var(--charcoal)',
                lineHeight: '1.65',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              "I help companies build research practices that uncover bias, reduce risk, and put real people at the center of AI-powered products."
            </p>
          </div>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            HOW I CAN HELP
          </div>

          {/* Service Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Service 1 */}
            <div style={{ display: 'flex', gap: '32px' }}>
              {/* Number Column */}
              <div
                style={{
                  width: '80px',
                  flexShrink: 0,
                  backgroundColor: 'var(--charcoal)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-2xl)',
                    color: 'var(--gold)',
                  }}
                >
                  01
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--charcoal)',
                    marginBottom: '12px',
                  }}
                >
                  UX Leadership & Strategy
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--dark-gray)',
                    lineHeight: '1.6',
                  }}
                >
                  You need a sustainable and durable UX function. I'll assess what you have, where you are, and where you want to go. I will build or scale your UX function from the ground up. I'll help you define your UX strategy, establish frameworks, and build the systems that make UX a real part of how your company makes decisions.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div style={{ display: 'flex', gap: '32px' }}>
              {/* Number Column */}
              <div
                style={{
                  width: '80px',
                  flexShrink: 0,
                  backgroundColor: 'var(--charcoal)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-2xl)',
                    color: 'var(--gold)',
                  }}
                >
                  02
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--charcoal)',
                    marginBottom: '12px',
                  }}
                >
                  Ethical AI UX Audit
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--dark-gray)',
                    lineHeight: '1.6',
                  }}
                >
                  You're building with AI and you want to know where the risks are before your users find them. I'll audit how AI can be embedded as an internal process for the UX team, identify disparate impacts across demographic users, and help you build frameworks for ethical decision making.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div style={{ display: 'flex', gap: '32px' }}>
              {/* Number Column */}
              <div
                style={{
                  width: '80px',
                  flexShrink: 0,
                  backgroundColor: 'var(--charcoal)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-2xl)',
                    color: 'var(--gold)',
                  }}
                >
                  03
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-xl)',
                    color: 'var(--charcoal)',
                    marginBottom: '12px',
                  }}
                >
                  Team Building & Coaching
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--dark-gray)',
                    lineHeight: '1.6',
                  }}
                >
                  You have a UX practice. You need someone to lead them, elevate their work, and make sure it reaches the people who need to act on those insights. I build and lead diverse teams so that insights are representative of your real users to make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            WHO I WORK WITH
          </div>

          <div className="hiring-who-grid">
            <div
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                Product and tech companies building AI-powered features who want to make sure those features work equitably and sustainably across the people who will actually use them.
              </p>
            </div>
            <div
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                Organizations navigating complex ethical challenges around user privacy, bias, or vulnerable populations.
              </p>
            </div>
            <div
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                Teams without a UX practice (or with a research practice that isn't working). Teams who need someone to come in, assess the situation, and build something that lasts.
              </p>
            </div>
            <div
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                Leaders who are willing to hear hard things and do something about them. If the goal is a report that sits on a shelf, I'm not the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--gold)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            THE PROCESS
          </div>

          {/* Three Numbered Steps */}
          <div className="hiring-steps-grid">
            {/* Step 1 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-3xl)',
                  color: 'var(--gold)',
                  marginBottom: '20px',
                }}
              >
                01
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--white)',
                  marginBottom: '12px',
                }}
              >
                Discovery Call
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--white)',
                  lineHeight: '1.6',
                }}
              >
                Tell me what you're working on, your challenges, structure, and goals. I'll tell you honestly whether I can help, and how I can help.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-3xl)',
                  color: 'var(--gold)',
                  marginBottom: '20px',
                }}
              >
                02
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--white)',
                  marginBottom: '12px',
                }}
              >
                Scoping and Proposal
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--white)',
                  lineHeight: '1.6',
                }}
              >
                If we are a fit, we'll define the engagement — the timeline, deliverables, what success looks like. You'll know exactly what to expect before we begin.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-3xl)',
                  color: 'var(--gold)',
                  marginBottom: '20px',
                }}
              >
                03
              </div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: 'var(--white)',
                  marginBottom: '12px',
                }}
              >
                Get to work
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--white)',
                  lineHeight: '1.6',
                }}
              >
                We'll work together through regular check-ins and milestones. I'll ensure you have everything you need to sustain the work after our engagement ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            TESTIMONIALS
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderLeft: '4px solid var(--teal-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '40px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                "As her manager, I can only sing her praises. Jesse is a delight to work with not only because she's kind and intellectually generous, but because she's extremely direct and laser focused on the 'why' behind not only her work, but the mission of the entire company. She understands the friction between business and user needs and delivers both the science and the candor that leadership needs to make decisions at the highest level for the brand and company. Even before she took on her role as Lead, she generously mentored members of the UX team and organized user discovery coaching across all of Product Management. She's always brushing up on the latest from leaders in her space and beyond. Her academic background never fails to come in handy when lofty ideas or risky decisions warrant closer inspection through research. I could trust Jesse with any project, any feedback, and any of the hard truths that come with directing UX in a revenue focused business."
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--charcoal)',
                  fontWeight: 700,
                }}
              >
                Jules Wood
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--gray)',
                }}
              >
                UX Strategist
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom: book + email */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            Want to chat?
          </div>
          <div className="hiring-bottom-grid">
            <div
              style={{
                backgroundColor: 'var(--charcoal)',
                borderRadius: 'var(--radius-md)',
                padding: '40px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}
              >
                Book a 30-minute chat.
              </h2>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--white)',
                  lineHeight: '1.6',
                  marginBottom: '28px',
                }}
              >
                No pitch deck. No pre-call questionnaire. Just a conversation to see if it makes sense to work together.
              </p>
              <div className="card-cta-row">
                <a
                  href="https://calendly.com/jesseleedespard/chat-with-jesse"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--charcoal)',
                    backgroundColor: 'var(--gold)',
                    padding: '14px 32px',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Book a Call →
                </a>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--charcoal)',
                borderRadius: 'var(--radius-md)',
                padding: '40px',
              }}
            >
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--white)',
                  marginBottom: '16px',
                }}
              >
                Prefer email?
              </h2>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--white)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                That works too.
              </p>
              <div className="card-cta-row">
                <a className="hiring-contact-email" href="mailto:jesse@jesseleedespard.com">
                  jesse@jesseleedespard.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}