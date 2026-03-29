import { useEffect } from 'react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';

export default function CaseStudyProptech() {
  useEffect(() => {
    document.title = 'Designing an AI Product for a Real Estate Startup — Jesse Lee Despard';
  }, []);

  return (
    <div className="proptech-case-study-page">
      <style>{`
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
.proptech-case-study-page {
  --display: 'DM Sans', system-ui, sans-serif;
  --body:    'Lora', Georgia, serif;
  --wide: 1100px;
  --max:  860px;
}
html { scroll-behavior: smooth; }
.proptech-case-study-page { font-family: var(--body); background: var(--cream); color: var(--charcoal); font-size: 17px; line-height: 1.75; -webkit-font-smoothing: antialiased; min-height: 100vh; }

/* HERO */
.hero { background: var(--charcoal); padding: 80px 48px 72px; position: relative; overflow: hidden; }
.hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(to right, var(--teal), var(--gold), transparent); }
.hero-inner { max-width: var(--max); margin: 0 auto; }
.hero-tag { font-family: var(--display); display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; border: 1px solid rgba(212,168,67,0.4); padding: 5px 12px; border-radius: 3px; }
.hero h1 { font-family: var(--display); font-size: clamp(30px, 4.5vw, 46px); font-weight: 700; color: var(--white); line-height: 1.18; letter-spacing: -0.4px; margin-bottom: 14px; }
.hero-sub { font-family: var(--body); font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 580px; margin-bottom: 36px; font-style: italic; }
.meta-strip { display: flex; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; }
.meta-item { padding-right: 28px; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.1); }
.meta-item:last-child { border-right: none; margin-right: 0; }
.meta-label { font-family: var(--display); font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); font-weight: 700; margin-bottom: 3px; }
.meta-value { font-family: var(--display); font-size: 13px; color: rgba(255,255,255,0.82); font-weight: 500; }

/* LAYOUT */
.page-wrap { max-width: var(--max); margin: 0 auto; padding: 0 48px; }
.section { padding: 52px 0 0; }
.section-label { font-family: var(--display); font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--teal); margin-bottom: 10px; }
.section h2 { font-family: var(--display); font-size: clamp(20px, 2.8vw, 26px); font-weight: 700; color: var(--charcoal); line-height: 1.3; letter-spacing: -0.3px; margin-bottom: 16px; }
.section p { color: var(--dark-gray); margin-bottom: 16px; }
.section p:last-child { margin-bottom: 0; }
.divider { height: 1px; background: var(--light-gray); margin: 48px 0 0; }

/* NDA NOTE */
.nda-note { background: var(--cream); border-left: 3px solid var(--gold); border-radius: 0 6px 6px 0; padding: 13px 18px; margin-top: 18px; font-family: var(--display); font-size: 13.5px; color: var(--dark-gray); font-style: italic; }

/* GRID */
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .grid2, .proptech-case-study-page .grid3 { grid-template-columns: 1fr; } }

/* TEAL-BORDER CARD */
.card { background: var(--white); border: 1px solid var(--light-gray); border-left: 3px solid var(--teal); border-radius: 0 6px 6px 0; padding: 18px 20px; }
.card-title { font-family: var(--display); font-size: 14px; font-weight: 700; color: var(--charcoal); margin-bottom: 6px; }
.card-body { font-size: 14.5px; line-height: 1.7; color: var(--dark-gray); }

/* TRACK CARDS */
.track-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .track-grid { grid-template-columns: 1fr; } }
.track-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 6px; overflow: hidden; }
.track-header { padding: 14px 18px; }
.track-label { font-family: var(--display); font-size: 11px; font-weight: 700; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 3px; }
.track-title { font-family: var(--display); font-size: 15px; font-weight: 700; color: var(--white); }
.track-body { padding: 18px; }
.track-why { font-family: var(--display); font-size: 12px; font-weight: 700; color: var(--teal); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px; }
.track-text { font-size: 14px; line-height: 1.7; color: var(--dark-gray); margin-bottom: 12px; }
.track-list-item { font-size: 13.5px; line-height: 1.65; color: var(--dark-gray); padding: 6px 0 6px 14px; border-bottom: 1px solid var(--light-gray); position: relative; }
.track-list-item::before { content: '•'; position: absolute; left: 0; color: var(--teal); }
.track-list-item:last-child { border-bottom: none; }

/* SEGMENT CARDS */
.segment-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 6px; overflow: hidden; }
.segment-head { padding: 14px 18px; }
.segment-title { font-family: var(--display); font-size: 13px; font-weight: 700; color: var(--white); letter-spacing: 0.5px; }
.segment-count { font-family: var(--display); font-size: 11px; color: var(--gold); margin-top: 2px; }
.segment-body { padding: 16px 18px; }
.segment-quote { font-family: var(--body); font-size: 13.5px; line-height: 1.65; color: var(--teal); font-style: italic; margin-bottom: 14px; border-left: 2px solid var(--teal); padding-left: 12px; }
.segment-insight { font-family: var(--display); font-size: 11px; font-weight: 700; color: var(--teal); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
.insight-item { font-size: 13.5px; line-height: 1.65; color: var(--dark-gray); margin-bottom: 7px; padding-left: 12px; border-left: 2px solid var(--light-gray); }

/* THEME CARDS */
.theme-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .theme-grid { grid-template-columns: 1fr; } }
.theme-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 6px; padding: 20px; display: flex; gap: 14px; }
.theme-num { font-family: var(--display); font-size: 20px; font-weight: 700; color: var(--teal); min-width: 28px; }
.theme-content h3 { font-family: var(--display); font-size: 14px; font-weight: 700; color: var(--charcoal); margin-bottom: 7px; }
.theme-content p { font-size: 14px; line-height: 1.7; color: var(--dark-gray); margin: 0; }

/* PMF CALLOUT */
.pmf-callout { background: var(--charcoal); border-radius: 8px; padding: 36px 40px; display: flex; align-items: center; gap: 48px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .pmf-callout { flex-direction: column; gap: 20px; } }
.pmf-num { font-family: var(--display); font-size: 52px; font-weight: 700; color: var(--gold); line-height: 1; white-space: nowrap; }
.pmf-label { font-family: var(--display); font-size: 11px; color: var(--gray); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 7px; }
.pmf-text { font-family: var(--body); font-size: 16px; line-height: 1.75; color: rgba(250,247,242,0.85); }

/* STATS */
.stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .stat-row { grid-template-columns: 1fr 1fr; } }
.stat-card { background: var(--white); border: 1px solid var(--light-gray); border-top: 3px solid var(--teal); border-radius: 0 0 6px 6px; padding: 20px; text-align: center; }
.stat-num { font-family: var(--display); font-size: 28px; font-weight: 700; color: var(--teal); margin-bottom: 5px; }
.stat-num-gold { color: var(--gold); }
.stat-label { font-family: var(--display); font-size: 12.5px; color: var(--dark-gray); line-height: 1.4; }

/* IMPLICATIONS */
.impl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 20px; }
@media (max-width: 680px) { .proptech-case-study-page .impl-grid { grid-template-columns: 1fr; } }
.impl-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 6px; padding: 18px 20px; }
.impl-title { font-family: var(--display); font-size: 13.5px; font-weight: 700; color: var(--teal); margin-bottom: 7px; }
.impl-body { font-size: 14px; line-height: 1.7; color: var(--dark-gray); }

/* LESSONS */
.lessons { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
.lesson { background: var(--white); border: 1px solid var(--light-gray); border-radius: 6px; padding: 18px 20px; display: flex; gap: 16px; }
.lesson-num { font-family: var(--display); font-size: 13px; font-weight: 700; color: var(--teal); min-width: 22px; padding-top: 2px; }
.lesson-body { font-size: 15px; line-height: 1.75; color: var(--dark-gray); }
.lesson-body strong { color: var(--charcoal); }

/* PDF LINK */
.pdf-link { display: inline-flex; align-items: center; gap: 8px; font-family: var(--display); font-size: 13.5px; font-weight: 700; color: var(--teal); text-decoration: none; border: 1px solid var(--teal); padding: 10px 20px; border-radius: 6px; margin-top: 28px; transition: background 0.2s; }
.pdf-link:hover { background: var(--teal); color: var(--white); }

/* CTA STRIP — Charcoal text on Terra — AA 5.4:1 ✓ */
.cta-strip { background: var(--terra); padding: 48px; display: flex; justify-content: space-between; align-items: center; gap: 24px; margin-top: 72px; flex-wrap: wrap; box-sizing: border-box; }
.cta-strip-left h3 { font-family: var(--display); font-size: 20px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
.cta-strip-left a { font-family: var(--display); font-size: 14px; color: var(--charcoal); text-decoration: none; opacity: 0.7; }
.cta-btn { background: var(--charcoal); color: var(--white); font-family: var(--display); font-weight: 700; font-size: 14px; padding: 13px 28px; border-radius: 6px; text-decoration: none; white-space: nowrap; flex-shrink: 0; display: inline-block; border: none; cursor: pointer; }

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
          <h1>
            Designing an AI Product
            <br />
            for a Real Estate Startup
          </h1>
          <p className="hero-sub">
            An early-stage real estate technology startup had a bold idea: use a large third-party dataset to build a proprietary AI that matched home buyers, realtors, and loan officers. Research had to answer one question — would users actually trust and adopt it?
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
          <div className="section-label">The Context</div>
          <h2>Three user groups. One broken experience.</h2>
          <p>
            An early-stage real estate technology startup was building an all-in-one platform for the home-buying process — connecting loan officers, realtors, and home buyers in a way that was designed to be genuinely user-first.
          </p>
          <p>
            The company had access to a large third-party real estate dataset covering property characteristics, transaction types, demographic data, and financial profiles. The vision: use this data to power a proprietary AI that could intelligently match professionals and home buyers based on fit, not just availability.
          </p>
          <p>
            The research question was not whether the AI could be built. It was whether users would trust it — and what it would need to know about them to make recommendations that felt right.
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
              <div className="card-title">Validate the AI concept</div>
              <div className="card-body">Would users across all three segments actually use an AI to discover, evaluate, and maintain professional relationships?</div>
            </div>
            <div className="card">
              <div className="card-title">Understand relationship dynamics</div>
              <div className="card-body">How did each user group currently find, evaluate, and maintain relationships — and where did those processes break down?</div>
            </div>
            <div className="card">
              <div className="card-title">Define personalization requirements</div>
              <div className="card-body">What attributes mattered most when being matched? What would make an AI recommendation feel trustworthy rather than algorithmic?</div>
            </div>
            <div className="card">
              <div className="card-title">Inform algorithm design</div>
              <div className="card-body">What qualitative insights, combined with the third-party data, could inform the behavioral and preference logic of the matching algorithm?</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Methodology</div>
          <h2>A two-track mixed-methods approach.</h2>
          <p>
            Relationship-building is inherently emotional and contextual. No amount of transaction data would surface the motivations, fears, and trust signals that determine whether someone chooses to work with a professional. Qualitative research was essential — and so was the data.
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
                <div className="segment-count">10 participants · First-time and repeat buyers</div>
              </div>
              <div className="segment-body">
                <div className="segment-quote">"...it is helpful that you can do this for me so I can focus on the clients."</div>
                <div className="segment-insight">Key needs</div>
                <div className="insight-item">A loan officer genuinely working to get them the best deal</div>
                <div className="insight-item">A realtor who understands their needs — not pushing a transaction</div>
                <div className="insight-item">Professionals they know, like, and trust throughout an emotional process</div>
              </div>
            </div>
            <div className="segment-card">
              <div className="segment-head" style={{ background: 'var(--charcoal)' }}>
                <div className="segment-title">Realtors</div>
                <div className="segment-count">10 participants · Small and mid-sized agencies</div>
              </div>
              <div className="segment-body">
                <div className="segment-quote">"Finding a home is very difficult — a lot of time and energy is spent on each client."</div>
                <div className="segment-insight">Key needs</div>
                <div className="insight-item">Buyers who are certain they want to move — ready to commit</div>
                <div className="insight-item">Loan officers transparent about rates and focused on buyer interests</div>
                <div className="insight-item">Efficient use of time: finding the right client, not chasing uncertain ones</div>
              </div>
            </div>
            <div className="segment-card">
              <div className="segment-head" style={{ background: 'var(--terra)' }}>
                <div className="segment-title">Loan Officers</div>
                <div className="segment-count">10 participants · Small and medium businesses</div>
              </div>
              <div className="segment-body">
                <div className="segment-quote">"We would need to hire someone to do this — and that increases my costs."</div>
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
          <div className="section-label">Cross-Cutting Themes</div>
          <h2>What all three groups had in common.</h2>
          <p>
            Studying each segment separately, then looking for alignment across them, was the most valuable part of the research. The interdependencies revealed what the AI would need to optimize for — and what would make or break user trust.
          </p>
          <div className="theme-grid">
            <div className="theme-card">
              <div className="theme-num">01</div>
              <div className="theme-content">
                <h3>Trust is the primary matching criterion</h3>
                <p>Across all three segments, trust — not credentials, proximity, or price — was the decisive factor in choosing who to work with. An AI that surfaced trust signals would be most compelling.</p>
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
                <p>Users wanted both: a faster way to find the right match AND a match that felt personal. This validated the AI concept — if the algorithm was good, it could deliver both simultaneously.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-label">Outcome & Impact</div>
          <h2>Research that moved a business metric.</h2>
          <p>
            The research didn't just validate the AI concept — it directly shaped the product. I monitored the Sean Ellis product-market fit survey throughout the engagement, identified the product improvements needed, ran usability testing and card sorts to validate those improvements, communicated findings to the product team, and tracked the outcome as they were implemented.
          </p>

          <div className="pmf-callout">
            <div>
              <div className="pmf-label">PMF Score Growth</div>
              <div className="pmf-num">23% → 51%</div>
            </div>
            <p className="pmf-text">
              Product-market fit score grew by 128% over the course of the engagement — moving the company from below the PMF threshold to a position that supported acquisition conversations. Research identified the improvements. The product team implemented them. The score reflected the result.
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
            The qualitative findings mapped directly onto the algorithm's matching and personalization layer. Here's how the research informed what the product team built.
          </p>
          <div className="impl-grid">
            <div className="impl-card">
              <div className="impl-title">Weight trust signals in matching</div>
              <div className="impl-body">Communication history, referral source, and prior transaction outcomes should inform match scoring — not just proximity or availability.</div>
            </div>
            <div className="impl-card">
              <div className="impl-title">Surface emotional readiness indicators</div>
              <div className="impl-body">Financial qualification alone is insufficient. Signals of emotional readiness — commitment level, decisiveness — should factor into buyer-professional matching.</div>
            </div>
            <div className="impl-card">
              <div className="impl-title">Align interests explicitly in the UI</div>
              <div className="impl-body">The product must clearly communicate that the AI optimizes for mutually beneficial outcomes — not just speed or volume of matches.</div>
            </div>
            <div className="impl-card">
              <div className="impl-title">Personalize by transaction context</div>
              <div className="impl-body">First-time buyers need different professional attributes than experienced buyers. Loan type, home type, and timeline all affect what a good match looks like.</div>
            </div>
            <div className="impl-card">
              <div className="impl-title">Enable progressive relationship signals</div>
              <div className="impl-body">As users interact with the platform, the algorithm should learn from match acceptance, rejection, and transaction outcomes to improve over time.</div>
            </div>
            <div className="impl-card">
              <div className="impl-title">Design for the emotional journey</div>
              <div className="impl-body">Notifications, messaging tone, and match explanations should acknowledge the emotional weight of home buying — not just its transactional complexity.</div>
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
                <strong>Multi-segment research reveals hidden alignment.</strong> Studying all three user groups separately — then looking for cross-cutting themes — uncovered insights no single group could have provided. The interdependencies were the most valuable finding.
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
                <strong>Constraints can sharpen research focus.</strong> One quarter, limited funding, and 30 participants forced prioritization. The research answered the most critical question — user willingness to adopt — clearly and efficiently.
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
