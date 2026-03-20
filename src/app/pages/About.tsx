import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

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
            With 10+ years leading UX research teams, I specialize in building frameworks that scale, hiring high-performing researchers, and addressing ethical challenges in AI and algorithmic systems.
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
              "I don't just study users — I build the systems, teams, and cultures that make user research matter."
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
            <p style={{ marginBottom: '24px' }}>
              I started my career as a cognitive psychologist, fascinated by how people make decisions under uncertainty. After years in academia, I realized the real-world impact I wanted required moving closer to where products were built.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Over the past decade, I've led research teams at EdTech, HealthTech, and PropTech companies — each with their own unique challenges around user privacy, algorithmic bias, and ethical decision-making. I've seen firsthand how the right research practice can transform a company's culture and product outcomes.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Today, I focus on building research operations from the ground up: establishing frameworks, hiring researchers who bring diverse perspectives, and creating systems that help product teams make better decisions at scale. I'm particularly passionate about addressing bias in AI systems and ensuring research practices protect vulnerable users.
            </p>
            <p>
              I host a podcast called "Research & Bias" where I talk with fellow researchers and ethicists about the challenges we face. I also write regularly about research leadership, AI ethics, and building inclusive research practices.
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
                Research is a team sport
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                I believe the best insights come from collaboration. I work closely with designers, product managers, and engineers to ensure research is integrated throughout the product development process.
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
                Ethics first, always
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                Research has power. I prioritize participant privacy, informed consent, and addressing bias — especially when working with vulnerable populations or AI-driven systems.
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
                Scale through systems
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                Great research practices don't happen by accident. I build frameworks, processes, and tools that help research teams scale without sacrificing quality or rigor.
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
          <button
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
            }}
          >
            Get in Touch →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}