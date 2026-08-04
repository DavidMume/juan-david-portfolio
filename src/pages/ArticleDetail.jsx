import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Github,
  Link2,
  Linkedin,
  Mail,
  Share2,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { contactDetails } from '../data/contact';
import { articles } from '../data/articles';
import NotFound from './NotFound';

const SITE_URL = 'https://juandamunoz.com';

function upsertMeta(name, value, attr = 'name') {
  if (typeof document === 'undefined') return null;
  const selector = attr === 'property' ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    if (attr === 'property') tag.setAttribute('property', name);
    else tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
  return tag;
}

function upsertLink(rel, href) {
  if (typeof document === 'undefined') return null;
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
  return tag;
}

function removeJsonLd(id) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
}

function renderBlock(block, language, index) {
  if (typeof block === 'string') {
    return <p key={`${index}-${block}`}>{block}</p>;
  }

  if (!block) return null;

  if (block.type === 'heading') {
    return <h2 key={`${index}-${block.text}`}>{block.text}</h2>;
  }

  if (block.type === 'quote') {
    return (
      <blockquote className="article-quote" key={`${index}-${block.text}`}>
        <p>{block.text}</p>
      </blockquote>
    );
  }

  return <p key={`${index}-${block.text || index}`}>{block.text ?? ''}</p>;
}

function SourceCard({ source, language }) {
  return (
    <article className="article-source-card">
      <p className="article-source-label">{source.title[language]}</p>
      <a href={source.url} target="_blank" rel="noreferrer" className="article-source-link">
        <span>{source.url}</span>
        <ExternalLink size={14} />
      </a>
      <p className="article-source-note">{source.note[language]}</p>
    </article>
  );
}

function StatCard({ item, language }) {
  return (
    <article className="article-stat-card">
      <p className="article-stat-value">{item.value}</p>
      <p className="article-stat-label">{item.label}</p>
      <p className="article-stat-note">{item.note?.[language] ?? item.note ?? ''}</p>
    </article>
  );
}

export default function ArticleDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { language, t } = useLanguage();
  const routeSlug = useMemo(() => {
    const cleanPath = location.pathname.replace(/\/+$/, '');
    const match = cleanPath.match(/^\/(?:articulos|articles)\/([^/]+)$/);
    return match?.[1] ?? id ?? '';
  }, [id, location.pathname]);
  const article = articles.find((a) => a.id === routeSlug || a.slug === routeSlug);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!article) return undefined;

    const previous = {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? '',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') ?? '',
      ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content') ?? '',
      ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? '',
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') ?? '',
      twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') ?? '',
      twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') ?? '',
    };

    const seo = article.seo?.[language] ?? article.seo?.en ?? {};
    const canonicalPath = `${SITE_URL}/articulos/${article.id}`;
    const description = seo.description || article.excerpt?.[language] || article.excerpt?.en || '';
    const title = seo.title || article.title?.[language] || article.title?.en || t.meta.title;
    const image = `${SITE_URL}${article.seo?.image || '/images/brand/09-og-social-banner.png'}`;
    const published = new Date('2026-07-30T00:00:00-05:00').toISOString();

    document.title = `${title} | ${t.authorName}`;
    upsertMeta('description', description);
    upsertMeta('og:type', 'article', 'property');
    upsertMeta('og:title', title, 'property');
    upsertMeta('og:description', description, 'property');
    upsertMeta('og:url', canonicalPath, 'property');
    upsertMeta('og:image', image, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);
    upsertMeta('twitter:image', image);
    upsertMeta('article:published_time', published, 'property');
    upsertMeta('article:modified_time', published, 'property');
    upsertMeta('article:author', t.authorName, 'property');
    upsertLink('canonical', canonicalPath);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      author: {
        '@type': 'Person',
        name: t.authorName,
      },
      publisher: {
        '@type': 'Organization',
        name: t.authorName,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/brand/01-logo-m-red-square-1024.png`,
        },
      },
      datePublished: published,
      dateModified: published,
      mainEntityOfPage: canonicalPath,
      image,
      url: canonicalPath,
    };

    const scriptId = 'article-jsonld';
    removeJsonLd(scriptId);
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.title = previous.title;
      upsertMeta('description', previous.description);
      upsertMeta('og:title', previous.ogTitle, 'property');
      upsertMeta('og:description', previous.ogDescription, 'property');
      upsertMeta('og:url', previous.ogUrl, 'property');
      upsertMeta('og:type', previous.ogType, 'property');
      upsertMeta('og:image', previous.ogImage, 'property');
      upsertMeta('twitter:title', previous.twitterTitle);
      upsertMeta('twitter:description', previous.twitterDescription);
      upsertMeta('twitter:image', previous.twitterImage);
      if (previous.canonical) upsertLink('canonical', previous.canonical);
      else document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="article:published_time"]')?.remove();
      document.head.querySelector('meta[property="article:modified_time"]')?.remove();
      document.head.querySelector('meta[property="article:author"]')?.remove();
      removeJsonLd(scriptId);
    };
  }, [article, language, t.authorName, t.meta.title]);

  useEffect(() => {
    if (!article) return undefined;

    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const value = Math.max(0, Math.min(100, (window.scrollY / max) * 100));
      setProgress(value);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [article]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((item) => item.id !== article.id)
      .slice(0, 2);
  }, [article]);

  if (!article) return <NotFound />;

  const articlePath = `/articulos/${article.id}`;
  const projectUrl = article.projectUrl || article.analysisUrl;
  const hasProjectUrl = Boolean(projectUrl?.startsWith('http'));
  const hasSourcesUrl = Boolean(article.sourcesUrl?.startsWith('http'));
  const hasRepoUrl = Boolean(article.repoUrl?.startsWith('http'));
  const hasLinkedInUrl = Boolean(article.linkedInUrl?.startsWith('http'));
  const content = article.content?.[language] ?? article.content?.en ?? [];
  const highlights = article.highlights?.[language] ?? article.highlights?.en ?? [];
  const seo = article.seo?.[language] ?? article.seo?.en ?? {};
  const readingTime = article.readingTime?.[language] ?? article.readingTime?.en;

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(`${SITE_URL}${articlePath}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function handleShare() {
    const shareData = {
      title: seo.title || article.title[language],
      text: article.subtitle?.[language] || article.excerpt?.[language] || '',
      url: `${SITE_URL}${articlePath}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback below.
      }
    }

    handleCopyLink();
  }

  return (
    <main className="article-detail section-pad">
      <div className="article-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <Link className="back-link" to="/#articles">
        <ArrowLeft size={15} />
        {t.articleDetail.back}
      </Link>

      <header className="article-detail-header">
        <p className="article-detail-kicker">{article.category[language]}</p>
        <h1>{article.title[language]}</h1>
        {article.subtitle && <p className="article-detail-subtitle">{article.subtitle[language]}</p>}
      </header>

      {article.image && (
        <figure className="article-hero-image">
          <img
            src={article.image}
            alt={article.imageAlt?.[language] ?? article.title[language]}
            width="1448"
            height="1086"
            loading="eager"
            fetchPriority="high"
          />
          <figcaption>{article.imageCaption?.[language] ?? ''}</figcaption>
        </figure>
      )}

      <div className="article-detail-meta">
        <span>{article.date[language]}</span>
        {article.status && <span>{article.status[language] ?? article.status}</span>}
        {article.author && <span>{t.articleDetail.byline} {article.author}</span>}
        {readingTime && <span>{readingTime}</span>}
      </div>

      <p className="article-detail-deck">{article.excerpt[language]}</p>

      <div className="article-detail-cta-row">
        {hasProjectUrl && (
          <a href={projectUrl} target="_blank" rel="noreferrer" className="article-cta-primary">
            {t.articleDetail.project}
            <ArrowUpRight size={16} />
          </a>
        )}
        {hasSourcesUrl && (
          <a href={article.sourcesUrl} target="_blank" rel="noreferrer" className="article-cta-secondary">
            <Link2 size={16} />
            {t.articleDetail.sources}
          </a>
        )}
        {hasRepoUrl && (
          <a href={article.repoUrl} target="_blank" rel="noreferrer" className="article-cta-secondary">
            <Github size={16} />
            {t.articleDetail.ctaRepo}
          </a>
        )}
        {hasLinkedInUrl && (
          <a href={article.linkedInUrl} target="_blank" rel="noreferrer" className="article-cta-secondary">
            <Linkedin size={16} />
            {t.articleDetail.readOnLinkedIn}
          </a>
        )}
      </div>

      {article.tags?.length > 0 && (
        <div className="article-detail-tags" aria-label={t.articleDetail.tags}>
          {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      )}

      {article.projectCard && (
        <section className="article-project-card">
          <p className="article-project-eyebrow">{(article.projectCard[language] ?? article.projectCard.en).eyebrow}</p>
          <h2>{(article.projectCard[language] ?? article.projectCard.en).title}</h2>
          <p>{(article.projectCard[language] ?? article.projectCard.en).body}</p>
          <div className="article-project-links">
            {hasProjectUrl && (
              <a href={projectUrl} target="_blank" rel="noreferrer" className="btn-card-primary">
                <ArrowUpRight size={14} />
                {t.articleDetail.project}
              </a>
            )}
            {hasSourcesUrl && (
              <a href={article.sourcesUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
                <Link2 size={14} />
                {t.articleDetail.sources}
              </a>
            )}
            {hasRepoUrl && (
              <a href={article.repoUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
                <Github size={14} />
                {t.articleDetail.ctaRepo}
              </a>
            )}
            {hasLinkedInUrl && (
              <a href={article.linkedInUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
                <Linkedin size={14} />
                {t.articleDetail.readOnLinkedIn}
              </a>
            )}
          </div>
        </section>
      )}

      {highlights.length > 0 && (
        <section className="article-highlights">
          <div className="article-section-heading">
            <p className="eyebrow">{t.articleDetail.projectCardEyebrow}</p>
            <h2>{t.articleDetail.projectCardTitle}</h2>
          </div>
          <div className="article-stat-grid">
            {highlights.map((item) => (
              <StatCard key={item.value} item={item} language={language} />
            ))}
          </div>
          <p className="article-methodology-note">{article.methodologyNote?.[language] ?? t.articleDetail.methodologyNote}</p>
        </section>
      )}

      <article className="article-detail-body">
        {content.map((block, index) => renderBlock(block, language, index))}
      </article>

      <section className="article-detail-actions" aria-label={t.articleDetail.share}>
        <p className="article-detail-actions-label">{t.articleDetail.share}</p>
        <div>
          <button type="button" className="article-cta-secondary" onClick={handleCopyLink}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? t.articleDetail.copied : t.articleDetail.copyLink}
          </button>
          <button type="button" className="article-cta-secondary" onClick={handleShare}>
            <Share2 size={16} />
            {t.articleDetail.share}
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}${articlePath}`)}`}
            target="_blank"
            rel="noreferrer"
            className="article-cta-secondary"
          >
            <Linkedin size={16} />
            {t.articleDetail.linkedIn}
          </a>
          <a
            href={`https://x.com/intent/tweet?url=${encodeURIComponent(`${SITE_URL}${articlePath}`)}&text=${encodeURIComponent(article.title[language])}`}
            target="_blank"
            rel="noreferrer"
            className="article-cta-secondary"
          >
            <Link2 size={16} />
            {t.articleDetail.x}
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(article.title[language])}&body=${encodeURIComponent(`${SITE_URL}${articlePath}`)}`}
            className="article-cta-secondary"
          >
            <Mail size={16} />
            {t.articleDetail.email}
          </a>
        </div>
      </section>

      {article.sources?.length > 0 && (
        <section className="article-sources-section" id="sources">
          <div className="article-section-heading">
            <p className="eyebrow">{t.articleDetail.sources}</p>
            <h2>{language === 'es' ? 'Fuentes y trazabilidad' : 'Sources and traceability'}</h2>
            <p>
              {language === 'es'
                ? 'Estas fuentes sostienen las afirmaciones verificables del texto. Donde la evidencia sigue siendo descriptiva, el artículo lo dice explícitamente.'
                : 'These sources support the verifiable claims in the text. Where the evidence remains descriptive, the article says so explicitly.'}
            </p>
          </div>

          <div className="article-source-grid">
            {article.sources.map((source) => (
              <SourceCard key={source.id} source={source} language={language} />
            ))}
          </div>
        </section>
      )}

      <section className="article-author-card">
        <div className="article-author-copy">
          <p className="article-project-eyebrow">{t.articleDetail.authorCard}</p>
          <h2>{article.author}</h2>
          <p>
            {language === 'es'
              ? 'Economía, ciencia de datos y política pública. El trabajo editorial y el trabajo técnico deben poder leerse juntos.'
              : 'Economics, data science and public policy. The editorial work and the technical work should be readable together.'}
          </p>
        </div>

        <div className="article-author-links" aria-label={t.nav.primaryLabel}>
          <a href={`mailto:${contactDetails.email}`}>
            <Mail size={16} />
            Email
          </a>
          <a href={contactDetails.github} target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="article-related-section">
          <div className="article-section-heading">
            <p className="eyebrow">{language === 'es' ? 'Artículos relacionados' : 'Related articles'}</p>
            <h2>{language === 'es' ? 'Seguir leyendo' : 'Keep reading'}</h2>
          </div>

          <div className="article-related-grid">
            {relatedArticles.map((related) => (
              <article className="article-related-card" key={related.id}>
                <p className="article-related-kicker">{related.category[language]}</p>
                <h3>
                  <Link to={`/articulos/${related.id}`}>{related.title[language]}</Link>
                </h3>
                <p>{related.excerpt[language]}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <Link className="back-link article-detail-back" to="/#articles">
        <ArrowLeft size={15} />
        {t.articleDetail.back}
      </Link>
    </main>
  );
}
