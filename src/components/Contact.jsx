import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contactDetails } from '../data/contact';

export default function Contact() {
  const { t } = useLanguage();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = `${t.contact.emailSubject} ${name}`;
    const body = `${t.contact.name}: ${name}\n${t.contact.email}: ${email}\n\n${t.contact.message}:\n${message}`;

    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.body}</p>
        <div className="contact-links">
          <a href={`mailto:${contactDetails.email}`}>
            <Mail size={19} />
            {t.contact.emailLink}
          </a>
          <a href={contactDetails.github} target="_blank" rel="noreferrer">
            <Github size={19} />
            {t.contact.github}
          </a>
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={19} />
            {t.contact.linkedin}
          </a>
        </div>
      </div>

      <form className="contact-form" data-reveal onSubmit={handleSubmit}>
        <label>
          {t.contact.name}
          <input name="name" type="text" autoComplete="name" placeholder={t.contact.namePlaceholder} required />
        </label>
        <label>
          {t.contact.email}
          <input name="email" type="email" autoComplete="email" placeholder={t.contact.emailPlaceholder} required />
        </label>
        <label>
          {t.contact.message}
          <textarea name="message" rows="5" placeholder={t.contact.messagePlaceholder} required />
        </label>
        <button type="submit">{t.contact.submit}</button>
      </form>
    </section>
  );
}
