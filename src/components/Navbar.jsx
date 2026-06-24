import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const anchorLinks = [
  ['home', '#home'],
  ['about', '#about'],
  ['projects', '#projects'],
  ['skills', '#skills'],
  ['contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleAnchorClick(hash) {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
      return;
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <Link
        to="/"
        className="brand"
        onClick={() => setOpen(false)}
        aria-label={`${t.authorName} ${t.nav.brandLabel}`}
      >
        <img
          src="/images/brand/01-logo-m-red-square-1024.png"
          alt="M"
          className="brand-logo-img"
        />
        <strong>{t.authorName}</strong>
      </Link>

      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label={t.nav.primaryLabel}>
        {anchorLinks.map(([key, hash]) => (
          <button key={key} type="button" onClick={() => handleAnchorClick(hash)}>
            {t.nav[key]}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <div className="language-switch" aria-label={t.nav.languageLabel}>
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={language === 'es' ? 'active' : ''}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
        </div>
        <button
          className="mobile-menu"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
