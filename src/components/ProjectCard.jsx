import {
  ArrowUpRight,
  Github,
  Globe,
  BookOpen,
  BarChart3,
  Map,
  Bot,
  FlaskConical,
  Newspaper,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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

  const hasLinks = project.liveUrl || project.repoUrl || project.articleUrl;

  return (
    <article
      className={`project-card accent-${project.accent}`}
      data-reveal
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Card header: category chip + status badge */}
      <div className="card-header">
        <span className="category-chip">{project.categoryLabel[language]}</span>
        <span className={`status-badge status-${project.status}`}>{project.statusLabel[language]}</span>
      </div>

      {/* Icon */}
      <div className="project-icon" aria-hidden="true">
        <CategoryIcon category={project.category} />
      </div>

      {/* Title */}
      <h3>{project.title[language]}</h3>

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
        {/* Primary: live URL (external) */}
        {project.liveUrl?.startsWith('http') && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-card-primary">
            <Globe size={14} />
            {project.liveLabel?.[language] || t.projects.viewAnalysis}
          </a>
        )}

        {/* Primary: internal route */}
        {project.liveUrl?.startsWith('/') && (
          <Link to={project.liveUrl} className="btn-card-primary">
            <ArrowUpRight size={14} />
            {project.liveLabel?.[language] || t.projects.caseStudy}
          </Link>
        )}

        {/* GitHub */}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <Github size={14} />
            {t.projects.githubRepo}
          </a>
        )}

        {/* Article */}
        {project.articleUrl && (
          <a href={project.articleUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
            <ExternalLink size={14} />
            {t.projects.readArticle}
          </a>
        )}

        {/* No links available */}
        {!hasLinks && (
          <span className="btn-card-muted">
            {project.status === 'research' || project.status === 'concept'
              ? language === 'es'
                ? 'En desarrollo'
                : 'In development'
              : ''}
          </span>
        )}
      </div>
    </article>
  );
}
