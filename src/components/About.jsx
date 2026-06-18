import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad about-section">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h2>{t.about.title}</h2>
      </div>
      <div className="about-grid" data-reveal>
        <p>{t.about.body}</p>
        <div className="focus-panel">
          <h3>{t.about.interestsTitle}</h3>
          <div className="pill-grid">
            {t.about.interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
