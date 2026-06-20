import { ArrowLeft, ExternalLink, Github, Globe } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  const links = [
    project.liveUrl?.startsWith('http') && {
      label: t.projects.viewProject,
      url: project.liveUrl,
      icon: 'globe',
    },
    project.repoUrl && {
      label: t.projects.githubRepo,
      url: project.repoUrl,
      icon: 'github',
    },
    project.articleUrl && {
      label: t.projects.readArticle,
      url: project.articleUrl,
      icon: 'external',
    },
  ].filter(Boolean);

  return (
    <main className="project-detail section-pad">
      <Link className="back-link" to="/#projects">
        <ArrowLeft size={15} />
        {t.projectDetail.back}
      </Link>

      <section className={`detail-hero accent-${project.accent}`}>
        <p className="eyebrow">Project</p>
        <h1>{project.title[language]}</h1>
        <p>{project.description[language]}</p>
        {project.technologies?.length > 0 && (
          <div className="detail-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="detail-tag">{tech}</span>
            ))}
          </div>
        )}
      </section>

      <section className="detail-grid">
        <article>
          <h2>{t.projectDetail.problem}</h2>
          <p>{project.problem[language]}</p>
        </article>
        <article>
          <h2>{t.projectDetail.description}</h2>
          <p>{project.description[language]}</p>
        </article>
        <article>
          <h2>{t.projectDetail.tools}</h2>
          <div className="tech-list">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </article>
        <article>
          <h2>{t.projectDetail.outcomes}</h2>
          <p>{project.results[language]}</p>
        </article>
      </section>

      <section className="detail-links">
        <h2>{t.projectDetail.links}</h2>
        {links.length > 0 ? (
          links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.icon === 'github' && <Github size={15} />}
              {link.icon === 'globe' && <Globe size={15} />}
              {link.icon === 'external' && <ExternalLink size={15} />}
              {link.label}
            </a>
          ))
        ) : (
          <p>{t.projectDetail.noLinks}</p>
        )}
      </section>
    </main>
  );
}
