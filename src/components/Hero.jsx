import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactDetails } from '../data/contact';

function DataUniverse() {
  return (
    <svg
      className="du-svg"
      viewBox="0 0 480 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid */}
      <line x1="0" y1="150" x2="480" y2="150" stroke="rgba(255,253,247,0.04)" strokeWidth="1"/>
      <line x1="0" y1="300" x2="480" y2="300" stroke="rgba(255,253,247,0.04)" strokeWidth="1"/>
      <line x1="0" y1="450" x2="480" y2="450" stroke="rgba(255,253,247,0.04)" strokeWidth="1"/>
      <line x1="120" y1="0" x2="120" y2="600" stroke="rgba(255,253,247,0.04)" strokeWidth="1"/>
      <line x1="240" y1="0" x2="240" y2="600" stroke="rgba(255,253,247,0.04)" strokeWidth="1"/>
      <line x1="360" y1="0" x2="360" y2="600" stroke="rgba(255,253,247,0.04)" strokeWidth="1"/>

      {/* Main trend line — draws in on load */}
      <path
        className="du-line-draw"
        d="M 40,520 C 100,460 160,400 220,350 S 320,280 380,220 S 440,160 470,110"
        stroke="#B00020"
        strokeWidth="1.5"
        strokeDasharray="700"
        strokeDashoffset="700"
        strokeLinecap="round"
      />
      {/* Secondary line — gold */}
      <path
        className="du-line-draw du-line-delay"
        d="M 40,560 C 120,530 200,490 270,450 S 370,400 430,350 S 460,300 480,260"
        stroke="rgba(201,162,39,0.35)"
        strokeWidth="1"
        strokeDasharray="700"
        strokeDashoffset="700"
        strokeLinecap="round"
      />

      {/* Nodes on main line */}
      <g className="du-node du-n1">
        <circle cx="220" cy="350" r="5" fill="#B00020"/>
        <circle cx="220" cy="350" r="14" fill="none" stroke="#B00020" strokeWidth="1" strokeOpacity="0.25"/>
        <circle cx="220" cy="350" r="22" fill="none" stroke="#B00020" strokeWidth="0.5" strokeOpacity="0.10"/>
      </g>
      <g className="du-node du-n2">
        <circle cx="380" cy="220" r="4" fill="rgba(201,162,39,0.9)"/>
        <circle cx="380" cy="220" r="12" fill="none" stroke="rgba(201,162,39,0.3)" strokeWidth="1"/>
      </g>
      <g className="du-node du-n3">
        <circle cx="120" cy="160" r="3" fill="rgba(255,253,247,0.5)"/>
        <circle cx="120" cy="160" r="9" fill="none" stroke="rgba(255,253,247,0.12)" strokeWidth="1"/>
      </g>
      <g className="du-node du-n4">
        <circle cx="400" cy="80" r="3.5" fill="#B00020" fillOpacity="0.65"/>
      </g>

      {/* Knowledge graph dashed connectors */}
      <line x1="120" y1="160" x2="220" y2="350" stroke="rgba(255,253,247,0.05)" strokeWidth="1" strokeDasharray="4 5"/>
      <line x1="220" y1="350" x2="380" y2="220" stroke="rgba(255,253,247,0.05)" strokeWidth="1" strokeDasharray="4 5"/>
      <line x1="380" y1="220" x2="400" y2="80" stroke="rgba(255,253,247,0.05)" strokeWidth="1" strokeDasharray="4 5"/>

      {/* Labels */}
      <text x="228" y="342" fill="rgba(255,253,247,0.28)" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1.5">GDP</text>
      <text x="388" y="213" fill="rgba(201,162,39,0.5)" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1.5">LLM</text>
      <text x="408" y="74" fill="rgba(176,0,32,0.6)" fontSize="7" fontFamily="Inter,sans-serif" letterSpacing="1.5">ML</text>
      <text x="22" y="514" fill="rgba(255,253,247,0.14)" fontSize="7" fontFamily="Inter,sans-serif">t₀</text>
      <text x="462" y="106" fill="rgba(255,253,247,0.14)" fontSize="7" fontFamily="Inter,sans-serif">t₁</text>

      {/* Dashboard card fragment */}
      <rect x="310" y="430" width="150" height="100" rx="3" fill="rgba(255,253,247,0.025)" stroke="rgba(255,253,247,0.07)" strokeWidth="1"/>
      <rect x="310" y="430" width="150" height="2" fill="rgba(176,0,32,0.55)"/>
      <rect x="322" y="444" width="55" height="4" rx="2" fill="rgba(255,253,247,0.10)"/>
      <rect x="322" y="456" width="90" height="3" rx="2" fill="rgba(255,253,247,0.05)"/>
      <rect x="322" y="465" width="72" height="3" rx="2" fill="rgba(255,253,247,0.05)"/>
      <rect x="322" y="484" width="10" height="16" rx="1" fill="rgba(176,0,32,0.45)"/>
      <rect x="336" y="476" width="10" height="24" rx="1" fill="rgba(176,0,32,0.55)"/>
      <rect x="350" y="470" width="10" height="30" rx="1" fill="rgba(176,0,32,0.65)"/>
      <rect x="364" y="479" width="10" height="21" rx="1" fill="rgba(176,0,32,0.45)"/>
      <rect x="378" y="474" width="10" height="26" rx="1" fill="rgba(176,0,32,0.55)"/>
      <rect x="392" y="467" width="10" height="33" rx="1" fill="rgba(176,0,32,0.60)"/>

      {/* Document card fragment */}
      <rect x="20" y="240" width="110" height="88" rx="3" fill="rgba(255,253,247,0.025)" stroke="rgba(255,253,247,0.065)" strokeWidth="1"/>
      <rect x="20" y="240" width="110" height="2" fill="rgba(201,162,39,0.4)"/>
      <rect x="32" y="254" width="65" height="4" rx="2" fill="rgba(255,253,247,0.10)"/>
      <rect x="32" y="265" width="86" height="3" rx="2" fill="rgba(255,253,247,0.05)"/>
      <rect x="32" y="274" width="70" height="3" rx="2" fill="rgba(255,253,247,0.05)"/>
      <rect x="32" y="283" width="80" height="3" rx="2" fill="rgba(255,253,247,0.05)"/>
      <rect x="32" y="295" width="50" height="3" rx="2" fill="rgba(255,253,247,0.05)"/>
      <rect x="32" y="306" width="40" height="14" rx="2" fill="rgba(176,0,32,0.28)"/>
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  // Subtle mouse parallax — moves data universe layer
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      hero.style.setProperty('--mx', `${x}px`);
      hero.style.setProperty('--my', `${y}px`);
    };
    hero.addEventListener('mousemove', handleMove);
    return () => hero.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="home" className="hero-cinematic" ref={heroRef}>
      {/* Subtle dot-grid texture */}
      <div className="hc-dot-grid" aria-hidden="true" />
      {/* Red top rule */}
      <div className="hc-top-bar" aria-hidden="true" />

      <div className="hc-inner">
        {/* Left: editorial copy */}
        <div className="hc-copy">
          <div className="hc-eyebrow hc-enter" style={{ '--d': '0ms' }}>
            <span className="hc-pulse-dot" aria-hidden="true" />
            {t.hero.eyebrow}
          </div>

          <h1 className="hc-headline hc-enter" style={{ '--d': '90ms' }}>
            {t.hero.subtitle}
          </h1>

          <p className="hc-body hc-enter" style={{ '--d': '180ms' }}>
            {t.hero.body}
          </p>

          <p className="hc-cred hc-enter" style={{ '--d': '250ms' }}>
            {t.hero.credibility}
          </p>

          <div className="hc-actions hc-enter" style={{ '--d': '330ms' }}>
            <a className="hc-btn-primary" href="#projects">
              {t.hero.viewProjects}
              <ArrowDown size={15} aria-hidden="true" />
            </a>
            <a className="hc-btn-ghost" href="#about">
              {t.hero.readAnalysis}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="hc-btn-outline" href="#contact">
              <Mail size={15} aria-hidden="true" />
              {t.hero.contactMe}
            </a>
          </div>

          <div className="hc-social hc-enter" style={{ '--d': '410ms' }}>
            <a
              href={contactDetails.github}
              target="_blank"
              rel="noreferrer"
              className="hc-social-link"
              aria-label="GitHub"
            >
              <Github size={17} aria-hidden="true" />
              <span>{t.hero.github}</span>
            </a>
            <span className="hc-social-div" aria-hidden="true" />
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hc-social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} aria-hidden="true" />
              <span>{t.hero.linkedin}</span>
            </a>
          </div>
        </div>

        {/* Right: data universe + M brand */}
        <div className="hc-visual" aria-hidden="true">
          <div className="hcv-frame">
            {/* Parallax data universe layer */}
            <div
              className="hcv-universe"
              style={{ transform: 'translate(var(--mx, 0px), var(--my, 0px))' }}
            >
              <DataUniverse />
            </div>

            {/* M logo overlay */}
            <div className="hcv-brand">
              <div className="hcv-brand-rule" />
              <img
                src="/images/brand/01-logo-m-red-square-1024.png"
                alt=""
                className="hcv-m-logo"
              />
              <div className="hcv-brand-rule" />
              <div className="hcv-brand-labels">
                <span>Economics</span>
                <span className="hcv-sep">·</span>
                <span>Data</span>
                <span className="hcv-sep">·</span>
                <span>AI</span>
              </div>
            </div>

            {/* Corner accents */}
            <div className="hcv-corner hcv-tl" />
            <div className="hcv-corner hcv-tr" />
            <div className="hcv-corner hcv-bl" />
            <div className="hcv-corner hcv-br" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hc-scroll-cue" aria-hidden="true">
        <ArrowDown size={13} />
      </div>
    </section>
  );
}
