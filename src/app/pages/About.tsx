import { useState, type ReactNode } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';
import { Link } from 'react-router';

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

export default function About() {
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
        .about-hero-section {
          background-color: var(--charcoal);
          padding: 100px 48px;
        }

        .about-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(240px, 340px);
          gap: 48px 56px;
          align-items: center;
        }

        .about-hero-copy {
          min-width: 0;
        }

        .about-hero-media {
          min-width: 0;
        }

        .about-hero-media img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: var(--radius-md);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
        }
        
        .about-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: var(--font-size-3xl);
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 720px;
        }

        .about-hero-title-gold {
          color: var(--gold);
        }
        
        .about-hero-subtitle {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.65);
          max-width: 640px;
          line-height: 1.6;
        }
        
        .about-values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
        }
        
        .about-section-padding {
          padding: 80px 48px;
        }
        
        .about-testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .about-testimonial-card {
          background-color: var(--white);
          border: 1px solid var(--light-gray);
          border-left: 4px solid var(--teal-dark);
          border-radius: var(--radius-md);
          padding: 32px;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .about-testimonial-head {
          margin-bottom: 20px;
        }

        .about-testimonial-name {
          font-family: 'DM Sans', sans-serif;
          font-size: var(--font-size-lg);
          font-weight: 700;
          color: var(--charcoal);
          line-height: 1.3;
        }

        .about-testimonial-role {
          font-family: 'DM Sans', sans-serif;
          font-size: var(--font-size-sm);
          color: var(--gray);
          margin-top: 6px;
          line-height: 1.45;
        }

        .about-testimonial-quote {
          font-family: 'Lora', serif;
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
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--white));
        }

        .about-testimonial-toggle {
          margin-top: 18px;
          align-self: flex-end;
          font-family: 'DM Sans', sans-serif;
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
        
        @media (max-width: 768px) {
          .about-hero-section {
            padding: 56px 24px;
          }

          .about-hero-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .about-hero-media {
            max-width: 320px;
            margin: 0 auto;
          }
          
          .about-hero-title {
            font-size: var(--font-size-2xl);
            max-width: none;
          }
          
          .about-hero-subtitle {
            font-size: var(--font-size-base);
            max-width: none;
          }
          
          .about-values-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .about-testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .about-section-padding {
            padding: 48px 24px;
          }
          
        }
      `}</style>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-inner">
          <div className="about-hero-copy">
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
              ABOUT JESSE
            </div>

            {/* Headline */}
            <h1 className="about-hero-title">
              Most companies want research.{' '}
              <span className="about-hero-title-gold">Few build the conditions for it to matter.</span>
            </h1>

            {/* Subheading */}
            <p className="about-hero-subtitle">
              I build the UX practices, teams, and frameworks companies need to make better decisions — especially when AI is involved. I specialize in building frameworks that scale and are sustainable, all while addressing ethical challenges in AI. Now my UX practice focuses on the question that matters most: how do we make sure AI systems actually work for the people they're supposed to serve?
            </p>
          </div>

          <div className="about-hero-media">
            <img src="/Jesse_Lee_Despard_Headshot.png" alt="Jesse Lee Despard" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section-padding" style={{ backgroundColor: 'var(--white)' }}>
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
              marginBottom: '24px',
            }}
          >
            My Background
          </div>

          {/* Long Body Text */}
          <div
            style={{
              fontFamily: 'Lora, serif',
              fontSize: 'var(--font-size-base)',
              color: 'var(--dark-gray)',
              lineHeight: '1.7',
            }}
          >
            <p style={{ marginBottom: '24px' }}>I came to UX by accident.</p>
            <p style={{ marginBottom: '24px' }}>
              I wasn&apos;t sure what I wanted to major in college. I changed my major several times, but nothing grabbed my
              attention until I started a Psychology 101 course.
            </p>
            <p style={{ marginBottom: '24px' }}>
              What caught my interest was how people interacted with each other. I eventually found a niche field of Human
              Factors: an applied science that focuses on fitting the task, tool, or environment to the user, rather than
              forcing the user to adapt to the system.
            </p>
            <p style={{ marginBottom: '24px' }}>
              I thought about systems, and realized that much of the time it is on the human to adapt to it instead of the
              system adapting to the user. It seemed imbalanced to me.
            </p>
            <p style={{ marginBottom: '24px' }}>
              From there, I earned my Master&apos;s in Human Computer Interaction (HCI). I thought I would get my doctorate and
              make a career in academia, but it wasn&apos;t in the cards for me. So out into the workforce I went, and it turned
              out that&apos;s where the real problems were anyway!
            </p>
            <p style={{ marginBottom: '24px' }}>
              In the workforce, I started as a UX researcher and spent the next several years building research practices for
              companies that hadn&apos;t had one before: writing the playbooks, hiring the teams, earning the trust of
              stakeholders who weren&apos;t sure they needed a researcher until they saw what one could do.
            </p>
            <p style={{ marginBottom: '24px' }}>
              I learned that what products delivered was almost always a research and design optimization gap — not a product
              gap.
            </p>
            <p style={{ marginBottom: '24px' }}>
              That insight followed me through HealthTech, EdTech, and PropTech, and across every industry the pattern held: the
              products that failed, failed because someone skipped the part where you actually talk to the people, and got their
              real thoughts on their actual problems. Not the problem the business thinks they need to solve.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Then AI changed everything. Not because the research questions got harder, but because the stakes got higher.
            </p>
            <p style={{ marginBottom: '24px' }}>
              An algorithm that does not consider nuances across demographic groups isn&apos;t just an algorithm problem.
              It&apos;s an equity and ethical problem. A model trained on biased data doesn&apos;t just make worse predictions — it
              amplifies those predictions at a scale no one has ever had to reckon with before.
            </p>
            <p>
              I knew in order for UX to grow as a field, it would be necessary to not only incorporate AI into workflows, but to
              know when to strategically place human judgement. It is human judgement that will ensure AI behaves ethically and
              in the best service for users and the UX professionals who use AI. This is where my work is now - helping companies
              and UX professionals navigate this AI landscape in a sustainable, ethical, and inclusive way.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
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
              marginBottom: '24px',
            }}
          >
            HOW I WORK
          </div>

          {/* Three Numbered Items */}
          <div className="about-values-grid">
            {/* Item 1 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-3xl)',
                  color: 'var(--gold)',
                  marginBottom: '16px',
                }}
              >
                01
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
                Ethics first — not as a checkbox
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                }}
              >
                I've turned down work that conflicted with my values, and I'd do it again. The organizations I work best with are the ones who mean it when they say they care about doing right by their users.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-3xl)',
                  color: 'var(--gold)',
                  marginBottom: '16px',
                }}
              >
                02
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
                UX that earns its seat at the table
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                }}
              >
                I don't just hand over a report. I build the relationships, speak the language of the business, and make sure the findings actually change something. That's always been the job.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-3xl)',
                  color: 'var(--gold)',
                  marginBottom: '16px',
                }}
              >
                03
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
                Sustainable, not heroic
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                }}
              >
                Good UX design and research practices don't depend on one person working unsustainable hours. I build systems and team structures that keep working after I'm gone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-section-padding" style={{ backgroundColor: 'var(--white)' }}>
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
            EXPERIENCE
          </div>

          {/* Three Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
            {/* EdTech Card */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
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
                EDTECH
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
                Manager of UX, SEO, and CRO
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                Unified a siloed and fractured team, increasing cross discipline collaboration and increased team trust.
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--gray)',
                }}
              >
                2025 – 2026
              </div>
            </div>

            {/* PropTech Card */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--gold)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                PROPTECH
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
                Lead UX Researcher
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                Conducted foundational research that doubled PMF, democratized research, and led to an acquisition.
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--gray)',
                }}
              >
                2020 – 2023
              </div>
            </div>

            {/* HealthTech Card */}
            <div
              style={{
                backgroundColor: 'var(--cream)',
                border: '1px solid var(--light-gray)',
                borderRadius: 'var(--radius-md)',
                padding: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--teal-dark)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                HEALTHTECH
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
                UX Researcher
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--dark-gray)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                Led research that reduced onboarding time by 50%, from 90 minute CX calls to 45 minute CX calls.
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--gray)',
                }}
              >
                2018 – 2020
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
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
            TESTIMONIALS
          </div>

          <div className="about-testimonials-grid">
            <TestimonialCard
              id="medhaswi"
              name="Medhaswi Paturu"
              role="Product Design @ Stride"
              isExpanded={Boolean(expandedTestimonials.medhaswi)}
              onToggle={handleTestimonialToggle}
            >
              <p>
                I had the pleasure of working with Jesse as my UX Manager, and they created the kind of team environment every
                designer hopes for. They fostered a sense of community and made it clear that we could always reach out to them,
                whether we needed guidance or support navigating a challenge. They also created a space where our team felt
                comfortable asking questions, sharing ideas, and growing together. Because of their leadership, I&apos;ve grown so
                much as a designer. They helped me feel supported, confident in my work, and encouraged me to keep pushing my
                thinking. I&apos;m incredibly grateful to have learned from them and to have been part of the team they built.
              </p>
            </TestimonialCard>

            <TestimonialCard
              id="jules"
              name="Jules Wood"
              role="UX Strategist"
              isExpanded={Boolean(expandedTestimonials.jules)}
              onToggle={handleTestimonialToggle}
            >
              <p>
                I worked with Jesse for three years to transform a real estate tech startup with no organized user experience
                cycle into a mature, collaborative, UX and Product-led organization with a dedicated UXR practice. Her
                accomplishments as our first UXR hire, and ultimately as the Lead UX Researcher and an advisor to senior
                leadership, were tremendous. With little prior research done before she arrived in 2020 and a shoestring budget,
                she imagined and established UXR operations, toolkits, and standards that rapidly matured our company. She
                developed our UXR roadmap, a regular cadence of research socialization and collaboration across departments, and
                all of our remote user research practices — collaborating closely with managers across several teams. The UXR
                Team she started was highly influential in how we prioritized product development, increased company-wide user
                empathy, kept track of user behavior and sentiment, and closed the gaps between our company&apos;s vision and our
                users&apos; actual experience with our products.
              </p>
            </TestimonialCard>

            <TestimonialCard
              id="jon"
              name="Jon Cox"
              role="Head of Sales at Ethica AI"
              isExpanded={Boolean(expandedTestimonials.jon)}
              onToggle={handleTestimonialToggle}
            >
              <p>
                I had the pleasure of working with Jesse, a Senior UX Researcher and Design Strategist, whose dynamic approach
                and eight years of experience significantly contributed to our team&apos;s success. Jesse&apos;s expertise in multi-method
                research and user-centered design isn&apos;t just extensive, but also deeply impactful.
              </p>
              <p>
                Jesse excels in translating complex customer needs into innovative solutions, fostering product-led growth in our
                fast-paced start-up environment. Her passion for understanding users is unmatched and evident in every project.
                Through her diligent research and keen insights, Jesse has been instrumental in developing robust research
                guidelines, which have greatly enhanced our user retention and overall customer satisfaction.
              </p>
              <p>
                What truly sets Jesse apart is her ability to collaborate effectively across multiple departments. She possesses a
                unique talent for bridging the gap between research, design, and strategy, ensuring that every team member is
                aligned with the user&apos;s perspective. Her contributions have not only improved our product&apos;s user experience but
                have also driven significant growth for our company.
              </p>
              <p>
                Jesse is an invaluable asset to any team, and her dedication to creating user-centric design strategies is both
                inspiring and exemplary. I wholeheartedly recommend Jesse to any organization looking to enhance its user experience
                and drive meaningful product growth.
              </p>
            </TestimonialCard>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <MarketingCtaStrip
        title="Ready to improve your research practice?"
        body="Let's talk about how I can help your team make better decisions."
        cta={<Link to="/hiring" className="primary-cta-dark">Get in Touch →</Link>}
      />

      <Footer />
    </div>
  );
}