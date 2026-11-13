import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" className="layout__main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="section-shell site-footer__inner">
          <p className="site-footer__brand">WHAT&apos;S POPPIN&apos;, PINOY?</p>
          <p className="site-footer__note">
            A student digital museum on Philippine popular culture patterns (2000–2030).
            2030 content is labeled as projection.
          </p>
        </div>
      </footer>
    </div>
  );
}
