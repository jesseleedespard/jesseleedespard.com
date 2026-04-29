import { Fragment, useEffect } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';
import { MarketingCtaStrip } from '../components/MarketingCtaStrip';

export default function CaseStudyProptech() {
  useEffect(() => {
    document.title =
      'Ethical AI Research That Doubled Product-Market Fit for a PropTech Startup · Jesse Lee Despard';
  }, []);

  return (
    <Fragment>
      <div className="proptech-case-study-page">
        <style>{`
.proptech-case-study-page,
.proptech-case-study-page *,
.proptech-case-study-page *::before,
.proptech-case-study-page *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.proptech-case-study-page {
  --display: 'DM Sans', system-ui, sans-serif;
  --body:    'Lora', Georgia, serif;
  --wide: 1100px;
  --max:  860px;
}
html { scroll-behavior: smooth; }
.proptech-case-study-page { font-family: var(--body); background: var(--cream); color: var(--charcoal); font-size: var(--font-size-base); line-height: 1.75; -webkit-font-smoothing: antialiased; min-height: 100vh; padding-bottom: var(--space-page-side); }

/* HERO */
.hero { background: var(--charcoal); padding: var(--space-hero) var(--space-page-side) 72px; position: relative; overflow: hidden; }
.hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(to right, var(--teal), var(--gold), transparent); }
.hero-inner { max-width: var(--max); margin: 0 auto; }
.hero-tag { font-family: var(--display); display: inline-block; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; border: 1px solid rgba(212,168,67,0.4); padding: 5px 12px; border-radius: var(--radius-sm); }
.hero h1 { font-family: var(--display); font-size: clamp(var(--font-size-2xl), 4.5vw, var(--font-size-3xl)); font-weight: 700; color: var(--white); line-height: 1.15; letter-spacing: -0.4px; margin-bottom: 14px; text-wrap: balance; }
.hero-sub { font-family: var(--body); font-size: var(--font-size-lg); color: var(--hero-subtitle-color); line-height: 1.6; margin-bottom: 36px; font-style: italic; }
.meta-strip { display: flex; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
.meta-item { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.1); }
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label { font-family: var(--display); font-size: var(--font-size-xs); letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 3px; }
.meta-value { font-family: var(--display); font-size: var(--font-size-sm); color: rgba(255,255,255,0.82); font-weight: 500; }

/* LAYOUT */
.page-wrap { max-width: calc(var(--max) + (var(--space-page-side) * 2)); margin: 0 auto; padding: 0 var(--space-page-side); }
.section { padding: var(--space-page-side) 0 0; }
.section-label { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal-dark); margin-bottom: 10px; }
.section h2 { font-family: var(--display); font-size: clamp(var(--font-size-lg), 2.8vw, var(--font-size-xl)); font-weight: 700; color: var(--charcoal); line-height: 1.3; letter-spacing: -0.3px; margin-bottom: 16px; }
.section p { color: var(--dark-gray); margin-bottom: 16px; }
.section p:last-child { margin-bottom: 0; }
.divider { height: 1px; background: var(--light-gray); margin: 48px 0 0; }

/* NDA NOTE — padding override (the * reset zeros out the @layer padding) */
.nda-note { padding: 13px 18px 13px 24px; }

/* NDA NOTE */
/* GRID */
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .grid2, .proptech-case-study-page .grid3 { grid-template-columns: 1fr; } }

/* TEAL-BORDER CARD */
.card { background: var(--white); border: 1px solid var(--light-gray); border-left: 3px solid var(--teal); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; padding: 18px 20px; display: flex; gap: 12px; align-items: flex-start; }
.card .theme-num { min-width: 28px; flex-shrink: 0; line-height: 1.3; }
.card-content { flex: 1; min-width: 0; }
.card-title { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--charcoal); margin-bottom: 6px; }
.card-body { font-size: var(--font-size-sm); line-height: 1.7; color: var(--dark-gray); }

/* TRACK CARDS */
.track-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .track-grid { grid-template-columns: 1fr; } }
.track-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); overflow: hidden; }
.track-header { padding: 14px 18px; }
.track-label { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 3px; }
.track-title { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--white); }
.track-body { padding: 18px; }
.track-why { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; color: var(--teal-dark); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px; }
.track-text { font-size: var(--font-size-sm); line-height: 1.7; color: var(--dark-gray); margin-bottom: 12px; }
.track-list-item { font-size: var(--font-size-sm); line-height: 1.65; color: var(--dark-gray); padding: 6px 0 6px 14px; border-bottom: 1px solid var(--light-gray); position: relative; }
.track-list-item::before { content: '•'; position: absolute; left: 0; color: var(--teal); }
.track-list-item:last-child { border-bottom: none; }

/* SEGMENT CARDS */
.segment-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); overflow: hidden; }
.segment-head { padding: 14px 18px; }
.segment-title { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--white); letter-spacing: 0.5px; }
.segment-count { font-family: var(--display); font-size: var(--font-size-sm); color: var(--white) !important; margin-top: 2px; }
.segment-breakdown { font-family: var(--display); font-size: var(--font-size-sm); color: var(--white) !important; margin-top: 8px; line-height: 1.5; }
.segment-body { padding: 16px 18px; }
.segment-quote { font-family: var(--body); font-size: var(--font-size-sm); line-height: 1.65; color: var(--teal-dark); font-style: italic; margin-bottom: 14px; border-left: 2px solid var(--teal); padding-left: 12px; }
.segment-insight { font-family: var(--display); font-size: var(--font-size-xs); font-weight: 700; color: var(--teal-dark); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
.insight-item { font-size: var(--font-size-sm); line-height: 1.65; color: var(--dark-gray); margin-bottom: 7px; padding: 6px 0 6px 20px; position: relative; }
.insight-item::before { content: '•'; position: absolute; left: 6px; color: var(--teal); font-weight: 700; }

/* THEME CARDS */
.theme-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .theme-grid { grid-template-columns: 1fr; } }
.theme-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); padding: 20px; display: flex; gap: 14px; }
.theme-num { font-family: var(--display); font-size: var(--font-size-lg); font-weight: 700; color: var(--teal-dark); min-width: 28px; }
.theme-content h3 { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--charcoal); margin-bottom: 7px; }
.theme-content p { font-size: var(--font-size-sm); line-height: 1.7; color: var(--dark-gray); margin: 0; }

/* PMF CALLOUT */
.pmf-callout { background: var(--charcoal); border-radius: var(--radius-md); padding: 36px 40px; display: flex; align-items: center; gap: 48px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .pmf-callout { flex-direction: column; gap: 20px; } }
.pmf-num { font-family: var(--display); font-size: var(--font-size-3xl); font-weight: 700; color: var(--gold); line-height: 1; white-space: nowrap; }
.pmf-label { font-family: var(--display); font-size: var(--font-size-xs); color: var(--light-gray) !important; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 7px; }
.pmf-text { font-family: var(--body); font-size: var(--font-size-base); line-height: 1.75; color: var(--cream) !important; }

/* STATS */
.stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .stat-row { grid-template-columns: 1fr 1fr; } }
.stat-card { background: var(--white); border: 1px solid var(--light-gray); border-top: 3px solid var(--teal); border-radius: 0 0 var(--radius-sm) var(--radius-sm); padding: 20px; text-align: center; }
.stat-num { font-family: var(--display); font-size: var(--font-size-2xl); font-weight: 700; color: var(--teal-dark); margin-bottom: 5px; }
.stat-num-gold { color: var(--gold); }
.stat-label { font-family: var(--display); font-size: var(--font-size-xs); color: var(--dark-gray); line-height: 1.4; }

/* IMPLICATIONS */
.impl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .impl-grid { grid-template-columns: 1fr; } }
.impl-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); padding: 18px 20px; display: flex; gap: 14px; align-items: flex-start; }
.impl-title { font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--teal-dark); margin-bottom: 7px; }
.impl-card-content { flex: 1; min-width: 0; }
.impl-body { font-size: var(--font-size-sm); line-height: 1.7; color: var(--dark-gray); }

/* LESSONS */
.lessons { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
.lesson { background: var(--white); border: 1px solid var(--light-gray); border-radius: var(--radius-sm); padding: 18px 20px; display: flex; gap: 16px; }
.lesson-num { font-family: var(--display); font-size: var(--font-size-2xl); font-weight: 700; color: var(--teal-dark); min-width: 36px; line-height: 1.1; padding-top: 0; }
.lesson-body { font-size: var(--font-size-sm); line-height: 1.75; color: var(--dark-gray); }
.lesson-body strong { color: var(--charcoal); }

/* PDF LINK */
.pdf-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--display); font-size: var(--font-size-sm); font-weight: 700; color: var(--teal-dark); text-decoration: none; border: 1px solid var(--teal); padding: 10px 20px; border-radius: var(--radius-sm); margin-top: 28px; transition: background 0.2s; }
.pdf-link:hover { background: var(--teal); color: var(--white); }

@media (max-width: 768px) {
  .proptech-case-study-page .meta-strip { flex-direction: column !important; flex-wrap: nowrap !important; align-items: stretch !important; gap: 0 !important; padding-top: 24px !important; border-top: 1px solid rgba(255,255,255,0.12) !important; }
  .proptech-case-study-page .meta-item { display: block !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.1) !important; padding: 0 0 16px 0 !important; margin: 0 0 16px 0 !important; width: 100% !important; text-align: center !important; }
  .proptech-case-study-page .meta-item:last-child { border-bottom: none !important; padding-bottom: 0 !important; margin-bottom: 0 !important; }
  .proptech-case-study-page .hero { padding: var(--space-hero-mobile) var(--space-page-side-mobile) 40px !important; }
  .proptech-case-study-page .hero h1 { font-size: clamp(var(--font-size-xl), 6vw, var(--font-size-2xl)) !important; line-height: 1.2 !important; }
  .proptech-case-study-page .hero-sub { font-size: var(--font-size-base) !important; max-width: 100% !important; }
}

@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
.proptech-case-study-page .hero-inner > * { animation: fadeUp 0.55s ease both; }
.proptech-case-study-page .hero-inner > *:nth-child(1) { animation-delay: 0.05s; }
.proptech-case-study-page .hero-inner > *:nth-child(2) { animation-delay: 0.12s; }
.proptech-case-study-page .hero-inner > *:nth-child(3) { animation-delay: 0.20s; }
.proptech-case-study-page .hero-inner > *:nth-child(4) { animation-delay: 0.28s; }
`}</style>

        <header className="hero">
        <div className="hero-inner">
          <span className="hero-tag">Case Study · PropTech · AI Product Design</span>
          <h1>Ethical AI Research That Doubled Product-Market Fit for a PropTech Startup</h1>
          <p className="hero-sub">
            An early-stage real estate technology startup had a bold idea: use a large third-party dataset to build a proprietary AI that matched home buyers, realtors, and loan officers. I led the end-to-end research engagement across UX, Data Science, Product, and Engineering that validated the concept, shaped the algorithm, and drove the product improvements that made the company acquirable.
          </p>
          <div className="meta-strip">
            <div className="meta-item">
              <div className="meta-label">Role</div>
              <div className="meta-value">UX Researcher</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Method</div>
              <div className="meta-value">Interviews + Data Analysis</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Participants</div>
              <div className="meta-value">30 across 3 segments</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Timeline</div>
              <div className="meta-value">One quarter</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">PMF Growth</div>
              <div className="meta-value">23% → 51%</div>
            </div>
          </div>
        </div>
      </header>

      <div className="page-wrap">
        <div className="section">
          <div className="section-label">The Context and Problem</div>
          <h2>Three user groups. One broken experience.</h2>
          <p>
            An early-stage real estate technology startup was building an all-in-one platform for the home-buying process, connecting loan officers, realtors, and home buyers in a way that was designed to be genuinely user-first.
          </p>
          <p>
            The company had access to a large third-party real estate dataset covering property characteristics, transaction types, demographic data, and financial profiles. The vision: use this data to power a proprietary AI that could intelligently match professionals and home buyers based on fit, not just availability.
          </p>
          <p>
            The research question was not whether the AI could be built. It was whether users would trust it and what it would need to know about them to make recommendations that felt right.
          </p>
          <p>
            I led this engagement from research design through launch, collaborating directly with the Data Science team to ensure qualitative findings translated into algorithm logic, and with Product and Engineering to monitor behavioral metrics after launch.
          </p>
          <div className="nda-note">
            This case study is subject to an NDA. Product screenshots and proprietary platform details are not shown. The research process, methodology, and outcomes are described with permission.
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Research Goal</div>
          <h2>Four questions that had to be answered before a line of code was written.</h2>
          <div className="grid2">
            <div className="card">
              <div className="theme-num">01</div>
              <div className="card-content">
                <div className="card-title">Validate the AI concept</div>
                <div className="card-body">Would users across all three segments actually use an AI to discover, evaluate, and maintain professional relationships?</div>
              </div>
            </div>
            <div className="card">
              <div className="theme-num">02</div>
              <div className="card-content">
                <div className="card-title">Understand relationship dynamics</div>
                <div className="card-body">How did each user group currently find, evaluate, and maintain relationships, and where did those processes break down?</div>
              </div>
            </div>
            <div className="card">
              <div className="theme-num">03</div>
              <div className="card-content">
                <div className="card-title">Define personalization requirements</div>
                <div className="card-body">What attributes mattered most when being matched? What would make an AI recommendation feel trustworthy rather than algorithmic?</div>
              </div>
            </div>
            <div className="card">
              <div className="theme-num">04</div>
              <div className="card-content">
                <div className="card-title">Inform algorithm design</div>
                <div className="card-body">What qualitative insights, combined with the third-party data, could inform the behavioral and preference logic of the matching algorithm?</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Methodology</div>
          <h2>A two-track mixed-methods approach.</h2>
          <p>
            Relationship-building is inherently emotional and contextual. No amount of transaction data would surface the motivations, fears, and trust signals that determine whether someone chooses to work with a professional. Qualitative research was essential, and the quantitative data mattered just as much.
          </p>
          <p>
            Because this was an AI product, the Data Science team was a critical collaborator from the start. Qualitative findings could not stay trapped in a research report; they needed to be translated into matching logic. I worked directly with Data Science to bridge the gap between what users told us and what the algorithm needed to weight.
          </p>
          <div className="track-grid">
            <div className="track-card">
              <div className="track-header" style={{ background: 'var(--teal)' }}>
                <div className="track-label">Track 1</div>
                <div className="track-title">Qualitative Interviews</div>
              </div>
              <div className="track-body">
                <div className="track-why">Why qualitative?</div>
                <div className="track-text">Structured interviews surfaced the motivations, fears, and trust signals that quantitative data alone could not reveal.</div>
                <div className="track-list-item">30 one-on-one interviews across all three user segments</div>
                <div className="track-list-item">Card sort component to rank relationship attributes</div>
                <div className="track-list-item">Transcripts analyzed by theme and key concept</div>
                <div className="track-list-item">Conducted within one quarter under limited funding</div>
              </div>
            </div>
            <div className="track-card">
              <div className="track-header" style={{ background: 'var(--charcoal)' }}>
                <div className="track-label">Track 2</div>
                <div className="track-title">Third-Party Data Analysis</div>
              </div>
              <div className="track-body">
                <div className="track-why">Why data analysis?</div>
                <div className="track-text">Analyzing patterns in successful transactions revealed objective match signals to complement what users self-reported.</div>
                <div className="track-list-item">Property characteristics and home types</div>
                <div className="track-list-item">Transaction types (loan, cash, refinance)</div>
                <div className="track-list-item">Demographic profiles of all three user groups</div>
                <div className="track-list-item">Patterns in successful professional pairings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Participants</div>
          <h2>Three distinct user groups. One interconnected experience.</h2>
          <div className="grid3">
            <div className="segment-card">
              <div className="segment-head" style={{ background: 'var(--teal)' }}>
                <div className="segment-title">Home Buyers</div>
                <div className="segment-count">10 participants</div>
                <div className="segment-breakdown">Mix of first-time and repeat buyers</div>
              </div>
              <div className="segment-body">
                <div className="segment-quote">"...it is helpful that you can do this for me so I can focus on the patients."</div>
                <div className="segment-insight">Key needs</div>
                <div className="insight-item">A loan officer genuinely working to get them the best deal</div>
                <div className="insight-item">A realtor who understands their needs instead of pushing a transaction</div>
                <div className="insight-item">Professionals they know, like, and trust throughout an emotional process</div>
              </div>
            </div>
            <div className="segment-card">
              <div className="segment-head" style={{ background: 'var(--charcoal)' }}>
                <div className="segment-title">Realtors</div>
                <div className="segment-count">10 participants</div>
                <div className="segment-breakdown">
                  7 in small agencies
                  <br />
                  3 in mid-sized agencies
                </div>
              </div>
              <div className="segment-body">
                <div className="segment-quote">"Finding a home is very difficult, and a lot of time and energy is spent on each client."</div>
                <div className="segment-insight">Key needs</div>
                <div className="insight-item">Buyers who are certain they want to move and ready to commit</div>
                <div className="insight-item">Loan officers transparent about rates and focused on buyer interests</div>
                <div className="insight-item">Efficient use of time: finding the right client, not chasing uncertain ones</div>
              </div>
            </div>
            <div className="segment-card">
              <div className="segment-head" style={{ background: 'var(--terra)' }}>
                <div className="segment-title">Loan Officers</div>
                <div className="segment-count">10 participants</div>
                <div className="segment-breakdown">
                  6 in small businesses (fewer than 15 loan officers)
                  <br />
                  4 in medium businesses (16 to 50 loan officers)
                </div>
              </div>
              <div className="segment-body">
                <div className="segment-quote">"We would need to hire someone to do this, and that increases my costs."</div>
                <div className="segment-insight">Key needs</div>
                <div className="insight-item">Home buyers who are financially vetted and realistically able to purchase</div>
                <div className="insight-item">Realtors who provide timely updates on buyer status</div>
                <div className="insight-item">Transparent communication about rates that serve the buyer's interest</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Key Findings</div>
          <h2>What all three groups had in common.</h2>
          <p>
            Studying each segment separately, then looking for alignment across them, was the most valuable part of the research. The interdependencies revealed what the AI would need to optimize for and what would make or break user trust.
          </p>
          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-num">01</div>
              <div className="theme-content">
                <h3>Trust is the primary matching criterion</h3>
                <p>Across all three segments, trust outweighed credentials, proximity, and price as the decisive factor in choosing who to work with. An AI that surfaced trust signals would be most compelling.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">02</div>
              <div className="theme-content">
                <h3>Home buying is emotional, not just transactional</h3>
                <p>Participants universally described the experience through emotional language: anxiety, excitement, overwhelm. AI recommendations needed to account for emotional readiness, not just financial qualification.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">03</div>
              <div className="theme-content">
                <h3>All three groups want advocates, not salespeople</h3>
                <p>Each segment expressed distrust of professionals who appeared to prioritize their own outcomes. AI match quality would hinge on surfacing alignment of interests between parties.</p>
              </div>
            </div>
            <div className="theme-card">
              <div className="theme-num">04</div>
              <div className="theme-content">
                <h3>Efficiency and personalization are not in tension</h3>
                <p>Users wanted both: a faster way to find the right match AND a match that felt personal. This validated the AI concept, because a strong algorithm could deliver both at once.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Outcome & Impact</div>
          <h2>Research that made a company acquirable.</h2>
          <p>This was my proudest research study. Not because of what the research uncovered, but because of what happened after.</p>
          <p>
            After the research validated the AI concept and directly shaped the algorithm&apos;s matching logic, the product launched. I stayed engaged post-launch, monitoring behavioral metrics alongside the Product team to track whether the research-informed improvements were actually moving the needle.
          </p>
          <p>They were.</p>
          <p>
            The Sean Ellis product-market fit score, which I had been tracking throughout the engagement, grew from 23% to 51%. That&apos;s a 128% increase, crossing the threshold that signals genuine product-market fit. The company used that score as part of their positioning in acquisition conversations.
          </p>
          <p>The startup was acquired.</p>
          <p>
            I was a UX Researcher on this project. What this study represents to me is leading a cross-functional engagement that spanned UX Research, Data Science, Product, and Engineering and produced an outcome that determined the company&apos;s future.
          </p>

          <div className="pmf-callout">
            <div>
              <div className="pmf-label">PMF Score Growth</div>
              <div className="pmf-num">23% → 51%</div>
            </div>
            <p className="pmf-text">
              Product-market fit score grew from 23% to 51%, a 128% increase that crossed the PMF threshold and positioned the company for acquisition. The startup was acquired.
            </p>
          </div>

          <div className="stat-row">
            <div className="stat-card">
              <div className="stat-num">30</div>
              <div className="stat-label">Participants across 3 user segments</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2</div>
              <div className="stat-label">Research tracks: qualitative + data analysis</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">128%</div>
              <div className="stat-label">Growth in product-market fit score</div>
            </div>
            <div className="stat-card">
              <div className="stat-num stat-num-gold">AI ✓</div>
              <div className="stat-label">Matching algorithm validated and shipped</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Algorithm Design Implications</div>
          <h2>Translating research into product logic.</h2>
          <p>
            The qualitative findings mapped directly onto the algorithm&apos;s matching and personalization layer. Here&apos;s how the research informed what the product team built:
          </p>
          <div className="impl-grid">
            <div className="impl-card">
              <div className="theme-num">01</div>
              <div className="impl-card-content">
                <div className="impl-title">Weight trust signals in matching</div>
                <div className="impl-body">Communication history, referral source, and prior transaction outcomes should inform match scoring in addition to proximity and availability.</div>
              </div>
            </div>
            <div className="impl-card">
              <div className="theme-num">02</div>
              <div className="impl-card-content">
                <div className="impl-title">Surface emotional readiness indicators</div>
                <div className="impl-body">Financial qualification alone is insufficient. Signals of emotional readiness, such as commitment level and decisiveness, should factor into buyer-professional matching.</div>
              </div>
            </div>
            <div className="impl-card">
              <div className="theme-num">03</div>
              <div className="impl-card-content">
                <div className="impl-title">Align interests explicitly in the UI</div>
                <div className="impl-body">The product must clearly communicate that the AI optimizes for mutually beneficial outcomes rather than only speed or volume of matches.</div>
              </div>
            </div>
            <div className="impl-card">
              <div className="theme-num">04</div>
              <div className="impl-card-content">
                <div className="impl-title">Personalize by transaction context</div>
                <div className="impl-body">First-time buyers need different professional attributes than experienced buyers. Loan type, home type, and timeline all affect what a good match looks like.</div>
              </div>
            </div>
            <div className="impl-card">
              <div className="theme-num">05</div>
              <div className="impl-card-content">
                <div className="impl-title">Enable progressive relationship signals</div>
                <div className="impl-body">As users interact with the platform, the algorithm should learn from match acceptance, rejection, and transaction outcomes to improve over time.</div>
              </div>
            </div>
            <div className="impl-card">
              <div className="theme-num">06</div>
              <div className="impl-card-content">
                <div className="impl-title">Design for the emotional journey</div>
                <div className="impl-body">Notifications, messaging tone, and match explanations should acknowledge the emotional weight of home buying alongside its transactional complexity.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Lessons Learned</div>
          <h2>What this study reinforced.</h2>
          <div className="lessons">
            <div className="lesson">
              <div className="lesson-num">01</div>
              <div className="lesson-body">
                <strong>Qualitative research is essential for AI product design.</strong> No amount of transaction data would have surfaced the emotional dynamics of home buying. The human insight layer is what transforms a matching algorithm into a product people trust.
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-num">02</div>
              <div className="lesson-body">
                <strong>Multi-segment research reveals hidden alignment.</strong> Studying all three user groups separately and then looking for cross-cutting themes uncovered insights no single group could have provided. The interdependencies were the most valuable finding.
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-num">03</div>
              <div className="lesson-body">
                <strong>Research scope should match product ambition.</strong> Building a proprietary AI required more than a standard usability study. Pairing qualitative interviews with third-party data analysis gave the product team a defensible, multi-dimensional foundation.
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-num">04</div>
              <div className="lesson-body">
                <strong>Constraints can sharpen research focus.</strong> One quarter, limited funding, and 30 participants forced prioritization. The research answered the most critical question, user willingness to adopt, clearly and efficiently.
              </div>
            </div>
            <div className="lesson">
              <div className="lesson-num">05</div>
              <div className="lesson-body">
                <strong>Cross-functional leadership amplifies research impact.</strong> Working directly with Data Science, Product, and Engineering instead of only handing off a report is what transformed findings into shipped product. Research only drives acquisition outcomes when it stays in the room through launch.
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
