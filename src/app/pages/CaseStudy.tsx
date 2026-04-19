import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: '#1E1E1E',
          padding: '100px 48px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Tag */}
          <div
            style={{
              display: 'inline-block',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#D4A843',
              border: '1px solid rgba(212, 168, 67, 0.4)',
              padding: '5px 12px',
              borderRadius: '3px',
              marginBottom: '24px',
            }}
          >
            Case Study · HealthTech
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '52px',
              color: '#FFFFFF',
              lineHeight: '1.15',
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            From 90 Minutes to 45: Redesigning a Broken Onboarding Flow
          </h1>

          {/* Italic Subheading */}
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'var(--font-size-lg)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '40px',
              maxWidth: '700px',
            }}
          >
            A 37-question onboarding form reduced by 20% — cutting onboarding call time by 50% via A/B test.
          </p>

          {/* Meta Strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
              }}
            >
              <span style={{ color: '#D4A843' }}>Role:</span>{' '}
              <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>Lead UX Researcher</span>
            </div>
            <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
              }}
            >
              <span style={{ color: '#D4A843' }}>Method:</span>{' '}
              <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>Modified Delphi Card Sort</span>
            </div>
            <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
              }}
            >
              <span style={{ color: '#D4A843' }}>Participants:</span>{' '}
              <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>28 internal stakeholders</span>
            </div>
            <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
              }}
            >
              <span style={{ color: '#D4A843' }}>Timeline:</span>{' '}
              <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>1 week</span>
            </div>
            <div style={{ width: '1px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            <div
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
              }}
            >
              <span style={{ color: '#D4A843' }}>Impact:</span>{' '}
              <span style={{ color: 'rgba(255, 255, 255, 0.82)' }}>50% reduction in call time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section style={{ padding: '80px 48px', backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            THE PROBLEM
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: '#1E1E1E',
              marginBottom: '32px',
            }}
          >
            A bloated onboarding process was frustrating customers and overwhelming staff
          </h2>

          {/* Body Paragraphs */}
          <div
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '17px',
              color: '#444444',
              lineHeight: '1.7',
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              A HealthTech company's customer onboarding process required new users to complete a 37-question form before their first consultation call. The form had grown organically over three years as different departments added "just one more question" to support their needs.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Customer support reported that onboarding calls averaged 45 minutes — far longer than the scheduled 30-minute slots. New customers were frustrated by redundant questions. Staff struggled to review all the information before calls. And the sales team was losing deals because prospects abandoned the form halfway through.
            </p>
            <p>
              The VP of Product asked: Which questions do we actually need? The challenge was that each stakeholder believed their questions were essential. We needed a research approach that would build consensus while prioritizing the customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Research Goal Section */}
      <section style={{ padding: '80px 48px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            RESEARCH GOAL
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: '#1E1E1E',
              marginBottom: '48px',
            }}
          >
            Build stakeholder consensus on question priority
          </h2>

          {/* Finding Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderLeft: '4px solid #1F5364',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Identify critical questions</strong> that must be asked before the first call vs. information that could be gathered later in the customer journey.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderLeft: '4px solid #1F5364',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Surface assumptions</strong> about which questions were "required" — and test whether those assumptions were actually true.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderLeft: '4px solid #1F5364',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Build alignment</strong> across departments (Sales, Customer Success, Product, Compliance) on a streamlined onboarding experience.
              </p>
            </div>

            {/* Card 4 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderLeft: '4px solid #1F5364',
                borderRadius: '8px',
                padding: '24px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Validate changes</strong> through A/B testing to ensure the revised form improved both completion rates and call efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section style={{ padding: '80px 48px', backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            METHODOLOGY
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: '#1E1E1E',
              marginBottom: '24px',
            }}
          >
            Modified Delphi Card Sort
          </h2>

          {/* Body Text */}
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '17px',
              color: '#444444',
              lineHeight: '1.7',
              marginBottom: '48px',
            }}
          >
            I chose a Modified Delphi method because it builds consensus through iterative rounds while preventing the loudest voices from dominating. This approach was critical in a politically charged environment where each department felt territorial about "their" questions.
          </p>

          {/* Numbered Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', gap: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#1E1E1E',
                }}
              >
                01
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '19px',
                    color: '#1E1E1E',
                    marginBottom: '8px',
                  }}
                >
                  Individual Card Sort
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '15px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  28 stakeholders independently sorted all 37 questions into three categories: Critical (must ask before first call), Important (ask within first month), and Optional (nice to have). This prevented groupthink and revealed true priorities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', gap: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#1E1E1E',
                }}
              >
                02
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '19px',
                    color: '#1E1E1E',
                    marginBottom: '8px',
                  }}
                >
                  Consensus Analysis
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '15px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  I analyzed the results to identify questions with high consensus (80%+ agreement) and low consensus (split ratings). Only 12 questions achieved high consensus as "Critical" — meaning two-thirds of the form was debatable.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', gap: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#1E1E1E',
                }}
              >
                03
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '19px',
                    color: '#1E1E1E',
                    marginBottom: '8px',
                  }}
                >
                  Facilitated Discussion
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '15px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  I presented the data back to stakeholders in a workshop, focusing discussion on the 25 low-consensus questions. For each contested question, I asked: "What decision can't you make without this information?" This forced teams to articulate actual business impact.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div style={{ display: 'flex', gap: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#1E1E1E',
                }}
              >
                04
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: '19px',
                    color: '#1E1E1E',
                    marginBottom: '8px',
                  }}
                >
                  A/B Testing
                </h3>
                <p
                  style={{
                    fontFamily: 'Lora, serif',
                    fontSize: '15px',
                    color: '#444444',
                    lineHeight: '1.6',
                  }}
                >
                  The revised 30-question form was tested against the original 37-question version. We tracked completion rate, abandonment rate, and average onboarding call duration. The streamlined form won decisively across all metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section style={{ padding: '80px 48px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            KEY FINDINGS
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: '#1E1E1E',
              marginBottom: '48px',
            }}
          >
            What we learned
          </h2>

          {/* Finding Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Finding 1 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '28px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '19px',
                  color: '#1E1E1E',
                  marginBottom: '12px',
                }}
              >
                Most questions were "legacy cruft"
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                Of the 25 contested questions, 18 hadn't been referenced in a customer call in the past three months. Teams added them "just in case" but never actually used the data.
              </p>
            </div>

            {/* Finding 2 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '28px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '19px',
                  color: '#1E1E1E',
                  marginBottom: '12px',
                }}
              >
                Data was siloed by department
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                Sales, Product, and Compliance each had their own dashboards. Nobody was looking at the holistic customer experience — they only cared about "their" questions.
              </p>
            </div>

            {/* Finding 3 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '28px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '19px',
                  color: '#1E1E1E',
                  marginBottom: '12px',
                }}
              >
                Staff didn't trust the form data
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                Customer Success reps admitted they re-asked most questions during calls because customers often misunderstood what was being asked in the form.
              </p>
            </div>

            {/* Finding 4 */}
            <div
              style={{
                backgroundColor: '#FAF7F2',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '28px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: '19px',
                  color: '#1E1E1E',
                  marginBottom: '12px',
                }}
              >
                Compliance was negotiable
              </h3>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                Several "legally required" questions turned out to be optional. Legal counsel confirmed we could gather that information later in the customer journey without risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section style={{ padding: '80px 48px', backgroundColor: '#FAF7F2' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            OUTCOME
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: '#1E1E1E',
              marginBottom: '24px',
            }}
          >
            Measurable improvements across the board
          </h2>

          {/* Body Text */}
          <p
            style={{
              fontFamily: 'Lora, serif',
              fontSize: '17px',
              color: '#444444',
              lineHeight: '1.7',
              marginBottom: '48px',
            }}
          >
            The A/B test ran for four weeks with 400 new customers split evenly between the 37-question and 30-question versions. The streamlined form outperformed on every metric we tracked.
          </p>

          {/* Dark Stats Box */}
          <div
            style={{
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              padding: '48px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '32px' }}>
              {/* Stat 1 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-3xl)',
                    color: '#D4A843',
                    marginBottom: '8px',
                  }}
                >
                  20%
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.4',
                  }}
                >
                  Fewer questions
                </div>
              </div>

              {/* Stat 2 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-3xl)',
                    color: '#D4A843',
                    marginBottom: '8px',
                  }}
                >
                  50%
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.4',
                  }}
                >
                  Shorter onboarding calls
                </div>
              </div>

              {/* Stat 3 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-3xl)',
                    color: '#D4A843',
                    marginBottom: '8px',
                  }}
                >
                  35%
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.4',
                  }}
                >
                  Higher completion rate
                </div>
              </div>

              {/* Stat 4 */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-3xl)',
                    color: '#D4A843',
                    marginBottom: '8px',
                  }}
                >
                  18%
                </div>
                <div
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.4',
                  }}
                >
                  Fewer abandoned forms
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section style={{ padding: '80px 48px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: '#1F5364',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            LESSONS LEARNED
          </div>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-2xl)',
              color: '#1E1E1E',
              marginBottom: '48px',
            }}
          >
            What I'd do differently next time
          </h2>

          {/* Lesson Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Lesson 1 */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: '#1E1E1E',
                }}
              >
                01
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Talk to customers first.</strong> I should have interviewed 5-10 customers about their form experience before running the stakeholder exercise. Their perspective would have been valuable ammunition.
              </p>
            </div>

            {/* Lesson 2 */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: '#1E1E1E',
                }}
              >
                02
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Get executive sponsorship early.</strong> The VP of Product championed this work, but I wish I'd secured buy-in from the VP of Sales earlier. It would have prevented some political friction.
              </p>
            </div>

            {/* Lesson 3 */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: '#1E1E1E',
                }}
              >
                03
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Anonymous sorting matters.</strong> Having stakeholders sort questions independently (rather than in a group workshop) prevented louder voices from dominating and revealed more honest priorities.
              </p>
            </div>

            {/* Lesson 4 */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  flexShrink: 0,
                  backgroundColor: '#D4A843',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-lg)',
                  color: '#1E1E1E',
                }}
              >
                04
              </div>
              <p
                style={{
                  fontFamily: 'Lora, serif',
                  fontSize: '15px',
                  color: '#444444',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ fontWeight: 700 }}>Build a review process.</strong> We should have established a quarterly review of the form to prevent it from bloating again. Without ongoing governance, forms tend to creep back up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <MarketingCtaStrip
        title="Interested in similar research for your team?"
        body="I'd love to talk about how I can help streamline your user experience."
        cta={<Link to="/hiring" className="primary-cta-dark">Get in Touch →</Link>}
      />

      <Footer />
    </div>
  );
}