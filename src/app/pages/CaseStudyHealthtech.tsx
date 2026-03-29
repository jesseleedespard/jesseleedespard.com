import { useEffect } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';

export default function CaseStudyHealthtech() {
  useEffect(() => {
    document.title = 'Reducing the Time of Customer Onboarding — Jesse Lee Despard';
  }, []);

  return (
    <div className="healthtech-case-study-page">
      <style>{`
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
.healthtech-case-study-page {
  --display: 'DM Sans', system-ui, sans-serif;
  --body:    'Lora', Georgia, serif;
  --wide: 1100px;
  --max:  860px;
}
html { scroll-behavior: smooth; }
.healthtech-case-study-page { font-family: var(--body); background: var(--cream); color: var(--charcoal); font-size: 17px; line-height: 1.75; -webkit-font-smoothing: antialiased; min-height: 100vh; }

/* HERO */
.hero { background: var(--charcoal); padding: 80px 48px 72px; position: relative; overflow: hidden; }
.hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(to right, var(--teal), var(--gold), transparent); }
.hero-inner { max-width: var(--max); margin: 0 auto; }
.hero-tag { font-family: var(--display); display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; border: 1px solid rgba(212,168,67,0.4); padding: 8px 16px; border-radius: 4px; }
.hero h1 { font-family: var(--display); font-size: clamp(30px, 4.5vw, 46px); font-weight: 700; color: var(--white); line-height: 1.18; letter-spacing: -0.4px; margin-bottom: 14px; }
.hero-sub { font-family: var(--body); font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 560px; margin-bottom: 36px; font-style: italic; }
.meta-strip { display: flex; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; gap: 0; }
.meta-item { padding-right: 24px; margin-right: 24px; border-right: 1px solid rgba(255,255,255,0.1); }
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label { font-family: var(--display); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 3px; }
.meta-value { font-family: var(--display); font-size: 13px; color: rgba(255,255,255,0.82); font-weight: 500; }

/* LAYOUT */
.page-wrap { max-width: var(--max); margin: 0 auto; padding: 0 48px; }
.section { padding: 52px 0 0; }
.section-label { font-family: var(--display); font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal-dark); margin-bottom: 8px; }
.section h2 { font-family: var(--display); font-size: clamp(20px, 2.8vw, 26px); font-weight: 700; color: var(--charcoal); line-height: 1.3; letter-spacing: -0.3px; margin-bottom: 16px; }
.section p { color: var(--dark-gray); margin-bottom: 16px; }
.section p:last-child { margin-bottom: 0; }
.divider { height: 1px; background: var(--light-gray); margin: 48px 0 0; }

/* FINDING CARDS — teal left border */
.finding-stack { display: flex; flex-direction: column; gap: 4px; margin-top: 24px; }
.finding-card { background: var(--white); border: 1px solid var(--light-gray); border-left: 3px solid var(--teal); border-radius: 0 6px 6px 0; padding: 16px; }
.finding-title { font-family: var(--display); font-size: 14px; font-weight: 700; color: var(--charcoal); margin-bottom: 5px; }
.finding-body { font-size: 14.5px; line-height: 1.7; color: var(--dark-gray); }

/* RESEARCH GOALS — same style */
.goals-stack { display: flex; flex-direction: column; gap: 4px; margin-top: 24px; }

/* METHOD STEPS */
.method-steps { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
.method-step { display: flex; gap: 16px; align-items: flex-start; }
.step-badge { background: var(--teal); color: var(--white); font-family: var(--display); font-weight: 700; font-size: 13px; width: 34px; height: 34px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.step-content h3 { font-family: var(--display); font-size: 15px; font-weight: 700; color: var(--charcoal); margin-bottom: 4px; }
.step-content p { font-size: 14.5px; line-height: 1.7; color: var(--dark-gray); margin: 0; }

/* STATS ROW — prominent */
.stats-callout { background: var(--charcoal); border-radius: 8px; padding: 36px 40px; margin-top: 24px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
.stat-item { text-align: center; padding: 16px 12px; border-right: 1px solid rgba(255,255,255,0.12); }
.stat-item:last-child { border-right: none; }
.stat-number { font-family: var(--display); font-size: clamp(20px, 2.5vw, 28px); font-weight: 700; color: var(--gold); margin-bottom: 8px; line-height: 1.2; }
.stat-label { font-family: var(--display); font-size: 11px; color: rgba(255,255,255,0.75); font-weight: 500; line-height: 1.4; }

.lessons { display: flex; flex-direction: column; gap: 20px; margin-top: 24px; }
.lesson { display: flex; gap: 16px; align-items: flex-start; }
.lesson-num { font-family: var(--display); font-weight: 700; font-size: 13px; color: var(--teal-dark); flex-shrink: 0; min-width: 24px; }
.lesson-body { font-size: 14.5px; line-height: 1.7; color: var(--dark-gray); margin: 0; }
.lesson-body strong { color: var(--charcoal); }

.cta-strip { background: var(--terra); padding: 48px; display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; box-sizing: border-box; }
.cta-strip-left h3 { font-family: var(--display); font-size: 21px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
.cta-strip-left a { color: var(--charcoal); font-family: var(--body); }
.cta-btn { font-family: var(--display); font-weight: 700; font-size: 15px; color: var(--white); background: var(--charcoal); padding: 14px 32px; border-radius: 6px; text-decoration: none; display: inline-block; border: none; cursor: pointer; }

/* ═══════════════════════════════════════════════════════════
   MOBILE — 375px target, 8pt grid, centered text
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  /* HERO — centered */
  .hero { padding: 48px 24px 40px !important; text-align: center !important; }
  .hero-inner { max-width: 100% !important; }
  .hero-tag { font-size: 10px !important; }
  .hero h1 { font-size: clamp(24px, 6vw, 30px) !important; line-height: 1.2 !important; text-align: center !important; }
  .hero-sub { font-size: 15px !important; text-align: center !important; max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
  .hero-cta { display: inline-block !important; }
  .show-title { font-size: clamp(24px, 6vw, 30px) !important; text-align: center !important; }
  .show-tagline { text-align: center !important; }

  /* META STRIP */
  .meta-strip { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding-top: 24px !important; border-top: 1px solid rgba(255,255,255,0.12) !important; }
  .meta-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 0 0 16px 0 !important; margin: 0 !important; text-align: center !important; width: 100% !important; }
  .meta-item:last-child { border-bottom: none !important; padding-bottom: 0 !important; }

  /* PAGE WRAP */
  .page-wrap { padding: 0 24px !important; }

  /* SECTIONS — centered text on mobile */
  .section { padding: 48px 24px 0 !important; text-align: center !important; }
  .section h2 { font-size: clamp(20px, 5.5vw, 24px) !important; text-align: center !important; }
  .section p { text-align: center !important; }
  .section-label { text-align: center !important; }
  .divider { margin: 40px 0 0 !important; }

  /* PULL QUOTE */
  .pull-quote { padding: 24px !important; margin: 24px 0 !important; border-left: none !important; border-top: 4px solid var(--gold) !important; text-align: center !important; }
  .pull-quote p { font-size: 17px !important; text-align: center !important; }

  /* CARD GRID */
  .card-grid { padding: 32px 0 !important; gap: 16px !important; }
  .cs-cards { grid-template-columns: 1fr !important; gap: 16px !important; }

  /* CASE STUDY CARDS — left-align card content for readability */
  .cs-card-body { padding: 24px !important; text-align: left !important; }
  .lead-card-body { padding: 24px !important; text-align: left !important; }
  .cs-card-title { text-align: left !important; }
  .cs-card-desc { text-align: left !important; }
  .cs-card-footer { text-align: left !important; }
  .lead-card-title { text-align: left !important; }
  .lead-card-desc { text-align: left !important; }

  /* GRIDS — all single column */
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
  .stats-grid { grid-template-columns: 1fr 1fr !important; }
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

  /* CTA STRIP */
  .cta-strip { flex-direction: column !important; padding: 48px 24px !important; text-align: center !important; gap: 24px !important; }
  .cta-strip-left h3 { font-size: 18px !important; text-align: center !important; }
  .cta-strip-left a { text-align: center !important; display: block !important; }
  .cta-btn { display: block !important; text-align: center !important; width: 100% !important; }

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
  .hero h1 { font-size: clamp(22px, 7vw, 26px) !important; }
  .hero-sub { font-size: 14px !important; }

  /* LAYOUT */
  .page-wrap { padding: 0 16px !important; }
  .section { padding: 40px 16px 0 !important; }
  .section h2 { font-size: 20px !important; }
  .card-grid { padding: 24px 0 !important; }
  .lead-intro { padding: 24px 16px 0 !important; }

  /* STATS */
  .stats-row.three { grid-template-columns: 1fr !important; }
  .stats-row.two { grid-template-columns: 1fr !important; }
  .stat-row { grid-template-columns: 1fr !important; }
  .stats-grid { grid-template-columns: 1fr !important; }

  /* CTA */
  .cta-strip { padding: 40px 16px !important; }
  .cta-btn { padding: 16px !important; }

  /* TABS */
  .tabs-wrapper { padding: 0 !important; }
  .tab { padding: 16px 12px !important; font-size: 12px !important; }

  /* COMPONENTS */
  .podcast-card { padding: 24px 16px !important; }
  .hinge-box { padding: 24px 16px !important; }
  .reflection-box { padding: 24px 16px !important; }
  .pmf-callout { padding: 24px 16px !important; }
  .notify-strip { padding: 24px 16px !important; }
  .schedule-block { padding: 32px 16px !important; }
  .service-card { flex-direction: column !important; }
  .service-num { padding: 16px !important; min-width: unset !important; }
}
`}</style>

      <header className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Case Study · HealthTech · UX Research</span>
          <h1>
            Reducing the Time of
            <br />
            Customer Onboarding
          </h1>
          <p className="hero-sub">
            A mid-sized healthcare technology company had a broken onboarding process — a 37-question form that took longer to complete than the phone call it was meant to prepare for. This study fixed it.
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
            A mid-sized healthcare technology company (~500 employees) served small-to-mid-sized medical practices as a one-stop platform — handling everything from scheduling systems to website design, SEO, and client portals.
          </p>
          <p>
            Their onboarding process required new customers to complete a 37-question form before a 90-minute phone call. The form alone took 2–3 hours to complete. It was rarely finished before the call began — creating downstream manual work for the Customer Success team and significant delays in getting customers launched.
          </p>
          <p>Research was needed to identify the bottlenecks, prioritize what questions actually mattered, and redesign the flow.</p>
        </div>

        <div className="divider" />

        {/* RESEARCH GOAL */}
        <div className="section">
          <div className="section-label">Research Goal</div>
          <h2>Four things we needed to understand.</h2>
          <div className="goals-stack">
            <div className="finding-card">
              <div className="finding-title">Identify bottlenecks</div>
              <div className="finding-body">Which questions were causing the most friction, redundancy, and delay?</div>
            </div>
            <div className="finding-card">
              <div className="finding-title">Prioritize questions</div>
              <div className="finding-body">Which questions were essential, nice-to-have, or unnecessary?</div>
            </div>
            <div className="finding-card">
              <div className="finding-title">Redesign the flow</div>
              <div className="finding-body">What order reflected the natural conversation flow of onboarding calls?</div>
            </div>
            <div className="finding-card">
              <div className="finding-title">Reduce time-to-launch</div>
              <div className="finding-body">What changes would increase the rate of completed forms before the call?</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* METHODOLOGY */}
        <div className="section">
          <div className="section-label">Methodology</div>
          <h2>Modified Delphi Card Sort</h2>
          <p>
            With no budget and a one-week timeline, I chose the Modified Delphi Card Sort — a method that enables participants to physically reorganize and prioritize questions, surfacing consensus-driven insights that standard surveys would miss.
          </p>

          <div className="method-steps">
            <div className="method-step">
              <div className="step-badge">01</div>
              <div className="step-content">
                <h3>Sticker prioritization</h3>
                <p>Each participant rated every question with colored stickers: green (necessary), yellow (nice to have), red (unnecessary).</p>
              </div>
            </div>
            <div className="method-step">
              <div className="step-badge">02</div>
              <div className="step-content">
                <h3>Card sort and reordering</h3>
                <p>Participants reorganized cards to match their natural workflow, noting why they changed, omitted, or merged questions.</p>
              </div>
            </div>
            <div className="method-step">
              <div className="step-badge">03</div>
              <div className="step-content">
                <h3>Consensus reached</h3>
                <p>The study concluded after three consecutive participants made no changes to the card order — signaling methodological saturation.</p>
              </div>
            </div>
            <div className="method-step">
              <div className="step-badge">04</div>
              <div className="step-content">
                <h3>Mockup creation</h3>
                <p>I documented the final order and created wireframe mockups of the proposed redesigned onboarding form.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* KEY FINDINGS */}
        <div className="section">
          <div className="section-label">Key Findings</div>
          <h2>What 28 participants agreed on.</h2>
          <div className="finding-stack">
            <div className="finding-card">
              <div className="finding-title">Redundant questions</div>
              <div className="finding-body">
                Multiple questions captured overlapping information — flagged as sources of confusion and fatigue, particularly in the first third of the form.
              </div>
            </div>
            <div className="finding-card">
              <div className="finding-title">Unnecessary questions</div>
              <div className="finding-body">Six questions were rated unnecessary by the majority of participants and removed entirely from the redesigned form.</div>
            </div>
            <div className="finding-card">
              <div className="finding-title">Merge opportunities</div>
              <div className="finding-body">14 questions were successfully merged into 6 consolidated questions without losing the data Customer Success needed.</div>
            </div>
            <div className="finding-card">
              <div className="finding-title">Order mismatch</div>
              <div className="finding-body">
                The original question order didn't reflect the natural flow of onboarding calls. Reordering reduced cognitive load for both parties.
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
                <div className="stat-number">50%</div>
                <div className="stat-label">Onboarding time cut via A/B test</div>
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

      <div className="cta-strip">
        <div className="cta-strip-left">
          <h3>Want to talk about what research could do for your team?</h3>
          <a href="mailto:jesse@jesseleedespard.com">jesse@jesseleedespard.com</a>
        </div>
        <Link to="/hiring" className="cta-btn">
          Hiring? →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
