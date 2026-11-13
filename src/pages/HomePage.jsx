import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { galleries } from '../data/exhibits';
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="home-intro section-shell" aria-labelledby="intro-heading">
        <h2 id="intro-heading">Welcome to the halls</h2>
        <p>
          This digital museum traces how Philippine popular culture from <strong>2000–2010</strong>{' '}
          still echoes in <strong>present</strong> platforms and performances — and invites careful{' '}
          <strong>2030 projections</strong> across technology, stages, and global circuits.
        </p>
        <p>
          Move through three galleries, a six-category future wing, a timeline, and a closing
          reflection. Photographs are stored with the site, with captions and license lines.
          A labeled stand-in appears only if a file fails to load.
        </p>
      </section>

      <section className="home-wings section-shell" aria-labelledby="wings-heading">
        <h2 id="wings-heading">Museum wings</h2>
        <ul className="home-wings__list">
          {galleries.map((gallery) => (
            <li key={gallery.id}>
              <Link to={`/${gallery.slug}`} className="home-wing">
                <span className="home-wing__label">Gallery</span>
                <span className="home-wing__title">{gallery.title}</span>
                <span className="home-wing__tag">{gallery.tagline}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/future" className="home-wing home-wing--future">
              <span className="home-wing__label">Phase 3</span>
              <span className="home-wing__title">Future of Pinoy Pop</span>
              <span className="home-wing__tag">Six projection lenses for 2030</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
