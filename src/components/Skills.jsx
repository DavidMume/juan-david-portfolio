import { skills } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-pad skills-section">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{t.skills.eyebrow}</p>
        <h2>{t.skills.title}</h2>
      </div>
      <div className="skills-grid">
        {Object.entries(skills).map(([group, items], index) => (
          <div className="skill-group" key={group} data-reveal style={{ transitionDelay: `${index * 60}ms` }}>
            <h3>{t.skills.groups[group]}</h3>
            <div className="pill-grid">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
