import { useEffect } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';

export default function LeadershipWebStrategy() {
  useEffect(() => {
    document.title = 'Web Strategy: Team Vision — Jesse Lee Despard';
  }, []);

  return (
    <div className="leadership-web-strategy-page">
      <style>{`
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

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
  font-size: 17px;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

/* HERO */
.hero { background: var(--charcoal); padding: 80px 48px 72px; position: relative; overflow: hidden; }
.hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(to right, var(--teal), var(--gold), transparent); }
.hero-inner { max-width: var(--max); margin: 0 auto; }
.hero-tag { font-family: var(--display); display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; border: 1px solid rgba(212,168,67,0.4); padding: 8px 16px; border-radius: 4px; }
.hero h1 { font-family: var(--display); font-size: clamp(30px, 4.5vw, 46px); font-weight: 700; color: var(--white); line-height: 1.18; letter-spacing: -0.5px; margin-bottom: 8px; }
.hero h1 em { color: var(--gold); font-style: normal; }
.hero-sub { font-family: var(--body); font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 580px; margin-bottom: 36px; font-style: italic; }
.meta-strip { display: flex; flex-wrap: wrap; gap: 0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
.meta-item { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.1); }
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label { font-family: var(--display); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 3px; }
.meta-value { font-family: var(--display); font-size: 13px; color: rgba(255,255,255,0.82); font-weight: 500; }

/* LAYOUT */
.page-wrap { max-width: var(--max); margin: 0 auto; padding: 0 48px; }
.section { padding: 52px 0 0; }
.section-label { font-family: var(--display); font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal-dark); margin-bottom: 8px; }
.section h2 { font-family: var(--display); font-size: clamp(22px, 3vw, 28px); font-weight: 700; color: var(--charcoal); line-height: 1.25; letter-spacing: -0.3px; margin-bottom: 18px; }
.section h3 { font-family: var(--display); font-size: 16px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; margin-top: 24px; }
.section p { color: var(--dark-gray); margin-bottom: 16px; }
.section p:last-child { margin-bottom: 0; }
.divider { height: 1px; background: var(--light-gray); margin: 48px 0 0; }

/* TWO COL */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 8px; }

/* — referenced in body, not in source <style> — */
.tension-box { background: var(--white); border: 1px solid var(--light-gray); border-radius: 8px; padding: 20px 22px; text-align: left; }
.tension-box h4 { font-family: var(--display); font-size: 14px; font-weight: 700; color: var(--charcoal); margin-bottom: 14px; }
.tension-title { font-family: var(--display); font-size: 12px; font-weight: 700; color: var(--teal-dark); margin: 14px 0 8px; text-transform: uppercase; letter-spacing: 0.5px; }
.tension-box ul { margin: 0 0 8px; padding-left: 18px; color: var(--dark-gray); font-size: 14.5px; line-height: 1.65; }
.tension-box li { margin-bottom: 6px; }

.pull-quote { margin: 32px 0; padding: 22px 28px; border-left: 4px solid var(--gold); background: var(--white); border-radius: 0 6px 6px 0; }
.pull-quote p { font-family: var(--body); font-size: 20px; color: var(--charcoal); line-height: 1.5; font-style: italic; margin: 0 !important; }

.built-list { display: flex; flex-direction: column; gap: 24px; margin-top: 24px; }
.built-item { display: flex; gap: 18px; align-items: flex-start; }
.built-num { flex-shrink: 0; width: 38px; height: 38px; background: var(--teal); color: var(--white); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-family: var(--display); font-weight: 700; font-size: 16px; }
.built-content h3 { margin-top: 0; font-family: var(--display); font-size: 16px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
.built-content p { margin-bottom: 0; color: var(--dark-gray); font-size: 16px; line-height: 1.75; }

.daio-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
.daio-cell { border-radius: 8px; padding: 18px 20px; }
.daio-cell h4 { font-family: var(--display); font-size: 13px; font-weight: 700; color: var(--gold); margin-bottom: 10px; }
.daio-cell ul { margin: 0; padding-left: 18px; font-size: 13.5px; line-height: 1.55; color: rgba(255,255,255,0.9); }
.daio-cell li { margin-bottom: 6px; }

.discipline-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 20px; }
.disc-head { padding: 12px 14px; text-align: center; font-family: var(--display); font-weight: 700; font-size: 11px; color: var(--white); letter-spacing: 0.5px; line-height: 1.3; }
.disc-body { padding: 16px; border: 1px solid var(--light-gray); border-top: none; background: var(--white); border-radius: 0 0 6px 6px; }
.disc-body ul { margin: 0; padding-left: 16px; font-size: 14px; line-height: 1.6; color: var(--dark-gray); }
.disc-body li { margin-bottom: 6px; }
.disc-body em { font-style: italic; }

.metrics-flow { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-top: 24px; }
.metrics-tier { border-radius: 8px; padding: 16px 20px; text-align: center; box-sizing: border-box; }
.metrics-tier h4 { font-family: var(--display); font-size: 14px; margin-bottom: 8px; }
.metrics-tier p { font-size: 13px; margin: 0; line-height: 1.5; }
.tier-arrow { color: var(--gray); font-size: 18px; line-height: 1; padding: 2px 0; }

.outcomes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
.outcome-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 8px; padding: 24px; }
.outcome-number { font-family: var(--display); font-size: 32px; font-weight: 700; color: var(--teal); margin-bottom: 8px; line-height: 1.1; }
.outcome-label { font-family: var(--display); font-size: 13px; font-weight: 700; color: var(--charcoal); margin-bottom: 10px; }
.outcome-desc { font-size: 14px; color: var(--dark-gray); margin: 0; line-height: 1.65; }

.highlight-box { border: 1px solid var(--light-gray); border-radius: 8px; overflow: hidden; background: var(--white); }
.highlight-box-head { font-family: var(--display); font-size: 14px; font-weight: 700; color: var(--charcoal); padding: 14px 18px; background: var(--cream); border-bottom: 1px solid var(--light-gray); }
.highlight-box-body { padding: 18px 20px; }
.highlight-box-body ul { margin: 0; padding-left: 18px; color: var(--dark-gray); font-size: 15px; line-height: 1.7; }

.cta-strip { background: var(--terra); padding: 48px; display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; box-sizing: border-box; margin-top: 0; }
.cta-strip-left h3 { font-family: var(--display); font-size: 20px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
.cta-strip-left a { font-family: var(--display); font-size: 14px; color: var(--charcoal); text-decoration: none; opacity: 0.7; }
.cta-btn { background: var(--charcoal); color: var(--white); font-family: var(--display); font-weight: 700; font-size: 14px; padding: 13px 28px; border-radius: 6px; text-decoration: none; white-space: nowrap; flex-shrink: 0; display: inline-block; border: none; cursor: pointer; }

/* ═══════════════════════════════════════════════════════════
   MOBILE — 375px target, 8pt grid, centered text
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  .leadership-web-strategy-page .hero { padding: 48px 24px 40px !important; text-align: center !important; }
  .leadership-web-strategy-page .hero-inner { max-width: 100% !important; }
  .leadership-web-strategy-page .hero-tag { font-size: 10px !important; }
  .leadership-web-strategy-page .hero h1 { font-size: clamp(24px, 6vw, 30px) !important; line-height: 1.2 !important; text-align: center !important; }
  .leadership-web-strategy-page .hero-sub { font-size: 15px !important; text-align: center !important; max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
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
  .leadership-web-strategy-page .tension-box,
  .leadership-web-strategy-page .tension-box li,
  .leadership-web-strategy-page .built-content,
  .leadership-web-strategy-page .built-content p,
  .leadership-web-strategy-page .highlight-box-body,
  .leadership-web-strategy-page .highlight-box-body li,
  .leadership-web-strategy-page .outcome-desc,
  .leadership-web-strategy-page .disc-body,
  .leadership-web-strategy-page .disc-body li { text-align: left !important; }

  .leadership-web-strategy-page .pull-quote { padding: 24px !important; margin: 24px 0 !important; border-left: none !important; border-top: 4px solid var(--gold) !important; text-align: center !important; }
  .leadership-web-strategy-page .pull-quote p { font-size: 17px !important; text-align: center !important; }

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
  .leadership-web-strategy-page .discipline-grid { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .daio-grid { grid-template-columns: 1fr !important; }
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
  .leadership-web-strategy-page .built-item { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
  .leadership-web-strategy-page .value-content p { text-align: left !important; }
  .leadership-web-strategy-page .who-text { text-align: left !important; }
  .leadership-web-strategy-page .process-content p { text-align: left !important; }
  .leadership-web-strategy-page .lesson-body { text-align: left !important; }
  .leadership-web-strategy-page .finding-body { text-align: left !important; }
  .leadership-web-strategy-page .card-body { text-align: left !important; }
  .leadership-web-strategy-page .act-card-body li { text-align: left !important; }
  .leadership-web-strategy-page .highlight-box-body li { text-align: left !important; }

  .leadership-web-strategy-page .lead-intro { padding: 32px 24px 0 !important; text-align: center !important; }
  .leadership-web-strategy-page .lead-intro p { text-align: center !important; }

  .leadership-web-strategy-page .cta-strip { flex-direction: column !important; padding: 48px 24px !important; text-align: center !important; gap: 24px !important; }
  .leadership-web-strategy-page .cta-strip-left h3 { font-size: 18px !important; text-align: center !important; }
  .leadership-web-strategy-page .cta-strip-left a { text-align: center !important; display: block !important; }
  .leadership-web-strategy-page .cta-btn { display: block !important; text-align: center !important; width: 100% !important; }

  .leadership-web-strategy-page .framing-strip { text-align: left !important; }
  .leadership-web-strategy-page .legend { justify-content: center !important; }
  .leadership-web-strategy-page .post-title { text-align: left !important; }
  .leadership-web-strategy-page .post-subtitle { text-align: left !important; }
  .leadership-web-strategy-page .post-excerpt { text-align: left !important; }
}

@media (max-width: 480px) {

  .leadership-web-strategy-page .hero { padding: 40px 16px 32px !important; }
  .leadership-web-strategy-page .hero h1 { font-size: clamp(22px, 7vw, 26px) !important; }
  .leadership-web-strategy-page .hero-sub { font-size: 14px !important; }

  .leadership-web-strategy-page .page-wrap { padding: 0 16px !important; }
  .leadership-web-strategy-page .section { padding: 40px 16px 0 !important; }
  .leadership-web-strategy-page .section h2 { font-size: 20px !important; }
  .leadership-web-strategy-page .card-grid { padding: 24px 0 !important; }
  .leadership-web-strategy-page .lead-intro { padding: 24px 16px 0 !important; }

  .leadership-web-strategy-page .stats-row.three { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .stats-row.two { grid-template-columns: 1fr !important; }
  .leadership-web-strategy-page .stat-row { grid-template-columns: 1fr !important; }

  .leadership-web-strategy-page .cta-strip { padding: 40px 16px !important; }
  .leadership-web-strategy-page .cta-btn { padding: 16px !important; }

  .leadership-web-strategy-page .tabs-wrapper { padding: 0 !important; }
  .leadership-web-strategy-page .tab { padding: 16px 12px !important; font-size: 12px !important; }

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
          <h1>
            Web Strategy: <em>Team Vision</em>
          </h1>
          <p className="hero-sub">
            Building a cross-functional team from the ground up — and giving UX, SEO, and CRO a shared identity, operating model, and north star.
          </p>
          <div className="meta-strip">
            <div className="meta-item">
              <div className="meta-label">Company</div>
              <div className="meta-value">Large EdTech Company</div>
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
          <h2>A new team needed more than a mandate — it needed a shared philosophy</h2>
          <p>
            When I joined a large EdTech company as Manager of UX, SEO, and CRO, I inherited an understaffed function of five where the majority of members had been at the company less than a year. Each discipline had its own priorities and metrics. There was no shared language, no unified operating model, and no clear picture of how UX, SEO, and CRO could work <em>together</em> rather than alongside each other.
          </p>
          <p>
            Before I could lead the team toward any outcome, I had to do something more fundamental: listen, define, and align. This is the artifact of that work — a team vision I built from scratch to give three distinct disciplines a common identity, a shared principle, and a practical operating model for delivering results together.
          </p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">The Situation</div>
          <h2>Three disciplines. One funnel. No shared model.</h2>
          <div className="two-col">
            <div>
              <p>
                The company's growth depended on a complex enrollment funnel spanning awareness through to active student onboarding. UX, SEO, and CRO each touched this funnel — but from different angles, with different toolsets, and often without visibility into what the others were doing.
              </p>
              <p>
                Without alignment, each discipline would optimize for its own metrics in isolation. SEO would chase rankings. CRO would chase conversion rates. UX would chase usability scores. None of these are wrong — but optimizing them separately, without a shared user lens, was a path to fragmented decisions and missed growth opportunities.
              </p>
            </div>
            <div>
              <div className="tension-box">
                <h4>Two chasms identified from the listening tour</h4>
                <div className="tension-title">#1 — Implementation of Insights</div>
                <ul>
                  <li>Research insights were being acted on too quickly, without the original researcher's input</li>
                  <li>No structured process to propose experiments before committing to solutions</li>
                </ul>
                <div className="tension-title">#2 — Cross-Team Collaboration</div>
                <ul>
                  <li>New team, new members — no shared problem space or camaraderie yet</li>
                  <li>No mechanism for surfacing learnings across disciplines</li>
                </ul>
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
          <p>
            What I heard shaped everything that came after. The team didn't need more process — they needed a clear answer to the question: "why does it matter that we're one team, and not three separate functions?" My job was to make that answer impossible to argue with.
          </p>

          <div className="pull-quote">
            <p>"User value drives business value. A cohesive user experience leads to users engaging with our products and offerings more."</p>
          </div>

          <p>That became the founding principle of the Web Strategy team — and the anchor for every framework, model, and operating decision that followed.</p>

          <h3>What the listening tour actually revealed</h3>
          <p>
            The most significant thing I learned wasn't about the disciplines — it was about how the company operated. There was no agile methodology. The organization worked in a project-based model, not a product-based one. Teams delivered against fixed scopes with defined endpoints. The idea of an iterative cycle — running research, learning, adapting, and going again — was genuinely foreign to how decisions were made.
          </p>
          <p>
            This meant that my proposal for leading indicators, iterative research, and a continuous design-and-test loop wasn't just a new framework. It was a different way of thinking about work entirely. It surprised a lot of people. It took sustained effort to get it partially adopted across the broader organization.
          </p>
          <p>
            But within the team, it took hold. I built the Web Strategy function to be agile enough to operate in that mode consistently — and the model was durable enough that the team continued to function that way after the restructure that followed my departure.
          </p>

          <div className="pull-quote">
            <p>"I didn't just introduce a new process. I changed how the team understood its own work."</p>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">What I Built</div>
          <h2>Five foundations that made collaboration possible</h2>

          <div className="built-list">
            <div className="built-item">
              <div className="built-num">1</div>
              <div className="built-content">
                <h3>A unified team identity</h3>
                <p>
                  I defined the team not by its component disciplines but by its strategic position: an internal, experiment-driven startup, cross-functional and multidisciplinary, uniquely positioned to own the full digital funnel from awareness to retention.
                </p>
              </div>
            </div>
            <div className="built-item">
              <div className="built-num">2</div>
              <div className="built-content">
                <h3>The DAIO operating model</h3>
                <p>
                  Rather than defining the team by outputs, I defined it by a cycle: <strong>D</strong>ata → <strong>A</strong>ction → <strong>I</strong>terate → <strong>O</strong>utcomes. The DAIO principle gave every discipline a shared process language so everyone could describe their work in the same terms.
                </p>
              </div>
            </div>
          </div>

          <div className="daio-grid">
            <div className="daio-cell" style={{ background: 'var(--charcoal)' }}>
              <h4>Research & Data</h4>
              <ul>
                <li>Quantitative and qualitative research to gain insights into which products and features need attention</li>
                <li>Understand the problem space before ideating a solution</li>
              </ul>
            </div>
            <div className="daio-cell" style={{ background: 'var(--teal)' }}>
              <h4>Experiments</h4>
              <ul>
                <li>Foster quick learnings — clarify the problem space and test potential solutions</li>
                <li>Surface learnings to the broader team to inform other projects</li>
              </ul>
            </div>
            <div className="daio-cell" style={{ background: 'var(--charcoal)' }}>
              <h4>Drive Measurable Outcomes</h4>
              <ul>
                <li>Focus on outcomes that connect user value to business results</li>
                <li>Demonstrate successful new processes to the broader company</li>
              </ul>
            </div>
            <div className="daio-cell" style={{ background: 'var(--dark-gray)' }}>
              <h4>Apply the Learnings</h4>
              <ul>
                <li>Apply learnings via existing products and features</li>
                <li>Propose new products and features to the broader company</li>
              </ul>
            </div>
          </div>

          <div className="built-list" style={{ marginTop: '32px' }}>
            <div className="built-item">
              <div className="built-num">3</div>
              <div className="built-content">
                <h3>A funnel model with UX as the connective tissue</h3>
                <p>
                  I repositioned UX — not as a single lane in the funnel, but as the lens that encapsulated every stage. SEO brings families in. CRO converts them at the right moment. UX ensures the entire experience is cohesive, builds trust, and meets families where they are at each step.
                </p>
              </div>
            </div>
          </div>

          <div className="discipline-grid">
            <div>
              <div className="disc-head" style={{ background: 'var(--teal)' }}>
                SEO
              </div>
              <div className="disc-body">
                <ul>
                  <li>Drives organic traffic into the top of the funnel</li>
                  <li>Makes the company findable at the moment of intent</li>
                  <li>Keyword, content, and code optimization</li>
                  <li>Link building and rankings</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="disc-head" style={{ background: 'var(--charcoal)' }}>UX — The Connective Tissue</div>
              <div
                className="disc-body"
                style={{ borderLeft: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' }}
              >
                <ul>
                  <li>Encapsulates the entire funnel end-to-end</li>
                  <li>Creates a cohesive journey from awareness to retention</li>
                  <li>Research, personas, information architecture</li>
                  <li>Meets users where they are — emotionally and practically</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="disc-head" style={{ background: 'var(--terra)' }}>
                CRO
              </div>
              <div className="disc-body">
                <ul>
                  <li>Optimizes conversion at every stage of the funnel</li>
                  <li>Strategically engages users when they're ready</li>
                  <li>Tracks bounce rates, traffic patterns, CTAs</li>
                  <li>Leakiest part should be at the top, not the bottom</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="built-list" style={{ marginTop: '32px' }}>
            <div className="built-item">
              <div className="built-num">4</div>
              <div className="built-content">
                <h3>A metrics model with leading indicators</h3>
                <p>
                  My proposal added a layer of smaller, combinable user health metrics that rolled up to the broader business numbers — preventing the team from optimizing only for conversion while ignoring the upstream signals that cause drop-off in the first place.
                </p>
              </div>
            </div>
          </div>

          <div className="metrics-flow">
            <div className="metrics-tier" style={{ background: 'var(--charcoal)', color: 'var(--white)', width: '100%' }}>
              <h4 style={{ color: 'var(--white)' }}>Traffic</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>All people discovering the company across channels</p>
            </div>
            <div className="tier-arrow">↓</div>
            <div className="metrics-tier" style={{ background: 'var(--charcoal)', color: 'var(--white)', width: '82%' }}>
              <h4 style={{ color: 'var(--gold)' }}>User Health Metrics (Leading Indicators)</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Combinable signals — e.g. SEO rankings + UX quality scores</p>
            </div>
            <div className="tier-arrow">↓</div>
            <div
              className="metrics-tier"
              style={{ background: 'var(--white)', border: '1px solid var(--light-gray)', width: '64%' }}
            >
              <h4 style={{ color: 'var(--charcoal)' }}>Conversion Rate Optimization</h4>
              <p style={{ color: 'var(--dark-gray)' }}>Rate of Applications · Rate of Enrollments</p>
            </div>
            <div className="tier-arrow">↓</div>
            <div className="metrics-tier" style={{ background: 'var(--gold)', width: '48%' }}>
              <h4 style={{ color: 'var(--charcoal)', fontSize: '15px' }}>Growth</h4>
              <p style={{ color: 'var(--charcoal)' }}>The department's main objective</p>
            </div>
          </div>

          <div className="built-list" style={{ marginTop: '32px' }}>
            <div className="built-item">
              <div className="built-num">5</div>
              <div className="built-content">
                <h3>Explicit maps of where disciplines intersect</h3>
                <p>
                  A key part of the vision was making explicit the overlapping responsibilities between each pair of disciplines — the shared work that only happens when they collaborate.
                </p>
              </div>
            </div>
          </div>

          <div className="discipline-grid">
            <div>
              <div className="disc-head" style={{ background: 'var(--teal)' }}>
                UX × SEO
              </div>
              <div className="disc-body">
                <ul>
                  <li>Title page and headline optimization</li>
                  <li>Navigation and information architecture</li>
                  <li>Mobile-first responsiveness</li>
                  <li>
                    <em>"SEO talks to robots, UX talks to people."</em>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="disc-head" style={{ background: 'var(--charcoal)' }}>
                UX × CRO
              </div>
              <div className="disc-body">
                <ul>
                  <li>Page hierarchy and form design</li>
                  <li>Strategic, user-centric CTAs</li>
                  <li>Streamlined navigation that reduces friction</li>
                  <li>
                    <em>A positive UX boosts CRO from the start</em>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="disc-head" style={{ background: 'var(--terra)' }}>
                SEO × CRO
              </div>
              <div className="disc-body">
                <ul>
                  <li>Landing page optimization</li>
                  <li>Generate revenue by increasing brand reach</li>
                  <li>Bring the right traffic, then convert it</li>
                  <li>Reduce drop-off at the point of intent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Measured Outcomes</div>
          <h2>The operating model changed how the team actually worked</h2>
          <p>Leadership vision work is easy to describe and hard to verify. Three outcomes from this period stand out as concrete evidence that the model took hold.</p>

          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-number">25%</div>
              <div className="outcome-label">Increase in team collaboration</div>
              <p className="outcome-desc">
                Measured by the Buckingham Survey — a validated instrument for team health. A structured measure of how the team experienced working together, before and after the operating model was introduced.
              </p>
            </div>
            <div className="outcome-card">
              <div className="outcome-number">5 → 9</div>
              <div className="outcome-label">Direct reports scaled</div>
              <p className="outcome-desc">
                Recruited and onboarded 4 new members across UX research, SEO, and CRO while the operating model was being built — increasing delivery velocity by 30%.
              </p>
            </div>
          </div>

          <div className="highlight-box" style={{ marginTop: '14px' }}>
            <div className="highlight-box-head">The outcome that matters most</div>
            <div className="highlight-box-body">
              <ul>
                <li>
                  The team continued to operate in the agile model after the restructure that followed my departure. I didn't build something that depended on me being in the room. That's the test of whether a leadership intervention actually worked.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Why This Matters</div>
          <h2>What this kind of leadership actually looks like</h2>
          <p>
            Building this vision wasn't a presentation exercise. It was the foundation that let me manage three disciplines simultaneously without losing the thread between them. Every prioritization decision, every experiment, every stakeholder conversation could be anchored back to the same model: user value drives business value, and UX is the connective tissue that makes it real.
          </p>
          <p>
            The work here reflects a specific leadership philosophy: before you ask a team to move fast, you have to make sure they're pointing in the same direction. The listening tour, the shared principle, the DAIO model, the metrics architecture — these weren't bureaucratic artifacts. They were the conditions that made genuine cross-functional collaboration possible.
          </p>

          <div className="pull-quote">
            <p>"Most companies want teams to collaborate. Few build the conditions for it to actually work."</p>
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
