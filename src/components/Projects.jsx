import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-pad projects-section">
      <div className="section-heading centered" data-reveal>
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2>{t.projects.title}</h2>
        <p>{t.projects.body}</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
