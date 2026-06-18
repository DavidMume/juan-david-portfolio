import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="home" className="hero section-pad">
      <div className="hero-media" data-reveal>
        {!imageError ? (
          <img src="/images/profile.png" alt={t.hero.profileAlt} onError={() => setImageError(true)} />
        ) : (
          <div className="profile-placeholder">
            <span>JDM</span>
            <small>/public/images/profile.png</small>
          </div>
        )}
      </div>

      <div className="hero-content" data-reveal>
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <h2>{t.hero.subtitle}</h2>
        <p>{t.hero.body}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            {t.hero.viewProjects}
            <ArrowDown size={18} />
          </a>
          <a className="btn secondary" href="#contact">
            <Mail size={18} />
            {t.hero.contactMe}
          </a>
          <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={21} />
            <span>{t.hero.github}</span>
          </a>
          <a className="icon-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={21} />
            <span>{t.hero.linkedin}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
