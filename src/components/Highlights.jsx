import { BarChart2, Brain, Globe, Server, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = {
  economics:   TrendingUp,
  dataScience: BarChart2,
  aiTools:     Brain,
  webApps:     Globe,
  automation:  Zap,
  ictSystems:  Server,
};

const expertiseImages = {
  economics:   '/images/portfolio/02-expertise-economics.png',
  dataScience: '/images/portfolio/03-expertise-data-science.png',
  aiTools:     '/images/portfolio/04-expertise-ai-tools.png',
  webApps:     '/images/portfolio/05-expertise-web-applications.png',
  automation:  '/images/portfolio/06-expertise-automation.png',
  ictSystems:  '/images/portfolio/07-expertise-ict-systems.png',
};

export default function Highlights() {
  const { t } = useLanguage();

  return (
    <section id="highlights" className="section-pad highlights-section">
      <div className="section-heading centered" data-reveal>
        <p className="eyebrow">{t.highlights.eyebrow}</p>
        <h2>{t.highlights.title}</h2>
      </div>
      <div className="highlights-grid">
        {t.highlights.items.map((item, index) => {
          const Icon = icons[item.id] || TrendingUp;
          const imgSrc = expertiseImages[item.id];
          return (
            <div
              key={item.id}
              className="highlight-card"
              data-reveal
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              {imgSrc && (
                <div className="highlight-card-image-wrap">
                  <img
                    src={imgSrc}
                    alt=""
                    aria-hidden="true"
                    className="highlight-card-image"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="highlight-card-body">
                <div className="highlight-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
