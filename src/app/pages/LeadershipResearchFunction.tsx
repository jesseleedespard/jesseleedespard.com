import { useEffect } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';

export default function LeadershipResearchFunction() {
  useEffect(() => {
    document.title = 'Building a Research Function from the Ground Up · Jesse Lee Despard';
  }, []);

  return (
    <div className="leadership-research-function-page">
      <style>{`
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

.leadership-research-function-page {
  --display: 'DM Sans', system-ui, sans-serif;
  --body:    'Lora', Georgia, serif;
  --wide: 1100px;
  --max:  860px;
}

html { scroll-behavior: smooth; }

.leadership-research-function-page {
  font-family: var(--body);
  background: var(--cream);
  color: var(--charcoal);
  font-size: 17px;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

/* HERO */
.hero { background: var(--charcoal); padding: 80px 48px 72px; position: relative; overflow: hidden; }
.hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(to right, var(--teal), var(--gold), transparent); }
.hero-inner { max-width: var(--max); margin: 0 auto; }
.hero-tag { font-family: var(--display); display: inline-block; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; border: 1px solid rgba(212,168,67,0.4); padding: 8px 16px; border-radius: 4px; }
.hero h1 { font-family: var(--display); font-size: clamp(28px, 4vw, 44px); font-weight: 700; color: var(--white); line-height: 1.18; letter-spacing: -0.4px; margin-bottom: 8px; }
.hero h1 em { color: var(--gold); font-style: normal; }
.hero-sub { font-family: var(--body); font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 36px; font-style: italic; }
.meta-strip { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
.meta-item { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.1); }
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label { font-family: var(--display); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 3px; }
.meta-value { font-family: var(--display); font-size: 13px; color: rgba(255,255,255,0.82); font-weight: 500; }

/* LAYOUT */
.page-wrap { max-width: var(--max); margin: 0 auto; padding: 0 48px; }
.section { padding: 52px 0 0; }
.section-label { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal-dark); margin-bottom: 8px; }
.section h2 { font-family: var(--display); font-size: clamp(22px, 3vw, 28px); font-weight: 700; color: var(--charcoal); line-height: 1.25; letter-spacing: -0.3px; margin-bottom: 18px; }
.section h3 { font-family: var(--display); font-size: var(--font-size-base); font-weight: 700; color: var(--charcoal); margin-bottom: 8px; margin-top: 24px; }
.section p { color: var(--dark-gray); margin-bottom: 16px; }
.section p:last-child { margin-bottom: 0; }
.divider { height: 1px; background: var(--light-gray); margin: 48px 0 0; }

/* ACT BADGE */
.act-label { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px; }
.act-label-box {
  display: inline-block;
  max-width: 100%;
  font-family: var(--display);
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 1.45;
  text-transform: uppercase;
  padding: 10px 18px;
  border-radius: 4px;
  background: var(--charcoal);
  color: var(--gold);
  box-sizing: border-box;
}

/* PULL QUOTE */
.pull-quote { margin: 32px 0; padding: 22px 28px; border-left: 4px solid var(--gold); background: var(--white); border-radius: 0 6px 6px 0; }
.pull-quote p { font-family: var(--body); font-size: 20px; color: var(--charcoal); line-height: 1.5; font-style: italic; margin: 0 !important; }

/* (body uses classes not in source <style>) */
.act-cards { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
.act-card { border: 1px solid var(--light-gray); border-radius: 8px; overflow: hidden; background: var(--white); }
.act-card-header { padding: 14px 18px; display: flex; flex-wrap: wrap; align-items: center; gap: 0.35em; }
.act-card-phase {
  font-family: var(--display);
  font-size: var(--font-size-sm);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.35;
  text-transform: uppercase;
  color: var(--gold);
}
.act-card-title {
  font-family: var(--display);
  font-size: var(--font-size-sm);
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.01em;
  color: var(--white);
  text-transform: none;
}
.act-card-header--dark-teal {
  background: var(--teal-dark);
}
.act-card-header--dark-teal .act-card-phase {
  color: var(--gold);
}
.act-card-header--dark-teal .act-card-title {
  color: var(--white);
}
.act-card-header--terra {
  background: var(--terra);
}
.act-card-header--terra .act-card-phase {
  color: var(--charcoal);
}
.act-card-header--terra .act-card-title {
  color: var(--white);
}
.act-card-header--gold {
  background: var(--gold);
}
.act-card-header--gold .act-card-phase {
  color: var(--charcoal);
  text-transform: none;
  letter-spacing: 0.01em;
}
.act-card-header--gold .act-card-title {
  color: var(--charcoal);
}
.act-card-body { padding: 18px 20px; }
.act-card-body ul {
  margin: 0;
  padding-left: 1.25em;
  list-style: disc;
  list-style-position: outside;
  color: var(--dark-gray);
  font-size: 14.5px;
  line-height: 1.65;
}
.act-card-body li { margin-bottom: 8px; }

.leadership-research-function-page .built-theme-stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
}
.leadership-research-function-page .theme-card {
  background: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: 6px;
  padding-block: 20px;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  box-sizing: border-box;
}
.leadership-research-function-page .theme-card-head {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 16px;
  width: 100%;
  min-width: 0;
}
.leadership-research-function-page .theme-num {
  font-family: var(--display);
  font-size: 20px;
  font-weight: 700;
  color: var(--teal);
  min-width: 28px;
  flex-shrink: 0;
  line-height: 1.2;
}
.leadership-research-function-page .theme-card-head h3 {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--display);
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--charcoal);
  line-height: 1.3;
}
.leadership-research-function-page .theme-card-body {
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}
.leadership-research-function-page .theme-card-body p {
  margin: 0;
  color: var(--dark-gray);
  font-size: var(--font-size-base);
  line-height: 1.75;
}
.leadership-research-function-page .theme-card-body p + p {
  margin-top: 16px;
}

.highlight-box { margin-top: 24px; border: 1px solid var(--light-gray); border-radius: 8px; overflow: hidden; background: var(--white); }
.highlight-box-head { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--charcoal); padding: 14px 18px; background: var(--cream); border-bottom: 1px solid var(--light-gray); }
.highlight-box-body { padding: 18px 20px; }
.highlight-box-body ul { margin: 0; padding-left: 18px; color: var(--dark-gray); font-size: 14.5px; line-height: 1.65; }
.highlight-box-body li { margin-bottom: 10px; }

/* Matches act-card pattern: charcoal header + white text, white body + dark text */
.leadership-research-function-page .highlight-box.highlight-box--charcoal {
  border: 1px solid var(--light-gray);
  background: var(--white);
}
.leadership-research-function-page .highlight-box.highlight-box--charcoal .highlight-box-head {
  color: var(--white);
  background: var(--charcoal);
  border-bottom: none;
}
.leadership-research-function-page .highlight-box.highlight-box--charcoal .highlight-box-body {
  background: var(--white);
}
.leadership-research-function-page .highlight-box.highlight-box--charcoal .highlight-box-body ul {
  padding-left: 1.25em;
  list-style: disc;
  list-style-position: outside;
  color: var(--dark-gray);
}
.leadership-research-function-page .highlight-box.highlight-box--charcoal .highlight-box-body li {
  color: var(--dark-gray);
}
.leadership-research-function-page .highlight-box.highlight-box--charcoal .highlight-box-body li em {
  color: var(--charcoal);
  font-style: italic;
}
.leadership-research-function-page .highlight-box.highlight-box--charcoal .highlight-box-body li::marker {
  color: var(--charcoal);
}
.leadership-research-function-page .highlight-box.highlight-box--charcoal .highlight-box-body li strong {
  color: var(--charcoal);
  font-weight: 700;
}

.stats-row { display: grid; gap: 16px; margin-top: 24px; }
.stats-row.three { grid-template-columns: repeat(3, 1fr); }
.stats-row.two { grid-template-columns: repeat(2, 1fr); }
.stat-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 8px; padding: 24px; text-align: center; }
.stat-number { font-family: var(--display); font-size: 36px; font-weight: 700; color: var(--teal); margin-bottom: 8px; line-height: 1.1; }
.stat-label { font-family: var(--display); font-size: 13px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
.stat-desc { font-size: var(--font-size-sm); line-height: 1.6; color: var(--dark-gray); margin: 0; text-align: left; }

.cta-strip { background: var(--terra); padding: 48px; display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; box-sizing: border-box; margin-top: 0; }
.leadership-research-function-page .cta-strip {
  margin-top: clamp(48px, 7vw, 88px);
}
.cta-strip-left h3 { font-family: var(--display); font-size: 20px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
.cta-strip-left a { font-family: var(--display); font-size: var(--font-size-sm); color: var(--charcoal); text-decoration: none; opacity: 0.7; }
.cta-btn { background: var(--charcoal); color: var(--white); font-family: var(--display); font-weight: 700; font-size: var(--font-size-sm); padding: 13px 28px; border-radius: 6px; text-decoration: none; white-space: nowrap; flex-shrink: 0; display: inline-block; border: none; cursor: pointer; }

/* ═══════════════════════════════════════════════════════════
   MOBILE: 375px target, 8pt grid, centered text
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  .leadership-research-function-page .hero { padding: 48px 24px 40px !important; text-align: center !important; }
  .leadership-research-function-page .hero-inner { max-width: 100% !important; }
  .leadership-research-function-page .hero-tag { font-size: 10px !important; }
  .leadership-research-function-page .hero h1 { font-size: clamp(24px, 6vw, 30px) !important; line-height: 1.2 !important; text-align: center !important; }
  .leadership-research-function-page .hero-sub { font-size: 15px !important; text-align: center !important; max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
  .leadership-research-function-page .hero-cta { display: inline-block !important; }
  .leadership-research-function-page .show-title { font-size: clamp(24px, 6vw, 30px) !important; text-align: center !important; }
  .leadership-research-function-page .show-tagline { text-align: center !important; }

  .leadership-research-function-page .meta-strip { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding-top: 24px !important; border-top: 1px solid rgba(255,255,255,0.12) !important; }
  .leadership-research-function-page .meta-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 0 0 16px 0 !important; margin: 0 !important; text-align: center !important; width: 100% !important; }
  .leadership-research-function-page .meta-item:last-child { border-bottom: none !important; padding-bottom: 0 !important; }

  .leadership-research-function-page .page-wrap { padding: 0 24px !important; }

  .leadership-research-function-page .section { padding: 48px 24px 0 !important; text-align: center !important; }
  .leadership-research-function-page .section h2 { font-size: clamp(20px, 5.5vw, 24px) !important; text-align: center !important; }
  .leadership-research-function-page .section p { text-align: center !important; }
  .leadership-research-function-page .section-label { text-align: center !important; }
  .leadership-research-function-page .divider { margin: 40px 0 0 !important; }

  .leadership-research-function-page .act-label { justify-content: center; flex-wrap: wrap; }
  .leadership-research-function-page .act-label-box { text-align: center !important; }
  .leadership-research-function-page .theme-card { flex-direction: column !important; align-items: stretch !important; }
  .leadership-research-function-page .theme-card-head {
    align-items: baseline !important;
    width: 100% !important;
    text-align: left !important;
  }
  .leadership-research-function-page .theme-card-head h3 { text-align: left !important; }
  .leadership-research-function-page .theme-card-body p { text-align: left !important; }
  .leadership-research-function-page .act-card-body,
  .leadership-research-function-page .act-card-body li,
  .leadership-research-function-page .highlight-box-body,
  .leadership-research-function-page .highlight-box-body li,
  .leadership-research-function-page .stat-desc { text-align: left !important; }

  .leadership-research-function-page .pull-quote { padding: 24px !important; margin: 24px 0 !important; border-left: none !important; border-top: 4px solid var(--gold) !important; text-align: center !important; }
  .leadership-research-function-page .pull-quote p { font-size: 17px !important; text-align: center !important; }

  .leadership-research-function-page .card-grid { padding: 32px 0 !important; gap: 16px !important; }
  .leadership-research-function-page .cs-cards { grid-template-columns: 1fr !important; gap: 16px !important; }

  .leadership-research-function-page .cs-card-body { padding: 24px !important; text-align: left !important; }
  .leadership-research-function-page .lead-card-body { padding: 24px !important; text-align: left !important; }
  .leadership-research-function-page .cs-card-title { text-align: left !important; }
  .leadership-research-function-page .cs-card-desc { text-align: left !important; }
  .leadership-research-function-page .cs-card-footer { text-align: left !important; }
  .leadership-research-function-page .lead-card-title { text-align: left !important; }
  .leadership-research-function-page .lead-card-desc { text-align: left !important; }

  .leadership-research-function-page .grid2 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .leadership-research-function-page .grid3 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .leadership-research-function-page .track-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .theme-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .impl-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .exp-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .testimonials-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .outcomes-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .stats-row.three { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .stats-row.two { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .stat-row { grid-template-columns: 1fr 1fr !important; }
  .leadership-research-function-page .platforms-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .discipline-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .daio-grid { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .photo-block { grid-template-columns: 1fr !important; }

  .leadership-research-function-page .show-block { flex-direction: column !important; align-items: center !important; gap: 24px !important; text-align: center !important; }
  .leadership-research-function-page .show-art { margin: 0 auto !important; }
  .leadership-research-function-page .show-info { text-align: center !important; }
  .leadership-research-function-page .podcast-card { flex-direction: column !important; gap: 24px !important; padding: 32px 24px !important; text-align: center !important; }
  .leadership-research-function-page .podcast-desc { text-align: center !important; }
  .leadership-research-function-page .pmf-callout { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .leadership-research-function-page .pmf-text { text-align: center !important; }
  .leadership-research-function-page .notify-strip { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .leadership-research-function-page .notify-links { flex-direction: column !important; width: 100% !important; align-items: center !important; }
  .leadership-research-function-page .notify-btn { text-align: center !important; display: block !important; padding: 16px !important; }
  .leadership-research-function-page .notify-btn-outline { text-align: center !important; display: block !important; padding: 16px !important; }
  .leadership-research-function-page .schedule-block { padding: 40px 24px !important; }
  .leadership-research-function-page .about-box p { text-align: left !important; }
  .leadership-research-function-page .medium-strip { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
  .leadership-research-function-page .post-card-top { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; }
  .leadership-research-function-page .built-item { flex-direction: column !important; gap: 8px !important; }
  .leadership-research-function-page .value-content p { text-align: left !important; }
  .leadership-research-function-page .who-text { text-align: left !important; }
  .leadership-research-function-page .process-content p { text-align: left !important; }
  .leadership-research-function-page .lesson-body { text-align: left !important; }
  .leadership-research-function-page .finding-body { text-align: left !important; }
  .leadership-research-function-page .card-body { text-align: left !important; }
  .leadership-research-function-page .act-card-body li { text-align: left !important; }
  .leadership-research-function-page .highlight-box-body li { text-align: left !important; }

  .leadership-research-function-page .lead-intro { padding: 32px 24px 0 !important; text-align: center !important; }
  .leadership-research-function-page .lead-intro p { text-align: center !important; }

  .leadership-research-function-page .cta-strip {
    flex-direction: column !important;
    padding: 48px 24px !important;
    text-align: center !important;
    gap: 24px !important;
    margin-top: clamp(40px, 10vw, 64px) !important;
  }
  .leadership-research-function-page .cta-strip-left h3 { font-size: var(--font-size-lg) !important; text-align: center !important; }
  .leadership-research-function-page .cta-strip-left a { text-align: center !important; display: block !important; }
  .leadership-research-function-page .cta-btn { display: block !important; text-align: center !important; width: 100% !important; }

  .leadership-research-function-page .framing-strip { text-align: left !important; }
  .leadership-research-function-page .legend { justify-content: center !important; }
  .leadership-research-function-page .post-title { text-align: left !important; }
  .leadership-research-function-page .post-subtitle { text-align: left !important; }
  .leadership-research-function-page .post-excerpt { text-align: left !important; }
}

@media (max-width: 480px) {

  .leadership-research-function-page .hero { padding: 40px 16px 32px !important; }
  .leadership-research-function-page .hero h1 { font-size: clamp(22px, 7vw, 26px) !important; }
  .leadership-research-function-page .hero-sub { font-size: var(--font-size-sm) !important; }

  .leadership-research-function-page .page-wrap { padding: 0 16px !important; }
  .leadership-research-function-page .section { padding: 40px 16px 0 !important; }
  .leadership-research-function-page .section h2 { font-size: 20px !important; }
  .leadership-research-function-page .card-grid { padding: 24px 0 !important; }
  .leadership-research-function-page .lead-intro { padding: 24px 16px 0 !important; }

  .leadership-research-function-page .stats-row.three { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .stats-row.two { grid-template-columns: 1fr !important; }
  .leadership-research-function-page .stat-row { grid-template-columns: 1fr !important; }

  .leadership-research-function-page .cta-strip { padding: 40px 16px !important; }
  .leadership-research-function-page .cta-btn { padding: 16px !important; }

  .leadership-research-function-page .tabs-wrapper { padding: 0 !important; }
  .leadership-research-function-page .tab { padding: 16px 12px !important; font-size: var(--font-size-xs) !important; }

  .leadership-research-function-page .podcast-card { padding: 24px 16px !important; }
  .leadership-research-function-page .reflection-box { padding: 24px 16px !important; }
  .leadership-research-function-page .pmf-callout { padding: 24px 16px !important; }
  .leadership-research-function-page .notify-strip { padding: 24px 16px !important; }
  .leadership-research-function-page .schedule-block { padding: 32px 16px !important; }
  .leadership-research-function-page .service-card { flex-direction: column !important; }
  .leadership-research-function-page .service-num { padding: 16px !important; min-width: unset !important; }
}
`}</style>

      <header className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Leadership · Research Operations</span>
          <h1>
            Building a Research Function
            <br />
            from the Ground Up,
            <br />
            <em>and Through an Acquisition</em>
          </h1>
          <p className="hero-sub">
            How I went from being the first UX researcher at an early-stage real estate tech startup to leading the merged research function after its acquisition, and what I built that made both possible.
          </p>
          <div className="meta-strip">
            <div className="meta-item">
              <div className="meta-label">Company</div>
              <div className="meta-value">Real Estate Tech Startup</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">My Role</div>
              <div className="meta-value">UX Researcher → Lead UX Researcher</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Scope</div>
              <div className="meta-value">Zero to one, then through acquisition</div>
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrap">
        <div className="section">
          <div className="section-label">Overview</div>
          <h2>Two chapters. One through-line.</h2>
          <p>
            This is a story about building something durable. I joined an early-stage real estate tech startup as their first UX researcher. There was no function, no processes, and no team. Over the next two and a half years, I built a research practice from scratch that grew a team, drove measurable business outcomes, and ultimately survived the most stressful organizational test there is: an acquisition.
          </p>
          <p>
            When the company was acquired, I wasn't just retained. I was asked to lead the merged research function for the combined organization. That outcome wasn't accidental. It was the result of deliberate choices about how to build something that would hold up under pressure.
          </p>
          <div className="pull-quote">
            <p>"The best research function is one that the rest of the organization can't imagine operating without."</p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="act-label">
            <span className="act-label-box">
              Pre-Acquisition: Building a Team and Research Function
            </span>
          </div>
          <h2>Hired as the first. Tasked with building everything.</h2>
          <p>
            When I joined the startup, UX research didn't exist as a function. There was no process for running studies, no repository for insights, no team, and no shared language between research and product. My mandate was as broad as it sounds: figure out what the company needed to know about its users, and build the infrastructure to find it out consistently.
          </p>
          <p>
            This wasn't just a research challenge. It was a leadership challenge in the most foundational sense: I had to establish credibility, earn a seat at the product table, and demonstrate the value of research to stakeholders who had never had a dedicated researcher before.
          </p>

          <div className="act-cards">
            <div className="act-card">
              <div className="act-card-header" style={{ background: 'var(--charcoal)' }}>
                <span className="act-card-phase">Research Strategy:</span>
                <span className="act-card-title">Defining what the function was for</span>
              </div>
              <div className="act-card-body">
                <ul>
                  <li>Established research priorities aligned to the product roadmap and business goals</li>
                  <li>
                    Designed a tiered research framework: foundational and exploratory research stayed with the research team, while validation research (usability testing, A/B testing) was structured so PMs and designers could run it with guardrails
                  </li>
                  <li>Defined methodology frameworks for when to use qual vs. quant, usability testing vs. surveys vs. interviews</li>
                  <li>Created a shared language between research, product, design, and engineering</li>
                </ul>
              </div>
            </div>
            <div className="act-card">
              <div className="act-card-header act-card-header--dark-teal">
                <span className="act-card-phase">Team & Operations:</span>
                <span className="act-card-title">Building the Infrastructure</span>
              </div>
              <div className="act-card-body">
                <ul>
                  <li>Sourced, hired, and mentored 3 research interns, and all three converted to full-time roles (100% conversion rate)</li>
                  <li>67% of those hires were retained post-acquisition, validating the caliber of who I recruited</li>
                  <li>Established scalable research operations: study templates, consent processes, participant recruitment pipelines</li>
                  <li>Built a systematic insights repository documenting methodologies, personas, and journey maps</li>
                </ul>
              </div>
            </div>
            <div className="act-card">
              <div className="act-card-header act-card-header--terra">
                <span className="act-card-phase">Product Impact:</span>
                <span className="act-card-title">Turning research into outcomes</span>
              </div>
              <div className="act-card-body">
                <ul>
                  <li>Drove product-market fit (PMF) score from 23% to 51% (a 128% increase) through strategic research initiatives</li>
                  <li>Reduced customer churn 25% by identifying and addressing friction points across the user base</li>
                  <li>Delivered 50+ usability tests, card sorts, and A/B experiments that directly informed roadmap decisions</li>
                  <li>Established research as a core product input, not an afterthought</li>
                </ul>
              </div>
            </div>
            <div className="act-card">
              <div className="act-card-header act-card-header--gold">
                <span className="act-card-phase">Research Enablement:</span>
                <span className="act-card-title">Scaling Research beyond the Research Team</span>
              </div>
              <div className="act-card-body">
                <ul>
                  <li>
                    Created a research playbook with templates for the most commonly used UX research methodologies: moderated usability tests, unmoderated usability tests, A/B testing, and ABC testing
                  </li>
                  <li>Defined escalation criteria so PMs and designers knew when a study should be handed to the research team</li>
                  <li>
                    Set up observation rooms where anyone in the company could watch live research sessions and ask questions afterward
                  </li>
                  <li>
                    Sent company-wide Slack messages after every study sharing the top three insights, with an open invitation for discussion
                  </li>
                  <li>
                    Included a personal reflection section in every Slack post, naming what I would improve next time. This modeled vulnerability and made it safe for others to approach me about conducting research themselves
                  </li>
                  <li>
                    PMs and designers began self-correcting their own research practices unprompted, rewriting survey questions and advocating for non-leading interview techniques on their own
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">How I Built the Team</div>
          <h2>A development philosophy, not a job description</h2>
          <p>
            The 100% intern-to-hire conversion rate is the outcome. What produced it was a deliberate approach to how I identified, developed, and grew junior talent, one that started before the interns ever walked in the door.
          </p>

          <div className="built-theme-stack">
            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">01</div>
                <h3>Hiring for attitude, not credentials</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  I vetted interns on two criteria: eagerness to grow, and attitude toward being mentored. Not prior experience, not portfolio quality. The premise was simple: the point of an internship is development. If someone isn't genuinely open to being coached, the technical skills don't matter.
                </p>
                <p>
                  This meant asking interview questions that revealed how someone responded to feedback, how they thought about their own gaps, and whether they saw mentorship as a resource or a critique.
                </p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">02</div>
                <h3>The T-model as the development framework</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  Every intern worked from the same foundation: a broad base of UX competencies across design, qualitative research, quantitative research, microcopy, UX writing, information architecture, and visual design. I used the T-model explicitly: every UX professional needs breadth, but they tend to specialise in one or two areas.
                </p>
                <p>
                  Weekly one-on-ones were anchored to where each person wanted to grow: not a uniform checklist, but an ongoing conversation about their goals and how the work could serve them.
                </p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-card-head">
                <div className="theme-num">03</div>
                <h3>Trust and psychological safety as the foundation</h3>
              </div>
              <div className="theme-card-body">
                <p>
                  None of the development work above functions without a foundation of trust. I built that trust individually, through integrity, consistent respect, and a genuine investment in each person's growth as a professional, not just as a contributor to the team's output.
                </p>
                <p>
                  Psychological safety wasn't a policy. It was a practice. I created an environment where interns could be honest about what they found difficult, what excited them, and what they weren't sure about, without fear of those admissions being used against them. Weekly one-on-ones were built around curiosity, not evaluation. Gentle redirection, not correction.
                </p>
                <p>
                  This mattered because honest self-knowledge is only possible when someone feels safe enough to be honest. An intern who feels watched or judged will tell you what they think you want to hear. An intern who trusts their manager will tell you what they actually think about the work, about their instincts, and about what felt right and what didn't. That's the information a good mentor actually needs.
                </p>
              </div>
            </div>
          </div>

          <div className="pull-quote">
            <p>"They came to their own conclusions because they were treated with enough respect to reach them honestly."</p>
          </div>

          <div className="highlight-box highlight-box--charcoal">
            <div className="highlight-box-head">How I exposed interns to the full UX spectrum</div>
            <div className="highlight-box-body">
              <ul>
                <li>Mood boards and visual design exercises to develop aesthetic judgment</li>
                <li>Customer journey mapping sessions, asking them to help map, not just observe</li>
                <li>Card sorts and information architecture work with debriefs on their reasoning</li>
                <li>User interviews followed by independent qualitative analysis, then discussing their synthesis choices</li>
                <li>
                  Survey design exercises including how to word and sequence questions, always asking <em>why</em> behind each decision
                </li>
                <li>Gentle redirection when reasoning went off course, developing the thinking, not just correcting the output</li>
              </ul>
            </div>
          </div>

          <h3 style={{ marginTop: '32px' }}>What emerged from the breadth</h3>
          <p>
            I didn&apos;t assign the interns to specializations. Specialization surfaced through the work. One intern gravitated toward product thinking. I recognized this early through our regular one-on-ones and the T-model evaluation framework, and I pivoted their entire development path. I taught them what it means to balance stakeholders, understand technical constraints, read marketing signals, and distinguish between being a product manager and a project manager. They became a junior PM.
          </p>
          <p>
            Of the two who became UX professionals, one gravitated toward design and the other toward research, not because I directed them there, but because hands-on exposure across a wide variety of projects revealed where each person's instincts naturally landed. All three were retained through the acquisition.
          </p>

          <div className="pull-quote">
            <p>"The goal wasn't to produce researchers. It was to produce people who understood their own strengths well enough to build a career on them."</p>
          </div>

          <div className="pull-quote">
            <p>"I didn't gatekeep research. I made it visible, made myself vulnerable, and let people come to it on their own terms."</p>
          </div>

          <div className="stats-row three">
            <div className="stat-card">
              <div className="stat-number">128%</div>
              <div className="stat-label">PMF Growth</div>
              <p className="stat-desc">From 23% to 51%, positioning the startup for successful acquisition</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">25%</div>
              <div className="stat-label">Churn Reduction</div>
              <p className="stat-desc">Driven by research that identified friction across the user base</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Intern Conversion Rate</div>
              <p className="stat-desc">All three interns hired full-time, 67% retained post-acquisition</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">The Hinge</div>
          <h2>The acquisition, and why I was retained</h2>
          <p>
            When the company was acquired, the incoming organization had to make fast decisions about which people, functions, and practices to keep. I was retained. More than that: I was asked to lead the merged research function for both organizations.
          </p>
          <p>
            This didn't happen by accident. The insights repository, the documented methodologies, and the clearly articulated research strategy weren't just operational artifacts. They were the proof that the research function had real, portable value.
          </p>
          <p>
            I had also conducted confidential pre-acquisition research validating the strategic fit and informing the integration roadmap. By the time the acquisition closed, my work had already shaped the deal.
          </p>
          <div className="pull-quote" style={{ marginTop: '32px' }}>
            <p>"I didn't just survive the acquisition. I had already informed it."</p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="act-label">
            <span className="act-label-box">
              Post Acquisition: Merging two different UX Research Teams
            </span>
          </div>
          <h2>Leading the merged function through integration.</h2>
          <p>
            Integrating two research practices is harder than building one from scratch. I now had to unify two teams with different tools, different methodologies, different stakeholder relationships, and different assumptions about what "good research" looked like, all while delivering research for a combined user base that had just gone through a major transition of their own.
          </p>

          <div className="act-cards">
            <div className="act-card">
              <div className="act-card-header" style={{ background: 'var(--charcoal)' }}>
                <span className="act-card-phase">Integration Leadership:</span>
                <span className="act-card-title">Unifying two practices into one</span>
              </div>
              <div className="act-card-body">
                <ul>
                  <li>Guided the integration of two separate research teams with different tools, processes, and cultures</li>
                  <li>Established a unified research operations framework spanning product, engineering, design, and sales across both legacy organizations</li>
                  <li>Maintained research quality and stakeholder trust during a period of significant organizational change</li>
                </ul>
              </div>
            </div>
            <div className="act-card">
              <div className="act-card-header" style={{ background: 'var(--teal)' }}>
                <span className="act-card-phase">User Continuity:</span>
                <span className="act-card-title">Keeping users at the center through the disruption</span>
              </div>
              <div className="act-card-body">
                <ul>
                  <li>Led analytics-driven research to identify friction points specific to the merged user base (users who had experienced the acquisition themselves)</li>
                  <li>Realigned the research roadmap to reflect the evolved business objectives of the combined organization</li>
                  <li>Facilitated design thinking workshops and customer journey mapping sessions for expanded customer segments</li>
                </ul>
              </div>
            </div>
            <div className="act-card">
              <div className="act-card-header" style={{ background: 'var(--teal)' }}>
                <span className="act-card-phase">Business Outcomes:</span>
                <span className="act-card-title">Post-acquisition results</span>
              </div>
              <div className="act-card-body">
                <ul>
                  <li>Reduced post-acquisition user churn by 16.7%</li>
                  <li>Increased retention by 10% through research that identified and addressed post-merger friction</li>
                  <li>Demonstrated that a unified research practice could serve two formerly separate user bases without losing depth or rigor</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="stats-row two">
            <div className="stat-card">
              <div className="stat-number">16.7%</div>
              <div className="stat-label">Post-acquisition churn reduction</div>
              <p className="stat-desc">Research that identified friction specific to the merged user base</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">10%</div>
              <div className="stat-label">Retention increase post-acquisition</div>
              <p className="stat-desc">Driven by a unified research practice serving two merged user bases</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Why This Matters</div>
          <h2>What this story actually demonstrates</h2>
          <p>
            A lot of researchers do good work. Fewer build the conditions for good work to happen consistently, survive organizational disruption, and scale beyond themselves. That's the distinction this case study is about.
          </p>

          <div className="highlight-box highlight-box--charcoal">
            <div className="highlight-box-head">Leadership I Demonstrated</div>
            <div className="highlight-box-body">
              <ul>
                <li>
                  <strong>Zero-to-one capability building</strong>: establishing a research function where none existed, with no playbook and no precedent
                </li>
                <li>
                  <strong>Team development</strong>: 100% intern-to-hire conversion rate demonstrates the ability to identify, grow, and retain talent
                </li>
                <li>
                  <strong>Research as a business asset</strong>: the insights repository and documented methodologies weren't just operational tools. They were the evidence base that informed a C-suite acquisition decision
                </li>
                <li>
                  <strong>Resilience under pressure</strong>: being retained and promoted through an acquisition is one of the clearest signals that your work is valued
                </li>
                <li>
                  <strong>Integration leadership</strong>: unifying two research practices is a fundamentally different challenge from building one, and I did both
                </li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: '24px' }}>
            The through-line across both chapters is the same: I build research functions that the rest of the organization can't imagine operating without. That's not a research skill. That's a leadership one.
          </p>
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
