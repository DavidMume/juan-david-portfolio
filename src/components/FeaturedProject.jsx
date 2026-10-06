import { ArrowUpRight, BookOpen, Github, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

const FEATURED_IMAGE = '/images/studenthelper/03-chat.png';

export default function FeaturedProject({ project }) {
  const { language, t } = useLanguage();
  const highlights = project.featuredHighlights?.[language] ?? [];

  return (
    <article className="featured-project" data-reveal>
      <Link to={project.internalPath} className="featured-project-visual" tabIndex={-1} aria-hidden="true">
        <div className="featured-window">
          <div className="featured-window-bar"><i /><i /><i /><span>studenthelper.school</span></div>
          <img src={FEATURED_IMAGE} alt="" loading="lazy" />
        </div>
        <span className="featured-float"><ShieldCheck size={15} />Entra ID · Domain control</span>
      </Link>

      <div className="featured-project-body">
        <div className="featured-project-kicker">
          <span className="featured-label">{t.projects.featuredLabel}</span>
          <span className="category-chip">{project.categoryLabel[language]}</span>
          <span className={`status-badge status-${project.status}`}>{project.statusLabel[language]}</span>
        </div>

        <h3>
          <Link to={project.internalPath} className="project-card-title-link">{project.title[language]}</Link>
        </h3>
        {project.subtitle && <p className="featured-subtitle">{project.subtitle[language]}</p>}
        <p className="featured-desc">{project.description[language]}</p>

        {highlights.length > 0 && (
          <dl className="featured-highlights">
            {highlights.map(([value, label]) => (
              <div key={value}><dt>{value}</dt><dd>{label}</dd></div>
            ))}
          </dl>
        )}

        {project.technologies?.length > 0 && (
          <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        )}

        <div className="featured-actions">
          <Link to={project.internalPath} className="btn-card-primary">
            <ArrowUpRight size={15} />{t.projects.featuredCta}
          </Link>
          <Link to={`${project.internalPath}#sh-evidence`} className="btn-card-secondary">
            <BookOpen size={15} />{t.projects.featuredEvidence}
          </Link>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-card-secondary">
              <Github size={15} />{t.projects.githubRepo}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
