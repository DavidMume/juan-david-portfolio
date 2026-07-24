// Opinion / editorial articles — distinct from src/data/projects.js.
// Articles are internal editorial pages. analysisUrl points to the verified
// technical analysis, live report or full editorial experience related to it.

export const articles = [
  {
    id: 'cepeda-433-pages',
    title: {
      en: 'Iván Cepeda’s 433-page government programme: almost nobody will read it, and that is not an accident.',
      es: 'El programa de gobierno de Iván Cepeda y sus 433 páginas. Nadie lo va a leer y eso no es un accidente.',
    },
    excerpt: {
      en: 'A computational reading of Iván Cepeda’s government programme using NLP to examine dominant vocabulary, readability, topics, rhetorical structure and economic silences inside a 433-page document.',
      es: 'Un análisis computacional del programa de gobierno de Iván Cepeda usando NLP para examinar vocabulario dominante, legibilidad, tópicos, estructura retórica y silencios económicos dentro de un documento de 433 páginas.',
    },
    date: { en: 'June 3, 2026', es: '3 de junio de 2026' },
    category: { en: 'Political analysis', es: 'Análisis político' },
    author: 'David Muñoz',
    tags: ['NLP', 'Colombia 2026', 'Political economy', 'Readability', 'Government plan', 'Economic analysis'],
    content: {
      en: [
        'A government programme of 433 pages may signal seriousness, but its scale also creates an information problem. Few voters, journalists or policy observers will read the entire document, leaving most public discussion dependent on summaries and campaign framing.',
        'This editorial uses computational text analysis to examine the programme’s dominant vocabulary, readability, topics and rhetorical structure. NLP does not replace political judgement; it makes a document of this size more legible and helps identify patterns that are difficult to see through selective reading.',
        'The analysis also asks what receives less attention. Economic silences, implementation constraints and the distance between repeated concepts and measurable commitments matter as much as the most frequent words. The related NLP report opens the methods, visualisations and technical evidence behind this reading.',
      ],
      es: [
        'Un programa de gobierno de 433 páginas puede proyectar seriedad, pero su extensión también crea un problema de información. Pocos votantes, periodistas u observadores de política pública leerán el documento completo, por lo que gran parte de la discusión termina dependiendo de resúmenes y del encuadre de campaña.',
        'Este editorial usa análisis computacional de texto para examinar el vocabulario dominante, la legibilidad, los tópicos y la estructura retórica del programa. El NLP no reemplaza el juicio político; permite hacer más legible un documento de esta escala e identificar patrones difíciles de observar mediante una lectura selectiva.',
        'El análisis también pregunta qué recibe menos atención. Los silencios económicos, las restricciones de implementación y la distancia entre conceptos repetidos y compromisos medibles importan tanto como las palabras más frecuentes. El informe NLP relacionado presenta los métodos, visualizaciones y evidencia técnica que sostienen esta lectura.',
      ],
    },
    articleUrl: null,
    analysisUrl: 'https://analisis-plan-gobierno-ivan-cepeda-2026-web.pages.dev/',
    analysisLabel: 'nlpAnalysis',
    caseStudyUrl: 'https://juandamunoz.com/cepeda-program',
    repoUrl: 'https://github.com/DavidMume/analisis-plan-gobierno-ivan-cepeda-2026',
    internalProjectPath: '/cepeda-program',
    status: 'published',
    language: 'es',
    featured: true,
  },
  {
    id: 'three-page-plan',
    title: {
      en: 'The three-page plan: why reading only the summary is not reading the programme.',
      es: 'El plan de tres páginas: porque leer solo el resumen es no leer el programa.',
    },
    excerpt: {
      en: 'A documentary and NLP-based analysis of Abelardo de la Espriella’s programme, the difference between an executive summary and a technical platform, and the problem of judging campaigns by document length.',
      es: 'Un análisis documental y de NLP sobre los pilares programáticos de Abelardo de la Espriella, la diferencia entre resumen ejecutivo y programa técnico, y el problema de evaluar campañas por la extensión de sus documentos.',
    },
    date: { en: 'June 7, 2026', es: '7 de junio de 2026' },
    category: { en: 'Political analysis', es: 'Análisis político' },
    author: 'David Muñoz',
    tags: ['NLP', 'Colombia 2026', 'Political communication', 'Patria Milagro', 'Policy analysis', 'Readability'],
    content: {
      en: [
        'An executive summary is designed to communicate priorities quickly. It is not a substitute for the full programme, the supporting documents or the policy detail needed to evaluate feasibility.',
        'This editorial examines the gap between the three-page campaign summary and the wider Patria Milagro corpus. It focuses on how brevity shapes political communication and why document length alone is a poor measure of programme quality.',
        'The related analysis moves from the editorial argument to the underlying evidence, including the programme’s economic model, fiscal posture, social commitments and institutional assumptions.',
      ],
      es: [
        'Un resumen ejecutivo está diseñado para comunicar prioridades con rapidez. No sustituye el programa completo, los documentos de soporte ni el detalle de política pública necesario para evaluar su viabilidad.',
        'Este editorial examina la distancia entre el resumen de campaña de tres páginas y el corpus más amplio de Patria Milagro. Se concentra en cómo la brevedad moldea la comunicación política y por qué la extensión, por sí sola, es una mala medida de la calidad programática.',
        'El análisis relacionado pasa del argumento editorial a la evidencia documental, incluyendo el modelo económico, la postura fiscal, los compromisos sociales y los supuestos institucionales del programa.',
      ],
    },
    articleUrl: null,
    analysisUrl: 'https://patria-milagro-analysis-web.pages.dev/',
    analysisLabel: 'relatedAnalysis',
    caseStudyUrl: 'https://juandamunoz.com/patria-milagro',
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
    author: 'David Muñoz',
    tags: ['Colombia 2026', 'Political economy', 'Editorial', 'Purchasing power', 'Algorithms', 'Public opinion'],
    content: {
      en: [
        'Following a Colombian election from abroad means experiencing the campaign through distance, memory and an algorithmically filtered public conversation. What reaches the screen is not a neutral account of the country.',
        'This editorial connects political memory with purchasing power, the coca economy and the incentives that shape online debate. It asks how voters interpret economic change when personal experience and digital narratives point in different directions.',
        'The full editorial experience develops that argument with the references and visual framing behind the piece.',
      ],
      es: [
        'Seguir una elección colombiana desde el exterior significa vivir la campaña a través de la distancia, la memoria y una conversación pública filtrada por algoritmos. Lo que llega a la pantalla no es un relato neutral del país.',
        'Este editorial conecta la memoria política con el poder adquisitivo, la economía de la coca y los incentivos que moldean el debate digital. Pregunta cómo interpretan los votantes el cambio económico cuando la experiencia personal y las narrativas en línea apuntan en direcciones distintas.',
        'La experiencia editorial completa desarrolla ese argumento con las referencias y el encuadre visual que sostienen la pieza.',
      ],
    },
    articleUrl: null,
    analysisUrl: 'https://votar-desde-lejos.pages.dev',
    analysisLabel: 'fullArticle',
    caseStudyUrl: 'https://juandamunoz.com/votar-desde-lejos',
    repoUrl: 'https://github.com/DavidMume/votar-desde-lejos',
    internalProjectPath: '/votar-desde-lejos',
    status: 'published',
    language: 'es',
    featured: false,
  },
];
