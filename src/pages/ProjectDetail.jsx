import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  const links = [
    project.liveUrl && { label: t.projects.viewProject, url: project.liveUrl },
    project.repoUrl && { label: t.projects.githubRepo, url: project.repoUrl },
  ].filter(Boolean);

  return (
    <main className="project-detail section-pad">
      <Link className="back-link" to="/#projects">
        <ArrowLeft size={18} />
        {t.projectDetail.back}
      </Link>
      <section className={`detail-hero accent-${project.accent}`}>
        <p className="eyebrow">Project</p>
        <h1>{project.title[language]}</h1>
        <p>{project.description[language]}</p>
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
        {links.length ? (
          links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
              <ExternalLink size={17} />
            </a>
          ))
        ) : (
          <p>{t.projectDetail.noLinks}</p>
        )}
      </section>
    </main>
  );
}
