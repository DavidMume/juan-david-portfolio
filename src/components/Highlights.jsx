import { BarChart2, Brain, Globe, Server, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = {
  economics: TrendingUp,
  dataScience: BarChart2,
  aiTools: Brain,
  webApps: Globe,
  automation: Zap,
  ictSystems: Server,
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
          return (
            <div
              key={item.id}
              className="highlight-card"
              data-reveal
              style={{ transitionDelay: `${index * 55}ms` }}
            >
              <div className="highlight-icon" aria-hidden="true">
                <Icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
