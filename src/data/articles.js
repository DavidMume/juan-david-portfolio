// Opinion / editorial articles — distinct from src/data/projects.js.
// Articles are internal editorial pages. analysisUrl points to the verified
// technical analysis, live report or full editorial experience related to it.

export const articles = [
  {
    id: 'impuesto-saludable-ideologia-datos',
    slug: 'impuesto-saludable-ideologia-datos',
    title: {
      es: '¿“Puramente ideológico”? Restrepo dice que es ideología. Los datos dicen otra cosa.',
      en: '"Purely ideological"? Restrepo calls it ideology. The data says otherwise.',
    },
    subtitle: {
      es: 'Una revisión de la teoría económica, la evidencia internacional y los primeros datos disponibles en Colombia sobre precios, consumo y recaudo.',
      en: 'A review of the economic theory, international evidence and Colombia’s early data on prices, consumption and tax revenue.',
    },
    excerpt: {
      es: 'Un recorrido editorial por la teoría, la evidencia y los primeros datos sobre el impuesto saludable en Colombia, con cuidado de no confundir descripción con causalidad.',
      en: 'An editorial walk-through of theory, evidence and early Colombian data on the healthy tax, with care not to confuse description with causality.',
    },
    date: { en: 'July 30, 2026', es: '30 de julio de 2026' },
    updatedAt: { en: 'July 30, 2026', es: '30 de julio de 2026' },
    category: { en: 'Economics and public policy', es: 'Economía y política pública' },
    readingTime: { en: '11 min read', es: '11 min de lectura' },
    author: 'Juan David Muñoz',
    status: { en: 'Published', es: 'Publicado' },
    tags: ['Colombia', 'Fiscal policy', 'Healthy tax', 'Public health', 'DANE', 'DIAN', 'Economics', 'Data'],
    projectUrl: 'https://juandamunoz.com/impuesto-saludable/',
    sourcesUrl: 'https://juandamunoz.com/impuesto-saludable/#sources',
    repoUrl: 'https://github.com/DavidMume/impuesto-saludable',
    featured: true,
    language: 'es',
    seo: {
      es: {
        title: 'Impuesto saludable: ¿ideología o política basada en evidencia?',
        description: 'Una revisión de la teoría económica, la evidencia internacional y los primeros datos disponibles sobre el impuesto saludable en Colombia.',
      },
      en: {
        title: 'Healthy tax: ideology or evidence-based policy?',
        description: 'A review of the economic theory, international evidence and Colombia’s early data on the healthy tax.',
      },
      image: '/images/articles/impuesto-saludable-editorial.png',
    },
    image: '/images/articles/impuesto-saludable-editorial.png',
    imageAlt: {
      es: 'Ilustración editorial sobre el impuesto saludable en Colombia: una botella de bebida azucarada frente al mapa del país, sellos negros de exceso de azúcares, calorías y sodio, una gráfica económica y un símbolo de salud cardiovascular.',
      en: 'Editorial illustration of Colombia’s healthy tax: a sugary drink bottle in front of the country’s map, black warning labels for excess sugar, calories and sodium, an economic chart and a cardiovascular health symbol.',
    },
    imageCaption: {
      es: 'El impuesto saludable combina objetivos fiscales y de salud pública mediante gravámenes a bebidas azucaradas y productos ultraprocesados.',
      en: 'Colombia’s healthy tax combines fiscal and public-health goals through levies on sugary drinks and ultra-processed products.',
    },
    projectCard: {
      es: {
        eyebrow: 'Este artículo hace parte de una investigación con datos',
        title: 'El artículo y el proyecto técnico se leen juntos',
        body: 'La pieza editorial resume el argumento. El proyecto de datos documenta metodología, literatura, fuentes, gráficos, límites y archivos procesados para que la revisión sea auditable.',
      },
      en: {
        eyebrow: 'This article is part of a data-driven research project',
        title: 'The editorial and the technical project are meant to be read together',
        body: 'The article frames the argument. The data project documents methodology, literature, sources, charts, limits and processed files so the review can be audited.',
      },
    },
    highlights: {
      es: [
        {
          value: '48,1%',
          label: 'de los nuevos casos de diabetes tipo 2 atribuibles a bebidas azucaradas en Colombia',
          note: 'Lara-Castor et al., Nature Medicine (2025). Atribución modelada, no efecto del impuesto.',
        },
        {
          value: '23,0%',
          label: 'de los nuevos casos de enfermedad cardiovascular atribuibles a bebidas azucaradas en Colombia',
          note: 'Lara-Castor et al., Nature Medicine (2025). Atribución modelada, no efecto del impuesto.',
        },
        {
          value: '24,6% → 22,6%',
          label: 'consumo diario de bebidas azucaradas en jóvenes de 12 a 28 años, según ANIF con base en ECV',
          note: 'Cambio descriptivo entre 2022 y 2024; no es una estimación causal.',
        },
        {
          value: '$1,6 billones',
          label: 'recaudo acumulado a mayo de 2025 reportado por ANIF para los impuestos saludables',
          note: 'Recaudo agregado reportado por ANIF; no prueba impacto en salud.',
        },
      ],
      en: [
        {
          value: '48.1%',
          label: 'of new type 2 diabetes cases in Colombia attributable to sugar-sweetened beverages',
          note: 'Lara-Castor et al., Nature Medicine (2025). Modelled attribution, not a tax effect.',
        },
        {
          value: '23.0%',
          label: 'of new cardiovascular disease cases in Colombia attributable to sugar-sweetened beverages',
          note: 'Lara-Castor et al., Nature Medicine (2025). Modelled attribution, not a tax effect.',
        },
        {
          value: '24.6% → 22.6%',
          label: 'daily SSB consumption among ages 12 to 28, as reported by ANIF using ECV microdata',
          note: 'Descriptive change between 2022 and 2024; not a causal estimate.',
        },
        {
          value: 'COP 1.6tn',
          label: 'healthy-tax revenue accumulated through May 2025, as reported by ANIF',
          note: 'Aggregate revenue reported by ANIF; not evidence of a health effect.',
        },
      ],
    },
    methodologyNote: {
      es: 'Estos indicadores son descriptivos. No constituyen por sí solos una estimación causal del efecto del impuesto.',
      en: 'These indicators are descriptive and do not, on their own, constitute a causal estimate of the tax’s effect.',
    },
    sources: [
      {
        id: 'caracol-restrepo-2026-06-12',
        title: {
          es: 'Caracol Radio — declaración de José Manuel Restrepo sobre eliminar el impuesto saludable',
          en: 'Caracol Radio — José Manuel Restrepo on abolishing the healthy tax',
        },
        url: 'https://caracol.com.co/2026/06/12/vamos-a-eliminar-el-impuesto-saludable-formula-vicepresidencial-de-abelardo-de-la-espriella/',
        note: {
          es: 'Usado para contextualizar la frase y la fecha de la entrevista.',
          en: 'Used to contextualise the quote and the interview date.',
        },
      },
      {
        id: 'caracol-restrepo-2026-07-02',
        title: {
          es: 'Caracol Radio — Restrepo ya era referido como vicepresidente electo en el empalme',
          en: 'Caracol Radio — Restrepo was already being described as vice president elect during the transition',
        },
        url: 'https://caracol.com.co/2026/07/02/restrepo-pide-al-gobierno-petro-no-radicar-la-reforma-tributaria-y-priorizar-un-empalme-transparente/?primarySection=%2Factualidad',
        note: {
          es: 'Usado para el contexto político posterior al comentario.',
          en: 'Used for the political context after the comment.',
        },
      },
      {
        id: 'efe-gomez-2026-07-01',
        title: {
          es: 'EFE — designación de Miguel Gómez Martínez como ministro de Hacienda',
          en: 'EFE — Miguel Gómez Martínez appointed as finance minister',
        },
        url: 'https://efe.com/mundo/2026-07-01/miguel-gomez-ministro-hacienda-colombia-de-la-espriella/',
        note: {
          es: 'Usado para verificar el nombramiento ministerial.',
          en: 'Used to verify the ministerial appointment.',
        },
      },
      {
        id: 'law-2277-dian',
        title: {
          es: 'DIAN / SUIN — Ley 2277 de 2022 y entrada en vigor de los impuestos saludables',
          en: 'DIAN / SUIN — Law 2277 of 2022 and the entry into force of the healthy taxes',
        },
        url: 'https://normograma.dian.gov.co/dian/compilacion/docs/ley_2277_2022.htm',
        note: {
          es: 'Usado para la fecha de entrada en vigor y el diseño legal.',
          en: 'Used for the effective date and legal design.',
        },
      },
      {
        id: 'nature-medicine-lara-castor-2025',
        title: {
          es: 'Lara-Castor et al. (2025) — carga atribuible a bebidas azucaradas en 184 países',
          en: 'Lara-Castor et al. (2025) — SSB-attributable burden across 184 countries',
        },
        url: 'https://www.nature.com/articles/s41591-024-03345-4',
        note: {
          es: 'Usado para las cifras de 48,1% y 23,0% en Colombia.',
          en: 'Used for the 48.1% and 23.0% figures for Colombia.',
        },
      },
      {
        id: 'anif-2025-07-21',
        title: {
          es: 'ANIF — impuestos saludables: qué ha pasado desde su implementación',
          en: 'ANIF — what has happened since the healthy taxes were implemented',
        },
        url: 'https://www.anif.com.co/informe-semanal/impuestos-saludables-que-ha-pasado-desde-su-implementacion/',
        note: {
          es: 'Usado para consumo, inflación y recaudo descriptivos.',
          en: 'Used for descriptive consumption, inflation and revenue figures.',
        },
      },
      {
        id: 'dane-ecv-2024',
        title: {
          es: 'DANE — Encuesta Nacional de Calidad de Vida 2024',
          en: 'DANE — Quality of Life Survey 2024',
        },
        url: 'https://microdatos.dane.gov.co/index.php/catalog/861/study-description',
        note: {
          es: 'Usado para documentar la pregunta de consumo de bebidas azucaradas.',
          en: 'Used to document the sugar-sweetened beverage consumption question.',
        },
      },
    ],
    content: {
      es: [
        {
          type: 'paragraph',
          text: 'El 12 de junio de 2026, en entrevista con Caracol Radio, José Manuel Restrepo dijo que el impuesto saludable era una medida “puramente ideológica”. Lo dijo cuando era la fórmula vicepresidencial de Abelardo de la Espriella. Después, la conversación política se movió rápido: el 2 de julio Caracol Radio ya lo describía como vicepresidente electo, y Miguel Gómez Martínez, ministro de Hacienda designado, empezó a hablar de una reforma que simplificaría la estructura tributaria. Lo que en campaña sonaba a opinión hoy ya se parece bastante a agenda de gobierno.',
        },
        {
          type: 'paragraph',
          text: 'Yo no tomo “ideológico” como un insulto. Lo tomo como una afirmación que se puede comprobar. Y, para este caso, la pregunta no es si el impuesto resulta incómodo. La pregunta es si tiene fundamento económico, si responde a un problema de salud pública real y si los primeros datos disponibles se mueven en la dirección que uno esperaría.',
        },
        {
          type: 'paragraph',
          text: 'Así que me fui a revisar la Ley 2277, la literatura internacional, los documentos técnicos del proyecto y los datos disponibles del DANE y la DIAN. Este artículo resume esa lectura. El proyecto completo —con metodología, fuentes, gráficos y límites— está documentado aparte, precisamente para que la discusión no quede en opinión suelta.',
        },
        {
          type: 'heading',
          text: 'Un impuesto no es un capricho: es una herramienta',
        },
        {
          type: 'paragraph',
          text: 'En economía, un impuesto no es solo una forma de recaudar. También puede corregir una externalidad negativa: cuando el consumo de un producto genera costos para terceros, esos costos no siempre quedan reflejados en el precio final. En salud pública eso importa mucho, porque parte del costo de la enfermedad termina siendo asumido por el sistema de salud y, en Colombia, por todos los contribuyentes.',
        },
        {
          type: 'paragraph',
          text: 'El impuesto saludable entra en esa familia de políticas. No es una prohibición, y tampoco pretende moralizar el consumo. Busca que el precio incorpore parte del costo social que hoy no se ve en la caja registradora. Esa es la lógica de los impuestos pigouvianos: no eliminar una decisión, sino hacerla un poco más fiel a sus consecuencias.',
        },
        {
          type: 'heading',
          text: 'La elasticidad, o por qué el diseño importa',
        },
        {
          type: 'paragraph',
          text: 'La discusión seria no es si los impuestos cambian el comportamiento. Claro que lo hacen. La discusión es cuánto, en qué productos, para quién y con qué sustituciones. Por eso importa la elasticidad precio de la demanda: algunos bienes reaccionan poco; otros, mucho. Y por eso también importa el diseño colombiano, que no grava todo por igual sino que escalona la tarifa según el contenido de azúcar o el perfil del producto.',
        },
        {
          type: 'paragraph',
          text: 'Ese diseño abre dos caminos. El consumidor puede moverse hacia alternativas menos gravadas. Y el productor puede reformular. Eso no prueba por sí solo que el impuesto “funcionó”, pero sí muestra que la política cambia incentivos reales, no solo símbolos.',
        },
        {
          type: 'heading',
          text: 'El costo en salud ya estaba aquí',
        },
        {
          type: 'paragraph',
          text: 'La literatura internacional tampoco parte de cero. Lara-Castor et al., en Nature Medicine, estimaron que Colombia tiene la mayor carga atribuible a bebidas azucaradas entre los 30 países más poblados: 48,1% de los nuevos casos de diabetes tipo 2 y 23,0% de los nuevos casos de enfermedad cardiovascular. Esa no es una estimación del impuesto. Es una medida de la carga de enfermedad atribuible al consumo de bebidas azucaradas.',
        },
        {
          type: 'paragraph',
          text: 'La diferencia importa. Una cosa es decir que el impuesto explica esos porcentajes. Otra, muy distinta, es decir que el país ya cargaba con un problema serio de salud pública que hacía razonable discutir una política de este tipo. Yo me quedo con la segunda afirmación, porque es la que sí está soportada por la evidencia.',
        },
        {
          type: 'quote',
          text: 'Un impuesto puede ser incómodo. Ideológico es eliminarlo sin mirar los datos.',
        },
        {
          type: 'heading',
          text: '¿Y qué ha pasado desde noviembre de 2023?',
        },
        {
          type: 'paragraph',
          text: 'Aquí es donde el debate se vuelve más interesante, porque ya hay datos. ANIF reportó que, entre 2022 y 2024, el consumo diario de bebidas azucaradas cayó de 24,6% a 22,6% entre jóvenes de 12 a 28 años, y de 24,9% a 19,2% entre adultos de 29 a 44 años. También reportó picos de inflación anual de 20,7% en frituras de paquete y 13,7% en gaseosas y maltas después de la entrada en vigor.',
        },
        {
          type: 'paragraph',
          text: 'Además, ANIF reportó un recaudo acumulado de $1,6 billones a mayo de 2025 para los impuestos saludables. Eso confirma que el impuesto existe y recauda. No confirma, por sí solo, un efecto causal en salud ni separa su impacto de otros choques de precios, de la inflación alimentaria o de las dinámicas generales del consumo.',
        },
        {
          type: 'quote',
          text: 'Lo que no tiene todavía es una evaluación causal rigurosa. Eso no lo convierte en ideológico. Lo convierte en una política plausible pendiente de medición.',
        },
        {
          type: 'heading',
          text: 'La objeción seria no es la ideología: es la regresividad',
        },
        {
          type: 'paragraph',
          text: 'Si alguien quiere criticar este impuesto con seriedad, el mejor argumento no es que sea ideológico. El mejor argumento es que puede ser regresivo: que golpea proporcionalmente más el bolsillo de los hogares de menores ingresos. Ese riesgo existe y merece tomarse en serio.',
        },
        {
          type: 'paragraph',
          text: 'Pero ahí mismo aparece la otra cara de la discusión. Si los hogares con menos ingreso reaccionan más al precio, también podrían ser los que más cambien su consumo. Y si el consumo baja en los grupos con mayor exposición al riesgo, la política puede tener beneficios sanitarios que todavía no sabemos medir bien con el nivel de evidencia disponible.',
        },
        {
          type: 'heading',
          text: 'Lo que viene: eliminar sin medir',
        },
        {
          type: 'paragraph',
          text: 'El nuevo gobierno ya anunció que quiere simplificar el sistema tributario. El problema no es simplificar. El problema es simplificar a ciegas. Eliminar el impuesto sin mirar el conjunto de datos —precios, consumo, recaudo, carga de enfermedad y efectos distributivos— sería tan ideológico como la acusación que se le hace al impuesto.',
        },
        {
          type: 'paragraph',
          text: 'Mi lectura, después de revisar la evidencia, es simple: el impuesto saludable tiene una justificación económica y de salud pública seria, un diseño mejor de lo que a veces se le reconoce y unos primeros datos que van en la dirección esperada. Lo que todavía no tiene es una evaluación causal robusta. Eso no lo vuelve un capricho ideológico. Lo vuelve una política plausible que todavía espera medición rigurosa.',
        },
        {
          type: 'paragraph',
          text: 'La discusión completa —ley, literatura, datos, metodología, fuentes y límites— está documentada en el proyecto de datos vinculado más abajo. Esa parte importa tanto como el editorial, porque sin trazabilidad el debate se vuelve puro ruido.',
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'On 12 June 2026, José Manuel Restrepo told Caracol Radio that the healthy tax was “purely ideological”. He said it while he was Abelardo de la Espriella’s running mate. The political conversation moved quickly after that: by 2 July, Caracol Radio was already describing him as vice president elect, and Miguel Gómez Martínez, the designated finance minister, began talking about a tax reform that would simplify the tax architecture. What sounded like campaign rhetoric is now close to a governing agenda.',
        },
        {
          type: 'paragraph',
          text: 'I do not take “ideological” as an insult. I take it as a claim that can be checked. And on this issue, the real question is not whether the tax is inconvenient. The question is whether it has economic logic, whether it responds to a genuine public-health problem, and whether the first available data move in the direction theory would predict.',
        },
        {
          type: 'paragraph',
          text: 'So I went back to Law 2277, the international literature, the project’s technical notes and the data available from DANE and DIAN. This article is the editorial version of that review. The full project — with methodology, sources, charts and limits — is documented separately so the argument is not left as free-floating opinion.',
        },
        {
          type: 'heading',
          text: 'A tax is not a caprice: it is a tool',
        },
        {
          type: 'paragraph',
          text: 'In economics, a tax is more than a revenue instrument. It can also correct a negative externality: when the consumption of a product creates costs for other people, those costs are not always visible in the sticker price. In health policy that matters, because part of the cost of disease is ultimately absorbed by the health system and, in Colombia, by all taxpayers.',
        },
        {
          type: 'paragraph',
          text: 'That is where the healthy tax belongs. It is not a ban, and it is not a moral sermon. It tries to make the price reflect part of the social cost that does not show up at the cashier. That is the basic logic of Pigouvian taxation: not to eliminate a choice, but to make it more honest about its consequences.',
        },
        {
          type: 'heading',
          text: 'Elasticity, or why design matters',
        },
        {
          type: 'paragraph',
          text: 'The serious debate is not whether taxes change behaviour. They do. The question is by how much, in which products, for whom and through which substitutions. That is why price elasticity matters: some goods barely move when prices rise, while others fall much more quickly. It is also why the Colombian design matters, because it does not levy a flat rate. It scales the tax according to sugar content and product profile.',
        },
        {
          type: 'paragraph',
          text: 'That design opens two channels. Consumers may shift toward less taxed alternatives. Producers may reformulate. Neither of those outcomes proves the tax “worked” by itself, but both show that the policy changes real incentives, not just symbols.',
        },
        {
          type: 'heading',
          text: 'The health cost was already here',
        },
        {
          type: 'paragraph',
          text: 'The international literature does not start from zero either. Lara-Castor et al., in Nature Medicine, estimated that Colombia has the highest SSB-attributable burden among the 30 most populous countries: 48.1% of new type 2 diabetes cases and 23.0% of new cardiovascular disease cases. That is not a tax-effect estimate. It is a measure of disease burden attributable to sugary drink consumption.',
        },
        {
          type: 'paragraph',
          text: 'That distinction matters. It is one thing to say the tax explains those percentages. It is something else entirely to say the country was already carrying a serious public-health problem that made this type of policy worth debating. I stick to the second claim, because it is the one supported by the evidence.',
        },
        {
          type: 'quote',
          text: 'A tax can be uncomfortable. What is ideological is to abolish it without looking at the data.',
        },
        {
          type: 'heading',
          text: 'What has happened since November 2023?',
        },
        {
          type: 'paragraph',
          text: 'This is where the discussion gets more interesting, because there is already data. ANIF reported that between 2022 and 2024 daily sugary-drink consumption fell from 24.6% to 22.6% among people aged 12 to 28, and from 24.9% to 19.2% among adults aged 29 to 44. It also reported annual inflation peaks of 20.7% in packaged fried snacks and 13.7% in sodas and malt beverages after the law took effect.',
        },
        {
          type: 'paragraph',
          text: 'ANIF also reported COP 1.6 trillion in accumulated revenue through May 2025 for the healthy taxes. That confirms the tax exists and raises revenue. It does not, by itself, prove a causal health effect, and it does not separate the tax from broader food inflation, other price shocks or the general dynamics of consumption.',
        },
        {
          type: 'quote',
          text: 'It still does not have a rigorous causal evaluation. That does not make it ideological. It makes it a plausible policy still waiting to be measured.',
        },
        {
          type: 'heading',
          text: 'The serious objection is not ideology: it is regressivity',
        },
        {
          type: 'paragraph',
          text: 'If someone wants to criticise this tax seriously, the best argument is not that it is ideological. The strongest argument is that it may be regressive: that it hits lower-income households harder in proportional terms. That risk is real and deserves to be taken seriously.',
        },
        {
          type: 'paragraph',
          text: 'But the other side of the debate appears right away. If lower-income households are more price-sensitive, they may also be the ones most likely to change consumption. And if consumption falls in the groups with the highest risk exposure, the policy may produce health benefits that we still do not know how to measure cleanly at this stage.',
        },
        {
          type: 'heading',
          text: 'What comes next: abolishing without measuring',
        },
        {
          type: 'paragraph',
          text: 'The incoming government has already said it wants to simplify the tax system. The problem is not simplification itself. The problem is simplifying blindly. Scrapping the tax without looking at the full set of data — prices, consumption, revenue, disease burden and distributional effects — would be as ideological as the accusation made against the tax.',
        },
        {
          type: 'paragraph',
          text: 'My reading after going through the evidence is straightforward: the healthy tax has a serious economic and public-health rationale, a better design than it often gets credit for, and early data that move in the expected direction. What it still lacks is a robust causal evaluation. That does not make it a dogma. It makes it a plausible policy still waiting for proper measurement.',
        },
        {
          type: 'paragraph',
          text: 'The full discussion — law, literature, data, methodology, sources and limitations — is documented in the linked data project below. That part matters as much as the editorial argument, because without traceability the debate collapses into noise.',
        },
      ],
    },
  },
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
