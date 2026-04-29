import { useEffect, Fragment } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';

export default function CaseStudyHealthtech() {
  useEffect(() => {
    document.title =
      'From 90 Minutes to 45: Redesigning a Broken Onboarding Flow · Jesse Lee Despard';
  }, []);

  return (
    <Fragment>
    <div className="healthtech-case-study-page">
      <style>{`
.healthtech-case-study-page, .healthtech-case-study-page *, .healthtech-case-study-page *::before, .healthtech-case-study-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
.healthtech-case-study-page {
  --display: 'DM Sans', system-ui, sans-serif;
  --body:    'Lora', Georgia, serif;
  --wide: 1100px;
  --max:  860px;
}
html { scroll-behavior: smooth; }
.healthtech-case-study-page { font-family: var(--body); background: var(--cream); color: var(--charcoal); font-size: var(--font-size-base); line-height: 1.75; -webkit-font-smoothing: antialiased; min-height: 100vh; padding-bottom: var(--space-page-side); }

/* HERO */
.hero { background: var(--charcoal); padding: var(--space-hero) var(--space-page-side) 72px; position: relative; overflow: hidden; }
.hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(to right, var(--teal), var(--gold), transparent); }
.hero-inner { max-width: var(--max); margin: 0 auto; }
.hero-tag { font-family: var(--display); display: inline-block; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; border: 1px solid rgba(212,168,67,0.4); padding: 8px 16px; border-radius: var(--radius-sm); }
.hero h1 { font-family: var(--display); font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl)); font-weight: 700; color: var(--white); line-height: 1.15; letter-spacing: -0.4px; margin-bottom: 14px; text-wrap: balance; }
.hero-sub { font-family: var(--body); font-size: var(--font-size-lg); color: var(--hero-subtitle-color); line-height: 1.6; margin-bottom: 36px; font-style: italic; }
.meta-strip { display: flex; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; gap: 0; }
.meta-item { padding-right: 24px; margin-right: 24px; border-right: 1px solid rgba(255,255,255,0.1); }
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label { font-family: var(--display); font-size: var(--font-size-xs); letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 3px; }
.meta-value { font-family: var(--display); font-size: var(--font-size-sm); color: rgba(255,255,255,0.82); font-weight: 500; }
.img-caption { font-family: var(--display); font-size: var(--font-size-xs); color: var(--dark-gray); font-style: italic; margin-top: 8px; text-align: center; }
.redesign-label { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal); margin-bottom: 16px; margin-top: 32px; }

/* LAYOUT */
.page-wrap { max-width: calc(var(--max) + (var(--space-page-side) * 2)); margin: 0 auto; padding: 0 var(--space-page-side); }
.section { padding: 52px 0 0; }
.section-label { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal-dark); margin-bottom: 8px; }
.section h2 { font-family: var(--display); font-size: clamp(var(--font-size-lg), 2.8vw, var(--font-size-xl)); font-weight: 700; color: var(--charcoal); line-height: 1.3; letter-spacing: -0.3px; margin-bottom: 16px; }
.section p { color: var(--dark-gray); margin-bottom: 16px; }
.section p:last-child { margin-bottom: 0; }
.divider { height: 1px; background: var(--light-gray); margin: 48px 0 0; }

/* THEME / NUMBERED CARDS */
.theme-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px; }
.theme-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); padding: 16px 18px; display: flex; gap: 12px; align-items: flex-start; }
.theme-num { font-family: var(--display); font-size: var(--font-size-lg); font-weight: 700; color: var(--teal); min-width: 32px; }
.theme-content h3 { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--charcoal); margin-bottom: 4px; }
.theme-content p { font-size: var(--font-size-sm); line-height: 1.7; color: var(--dark-gray); margin: 0; }

/* STATS ROW */
.stats-callout { background: var(--charcoal); border-radius: var(--radius-md); padding: 36px 40px; margin-top: 24px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; align-items: center; }
.stat-item { text-align: center; padding: 24px 16px; border-right: 1px solid rgba(255,255,255,0.12); }
.stat-item:last-child { border-right: none; }
.stat-number { font-family: var(--display); font-size: clamp(var(--font-size-xl), 3vw, var(--font-size-2xl)); font-weight: 700; color: var(--gold); margin-bottom: 8px; line-height: 1.2; display: block; text-align: center; }
.stat-label { font-family: var(--display); font-size: var(--font-size-xs); color: rgba(255,255,255,0.75); font-weight: 500; line-height: 1.4; text-align: center; }

.lessons { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }
.lesson {
  background: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: var(--radius-sm);
  padding: var(--space-page-side-mobile) 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.lesson-num {
  font-family: var(--display);
  font-weight: 700;
  font-size: var(--font-size-xl);
  color: var(--teal);
  min-width: 40px;
  flex-shrink: 0;
  line-height: 1.3;
}
.lesson-body { font-size: var(--font-size-sm); line-height: 1.7; color: var(--dark-gray); margin: 0; }
.lesson-body strong { color: var(--charcoal); }


/* MOBILE: 375px target, 8pt grid, centered text */
@media (max-width: 768px) {

  /* HERO */
  .hero { padding: var(--space-hero-mobile) var(--space-page-side-mobile) 40px !important; }
  .hero-inner { max-width: 100% !important; }
  .hero-tag { font-size: var(--font-size-xs) !important; }
  .hero h1 { font-size: clamp(var(--font-size-xl), 6vw, var(--font-size-2xl)) !important; line-height: 1.2 !important; }
  .hero-sub { font-size: var(--font-size-base) !important; max-width: 100% !important; }
  .hero-cta { display: inline-block !important; }
  .show-title { font-size: clamp(var(--font-size-xl), 6vw, var(--font-size-2xl)) !important; }

  /* META STRIP */
  .meta-strip { flex-direction: column !important; flex-wrap: nowrap !important; align-items: stretch !important; gap: 0 !important; padding-top: 24px !important; border-top: 1px solid rgba(255,255,255,0.12) !important; }
  .meta-item { display: block !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 0 0 16px 0 !important; margin: 0 0 16px 0 !important; width: 100% !important; text-align: center !important; }
  .meta-item:last-child { border-bottom: none !important; padding-bottom: 0 !important; margin-bottom: 0 !important; }

  /* PAGE WRAP */
  .page-wrap { padding: 0 24px !important; }

  /* SECTIONS */
  .section { padding: 48px 24px 0 !important; }
  .section h2 { font-size: clamp(var(--font-size-lg), 5.5vw, var(--font-size-xl)) !important; }
  .divider { margin: 40px 0 0 !important; }


  /* CARD GRID */
  .card-grid { padding: 32px 0 !important; gap: 16px !important; }
  .cs-cards { grid-template-columns: 1fr !important; gap: 16px !important; }

  /* CASE STUDY CARDS: left-align card content for readability */
  .cs-card-body { padding: 24px !important; text-align: left !important; }
  .lead-card-body { padding: 24px !important; text-align: left !important; }
  .cs-card-title { text-align: left !important; }
  .cs-card-desc { text-align: left !important; }
  .cs-card-footer { text-align: left !important; }
  .lead-card-title { text-align: left !important; }
  .lead-card-desc { text-align: left !important; }

  /* GRIDS: all single column */
  .two-col { grid-template-columns: 1fr !important; gap: 24px !important; }
  .grid2 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .grid3 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .track-grid { grid-template-columns: 1fr !important; }
  .theme-grid { grid-template-columns: 1fr !important; }
  .impl-grid { grid-template-columns: 1fr !important; }
  .exp-grid { grid-template-columns: 1fr !important; }
  .testimonials-grid { grid-template-columns: 1fr !important; }
  .outcomes-grid { grid-template-columns: 1fr !important; }
  .stats-row.three { grid-template-columns: 1fr 1fr !important; }
  .stats-row.two { grid-template-columns: 1fr 1fr !important; }
  .stat-row { grid-template-columns: 1fr 1fr !important; }
  .stats-grid { grid-template-columns: 1fr !important; }
  .healthtech-case-study-page .stat-item { padding: 20px 24px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.12) !important; }
  .healthtech-case-study-page .stat-item:last-child { border-bottom: none !important; }
  .platforms-grid { grid-template-columns: 1fr !important; }
  .discipline-grid { grid-template-columns: 1fr !important; }
  .daio-grid { grid-template-columns: 1fr !important; }
  .photo-block { grid-template-columns: 1fr !important; }

  /* COMPONENTS */
  .show-block { flex-direction: column !important; align-items: center !important; gap: 24px !important; text-align: center !important; }
  .show-art { margin: 0 auto !important; }
  .show-info { text-align: center !important; }
  .podcast-card { flex-direction: column !important; gap: 24px !important; padding: 32px 24px !important; text-align: center !important; }
  .podcast-desc { text-align: center !important; }
  .pmf-callout { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .pmf-text { text-align: center !important; }
  .notify-strip { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .notify-links { flex-direction: column !important; width: 100% !important; align-items: center !important; }
  .notify-btn { text-align: center !important; display: block !important; padding: 16px !important; }
  .notify-btn-outline { text-align: center !important; display: block !important; padding: 16px !important; }
  .hinge-box { padding: 24px !important; text-align: center !important; }
  .hinge-box p { text-align: center !important; }
  .reflection-box { padding: 24px !important; text-align: center !important; }
  .reflection-box p { text-align: center !important; }
  .schedule-block { padding: 40px 24px !important; }
  .about-box p { text-align: left !important; }
  .medium-strip { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
  .post-card-top { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; }
  .built-item { flex-direction: column !important; gap: 8px !important; }
  .value-content p { text-align: left !important; }
  .who-text { text-align: left !important; }
  .process-content p { text-align: left !important; }
  .lesson-body { text-align: left !important; }
  .card-body { text-align: left !important; }
  .act-card-body li { text-align: left !important; }
  .highlight-box-body li { text-align: left !important; }

  /* LEAD INTRO */
  .lead-intro { padding: 32px 24px 0 !important; text-align: center !important; }
  .lead-intro p { text-align: center !important; }

  /* WRITING PAGE */
  .framing-strip { text-align: left !important; }
  .legend { justify-content: center !important; }
  .post-title { text-align: left !important; }
  .post-subtitle { text-align: left !important; }
  .post-excerpt { text-align: left !important; }
}

@media (max-width: 480px) {

  /* HERO */
  .hero { padding: 40px 16px 32px !important; }
  .hero h1 { font-size: clamp(var(--font-size-xl), 7vw, var(--font-size-2xl)) !important; }
  .hero-sub { font-size: var(--font-size-sm) !important; }

  /* LAYOUT */
  .page-wrap { padding: 0 16px !important; }
  .section { padding: 40px 16px 0 !important; }
  .section h2 { font-size: var(--font-size-lg) !important; }
  .card-grid { padding: 24px 0 !important; }
  .lead-intro { padding: 24px 16px 0 !important; }

  /* STATS */
  .stats-row.three { grid-template-columns: 1fr !important; }
  .stats-row.two { grid-template-columns: 1fr !important; }
  .stat-row { grid-template-columns: 1fr !important; }
  .stats-grid { grid-template-columns: 1fr !important; }


  /* TABS */
  .tabs-wrapper { padding: 0 !important; }
  .tab { padding: 16px 12px !important; font-size: var(--font-size-xs) !important; }

  /* COMPONENTS */
  .podcast-card { padding: 24px 16px !important; }
  .hinge-box { padding: 24px 16px !important; }
  .reflection-box { padding: 24px 16px !important; }
  .pmf-callout { padding: 24px 16px !important; }
  .notify-strip { padding: 24px 16px !important; }
  .schedule-block { padding: 32px 16px !important; }
  .service-card { flex-direction: column !important; }
  .service-num { padding: 16px !important; min-width: unset !important; }

  .healthtech-case-study-page img { max-width: 100%; height: auto; }
  .storyboard-container { overflow: hidden !important; height: 280px !important; }
  .storyboard-container img { height: calc(100vw - 48px) !important; }
}
`}</style>

      <header className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Case Study · HealthTech · UX Research</span>
          <h1>
            From 90 Minutes to 45: Redesigning a Broken Onboarding Flow
          </h1>
          <p className="hero-sub">
            A mid-sized healthcare technology company had a broken onboarding process with a 37-question form that took longer to complete than the phone call it was meant to prepare for. Research cut that call in half and reshaped how Customer Success launched every new client.
          </p>
          <div className="meta-strip">
            <div className="meta-item">
              <div className="meta-label">Role</div>
              <div className="meta-value">UX Researcher</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Method</div>
              <div className="meta-value">Modified Delphi Card Sort</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Participants</div>
              <div className="meta-value">28</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Timeline</div>
              <div className="meta-value">1 week</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Budget</div>
              <div className="meta-value">$0</div>
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrap">
        {/* THE PROBLEM */}
        <div className="section">
          <div className="section-label">The Problem</div>
          <h2>A form so long, no one finished it.</h2>
          <p>
            A mid-sized healthcare technology company (~500 employees) served small-to-mid-sized medical practices as a one-stop platform that handled everything from scheduling systems to website design, SEO, and client portals.
          </p>
          <p>
            Their onboarding process required new customers to complete a 37-question form before a 90-minute phone call. The form alone took 2–3 hours to complete. It was rarely finished before the call began, which created downstream manual work for the Customer Success team and significant delays in getting customers launched.
          </p>
          <p>Research was needed to identify the bottlenecks, prioritize what questions actually mattered, and redesign the flow.</p>
          <div
            className="img-block"
            style={{
              marginTop: '16px',
              maxWidth: '980px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div
              className="storyboard-container"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '760px',
                height: '380px',
                margin: '0 auto',
                overflow: 'visible',
              }}
            >
              <img
                src="/healthtech_storyboard.png"
                alt="Hand-drawn storyboard showing the customer experience: rushing to fill out a 37-question form before a 90-minute onboarding call"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  height: '250%',
                  width: 'auto',
                  transform: 'translate(-50%, -50%) rotate(270deg)',
                  transformOrigin: 'center center',
                  display: 'block',
                }}
              />
            </div>
            <p className="img-caption">
              Early storyboard sketched to frame the problem, with customers racing to complete a 37-question form before a 90-minute call they were not ready for.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* RESEARCH GOAL */}
        <div className="section">
          <div className="section-label">Research Goal</div>
          <h2>Four things we needed to understand.</h2>
          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-num">01</div>
              <div className="theme-content">
                <h3>Identify Bottlenecks</h3>
                <p>Which questions were causing the most friction, redundancy, and delay?</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">02</div>
              <div className="theme-content">
                <h3>Prioritize Questions</h3>
                <p>Which questions were essential, nice to have, or unnecessary?</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">03</div>
              <div className="theme-content">
                <h3>Redesign the Flow</h3>
                <p>What question order reflected the natural conversation flow of onboarding calls?</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">04</div>
              <div className="theme-content">
                <h3>Reduce Time-to-Launch</h3>
                <p>What changes would increase the rate of completed forms before the call?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* METHODOLOGY */}
        <div className="section">
          <div className="section-label">Methodology</div>
          <h2>Modified Delphi Card Sort</h2>
          <p>
            With no budget and a one-week timeline, I chose the Modified Delphi Card Sort, a method that enables participants to physically reorganize and prioritize questions and surfaces consensus-driven insights that standard surveys would miss.
          </p>

          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-num">01</div>
              <div className="theme-content">
                <h3>Sticker Prioritization</h3>
                <p>Participants applied colored stickers to each card: green and blue (necessary), yellow (nice to have), and red (unnecessary).</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">02</div>
              <div className="theme-content">
                <h3>Card Sort and Reordering</h3>
                <p>Participants reorganized cards to match their natural workflow while noting why they changed, omitted, or merged questions.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">03</div>
              <div className="theme-content">
                <h3>Consensus Reached</h3>
                <p>The study concluded after three consecutive participants made no changes to the card order, which signaled methodological saturation.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">04</div>
              <div className="theme-content">
                <h3>Mockup Creation</h3>
                <p>I documented the final order and created wireframe mockups of the proposed redesigned onboarding form.</p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginTop: '28px',
            }}
          >
            <div>
              <img
                src="/healthtech_cardsort_before.jpg"
                alt="Before card sort, with all 37 questions spread across the whiteboard"
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--light-gray)' }}
              />
              <p className="img-caption">
                Before: all 37 questions on the board, with colored stickers showing participant priority ratings.
              </p>
            </div>
            <div>
              <img
                src="/healthtech_cardsort_after.jpg"
                alt="After card sort, with questions reorganized and removed questions separated"
                style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--light-gray)' }}
              />
              <p className="img-caption">
                After: questions reorganized by participants, with a clear "questions we should not have" section emerging.
              </p>
            </div>
          </div>

          <div className="img-block" style={{ marginTop: '16px' }}>
            <img
              src="/healthtech_notes.jpg"
              alt="Handwritten research notes documenting participant feedback on each question"
              style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--light-gray)' }}
            />
            <p className="img-caption">
              Field notes captured during sessions that documented participant-by-participant feedback on each question's clarity, necessity, and placement.
            </p>
          </div>
        </div>

        <div className="divider" />

        {/* KEY FINDINGS */}
        <div className="section">
          <div className="section-label">Key Findings</div>
          <h2>What 28 participants agreed on.</h2>
          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-num">01</div>
              <div className="theme-content">
                <h3>Redundant Questions</h3>
                <p>Multiple questions captured overlapping information and created confusion and fatigue, especially in the first third of the form.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">02</div>
              <div className="theme-content">
                <h3>Unnecessary Questions Removed</h3>
                <p>Six questions were rated unnecessary by most participants and removed entirely from the redesigned form.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">03</div>
              <div className="theme-content">
                <h3>Question Merge Opportunities</h3>
                <p>Fourteen questions were successfully merged into six consolidated questions without losing the data Customer Success needed.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">04</div>
              <div className="theme-content">
                <h3>Order Mismatch Discovered</h3>
                <p>The original question order did not reflect the natural flow of onboarding calls, so reordering reduced cognitive load for both parties.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">05</div>
              <div className="theme-content">
                <h3>Internal vs. External Agreement</h3>
                <p>Customer Success staff and external participants largely agreed on which questions were essential and which could be removed.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">06</div>
              <div className="theme-content">
                <h3>Form Completion Barrier</h3>
                <p>The length and redundancy of the original form were the main reasons customers struggled to complete it before the onboarding call.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* OUTCOME */}
        <div className="section">
          <div className="section-label">Outcome & Impact</div>
          <h2>Numbers that changed how the team worked.</h2>
          <p>
            The redesigned form reduced completion friction, improved Customer Success team efficiency, and was validated through an A/B test that measured onboarding call duration before and after the change.
          </p>

          <div className="stats-callout">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">37→23</div>
                <div className="stat-label">Questions reduced</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20%</div>
                <div className="stat-label">Reduction in form length</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">14</div>
                <div className="stat-label">Questions merged or eliminated</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">90 → 45 min</div>
                <div className="stat-label">Onboarding call time cut via A/B test</div>
              </div>
            </div>
          </div>

          <div>
            <p className="redesign-label">
              REDESIGN MOCKUPS
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ marginBottom: '8px' }}>
                <img
                  src="/healthtech_mockup1.png"
                  alt="Wireframe mockup showing merged questions with checkbox interface"
                  style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--light-gray)', display: 'block' }}
                />
                <p className="img-caption">
                  Mockup 1: merging overlapping questions into a single checkbox interface so that three questions become one.
                </p>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <img
                  src="/healthtech_mockup2.png"
                  alt="Wireframe mockup showing redesigned insurance question with clearer structure"
                  style={{ width: '100%', borderRadius: 'var(--radius-sm)', border: '1px solid var(--light-gray)', display: 'block' }}
                />
                <p className="img-caption">
                  Mockup 2: redesigning the insurance question to reduce open-text burden and align it with how Customer Success actually uses the data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* LESSONS LEARNED */}
        <div className="section">
          <div className="section-label">Lessons Learned</div>
          <h2>What this study reinforced.</h2>
          <div className="lessons">
            <div className="lesson">
              <div className="lesson-num">01</div>
              <div className="lesson-body">
                <strong>Operational research can have strategic impact.</strong> A tactical usability study uncovered structural inefficiencies that were costing the business real time and money. Framing research around operational pain is a powerful way to build stakeholder trust.
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-num">02</div>
              <div className="lesson-body">
                <strong>Methodological creativity matters in constrained environments.</strong> With no budget and a one-week timeline, the Modified Delphi method delivered rich, actionable data. Choosing the right method for the constraint is as important as choosing the right method for the question.
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-num">03</div>
              <div className="lesson-body">
                <strong>Internal users are often the most valuable research participants.</strong> Customer Success staff had the sharpest insight into what was and wasn't working. Internal research is frequently undervalued and underutilized.
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-num">04</div>
              <div className="lesson-body">
                <strong>Design recommendations are stronger with user consensus.</strong> The card sort created a defensible, participant-validated redesign. Stakeholders were more confident implementing changes because the new order came from users, not researcher intuition alone.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

      <MarketingCtaStrip
        title="Want to talk about what research could do for your team?"
        body={<a href="mailto:jesse@jesseleedespard.com">jesse@jesseleedespard.com</a>}
        cta={<Link to="/hiring" className="primary-cta-dark">Hiring? →</Link>}
      />

      <Footer />
    </Fragment>
  );
}
