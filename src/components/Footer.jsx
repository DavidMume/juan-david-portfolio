import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactDetails } from '../data/contact';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div>
        <strong>{t.authorName}</strong>
        <p>{t.footer.text}</p>
      </div>
      <div className="footer-links">
        <a href={`mailto:${contactDetails.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
        <a href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
