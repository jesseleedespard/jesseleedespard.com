import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Hiring() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .hiring-hero-section {
          background-color: #1E1E1E;
          padding: 100px 48px;
        }
        
        .hiring-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 52px;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 900px;
        }
        
        .hiring-hero-subtitle {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 24px;
          max-width: 700px;
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
        
        @media (max-width: 768px) {
          .hiring-hero-section {
            padding: 56px 24px;
          }
          
          .hiring-hero-title {
            font-size: 32px;
          }
          
          .hiring-hero-subtitle {
            font-size: 16px;
          }
          
          .hiring-steps-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .hiring-section-padding {
            padding: 48px 24px;
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
              fontSize: '11px',
              color: '#D4A843',
              marginBottom: '20px',
              letterSpacing: '1.5px',
            }}
          >
            WORK WITH JESSE
          </div>

          {/* Headline */}
          <h1 className="hiring-hero-title">
            Let's build a research practice that drives real product impact.
          </h1>

          {/* Subheading */}
          <p className="hiring-hero-subtitle">
            Whether you're starting from scratch or scaling an existing team, I can help you build the frameworks, processes, and culture needed for great research.
          </p>

          {/* Italic Positioning Statement */}
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.5)',
              maxWidth: '700px',
              lineHeight: '1.6',
            }}
          >
            Currently open to Director and VP-level research leadership roles, advisory positions, and strategic consulting engagements.
          </p>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="hiring-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            WHO I WORK WITH
          </div>

          {/* Bullet Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#D4A843',
                }}
              >
                •
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '17px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Product leaders</strong> who need to build or scale research operations from the ground up
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#D4A843',
                }}
              >
                •
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '17px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Early-stage companies</strong> establishing ethical research practices, especially in AI, EdTech, or HealthTech
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#D4A843',
                }}
              >
                •
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '17px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Organizations</strong> navigating complex ethical challenges around user privacy, bias, or vulnerable populations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="hiring-section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            SERVICES
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
                  backgroundColor: '#1E1E1E',
                  borderRadius: '8px',
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
                    fontSize: '32px',
                    color: '#D4A843',
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
                    fontSize: '24px',
                    color: '#1E1E1E',
                    marginBottom: '12px',
                  }}
                >
                  Research Leadership & Strategy
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '17px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  Build or scale your research function from the ground up. I'll help you define your research strategy, establish frameworks, create career ladders, and develop a roadmap for growth.
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
                  backgroundColor: '#1E1E1E',
                  borderRadius: '8px',
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
                    fontSize: '32px',
                    color: '#D4A843',
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
                    fontSize: '24px',
                    color: '#1E1E1E',
                    marginBottom: '12px',
                  }}
                >
                  Team Building & Hiring
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '17px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  Hire the right researchers for your team. I'll help you write job descriptions, screen candidates, run interviews, and build diverse teams that bring different perspectives to your research practice.
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
                  backgroundColor: '#1E1E1E',
                  borderRadius: '8px',
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
                    fontSize: '32px',
                    color: '#D4A843',
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
                    fontSize: '24px',
                    color: '#1E1E1E',
                    marginBottom: '12px',
                  }}
                >
                  Ethical AI & Bias Audits
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '17px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  Ensure your AI-driven products don't perpetuate harm. I'll audit your research practices, identify bias in your data and algorithms, and help you build frameworks for ethical decision-making.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div style={{ display: 'flex', gap: '32px' }}>
              {/* Number Column */}
              <div
                style={{
                  width: '80px',
                  flexShrink: 0,
                  backgroundColor: '#1E1E1E',
                  borderRadius: '8px',
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
                    fontSize: '32px',
                    color: '#D4A843',
                  }}
                >
                  04
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#1E1E1E',
                    marginBottom: '12px',
                  }}
                >
                  Research Operations & Tools
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '17px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  Set up systems that help your research practice scale. From participant recruitment platforms to insight repositories, I'll help you choose and implement the right tools for your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="hiring-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            PROCESS
          </div>

          {/* Three Numbered Steps */}
          <div className="hiring-steps-grid">
            {/* Step 1 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '56px',
                  color: '#D4A843',
                  marginBottom: '20px',
                }}
              >
                01
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
                Discovery Call
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                We'll talk about your research challenges, team structure, and goals. I'll share how I've solved similar problems and whether we're a good fit.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '56px',
                  color: '#D4A843',
                  marginBottom: '20px',
                }}
              >
                02
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
                Scoping & Proposal
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                I'll create a detailed proposal outlining the work, timeline, deliverables, and investment. You'll know exactly what to expect before we begin.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '56px',
                  color: '#D4A843',
                  marginBottom: '20px',
                }}
              >
                03
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
                Collaboration & Delivery
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
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
      <section className="hiring-section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '48px',
            }}
          >
            TESTIMONIALS
          </div>

          {/* Two Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Testimonial 1 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
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
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                "Jesse helped us establish our research practice from zero. Within six months, we went from no researchers to a team of five with clear frameworks, processes, and buy-in from leadership. Their strategic thinking and ability to coach others is unmatched."
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#1E1E1E',
                  fontWeight: 700,
                }}
              >
                Sarah Chen
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#888888',
                }}
              >
                VP of Product, EdTech Startup
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
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
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                }}
              >
                "We brought Jesse in to audit our AI bias practices. Not only did they identify critical issues we'd missed, but they helped us build a framework that's now part of our core product development process. Every AI company should have someone like Jesse on their side."
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#1E1E1E',
                  fontWeight: 700,
                }}
              >
                Marcus Williams
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#888888',
                }}
              >
                Chief Product Officer, ML Platform
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="hiring-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              padding: '64px 48px',
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
              Let's talk about your research practice
            </h2>
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '17px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6',
                marginBottom: '40px',
              }}
            >
              Book a 30-minute discovery call to discuss your needs and how I can help.
            </p>

            {/* Calendly Placeholder */}
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#444444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888888',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                borderRadius: '8px',
                marginBottom: '32px',
              }}
            >
              [Calendly Embed Placeholder]
            </div>

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
              Book a Call →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="hiring-section-padding" style={{ backgroundColor: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '17px',
              color: '#444444',
              marginBottom: '16px',
            }}
          >
            Prefer email?
          </p>
          <a
            href="mailto:jesse@example.com"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#1F5364',
              textDecoration: 'none',
            }}
          >
            jesse@example.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}