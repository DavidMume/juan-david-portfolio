import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.body}</p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com">
            <Mail size={19} />
            {t.contact.emailLink}
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={19} />
            {t.contact.github}
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <Linkedin size={19} />
            {t.contact.linkedin}
          </a>
        </div>
      </div>

      <form className="contact-form" data-reveal>
        <label>
          {t.contact.name}
          <input name="name" type="text" placeholder={t.contact.namePlaceholder} />
        </label>
        <label>
          {t.contact.email}
          <input name="email" type="email" placeholder={t.contact.emailPlaceholder} />
        </label>
        <label>
          {t.contact.message}
          <textarea name="message" rows="5" placeholder={t.contact.messagePlaceholder} />
        </label>
        <button type="button">{t.contact.submit}</button>
      </form>
    </section>
  );
}
