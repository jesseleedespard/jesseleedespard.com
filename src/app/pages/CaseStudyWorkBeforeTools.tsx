import { Fragment, useEffect } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';

export default function CaseStudyWorkBeforeTools() {
  useEffect(() => {
    document.title = 'The Work Before the Tools · Jesse Lee Despard';
  }, []);

  return (
    <Fragment>
      <div className="work-before-tools-page">
        <style>{`
.work-before-tools-page,
.work-before-tools-page *,
.work-before-tools-page *::before,
.work-before-tools-page *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.work-before-tools-page {
  --display: 'DM Sans', system-ui, sans-serif;
  --body:    'Lora', Georgia, serif;

  --max:  860px;
  --wide: 1100px;
}

html { scroll-behavior: smooth; }

.work-before-tools-page {
  font-family: var(--body);
  background: var(--cream);
  color: var(--charcoal);
  font-size: var(--font-size-base);
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  padding-bottom: var(--page-padding);
}

/* ── HERO ─────────────────────────────────────────────────── */
.hero {
  background: var(--charcoal);
  padding: 72px 48px 64px;
  position: relative;
  overflow: hidden;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(to right, var(--teal), var(--gold), transparent);
}
.hero-inner {
  max-width: var(--max);
  margin: 0 auto;
}
.hero-tag {
  font-family: var(--display);
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 24px;
  border: 1px solid rgba(212,168,67,0.4);
  padding: 8px 16px;
  border-radius: var(--radius-sm);
}
.hero h1 {
  font-family: var(--display);
  font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl));
  font-weight: 700;
  color: var(--white);
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin-bottom: 8px;
  text-wrap: balance;
}
.hero h1 em {
  color: var(--gold);
  font-style: normal;
}
.hero-sub {
  font-family: var(--body);
  font-size: var(--font-size-lg);
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
  margin-bottom: 40px;
  font-style: italic;
}
.meta-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 28px;
}
.meta-item {
  padding-right: 24px;
  margin-right: 24px;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label {
  font-family: var(--display);
  font-size: var(--font-size-xs);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 700;
  margin-bottom: 4px;
}
.meta-value {
  font-family: var(--display);
  font-size: var(--font-size-sm);
  color: rgba(255,255,255,0.82);
  font-weight: 500;
}

/* ── LAYOUT ───────────────────────────────────────────────── */
.page-wrap {
  max-width: calc(var(--max) + (var(--page-padding) * 2));
  margin: 0 auto;
  padding: 0 var(--page-padding);
}

.section { padding: var(--page-padding) 0 0; }

.section-label {
  font-family: var(--display);
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--teal-dark);
  margin-bottom: 12px;
}

.section h2 {
  font-family: var(--display);
  font-size: clamp(var(--font-size-lg), 3vw, var(--font-size-xl));
  font-weight: 700;
  color: var(--charcoal);
  line-height: 1.25;
  letter-spacing: -0.3px;
  margin-bottom: 24px;
}

.section h3 {
  font-family: var(--display);
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--charcoal);
  margin-bottom: 8px;
  margin-top: 32px;
}

.section p {
  color: var(--dark-gray);
  margin-bottom: 18px;
  font-weight: 400;
}
.section p:last-child { margin-bottom: 0; }

.divider {
  height: 1px;
  background: var(--light-gray);
  margin: 52px 0 0;
}

/* ── TWO-COL ──────────────────────────────────────────────── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 8px;
}

/* ── UNDEFINED IN SOURCE HTML — layout for body classes ───── */
.tension-box {
  background: var(--white);
  border: 1px solid var(--light-gray);
  border-radius: var(--radius-sm);
  overflow: hidden;
}
.tension-box-head {
  background: var(--charcoal);
  padding: 14px 18px;
  font-family: var(--display);
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.5px;
}
.tension-box-body {
  padding: 16px 18px;
}
.tension-box-body .principle-item { font-size: var(--font-size-sm); line-height: 1.65; color: var(--dark-gray); margin-bottom: 7px; padding: 6px 0 6px 20px; position: relative; }
.tension-box-body .principle-item::before { content: '•'; position: absolute; left: 6px; color: var(--teal); font-weight: 700; }

.img-block {
  margin: 24px 0 12px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--light-gray);
  background: var(--white);
}
.img-block img {
  display: block;
  width: 100%;
  height: auto;
}
.img-caption {
  font-family: var(--display);
  font-size: var(--font-size-xs);
  color: var(--gray);
  font-style: italic;
  margin-bottom: 18px;
  text-align: center;
}

.pull-quote {
  margin: 28px 0;
  padding: calc(var(--page-padding) / 2) var(--page-padding);
  background: var(--white);
  border: 1px solid var(--light-gray);
  border-left: 4px solid var(--teal-dark);
  border-radius: var(--radius-md);
}
.pull-quote p {
  font-family: var(--body);
  font-size: var(--font-size-xl);
  font-style: italic;
  color: var(--charcoal);
  margin: 0;
}

.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;
}
.pillar-head {
  font-family: var(--display);
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--white);
  padding: 12px 14px;
  text-align: center;
}
.pillar-body {
  padding: 16px;
  border: 1px solid var(--light-gray);
  border-top: none;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  background: var(--white);
}
.pillar-item { font-size: var(--font-size-sm); line-height: 1.65; color: var(--dark-gray); margin-bottom: 7px; padding: 6px 0 6px 20px; position: relative; }
.pillar-item::before { content: '•'; position: absolute; left: 6px; color: var(--teal); font-weight: 700; }
.pillar-item:last-child { margin-bottom: 0; }

.impact-list {
  margin: 20px 0 0;
  padding-left: 22px;
  color: var(--dark-gray);
  font-size: var(--font-size-base);
  line-height: 1.75;
  list-style-type: disc;
}
.impact-list li { margin-bottom: 14px; list-style-type: disc; }


/* NUMBERED CARDS */
.theme-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px; }
.theme-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); padding: 16px 18px; display: flex; gap: 12px; align-items: flex-start; }
.theme-num { font-family: var(--display); font-size: var(--font-size-lg); font-weight: 700; color: var(--teal); min-width: 32px; }
.theme-content h3 { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--charcoal); margin-top: 0; margin-bottom: 4px; }
.theme-content p { font-size: var(--font-size-sm); line-height: 1.7; color: var(--dark-gray); margin: 0; }

/* PRINCIPLES CARDS */
.principles-headline { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--charcoal); text-align: center; margin: 24px 0 16px; }
.principles-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 24px; }
.principle-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); overflow: hidden; }
.principle-head { padding: 12px 14px; font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--white); text-align: center; }
.principle-title { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: inherit; letter-spacing: 0.5px; }
.principle-body { padding: 16px 18px; }
.principle-item { font-size: var(--font-size-sm); line-height: 1.65; color: var(--dark-gray); margin-bottom: 7px; padding: 6px 0 6px 20px; position: relative; }
.principle-item::before { content: '•'; position: absolute; left: 6px; color: var(--teal); font-weight: 700; }
.principle-note { font-family: var(--body); font-size: var(--font-size-sm); line-height: 1.65; color: var(--dark-gray); font-style: italic; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--light-gray); }

/* ═══════════════════════════════════════════════════════════
   MOBILE — 375px target, 8pt grid, centered text
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  /* HERO — centered */
  .work-before-tools-page .hero { padding: 48px 24px 40px !important; text-align: center !important; }
  .work-before-tools-page .hero-inner { max-width: 100% !important; }
  .work-before-tools-page .hero-tag { font-size: var(--font-size-xs) !important; }
  .work-before-tools-page .hero h1 { font-size: clamp(var(--font-size-xl), 6vw, var(--font-size-2xl)) !important; line-height: 1.2 !important; text-align: center !important; }
  .work-before-tools-page .hero-sub { font-size: var(--font-size-sm) !important; text-align: center !important; max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; }
  .work-before-tools-page .hero-cta { display: inline-block !important; }
  .work-before-tools-page .show-title { font-size: clamp(var(--font-size-xl), 6vw, var(--font-size-2xl)) !important; text-align: center !important; }
  .work-before-tools-page .show-tagline { text-align: center !important; }

  /* META STRIP */
  .work-before-tools-page .meta-strip { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding-top: 24px !important; border-top: 1px solid rgba(255,255,255,0.12) !important; }
  .work-before-tools-page .meta-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 0 0 16px 0 !important; margin: 0 !important; text-align: center !important; width: 100% !important; }
  .work-before-tools-page .meta-item:last-child { border-bottom: none !important; padding-bottom: 0 !important; }

  /* PAGE WRAP */
  .work-before-tools-page .page-wrap { padding: 0 24px !important; }

  /* SECTIONS — centered text on mobile */
  .work-before-tools-page .section { padding: 48px 24px 0 !important; text-align: center !important; }
  .work-before-tools-page .section h2 { font-size: clamp(var(--font-size-lg), 5.5vw, var(--font-size-xl)) !important; text-align: center !important; }
  .work-before-tools-page .section p { text-align: center !important; }
  .work-before-tools-page .section-label { text-align: center !important; }
  .work-before-tools-page .divider { margin: 40px 0 0 !important; }

  .work-before-tools-page .principles-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .principle-item,
  .work-before-tools-page .principle-note { text-align: left !important; }

  .work-before-tools-page .tension-box-body,
  .work-before-tools-page .pillar-body,
  .work-before-tools-page .impact-list,
  .work-before-tools-page .impact-list li { text-align: left !important; }

  /* PULL QUOTE */
  .work-before-tools-page .pull-quote { padding: var(--page-padding) !important; margin: 24px 0 !important; background: var(--white) !important; border: 1px solid var(--light-gray) !important; border-left: 4px solid var(--teal-dark) !important; border-radius: var(--radius-md) !important; text-align: center !important; }
  .work-before-tools-page .pull-quote p { font-size: var(--font-size-base) !important; font-style: italic !important; text-align: center !important; }

  /* CARD GRID */
  .work-before-tools-page .card-grid { padding: 32px 0 !important; gap: 16px !important; }
  .work-before-tools-page .cs-cards { grid-template-columns: 1fr !important; gap: 16px !important; }

  /* CASE STUDY CARDS — left-align card content for readability */
  .work-before-tools-page .cs-card-body { padding: 24px !important; text-align: left !important; }
  .work-before-tools-page .lead-card-body { padding: 24px !important; text-align: left !important; }
  .work-before-tools-page .cs-card-title { text-align: left !important; }
  .work-before-tools-page .cs-card-desc { text-align: left !important; }
  .work-before-tools-page .cs-card-footer { text-align: left !important; }
  .work-before-tools-page .lead-card-title { text-align: left !important; }
  .work-before-tools-page .lead-card-desc { text-align: left !important; }

  /* GRIDS — all single column */
  .work-before-tools-page .two-col { grid-template-columns: 1fr !important; gap: 24px !important; }
  .work-before-tools-page .grid2 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .work-before-tools-page .grid3 { grid-template-columns: 1fr !important; gap: 16px !important; }
  .work-before-tools-page .track-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .theme-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .impl-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .exp-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .testimonials-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .outcomes-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .stats-row.three { grid-template-columns: 1fr 1fr !important; }
  .work-before-tools-page .stats-row.two { grid-template-columns: 1fr 1fr !important; }
  .work-before-tools-page .stat-row { grid-template-columns: 1fr 1fr !important; }
  .work-before-tools-page .platforms-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .discipline-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .daio-grid { grid-template-columns: 1fr !important; }
  .work-before-tools-page .photo-block { grid-template-columns: 1fr !important; }
  .work-before-tools-page .pillars { grid-template-columns: 1fr !important; }

  /* COMPONENTS */
  .work-before-tools-page .show-block { flex-direction: column !important; align-items: center !important; gap: 24px !important; text-align: center !important; }
  .work-before-tools-page .show-art { margin: 0 auto !important; }
  .work-before-tools-page .show-info { text-align: center !important; }
  .work-before-tools-page .podcast-card { flex-direction: column !important; gap: 24px !important; padding: 32px 24px !important; text-align: center !important; }
  .work-before-tools-page .podcast-desc { text-align: center !important; }
  .work-before-tools-page .pmf-callout { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .work-before-tools-page .pmf-text { text-align: center !important; }
  .work-before-tools-page .notify-strip { flex-direction: column !important; padding: 24px !important; gap: 16px !important; text-align: center !important; }
  .work-before-tools-page .notify-links { flex-direction: column !important; width: 100% !important; align-items: center !important; }
  .work-before-tools-page .notify-btn { text-align: center !important; display: block !important; padding: 16px !important; }
  .work-before-tools-page .notify-btn-outline { text-align: center !important; display: block !important; padding: 16px !important; }
  .work-before-tools-page .hinge-box { padding: 24px !important; text-align: center !important; }
  .work-before-tools-page .hinge-box p { text-align: center !important; }
  .work-before-tools-page .schedule-block { padding: 40px 24px !important; }
  .work-before-tools-page .about-box p { text-align: left !important; }
  .work-before-tools-page .medium-strip { flex-direction: column !important; gap: 16px !important; text-align: center !important; }
  .work-before-tools-page .post-card-top { flex-direction: column !important; align-items: flex-start !important; gap: 4px !important; }
  .work-before-tools-page .built-item { flex-direction: column !important; gap: 8px !important; }
  .work-before-tools-page .value-content p { text-align: left !important; }
  .work-before-tools-page .who-text { text-align: left !important; }
  .work-before-tools-page .process-content p { text-align: left !important; }
  .work-before-tools-page .lesson-body { text-align: left !important; }
  .work-before-tools-page .finding-body { text-align: left !important; }
  .work-before-tools-page .card-body { text-align: left !important; }
  .work-before-tools-page .act-card-body li { text-align: left !important; }
  .work-before-tools-page .highlight-box-body li { text-align: left !important; }

  /* LEAD INTRO */
  .work-before-tools-page .lead-intro { padding: 32px 24px 0 !important; text-align: center !important; }
  .work-before-tools-page .lead-intro p { text-align: center !important; }

  /* CTA STRIP */
  /* WRITING PAGE */
  .work-before-tools-page .framing-strip { text-align: left !important; }
  .work-before-tools-page .legend { justify-content: center !important; }
  .work-before-tools-page .post-title { text-align: left !important; }
  .work-before-tools-page .post-subtitle { text-align: left !important; }
  .work-before-tools-page .post-excerpt { text-align: left !important; }
}

@media (max-width: 480px) {

  .work-before-tools-page .hero { padding: 40px 16px 32px !important; }
  .work-before-tools-page .hero h1 { font-size: clamp(var(--font-size-xl), 7vw, var(--font-size-2xl)) !important; }
  .work-before-tools-page .hero-sub { font-size: var(--font-size-sm) !important; }

  .work-before-tools-page .page-wrap { padding: 0 16px !important; }
  .work-before-tools-page .section { padding: 40px 16px 0 !important; }
  .work-before-tools-page .section h2 { font-size: var(--font-size-lg) !important; }
  .work-before-tools-page .card-grid { padding: 24px 0 !important; }
  .work-before-tools-page .lead-intro { padding: 24px 16px 0 !important; }

  .work-before-tools-page .stats-row.three { grid-template-columns: 1fr !important; }
  .work-before-tools-page .stats-row.two { grid-template-columns: 1fr !important; }
  .work-before-tools-page .stat-row { grid-template-columns: 1fr !important; }

  .work-before-tools-page .tabs-wrapper { padding: 0 !important; }
  .work-before-tools-page .tab { padding: 16px 12px !important; font-size: var(--font-size-xs) !important; }

  .work-before-tools-page .podcast-card { padding: 24px 16px !important; }
  .work-before-tools-page .hinge-box { padding: 24px 16px !important; }
  .work-before-tools-page .pmf-callout { padding: 24px 16px !important; }
  .work-before-tools-page .notify-strip { padding: 24px 16px !important; }
  .work-before-tools-page .schedule-block { padding: 32px 16px !important; }
  .work-before-tools-page .service-card { flex-direction: column !important; }
  .work-before-tools-page .service-num { padding: 16px !important; min-width: unset !important; }
}
`}</style>

      <header className="hero">
        <div className="hero-inner">
          <span className="hero-tag">UX Leadership · Cross-functional Workshop</span>
          <h1>
            The Work Before the Tools: <em>Defining AI Personalization</em>
          </h1>
          <p className="hero-sub">
            When a large EdTech company decided to invest in AI-powered personalization, the instinct was to start evaluating tools. I paused and asked what personalization actually meant for users first, and whether that aligned with the business vision.
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
              <div className="meta-value">UX, Marketing, Product</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Format</div>
              <div className="meta-value">Cross-functional Workshop</div>
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrap">
        <div className="section">
          <div className="section-label">Overview</div>
          <h2>Before the AI tools: aligning on what personalization means for people</h2>
          <p>
            A large EdTech company was preparing to invest in AI-powered personalization across its family enrollment experience. Leadership had a clear 12-month goal: one-to-one relationships with every family, from web to email to SMS. The market pressure was real. AI personalization tools were everywhere, and the temptation to start evaluating platforms was strong.
          </p>
          <p>
            Before any tools were shortlisted or roadmaps written, I asked the question that reframed the conversation: what does personalization actually mean for families, and does that roll up to the business vision? If we didn't know what we were trying to do for families, emotionally and not just functionally, we'd end up buying tools that optimized for the wrong things.
          </p>
          <p>
            A PM colleague set up and facilitated a cross-functional workshop to answer that question. I came in as a participant, carrying the UX and user lens, making sure every proposed definition of personalization got tested against what it would actually mean for the people it was supposed to serve.
          </p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">The Problem</div>
          <h2>A business vision without a shared definition</h2>
          <div className="two-col">
            <div>
              <p>
                The company's 12-month goal called for "one-to-one relationships" with families across all products. But across UX, Marketing, and Product, teams held fundamentally different assumptions about what that meant, and what AI should actually be doing.
              </p>
              <p>
                Without alignment at the vision level, any AI personalization tool would get shaped by whichever team had the loudest voice. The result: a system optimized for internal processes, not family outcomes.
              </p>
            </div>
            <div>
              <div className="tension-box">
                <div className="tension-box-head">Key tensions entering the room</div>
                <div className="tension-box-body">
                  <div className="principle-item">UX saw personalization as empathy at scale: meeting families where they are emotionally</div>
                  <div className="principle-item">Marketing saw it as AI-driven lead segmentation and conversion optimization</div>
                  <div className="principle-item">Product saw it as a data infrastructure and ML model challenge</div>
                  <div className="principle-item">Leadership was using "single deep understanding" without a shared definition</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Context</div>
          <h2>What the data told us about where families were getting lost</h2>
          <p>
            Before the workshop, marketing data surfaced a conversion gap that grounded the session in something concrete. With roughly 700,000 leads entering the funnel, a significant portion of RFI leads were converting to account creation within ten minutes. That suggested families weren't signaling their intent clearly, or that the funnel wasn't reading them accurately.
          </p>
          <p>
            On top of that, 30–40% of families dropped off between seeing the sign-up page and actually creating an account. Users were clicking "Enroll Now" when they simply wanted more information, unaware they were initiating the application process.
          </p>

          <div className="img-block">
            <img src="/img_funnel.png" alt="Enrollment funnel drop-off chart" />
          </div>
          <p className="img-caption">Enrollment funnel drop-off: the data that anchored the workshop conversation</p>

          <div className="pull-quote">
            <p>"Families weren't failing the funnel. The funnel was failing to read them."</p>
          </div>

          <p>
            This gave the workshop a sharp anchor: AI personalization wasn't a luxury feature. It was a direct response to a system that was treating all families identically, regardless of where they were emotionally or practically in their decision.
          </p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">My Role</div>
          <h2>Carrying the user perspective into a business vision workshop</h2>
          <p>
            My role in the workshop was not to run it. A PM colleague designed and facilitated the session. I was a participant, there as the UX manager, with a clear job: make sure every definition of personalization we landed on was tested against what it would actually mean for families, not just what it would mean for the business.
          </p>
          <p>
            That meant asking questions that slowed the conversation down when it rushed toward tools or business mechanics. It meant naming the risk that "one-to-one relationships" could get quietly reinterpreted as efficient lead segmentation if no one held space for the family experience. And it meant bringing that lens into the synthesis, so the document that was handed off to analytics, engineering, and senior leadership carried a user perspective, not just a business one.
          </p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">The Workshop</div>
          <h2>Defining what personalization should feel like</h2>
          <p>
            The PM's workshop moved through five phases, from framing to synthesis. The one where the UX lens could show up most fully was the definition of personalization principles. The team worked individually and then together to articulate three things: what personalization IS, what it IS NOT, and how families should FEEL when they experience it.
          </p>

          <div className="principles-headline">Personalization Principles: What the Team Aligned On</div>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-head" style={{ background: 'var(--teal)' }}>
                <div className="principle-title">Personalization IS</div>
              </div>
              <div className="principle-body">
                <div className="principle-item">A holistic journey, not a one-time event</div>
                <div className="principle-item">Empathy at scale: meeting families where they are emotionally</div>
                <div className="principle-item">Helpful guidance, relevant at the right moment</div>
                <div className="principle-item">Continuous: it remembers who you are across the journey</div>
                <div className="principle-item">A source of confident, informed decision-making</div>
                <div className="principle-note">Families should feel: seen, guided, in charge</div>
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-head" style={{ background: 'var(--terra)' }}>
                <div className="principle-title" style={{ color: 'var(--charcoal)' }}>Personalization IS NOT</div>
              </div>
              <div className="principle-body">
                <div className="principle-item">A persuasion or sales engine</div>
                <div className="principle-item">Creepy, assumptive, or one-size-fits-all</div>
                <div className="principle-item">A one-time feature or campaign tactic</div>
                <div className="principle-item">About creating excitement — it builds reassurance</div>
                <div className="principle-item">Defined by demographic data alone</div>
                <div className="principle-note">Families should NOT feel: pitched, overwhelmed, or tracked</div>
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-head" style={{ background: 'var(--charcoal)' }}>
                <div className="principle-title" style={{ color: 'var(--gold)' }}>Families Should Feel</div>
              </div>
              <div className="principle-body">
                <div className="principle-item">Seen and understood as individuals</div>
                <div className="principle-item">Confident, not in need of perfect certainty</div>
                <div className="principle-item">Guided, not overwhelmed</div>
                <div className="principle-item">Supported at every stage of their journey</div>
                <div className="principle-item">In charge of their own decision</div>
                <div className="principle-note">Outcome: transferable trust and confidence</div>
              </div>
            </div>
          </div>

          <p style={{ marginTop: 'var(--page-padding)' }}>
            Those three lists became the shared evaluation framework for every AI tool, channel, and roadmap decision that followed. They are also where a UX perspective was evangelized in the room: the commitment to build personalization as empathy at scale, not as lead segmentation.
          </p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">What Emerged</div>
          <h2>A shared framework with three pillars</h2>
          <p>
            The workshop produced the Vision Connect framework: a three-pillar structure that connected the business goal to the user outcome, and gave the team a principled lens for evaluating any AI tool or feature that followed.
          </p>

          <div className="pillars">
            <div className="pillar">
              <div className="pillar-head" style={{ background: 'var(--terra)', color: 'var(--charcoal)' }}>
                Holistic Journey
              </div>
              <div className="pillar-body">
                <div className="pillar-item">Personalization is not a one-time touchpoint. <strong>It remembers who users are</strong> and meets them at every stage of the journey.</div>
                <div className="pillar-item">Families should feel cared for and informed at all points. Personalization is a source of <strong>confident, informed decision-making</strong>.</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-head" style={{ background: 'var(--teal)', color: 'var(--white)' }}>
                Dynamic Content Engine
              </div>
              <div className="pillar-body">
                <div className="pillar-item">Personalization <strong>adjusts the experience based on context</strong>, aware of who families are and what they need at each step.</div>
                <div className="pillar-item">Leverages the content we have created to place the right amount of relevant information in the right context, helping users confidently progress to the next step.</div>
                <div className="pillar-item">Small redirects guide families back on track <strong>wherever they drop off</strong> in the journey.</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pillar-head" style={{ background: 'var(--charcoal)', color: 'var(--gold)' }}>
                Proactive Trust Building
              </div>
              <div className="pillar-body">
                <div className="pillar-item"><strong>Answer likely questions before families think to ask them</strong>, so they can trust themselves without needing perfect certainty.</div>
                <div className="pillar-item">The emotionally appropriate experience, <strong>at the right level of detail, in the right moment</strong>, for their specific scenario.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Key Insight</div>
          <h2>Reassurance, not excitement</h2>
          <p>
            One of the most clarifying moments of the workshop was a reframe that came from holding the family perspective in the room. Families enrolling a child in school don't need to be excited by AI. By the time they reach enrollment, they've already made a difficult, unconventional decision. What they need is reassurance that they made the right one.
          </p>
          <p>
            This shifted the entire conversation about what AI personalization was for. It wasn't about a compelling, algorithmically-driven marketing experience. It was about building the conditions for confident, informed decision-making at scale.
          </p>

          <div className="pull-quote">
            <p>"The best sale is the one that feels like you were given exactly what you needed. The customer doesn't feel pitched. It was natural."</p>
          </div>

          <p>This became the emotional north star for the framework: AI personalization as a supportive presence, not a persuasion engine.</p>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Outcome and Impact</div>
          <h2>From misalignment to a shared north star</h2>
          <p>
            The workshop moved the company from a high-level AI ambition to an actionable personalization philosophy, one that could now inform tool selection, roadmap prioritization, and cross-functional decision-making.
          </p>

          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-num">01</div>
              <div className="theme-content">
                <h3>Shared Framework</h3>
                <p>A shared three-pillar personalization framework that aligned UX, Marketing, and Product on language and intent — <strong>before any AI tool was selected</strong>.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">02</div>
              <div className="theme-content">
                <h3>Scoped First Version</h3>
                <p>A clear distinction between first-version scope (personalization for known users) and longer-term vision (individualization for unknown users), preventing over-engineering before foundations were in place.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">03</div>
              <div className="theme-content">
                <h3>Agreed Starting Point</h3>
                <p>Retention and LTV for current users, beginning at portal and onboarding stages where data signals were strongest.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">04</div>
              <div className="theme-content">
                <h3>Open Questions Documented</h3>
                <p>A set of open questions surfaced and documented, creating a specific, bounded agenda for follow-on conversations with analytics and senior leadership.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">05</div>
              <div className="theme-content">
                <h3>Cross-functional Buy-in</h3>
                <p><strong>AI personalization is not a one-time feature</strong> — cross-functional buy-in to treat it as a holistic experience that must be designed before it's built.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Reflection</div>
          <h2>What I'd do differently, and what the work left open</h2>
          <p>
            Knowing how we'd synthesize the output before walking in the room would have made the final artifact even stronger. Some tensions surfaced in the workshop, particularly around what "single deep understanding" meant to leadership, and they needed follow-up input we hadn't yet scheduled. Building that follow-up into the schedule earlier would have compressed the time between alignment and action.
          </p>
          <p>
            The session also revealed that the UX team held a unique piece of the puzzle: foundational research that could surface users the company didn't already know. Making that research visible earlier would have given the AI personalization system a more complete scope from the start.
          </p>
          <div className="nda-note">
            The workshop concluded shortly before my departure from the company. The framework and synthesis artifacts were handed off to the team as the primary input document for next steps with analytics and engineering, a complete deliverable, even if I didn't see it implemented.
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
