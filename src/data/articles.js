// Opinion / editorial articles — distinct from src/data/projects.js.
// Each article here already has a fuller technical write-up as a project
// (see projects.js). Articles surface the editorial/opinion angle and link
// back to the existing project page, live analysis and repo rather than
// duplicating content. articleUrl is the original LinkedIn article — left
// null with a TODO where the real URL has not been provided yet.

export const articles = [
  {
    id: 'cepeda-433-pages',
    title: {
      en: 'Iván Cepeda’s 433-page government programme',
      es: 'El programa de gobierno de Iván Cepeda y sus 433 páginas',
    },
    subtitle: {
      en: 'Almost nobody will read it, and that is not an accident.',
      es: 'Nadie lo va a leer y eso no es un accidente.',
    },
    excerpt: {
      en: 'A computational reading of Iván Cepeda’s government programme using NLP to examine dominant vocabulary, readability, topics, rhetorical structure and economic silences inside a 433-page document.',
      es: 'Un análisis computacional del programa de gobierno de Iván Cepeda usando NLP para examinar vocabulario dominante, legibilidad, tópicos, estructura retórica y silencios económicos dentro de un documento de 433 páginas.',
    },
    date: { en: 'June 3, 2026', es: '3 de junio de 2026' },
    category: { en: 'Political analysis', es: 'Análisis político' },
    tags: ['NLP', 'Colombia 2026', 'Political economy', 'Readability', 'Government plan', 'Economic analysis'],
    source: { en: 'LinkedIn article', es: 'Artículo de LinkedIn' },
    articleUrl: null, // TODO: add LinkedIn article URL
    projectUrl: 'https://analisis-plan-gobierno-ivan-cepeda-2026-web.pages.dev',
    repoUrl: 'https://github.com/DavidMume/analisis-plan-gobierno-ivan-cepeda-2026',
    internalProjectPath: '/cepeda',
    status: 'published',
    language: 'es',
    featured: true,
  },
  {
    id: 'three-page-plan',
    title: {
      en: 'The three-page plan',
      es: 'El plan de tres páginas',
    },
    subtitle: {
      en: 'Why reading only the summary is not reading the programme.',
      es: 'Porque leer solo el resumen es no leer el programa.',
    },
    excerpt: {
      en: 'A documentary and NLP-based analysis of Abelardo de la Espriella’s programme, the difference between an executive summary and a technical platform, and the problem of judging campaigns by document length.',
      es: 'Un análisis documental y de NLP sobre los pilares programáticos de Abelardo de la Espriella, la diferencia entre resumen ejecutivo y programa técnico, y el problema de evaluar campañas por la extensión de sus documentos.',
    },
    date: { en: 'June 7, 2026', es: '7 de junio de 2026' },
    category: { en: 'Political analysis', es: 'Análisis político' },
    tags: ['NLP', 'Colombia 2026', 'Political communication', 'Patria Milagro', 'Policy analysis', 'Readability'],
    source: { en: 'LinkedIn article', es: 'Artículo de LinkedIn' },
    articleUrl: null, // TODO: add LinkedIn article URL
    projectUrl: 'https://patria-milagro-analysis-web.pages.dev',
    repoUrl: 'https://github.com/DavidMume/patria-milagro-analysis',
    internalProjectPath: '/patria-milagro',
    status: 'published',
    language: 'es',
    featured: false,
  },
  {
    id: 'votar-desde-lejos',
    title: {
      en: 'Voting from afar',
      es: 'Votar desde lejos',
    },
    subtitle: {
      en: 'Algorithms, memory, purchasing power and coca — a political editorial',
      es: 'Algoritmos, memoria, poder adquisitivo y coca — un editorial político',
    },
    excerpt: {
      en: 'A data-informed editorial on algorithms, political memory, purchasing power and coca in Colombia’s 2026 electoral cycle.',
      es: 'Una editorial informada por datos sobre algoritmos, memoria política, poder adquisitivo y coca en el ciclo electoral colombiano de 2026.',
    },
    date: { en: 'June 2026', es: 'Junio de 2026' },
    category: { en: 'Opinion · Political economy', es: 'Opinión · Economía política' },
    tags: ['Colombia 2026', 'Political economy', 'Editorial', 'Purchasing power', 'Algorithms', 'Public opinion'],
    source: { en: 'Portfolio article', es: 'Artículo del portafolio' },
    articleUrl: null, // TODO: add LinkedIn article URL, if one exists
    projectUrl: 'https://votar-desde-lejos.pages.dev',
    repoUrl: 'https://github.com/DavidMume/votar-desde-lejos',
    internalProjectPath: '/votar',
    status: 'published',
    language: 'es',
    featured: false,
  },
];
