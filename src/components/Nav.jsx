import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/technology', label: 'Technology' },
  { to: '/performance', label: 'Performance' },
  { to: '/globalization', label: 'Globalization' },
  { to: '/future', label: 'Future 2030' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/conclusion', label: 'Conclusion' },
  { to: '/references', label: 'References' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner section-shell">
        <NavLink to="/" className="site-logo" onClick={close}>
          <span className="site-logo__mark" aria-hidden="true" />
          <span className="site-logo__text">
            WHAT&apos;S POPPIN&apos;, <em>PINOY?</em>
          </span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>

        <nav id="primary-nav" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Museum">
          <ul className="primary-nav__list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `primary-nav__link${isActive ? ' is-active' : ''}`
                  }
                  onClick={close}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
