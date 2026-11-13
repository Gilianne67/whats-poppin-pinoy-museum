import { Link } from 'react-router-dom';
import { museumMeta } from '../data/exhibits';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-brand">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__orb hero__orb--orange" />
        <div className="hero__orb hero__orb--purple" />
        <div className="hero__scan" />
        <div className="hero__pixels" />
      </div>

      <div className="hero__content section-shell">
        <p className="hero__eyebrow">Digital Museum · Philippine Popular Culture</p>
        <h1 id="hero-brand" className="hero__brand">
          WHAT&apos;S POPPIN&apos;,
          <span className="hero__brand-accent"> PINOY?</span>
        </h1>
        <p className="hero__lead">{museumMeta.theme}</p>
        <div className="hero__actions">
          <Link to="/technology" className="btn btn--primary">
            Enter Museum
          </Link>
          <Link to="/timeline" className="btn btn--ghost">
            View Timeline
          </Link>
        </div>
      </div>
    </section>
  );
}
