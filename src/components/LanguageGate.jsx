import { ArrowRight, Globe2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageGate() {
  const { setLanguage, t } = useLanguage();

  return (
    <section className="language-gate">
      <div className="gate-panel">
        <div className="gate-icon" aria-hidden="true">
          <Globe2 size={30} />
        </div>
        <p className="eyebrow">Juan David Muñoz Mendivelso</p>
        <h1>{t.gate.title}</h1>
        <p>{t.gate.subtitle}</p>
        <div className="gate-actions">
          <button type="button" onClick={() => setLanguage('en')}>
            {t.gate.english}
            <ArrowRight size={20} />
          </button>
          <button type="button" onClick={() => setLanguage('es')}>
            {t.gate.spanish}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
