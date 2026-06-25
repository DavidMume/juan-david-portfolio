import { TrendingUp, Building2, BarChart3, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICONS = [TrendingUp, Building2, BarChart3, Bot];

export default function WhatIInvestigate() {
  const { t } = useLanguage();
  const section = t.whatIInvestigate;

  return (
    <section className="wi-section">
      <div className="section-pad">
        <div className="section-heading" data-reveal>
          <div className="eyebrow">{section.eyebrow}</div>
          <h2>{section.title}</h2>
        </div>

        <div className="wi-grid">
          {section.items.map((item, i) => {
            const Icon = ICONS[i] || BarChart3;
            return (
              <article
                key={item.id}
                className="wi-card"
                data-reveal
                style={{ transitionDelay: `${i * 65}ms` }}
              >
                <div className="wi-icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
