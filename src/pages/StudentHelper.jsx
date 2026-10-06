import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, Database, Download, Github, GraduationCap, KeyRound, LayoutDashboard, Network, Server, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { studentHelperContent, studentHelperRepo } from '../data/studentHelper';
import { studentHelperEvidenceCopy, studentHelperPapers } from '../data/studentHelperEvidence';
import { useReveal } from '../hooks/useReveal';

const icons = [ShieldCheck, KeyRound, Network, Database, LayoutDashboard, Sparkles, Server, Download];
const screenshots = ['01-loading.png', '02-login.png', '03-chat.png', '04-admin.png'];

function SectionTitle({ kicker, title, body, light = false }) {
  return (
    <div className={`sh-section-title${light ? ' is-light' : ''}`} data-reveal>
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {body && <div>{body}</div>}
    </div>
  );
}

export default function StudentHelper() {
  const { language } = useLanguage();
  useReveal(language);
  const c = studentHelperContent[language];
  const ev = studentHelperEvidenceCopy[language];

  return (
    <main className="sh-page">
      <header id="sh-top" className="sh-hero">
        <div className="sh-hero-grid" aria-hidden="true" />
        <div className="sh-hero-copy">
          <Link to="/#projects" className="sh-back"><ArrowLeft size={15} />{c.footer.back}</Link>
          <p className="eyebrow">{c.hero.kicker}</p>
          <h1>{c.hero.title}</h1>
          <p className="sh-lede">{c.hero.body}</p>
          <div className="sh-badges">{c.hero.badges.map((x) => <span key={x}><ShieldCheck size={13} />{x}</span>)}</div>
          <div className="sh-actions">
            <a className="sh-button primary" href="#sh-architecture">{c.hero.architecture}<ArrowDown size={16} /></a>
            <a className="sh-button" href="#sh-evidence"><BookOpen size={16} />{ev.kicker}</a>
            <a className="sh-button ghost" href={studentHelperRepo} target="_blank" rel="noreferrer"><Github size={16} />{c.hero.github}</a>
          </div>
          <p className="sh-disclaimer">{c.hero.note}</p>
        </div>
        <div className="sh-hero-visual" aria-label="StudentHelper application preview">
          <div className="sh-window">
            <div className="sh-window-bar"><i /><i /><i /><span>studenthelper.school</span></div>
            <img src="/images/studenthelper/03-chat.png" alt="StudentHelper chat interface" />
          </div>
          <div className="sh-float-card one"><KeyRound size={18} /><span>Entra ID</span><small>School identity</small></div>
          <div className="sh-float-card two"><ShieldCheck size={18} /><span>Domain control</span><small>Server-side</small></div>
        </div>
      </header>

      <nav className="sh-local-nav" aria-label="StudentHelper sections">
        <a href="#sh-top" className="sh-mark"><GraduationCap size={17} /><span>StudentHelper</span></a>
        <div className="sh-local-links">
          {Object.entries(c.nav).map(([key, label]) => <a key={key} href={`#sh-${key}`}>{label}</a>)}
        </div>
      </nav>

      <section id="sh-problem" className="sh-section sh-problem">
        <SectionTitle {...c.problem} />
        <div className="sh-problem-grid">
          {c.problem.items.map(([title, body], i) => (
            <article key={title} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <span>0{i + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sh-solution" className="sh-band sh-solution">
        <div className="sh-section">
          <SectionTitle {...c.solution} />
          <div className="sh-feature-grid">
            {c.solution.items.map(([title, body], i) => {
              const Icon = icons[i];
              return <article key={title} data-reveal style={{ transitionDelay: `${(i % 4) * 60}ms` }}><div className="sh-icon"><Icon size={18} /></div><h3>{title}</h3><p>{body}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="sh-evidence" className="sh-section sh-evidence">
        <SectionTitle kicker={ev.kicker} title={ev.title} body={ev.body} />
        <ol className="sh-paper-list">
          {studentHelperPapers.map((paper, i) => (
            <li key={paper.id} className="sh-paper" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <div className="sh-paper-stat">
                <strong>{typeof paper.stat === 'string' ? paper.stat : paper.stat[language]}</strong>
                <span>{paper.statLabel[language]}</span>
              </div>
              <div className="sh-paper-body">
                <p className="sh-paper-type">{paper.type[language]} · {paper.year}</p>
                <h3><a href={paper.url} target="_blank" rel="noreferrer">{paper.title}</a></h3>
                <p className="sh-paper-cite">{paper.authors} ({paper.year}). <em>{paper.venue}</em></p>
                <div className="sh-paper-split">
                  <div><b>{ev.findingLabel}</b><p>{paper.finding[language]}</p></div>
                  <div className="is-implication"><b>{ev.implicationLabel}</b><p>{paper.implication[language]}</p></div>
                </div>
                <a className="sh-paper-link" href={paper.url} target="_blank" rel="noreferrer">
                  {paper.isPolicy ? ev.readPolicy : ev.read}<ArrowUpRight size={14} />
                </a>
              </div>
            </li>
          ))}
        </ol>
        <p className="sh-table-note">{ev.note}</p>
      </section>

      <section id="sh-architecture" className="sh-band sh-architecture">
        <div className="sh-section">
          <SectionTitle {...c.architecture} light />
          <div className="sh-architecture-layout" data-reveal>
            <div className="sh-system-map">
              <div className="sh-map-node student"><GraduationCap /><b>{c.architecture.nodes.student[0]}</b><span>{c.architecture.nodes.student[1]}</span></div>
              <ArrowRight className="sh-map-arrow a1" /><div className="sh-map-node entra"><KeyRound /><b>{c.architecture.nodes.entra[0]}</b><span>{c.architecture.nodes.entra[1]}</span></div>
              <ArrowRight className="sh-map-arrow a2" /><div className="sh-map-node api"><Server /><b>{c.architecture.nodes.api[0]}</b><span>{c.architecture.nodes.api[1]}</span></div>
              <div className="sh-map-branch model"><Sparkles /><b>{c.architecture.nodes.model[0]}</b><span>{c.architecture.nodes.model[1]}</span></div>
              <div className="sh-map-branch db"><Database /><b>{c.architecture.nodes.db[0]}</b><span>{c.architecture.nodes.db[1]}</span></div>
              <div className="sh-map-branch admin"><LayoutDashboard /><b>{c.architecture.nodes.admin[0]}</b><span>{c.architecture.nodes.admin[1]}</span></div>
              <div className="sh-map-intune"><Download /><b>{c.architecture.nodes.intune[0]}</b><span>{c.architecture.nodes.intune[1]}</span></div>
            </div>
            <aside className="sh-flow"><h3>{c.architecture.flowTitle}</h3>{c.architecture.flow.map((x, i) => <div key={x}><span>{i + 1}</span><p>{x}</p></div>)}</aside>
          </div>
        </div>
      </section>

      <section className="sh-metrics">
        <div className="sh-section">
          <p className="eyebrow">{c.metrics.kicker}</p>
          <div>{c.metrics.items.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
        </div>
      </section>

      <section id="sh-compare" className="sh-section sh-compare">
        <SectionTitle {...c.compare} />
        <div className="sh-table" role="table" data-reveal>
          <div className="sh-table-head" role="row"><span /><b>{c.compare.public}</b><b>{c.compare.school}</b></div>
          {c.compare.rows.map(([label, a, b]) => <div className="sh-table-row" role="row" key={label}><strong>{label}</strong><span>{a}</span><span><Check size={16} />{b}</span></div>)}
        </div>
        <p className="sh-table-note">{c.compare.note}</p>
      </section>

      <section className="sh-band sh-responsible-band">
        <div className="sh-section sh-responsible">
          <div><SectionTitle {...c.responsible} /><div className="sh-checks">{c.responsible.items.map((x) => <p key={x}><Check size={17} />{x}</p>)}</div></div>
          <aside data-reveal><Sparkles size={26} /><p>{c.responsible.callout}</p></aside>
        </div>
      </section>

      <section className="sh-section sh-stack">
        <SectionTitle {...c.stack} />
        <div className="sh-stack-grid">{c.stack.items.map(([name, role]) => <article key={name} data-reveal><b>{name}</b><span>{role}</span></article>)}</div>
      </section>

      <section id="sh-screens" className="sh-band sh-screens-band">
        <div className="sh-section sh-screens">
          <SectionTitle {...c.screens} />
          <div className="sh-screen-grid">
            {c.screens.items.map(([name, desc], i) => (
              <figure key={name} data-reveal>
                <div><img src={`/images/studenthelper/${screenshots[i]}`} alt={`${name} — StudentHelper`} loading="lazy" /></div>
                <figcaption><b>{String(i + 1).padStart(2, '0')} · {name}</b><span>{desc}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="sh-deployment" className="sh-section sh-deployment">
        <SectionTitle {...c.deployment} />
        <div className="sh-deploy-grid">
          <article data-reveal><span>01</span><Server /><h3>{c.deployment.all[0]}</h3><p>{c.deployment.all[1]}</p></article>
          <article data-reveal><span>02</span><Network /><h3>{c.deployment.client[0]}</h3><p>{c.deployment.client[1]}</p></article>
        </div>
        <p className="sh-intune"><Download size={17} />{c.deployment.intune}</p>
      </section>

      <section className="sh-section sh-cost"><span className="eyebrow">{c.cost.label}</span><div><h2>{c.cost.title}</h2><p>{c.cost.body}</p></div></section>

      <section className="sh-cta">
        <GraduationCap size={30} />
        <h2>{c.footer.title}</h2>
        <p>{c.footer.body}</p>
        <div>
          <Link to="/#projects" className="sh-button ghost"><ArrowLeft size={16} />{c.footer.back}</Link>
          <a className="sh-button primary" href={studentHelperRepo} target="_blank" rel="noreferrer">{c.footer.repo}<ArrowUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
