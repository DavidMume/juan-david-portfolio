import { useLanguage } from '../context/LanguageContext';

export default function LanguageGate() {
  const { setLanguage, t } = useLanguage();

  return (
    <section className="language-gate">
      {/* Masthead rule at top */}
      <div className="gate-masthead" aria-hidden="true" />

      <div className="gate-panel">
        {/* Brand identity lockup — M logo + name + tagline */}
        <div className="gate-brand">
          <img
            src="/images/brand/08-vertical-lockup-ivory.png"
            alt="Juan David Muñoz — Análisis · Datos · Decisiones"
            className="gate-lockup"
          />
        </div>

        {/* Bilingual subheading */}
        <p className="gate-subtitle">{t.gate.subtitle}</p>

        {/* Language buttons */}
        <div className="gate-actions">
          <button type="button" onClick={() => setLanguage('en')}>
            English
          </button>
          <button type="button" onClick={() => setLanguage('es')}>
            Español
          </button>
        </div>

        {/* Footer byline */}
        <p className="gate-byline">{t.gate.byline}</p>
      </div>
    </section>
  );
}
