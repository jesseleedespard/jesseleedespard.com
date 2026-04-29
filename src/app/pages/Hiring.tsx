import { useState, type ReactNode } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

function TestimonialCard({
  id,
  name,
  role,
  isExpanded,
  onToggle,
  children,
}: {
  id: string;
  name: string;
  role: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  children: ReactNode;
}) {
  return (
    <div className="about-testimonial-card">
      <div className="about-testimonial-head">
        <div className="about-testimonial-name">{name}</div>
        <div className="about-testimonial-role">{role}</div>
      </div>
      <div
        className={`about-testimonial-quote${isExpanded ? '' : ' about-testimonial-quote--clamped'}`}
      >
        {children}
      </div>
      <button
        type="button"
        className="about-testimonial-toggle"
        aria-expanded={isExpanded}
        onClick={() => onToggle(id)}
      >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
    </div>
  );
}

export default function Hiring() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});

  const handleTestimonialToggle = (id: string) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--white)' }}>
      <style>{`
        .hiring-hero-section {
          background-color: var(--charcoal);
          padding: var(--space-hero) var(--space-page-side);
        }
        
        .hiring-hero-title {
          font-family: var(--display);
          font-weight: 700;
          font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl));
          color: var(--white);
          line-height: 1.15;
          margin-bottom: var(--space-card-mobile);
        }
        
        .hiring-hero-subtitle {
          font-family: var(--body);
          font-weight: 400;
          font-size: var(--font-size-lg);
          color: var(--hero-subtitle-color);
          margin-bottom: var(--space-card-mobile);
          line-height: 1.6;
          font-style: italic;
        }
        
        .hiring-steps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
        }
        
        .hiring-section-padding {
          padding: var(--space-section) var(--space-page-side);
        }
        
        .hiring-pull-quote-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .hiring-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-gap);
          max-width: var(--max-width-layout);
          margin: 0 auto;
        }

        .hiring-bottom-grid > div {
          min-width: 0;
        }

        .hiring-who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-gap-mobile);
        }

        .hiring-contact-email {
          font-family: var(--display);
          font-weight: 700;
          font-size: var(--font-size-xl);
          color: var(--white);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
          word-break: break-all;
        }

        .hiring-contact-email:hover {
          color: var(--gold);
        }

        .hiring-contact-email:focus-visible {
          outline: 2px solid var(--cream);
          outline-offset: 2px;
        }

        .about-testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: var(--space-gap);
          align-items: start;
        }

        .hiring-book-call-btn {
          background-color: var(--gold);
          transition: background-color 0.2s ease;
        }

        .hiring-book-call-btn:hover {
          background-color: var(--gold-hover);
        }

        .hiring-book-call-btn:focus {
          outline: 3px solid var(--teal);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .hiring-hero-section {
            padding: var(--space-hero-mobile) var(--space-page-side-mobile);
          }
          
          
          .hiring-hero-subtitle {
            font-size: var(--font-size-base);
          }
          
          .hiring-steps-grid {
            grid-template-columns: 1fr;
            gap: var(--space-gap);
          }
          
          .hiring-section-padding {
            padding: var(--space-section-sm) var(--space-page-side-mobile);
          }

          .hiring-bottom-grid {
            grid-template-columns: 1fr;
          }

          .hiring-who-grid {
            grid-template-columns: 1fr;
          }

          .about-testimonials-grid {
            grid-template-columns: 1fr;
          }

          .hiring-book-call-btn {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }
        }
        
        .about-testimonial-card {
          background-color: var(--white);
          border: 1px solid var(--light-gray);
          border-left: 4px solid var(--teal-dark);
          border-radius: var(--radius-md);
          padding: var(--space-card);
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .about-testimonial-head {
          margin-bottom: 20px;
        }

        .about-testimonial-name {
          font-family: var(--display);
          font-size: var(--font-size-lg);
          font-weight: 700;
          color: var(--charcoal);
          line-height: 1.3;
        }

        .about-testimonial-role {
          font-family: var(--display);
          font-size: var(--font-size-sm);
          color: var(--gray);
          margin-top: 6px;
          line-height: 1.45;
        }

        .about-testimonial-quote {
          font-family: var(--body);
          font-size: var(--font-size-base);
          color: var(--dark-gray);
          line-height: 1.65;
          font-style: italic;
        }

        .about-testimonial-quote p {
          margin: 0 0 1em 0;
        }

        .about-testimonial-quote p:last-child {
          margin-bottom: 0;
        }

        .about-testimonial-quote--clamped {
          max-height: calc(7 * 1lh);
          overflow: hidden;
          position: relative;
        }

        .about-testimonial-quote--clamped::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: calc(2.5 * 1lh);
          pointer-events: none;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--cream));
        }

        .about-testimonial-toggle {
          margin-top: 18px;
          align-self: flex-end;
          font-family: var(--display);
          font-size: var(--font-size-sm);
          font-weight: 700;
          letter-spacing: 0.03em;
          color: var(--brand-link);
          background: none;
          border: none;
          padding: 4px 0;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .about-testimonial-toggle:hover {
          color: var(--brand-link-hover);
        }

        .about-testimonial-toggle:focus-visible {
          outline: 2px solid var(--brand-link-focus-ring);
          outline-offset: 2px;
        }
      `}</style>
      {/* Hero Section */}
      <section className="hiring-hero-section">
        <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--gold)',
              marginBottom: '20px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            HIRING?
          </div>

          {/* Headline */}
          <h1 className="hiring-hero-title">Let's figure out if <span style={{ color: 'var(--gold)' }}>we're a good fit</span> for each other.</h1>

          {/* Subheading */}
          <p className="hiring-hero-subtitle">
            I help companies build research practices that uncover bias, reduce risk, and put real people at the center of AI-powered products. If what you're dealing with sounds like something I can help with, let's talk.
          </p>
        </div>
      </section>


      {/* How I Can Help */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
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
                    fontFamily: 'var(--display)',
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
                    fontFamily: 'var(--display)',
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
                    fontFamily: 'var(--body)',
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
                    fontFamily: 'var(--display)',
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
                    fontFamily: 'var(--display)',
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
                    fontFamily: 'var(--body)',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--dark-gray)',
                    lineHeight: '1.6',
                  }}
                >
                  You're building with AI and you want to know where the risks are before your users find them. I'll audit how AI can be embedded as an internal process for the UX team, identify disparate impacts across demographic users, and help you build frameworks for ethical decision-making.
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
                    fontFamily: 'var(--display)',
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
                    fontFamily: 'var(--display)',
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
                    fontFamily: 'var(--body)',
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--dark-gray)',
                    lineHeight: '1.6',
                  }}
                >
                  You have a UX practice. You need someone to lead the team, elevate their work, and make sure it reaches the people who need to act on those insights. I build and lead diverse teams so that insights are representative of your real users to make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'var(--display)',
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
                borderLeft: '4px solid var(--teal-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--body)',
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
                borderLeft: '4px solid var(--teal-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--body)',
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
                borderLeft: '4px solid var(--teal-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--body)',
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
                borderLeft: '4px solid var(--teal-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--body)',
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
        <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--body)',
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--body)',
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--body)',
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
              marginBottom: '48px',
            }}
          >
            TESTIMONIALS
          </div>

          <div className="about-testimonials-grid">
            <TestimonialCard
              id="jules"
              name="Jules Wood"
              role="UX Strategist"
              isExpanded={Boolean(expandedTestimonials.jules)}
              onToggle={handleTestimonialToggle}
            >
              <p>"As her manager, I can only sing her praises. Jesse is a delight to work with not only because she&apos;s kind and intellectually generous, but because she&apos;s extremely direct and laser focused on the &apos;why&apos; behind not only her work, but the mission of the entire company. She understands the friction between business and user needs and delivers both the science and the candor that leadership needs to make decisions at the highest level for the brand and company. Even before she took on her role as Lead, she generously mentored members of the UX team and organized user discovery coaching across all of Product Management. She&apos;s always brushing up on the latest from leaders in her space and beyond. Her academic background never fails to come in handy when lofty ideas or risky decisions warrant closer inspection through research. I could trust Jesse with any project, any feedback, and any of the hard truths that come with directing UX in a revenue focused business."</p>
            </TestimonialCard>

            <TestimonialCard
              id="esther"
              name="Esther Yang"
              role="Senior Product Designer"
              isExpanded={Boolean(expandedTestimonials.esther)}
              onToggle={handleTestimonialToggle}
            >
              <p>"Jesse has a deep understanding of how UXR can effectively drive tangible business outcomes. Not only did she establish UXR practices into our organization from scratch, but was its champion, regularly collaborating with other departments and socializing actionable insights that drove successful product development and initiatives across the organization. Jesse is thorough, impactful, and approachable, and she was constantly finding new ways to level up her skills and mobilize insights throughout the company. I learned a lot from her and any organization would be lucky to have her on their team!"</p>
            </TestimonialCard>

            <TestimonialCard
              id="anar"
              name="Anar Salayev"
              role="Product at Articulate | Executive Director at BikeSD"
              isExpanded={Boolean(expandedTestimonials.anar)}
              onToggle={handleTestimonialToggle}
            >
              <p>"Jesse joined the team and quickly developed a holistic understanding of the product, different teams, and the company overall. She is a strong advocate of getting designs in front of users early. Even when given an aggressive deadline, she was able to quickly meet with users to ensure that we had properly identified their needs and built a solution that appropriately addressed them. When presenting findings to stakeholders, she is clear and concise — she highlights what is necessary and has the foresight to include information about questions that may come up. I highly recommend Jesse to any employer that is looking to further mature their research operations."</p>
            </TestimonialCard>
          </div>
        </div>
      </section>

      {/* Bottom: book + email */}
      <section className="hiring-section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: 'var(--max-width-layout)', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--teal-dark)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            Let's Chat
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--body)',
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
                  className="hiring-book-call-btn"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--charcoal)',
                    padding: 'var(--space-sm) var(--space-card)',
                    borderRadius: 'var(--radius-md)',
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
                  fontFamily: 'var(--display)',
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
                  fontFamily: 'var(--body)',
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