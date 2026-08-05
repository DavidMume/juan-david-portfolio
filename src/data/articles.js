// Opinion / editorial articles — distinct from src/data/projects.js.
// Articles are internal editorial pages. analysisUrl points to the verified
// technical analysis, live report or full editorial experience related to it.

const threePagePlanSpanishContent = [
  { type: 'heading', text: 'Una nota antes de empezar' },
  'Este artículo nació como un ejercicio privado. La intención original era compartirlo con uno o dos amigos que quisieran leerlo, sin más pretensión que esa. El punto de partida fue una incomodidad concreta: el programa de gobierno de Iván Cepeda tiene 433 páginas. No creo que ni el cinco por ciento de las personas que votan por él lo hayan leído completo, y francamente no sé cómo culparlos. Es un documento extenso, denso, técnico, escrito para un lector con tiempo, formación y disposición para procesar ese volumen de información. Al compararlo superficialmente con el documento de tres páginas de Abelardo de la Espriella, la diferencia visual es inmediata y, para algunos, fulminante: uno parece un candidato serio y el otro un improvisado.',
  { type: 'quote', text: 'El problema es que esa lectura es exactamente la que no hay que hacer.' },
  'El análisis de procesamiento de lenguaje natural que hice sobre los pilares programáticos de De la Espriella —disponible en github.com/DavidMume/patria-milagro-analysis me llevó a una pregunta más interesante que la de quién tiene más páginas: ¿para qué sirven realmente los planes de gobierno durante una campaña electoral?',
  { type: 'heading', text: 'Una confusión de fondo: el plan de gobierno no es el PND' },
  'Hay una confusión que vale la pena nombrar antes de seguir: muchas personas equiparan el plan de gobierno de campaña con el Plan Nacional de Desarrollo, como si fueran el mismo documento con distinto nombre. No lo son, y la diferencia importa.',
  'El Plan Nacional de Desarrollo es un instrumento técnico y jurídico que el gobierno electo debe presentar formalmente, que pasa por el Congreso, que tiene marcos fiscales vinculantes y que orienta la inversión pública durante el cuatrienio. Es, por diseño, un documento de Estado: estructurado, extenso, referenciado y evaluable con indicadores concretos.',
  'El plan de gobierno de campaña es otra cosa. Es, simultáneamente, un documento técnico y un instrumento de comunicación política. Tiene que ser lo suficientemente serio para resistir el escrutinio de expertos, pero también lo suficientemente legible para que un elector sin formación especializada entienda qué se le está ofreciendo. Pedirle a un documento de campaña la densidad de un PND es razonable si uno quiere analizar el proyecto. Pedirle que sea leído por los cuarenta millones de colombianos con distintos niveles educativos y condiciones socioeconómicas para que puedan comparar candidatos antes de votar es, en cambio, una expectativa desconectada de la realidad.',
  'Los planes de gobierno no están hechos para ser leídos por el electorado en su totalidad. Están hechos para fijar una dirección, para que los equipos técnicos y los periodistas especializados los examinen, y para que el candidato sea responsabilizado por sus promesas una vez en el poder. La decisión electoral de la mayoría de los votantes no pasa por ese documento: pasa por la experiencia acumulada, por la identificación con un proyecto político, por el contexto social en que cada persona vive, y por una evaluación —muchas veces intuitiva y legítima— de quién representa mejor sus intereses.',
  { type: 'heading', text: 'La crítica más repetida al programa de De la Espriella es que cabe en tres páginas' },
  'Y tiene algo de razón: existe un documento llamado Primeras 13 propuestas para reconstruir la Patria Milagro que, efectivamente, no supera ese número de páginas. El problema con esa crítica es que toma la parte por el todo.',
  { type: 'quote', text: 'El documento de tres páginas no es el programa. Es la tarjeta de presentación del programa.' },
  'Esto importa por una razón metodológica elemental: si uno critica o apoya un proyecto político basándose exclusivamente en su resumen ejecutivo, no está analizando el proyecto. Está analizando su packaging.',
  { type: 'heading', text: 'El documento de tres páginas como pieza de comunicación' },
  'El documento corto cumple una función específica: presentar en un formato digerible los grandes ejes del proyecto para un público general que no va a leer el corpus completo de pilares programáticos. Eso no es una debilidad exclusiva de este candidato. Todos los proyectos políticos tienen materiales de distinto nivel de abstracción: el video de treinta segundos, el folleto de campaña, el programa técnico y el documento doctrinal. Confundir el folleto con el programa técnico es un error de lectura, no una conclusión política.',
  'Y hay un dato que lo confirma. Cuando se aplica el índice de legibilidad de Fernández Huerta (1959) —la adaptación calibrada para español de la escala Flesch— al corpus completo de los Pilares, el puntaje resultante ronda los 51,9 puntos. Eso equivale a dificultad de texto universitario o revista especializada: no es ilegible, pero está un escalón por encima de lo que la mayoría de personas lee cómodamente. Para dar una referencia concreta: un periódico popular ronda entre 65 y 70 puntos; un contrato legal cae por debajo de 30.',
  'Lo que eso significa, en términos políticos, es que el programa completo no está escrito para cualquier lector. Está escrito para quien tenga el tiempo, la formación y la disposición para procesar un texto técnico-político denso. El resumen de tres páginas no existe porque el equipo del candidato no sepa hacer programas. Existe porque entiende que la mayoría del electorado no va a leer un documento universitario, y necesita una versión que pueda conectar con ellos sin exigirles lo que no tienen: ni el tiempo, ni el vocabulario, ni la paciencia para el texto largo.',
  'Eso no absuelve al resumen de sus limitaciones. Pero cambia el diagnóstico: no es evidencia de superficialidad programática. Es evidencia de una estrategia de comunicación escalonada, donde cada capa habla a un público distinto. Fue, en términos de marketing político, una jugada bien pensada: hizo que sus ideas fueran más visibles y accesibles para más personas. Si detrás de ese resumen hay demagogia o propuestas genuinamente sostenibles, es algo que el tiempo —y los hechos— se encargarán de responder. Tengo mis propias dudas sobre algunas promesas concretas, como las diez cárceles nuevas; en otras, el programa es más preciso y ofrece datos concretos.',
  'Lo que sí merece análisis es qué tan coherente es el programa técnico con la promesa política del folleto, y eso solo se puede responder leyendo el programa completo.',
  { type: 'heading', text: 'El corpus real: cinco capas documentales' },
  'Al revisar el material disponible en defensoresdelapatria.com, el proyecto programático de De la Espriella se distribuye en al menos cinco capas documentales con funciones distintas.',
  'La primera es la capa narrativa e ideológica: los textos "Firmes por la Patria", "Defender la Patria para salvarla" y "Extrema Coherencia" no contienen propuestas técnicas sino el marco moral desde el cual se presentan todas las demás. La segunda es la capa de diagnóstico político: el texto "La hora oscura de la Patria" define al enemigo, describe la amenaza y establece la urgencia histórica de la candidatura. La tercera es la capa programática sectorial: los pilares temáticos de seguridad, anticorrupción, salud, economía, campo, mujeres, educación, cultura, energía, medio ambiente y bienestar animal. La cuarta es la capa territorial: el documento El Milagro del Valle del Cauca, de 47 páginas. La quinta, y última, es el resumen ejecutivo: las tres páginas que circulan en redes.',
  'La diferencia de densidad entre capas es significativa. El pilar de seguridad, por ejemplo, describe una doctrina completa: comandos conjuntos operacionales en regiones críticas, diez nuevas cárceles aisladas sin señal de comunicaciones financiadas con participación privada, un nuevo Cuerpo Nacional de Prisión que reemplaza al INPEC, un Bloque de Búsqueda contra la Extorsión, fumigación aérea desde el primer día de gobierno y una exigencia de diez capturas de blancos de alto valor en los primeros noventa días. Nada de esto aparece en el documento de tres páginas.',
  { type: 'heading', text: 'El modelo económico: más cercano al ajuste que al populismo' },
  'Leídos los pilares completos, el modelo económico que propone De la Espriella es relativamente identificable, aunque no exento de tensiones internas.',
  'El diagnóstico de partida es una distinción importante: Colombia no sería un país pobre, sino un país empobrecido por corrupción, violencia, desgobierno, centralismo y mediocridad sistemática. Esta distinción no es retórica: implica que el problema no es estructural del modelo económico sino del Estado y la clase política que lo ha capturado. La solución, en consecuencia, no pasa por transformar el modelo sino por limpiarlo.',
  'El rol del mercado en esta visión es predominante: desregulación, política de "una regulación entra y dos salen", reducción del Estado hasta en una cuarta parte, superávit fiscal primario, simplificación tributaria, fusión de entidades, DIAN con inteligencia artificial. Los sectores priorizados son hidrocarburos y gas (Ecopetrol como activo estratégico), minería legal de oro, cobre, plata y tierras raras, agroindustria en la altillanura, turismo sostenible, energía renovable y energía nuclear.',
  'El rol del Estado es subsidiario en economía pero fuerte en seguridad, anticorrupción e infraestructura. No es un Estado mínimo libertario: hay un plan de choque en salud de $10 billones, vivienda con crédito al 2% a treinta años, subsidio de maternidad, Escuela de Emprendedores Rurales y atención a tres millones de campesinos.',
  'Aquí aparece la primera tensión sin resolver: el candidato promete simultáneamente reducir el Estado en una cuarta parte, destinar $10 billones a salud, construir diez nuevas cárceles, fortalecer la Fuerza Pública y reducir la carga tributaria. No hay una propuesta de financiamiento integrada que muestre cómo se reconcilian estos compromisos. En economía, cuando se prometen cuatro cosas que cuestan y solo una que ahorra, la aritmética fiscal merece explicación.',
  'La segunda tensión es entre el horizonte técnico y el horizonte político. El blockchain en contratación pública llega en 2030; los resultados de seguridad, en los primeros noventa días. Los ciclos cortos en inteligencia artificial se implementarán en universidades; la fumigación aérea comienza el primer día. Esta asimetría no es necesariamente incoherente, pero el lector exigente debería preguntar qué herramientas concretas están disponibles hoy para cumplir las promesas de corto plazo.',
  'La tercera tensión es jurídica: la promesa de iniciar fumigaciones aéreas desde el día uno choca con el marco de consulta previa y licencias ambientales que el propio candidato reconoce como cuellos de botella en su sección de política energética. El derecho constitucional no se suspende por decisión presidencial el día de posesión.',
  { type: 'heading', text: 'La clave que el resumen no muestra' },
  'Hay un elemento del programa que no aparece en las tres páginas pero que es, posiblemente, el más importante para entender todo lo demás: la "Extrema Coherencia".',
  'No es una consigna. Es el fundamento moral explícito del proyecto, y su referencia es la Doctrina Social de la Iglesia. El texto afirma que la crisis de Colombia es, en su raíz más profunda, una crisis de sentido: de haber separado el poder de la conciencia, la economía de la moral, la acción pública de todo deber superior. La solución no es técnica sino moral: reconciliar principios y política, economía y responsabilidad, poder y servicio.',
  'Esto tiene implicaciones analíticas relevantes. El proyecto no se puede leer solo como un programa de ajuste fiscal con un componente de seguridad democrática. Tiene una arquitectura moral completa, con raíces filosóficas explícitas, que informa el tono, el lenguaje y los límites de las propuestas concretas. Ignorar esa capa es perder la clave de lectura del conjunto.',
  { type: 'heading', text: 'Un sector de la política colombiana que "sabe algo que el resto no sabe"' },
  'Este ejercicio dejó también una reflexión que no quiero omitir, aunque salga del análisis documental estricto.',
  'En el proceso de compartir estas notas, recibí el calificativo de ignorante de parte de personas que no comparten las ideas que estaba analizando. Es un patrón que me parece más revelador que cualquier índice de legibilidad: hay un sector de la política colombiana —y esto se ve más en la izquierda, aunque no es exclusivo de ella— que opera bajo la convicción de que quienes no piensan igual simplemente no saben. Que ellos, en cambio, sí saben — y no solo eso: que saben algo que únicamente ellos pueden ver, una verdad a la que los demás simplemente no hemos llegado. Que la diferencia de posición política es un déficit cognitivo, no una diferencia legítima de valores, experiencias e intereses.',
  'Hay dos tipos de ignorancia. Una es no saber algo porque nunca se tuvo acceso a esa información — esa ignorancia es involuntaria, y sobre ella no hay juicio moral posible. La otra es ignorar la realidad del otro: no porque no haya tenido oportunidad de conocerla, sino porque se ha decidido, consciente o inconscientemente, no reconocerla. Esa segunda ignorancia no es un vacío de información. Es una elección.',
  'Para mí, llamarle ignorante a quien piensa distinto es, con frecuencia, exactamente ese segundo tipo: no la ausencia de información, sino la negativa a reconocer que la experiencia del otro es tan real y tan válida como la propia.',
  'Cada persona toma sus decisiones políticas desde la vida que ha vivido. Quienes han crecido en regiones golpeadas por el conflicto armado, en condiciones de pobreza estructural o con una historia de desprotección estatal tienen razones concretas para votar por la izquierda. No es irracionalidad: es coherencia con su experiencia. Y lo mismo aplica en sentido contrario: hay quienes, dadas sus condiciones y trayectoria, encuentran en los ideales de la derecha o en un candidato particular una representación más cercana a sus intereses. Eso no los hace más ignorantes. Los hace personas que votan desde donde están parados.',
  'Esto me llevó, de algún modo, a entender mejor por qué terminé apoyando a Paloma Valencia en primera vuelta, junto a quienes proponían el lema de que es posible pensar distinto y trabajar juntos. No porque esté completamente convencido de cada una de sus posiciones, sino porque ese principio me parece la única base funcional para una democracia que no se destruya a sí misma desde adentro.',
  { type: 'heading', text: 'Conclusión: el análisis serio empieza donde el folleto termina' },
  'Lo que también quedó claro en este ejercicio fue el alcance de la desinformación. Vi circular con entusiasmo comparaciones entre "el plan de gobierno de 400 páginas" y "el plan de gobierno de 3 páginas", presentadas como evidencia definitiva de quién era el candidato serio. El problema: las personas que hacían esa comparación generalmente no habían leído ninguno de los dos. El de 400 páginas lo citaban como símbolo de seriedad; el de 3 lo citaban como prueba de superficialidad. Y ninguno de los dos documentos era exactamente lo que esa narrativa decía que era.',
  'Así funciona la política en Colombia hoy: no a través de los programas, sino a través de las narrativas sobre los programas. No a través de las propuestas, sino a través de la percepción de las propuestas.',
  'Decir que el plan de gobierno de Abelardo de la Espriella cabe en tres páginas es técnicamente cierto y analíticamente insuficiente. El proyecto real —con sus virtudes, sus tensiones y sus ambigüedades— requiere leer los pilares completos, contrastar las cifras con fuentes externas y evaluar la coherencia interna entre el diagnóstico, las propuestas y la visión económica.',
  'Eso no es un ejercicio de simpatía ni de hostilidad. Es el mínimo que merece cualquier proyecto político que aspire a gobernar un país. Los planes de gobierno deben ser leídos por lo que dicen, no por su extensión. La manera en que hacemos política en Colombia tiene que cambiar. Ese cambio, lamentablemente, no llegará en esta generación. Pero empieza con lecturas más honestas y con menos certezas sobre la ignorancia del otro.',
  { type: 'quote', text: 'Tres páginas es un índice. El análisis comienza en la página cuatro.' },
  'Este artículo es parte de un análisis documental más amplio disponible en github.com/DavidMume/patria-milagro-analysis.',
];

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
      es: 'Un repaso de la teoría, la evidencia y los primeros datos del impuesto saludable en Colombia, sin confundir descripción con causalidad.',
      en: 'A reading of the theory, the evidence and the first Colombian data on the healthy tax, without confusing description with causality.',
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
          text: 'Hace unas semanas escuché a José Manuel Restrepo decir, en una entrevista con Caracol Radio, que el impuesto saludable es un impuesto que “terminaron poniendo por una razón puramente ideológica”. Y prometió eliminarlo. Cuando lo dijo, era la fórmula vicepresidencial de Abelardo de la Espriella. Hoy es el vicepresidente electo de Colombia, y el ministro de Hacienda designado, Miguel Gómez Martínez, ya confirmó que el nuevo gobierno tramitará una reforma tributaria para que la DIAN pase de recaudar 15 impuestos a solo tres: renta, IVA e IVA externo.',
        },
        {
          type: 'paragraph',
          text: 'Lo que en junio era una opinión de campaña, hoy es una promesa de gobierno.',
        },
        {
          type: 'paragraph',
          text: 'Y aquí va mi confesión: todos tenemos sesgo de confirmación. Yo, el primero. Y, al parecer, José Manuel Restrepo también. Lo entiendo porque, pese a que yo tampoco comparto muchas de las políticas de Gustavo Petro, no me atrevo a decir que este impuesto sea algo meramente ideológico.',
        },
        {
          type: 'paragraph',
          text: '“Ideológico” no es un insulto: es una afirmación. Y las afirmaciones se pueden someter a prueba.',
        },
        {
          type: 'paragraph',
          text: 'Así que me di a la tarea de hacerlo. El ejercicio es honestamente desgastante —implica varias etapas y mucho tiempo—, pero acá estamos, por amor a la verdad y a la economía. Leí la Ley 2277 tal como está formulada: qué grava, con qué tarifas y con qué diseño. Revisé la literatura disponible, verificando qué estudios pasaron por revisión de pares y en qué contextos se hicieron, para saber qué tan aterrizables son sus resultados a Colombia. Y empecé a procesar datos del DANE y de la DIAN.',
        },
        {
          type: 'paragraph',
          text: 'Todo el proceso, con sus fuentes, su metodología y sus límites, está documentado en el sitio del proyecto:',
        },
        {
          type: 'paragraph',
          text: 'Esto fue lo que encontré.',
        },
        {
          type: 'heading',
          text: 'Un impuesto no es un capricho: es una herramienta',
        },
        {
          type: 'paragraph',
          text: 'En macroeconomía, los gobiernos tienen varias herramientas para incidir no solo en la economía, sino también en el comportamiento de las personas. Una de ellas es la política fiscal: a través de los impuestos y del gasto público se busca influir en el crecimiento, la inflación, el empleo y el bienestar social.',
        },
        {
          type: 'paragraph',
          text: 'El impuesto saludable pertenece a una familia particular: la de los impuestos que los economistas llamamos pigouvianos, en honor a Arthur Pigou.',
        },
        {
          type: 'paragraph',
          text: 'La idea es simple. Cuando alguien consume un producto que daña su salud, el costo de esa enfermedad no lo paga solamente esa persona: también lo paga el sistema de salud. Y en Colombia tenemos un sistema de salud universal —algo con lo que Estados Unidos no cuenta, por cierto—, así que ese costo lo terminamos pagando entre todos.',
        },
        {
          type: 'paragraph',
          text: 'En la jerga económica, eso se llama una externalidad negativa: mi decisión de consumo les genera costos a terceros que no participaron en ella.',
        },
        {
          type: 'paragraph',
          text: 'El impuesto busca que el precio del producto refleje una parte de ese costo. Es la misma razón por la que los cigarrillos y el alcohol tienen impuestos altos en casi todo el mundo.',
        },
        {
          type: 'heading',
          text: 'La elasticidad, o por qué el diseño importa',
        },
        {
          type: 'paragraph',
          text: 'A la hora de diseñar este tipo de impuestos, la economía de la salud tiene en cuenta un concepto clave: la elasticidad precio de la demanda.',
        },
        {
          type: 'paragraph',
          text: 'Es, básicamente, un índice de qué tan sensibles somos a los cambios en los precios. Hay bienes que, si suben un poco de precio, ven caer su demanda mucho más de lo esperado. Y hay otros que la gente sigue consumiendo casi sin importar cuánto suban. Las empresas también lo saben.',
        },
        {
          type: 'paragraph',
          text: 'Las elasticidades dependen, además, de los sustitutos disponibles.',
        },
        {
          type: 'paragraph',
          text: 'Aquí el diseño colombiano es más inteligente de lo que sus críticos admiten: el impuesto a las bebidas no es una tarifa plana, sino que está escalonado según los gramos de azúcar por cada 100 mililitros.',
        },
        {
          type: 'paragraph',
          text: 'Eso crea dos incentivos al mismo tiempo: que el consumidor sustituya hacia versiones con menos azúcar —o hacia el agua, que sigue siendo gratis en la llave— y que el productor reformule sus productos para pagar menos impuesto, como ocurrió en el Reino Unido y en Sudáfrica.',
        },
        {
          type: 'paragraph',
          text: 'Porque, a diferencia de la sal, el azúcar añadida no es esencial. Nuestro cuerpo no nos la pide para funcionar. Podemos vivir sin ella.',
        },
        {
          type: 'heading',
          text: 'El costo en salud ya estaba aquí',
        },
        {
          type: 'paragraph',
          text: 'El impuesto no llegó a un país sano.',
        },
        {
          type: 'paragraph',
          text: 'Según un estudio publicado en *Nature Medicine* por Lara-Castor et al., Colombia tiene la mayor carga de diabetes tipo 2 atribuible a bebidas azucaradas entre los 30 países más poblados del mundo: el 48,1% de los casos nuevos de diabetes tipo 2 registrados en 2020 serían atribuibles a estas bebidas.',
        },
        {
          type: 'paragraph',
          text: 'En enfermedad cardiovascular, la cifra es del 23%.',
        },
        {
          type: 'paragraph',
          text: 'Primer puesto en ambas.',
        },
        {
          type: 'paragraph',
          text: 'No es un podio del que uno quiera hacer parte.',
        },
        {
          type: 'paragraph',
          text: 'Y estas enfermedades no son abstractas. La enfermedad isquémica del corazón es la primera causa de muerte en Colombia, según el DANE, y la diabetes se encuentra entre las diez primeras.',
        },
        {
          type: 'heading',
          text: '¿Y qué ha pasado desde noviembre de 2023?',
        },
        {
          type: 'paragraph',
          text: 'Aquí es donde el debate se pone interesante, porque ya hay datos.',
        },
        {
          type: 'paragraph',
          text: 'ANIF —un centro de estudios que nadie acusaría de petrismo— publicó en 2025 un informe sobre lo que ha pasado desde la implementación del impuesto. El informe muestra tres hallazgos.',
        },
        {
          type: 'paragraph',
          text: 'Primero, el impuesto sí se trasladó a los precios. La inflación anual de las frituras de paquete llegó a un pico del 20,7%, mientras que la de las gaseosas y maltas llegó al 13,7% después de la entrada en vigor.',
        },
        {
          type: 'paragraph',
          text: 'Segundo, el consumo diario de bebidas azucaradas cayó entre 2022 y 2024. Pasó del 24,6% al 22,6% entre los jóvenes de 12 a 28 años, y del 24,9% al 19,2% entre los adultos de 29 a 44 años, según la Encuesta Nacional de Calidad de Vida del DANE.',
        },
        {
          type: 'paragraph',
          text: 'La reducción fue más marcada en los hogares de menores ingresos.',
        },
        {
          type: 'paragraph',
          text: 'Tercero, el impuesto recauda: $1,6 billones a mayo de 2025, equivalentes al 1,3% del recaudo total.',
        },
        {
          type: 'paragraph',
          text: 'Ahora, seamos rigurosos, que para eso vinimos: estos son datos descriptivos, no una evaluación causal.',
        },
        {
          type: 'paragraph',
          text: 'La caída del consumo coincide con la entrada en vigor del impuesto y se mueve en la dirección que predice la teoría. Pero nadie ha separado todavía el efecto específico del impuesto de la inflación de alimentos de 2022 y 2023, ni de otros choques que también pudieron afectar las decisiones de consumo.',
        },
        {
          type: 'paragraph',
          text: 'Correlación no implica causalidad. Y ese estándar aplica para los dos bandos: ni Restrepo puede afirmar que el impuesto no sirve, ni sus defensores pueden cantar victoria.',
        },
        {
          type: 'paragraph',
          text: 'Lo que sí podemos decir es que los eslabones de la cadena —impuesto, precios y consumo— se están moviendo como se esperaba.',
        },
        {
          type: 'heading',
          text: 'La objeción seria no es la ideología: es la regresividad',
        },
        {
          type: 'paragraph',
          text: 'Si yo quisiera atacar este impuesto, no diría que es ideológico.',
        },
        {
          type: 'paragraph',
          text: 'Diría que es regresivo: que golpea proporcionalmente más el bolsillo de los hogares pobres, para quienes cada peso pesa más a la hora de decidir qué echar a la olla.',
        },
        {
          type: 'paragraph',
          text: 'Ese es el argumento técnico más fuerte en contra del impuesto, y hay que tomárselo en serio.',
        },
        {
          type: 'paragraph',
          text: 'Pero tiene una contracara.',
        },
        {
          type: 'paragraph',
          text: 'Si los hogares de menores ingresos son más sensibles al precio —y los datos de ANIF sugieren que lo son, porque fueron quienes más redujeron el consumo—, entonces también podrían ser quienes más se beneficien en términos de salud.',
        },
        {
          type: 'paragraph',
          text: 'Y hay algo más. En Colombia, los hogares de menores ingresos tienen una mayor presencia en la informalidad y una mayor dependencia del régimen subsidiado de salud. Es decir, cuando estas enfermedades llegan, una parte importante del costo la asume directamente el Estado.',
        },
        {
          type: 'paragraph',
          text: 'Todos pagamos esa salud.',
        },
        {
          type: 'paragraph',
          text: 'El efecto distributivo neto del impuesto para Colombia todavía no está resuelto en la literatura, y lo honesto es decirlo así.',
        },
        {
          type: 'heading',
          text: 'Lo que viene: eliminar sin medir',
        },
        {
          type: 'paragraph',
          text: 'El gobierno entrante prometió dos cosas: eliminar el impuesto saludable y simplificar el sistema tributario hasta dejarlo en tres impuestos.',
        },
        {
          type: 'paragraph',
          text: 'Todavía no sabemos cómo van a plantear la reforma en detalle, y no voy a especular más de la cuenta. Pero el escenario que se dibuja es uno en el que los productos ultraprocesados quedarían relativamente más baratos frente a la comida del día a día.',
        },
        {
          type: 'paragraph',
          text: 'Y eso afectaría principalmente a los hogares de menores ingresos, donde los precios ejercen una mayor presión sobre las decisiones de consumo.',
        },
        {
          type: 'paragraph',
          text: 'Mi lectura, después de este ejercicio, es esta: el impuesto saludable tiene una justificación económica y de salud pública seria, un diseño mejor de lo que se le reconoce y unos primeros datos que se mueven en la dirección esperada.',
        },
        {
          type: 'paragraph',
          text: 'Lo que todavía no tiene es una evaluación causal rigurosa, porque lleva relativamente poco tiempo vigente.',
        },
        {
          type: 'paragraph',
          text: 'Eso no lo convierte en ideológico.',
        },
        {
          type: 'paragraph',
          text: 'Lo convierte en una política plausible, pendiente de medición.',
        },
        {
          type: 'paragraph',
          text: 'Y ahí está la ironía.',
        },
        {
          type: 'paragraph',
          text: 'Restrepo dice que el impuesto se puso por razones puramente ideológicas. Pero eliminarlo sin haberlo evaluado —sin mirar los precios, el consumo, el recaudo ni la salud— sería exactamente eso: una decisión ideológica.',
        },
        {
          type: 'quote',
          text: 'Un impuesto puede ser incómodo. Ideológico es eliminarlo sin mirar los datos.',
        },
        {
          type: 'paragraph',
          text: 'Los datos, las fuentes, las limitaciones y la metodología completa de este ejercicio están documentados en:',
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A few weeks ago I heard José Manuel Restrepo say, in an interview with Caracol Radio, that the healthy tax is a tax they “ended up imposing for a purely ideological reason”. And he promised to abolish it. When he said that, he was Abelardo de la Espriella’s running mate. Today he is Colombia’s vice president elect, and the designated finance minister, Miguel Gómez Martínez, has already confirmed that the new government will push a tax reform so that DIAN goes from collecting 15 taxes to just three: income tax, VAT and external VAT.',
        },
        {
          type: 'paragraph',
          text: 'What was a campaign opinion in June is now a government promise.',
        },
        {
          type: 'paragraph',
          text: 'And here is my confession: we all have confirmation bias. Me first. And, apparently, José Manuel Restrepo does too. I get it, because even though I also disagree with many of Gustavo Petro’s policies, I would not dare say that this tax is merely ideological.',
        },
        {
          type: 'paragraph',
          text: '“Ideological” is not an insult. It is a claim. And claims can be tested.',
        },
        {
          type: 'paragraph',
          text: 'So I set out to do that. The exercise is honestly draining — it takes several steps and a lot of time — but here we are, for the love of truth and economics. I read Law 2277 as it is written: what it taxes, at what rates and with what design. I reviewed the available literature, checking which studies were peer-reviewed and in what settings they were done, to see how well their results can travel to Colombia. And I started processing DANE and DIAN data.',
        },
        {
          type: 'paragraph',
          text: 'The whole process, with its sources, methodology and limits, is documented on the project site:',
        },
        {
          type: 'paragraph',
          text: 'Here is what I found.',
        },
        {
          type: 'heading',
          text: 'A tax is not a caprice: it is a tool',
        },
        {
          type: 'paragraph',
          text: 'In macroeconomics, governments have several tools to influence not only the economy, but also people’s behaviour. One of them is fiscal policy: through taxes and public spending, the state seeks to influence growth, inflation, employment and social welfare.',
        },
        {
          type: 'paragraph',
          text: 'The healthy tax belongs to a particular family: what economists call Pigouvian taxes, after Arthur Pigou.',
        },
        {
          type: 'paragraph',
          text: 'The idea is simple. When someone consumes a product that harms their health, the cost of that illness is not paid by that person alone: the health system pays part of it too. And in Colombia we have a universal health system — something the United States does not have, by the way — so we all end up paying that cost.',
        },
        {
          type: 'paragraph',
          text: 'In economic jargon, that is called a negative externality: my consumption decision creates costs for third parties who did not take part in it.',
        },
        {
          type: 'paragraph',
          text: 'The tax tries to make the product price reflect part of that cost. That is the same reason cigarettes and alcohol are heavily taxed almost everywhere.',
        },
        {
          type: 'heading',
          text: 'Elasticity, or why design matters',
        },
        {
          type: 'paragraph',
          text: 'When designing this kind of tax, health economics pays attention to a key concept: price elasticity of demand.',
        },
        {
          type: 'paragraph',
          text: 'It is basically a measure of how sensitive we are to price changes. Some goods, if they get a little more expensive, see demand fall much more than expected. Others keep selling almost no matter how much they go up. Companies know that too.',
        },
        {
          type: 'paragraph',
          text: 'Elasticities also depend on what substitutes are available.',
        },
        {
          type: 'paragraph',
          text: 'Here the Colombian design is smarter than its critics admit: the tax on beverages is not a flat rate, but a stepped one based on grams of sugar per 100 millilitres.',
        },
        {
          type: 'paragraph',
          text: 'That creates two incentives at once: for consumers to switch to lower-sugar versions — or to water, which is still free at the tap — and for producers to reformulate their products to pay less tax, as happened in the UK and South Africa.',
        },
        {
          type: 'paragraph',
          text: 'Because unlike salt, added sugar is not essential. Our bodies do not need it to function. We can live without it.',
        },
        {
          type: 'heading',
          text: 'The health cost was already here',
        },
        {
          type: 'paragraph',
          text: 'The tax did not arrive in a healthy country.',
        },
        {
          type: 'paragraph',
          text: 'According to a study published in *Nature Medicine* by Lara-Castor et al., Colombia has the highest burden of type 2 diabetes attributable to sugary drinks among the 30 most populous countries in the world: 48.1% of the new type 2 diabetes cases recorded in 2020 would be attributable to these drinks.',
        },
        {
          type: 'paragraph',
          text: 'For cardiovascular disease, the figure is 23%.',
        },
        {
          type: 'paragraph',
          text: 'First place in both.',
        },
        {
          type: 'paragraph',
          text: 'Not a podium you want to be on.',
        },
        {
          type: 'paragraph',
          text: 'And these diseases are not abstract. Ischaemic heart disease is the leading cause of death in Colombia, according to DANE, and diabetes is among the top ten.',
        },
        {
          type: 'heading',
          text: 'What has happened since November 2023?',
        },
        {
          type: 'paragraph',
          text: 'This is where the debate gets interesting, because there is already data.',
        },
        {
          type: 'paragraph',
          text: 'ANIF — a think tank nobody would accuse of petismo — published a report in 2025 on what has happened since the tax was implemented. The report shows three findings.',
        },
        {
          type: 'paragraph',
          text: 'First, the tax did pass through to prices. Annual inflation for packaged fried snacks peaked at 20.7%, while sodas and malt drinks reached 13.7% after the law took effect.',
        },
        {
          type: 'paragraph',
          text: 'Second, daily sugary-drink consumption fell between 2022 and 2024. It went from 24.6% to 22.6% among people aged 12 to 28, and from 24.9% to 19.2% among adults aged 29 to 44, according to DANE’s Quality of Life Survey.',
        },
        {
          type: 'paragraph',
          text: 'The drop was more pronounced among lower-income households.',
        },
        {
          type: 'paragraph',
          text: 'Third, the tax raises revenue: COP 1.6 trillion by May 2025, equal to 1.3% of total revenue.',
        },
        {
          type: 'paragraph',
          text: 'Now, let us be rigorous, since that is why we came here: these are descriptive data, not a causal evaluation.',
        },
        {
          type: 'paragraph',
          text: 'The drop in consumption coincides with the tax taking effect and moves in the direction theory predicts. But nobody has yet separated the specific effect of the tax from the 2022 and 2023 food inflation shock, or from other shocks that may also have affected consumption decisions.',
        },
        {
          type: 'paragraph',
          text: 'Correlation does not imply causation. And that standard applies to both sides: Restrepo cannot say the tax does not work, and its defenders cannot declare victory.',
        },
        {
          type: 'paragraph',
          text: 'What we can say is that the links in the chain — tax, prices and consumption — are moving as expected.',
        },
        {
          type: 'heading',
          text: 'The serious objection is not ideology: it is regressivity',
        },
        {
          type: 'paragraph',
          text: 'If I wanted to attack this tax, I would not call it ideological.',
        },
        {
          type: 'paragraph',
          text: 'I would call it regressive: something that hits poorer households harder in proportional terms, because every peso matters more when deciding what to put on the table.',
        },
        {
          type: 'paragraph',
          text: 'That is the strongest technical argument against the tax, and it deserves to be taken seriously.',
        },
        {
          type: 'paragraph',
          text: 'But there is another side to it.',
        },
        {
          type: 'paragraph',
          text: 'If lower-income households are more price-sensitive — and ANIF’s data suggest they are, because they were the ones who cut consumption the most — then they may also be the ones who benefit most in health terms.',
        },
        {
          type: 'paragraph',
          text: 'And there is something else. In Colombia, lower-income households are more likely to be in the informal sector and more likely to depend on the subsidised health regime. In other words, when these diseases show up, a large part of the cost is picked up directly by the state.',
        },
        {
          type: 'paragraph',
          text: 'We all pay for that health care.',
        },
        {
          type: 'paragraph',
          text: 'The net distributional effect of the tax in Colombia is still unresolved in the literature, and the honest thing is to say it that way.',
        },
        {
          type: 'heading',
          text: 'What comes next: abolishing without measuring',
        },
        {
          type: 'paragraph',
          text: 'The incoming government promised two things: to abolish the healthy tax and to simplify the tax system down to three taxes.',
        },
        {
          type: 'paragraph',
          text: 'We still do not know exactly how they will present the reform, and I do not want to speculate too much. But the picture that is emerging is one in which ultra-processed products would end up relatively cheaper than everyday food.',
        },
        {
          type: 'paragraph',
          text: 'And that would hit lower-income households the hardest, because prices weigh more heavily on their consumption decisions.',
        },
        {
          type: 'paragraph',
          text: 'My reading after going through this exercise is this: the healthy tax has a serious economic and public-health rationale, a better design than it is often given credit for, and early data that move in the expected direction.',
        },
        {
          type: 'paragraph',
          text: 'What it still does not have is a rigorous causal evaluation, because it has not been in place for very long.',
        },
        {
          type: 'paragraph',
          text: 'That does not make it ideological.',
        },
        {
          type: 'paragraph',
          text: 'It makes it a plausible policy, still waiting to be measured.',
        },
        {
          type: 'paragraph',
          text: 'And there is the irony.',
        },
        {
          type: 'paragraph',
          text: 'Restrepo says the tax was introduced for purely ideological reasons. But abolishing it without having evaluated it — without looking at prices, consumption, revenue or health — would be exactly that: an ideological decision.',
        },
        {
          type: 'quote',
          text: 'A tax can be uncomfortable. What is ideological is to abolish it without looking at the data.',
        },
        {
          type: 'paragraph',
          text: 'The data, the sources, the limitations and the full methodology for this exercise are documented at:',
        },
      ],
    },
  },
  {
    id: 'cepeda-433-pages',
    slug: 'cepeda-433-pages',
    title: {
      es: 'El programa de gobierno de Iván Cepeda y sus 433 páginas. Nadie lo va a leer y eso no es un accidente.',
      en: 'Iván Cepeda’s 433-Page Government Program. Almost Nobody Will Read It — and That Is Not an Accident.',
    },
    excerpt: {
      es: 'Un análisis computacional del programa de gobierno de Iván Cepeda: qué palabras domina, qué tan legible es y por qué Álvaro Uribe aparece más que su propia propuesta de reforma agraria.',
      en: 'A computational reading of Iván Cepeda’s government programme: which words dominate, how readable it is, and why Álvaro Uribe gets more space than his own land-reform proposal.',
    },
    date: { en: 'June 3, 2026', es: '3 de junio de 2026' },
    category: { en: 'Political analysis and NLP', es: 'Análisis político y NLP' },
    readingTime: { en: '3 min read', es: '3 min de lectura' },
    author: 'David Muñoz',
    status: { en: 'Published', es: 'Publicado' },
    tags: ['NLP', 'Colombia 2026', 'Political economy', 'Readability', 'Government plan', 'Economic analysis'],
    projectUrl: 'https://juandamunoz.com/cepeda-program',
    analysisUrl: 'https://analisis-plan-gobierno-ivan-cepeda-2026-web.pages.dev/',
    repoUrl: 'https://github.com/DavidMume/analisis-plan-gobierno-ivan-cepeda-2026',
    linkedinUrl: 'https://www.linkedin.com/pulse/el-programa-de-gobierno-iv%C3%A1n-cepeda-y-sus-433-p%C3%A1ginas-david-mu%C3%B1oz-w515c',
    featured: true,
    language: 'es',
    seo: {
      es: {
        title: 'El programa de gobierno de Iván Cepeda y sus 433 páginas',
        description: 'Un análisis NLP del programa de gobierno de Iván Cepeda: vocabulario dominante, legibilidad, menciones a Uribe y los silencios económicos de un documento de 433 páginas.',
      },
      en: {
        title: 'Iván Cepeda’s 433-Page Government Program',
        description: 'An NLP reading of Iván Cepeda’s government programme: dominant vocabulary, readability, mentions of Uribe and the economic silences inside a 433-page document.',
      },
      image: '/images/brand/11-project-placeholder-editorial.png',
    },
    image: '/images/brand/11-project-placeholder-editorial.png',
    imageAlt: {
      es: 'Ilustración editorial genérica del portafolio usada como cabecera para artículos de análisis de datos.',
      en: 'Generic editorial illustration from the portfolio used as a header for data-analysis articles.',
    },
    imageCaption: {
      es: 'Análisis computacional NLP del programa de gobierno de Iván Cepeda (2026).',
      en: 'Computational NLP analysis of Iván Cepeda’s government programme (2026).',
    },
    projectCard: {
      es: {
        eyebrow: 'Este artículo hace parte de un análisis con datos',
        title: 'El artículo y el análisis técnico se leen juntos',
        body: 'Esta pieza editorial resume los hallazgos. El análisis interactivo documenta la metodología NLP completa, los datos procesados, las visualizaciones y el código fuente.',
      },
      en: {
        eyebrow: 'This article is part of a data-driven analysis',
        title: 'The article and the technical analysis are meant to be read together',
        body: 'This editorial piece summarises the findings. The interactive analysis documents the full NLP methodology, processed data, visualisations and source code.',
      },
    },
    highlights: {
      es: [
        { value: '433', label: 'páginas en el programa de gobierno', note: 'Extensión total del documento analizado.' },
        { value: '52.000', label: 'palabras después de limpiar el texto', note: 'Corpus procesado para el análisis NLP.' },
        { value: '51.9 / 100', label: 'índice de legibilidad Fernández Huerta', note: 'Equivalente a un texto universitario o de revista especializada.' },
        { value: '25', label: 'palabras por oración, en promedio', note: 'Casi el doble de lo recomendado para comunicación política efectiva.' },
        { value: '104', label: '"pacto histórico": menciones en el documento', note: 'Bigrama más frecuente del programa.' },
        { value: '81', label: '"extrema derecha": menciones en el documento', note: 'Segundo bigrama más frecuente del programa.' },
        { value: '221', label: 'menciones a Álvaro Uribe Vélez', note: '1 de cada 7 páginas del programa lo menciona.' },
        { value: '63', label: 'páginas distintas donde aparece Uribe', note: 'Sobre un total de 433 páginas.' },
        { value: '59', label: '"reforma agraria": menciones en el documento', note: 'La propuesta económica más concreta de Cepeda, menos citada que Uribe.' },
      ],
      en: [
        { value: '433', label: 'pages in the government programme', note: 'Total length of the document analysed.' },
        { value: '52,000', label: 'words after cleaning the text', note: 'Corpus processed for the NLP analysis.' },
        { value: '51.9 / 100', label: 'Fernández Huerta readability score', note: 'Equivalent to a university-level or specialised-magazine text.' },
        { value: '25', label: 'words per sentence, on average', note: 'Almost double what is recommended for effective political communication.' },
        { value: '104', label: '"pacto histórico" ("historic pact"): mentions', note: 'The programme’s most frequent bigram.' },
        { value: '81', label: '"extrema derecha" ("far right"): mentions', note: 'The programme’s second most frequent bigram.' },
        { value: '221', label: 'mentions of Álvaro Uribe Vélez', note: '1 in every 7 pages of the programme mentions him.' },
        { value: '63', label: 'distinct pages where Uribe appears', note: 'Out of 433 total pages.' },
        { value: '59', label: '"reforma agraria" ("land reform"): mentions', note: 'Cepeda’s most concrete economic proposal, cited less than Uribe.' },
      ],
    },
    methodologyNote: {
      es: 'Estas cifras provienen del análisis computacional del texto y son descriptivas: muestran patrones de lenguaje, no evalúan por sí solas la viabilidad de las políticas.',
      en: 'These figures come from the computational text analysis and are descriptive: they show language patterns, not an evaluation of policy viability on their own.',
    },
    sources: [
      {
        id: 'cepeda-nlp-web-report',
        title: {
          es: 'Informe web interactivo — Análisis NLP del programa de gobierno de Iván Cepeda',
          en: 'Interactive web report — NLP analysis of Iván Cepeda’s government programme',
        },
        url: 'https://analisis-plan-gobierno-ivan-cepeda-2026-web.pages.dev/',
        note: {
          es: 'Metodología completa, visualizaciones y resultados del análisis computacional.',
          en: 'Full methodology, visualisations and results of the computational analysis.',
        },
      },
      {
        id: 'cepeda-nlp-github-repo',
        title: {
          es: 'GitHub — código y datos del análisis NLP',
          en: 'GitHub — code and data for the NLP analysis',
        },
        url: 'https://github.com/DavidMume/analisis-plan-gobierno-ivan-cepeda-2026',
        note: {
          es: 'Repositorio técnico con el pipeline de procesamiento de texto y los notebooks de análisis.',
          en: 'Technical repository with the text-processing pipeline and analysis notebooks.',
        },
      },
      {
        id: 'cepeda-linkedin-article',
        title: {
          es: 'LinkedIn — versión original del artículo',
          en: 'LinkedIn — original version of the article',
        },
        url: 'https://www.linkedin.com/pulse/el-programa-de-gobierno-iv%C3%A1n-cepeda-y-sus-433-p%C3%A1ginas-david-mu%C3%B1oz-w515c',
        note: {
          es: 'Publicación original de este editorial.',
          en: 'Original publication of this editorial.',
        },
      },
    ],
    content: {
      es: [
        'Un documento de 400 páginas puede ser dos cosas: un proyecto de gobierno serio, o una estrategia para parecer serio sin que nadie pueda refutarte con facilidad. La densidad extrema crea una asimetría de información que favorece al candidato: él sabe lo que propone, los votantes y periodistas quedan en la superficie.',
        'Así que le apliqué NLP para leerlo por todo el mundo.',
        { type: 'heading', text: 'Lo que encontré:' },
        'El vocabulario dominante no es macroeconómico. Las palabras más frecuentes son pueblo, territorio, social, vida, paz, violencia, víctima, corrupción. En 433 páginas casi no aparecen términos como inflación, déficit fiscal, productividad o balanza de pagos. El programa tiene un diagnóstico político potente — y una arquitectura económica que habría que buscar con lupa.',
        'El bigrama más frecuente es "pacto histórico" 104 veces. El segundo es "extrema derecha" 81 veces. Antes de hablar de sus propuestas, Cepeda necesita definir a su enemigo. Esa es la estructura retórica del documento: identidad por contraste, no por contenido propio.',
        { type: 'heading', text: 'El dato que más me llamó la atención:' },
        'Álvaro Uribe Vélez aparece en 1 de cada 7 páginas del programa. 221 menciones en 63 páginas distintas. Para comparar, "reforma agraria" — su propuesta económica más concreta — aparece 59 veces. Cepeda le dedica más espacio a Uribe que a su propio plan de tierras.',
        'Eso no es casualidad. Es construcción de identidad política: Cepeda existe, en gran medida, como antítesis del uribismo. El programa lo confirma con datos.',
        { type: 'heading', text: 'Lo que el documento puede estar dejando por fuera:' },
        'El índice de legibilidad Fernández Huerta — la fórmula adaptada al español — da 51.9 sobre 100. Eso equivale a un texto universitario o revista especializada. No es ilegible, pero tampoco es un documento pensado para el ciudadano promedio: está un escalón por encima de lo que la mayoría de personas lee cómodamente. Las oraciones promedian 25 palabras — casi el doble de lo recomendado para comunicación política efectiva. En ese terreno, encontrar las inconsistencias, las promesas sin financiamiento o los silencios convenientes requiere un esfuerzo que pocos van a hacer.',
        'El análisis de tópicos LDA no logra identificar un eje claramente macroeconómico entre los 7 temas latentes del documento. Aparecen: conflicto armado, derechos humanos, territorio, instituciones, género. La economía como disciplina — con sus restricciones, sus trade-offs, sus fuentes de financiamiento — brilla por su ausencia como eje estructurante.',
        { type: 'heading', text: 'En resumen:' },
        'Es un programa de gobierno escrito por un político con décadas de experiencia en derechos humanos, no por un economista. Eso se nota en cada página. No es un defecto en sí mismo — refleja una visión del mundo donde la política precede a la técnica. Pero sí significa que las preguntas más importantes sobre viabilidad fiscal, costo de las reformas y mecanismos de implementación siguen sin respuesta.',
        'El código y todos los análisis están en GitHub si quieren explorarlo: github.com/DavidMume/analisis-plan-gobierno-ivan-cepeda-2026',
        '433 páginas. 52.000 palabras después de limpiar el texto y horas de análisis computacional.',
        { type: 'quote', text: 'La conclusión sigue siendo la misma que con cualquier programa de gobierno largo: lo que no dice es tan importante como lo que dice.' },
      ],
      en: [
        'A 400-page document can be one of two things: a serious government platform, or a strategy to look serious without making it easy for anyone to push back. Extreme density creates an information asymmetry that favors the candidate: he knows what he’s proposing, while voters and journalists are left skimming the surface.',
        'So I ran NLP on it to read it for everyone.',
        { type: 'heading', text: 'What I found:' },
        'The dominant vocabulary is not macroeconomic. The most frequent words are people, territory, social, life, peace, violence, victim, corruption. Across 433 pages, terms like inflation, fiscal deficit, productivity or balance of payments barely appear. The programme has a powerful political diagnosis — and an economic architecture you have to go looking for with a magnifying glass.',
        'The most frequent bigram is "pacto histórico" ("historic pact"), 104 times. The second is "extrema derecha" ("far right"), 81 times. Before talking about his own proposals, Cepeda needs to define his enemy. That is the document’s rhetorical structure: identity by contrast, not by content of its own.',
        { type: 'heading', text: 'The figure that caught my attention the most:' },
        'Álvaro Uribe Vélez appears on 1 out of every 7 pages of the programme. 221 mentions across 63 distinct pages. For comparison, "reforma agraria" ("land reform") — his most concrete economic proposal — appears 59 times. Cepeda gives more space to Uribe than to his own land plan.',
        'That is not a coincidence. It is political identity construction: Cepeda exists, to a large extent, as the antithesis of uribismo. The programme confirms it with data.',
        { type: 'heading', text: 'What the document may be leaving out:' },
        'The Fernández Huerta readability index — the formula adapted for Spanish — scores 51.9 out of 100. That is equivalent to a university-level or specialised-magazine text. It is not unreadable, but it is not a document built for the average citizen either: it sits one notch above what most people read comfortably. Sentences average 25 words — almost double what is recommended for effective political communication. On that terrain, spotting the inconsistencies, the unfunded promises or the convenient silences takes an effort most people will not make.',
        'The LDA topic analysis fails to identify a clearly macroeconomic axis among the document’s 7 latent topics. What shows up instead: armed conflict, human rights, territory, institutions, gender. Economics as a discipline — with its constraints, its trade-offs, its funding sources — is conspicuously absent as a structuring axis.',
        { type: 'heading', text: 'In short:' },
        'This is a government programme written by a politician with decades of experience in human rights, not by an economist. It shows on every page. That is not a flaw in itself — it reflects a worldview in which politics precedes technique. But it does mean the most important questions about fiscal viability, the cost of the reforms and implementation mechanisms remain unanswered.',
        'The code and all the analyses are on GitHub if you want to explore them: github.com/DavidMume/analisis-plan-gobierno-ivan-cepeda-2026',
        '433 pages. 52,000 words after cleaning the text, and hours of computational analysis.',
        { type: 'quote', text: 'The conclusion stays the same as with any long government programme: what it does not say matters as much as what it does say.' },
      ],
    },
  },
  {
    id: 'three-page-plan',
    slug: 'three-page-plan',
    title: {
      en: 'The Three-Page Plan: Why Reading Only the Summary Is Not Reading the Program.',
      es: 'El plan de tres páginas: porque leer solo el resumen es no leer el programa.',
    },
    excerpt: {
      en: 'A documentary and NLP-based analysis of Abelardo de la Espriella’s programme, the difference between an executive summary and a technical platform, and the problem of judging campaigns by document length.',
      es: 'Un análisis documental y de NLP sobre los pilares programáticos de Abelardo de la Espriella, la diferencia entre resumen ejecutivo y programa técnico, y el problema de evaluar campañas por la extensión de sus documentos.',
    },
    date: { en: 'June 7, 2026', es: '7 de junio de 2026' },
    publishedAt: '2026-06-07T00:00:00-05:00',
    category: { en: 'Political analysis and NLP', es: 'Análisis político y NLP' },
    readingTime: { en: '10 min read', es: '10 min de lectura' },
    author: 'David Muñoz',
    status: { en: 'Published', es: 'Publicado' },
    tags: ['NLP', 'Colombia 2026', 'Political communication', 'Patria Milagro', 'Policy analysis', 'Readability'],
    projectUrl: 'https://patria-milagro-analysis-web.pages.dev/',
    analysisUrl: 'https://patria-milagro-analysis-web.pages.dev/',
    analysisLabel: { en: 'View analysis', es: 'Ver análisis' },
    repoUrl: 'https://github.com/DavidMume/patria-milagro-analysis',
    linkedinUrl: 'https://www.linkedin.com/pulse/el-plan-de-tres-p%C3%A1ginas-por-qu%C3%A9-leer-solo-resumen-es-programa-mu%C3%B1oz-trfsc',
    caseStudyUrl: 'https://juandamunoz.com/patria-milagro',
    internalProjectPath: '/patria-milagro',
    featured: false,
    language: 'es',
    seo: {
      es: {
        title: 'El plan de tres páginas: porque leer solo el resumen es no leer el programa.',
        description: 'Análisis documental y NLP del proyecto Patria Milagro, sus capas programáticas, legibilidad, modelo económico y tensiones internas.',
      },
      en: {
        title: 'The Three-Page Plan: Why Reading Only the Summary Is Not Reading the Program.',
        description: 'A documentary and NLP analysis of Patria Milagro, its programmatic layers, readability, economic model and internal tensions.',
      },
      image: '/images/brand/11-project-placeholder-editorial.png',
    },
    image: '/images/brand/11-project-placeholder-editorial.png',
    imageAlt: {
      es: 'Ilustración editorial genérica del portafolio usada como cabecera para el análisis Patria Milagro.',
      en: 'Generic editorial portfolio illustration used as the header for the Patria Milagro analysis.',
    },
    imageCaption: {
      es: 'Análisis documental y NLP de las capas programáticas de Patria Milagro.',
      en: 'Documentary and NLP analysis of the Patria Milagro programme layers.',
    },
    projectCard: {
      es: {
        eyebrow: 'Este artículo hace parte de un análisis con datos',
        title: 'El artículo y el análisis interactivo se leen juntos',
        body: 'La pieza editorial desarrolla el argumento. El proyecto técnico documenta el corpus, la metodología NLP, las visualizaciones y el código fuente.',
      },
      en: {
        eyebrow: 'This article is part of a data-driven analysis',
        title: 'The article and the interactive analysis are meant to be read together',
        body: 'The editorial develops the argument. The technical project documents the corpus, NLP methodology, visualisations and source code.',
      },
    },
    highlights: {
      es: [
        { value: '3', label: 'páginas del resumen ejecutivo', note: 'La capa más breve y visible del corpus programático.' },
        { value: '5', label: 'capas documentales', note: 'Narrativa, diagnóstico, pilares sectoriales, capa territorial y resumen ejecutivo.' },
        { value: '51.9 / 100', label: 'índice de legibilidad Fernández Huerta', note: 'Dificultad equivalente a un texto universitario o revista especializada.' },
        { value: '47', label: 'páginas de El Milagro del Valle del Cauca', note: 'La capa territorial del corpus analizado.' },
        { value: '13', label: 'propuestas iniciales', note: 'Presentadas en el resumen ejecutivo de tres páginas.' },
        { value: '10', label: 'cárceles nuevas prometidas', note: 'Una de las propuestas detalladas en el pilar de seguridad.' },
        { value: '$10 billones', label: 'para un plan de choque en salud', note: 'Compromiso que exige una explicación fiscal integrada.' },
        { value: '2%', label: 'crédito de vivienda', note: 'Tasa prometida a un plazo de treinta años.' },
        { value: '90 días', label: 'horizonte de resultados en seguridad', note: 'Plazo político de corto alcance frente a otros horizontes técnicos.' },
      ],
      en: [
        { value: '3', label: 'pages in the executive summary', note: 'The shortest and most visible layer of the programme corpus.' },
        { value: '5', label: 'documentary layers', note: 'Narrative, diagnosis, sector pillars, territorial layer and executive summary.' },
        { value: '51.9 / 100', label: 'Fernández Huerta readability score', note: 'Equivalent to a university-level or specialised-magazine text.' },
        { value: '47', label: 'pages in El Milagro del Valle del Cauca', note: 'The territorial layer of the analysed corpus.' },
        { value: '13', label: 'initial proposals', note: 'Presented in the three-page executive summary.' },
        { value: '10', label: 'new prisons promised', note: 'One of the proposals detailed in the security pillar.' },
        { value: 'COP 10tn', label: 'for an emergency health plan', note: 'A commitment requiring an integrated fiscal explanation.' },
        { value: '2%', label: 'housing credit', note: 'The promised rate over a thirty-year term.' },
        { value: '90 days', label: 'security-results horizon', note: 'A short political deadline compared with other technical horizons.' },
      ],
    },
    methodologyNote: {
      es: 'Estas cifras son descriptivas y provienen de los documentos analizados. No prueban por sí solas la viabilidad o el impacto de las propuestas.',
      en: 'These figures are descriptive and come from the analysed documents. On their own, they do not establish the proposals’ feasibility or impact.',
    },
    sources: [
      {
        id: 'patria-milagro-interactive-analysis',
        title: { es: 'Análisis interactivo — Patria Milagro', en: 'Interactive analysis — Patria Milagro' },
        url: 'https://patria-milagro-analysis-web.pages.dev/',
        note: { es: 'Informe interactivo bilingüe con resultados y visualizaciones.', en: 'Bilingual interactive report with results and visualisations.' },
      },
      {
        id: 'patria-milagro-github',
        title: { es: 'GitHub — código y análisis técnico', en: 'GitHub — code and technical analysis' },
        url: 'https://github.com/DavidMume/patria-milagro-analysis',
        note: { es: 'Repositorio técnico con el corpus, el pipeline y la documentación.', en: 'Technical repository with the corpus, pipeline and documentation.' },
      },
      {
        id: 'three-page-plan-linkedin',
        title: { es: 'LinkedIn — versión original del artículo', en: 'LinkedIn — original version of the article' },
        url: 'https://www.linkedin.com/pulse/el-plan-de-tres-p%C3%A1ginas-por-qu%C3%A9-leer-solo-resumen-es-programa-mu%C3%B1oz-trfsc',
        note: { es: 'Publicación original de este editorial.', en: 'Original publication of this editorial.' },
      },
    ],
    content: {
      es: threePagePlanSpanishContent,
      en: [
        'This article is currently available in Spanish. The interactive analysis and interface are available in English and Spanish.',
        ...threePagePlanSpanishContent,
      ],
    },
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
