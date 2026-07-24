import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { articles } from '../data/articles';
import NotFound from './NotFound';

export default function ArticleDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const article = articles.find((a) => a.id === id);

  if (!article) return <NotFound />;
  const hasAnalysisUrl = article.analysisUrl?.startsWith('http') && !article.analysisUrl.includes('TODO');
  const hasRepoUrl = article.repoUrl?.startsWith('http') && !article.repoUrl.includes('TODO');
  const analysisLabel = t.articleDetail.relatedCtas[article.analysisLabel]
    ?? t.articleDetail.relatedCtas.relatedAnalysis;

  return (
    <main className="article-detail section-pad">
      <Link className="back-link" to="/#articles">
        <ArrowLeft size={15} />
        {t.articleDetail.back}
      </Link>

      <header className="article-detail-header">
        <p className="article-detail-kicker">{article.category[language]}</p>
        <h1>{article.title[language]}</h1>
        <div className="article-detail-meta">
          <span>{article.date[language]}</span>
          {article.author && <span>{t.articleDetail.byline} {article.author}</span>}
        </div>
        <p className="article-detail-deck">{article.excerpt[language]}</p>
        {article.tags?.length > 0 && (
          <div className="article-detail-tags" aria-label={t.articleDetail.tags}>
            {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
      </header>

      <article className="article-detail-body">
        {article.content?.[language]?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <section className="article-detail-actions" aria-label={t.articleDetail.continueReading}>
        <p className="article-detail-actions-label">{t.articleDetail.continueReading}</p>
        <div>
          {hasAnalysisUrl && (
            <a href={article.analysisUrl} target="_blank" rel="noreferrer" className="article-cta-primary">
              {analysisLabel}
              <ArrowUpRight size={16} />
            </a>
          )}
          {hasRepoUrl && (
            <a href={article.repoUrl} target="_blank" rel="noreferrer" className="article-cta-secondary">
              <Github size={16} />
              {t.articleDetail.ctaRepo}
            </a>
          )}
          {!hasAnalysisUrl && !hasRepoUrl && (
            <span className="article-link-pending">{t.articleDetail.linksPending}</span>
          )}
        </div>
      </section>

      <Link className="back-link article-detail-back" to="/#articles">
        <ArrowLeft size={15} />
        {t.articleDetail.back}
      </Link>
    </main>
  );
}
