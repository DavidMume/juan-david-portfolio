import {
  ArrowUpRight,
  Github,
  Globe,
  BookOpen,
  BarChart3,
  Bot,
  FlaskConical,
  Newspaper,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PROJECT_IMAGES = {
  'chocorramo-index':       '/images/portfolio/08-project-chocorramo-index.png',
  'votar-desde-lejos':      '/images/portfolio/09-project-votar-desde-lejos.png',
  'seq-transit-predictor':  '/images/portfolio/10-project-seq-transit-predictor.png',
  'careerops-agent':        '/images/portfolio/12-project-careerops-agent.svg',
};
const PLACEHOLDER_IMG = '/images/brand/11-project-placeholder-editorial.png';

function CategoryIcon({ category }) {
  switch (category) {
    case 'data-journalism':
      return <Newspaper size={18} />;
    case 'data-science':
      return <BarChart3 size={18} />;
    case 'political-analysis':
      return <BookOpen size={18} />;
    case 'ai-tools':
      return <Bot size={18} />;
    case 'research':
      return <FlaskConical size={18} />;
    default:
      return <Globe size={18} />;
  }
}

export default function ProjectCard({ project, index }) {
  const { language, t } = useLanguage();

  const hasLiveUrl = project.liveUrl?.startsWith('http') && !project.liveUrl.includes('TODO');
  const hasArticleUrl = project.articleUrl && !project.articleUrl.includes('TODO');
  const hasLinks = project.internalPath || hasLiveUrl || project.repoUrl || hasArticleUrl;
  const cardImage = PROJECT_IMAGES[project.slug];
  const isPlaceholder = !cardImage;

  return (
    <article
      className={`project-card accent-${project.accent}`}
      data-reveal
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Project image — links to canonical internal case study */}
      <Link to={project.internalPath} className="project-card-cover-link" tabIndex={-1} aria-hidden="true">
        <div className="project-card-image-wrap">
          <img
            src={cardImage || PLACEHOLDER_IMG}
            alt={cardImage ? project.title[language] : ''}
            aria-hidden={isPlaceholder}
            className={`project-card-image${isPlaceholder ? ' is-placeholder' : ''}`}
            loading="lazy"
          />
        </div>
      </Link>

      {/* Card header: category chip + status badge */}
      <div className="card-header">
        <span className="category-chip">{project.categoryLabel[language]}</span>
        <span className={`status-badge status-${project.status}`}>{project.statusLabel[language]}</span>
      </div>

      {/* Icon */}
      <div className="project-icon" aria-hidden="true">
        <CategoryIcon category={project.category} />
      </div>

      {/* Title — links to canonical internal case study */}
      <h3>
        <Link to={project.internalPath} className="project-card-title-link">
          {project.title[language]}
        </Link>
      </h3>

      {/* Subtitle */}
      {project.subtitle && (
        <p className="project-subtitle">{project.subtitle[language]}</p>
      )}

      {/* Description */}
      <p className="project-desc">{project.description[language]}</p>

      {/* Date + category meta */}
      {project.date && (
        <div className="project-meta">
          <span>{project.date[language]}</span>
        </div>
      )}

      {/* Tags */}
      {project.tags?.length > 0 && (
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      {/* Technologies */}
      {project.technologies?.length > 0 && (
        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div className="card-actions">
        {/* Primary: internal portfolio case study */}
        {project.internalPath && (
          <Link to={project.internalPath} className="btn-card-primary">
            <ArrowUpRight size={14} />
            {t.projects.viewAnalysis}
          </Link>
        )}

        {/* Verified external deployment */}
        {hasLiveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <Globe size={14} />
            {t.projects.liveTool}
          </a>
        )}

        {/* GitHub */}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <Github size={14} />
            {t.projects.githubRepo}
          </a>
        )}

        {/* Article */}
        {hasArticleUrl && project.articleUrl.startsWith('/') && (
          <Link to={project.articleUrl} className="btn-card-secondary">
            <ExternalLink size={14} />
            {t.projects.readArticle}
          </Link>
        )}
        {hasArticleUrl && project.articleUrl.startsWith('http') && (
          <a href={project.articleUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <ExternalLink size={14} />
            {t.projects.readArticle}
          </a>
        )}

        {/* No links available */}
        {!hasLinks && (
          <span className="btn-card-muted">
            {(project.status === 'research' || project.status === 'concept') && t.projects.inDevelopment}
          </span>
        )}
      </div>
    </article>
  );
}
