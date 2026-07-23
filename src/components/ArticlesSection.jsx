import { articles } from '../data/articles';
import { useLanguage } from '../context/LanguageContext';
import ArticleCard from './ArticleCard';

export default function ArticlesSection() {
  const { t } = useLanguage();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.id !== featured.id);

  return (
    <section id="articles" className="section-pad articles-section">
      <div className="section-heading centered" data-reveal>
        <p className="eyebrow">{t.articles.eyebrow}</p>
        <h2>{t.articles.title}</h2>
        <p>{t.articles.body}</p>
      </div>

      <div className="articles-divider" aria-hidden="true" />

      <div className="articles-layout">
        <ArticleCard article={featured} featured index={0} />
        <div className="articles-secondary">
          {rest.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
