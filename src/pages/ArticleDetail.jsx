import { ArrowLeft, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { articles } from '../data/articles';
import NotFound from './NotFound';

export default function ArticleDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const article = articles.find((a) => a.id === id);

  if (!article) return <NotFound />;
  const hasArticleUrl = article.articleUrl && !article.articleUrl.includes('TODO');

  return (
    <main className="project-detail section-pad">
      <Link className="back-link" to="/#articles">
        <ArrowLeft size={15} />
        {t.articleDetail.back}
      </Link>

      <section className="detail-hero">
        <p className="eyebrow">{article.category[language]}</p>
        <h1>{article.title[language]}</h1>
        {article.subtitle && <p className="detail-subtitle">{article.subtitle[language]}</p>}
        <p>{article.excerpt[language]}</p>
        <div className="detail-tags">
          <span className="detail-tag">{article.date[language]}</span>
          <span className="detail-tag">{article.source[language]}</span>
          {article.tags?.map((tag) => (
            <span key={tag} className="detail-tag">{tag}</span>
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <article>
          <h2>{t.articleDetail.excerpt}</h2>
          <p>{article.excerpt[language]}</p>
        </article>
        <article>
          <h2>{t.articleDetail.relatedProject}</h2>
          <p>
            {article.internalProjectPath ? (
              <Link to={article.internalProjectPath}>{t.articleDetail.ctaRelated}</Link>
            ) : (
              t.articleDetail.sourceNote
            )}
          </p>
        </article>
      </section>

      <section className="detail-links">
        <h2>{t.projectDetail.links}</h2>
        {hasArticleUrl ? (
          <a href={article.articleUrl} target="_blank" rel="noreferrer">
            <Linkedin size={15} />
            {t.articleDetail.ctaSource}
          </a>
        ) : (
          <span className="btn-card-muted">{t.articles.sourcePending}</span>
        )}
        {article.internalProjectPath && (
          <Link to={article.internalProjectPath}>
            <ExternalLink size={15} />
            {t.articleDetail.ctaRelated}
          </Link>
        )}
        {article.repoUrl && (
          <a href={article.repoUrl} target="_blank" rel="noreferrer">
            <Github size={15} />
            {t.articleDetail.ctaRepo}
          </a>
        )}
        <p>{t.articleDetail.sourceNote}</p>
      </section>

      <Link className="back-link" to="/#articles" style={{ marginTop: 24, marginBottom: 0 }}>
        <ArrowLeft size={15} />
        {t.articles.allArticles}
      </Link>
    </main>
  );
}
