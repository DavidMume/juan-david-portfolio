import { useLanguage } from '../context/LanguageContext';

export default function LanguageGate() {
  const { setLanguage, t } = useLanguage();

  return (
    <section className="language-gate">
      {/* Masthead rule at top */}
      <div className="gate-masthead" aria-hidden="true" />

      <div className="gate-panel">
        {/* M brand mark */}
        <div className="gate-brand">
          <img
            src="/images/brand/01-logo-m-red-square-1024.png"
            alt="M"
            className="gate-logo"
          />
        </div>

        {/* Editorial divider rule */}
        <div className="gate-rule" aria-hidden="true" />

        {/* Headline */}
        <h1 className="gate-title">{t.gate.title}</h1>

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
