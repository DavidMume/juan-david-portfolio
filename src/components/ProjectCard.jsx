import { ArrowUpRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project, index }) {
  const { language, t } = useLanguage();

  return (
    <article className={`project-card accent-${project.accent}`} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
      <div className="project-icon" aria-hidden="true">
        <Code2 size={22} />
      </div>
      <h3>{project.title[language]}</h3>
      <p>{project.description[language]}</p>
      <div className="tech-list">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <div className="card-actions">
        <Link to={`/projects/${project.slug}`}>
          {t.projects.viewProject}
          <ArrowUpRight size={17} />
        </Link>
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            {t.projects.githubRepo}
          </a>
        )}
      </div>
    </article>
  );
}
