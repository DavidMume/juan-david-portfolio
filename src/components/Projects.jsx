import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';
import FeaturedProject from './FeaturedProject';
import { useReveal } from '../hooks/useReveal';

const CATEGORIES = [
  { key: 'all', labelKey: 'filterAll' },
  { key: 'data-journalism', labelKey: 'filterDataJournalism' },
  { key: 'data-science', labelKey: 'filterDataScience' },
  { key: 'political-analysis', labelKey: 'filterPolitical' },
  { key: 'ai-tools', labelKey: 'filterAI' },
  { key: 'research', labelKey: 'filterResearch' },
];

export default function Projects() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        p.title[language].toLowerCase().includes(q) ||
        p.description[language].toLowerCase().includes(q) ||
        (p.tags || []).some((tag) => tag.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery, language]);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);
  useReveal(`${activeCategory}|${searchQuery}|${language}`);

  return (
    <section id="projects" className="section-pad projects-section">
      <div className="section-heading centered" data-reveal>
        <p className="eyebrow">{t.projects.eyebrow}</p>
        <h2>{t.projects.title}</h2>
        <p>{t.projects.body}</p>
      </div>

      {/* Filter bar */}
      <div className="projects-toolbar" data-reveal>
        <div className="filter-pills">
          {CATEGORIES.map(({ key, labelKey }) => (
            <button
              key={key}
              className={`filter-pill${activeCategory === key ? ' active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {t.projects[labelKey]}
            </button>
          ))}
        </div>
        <div className="project-search-wrap">
          <Search size={15} className="search-icon" />
          <input
            type="search"
            className="project-search"
            placeholder={t.projects.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Count */}
      <p className="projects-count" aria-live="polite">
        {t.projects.showing} {filtered.length} {t.projects.of} {projects.length}{' '}
        {t.projects.projectsWord}
      </p>

      {/* Flagship project */}
      {featured && <FeaturedProject project={featured} />}

      {/* Remaining projects — compact grid */}
      {rest.length > 0 && (
        <>
          {featured && <p className="projects-more-label">{t.projects.moreProjects}</p>}
          <div className="project-grid is-compact">
            {rest.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
