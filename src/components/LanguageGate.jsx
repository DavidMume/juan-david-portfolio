import { useLanguage } from '../context/LanguageContext';

export default function LanguageGate() {
  const { setLanguage, t } = useLanguage();

  return (
    <div className="lg-cover">
      {/* Subtle dot-grid texture */}
      <div className="lg-bg-grid" aria-hidden="true" />
      {/* Red top rule */}
      <div className="lg-top-rule" aria-hidden="true" />

      <div className="lg-panel">
        <img
          src="/images/brand/01-logo-m-red-square-1024.png"
          alt="M — Juan David Muñoz"
          className="lg-logo"
        />

        <div className="lg-rule" aria-hidden="true" />

        <p className="lg-overline">{t.gate.byline}</p>
        <h1 className="lg-title">{t.gate.title}</h1>
        <p className="lg-subtitle">{t.gate.subtitle}</p>

        <div className="lg-actions">
          <button type="button" className="lg-btn" onClick={() => setLanguage('en')}>
            <span className="lg-btn-code">EN</span>
            {t.gate.english}
          </button>
          <button type="button" className="lg-btn" onClick={() => setLanguage('es')}>
            <span className="lg-btn-code">ES</span>
            {t.gate.spanish}
          </button>
        </div>
      </div>
    </div>
  );
}
