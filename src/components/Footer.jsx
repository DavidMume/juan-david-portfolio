import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { contactDetails } from '../data/contact';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-header">
            <img
              src="/images/brand/01-logo-m-red-square-1024.png"
              alt="M"
              className="footer-logo-img"
            />
            <strong>{t.authorName}</strong>
          </div>
          <p>{t.footer.text}</p>
          <div className="footer-links">
            <a href={`mailto:${contactDetails.email}`} aria-label="Email">
              <Mail size={17} />
            </a>
            <a href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t.footer.projectsLabel}</h4>
          <ul>
            {t.footer.projectLinks.map((link) => (
              <li key={link.label}>
                {link.url.startsWith('http') ? (
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <Link to={link.url}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.footer.connectLabel}</h4>
          <ul>
            <li>
              <a href={`mailto:${contactDetails.email}`}>
                <Mail size={14} />
                {t.contact.emailLink}
              </a>
            </li>
            <li>
              <a href={contactDetails.github} target="_blank" rel="noreferrer">
                <Github size={14} />
                GitHub
              </a>
            </li>
            <li>
              <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={14} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {t.authorName}</p>
        <div className="footer-links">
          <a href={`mailto:${contactDetails.email}`} aria-label="Email">
            <Mail size={16} />
          </a>
          <a href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
