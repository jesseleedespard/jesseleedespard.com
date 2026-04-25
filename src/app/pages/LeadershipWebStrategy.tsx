import { useEffect, Fragment } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';

export default function LeadershipWebStrategy() {
  useEffect(() => {
    document.title = 'Three Disciplines, One Team · Jesse Lee Despard';
  }, []);

  return (
    <Fragment>
    <div className="leadership-web-strategy-page">
      <style>{`
.leadership-web-strategy-page, .leadership-web-strategy-page *, .leadership-web-strategy-page *::before, .leadership-web-strategy-page *::after { margin: 0; padding: 0; box-sizing: border-box; }
.leadership-web-strategy-page .pull-quote { margin: 28px 0; padding: calc(var(--page-padding) / 2) var(--page-padding); }

.leadership-web-strategy-page {
  --display: 'DM Sans', system-ui, sans-serif;
  --body:    'Lora', Georgia, serif;
  --wide: 1100px;
  --max:  860px;
}

html { scroll-behavior: smooth; }

.leadership-web-strategy-page {
  font-family: var(--body);
  background: var(--cream);
  color: var(--charcoal);
  font-size: var(--font-size-base);
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  padding-bottom: var(--page-padding);
}

/* HERO */
.hero { background: var(--charcoal); padding: 80px 48px 72px; position: relative; overflow: hidden; }
.hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(to right, var(--teal), var(--gold), transparent); }
.hero-inner { max-width: var(--max); margin: 0 auto; }
.hero-tag { font-family: var(--display); display: inline-block; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; border: 1px solid rgba(212,168,67,0.4); padding: 8px 16px; border-radius: var(--radius-sm); }
.hero h1 { font-family: var(--display); font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl)); font-weight: 700; color: var(--white); line-height: 1.18; letter-spacing: -0.5px; margin-bottom: 8px; }
.hero h1 em { color: var(--gold); font-style: normal; }
.hero-sub { font-family: var(--body); font-size: var(--font-size-base); color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 36px; font-style: italic; }
.meta-strip { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
.meta-item { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.1); }
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label { font-family: var(--display); font-size: var(--font-size-xs); letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 3px; }
.meta-value { font-family: var(--display); font-size: var(--font-size-sm); color: rgba(255,255,255,0.82); font-weight: 500; }

/* LAYOUT */
.page-wrap { max-width: calc(var(--max) + (var(--page-padding) * 2)); margin: 0 auto; padding: 0 var(--page-padding); }
.section { padding: 52px 0 0; }
.section-label { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal-dark); margin-bottom: 8px; }
.section h2 { font-family: var(--display); font-size: clamp(22px, 3vw, 28px); font-weight: 700; color: var(--charcoal); line-height: 1.25; letter-spacing: -0.3px; margin-bottom: 18px; }
.section h3 { font-family: var(--display); font-size: var(--font-size-base); font-weight: 700; color: var(--charcoal); margin-bottom: 8px; margin-top: 24px; }
.section p { color: var(--dark-gray); margin-bottom: 16px; }
.section p:last-child { margin-bottom: 0; }
.divider { height: 1px; background: var(--light-gray); margin: 48px 0 0; }

/* TWO COL */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 8px; }

.theme-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 8px; }
.theme-card {
  background: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: var(--radius-sm);
  padding-block: 20px;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  box-sizing: border-box;
}
.theme-card-head {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 16px;
  width: 100%;
  min-width: 0;
}
.theme-num { font-family: var(--display); font-size: var(--font-size-lg); font-weight: 700; color: var(--teal); min-width: 28px; flex-shrink: 0; line-height: 1.2; }
.theme-card-head h3 {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--display);
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--charcoal);
  line-height: 1.3;
}
.theme-card-body { width: 100%; min-width: 0; box-sizing: border-box; }
.theme-card-body p { margin: 0; color: var(--dark-gray); font-size: var(--font-size-base); line-height: 1.75; }
.theme-card-body h4 { margin-top: 0; font-family: var(--display); font-size: var(--font-size-base); font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }

.daio-donut-wrap { overflow: visible; width: 100%; max-width: 720px; margin: 24px auto 0; align-self: center; }
.daio-donut-wrap img { width: 100%; height: auto; display: block; margin: 0 auto; }

.listening-tour-label { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal-dark); margin: 24px 0 12px; }
.body-list { list-style: disc; padding-left: 24px; margin: 12px 0 16px; }
.body-list li { margin-bottom: 8px; line-height: 1.7; }

.built-theme-stack { display: flex; flex-direction: column; gap: 24px; margin-top: 24px; }

.daio-desc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
.daio-desc-card { border: 1px solid var(--light-gray); border-radius: var(--radius-sm); overflow: hidden; background: var(--white); }
.daio-desc-card-head {
  padding: 11px 20px;
  font-family: var(--display);
  font-weight: 700;
  font-size: var(--font-size-xs);
  line-height: 1.3;
  color: var(--white);
}
.daio-desc-card-body { padding: 14px 20px 16px; }
.daio-desc-card-body ul {
  margin: 0;
  padding-inline: 0;
  list-style: disc;
  list-style-position: inside;
  line-height: 1.55;
}
.daio-desc-card-body li { margin-bottom: 6px; font-size: var(--font-size-sm); color: var(--dark-gray); }
.daio-desc-card-body li:last-child { margin-bottom: 0; }

.funnel-three { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px; }
.funnel-card { border: 1px solid var(--light-gray); border-radius: var(--radius-sm); overflow: hidden; background: var(--white); }
.funnel-card-head {
  padding: 12px 20px;
  font-family: var(--display);
  font-weight: 700;
  font-size: var(--font-size-sm);
  color: var(--white);
  text-align: center;
}
.funnel-card-body { padding: 14px 20px; }
.funnel-card-body ul {
  margin: 0;
  padding-inline: 0;
  list-style: disc;
  list-style-position: inside;
  line-height: 1.55;
}
.funnel-card-body li { margin-bottom: 6px; font-size: var(--font-size-sm); color: var(--dark-gray); }
.funnel-card-body li:last-child { margin-bottom: 0; }

.venn-stack { display: flex; flex-direction: column; gap: 28px; margin-top: 16px; }
.venn-block { width: 100%; text-align: center; }
.venn-label {
  font-family: var(--display);
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--teal-dark);
  margin: 0 auto 10px;
  text-align: center;
  max-width: 580px;
}
.venn-block img { width: 100%; max-width: 820px; height: auto; display: block; margin: 0 auto; }


.metrics-flow { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-top: 24px; }
.metrics-tier { border-radius: var(--radius-md); padding: 16px 20px; text-align: center; box-sizing: border-box; }
.metrics-tier h4 { font-family: var(--display); font-size: var(--font-size-sm); margin-bottom: 8px; }
.metrics-tier p { font-size: var(--font-size-sm); margin: 0; line-height: 1.5; }
.tier-arrow { color: var(--gray); font-size: var(--font-size-lg); line-height: 1; padding: 2px 0; }

.outcomes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
.leadership-web-strategy-page .outcomes-grid + h2 { margin-top: 36px; }
.outcome-card { background: var(--white); border: 1px solid var(--light-gray); border-top: 3px solid var(--teal); border-radius: 0 0 var(--radius-sm) var(--radius-sm); padding: 24px; text-align: center; }
.outcome-number { font-family: var(--display); font-size: var(--font-size-2xl); font-weight: 700; color: var(--teal); margin-bottom: 8px; line-height: 1.1; }
.outcome-label { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
.outcome-desc { font-size: var(--font-size-sm); color: var(--dark-gray); margin: 0; line-height: 1.65; text-align: left; }


/* MOBILE: 375px target, 8pt grid, centered text */
@media (max-width: 768px) {

  .leadership-web-strategy-page .hero { padding: 48px 24px 40px !important; text-align: center !important; }
  .leadership-web-strategy-page .hero-inner { max-width: 100% !important; }
  .leadership-web-strategy-page .hero-tag { font-size: var(--font-size-xs) !important; }
  .leadership-web-strategy-page .hero h1 { font-size: clamp(24px, 6vw, 30px) !important; line-height: 1.2 !important; text-align: center !important; }
  .leadership-web-strategy-page .hero-sub { font-size: var(--font-size-sm) !important; text-align: center !important; max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
  .leadership-web-strategy-page .hero-cta { display: inline-block !important; }
  .leadership-web-strategy-page .show-title { font-size: clamp(24px, 6vw, 30px) !important; text-align: center !important; }
  .leadership-web-strategy-page .show-tagline { text-align: center !important; }

  .leadership-web-strategy-page .meta-strip { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding-top: 24px !important; border-top: 1px solid rgba(255,255,255,0.12) !important; }
  .leadership-web-strategy-page .meta-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 0 0 16px 0 !important; margin: 0 !important; text-align: center !important; width: 100% !important; }
  .leadership-web-strategy-page .meta-item:last-child { border-bottom: none !important; padding-bottom: 0 !important; }

  .leadership-web-strategy-page .page-wrap { padding: 0 24px !important; }

  .leadership-web-strategy-page .section { padding: 48px 24px 0 !important; text-align: center !important; }
  .leadership-web-strategy-page .section h2 { font-size: clamp(20px, 5.5vw, 24px) !important; text-align: center !important; }
  .leadership-web-strategy-page .section p { text-align: center !important; }
  .leadership-web-strategy-page .section-label { text-align: center !important; }
  .leadership-web-strategy-page .divider { margin: 40px 0 0 !important; }

  .leadership-web-strategy-page .two-col h3,
  .leadership-web-strategy-page .two-col p,
  .leadership-web-strategy-page .theme-card-body p,
  .leadership-web-strategy-page .daio-desc-card,
  .leadership-web-strategy-page .daio-desc-card-head,
  .leadership-web-strategy-page .funnel-card-body li,
  .leadership-web-strategy-page .funnel-card-body ul,
  .leadership-web-strategy-page .outcome-desc,
  .leadership-web-strategy-page .daio-desc-card-body ul { text-align: left !important; }


  .leadership-web-strategy-page .card-grid { padding: 32px 0 !important; gap: 16px !important; }
  .leadership-web-strategy-page .cs-cards { grid-template-columns: 1fr !important; gap: 16px !important; }

  .leadership-web-strategy-page .cs-card-body { padding: 24px !important; text-align: left !important; }
  .leadership-web-strategy-page .lead-card-body { padding: 24px !important; text-align: left !important; }
  .leadership-web-strategy-page .cs-card-title { text-align: left !important; }
  .leadership-web-strategy-page .cs-card-desc { text-align: left !important; }
  .leadership-web-strategy-page .cs-card-footer { text-align: left !important; }
  .leadership-web-strategy-page .lead-card-title { text-align: left !important; }
  .leadership-web-strategy-page .lead-card-desc { text-align: left !important; }

  .leadership-web-strategy-page .two-col { grid-template-columns: 1fr !important; gap: 24px !important; }
  .leadership-web-strategy-page .grid2 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .leadership-web-strategy-page .grid3 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .leadership-web-strategy-page .track-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .theme-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .impl-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .exp-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .testimonials-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .outcomes-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .stats-row.three { grid-template-columns: 1fr 1fr !important; }
  .leadership-web-strategy-page .stats-row.two { grid-template-columns: 1fr 1fr !important; }
  .leadership-web-strategy-page .stat-row { grid-template-columns: 1fr 1fr !important; }
  .leadership-web-strategy-page .platforms-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .funnel-three { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .daio-desc-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .photo-block { grid-template-columns: 1fr !important; }

  .leadership-web-strategy-page .show-block { flex-direction: column !important; align-items: center !important; gap: 24px !important; text-align: center !important; }
  .leadership-web-strategy-page .show-art { margin: 0 auto !important; }
  .leadership-web-strategy-page .show-info { text-align: center !important; }
  .leadership-web-strategy-page .podcast-card { flex-direction: column !important; gap: 24px !important; padding: 32px 24px !important; text-align: center !important; }
  .leadership-web-strategy-page .podcast-desc { text-align: center !important; }
  .leadership-web-strategy-page .pmf-callout { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .leadership-web-strategy-page .pmf-text { text-align: center !important; }
  .leadership-web-strategy-page .notify-strip { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .leadership-web-strategy-page .notify-links { flex-direction: column !important; width: 100% !important; align-items: center !important; }
  .leadership-web-strategy-page .notify-btn { text-align: center !important; display: block !important; padding: 16px !important; }
  .leadership-web-strategy-page .notify-btn-outline { text-align: center !important; display: block !important; padding: 16px !important; }
  .leadership-web-strategy-page .hinge-box { padding: 24px !important; text-align: center !important; }
  .leadership-web-strategy-page .hinge-box p { text-align: center !important; }
  .leadership-web-strategy-page .reflection-box { padding: 24px !important; text-align: center !important; }
  .leadership-web-strategy-page .reflection-box p { text-align: center !important; }
  .leadership-web-strategy-page .schedule-block { padding: 40px 24px !important; }
  .leadership-web-strategy-page .about-box p { text-align: left !important; }
  .leadership-web-strategy-page .medium-strip { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
  .leadership-web-strategy-page .post-card-top { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; }
  .leadership-web-strategy-page .theme-card { flex-direction: column !important; align-items: stretch !important; }
  .leadership-web-strategy-page .theme-card-head {
    align-items: baseline !important;
    width: 100% !important;
    text-align: left !important;
  }
  .leadership-web-strategy-page .theme-card-head h3 { text-align: left !important; }
  .leadership-web-strategy-page .value-content p { text-align: left !important; }
  .leadership-web-strategy-page .who-text { text-align: left !important; }
  .leadership-web-strategy-page .process-content p { text-align: left !important; }
  .leadership-web-strategy-page .lesson-body { text-align: left !important; }
  .leadership-web-strategy-page .finding-body { text-align: left !important; }
  .leadership-web-strategy-page .card-body { text-align: left !important; }
  .leadership-web-strategy-page .act-card-body li { text-align: left !important; }
  .leadership-web-strategy-page .lead-intro { padding: 32px 24px 0 !important; text-align: center !important; }
  .leadership-web-strategy-page .lead-intro p { text-align: center !important; }


  .leadership-web-strategy-page .framing-strip { text-align: left !important; }
  .leadership-web-strategy-page .legend { justify-content: center !important; }
  .leadership-web-strategy-page .post-title { text-align: left !important; }
  .leadership-web-strategy-page .post-subtitle { text-align: left !important; }
  .leadership-web-strategy-page .post-excerpt { text-align: left !important; }
}

@media (max-width: 480px) {

  .leadership-web-strategy-page .hero { padding: 40px 16px 32px !important; }
  .leadership-web-strategy-page .hero h1 { font-size: clamp(22px, 7vw, 26px) !important; }
  .leadership-web-strategy-page .hero-sub { font-size: var(--font-size-sm) !important; }

  .leadership-web-strategy-page .page-wrap { padding: 0 16px !important; }
  .leadership-web-strategy-page .section { padding: 40px 16px 0 !important; }
  .leadership-web-strategy-page .section h2 { font-size: var(--font-size-lg) !important; }
  .leadership-web-strategy-page .card-grid { padding: 24px 0 !important; }
  .leadership-web-strategy-page .lead-intro { padding: 24px 16px 0 !important; }

  .leadership-web-strategy-page .stats-row.three { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .stats-row.two { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .stat-row { grid-template-columns: 1fr !important; }


  .leadership-web-strategy-page .tabs-wrapper { padding: 0 !important; }
  .leadership-web-strategy-page .tab { padding: 16px 12px !important; font-size: var(--font-size-xs) !important; }

  .leadership-web-strategy-page .podcast-card { padding: 24px 16px !important; }
  .leadership-web-strategy-page .hinge-box { padding: 24px 16px !important; }
  .leadership-web-strategy-page .reflection-box { padding: 24px 16px !important; }
  .leadership-web-strategy-page .pmf-callout { padding: 24px 16px !important; }
  .leadership-web-strategy-page .notify-strip { padding: 24px 16px !important; }
  .leadership-web-strategy-page .schedule-block { padding: 32px 16px !important; }
  .leadership-web-strategy-page .service-card { flex-direction: column !important; }
  .leadership-web-strategy-page .service-num { padding: 16px !important; min-width: unset !important; }
}
`}</style>

      <header className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Leadership · Team Building</span>
          <h1>Three Disciplines, <span style={{ color: 'var(--gold)' }}>One Team</span></h1>
          <p className="hero-sub">
            Building a cross-functional team from the ground up. UX, SEO, and CRO needed a shared identity, operating model, and a north star.
          </p>
          <div className="meta-strip">
            <div className="meta-item">
              <div className="meta-label">Company</div>
              <div className="meta-value">EdTech Company</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">My Role</div>
              <div className="meta-value">Manager, UX, SEO & CRO</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Team</div>
              <div className="meta-value">UX, SEO, CRO, Product</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Artifact</div>
              <div className="meta-value">Leadership Vision</div>
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrap">
        <div className="section">
          <div className="section-label">Overview</div>
          <h2>A new team needed more than a mandate: it needed a shared philosophy</h2>
          <p>
            When I joined an EdTech company as Manager of UX, SEO, and CRO, I inherited an understaffed function of five where the majority of members had been at the company less than a year. Each discipline had its own priorities and metrics. There was no shared language, no unified operating model, and no clear picture of how UX, SEO, and CRO could work <em>together</em> rather than alongside each other.
          </p>
          <p>
            Before I could lead the team toward any outcome, I had to do something more fundamental: listen, define, and align. This is the artifact of that work: a team vision I built from scratch to give three distinct disciplines a common identity, a shared principle, and a practical operating model for delivering results together.
          </p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">The Situation</div>
          <h2>Three disciplines. One funnel. No shared model.</h2>
          <p>
            The company&apos;s growth depended on a complex sign-up funnel spanning awareness through to active user onboarding. UX, SEO, and CRO each touched this funnel from different research and design angles, with different toolsets, and often without visibility into what the other disciplines were doing.
          </p>
          <p>
            Without alignment, each discipline would optimize for its own metrics in isolation. SEO would chase rankings. CRO would chase conversion rates. UX would chase usability scores. None of these are wrong, but optimizing them separately, without a shared user lens, was a path to fragmented decisions and missed growth opportunities.
          </p>
          <div className="listening-tour-label">
            What the listening tour revealed
          </div>
          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">01</div>
                <h3>Implementation of Insights</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  Research insights were being acted on too quickly, without the original researcher&apos;s input. There was no structured process to propose experiments before committing to solutions.
                </p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">02</div>
                <h3>Cross-Team Collaboration</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  A new team with new members had no shared problem space or camaraderie yet. There was no mechanism for surfacing learnings across disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">My Approach</div>
          <h2>Listen first. Then build the model around what the team actually needed.</h2>
          <p>
            Before writing a single slide, I ran a listening tour. I wanted to understand not just what each discipline did, but what each person thought they were there to accomplish, where they felt blocked, and what they wished the team could be.
          </p>

          <div className="listening-tour-label">
            Five questions asked to 20+ colleagues, stakeholders, and team members
          </div>
          <ol className="body-list">
            <li>What is working well?</li>
            <li>What is not working?</li>
            <li>What should we do that we are not doing today?</li>
            <li>What would you do if you were in my shoes?</li>
            <li>What should I learn about this company and product that will be helpful to me in my role?</li>
          </ol>

          <p>
            The Buckingham survey was also deployed. I wanted to understand my team&apos;s experience when they interact with others on the team, as well as their individual experience of work.
          </p>

          <p>
            What I heard from that listening tour shaped everything after. The team questioned why they were not three different teams, divided up by discipline. This told me that the team did not need more process. They needed structure and to be unified as a single team. My job was to help unify them in that way:
          </p>

          <ul className="body-list">
            <li>User value drives business value.</li>
            <li>SEO, UX, and CRO all enhance user value in their own unique way.</li>
            <li>A cohesive user experience leads to users engaging with our products and offerings more.</li>
            <li>These three disciplines just have different methods to answer what a cohesive user experience is.</li>
          </ul>

          <p>That became the founding principle of our team and the anchor for every framework, model, and operating decision that followed.</p>

          <h3>What the listening tour actually revealed</h3>
          <p>
            The most significant thing I learned was not about the disciplines. It was about how the company operated. The organization worked in a project-based model, not a product-based one. Teams delivered against fixed scopes with defined endpoints.
          </p>
          <p>
            The idea of an iterative cycle (running research, learning, adapting, and going again in a smaller cycle) was genuinely new to how decisions were made. It was a different way of thinking about work entirely.
          </p>

          <div className="pull-quote">
            <p>
              &quot;I didn&apos;t just introduce a new process. I changed how the team understood its own work.&quot;
            </p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">What I Built</div>
          <h2>Five foundations that made collaboration possible</h2>

          <div className="built-theme-stack">
            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">01</div>
                <h3>A unified team identity</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  I defined the team not by its component disciplines but by its strategic position: an internal, experiment-driven startup, cross-functional and multidisciplinary, uniquely positioned to own the full digital funnel from awareness to retention.
                </p>
              </div>
            </div>

            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">02</div>
                <h3>The DAIO operating model</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  Rather than defining the team by outputs, I defined it by a cycle: <strong>D</strong>ata → <strong>A</strong>ction → <strong>I</strong>terate → <strong>O</strong>utcomes. The DAIO principle gave every discipline a shared process language so everyone could describe their work in the same terms.
                </p>
                <div className="daio-donut-wrap">
                  <img
                    src="/daio-cycle.png"
                    alt="DAIO cycle diagram showing four phases: Research and Data, Experiments, Apply the Learnings, and Drive Measurable Outcomes"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="daio-desc-grid">
                  <div className="daio-desc-card">
                    <div className="daio-desc-card-head" style={{ background: 'var(--teal)' }}>
                      Research &amp; Data
                    </div>
                    <div className="daio-desc-card-body">
                      <ul>
                        <li>Quantitative and qualitative research to gain insights into which products and features need attention</li>
                        <li>Understand the problem space before ideating a solution</li>
                      </ul>
                    </div>
                  </div>
                  <div className="daio-desc-card">
                    <div
                      className="daio-desc-card-head"
                      style={{ background: 'var(--gold)', color: 'var(--charcoal)' }}
                    >
                      Experiments
                    </div>
                    <div className="daio-desc-card-body">
                      <ul>
                        <li>Foster quick learnings: clarify the problem space and test potential solutions</li>
                        <li>Surface learnings to the broader team to inform other projects</li>
                      </ul>
                    </div>
                  </div>
                  <div className="daio-desc-card">
                    <div className="daio-desc-card-head" style={{ background: 'var(--terra)' }}>
                      Drive Measurable Outcomes
                    </div>
                    <div className="daio-desc-card-body">
                      <ul>
                        <li>Focus on outcomes that connect user value to business results</li>
                        <li>Demonstrate successful new processes to the broader company</li>
                      </ul>
                    </div>
                  </div>
                  <div className="daio-desc-card">
                    <div className="daio-desc-card-head" style={{ background: 'var(--dark-gray)' }}>
                      Apply the Learnings
                    </div>
                    <div className="daio-desc-card-body">
                      <ul>
                        <li>Apply learnings via existing products and features</li>
                        <li>Propose new products and features to the broader company</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">03</div>
                <h3>A funnel model with UX as the connective tissue</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  I repositioned UX not as a single lane in the funnel, but as the lens that encapsulated every stage. SEO brings users in. CRO converts them at the right moment. UX ensures the entire experience is cohesive, builds trust, and meets users where they are at each step.
                </p>
                <div className="funnel-three">
                  <div className="funnel-card">
                    <div className="funnel-card-head" style={{ background: 'var(--teal)' }}>
                      SEO
                    </div>
                    <div className="funnel-card-body">
                      <ul>
                        <li>Drives organic traffic into the top of the funnel</li>
                        <li>Makes the company findable at the moment of intent</li>
                        <li>Keyword, content, and code optimization</li>
                        <li>Link building and rankings</li>
                      </ul>
                    </div>
                  </div>
                  <div className="funnel-card">
                    <div className="funnel-card-head" style={{ background: 'var(--charcoal)' }}>
                      UX: The Connective Tissue
                    </div>
                    <div className="funnel-card-body">
                      <ul>
                        <li>Encapsulates the entire funnel end-to-end</li>
                        <li>Creates a cohesive journey from awareness to retention</li>
                        <li>Research, personas, information architecture</li>
                        <li>Meets users where they are, emotionally and practically</li>
                      </ul>
                    </div>
                  </div>
                  <div className="funnel-card">
                    <div className="funnel-card-head" style={{ background: 'var(--terra)' }}>
                      CRO
                    </div>
                    <div className="funnel-card-body">
                      <ul>
                        <li>Optimizes conversion at every stage of the funnel</li>
                        <li>Strategically engages users when they&apos;re ready</li>
                        <li>Tracks bounce rates, traffic patterns, CTAs</li>
                        <li>Leakiest part should be at the top, not the bottom</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">04</div>
                <h3>A metrics model with leading indicators</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  My proposal added a layer of smaller, combinable user health metrics (also known as leading indicators) that rolled up to the broader business numbers, preventing the team from optimizing only for conversion while ignoring the upstream signals that cause drop-off in the first place.
                </p>
                <div className="metrics-flow">
                  <div className="metrics-tier" style={{ background: 'var(--charcoal)', color: 'var(--white)', width: '100%' }}>
                    <h4 style={{ color: 'var(--white)' }}>Traffic</h4>
                    <p style={{ color: 'var(--white)' }}>All people discovering the company across channels</p>
                  </div>
                  <div className="tier-arrow">↓</div>
                  <div className="metrics-tier" style={{ background: 'var(--terra)', color: 'var(--charcoal)', width: '82%' }}>
                    <h4 style={{ color: 'var(--charcoal)' }}>User Health Metrics (Leading Indicators)</h4>
                    <p style={{ color: 'var(--charcoal)' }}>Combinable signals: e.g. SEO rankings + UX quality scores</p>
                  </div>
                  <div className="tier-arrow">↓</div>
                  <div className="metrics-tier" style={{ background: 'var(--teal-dark)', color: 'var(--white)', width: '64%' }}>
                    <h4 style={{ color: 'var(--white)' }}>Conversion Rate Optimization</h4>
                    <p style={{ color: 'var(--white)' }}>Rate of Applications · Rate of Sign-ups</p>
                  </div>
                  <div className="tier-arrow">↓</div>
                  <div className="metrics-tier" style={{ background: 'var(--gold)', width: '48%' }}>
                    <h4 style={{ color: 'var(--charcoal)', fontSize: 'var(--font-size-sm)' }}>Growth</h4>
                    <p style={{ color: 'var(--charcoal)' }}>The department&apos;s main objective</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">05</div>
                <h3>Explicit maps of where disciplines intersect</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  A key part of the vision was making explicit the overlapping responsibilities between each pair of disciplines: the shared work that only happens when they collaborate.
                </p>
                <div className="venn-stack">
                  <div className="venn-block">
                    <div className="venn-label">UX × SEO</div>
                    <img
                      src="/venn-ux-seo.png"
                      alt="Venn diagram of UX and SEO: overlapping responsibilities in the center, and separate lists for UX-only work (information architecture through microcopy) and SEO-only work (keyword through rankings)."
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="venn-block">
                    <div className="venn-label">UX × CRO</div>
                    <img
                      src="/venn-ux-cro.png"
                      alt="Venn diagram of UX and CRO: overlapping responsibilities in the center, and separate lists for UX-only and CRO-only work including conversion metrics and interaction tracking."
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="venn-block">
                    <div className="venn-label">CRO × SEO</div>
                    <img
                      src="/venn-cro-seo.png"
                      alt="Venn diagram of CRO and SEO: overlapping responsibilities in the center, and separate lists for CRO-focused metrics and SEO-focused optimization work."
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Measured Outcomes</div>
          <h2>The operating model changed how the team actually worked</h2>
          <p>Leadership vision work is easy to describe and hard to verify. Two outcomes from this period stand out as concrete evidence that the model took hold.</p>

          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-number">25%</div>
              <div className="outcome-label">Increase in team collaboration</div>
              <p className="outcome-desc">
                Measured by the Buckingham Survey, a validated instrument for team health. A structured measure of how the team experienced working together, before and after the operating model was introduced.
              </p>
            </div>
            <div className="outcome-card">
              <div className="outcome-number">5 → 9</div>
              <div className="outcome-label">Direct reports scaled</div>
              <p className="outcome-desc">
                Recruited and onboarded 4 new members across UX research, SEO, and CRO while the operating model was being built, increasing delivery velocity by 30%.
              </p>
            </div>
          </div>

          <h2>The outcome that matters most</h2>
          <p>
            The team continued to operate in the agile model after the restructure that followed my departure. I didn&apos;t build something that depended on me being in the room. That&apos;s the test of whether a leadership intervention actually worked.
          </p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Why This Matters</div>
          <h2>What this kind of leadership actually looks like</h2>
          <p>
            Building this vision wasn&apos;t a presentation exercise. It was the foundation that let me manage three disciplines simultaneously without losing the thread between them. Every prioritization decision, every experiment, every stakeholder conversation could be anchored back to the same model: user value drives business value, and UX is the connective tissue that makes it real.
          </p>
          <p>
            The work here reflects a specific leadership philosophy: before you ask a team to move fast, you have to make sure they&apos;re pointing in the same direction. The listening tour, the shared principle, the DAIO model, and the metrics architecture were not bureaucratic artifacts. They were the conditions that made genuine cross-functional collaboration possible.
          </p>

          <div className="pull-quote">
            <p>"Most companies want teams to collaborate. Few build the conditions for it to actually work."</p>
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
