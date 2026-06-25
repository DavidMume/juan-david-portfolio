import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactDetails } from '../data/contact';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      {/* Animated background decorations */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-line-accent" aria-hidden="true" />

      {/* M editorial brand — decorative background watermark */}
      <div className="hero-crest" aria-hidden="true">
        <img src="/images/brand/02-logo-m-red-square-transparent.png" alt="" />
      </div>

      {/* Constrained content grid */}
      <div className="hero-inner">
        <div className="hero-editorial-panel" data-reveal aria-hidden="true">
          <div className="hep-rule hep-rule-top" />
          <div className="hep-inner">
            <div className="hep-grid-lines">
              <span /><span /><span /><span />
            </div>
            <img
              src="/images/brand/01-logo-m-red-square-1024.png"
              alt=""
              className="hep-logo"
            />
            <div className="hep-meta">
              <span className="hep-label">Economics</span>
              <span className="hep-dot" />
              <span className="hep-label">Data Science</span>
              <span className="hep-dot" />
              <span className="hep-label">AI</span>
            </div>
            <div className="hep-rule hep-rule-mid" />
            <p className="hep-tagline">juandamunoz.com</p>
          </div>
          <div className="hep-rule hep-rule-bottom" />
          <div className="hep-corner hep-corner-tl" />
          <div className="hep-corner hep-corner-br" />
        </div>

        <div className="hero-content" data-reveal style={{ transitionDelay: '120ms' }}>
          <div className="hero-brand-row" aria-hidden="true">
            <img
              src="/images/brand/07-horizontal-lockup-ivory.png"
              alt=""
              className="hero-lockup"
            />
          </div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </div>
          <h1>{t.authorName}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p>{t.hero.body}</p>
          {t.hero.credibility && (
            <p className="hero-credibility">{t.hero.credibility}</p>
          )}
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              {t.hero.viewProjects}
              <ArrowDown size={17} />
            </a>
            <a className="btn secondary" href="#contact">
              <Mail size={17} />
              {t.hero.contactMe}
            </a>
            <a
              className="icon-link"
              href={contactDetails.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
              <span>{t.hero.github}</span>
            </a>
            <a
              className="icon-link"
              href={contactDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span>{t.hero.linkedin}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
