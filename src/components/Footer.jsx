import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div>
        <strong>Juan David Muñoz Mendivelso</strong>
        <p>{t.footer.text}</p>
      </div>
      <div className="footer-links">
        <a href="mailto:your.email@example.com" aria-label="Email">
          <Mail size={18} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
