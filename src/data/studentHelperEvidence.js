// Peer-reviewed research and policy that informs StudentHelper's design.
// Every entry links to its DOI or official source. Keep figures exactly as reported by the authors.

export const studentHelperEvidenceCopy = {
  en: {
    kicker: 'Research foundation',
    title: 'What the evidence says about AI and learning.',
    body: 'StudentHelper’s design choices are not arbitrary. Recent peer-reviewed studies show that the same technology can accelerate learning or quietly erode it — the difference is pedagogy, guardrails and institutional oversight.',
    findingLabel: 'Finding',
    implicationLabel: 'Design implication',
    read: 'Read the paper',
    readPolicy: 'Read the framework',
    note: 'Summaries paraphrase each publication’s reported results. StudentHelper itself has not been evaluated in a controlled study; these papers inform its design rather than validate its outcomes.',
  },
  es: {
    kicker: 'Fundamento científico',
    title: 'Lo que dice la evidencia sobre IA y aprendizaje.',
    body: 'Las decisiones de diseño de StudentHelper no son arbitrarias. Estudios recientes revisados por pares muestran que la misma tecnología puede acelerar el aprendizaje o erosionarlo silenciosamente: la diferencia está en la pedagogía, las salvaguardas y la supervisión institucional.',
    findingLabel: 'Hallazgo',
    implicationLabel: 'Implicación de diseño',
    read: 'Leer el artículo',
    readPolicy: 'Leer el marco',
    note: 'Los resúmenes parafrasean los resultados reportados por cada publicación. StudentHelper no ha sido evaluado en un estudio controlado; estos trabajos orientan su diseño, no validan sus resultados.',
  },
};

export const studentHelperPapers = [
  {
    id: 'bastani-2025',
    stat: '−17%',
    statLabel: { en: 'exam performance after unrestricted AI practice', es: 'en el examen tras practicar con IA sin restricciones' },
    authors: 'Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö. & Mariman, R.',
    year: 2025,
    title: 'Generative AI without guardrails can harm learning: Evidence from high school mathematics',
    venue: 'Proceedings of the National Academy of Sciences, 122(26), e2422633122',
    type: { en: 'Field experiment · ~1,000 students', es: 'Experimento de campo · ~1.000 estudiantes' },
    url: 'https://doi.org/10.1073/pnas.2422633122',
    finding: {
      en: 'High-school students who practised with an unrestricted GPT-4 interface improved during practice but scored 17% lower on the later unassisted exam than peers without access. A tutor version with teacher-designed guardrails largely mitigated that harm.',
      es: 'Estudiantes de secundaria que practicaron con GPT-4 sin restricciones mejoraron durante la práctica, pero obtuvieron un 17% menos en el examen posterior sin asistencia frente a quienes no tuvieron acceso. Una versión tutora con salvaguardas diseñadas por docentes mitigó en gran medida ese daño.',
    },
    implication: {
      en: 'Guardrails are a requirement, not an add-on: the school-controlled prompt guides reasoning instead of handing out answers.',
      es: 'Las salvaguardas son un requisito, no un extra: el prompt controlado por el colegio guía el razonamiento en lugar de entregar respuestas.',
    },
  },
  {
    id: 'kestin-2025',
    stat: '2×',
    statLabel: { en: 'learning gains vs in-class active learning', es: 'ganancias de aprendizaje vs aprendizaje activo en clase' },
    authors: 'Kestin, G., Miller, K., Klales, A., Milbourne, T. & Ponti, G.',
    year: 2025,
    title: 'AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting',
    venue: 'Scientific Reports, 15, 17458',
    type: { en: 'Randomised controlled trial · 194 students', es: 'Ensayo controlado aleatorio · 194 estudiantes' },
    url: 'https://doi.org/10.1038/s41598-025-97652-6',
    finding: {
      en: 'An AI tutor built on research-based pedagogy — scaffolding, self-pacing and timely feedback — produced learning gains more than double those of an in-class active-learning session, in less time, with higher reported engagement.',
      es: 'Un tutor de IA basado en pedagogía con evidencia —andamiaje, ritmo propio y retroalimentación oportuna— generó ganancias de aprendizaje de más del doble que una sesión de aprendizaje activo en clase, en menos tiempo y con mayor compromiso reportado.',
    },
    implication: {
      en: 'Pedagogy must be configured explicitly: step-by-step guidance and guiding questions instead of generic chatbot defaults.',
      es: 'La pedagogía debe configurarse explícitamente: guía paso a paso y preguntas orientadoras en lugar del comportamiento genérico de un chatbot.',
    },
  },
  {
    id: 'desimone-2025',
    stat: '0.31 SD',
    statLabel: { en: 'improvement in a six-week supervised programme', es: 'de mejora en un programa supervisado de seis semanas' },
    authors: 'De Simone, M., Tiberti, F., Barron Rodriguez, M., Manolio, F., Mosuro, W. & Dikoru, E. J.',
    year: 2025,
    title: 'From Chalkboards to Chatbots: Evaluating the Impact of Generative AI on Learning Outcomes in Nigeria',
    venue: 'World Bank Policy Research Working Paper 11125',
    type: { en: 'Randomised controlled trial · secondary school', es: 'Ensayo controlado aleatorio · secundaria' },
    url: 'https://openknowledge.worldbank.org/entities/publication/15e1ff08-15ae-4f7a-b2a8-d146e6c113ee',
    finding: {
      en: 'Secondary students using Microsoft Copilot (GPT-4) as a tutor in a structured after-school programme improved by 0.31 standard deviations — gains the authors equate to 1.5–2 years of business-as-usual schooling.',
      es: 'Estudiantes de secundaria que usaron Microsoft Copilot (GPT-4) como tutor en un programa extracurricular estructurado mejoraron 0,31 desviaciones estándar, ganancias que los autores equiparan a 1,5–2 años de escolaridad habitual.',
    },
    implication: {
      en: 'Structured, institution-run deployment is where the gains appear — hence school identity, the Microsoft ecosystem and managed rollout.',
      es: 'Los beneficios aparecen en despliegues estructurados y gestionados por la institución: de ahí la identidad escolar, el ecosistema Microsoft y el despliegue administrado.',
    },
  },
  {
    id: 'gerlich-2025',
    stat: 'n = 666',
    statLabel: { en: 'participants linking AI use to cognitive offloading', es: 'participantes: uso de IA y descarga cognitiva' },
    authors: 'Gerlich, M.',
    year: 2025,
    title: 'AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking',
    venue: 'Societies, 15(1), 6',
    type: { en: 'Mixed-methods survey study', es: 'Estudio mixto con encuesta' },
    url: 'https://doi.org/10.3390/soc15010006',
    finding: {
      en: 'Found a significant negative correlation between frequent AI tool use and critical-thinking scores, mediated by cognitive offloading. Younger participants showed higher dependence and lower scores. The design is correlational, not causal.',
      es: 'Encontró una correlación negativa significativa entre el uso frecuente de herramientas de IA y el pensamiento crítico, mediada por la descarga cognitiva. Los participantes más jóvenes mostraron mayor dependencia y menores puntajes. El diseño es correlacional, no causal.',
    },
    implication: {
      en: 'Productive friction: the assistant asks the student to reason, verify and take the next step themselves.',
      es: 'Fricción productiva: el asistente pide al estudiante razonar, verificar y dar el siguiente paso por sí mismo.',
    },
  },
  {
    id: 'kasneci-2023',
    stat: { en: 'Review', es: 'Revisión' },
    statLabel: { en: 'opportunities and risks of LLMs in education', es: 'oportunidades y riesgos de los LLM en educación' },
    authors: 'Kasneci, E., Seßler, K., Küchemann, S., Bannert, M., et al.',
    year: 2023,
    title: 'ChatGPT for good? On opportunities and challenges of large language models for education',
    venue: 'Learning and Individual Differences, 103, 102274',
    type: { en: 'Interdisciplinary review', es: 'Revisión interdisciplinaria' },
    url: 'https://doi.org/10.1016/j.lindif.2023.102274',
    finding: {
      en: 'Argues that LLMs can support personalised learning only when paired with teacher and learner competencies, human oversight, privacy protection and safeguards against bias and over-reliance.',
      es: 'Sostiene que los LLM pueden apoyar el aprendizaje personalizado solo si se acompañan de competencias docentes y estudiantiles, supervisión humana, protección de la privacidad y salvaguardas frente al sesgo y la dependencia.',
    },
    implication: {
      en: 'Oversight is built in: domain-restricted access, persistent logs and an administrative review dashboard.',
      es: 'La supervisión viene integrada: acceso restringido por dominio, registros persistentes y un panel administrativo de revisión.',
    },
  },
  {
    id: 'aus-framework-2023',
    stat: { en: 'Policy', es: 'Marco' },
    statLabel: { en: 'national guidance for Australian schools', es: 'guía nacional para colegios australianos' },
    authors: 'Australian Government Department of Education',
    year: 2023,
    title: 'Australian Framework for Generative Artificial Intelligence (AI) in Schools',
    venue: 'Endorsed by Australian education ministers',
    type: { en: 'Policy framework', es: 'Marco de política pública' },
    url: 'https://www.education.gov.au/schooling/resources/australian-framework-generative-artificial-intelligence-ai-schools',
    isPolicy: true,
    finding: {
      en: 'Sets national principles for generative AI in schools, including teaching and learning, human and social wellbeing, transparency, fairness, accountability, and privacy, security and safety.',
      es: 'Define principios nacionales para la IA generativa en colegios, incluyendo enseñanza y aprendizaje, bienestar humano y social, transparencia, equidad, rendición de cuentas, y privacidad, seguridad y protección.',
    },
    implication: {
      en: 'The prototype maps its controls — identity, auditability, configurable behaviour — to the principles schools are already expected to meet.',
      es: 'El prototipo alinea sus controles —identidad, trazabilidad, comportamiento configurable— con los principios que los colegios ya deben cumplir.',
    },
  },
];
