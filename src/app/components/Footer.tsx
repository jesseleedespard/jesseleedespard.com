import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="site-footer w-full self-stretch">
      <div className="site-footer__inner">
        <div className="site-footer__name">Jesse Lee Despard</div>

        <nav className="site-footer__nav" aria-label="Footer">
          <Link to="/work" className="site-footer__link">
            Work
          </Link>
          <Link to="/writing" className="site-footer__link">
            Writing
          </Link>
          <Link to="/podcast" className="site-footer__link">
            Podcast
          </Link>
          <Link to="/about" className="site-footer__link">
            About
          </Link>
          <a
            href="https://www.linkedin.com/in/jesseleedespard/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            LinkedIn
          </a>
        </nav>

        <div className="site-footer__copy">© Jesse Lee Despard. All rights reserved.</div>
      </div>
      <div className="site-footer__disclaimer">
        Case studies summarize work completed under NDA. Company details are anonymized and artifacts are shown with permission.
      </div>
    </footer>
  );
}
