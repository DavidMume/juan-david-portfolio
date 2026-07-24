import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ArticleCard({ article, featured = false, index = 0 }) {
  const { language, t } = useLanguage();

  return (
    <article
      className={`article-card${featured ? ' article-card--featured' : ''}`}
      data-reveal
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <p className="article-kicker">
        <span>{article.category[language]}</span>
        <span className="article-kicker-date">{article.date[language]}</span>
      </p>

      <h3 className="article-title">
        <Link to={`/articles/${article.id}`}>{article.title[language]}</Link>
      </h3>
      {article.subtitle && <p className="article-subtitle">{article.subtitle[language]}</p>}

      <p className="article-excerpt">{article.excerpt[language]}</p>

      {article.tags?.length > 0 && (
        <div className="tag-list article-tags">
          {article.tags.slice(0, featured ? 6 : 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <div className="article-actions">
        <Link to={`/articles/${article.id}`} className="btn-card-primary">
          <ArrowUpRight size={14} />
          {t.articles.readArticle}
        </Link>
        {article.internalProjectPath && (
          <Link to={article.internalProjectPath} className="btn-card-secondary">
            <ArrowUpRight size={14} />
            {t.articles.viewRelatedAnalysis}
          </Link>
        )}
        {article.repoUrl && (
          <a href={article.repoUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <Github size={14} />
            {t.articles.github}
          </a>
        )}
      </div>
    </article>
  );
}
