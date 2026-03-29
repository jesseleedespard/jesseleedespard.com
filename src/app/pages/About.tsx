import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .about-hero-section {
          background-color: #1E1E1E;
          padding: 100px 48px;
        }
        
        .about-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 52px;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 24px;
          max-width: 900px;
        }
        
        .about-hero-subtitle {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.65);
          max-width: 700px;
          line-height: 1.6;
        }
        
        .about-photo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        
        .about-values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 32px;
        }
        
        .about-section-padding {
          padding: 80px 48px;
        }
        
        .about-cta-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .about-hero-section {
            padding: 56px 24px;
          }
          
          .about-hero-title {
            font-size: 32px;
          }
          
          .about-hero-subtitle {
            font-size: 16px;
          }
          
          .about-photo-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .about-values-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .about-section-padding {
            padding: 48px 24px;
          }
          
          .about-cta-flex {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="about-hero-section">
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
            ABOUT JESSE
          </div>

          {/* Headline */}
          <h1 className="about-hero-title">
            Building research practices that turn user insights into meaningful product decisions.
          </h1>

          {/* Subheading */}
          <p className="about-hero-subtitle">
            I build the UX practices, teams, and frameworks companies need to make better decisions — especially when AI is involved. I specialize in building frameworks that scale and are sustainable, all while addressing ethical challenges in AI. Now my UX practice focuses on the question that matters most: how do we make sure AI systems actually work for the people they're supposed to serve?
          </p>
        </div>
      </section>

      {/* Photo + Pull Quote Section */}
      <section className="about-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="about-photo-grid">
          {/* Placeholder Image */}
          <div
            style={{
              width: '100%',
              height: '500px',
              backgroundColor: '#CCCCCC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888888',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              borderRadius: '8px',
            }}
          >
            [Photo Placeholder]
          </div>

          {/* Pull Quote */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EEEEEE',
              borderLeft: '4px solid #1F5364',
              padding: '40px',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                fontFamily: 'Lora, serif',
                fontSize: '20px',
                color: '#1E1E1E',
                lineHeight: '1.65',
                fontStyle: 'italic',
                marginBottom: '24px',
              }}
            >
              "Most companies want research. Few build the conditions for it to matter."
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#1F5364',
                fontWeight: 700,
              }}
            >
              — Jesse Lee Despard
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-section-padding" style={{ backgroundColor: '#FFFFFF' }}>
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
            THE BACKGROUND
          </div>

          {/* Long Body Text */}
          <div
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '17px',
              color: '#444444',
              lineHeight: '1.7',
            }}
          >
            <p style={{ marginBottom: '24px' }}>I came to UX by mistake.</p>
            <p style={{ marginBottom: '24px' }}>
              I wasn't sure what I wanted to major in college. I changed my major several times, but nothing grabbed my attention until I started a Psychology 101 course.
            </p>
            <p style={{ marginBottom: '24px' }}>
              What caught my interest was how people interacted with each other. I eventually found a niche field of Human Factors — an applied science that focuses on fitting the task, tool, or environment to the user, rather than forcing the user to adapt to the system.
            </p>
            <p style={{ marginBottom: '24px' }}>
              I thought about systems, and realized that much of the time it is on the human to adapt to it instead of the system adapting to the user. It seemed imbalanced to me.
            </p>
            <p style={{ marginBottom: '24px' }}>
              From there, I earned my Master's in Human-Computer Interaction. I thought I would get my doctorate and make a career in academia, but it wasn't in the cards for me. So out into the workforce I went — and it turned out that's where the real problems were anyway.
            </p>
            <p style={{ marginBottom: '24px' }}>
              In the workforce, I started as a UX researcher and spent the next several years building research practices for companies that hadn't had one before — writing the playbooks, hiring the teams, earning the trust of stakeholders who weren't sure they needed a researcher until they saw what one could do.
            </p>
            <p style={{ marginBottom: '24px' }}>
              I learned that what products delivered was almost always a research and design optimization gap — not a product gap.
            </p>
            <p style={{ marginBottom: '24px' }}>
              That insight followed me through HealthTech, EdTech, and PropTech, and across every industry the pattern held: the products that failed, failed because someone skipped the part where you actually talk to the people, and got their real thoughts on their actual problems. Not the problem the business thinks they need to solve.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Then AI changed everything. Not because the research questions got harder — because the stakes got higher.
            </p>
            <p>
              An algorithm that does not consider nuances across demographic groups isn't just an algorithm problem. It's an equity problem. A model trained on biased data doesn't just make worse predictions — it amplifies those predictions at a scale no one has ever had to reckon with before.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
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
                  fontSize: '48px',
                  color: '#D4A843',
                  marginBottom: '16px',
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
                Ethics first — not as a checkbox:
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
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
                  fontSize: '48px',
                  color: '#D4A843',
                  marginBottom: '16px',
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
                UX that earns its seat at the table:
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
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
                  fontSize: '48px',
                  color: '#D4A843',
                  marginBottom: '16px',
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
                Sustainable, not heroic:
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
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
      <section className="about-section-padding" style={{ backgroundColor: '#FFFFFF' }}>
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
            EXPERIENCE
          </div>

          {/* Three Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
            {/* EdTech Card */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
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
                EDTECH
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
                Director of UX Research
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                Built research practice from zero, hired 8 researchers, established frameworks for ethical AI research with student data.
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#888888',
                }}
              >
                2020 – 2023
              </div>
            </div>

            {/* HealthTech Card */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '11px',
                  color: '#1F5364',
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
                  fontSize: '19px',
                  color: '#1E1E1E',
                  marginBottom: '12px',
                }}
              >
                Senior UX Researcher
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                Led research for patient onboarding, HIPAA compliance studies, and accessibility improvements for elderly users.
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#888888',
                }}
              >
                2017 – 2020
              </div>
            </div>

            {/* PropTech Card */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '11px',
                  color: '#D4A843',
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
                  fontSize: '19px',
                  color: '#1E1E1E',
                  marginBottom: '12px',
                }}
              >
                UX Researcher
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                }}
              >
                Conducted foundational research for rental platform, focusing on trust & safety and fraud prevention.
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#888888',
                }}
              >
                2014 – 2017
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-section-padding" style={{ backgroundColor: '#FAF7F2' }}>
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
            TESTIMONIALS
          </div>

          {/* Three Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
            {/* Testimonial 1 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderLeft: '4px solid #1F5364',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}
              >
                "Jesse transformed how our product team thinks about research. They built a practice that scaled from zero to supporting 40+ PMs."
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#1E1E1E',
                  fontWeight: 700,
                }}
              >
                Sarah Chen
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: '#888888',
                }}
              >
                VP of Product, EdTech Co.
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderLeft: '4px solid #1F5364',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}
              >
                "Their work on ethical AI research set the standard for our entire organization. Jesse doesn't just do research — they teach teams how to think."
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#1E1E1E',
                  fontWeight: 700,
                }}
              >
                Marcus Williams
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: '#888888',
                }}
              >
                Chief Product Officer
              </div>
            </div>

            {/* Testimonial 3 */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #EEEEEE',
                borderLeft: '4px solid #1F5364',
                borderRadius: '8px',
                padding: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}
              >
                "Working with Jesse changed my understanding of what research leadership looks like. They hire incredible talent and create space for them to thrive."
              </p>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: '#1E1E1E',
                  fontWeight: 700,
                }}
              >
                Priya Patel
              </div>
              <div
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: '#888888',
                }}
              >
                Senior UX Researcher
              </div>
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
        <div className="about-cta-flex">
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
              Ready to improve your research practice?
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
              Let's talk about how I can help your team make better decisions.
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