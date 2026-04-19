import { Link } from 'react-router';
import { MarketingCtaStrip } from './MarketingCtaStrip';

interface CTAStripProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

/** Design-system demo: same visuals as the live Home marketing CTA strip. */
export function CTAStrip({ title, description, buttonText, onButtonClick }: CTAStripProps) {
  return (
    <MarketingCtaStrip
      title={title}
      body={description}
      cta={
        onButtonClick ? (
          <button type="button" className="primary-cta-dark" onClick={onButtonClick}>
            {buttonText}
          </button>
        ) : (
          <Link to="/work" className="primary-cta-dark">
            {buttonText}
          </Link>
        )
      }
    />
  );
}
