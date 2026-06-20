import { ArrowUpRight, Code2, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project, index }) {
  const { language, t } = useLanguage();

  return (
    <article
      className={`project-card accent-${project.accent}`}
      data-reveal
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="project-icon" aria-hidden="true">
        <Code2 size={22} />
      </div>

      {project.collection && (
        <p className="project-collection">{project.collection[language]}</p>
      )}

      <h3>{project.title[language]}</h3>

      {project.subtitle && (
        <p className="project-subtitle">{project.subtitle[language]}</p>
      )}

      <p>{project.description[language]}</p>

      {(project.date || project.category || project.status) && (
        <div className="project-meta">
          {project.date && <span>{project.date[language]}</span>}
          {project.category && <span>{project.category[language]}</span>}
          {project.status && <span>{project.status[language]}</span>}
        </div>
      )}

      {project.tags?.length > 0 && (
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      {project.technologies?.length > 0 && (
        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      )}

      <div className="card-actions">
        {project.liveUrl?.startsWith('http') ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <Globe size={15} />
            {t.projects.viewAnalysis}
          </a>
        ) : (
          <Link to={`/projects/${project.slug}`}>
            {t.projects.viewProject}
            <ArrowUpRight size={15} />
          </Link>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            <Github size={15} />
            {t.projects.githubRepo}
          </a>
        )}
        {project.articleUrl && (
          <a href={project.articleUrl} target="_blank" rel="noreferrer">
            {t.projects.readArticle}
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
}
