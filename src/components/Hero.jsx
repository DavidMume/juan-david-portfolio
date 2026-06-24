import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactDetails } from '../data/contact';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
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
        <img src="/images/portfolio/01-hero-m-editorial-brand.png" alt="" />
      </div>

      {/* Constrained content grid */}
      <div className="hero-inner">
        <div className="hero-media" data-reveal>
          {!imageError ? (
            <img
              src="/images/profile.png"
              alt={`${t.hero.profileAlt} ${t.authorName}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="profile-placeholder">
              <span>JDM</span>
              <small>/public/images/profile.png</small>
            </div>
          )}
        </div>

        <div className="hero-content" data-reveal style={{ transitionDelay: '120ms' }}>
          <div className="hero-brand-row" aria-hidden="true">
            <img
              src="/images/brand/logo-m-red-square.png"
              alt=""
              className="hero-brand-mark"
            />
          </div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </div>
          <h1>{t.authorName}</h1>
          <h2>{t.hero.subtitle}</h2>
          <p>{t.hero.body}</p>
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
