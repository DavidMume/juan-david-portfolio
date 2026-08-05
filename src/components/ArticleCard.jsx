import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export default function ArticleCard({ article, featured = false, index = 0 }) {
  const { language, t } = useLanguage();
  const articlePath = `/articulos/${article.id}`;
  const projectUrl = article.projectUrl || article.analysisUrl;
  const hasProjectUrl = Boolean(projectUrl && projectUrl.startsWith('http'));
  const hasSourcesUrl = Boolean(article.sourcesUrl && article.sourcesUrl.startsWith('http'));
  const analysisLabel = article.analysisLabel?.[language]
    ?? (article.projectUrl ? t.articles.viewProject : (t.articles.viewRelatedAnalysis || t.articles.readAnalysis));
  const title = article.title?.[language] ?? article.title?.es ?? article.title?.en ?? article.id;
  const category = article.category?.[language] ?? article.category?.es ?? article.category?.en ?? '';
  const date = article.date?.[language] ?? article.date?.es ?? article.date?.en ?? '';
  const subtitle = article.subtitle?.[language] ?? article.subtitle?.es ?? article.subtitle?.en ?? '';
  const excerpt = article.excerpt?.[language] ?? article.excerpt?.es ?? article.excerpt?.en ?? '';
  const tags = Array.isArray(article.tags) ? article.tags : [];

  return (
    <article
      className={`article-card${featured ? ' article-card--featured' : ''}`}
      data-reveal
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {article.image && (
        <Link to={articlePath} className="article-card-media" aria-label={title}>
          <img
            src={article.image}
            alt={article.imageAlt?.[language] ?? article.imageAlt?.es ?? article.imageAlt?.en ?? title}
            loading={featured ? 'eager' : 'lazy'}
            fetchPriority={featured ? 'high' : 'auto'}
          />
        </Link>
      )}

      <p className="article-kicker">
        <span>{category}</span>
        <span className="article-kicker-date">
          {date}
          {article.readingTime && (
            <span className="article-kicker-reading">
              · {article.readingTime[language] ?? article.readingTime}
            </span>
          )}
        </span>
      </p>

      <h3 className="article-title">
        <Link to={articlePath}>{title}</Link>
      </h3>
      {subtitle && <p className="article-subtitle">{subtitle}</p>}

      <p className="article-excerpt">{excerpt}</p>

      {tags.length > 0 && (
        <div className="tag-list article-tags">
          {tags.slice(0, featured ? 6 : 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <div className="article-actions">
        <Link to={articlePath} className="btn-card-primary">
          <ArrowUpRight size={14} />
          {t.articles.readArticle}
        </Link>
        {hasProjectUrl && (
          <a href={projectUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <ArrowUpRight size={14} />
            {analysisLabel}
          </a>
        )}
        {featured && hasSourcesUrl && (
          <a href={article.sourcesUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <ArrowUpRight size={14} />
            {t.articles.sourcesMethodology}
          </a>
        )}
      </div>
    </article>
  );
}
