import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="not-found section-pad">
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.body}</p>
      <Link className="btn primary" to="/">
        {t.notFound.action}
      </Link>
    </main>
  );
}
