import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Footer } from '../components/Footer';

type ArticleStatus = 'live' | 'coming-soon';

export interface WritingArticle {
  id: string;
  badge: string;
  scene?: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date?: string;
  readTime: string;
  link?: string;
  status?: ArticleStatus;
  accentColor: string;
}

export interface WritingPublication {
  id: string;
  type: 'publication' | 'contribution';
  title: string;
  apa: string;
  abstract: string;
  pdfPath: string;
  contributionNote?: string;
}

const PUBLICATIONS: WritingPublication[] = [
  {
    id: 'pub-1',
    type: 'publication',
    title:
      "Low-Wage Precarious Workers' Sociotechnical Practices Working Towards Addressing Wage Theft",
    apa: "Dombrowski, L., Alvarado Garcia, A., & Despard, J. (2017). Low-wage precarious workers' sociotechnical practices working towards addressing wage theft. In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (pp. 4585–4598). ACM. https://doi.org/10.1145/3025453.3025633",
    abstract:
      "Nearly 40 million workers in the United States, a third of the working population, are low-wage, meaning they make less than $11.65 per hour. These workers face the pervasive and detrimental challenge of wage violations, also known as wage theft, which is any illegal activity by an employer that denies benefits or wages to employees. We interviewed 24 low-wage workers who experienced wage theft and sought justice about their work practices, challenges, and information technology usage. Based on these interviews, we identify three key sociotechnical practices these workers engaged in to address their wage theft: 1) identifying wage and payment discrepancies; 2) tracking and documenting work; and 3) pursuing wage claims. Seeking to leverage HCI research to interrupt uneven social, economic, and information relations in the low-wage workplace, we ultimately reflect on the possibility and limits of several key design recommendations.",
    pdfPath:
      "/Low-Wage Precarious Workers' Sociotechnical Practices Working Towards Addressing Wage_Theft.pdf",
  },
  {
    id: 'pub-2',
    type: 'publication',
    title:
      'Challenges, Feedback & Notifications: Empirical Explorations to Inform the Design of Interfaces to Motivate and Encourage Long-Term Personal Informatics Use',
    apa: 'Voida, S., Jia, Y., Karanam, Y., Chambers, A., Dara, J., Alderhami, A., Bodke, K., Shrikhande, D., & Despard, J. (2015). Challenges, feedback & notifications: Empirical explorations to inform the design of interfaces to motivate and encourage long-term personal informatics use. UbiComp 2015 Workshop on New Frontiers of Quantified Self. ACM.',
    abstract:
      "In the IDIO research group, we are currently carrying out a number of empirical research studies to inform the design of future personal informatics (PI) systems. These studies include projects investigating the use of gamification elements to encourage engagement based on a user's personality type, varying levels of feedback during day-to-day PI use, and categorizing and evaluating the suitability of dispatching PI notifications across a wide variety of worn devices and using different feedback modalities. We provide an overview of these projects and suggest ways that our early results might contribute to the discussion of next-generation PI systems at the UbiComp 2015 workshop.",
    pdfPath: '/Ubicomp.pdf',
  },
];

const CONTRIBUTIONS: WritingPublication[] = [
  {
    id: 'contrib-1',
    type: 'contribution',
    title:
      'Media, Meaning, and Context Loss in Ephemeral Communication Platforms: A Qualitative Investigation of Snapchat',
    apa: 'Cavalcanti, L. H. C., Pinto, A., Brubaker, J. R., & Dombrowski, L. S. (2017). Media, meaning, and context loss in ephemeral communication platforms: A qualitative investigation of Snapchat. In Proceedings of the 2017 ACM Conference on Computer Supported Cooperative Work & Social Computing (pp. 1934–1945). ACM. https://doi.org/10.1145/2998181.2998266',
    abstract:
      "Most social media platforms are persistent in nature, enabling users to re-visit content at their discretion. Platforms with design features that support ephemeral communications, such as Snapchat, have become increasingly popular. During the course of our empirical study, we interviewed 15 Snapchat users about their experiences and practices. Our data reveal that Snapchat users experienced different types of loss, including media, meaning, and context loss, and developed workarounds to deal with those losses, including preemptive action and collaborative saving practices. Our findings revealed a conflict between the user's expectation of the affordance the ephemeral platforms would provide, and the actions user's followed.",
    pdfPath: '/Cavalcanti_2017_media_Snapchat.pdf',
    contributionNote: 'Contribution: Recruited participants and conducted initial interviews.',
  },
];

const ARTICLES: WritingArticle[] = [
  {
    id: 'ethics-1',
    badge: 'Analysis',
    scene: 'Scene 2 · The Building',
    title: 'Systemic Analysis for Scene 2: The Building',
    subtitle: 'Innovation theater, competitive architecture, and the cost of speaking truth',
    excerpt:
      'When honesty requires internal negotiation — weighing what is safe, what it will cost, how much to say and how — a system has already revealed something important about itself.',
    readTime: '~8 min read',
    status: 'coming-soon',
    accentColor: 'var(--terra)',
  },
  {
    id: 'ethics-2',
    badge: 'Parable',
    scene: 'Scene 2 · The Building',
    title: 'When the System Introduces Itself',
    subtitle: 'What Jordan learned on the first day',
    excerpt:
      "Vale's energy shifted. Shoulders squared and voice lowering slightly, as if they were stepping into protected territory. Jordan recognized that pause — the internal math of how much is safe to say, and to whom, and at what cost.",
    readTime: '~5 min read',
    link: 'https://medium.com/@jesseleedespard/when-the-system-introduces-itself-596d5ffbca42',
    status: 'live',
    accentColor: 'var(--gold)',
  },
  {
    id: 'ethics-3',
    badge: 'Parable + Analysis',
    scene: 'Scene 1 · The Spark',
    title: 'Scene 1: The Spark',
    subtitle: 'What Fragmentation Reveals Before the Work Begins',
    excerpt:
      'Jordan first met Vale during one of the interviews for a leadership position. Vale named the relational architecture of a struggling team as the primary definition of success — and in doing so named something most organizations expect but never formally acknowledge.',
    date: 'Mar 6, 2026',
    readTime: '6 min read',
    link: 'https://medium.com/@jesseleedespard/scene-1-the-spark-033bdcf49182',
    status: 'live',
    accentColor: 'var(--gold)',
  },
  {
    id: 'ethics-4',
    badge: 'Essay',
    title: 'Ethical Leadership Is Not Just a Soft Skill',
    subtitle: 'Why ethical management shows up in the quiet places — not the policies',
    excerpt:
      "Ethical management isn't about being nice. It isn't about having the right values written on a website. It shows up when someone on your team says something feels off, and you decide whether curiosity or defensiveness comes first.",
    date: 'Feb 8, 2026',
    readTime: '3 min read',
    link: 'https://medium.com/@jesseleedespard/ethical-leadership-is-not-just-a-soft-skill-6afa2c3a5c2f',
    status: 'live',
    accentColor: 'var(--teal)',
  },
];

function ethicsBadgePillStyle(badge: string): CSSProperties {
  const base: CSSProperties = {
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 700,
    fontSize: 'var(--font-size-xs)',
    letterSpacing: '0.02em',
    padding: '4px 10px',
    borderRadius: '4px',
    display: 'inline-block',
  };
  if (badge === 'Essay') {
    return {
      ...base,
      color: 'var(--teal)',
      backgroundColor: 'color-mix(in srgb, var(--teal) 12%, var(--white))',
    };
  }
  if (badge === 'Analysis') {
    return {
      ...base,
      color: 'var(--terra)',
      backgroundColor: 'color-mix(in srgb, var(--terra) 12%, var(--white))',
    };
  }
  if (badge === 'Parable' || badge === 'Parable + Analysis') {
    return {
      ...base,
      color: 'var(--gold)',
      backgroundColor: 'color-mix(in srgb, var(--gold) 12%, var(--white))',
    };
  }
  return {
    ...base,
    color: 'var(--teal-dark)',
    backgroundColor: 'color-mix(in srgb, var(--teal-dark) 10%, var(--white))',
  };
}

export default function Writing() {
  const [activeTab, setActiveTab] = useState<'academic' | 'ethics'>('academic');

  return (
    <div className="writing-page min-h-screen" style={{ backgroundColor: 'var(--white)' }}>
      <style>{`
        .writing-page {
          --writing-tab-inactive: color-mix(in srgb, var(--white) 60%, transparent);
        }

        .writing-hero-section {
          background-color: var(--charcoal);
          padding: 100px 48px 0;
        }

        .writing-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 52px;
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .writing-hero-subtitle {
          font-family: 'Lora', serif;
          font-weight: 400;
          font-style: italic;
          font-size: var(--font-size-lg);
          color: color-mix(in srgb, var(--white) 65%, transparent);
          line-height: 1.6;
          padding-bottom: 60px;
        }

        .writing-tab-section {
          background-color: var(--charcoal);
          border-bottom: 1px solid var(--dark-gray);
          padding: 0 48px;
        }

        .writing-section-padding {
          padding: 80px 48px;
        }

        .writing-section-label-teal {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: var(--font-size-xs);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 20px;
        }

        .writing-pub-card {
          background-color: var(--white);
          border: 1px solid var(--light-gray);
          border-radius: 8px;
          border-left: 4px solid var(--teal);
          padding: 32px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .writing-pub-card--contribution {
          border-left-color: var(--gold);
        }

        .writing-pdf-btn {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: var(--font-size-xs);
          color: var(--teal-dark);
          background: transparent;
          border: 2px solid var(--teal-dark);
          border-radius: 6px;
          padding: 10px 18px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .writing-pub-card-cta {
          margin-top: auto;
        }

        .writing-pdf-btn:hover {
          background-color: var(--teal-dark);
          color: var(--white);
        }

        .writing-pdf-btn:focus-visible {
          outline: 2px solid var(--teal-dark);
          outline-offset: 2px;
        }

        .writing-intro-muted {
          font-family: 'DM Sans', sans-serif;
          font-size: var(--font-size-sm);
          color: var(--gray);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .writing-contrib-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-style: italic;
          color: var(--terra);
          margin-bottom: 12px;
        }

        /* Ethics tab: series framing copy as body prose (not a card). */
        .writing-ethics-series-intro {
          font-family: 'Lora', serif;
          font-size: 17px;
          color: var(--dark-gray);
          line-height: 1.65;
          margin: 0 0 32px;
        }

        .writing-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 24px 32px;
          align-items: center;
          margin-top: 0;
        }

        .writing-legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .writing-legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .writing-legend-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--dark-gray);
        }

        .writing-legend-label--parable {
          color: var(--dark-gray);
        }

        .writing-article-card {
          background-color: var(--white);
          border: 1px solid var(--light-gray);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .writing-article-card--live:hover {
          border-color: var(--teal-dark);
          box-shadow: 0 4px 12px color-mix(in srgb, var(--teal) 12%, transparent);
        }

        .writing-article-card--soon {
          opacity: 0.55;
          cursor: default;
        }

        .writing-article-card--soon:hover {
          border-color: var(--light-gray);
          box-shadow: none;
        }

        .writing-article-accent {
          height: 4px;
        }

        .writing-medium-strip {
          background-color: var(--white);
          border: 1px solid var(--light-gray);
          border-radius: 8px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .writing-medium-strip p {
          font-family: 'Lora', serif;
          font-size: var(--font-size-base);
          color: var(--dark-gray);
          margin: 0;
          line-height: 1.5;
        }

        .writing-medium-follow {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: var(--font-size-sm);
          color: var(--teal);
          text-decoration: underline;
          text-underline-offset: 0.2em;
          white-space: nowrap;
        }

        .writing-medium-follow:hover {
          color: var(--teal-dark);
        }

        .writing-medium-follow:focus-visible {
          outline: 2px solid var(--teal-dark);
          outline-offset: 2px;
        }

        .writing-card-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: var(--font-size-sm);
          color: var(--teal-dark);
          text-decoration: none;
          white-space: nowrap;
        }

        .writing-card-link:hover {
          color: var(--charcoal);
          text-decoration: underline;
        }

        .writing-card-link:focus-visible {
          outline: 2px solid var(--teal-dark);
          outline-offset: 2px;
          border-radius: 2px;
        }

        .writing-pub-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 900px) {
          .writing-pub-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .writing-articles-stack {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .writing-hero-section {
            padding: 56px 24px 0;
          }

          .writing-hero-title {
            font-size: var(--font-size-2xl);
          }

          .writing-hero-subtitle {
            font-size: var(--font-size-base);
            padding-bottom: 40px;
          }

          .writing-tab-section {
            padding: 0 24px;
          }

          .writing-section-padding {
            padding: 48px 24px;
          }
        }
      `}</style>

      <section className="writing-hero-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              color: 'var(--gold)',
              marginBottom: '20px',
              letterSpacing: '1.5px',
            }}
          >
            WRITING
          </div>
          <h1 className="writing-hero-title">Papers. Parables. Systems.</h1>
          <p className="writing-hero-subtitle">
            Writing has been an influential part of my life. Being able to put my thoughts into different writing styles has
            helped me get clarity throughout my career.
          </p>
        </div>
      </section>

      <section className="writing-tab-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 0, justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => setActiveTab('academic')}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: activeTab === 'academic' ? 700 : 500,
                fontSize: '15px',
                color: activeTab === 'academic' ? 'var(--white)' : 'var(--writing-tab-inactive)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'academic' ? '3px solid var(--teal-dark)' : '3px solid transparent',
                padding: '16px 24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Academic Work
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xs)',
                  color: activeTab === 'academic' ? 'var(--white)' : 'var(--charcoal)',
                  backgroundColor: activeTab === 'academic' ? 'var(--teal-dark)' : 'var(--gray)',
                  borderRadius: '10px',
                  padding: '2px 8px',
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                3
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ethics')}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: activeTab === 'ethics' ? 700 : 500,
                fontSize: '15px',
                color: activeTab === 'ethics' ? 'var(--white)' : 'var(--writing-tab-inactive)',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === 'ethics' ? '3px solid var(--teal-dark)' : '3px solid transparent',
                padding: '16px 24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Ethics Arc
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-xs)',
                  color: activeTab === 'ethics' ? 'var(--white)' : 'var(--charcoal)',
                  backgroundColor: activeTab === 'ethics' ? 'var(--teal-dark)' : 'var(--gray)',
                  borderRadius: '10px',
                  padding: '2px 8px',
                  minWidth: '20px',
                  textAlign: 'center',
                }}
              >
                4
              </span>
            </button>
          </div>
        </div>
      </section>

      {activeTab === 'academic' && (
        <section className="writing-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="writing-section-label-teal">Publications</div>
            <div className="writing-pub-grid" style={{ marginBottom: '56px' }}>
              {PUBLICATIONS.map((pub) => (
                <article key={pub.id} className="writing-pub-card">
                  <h2
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '19px',
                      color: 'var(--charcoal)',
                      marginBottom: '16px',
                      lineHeight: 1.3,
                    }}
                  >
                    {pub.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--dark-gray)',
                      lineHeight: 1.65,
                      marginBottom: '16px',
                    }}
                  >
                    {pub.abstract}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--dark-gray)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {pub.apa}
                  </p>
                  <div className="card-cta-row writing-pub-card-cta">
                    <a
                      className="writing-pdf-btn"
                      href={pub.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="writing-section-label-teal">Research Contributions</div>
            <p className="writing-intro-muted">
              Work where I contributed as a researcher but am not listed as a primary author.
            </p>
            <div className="writing-pub-grid">
              {CONTRIBUTIONS.map((pub) => (
                <article key={pub.id} className="writing-pub-card writing-pub-card--contribution">
                  <h2
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '19px',
                      color: 'var(--charcoal)',
                      marginBottom: '16px',
                      lineHeight: 1.3,
                    }}
                  >
                    {pub.title}
                  </h2>
                  {pub.contributionNote && <p className="writing-contrib-note">{pub.contributionNote}</p>}
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--dark-gray)',
                      lineHeight: 1.65,
                      marginBottom: '16px',
                    }}
                  >
                    {pub.abstract}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Lora, serif',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--dark-gray)',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                    }}
                  >
                    {pub.apa}
                  </p>
                  <div className="card-cta-row writing-pub-card-cta">
                    <a
                      className="writing-pdf-btn"
                      href={pub.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download PDF
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'ethics' && (
        <section className="writing-section-padding" style={{ backgroundColor: 'var(--cream)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p className="writing-ethics-series-intro">
              All posts are published on Medium. The narrative parables and systemic analyses are written as companions —
              scenes that tell the story, followed by analysis that names the structure underneath it. Scene 1 combines both in
              a single post. From Scene 2 onward, the parable and analysis are published separately, a few days apart.
            </p>

            <div className="writing-legend">
              <div className="writing-legend-item">
                <span className="writing-legend-dot" style={{ backgroundColor: 'var(--teal)' }} aria-hidden />
                <span className="writing-legend-label">Essay</span>
              </div>
              <div className="writing-legend-item">
                <span className="writing-legend-dot" style={{ backgroundColor: 'var(--gold)' }} aria-hidden />
                <span className="writing-legend-label writing-legend-label--parable">Parable</span>
              </div>
              <div className="writing-legend-item">
                <span className="writing-legend-dot" style={{ backgroundColor: 'var(--terra)' }} aria-hidden />
                <span className="writing-legend-label">Analysis</span>
              </div>
            </div>

            <div className="writing-articles-stack" style={{ marginTop: '32px' }}>
              {ARTICLES.map((article) => {
                const isSoon = article.status === 'coming-soon';
                return (
                  <article
                    key={article.id}
                    className={`writing-article-card ${isSoon ? 'writing-article-card--soon' : 'writing-article-card--live'}`}
                  >
                    <div className="writing-article-accent" style={{ backgroundColor: article.accentColor }} />
                    <div style={{ padding: '32px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <span style={ethicsBadgePillStyle(article.badge)}>{article.badge}</span>
                        {article.scene && (
                          <span
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '13px',
                              color: 'var(--gray)',
                            }}
                          >
                            {article.scene}
                          </span>
                        )}
                      </div>
                      <h2
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: 700,
                          fontSize: 'var(--font-size-xl)',
                          color: 'var(--charcoal)',
                          marginBottom: '8px',
                          lineHeight: 1.25,
                        }}
                      >
                        {article.title}
                      </h2>
                      {article.subtitle && (
                        <p
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '15px',
                            color: 'var(--teal-dark)',
                            marginBottom: '16px',
                            lineHeight: 1.45,
                          }}
                        >
                          {article.subtitle}
                        </p>
                      )}
                      <p
                        style={{
                          fontFamily: 'Lora, serif',
                          fontSize: 'var(--font-size-base)',
                          color: 'var(--dark-gray)',
                          lineHeight: 1.65,
                          marginBottom: '24px',
                        }}
                      >
                        {article.excerpt}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
                        <span
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '13px',
                            color: 'var(--gray)',
                            alignSelf: 'flex-start',
                          }}
                        >
                          {article.date && `${article.date} · `}
                          {article.readTime}
                          {isSoon && (
                            <>
                              {' · '}
                              <span style={{ fontWeight: 700, color: 'var(--dark-gray)' }}>Coming Soon</span>
                            </>
                          )}
                        </span>
                        {!isSoon && article.link && (
                          <div className="card-cta-row">
                            <a
                              className="writing-card-link"
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read on Medium →
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="writing-medium-strip">
              <p>All writing is published on Medium. Follow along for new posts as the series continues.</p>
              <a
                className="writing-medium-follow"
                href="https://medium.com/@jesseleedespard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Medium ↗
              </a>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
