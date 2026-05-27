export type Lang = 'en' | 'es' | 'ru'
export type T = Record<Lang, string>

export interface Row {
  id: string
  name: T
  qualifier: T
}

export interface CategoryGroup {
  type: 'table'
  id: string
  title: T
  intro: T
  colHeader1: T
  colHeader2: T
  rows: Row[]
}

export interface RegistryGroup {
  type: 'simple'
  id: string
  title: T
  text: T
}

export type AnyGroup = CategoryGroup | RegistryGroup

export const ui = {
  siteTitle: { en: 'FastGC', es: 'FastGC', ru: 'FastGC' },
  siteTagline: {
    en: 'Your plain-English guide to the U.S. Green Card',
    es: 'Su guía en español sobre la Tarjeta Verde de EE.UU.',
    ru: 'Простое руководство по грин-карте США',
  },
  introHeading: {
    en: 'What is a Green Card?',
    es: '¿Qué es una Tarjeta Verde?',
    ru: 'Что такое грин-карта?',
  },
  introText: {
    en: 'A green card lets you live and work in the United States permanently. To apply, you must qualify under at least one of the categories below. Find the one that fits your situation to learn how to apply and how to speed up the process.',
    es: 'Una tarjeta verde le permite vivir y trabajar de forma permanente en los Estados Unidos. Para solicitar, debe calificar en al menos una de las categorías a continuación. Encuentre la que corresponde a su situación para aprender cómo solicitar y cómo acelerar el proceso.',
    ru: 'Грин-карта позволяет вам жить и работать в США на постоянной основе. Чтобы подать заявление, вы должны соответствовать хотя бы одной из категорий ниже. Найдите подходящую для вашей ситуации, чтобы узнать, как подать заявку и ускорить процесс.',
  },
  expandAll: { en: 'Expand all', es: 'Expandir todo', ru: 'Развернуть все' },
  collapseAll: { en: 'Collapse all', es: 'Contraer todo', ru: 'Свернуть все' },
  colHeader1: {
    en: 'Who you can apply as',
    es: 'Cómo puede solicitar',
    ru: 'Кем вы можете подать заявку',
  },
  colHeader2: {
    en: 'Who you need to be',
    es: 'Quién debe ser usted',
    ru: 'Кем вы должны быть',
  },
  footerDisclaimer: {
    en: 'This information is based on official USCIS data and is for general information only — not legal advice. For your specific situation, consult a licensed immigration attorney.',
    es: 'Esta información está basada en datos oficiales de USCIS y es solo para información general, no para asesoramiento legal. Para su situación específica, consulte a un abogado de inmigración con licencia.',
    ru: 'Эта информация основана на официальных данных USCIS и предназначена только для общей информации — не для юридических консультаций. По вашей конкретной ситуации обратитесь к лицензированному адвокату по вопросам иммиграции.',
  },
  footerSource: {
    en: 'Source: USCIS Green Card Eligibility Categories',
    es: 'Fuente: Categorías de Elegibilidad para Tarjeta Verde de USCIS',
    ru: 'Источник: Категории права на получение грин-карты USCIS',
  },
  languageLabel: { en: 'Language', es: 'Idioma', ru: 'Язык' },

  // Session landing
  sessionTitle: {
    en: 'Welcome to FastGC',
    es: 'Bienvenido a FastGC',
    ru: 'Добро пожаловать в FastGC',
  },
  sessionSubtitle: {
    en: 'Your step-by-step guide to U.S. Green Card applications. Your selections are saved so you can pick up where you left off.',
    es: 'Su guía paso a paso para solicitudes de Tarjeta Verde de los EE.UU. Sus selecciones se guardan para que pueda continuar donde lo dejó.',
    ru: 'Пошаговое руководство по заявлению на грин-карту США. Ваши выборы сохраняются, чтобы вы могли продолжить с того места, где остановились.',
  },
  newSession: {
    en: 'Start New Session',
    es: 'Iniciar Nueva Sesión',
    ru: 'Начать новую сессию',
  },
  resumeSession: {
    en: 'Resume Session',
    es: 'Reanudar Sesión',
    ru: 'Продолжить сессию',
  },
  resumeSessionHint: {
    en: 'Continue from your last saved selections',
    es: 'Continuar desde sus últimas selecciones guardadas',
    ru: 'Продолжить с последних сохранённых выборов',
  },
  noSavedSession: {
    en: 'No saved session found',
    es: 'No se encontró sesión guardada',
    ru: 'Сохранённая сессия не найдена',
  },

  // Page 1
  selectInstruction: {
    en: 'Select any and all green card application types that apply to your situation.',
    es: 'Seleccione todos los tipos de solicitud de tarjeta verde que apliquen a su situación.',
    ru: 'Выберите все типы заявлений на грин-карту, которые применимы к вашей ситуации.',
  },
  nextButton: {
    en: 'Next →',
    es: 'Siguiente →',
    ru: 'Далее →',
  },
  nextButtonHint: {
    en: 'Select at least one category to continue',
    es: 'Seleccione al menos una categoría para continuar',
    ru: 'Выберите хотя бы одну категорию для продолжения',
  },
  backButton: {
    en: '← Back',
    es: '← Atrás',
    ru: '← Назад',
  },

  // Expanded accordion labels
  targetTimeline: {
    en: 'Target Timeline',
    es: 'Plazo Estimado',
    ru: 'Ориентировочные сроки',
  },
  canFileConcurrently: {
    en: 'Can You File Concurrently?',
    es: '¿Puede Presentar Simultáneamente?',
    ru: 'Можно ли подавать одновременно?',
  },
  commonWaivers: {
    en: 'Common Waivers Needed',
    es: 'Renuncias Comunes Necesarias',
    ru: 'Часто требуемые освобождения',
  },
  canFileConcurrentlyTooltip: {
    en: 'Tracking whether an applicant can submit their primary petition (e.g., I-130 or I-140) at the exact same time as their Green Card application (I-485). Being able to file concurrently drastically changes the legal strategy because it allows the applicant to apply for a work permit and travel authorization immediately, rather than waiting years.',
    es: 'Seguimiento de si un solicitante puede presentar su petición principal (p. ej., I-130 o I-140) exactamente al mismo tiempo que su solicitud de tarjeta verde (I-485). Poder presentar de forma simultánea cambia drásticamente la estrategia legal porque permite al solicitante solicitar un permiso de trabajo y autorización de viaje de inmediato, en lugar de esperar años.',
    ru: 'Отслеживание того, может ли заявитель подать основную петицию (например, I-130 или I-140) одновременно с заявлением на грин-карту (I-485). Возможность одновременной подачи кардинально меняет правовую стратегию, поскольку позволяет сразу подать заявление на разрешение на работу и разрешение на въезд, не ожидая годами.',
  },
  commonWaiversTooltip: {
    en: 'Qualifying for a category is only step one; many applicants require an accompanying waiver (like an I-601A for unlawful presence or I-601 for fraud/misrepresentation) if they triggered inadmissibility. Tracking the most common waivers associated with each category helps anticipate timeline delays and extra legal steps.',
    es: 'Calificar para una categoría es solo el primer paso; muchos solicitantes requieren una exención adicional (como un I-601A por presencia ilegal o I-601 por fraude/tergiversación) si activaron causas de inadmisibilidad. Conocer las exenciones más comunes asociadas a cada categoría ayuda a anticipar demoras y pasos legales adicionales.',
    ru: 'Соответствие категории — лишь первый шаг; многие заявители нуждаются в дополнительном освобождении (например, I-601A при незаконном присутствии или I-601 при мошенничестве), если возникли основания для недопустимости. Отслеживание наиболее распространённых освобождений помогает заранее предвидеть задержки и дополнительные правовые шаги.',
  },
  whoCanApplyAs: {
    en: 'Who you can apply as',
    es: 'Cómo puede solicitar',
    ru: 'Кем вы можете подать заявку',
  },
  whoNeedToBe: {
    en: 'Who you need to be',
    es: 'Quién debe ser usted',
    ru: 'Кем вы должны быть',
  },

  // Page 2 detail labels
  steps: { en: 'Steps', es: 'Pasos', ru: 'Шаги' },
  actionItems: { en: 'Action Items', es: 'Elementos de Acción', ru: 'Действия' },
  countrySpecificInfo: {
    en: 'Country-Specific Information',
    es: 'Información Específica por País',
    ru: 'Информация по стране',
  },
  preventionTips: {
    en: 'Prevention Tips',
    es: 'Consejos de Prevención',
    ru: 'Советы по предотвращению',
  },
  interviewPrep: {
    en: 'Interview Preparation',
    es: 'Preparación para la Entrevista',
    ru: 'Подготовка к собеседованию',
  },
  accelerationTips: {
    en: 'Acceleration Tips',
    es: 'Consejos para Acelerar',
    ru: 'Советы по ускорению',
  },
  communicationTemplates: {
    en: 'Communication Templates',
    es: 'Plantillas de Comunicación',
    ru: 'Шаблоны коммуникации',
  },
  recipient: { en: 'Recipient', es: 'Destinatario', ru: 'Получатель' },
  whenToSend: { en: 'When to send', es: 'Cuándo enviar', ru: 'Когда отправлять' },
  downloadPdf: {
    en: 'Download PDF',
    es: 'Descargar PDF',
    ru: 'Скачать PDF',
  },
  detailsPageTitle: {
    en: 'Your Green Card Application Guide',
    es: 'Su Guía de Solicitud de Tarjeta Verde',
    ru: 'Руководство по заявлению на грин-карту',
  },
  whoCanApply: {
    en: 'Who can apply',
    es: 'Quién puede solicitar',
    ru: 'Кто может подать заявку',
  },
  criticalWarnings: {
    en: 'Critical Warnings',
    es: 'Advertencias Críticas',
    ru: 'Критические предупреждения',
  },
  whatComesNext: {
    en: 'What Comes Next',
    es: 'Qué Viene Después',
    ru: 'Что будет дальше',
  },
  showSection: {
    en: 'Show',
    es: 'Mostrar',
    ru: 'Показать',
  },
  hideSection: {
    en: 'Hide',
    es: 'Ocultar',
    ru: 'Скрыть',
  },
  navHome: {
    en: 'Home',
    es: 'Inicio',
    ru: 'Главная',
  },
  navIce: {
    en: 'ICE & Rights',
    es: 'ICE y Derechos',
    ru: 'ИДС и Права',
  },
  navTravel: {
    en: 'Travel & Docs',
    es: 'Viajes y Docs',
    ru: 'Поездки и Документы',
  },
  borderZoneChecking: {
    en: 'Checking your location…',
    es: 'Verificando su ubicación…',
    ru: 'Определяем местоположение…',
  },
  borderZoneInside: {
    en: 'You are within the 100-mile border zone',
    es: 'Usted está dentro de la zona fronteriza de 100 millas',
    ru: 'Вы находитесь в зоне 100 миль от границы',
  },
  borderZoneOutside: {
    en: 'You are outside the 100-mile border zone',
    es: 'Usted está fuera de la zona fronteriza de 100 millas',
    ru: 'Вы находитесь за пределами зоны 100 миль от границы',
  },
  borderZoneError: {
    en: 'Location access denied — border zone status unknown',
    es: 'Acceso a ubicación denegado — estado de zona fronteriza desconocido',
    ru: 'Доступ к местоположению запрещён — статус пограничной зоны неизвестен',
  },
} satisfies Record<string, T>

export const categories: AnyGroup[] = [
  {
    type: 'table',
    id: 'family',
    title: {
      en: 'Green Card through Family',
      es: 'Tarjeta Verde por Familia',
      ru: 'Грин-карта через семью',
    },
    intro: {
      en: 'You may qualify through a family member who is a U.S. citizen or a green card holder.',
      es: 'Puede calificar a través de un familiar que sea ciudadano estadounidense o titular de una tarjeta verde.',
      ru: 'Вы можете получить право на грин-карту через члена семьи, который является гражданином США или обладателем грин-карты.',
    },
    colHeader1: {
      en: 'Who you can apply as',
      es: 'Cómo puede solicitar',
      ru: 'Кем вы можете подать заявку',
    },
    colHeader2: {
      en: 'Who you need to be',
      es: 'Quién debe ser usted',
      ru: 'Кем вы должны быть',
    },
    rows: [
      {
        id: 'immediate-relative',
        name: {
          en: 'Immediate relative of a U.S. citizen',
          es: 'Familiar directo de un ciudadano estadounidense',
          ru: 'Ближайший родственник гражданина США',
        },
        qualifier: {
          en: 'The husband or wife of a U.S. citizen; OR a child (unmarried, under 21) of a U.S. citizen; OR a parent of a U.S. citizen who is at least 21 years old',
          es: 'El esposo o esposa de un ciudadano estadounidense; O un hijo o hija (soltero/a, menor de 21 años) de un ciudadano estadounidense; O un padre o madre de un ciudadano estadounidense que tenga al menos 21 años',
          ru: 'Муж или жена гражданина США; ИЛИ ребёнок (не состоящий в браке, до 21 года) гражданина США; ИЛИ родитель гражданина США, которому уже есть 21 год',
        },
      },
      {
        id: 'family-preference',
        name: {
          en: 'Other family member (preference categories)',
          es: 'Otro familiar (categorías de preferencia)',
          ru: 'Другой член семьи (категории предпочтения)',
        },
        qualifier: {
          en: 'An unmarried adult son or daughter of a U.S. citizen; OR a married son or daughter of a U.S. citizen; OR a brother or sister of a U.S. citizen (citizen must be at least 21); OR the husband or wife of a green card holder; OR an unmarried child (under 21) of a green card holder; OR an unmarried adult son or daughter of a green card holder',
          es: 'Un hijo o hija adulto soltero/a de un ciudadano estadounidense; O un hijo o hija casado/a de un ciudadano estadounidense; O un hermano o hermana de un ciudadano estadounidense (el ciudadano debe tener al menos 21 años); O el esposo o esposa de un titular de tarjeta verde; O un hijo o hija soltero/a (menor de 21 años) de un titular de tarjeta verde; O un hijo o hija adulto soltero/a de un titular de tarjeta verde',
          ru: 'Незамужний/неженатый совершеннолетний сын или дочь гражданина США; ИЛИ женатый/замужняя сын или дочь гражданина США; ИЛИ брат или сестра гражданина США (гражданину должно быть не менее 21 года); ИЛИ муж или жена обладателя грин-карты; ИЛИ несовершеннолетний ребёнок (до 21 года) обладателя грин-карты; ИЛИ незамужний/неженатый совершеннолетний сын или дочь обладателя грин-карты',
        },
      },
      {
        id: 'fiance',
        name: {
          en: 'Fiancé(e) of a U.S. citizen or their child',
          es: 'Prometido/a de un ciudadano estadounidense o su hijo/a',
          ru: 'Жених/невеста гражданина США или их ребёнок',
        },
        qualifier: {
          en: 'Someone who entered the U.S. on a K-1 visa to marry a U.S. citizen; OR a child who entered on a K-2 visa as the child of a K-1 fiancé(e)',
          es: 'Alguien que entró a los EE.UU. con una visa K-1 para casarse con un ciudadano estadounidense; O un hijo o hija que entró con una visa K-2 como hijo/a del prometido/a K-1',
          ru: 'Человек, въехавший в США по визе K-1 для вступления в брак с гражданином США; ИЛИ ребёнок, въехавший по визе K-2 как ребёнок жениха/невесты K-1',
        },
      },
      {
        id: 'widow',
        name: {
          en: 'Widow or widower of a U.S. citizen',
          es: 'Viudo o viuda de un ciudadano estadounidense',
          ru: 'Вдовец или вдова гражданина США',
        },
        qualifier: {
          en: 'Someone whose U.S. citizen spouse died, and who was legally married to that person when they died',
          es: 'Alguien cuyo cónyuge ciudadano estadounidense falleció, y que estaba legalmente casado/a con esa persona cuando murió',
          ru: 'Человек, чей супруг/супруга — гражданин США — скончался, и кто состоял в законном браке с этим человеком на момент смерти',
        },
      },
      {
        id: 'vawa-family',
        name: {
          en: 'VAWA self-petitioner (abuse victim)',
          es: 'Autopeticionario VAWA (víctima de abuso)',
          ru: 'Самостоятельный петиционер по VAWA (жертва насилия)',
        },
        qualifier: {
          en: 'An abused husband or wife of a U.S. citizen or green card holder; OR an abused unmarried child (under 21) of a U.S. citizen or green card holder; OR an abused parent of a U.S. citizen',
          es: 'Un esposo o esposa maltratado/a de un ciudadano estadounidense o titular de tarjeta verde; O un hijo o hija soltero/a maltratado/a (menor de 21 años) de un ciudadano estadounidense o titular de tarjeta verde; O un padre o madre maltratado/a de un ciudadano estadounidense',
          ru: 'Подвергавшийся насилию муж или жена гражданина США или обладателя грин-карты; ИЛИ подвергавшийся насилию несовершеннолетний ребёнок (до 21 года) гражданина США или обладателя грин-карты; ИЛИ подвергавшийся насилию родитель гражданина США',
        },
      },
    ],
  },
  {
    type: 'table',
    id: 'employment',
    title: {
      en: 'Green Card through Employment',
      es: 'Tarjeta Verde por Empleo',
      ru: 'Грин-карта через трудоустройство',
    },
    intro: {
      en: 'You may qualify because of your job skills, education, or investment in the U.S. economy.',
      es: 'Puede calificar por sus habilidades laborales, educación o inversión en la economía de los Estados Unidos.',
      ru: 'Вы можете получить право на грин-карту благодаря профессиональным навыкам, образованию или инвестициям в экономику США.',
    },
    colHeader1: {
      en: 'Who you can apply as',
      es: 'Cómo puede solicitar',
      ru: 'Кем вы можете подать заявку',
    },
    colHeader2: {
      en: 'Who you need to be',
      es: 'Quién debe ser usted',
      ru: 'Кем вы должны быть',
    },
    rows: [
      {
        id: 'eb1',
        name: {
          en: 'Immigrant worker — Priority (EB-1)',
          es: 'Trabajador inmigrante — Prioridad (EB-1)',
          ru: 'Работник-иммигрант — Приоритет (EB-1)',
        },
        qualifier: {
          en: 'Someone with extraordinary ability in science, arts, education, business, or sports; OR an outstanding professor or researcher; OR a top-level manager or executive at a multinational company',
          es: 'Alguien con habilidades extraordinarias en ciencias, artes, educación, negocios o deportes; O un profesor o investigador destacado; O un gerente o ejecutivo de alto nivel en una empresa multinacional',
          ru: 'Человек с выдающимися способностями в науке, искусстве, образовании, бизнесе или спорте; ИЛИ выдающийся профессор или исследователь; ИЛИ менеджер или руководитель высшего звена транснациональной компании',
        },
      },
      {
        id: 'eb2',
        name: {
          en: 'Immigrant worker — Advanced degree or exceptional ability (EB-2)',
          es: 'Trabajador inmigrante — Título avanzado o habilidad excepcional (EB-2)',
          ru: 'Работник-иммигрант — Учёная степень или исключительные способности (EB-2)',
        },
        qualifier: {
          en: "Someone whose job requires an advanced degree (master's or higher); OR someone with exceptional ability in science, arts, or business; OR a person seeking a national interest waiver (your work greatly benefits the U.S.)",
          es: 'Alguien cuyo trabajo requiere un título avanzado (maestría o superior); O alguien con habilidades excepcionales en ciencias, artes o negocios; O una persona que busca una exención por interés nacional (su trabajo beneficia significativamente a los EE.UU.)',
          ru: 'Человек, чья работа требует учёной степени (магистра или выше); ИЛИ человек с исключительными способностями в науке, искусстве или бизнесе; ИЛИ человек, подающий на освобождение в национальных интересах (ваша работа значительно приносит пользу США)',
        },
      },
      {
        id: 'eb3',
        name: {
          en: 'Immigrant worker — Skilled, professional, or unskilled (EB-3)',
          es: 'Trabajador inmigrante — Calificado, profesional o no calificado (EB-3)',
          ru: 'Работник-иммигрант — Квалифицированный, специалист или неквалифицированный (EB-3)',
        },
        qualifier: {
          en: "A skilled worker (job requires at least 2 years of training or experience); OR a professional (job requires at least a 4-year U.S. bachelor's degree); OR an unskilled worker (job requires less than 2 years of training)",
          es: 'Un trabajador calificado (el trabajo requiere al menos 2 años de capacitación o experiencia); O un profesional (el trabajo requiere al menos una licenciatura de 4 años de EE.UU.); O un trabajador no calificado (el trabajo requiere menos de 2 años de capacitación)',
          ru: 'Квалифицированный работник (работа требует не менее 2 лет обучения или опыта); ИЛИ специалист (работа требует не менее 4-летней степени бакалавра США); ИЛИ неквалифицированный работник (работа требует менее 2 лет обучения)',
        },
      },
      {
        id: 'physician-niw',
        name: {
          en: 'Physician National Interest Waiver',
          es: 'Exención de Interés Nacional para Médicos',
          ru: 'Освобождение врача в национальных интересах',
        },
        qualifier: {
          en: 'A doctor who agrees to work full-time in a medically underserved area in the U.S. for a set period of time',
          es: 'Un médico que acepta trabajar a tiempo completo en un área médicamente desatendida en los EE.UU. durante un período determinado',
          ru: 'Врач, который соглашается работать полный рабочий день в медицински недостаточно обслуживаемом районе США в течение установленного периода',
        },
      },
      {
        id: 'eb5',
        name: {
          en: 'Immigrant investor (EB-5)',
          es: 'Inversionista inmigrante (EB-5)',
          ru: 'Инвестор-иммигрант (EB-5)',
        },
        qualifier: {
          en: 'Someone who has invested (or is in the process of investing) at least $1,050,000 in a new U.S. business that creates full-time jobs for at least 10 workers (investment can be $800,000 if the business is in a low-employment or rural area)',
          es: 'Alguien que ha invertido (o está en proceso de invertir) al menos $1,050,000 en un nuevo negocio en los EE.UU. que crea empleos a tiempo completo para al menos 10 trabajadores (la inversión puede ser de $800,000 si el negocio está en un área de bajo empleo o rural)',
          ru: 'Человек, который инвестировал (или находится в процессе инвестирования) не менее 1 050 000 долларов в новый бизнес в США, создающий рабочие места для не менее 10 работников (инвестиции могут составлять 800 000 долларов, если бизнес в районе с низкой занятостью или в сельской местности)',
        },
      },
    ],
  },
  {
    type: 'table',
    id: 'special-immigrant',
    title: {
      en: 'Green Card as a Special Immigrant',
      es: 'Tarjeta Verde como Inmigrante Especial',
      ru: 'Грин-карта как специальный иммигрант',
    },
    intro: {
      en: 'Certain groups of people have their own special path to a green card.',
      es: 'Ciertos grupos de personas tienen su propio camino especial hacia una tarjeta verde.',
      ru: 'Определённые группы людей имеют свой особый путь к получению грин-карты.',
    },
    colHeader1: {
      en: 'Who you can apply as',
      es: 'Cómo puede solicitar',
      ru: 'Кем вы можете подать заявку',
    },
    colHeader2: {
      en: 'Who you need to be',
      es: 'Quién debe ser usted',
      ru: 'Кем вы должны быть',
    },
    rows: [
      {
        id: 'religious-worker',
        name: {
          en: 'Religious worker',
          es: 'Trabajador religioso',
          ru: 'Религиозный работник',
        },
        qualifier: {
          en: 'A minister or other religious worker who is coming to the U.S. to work for a nonprofit religious organization',
          es: 'Un ministro u otro trabajador religioso que viene a los EE.UU. para trabajar en una organización religiosa sin fines de lucro',
          ru: 'Священнослужитель или другой религиозный работник, приезжающий в США для работы в некоммерческой религиозной организации',
        },
      },
      {
        id: 'sij',
        name: {
          en: 'Special Immigrant Juvenile',
          es: 'Menor Inmigrante Especial',
          ru: 'Специальный иммигрант-несовершеннолетний',
        },
        qualifier: {
          en: 'A young person (under 21) who was abused, abandoned, or neglected by a parent, and who has a court order protecting them',
          es: 'Un joven (menor de 21 años) que fue abusado, abandonado o descuidado por un padre o madre, y que tiene una orden judicial que lo protege',
          ru: 'Молодой человек (до 21 года), которого родитель подверг насилию, бросил или не заботился о нём, и у которого есть судебный приказ о защите',
        },
      },
      {
        id: 'afghan-iraqi',
        name: {
          en: 'Afghan or Iraqi national',
          es: 'Nacional afgano o iraquí',
          ru: 'Гражданин Афганистана или Ирака',
        },
        qualifier: {
          en: 'An Afghan or Iraqi person who worked as a translator or interpreter for the U.S. government; OR an Iraqi person who worked for the U.S. government in Iraq for at least 1 year after March 20, 2003; OR an Afghan person who worked for the U.S. government or NATO forces (ISAF)',
          es: 'Una persona afgana o iraquí que trabajó como traductor o intérprete para el gobierno de los EE.UU.; O una persona iraquí que trabajó para el gobierno de los EE.UU. en Irak durante al menos 1 año después del 20 de marzo de 2003; O una persona afgana que trabajó para el gobierno de los EE.UU. o las fuerzas de la OTAN (ISAF)',
          ru: 'Гражданин Афганистана или Ирака, работавший переводчиком для правительства США; ИЛИ гражданин Ирака, работавший для правительства США в Ираке не менее 1 года после 20 марта 2003 года; ИЛИ гражданин Афганистана, работавший для правительства США или сил НАТО (ISAF)',
        },
      },
      {
        id: 'broadcaster',
        name: {
          en: 'International broadcaster',
          es: 'Difusor internacional',
          ru: 'Международный тележурналист',
        },
        qualifier: {
          en: 'Someone coming to the U.S. to work in media for the U.S. Agency for Global Media (USAGM) or a USAGM partner organization',
          es: 'Alguien que viene a los EE.UU. para trabajar en los medios para la Agencia de Medios Globales de EE.UU. (USAGM) o una organización asociada de USAGM',
          ru: 'Человек, приезжающий в США для работы в СМИ Агентства США по глобальным медиа (USAGM) или организации-партнёра USAGM',
        },
      },
      {
        id: 'intl-org',
        name: {
          en: 'International organization or NATO employee (or their family)',
          es: 'Empleado de organización internacional u OTAN (o sus familiares)',
          ru: 'Сотрудник международной организации или НАТО (или их семья)',
        },
        qualifier: {
          en: 'A retired officer or employee of a qualifying international organization or NATO; OR an eligible family member of such a person',
          es: 'Un oficial o empleado jubilado de una organización internacional calificada o de la OTAN; O un familiar elegible de esa persona',
          ru: 'Вышедший на пенсию офицер или сотрудник квалификационной международной организации или НАТО; ИЛИ подходящий член семьи такого лица',
        },
      },
    ],
  },
  {
    type: 'table',
    id: 'refugee-asylee',
    title: {
      en: 'Green Card through Refugee or Asylee Status',
      es: 'Tarjeta Verde por Estatus de Refugiado o Asilado',
      ru: 'Грин-карта через статус беженца или лица, получившего убежище',
    },
    intro: {
      en: 'If you came to the U.S. as a refugee or were granted asylum, you can apply for a green card after one year.',
      es: 'Si llegó a los EE.UU. como refugiado o se le concedió asilo, puede solicitar una tarjeta verde después de un año.',
      ru: 'Если вы приехали в США в качестве беженца или вам было предоставлено убежище, вы можете подать заявление на грин-карту через год.',
    },
    colHeader1: {
      en: 'Who you can apply as',
      es: 'Cómo puede solicitar',
      ru: 'Кем вы можете подать заявку',
    },
    colHeader2: {
      en: 'Who you need to be',
      es: 'Quién debe ser usted',
      ru: 'Кем вы должны быть',
    },
    rows: [
      {
        id: 'asylee',
        name: {
          en: 'Asylee',
          es: 'Asilado',
          ru: 'Лицо, получившее убежище',
        },
        qualifier: {
          en: 'Someone who was granted asylum in the U.S. at least 1 year ago',
          es: 'Alguien a quien se le concedió asilo en los EE.UU. hace al menos 1 año',
          ru: 'Человек, получивший убежище в США не менее 1 года назад',
        },
      },
      {
        id: 'refugee',
        name: {
          en: 'Refugee',
          es: 'Refugiado',
          ru: 'Беженец',
        },
        qualifier: {
          en: 'Someone who entered the U.S. as a refugee at least 1 year ago',
          es: 'Alguien que entró a los EE.UU. como refugiado hace al menos 1 año',
          ru: 'Человек, въехавший в США в статусе беженца не менее 1 года назад',
        },
      },
    ],
  },
  {
    type: 'table',
    id: 'trafficking-crime',
    title: {
      en: 'Green Card for Human Trafficking and Crime Victims',
      es: 'Tarjeta Verde para Víctimas de Trata de Personas y Crímenes',
      ru: 'Грин-карта для жертв торговли людьми и преступлений',
    },
    intro: {
      en: 'If you are a victim of trafficking or certain crimes and you helped law enforcement, you may be able to get a green card.',
      es: 'Si es víctima de trata de personas o ciertos delitos y ayudó a las autoridades, es posible que pueda obtener una tarjeta verde.',
      ru: 'Если вы являетесь жертвой торговли людьми или определённых преступлений и помогали правоохранительным органам, вы, возможно, сможете получить грин-карту.',
    },
    colHeader1: {
      en: 'Who you can apply as',
      es: 'Cómo puede solicitar',
      ru: 'Кем вы можете подать заявку',
    },
    colHeader2: {
      en: 'Who you need to be',
      es: 'Quién debe ser usted',
      ru: 'Кем вы должны быть',
    },
    rows: [
      {
        id: 't-visa',
        name: {
          en: 'Human trafficking victim',
          es: 'Víctima de trata de personas',
          ru: 'Жертва торговли людьми',
        },
        qualifier: {
          en: 'Someone who currently has a T visa (given to victims of human trafficking)',
          es: 'Alguien que actualmente tiene una visa T (otorgada a víctimas de trata de personas)',
          ru: 'Человек, у которого в настоящее время есть виза T (выдаётся жертвам торговли людьми)',
        },
      },
      {
        id: 'u-visa',
        name: {
          en: 'Crime victim',
          es: 'Víctima de un delito',
          ru: 'Жертва преступления',
        },
        qualifier: {
          en: 'Someone who currently has a U visa (given to victims of certain crimes who helped police or prosecutors)',
          es: 'Alguien que actualmente tiene una visa U (otorgada a víctimas de ciertos delitos que ayudaron a la policía o a los fiscales)',
          ru: 'Человек, у которого в настоящее время есть виза U (выдаётся жертвам определённых преступлений, которые помогали полиции или прокуратуре)',
        },
      },
    ],
  },
  {
    type: 'table',
    id: 'abuse-victims',
    title: {
      en: 'Green Card for Victims of Abuse',
      es: 'Tarjeta Verde para Víctimas de Abuso',
      ru: 'Грин-карта для жертв насилия',
    },
    intro: {
      en: "If you have been abused or hurt by someone in your family and you are living in the U.S., there may be a way for you to get a green card without your abuser's help.",
      es: 'Si ha sido abusado o lastimado por alguien en su familia y vive en los EE.UU., puede haber una manera de obtener una tarjeta verde sin la ayuda de su agresor.',
      ru: 'Если вас обидели или причинили вред члены вашей семьи, и вы живёте в США, возможно, существует способ получить грин-карту без помощи обидчика.',
    },
    colHeader1: {
      en: 'Who you can apply as',
      es: 'Cómo puede solicitar',
      ru: 'Кем вы можете подать заявку',
    },
    colHeader2: {
      en: 'Who you need to be',
      es: 'Quién debe ser usted',
      ru: 'Кем вы должны быть',
    },
    rows: [
      {
        id: 'vawa-abuse',
        name: {
          en: 'VAWA self-petitioner (abuse victim)',
          es: 'Autopeticionario VAWA (víctima de abuso)',
          ru: 'Самостоятельный петиционер по VAWA (жертва насилия)',
        },
        qualifier: {
          en: 'An abused husband or wife of a U.S. citizen or green card holder; OR an abused unmarried child (under 21) of a U.S. citizen or green card holder; OR an abused parent of a U.S. citizen',
          es: 'Un esposo o esposa maltratado/a de un ciudadano estadounidense o titular de tarjeta verde; O un hijo o hija soltero/a maltratado/a (menor de 21 años) de un ciudadano estadounidense o titular de tarjeta verde; O un padre o madre maltratado/a de un ciudadano estadounidense',
          ru: 'Подвергавшийся насилию муж или жена гражданина США или обладателя грин-карты; ИЛИ подвергавшийся насилию несовершеннолетний ребёнок (до 21 года) гражданина США или обладателя грин-карты; ИЛИ подвергавшийся насилию родитель гражданина США',
        },
      },
      {
        id: 'sij-abuse',
        name: {
          en: 'Special Immigrant Juvenile',
          es: 'Menor Inmigrante Especial',
          ru: 'Специальный иммигрант-несовершеннолетний',
        },
        qualifier: {
          en: 'A child who was abused, abandoned, or neglected by a parent, and who has been placed under the protection of a court',
          es: 'Un niño que fue abusado, abandonado o descuidado por un padre o madre, y que ha sido colocado bajo la protección de un tribunal',
          ru: 'Ребёнок, которого родитель подверг насилию, бросил или не заботился о нём, и который был взят под защиту суда',
        },
      },
      {
        id: 'cuban-abuse',
        name: {
          en: 'Abused spouse or child under the Cuban Adjustment Act',
          es: 'Cónyuge o hijo/a maltratado/a bajo la Ley de Ajuste Cubano',
          ru: 'Подвергавшийся насилию супруг/ребёнок согласно Закону о кубинской адаптации',
        },
        qualifier: {
          en: 'The abused husband, wife, or child of a Cuban person',
          es: 'El esposo, esposa o hijo/a maltratado/a de una persona cubana',
          ru: 'Подвергавшийся насилию муж, жена или ребёнок гражданина Кубы',
        },
      },
      {
        id: 'hrifa-abuse',
        name: {
          en: 'Abused spouse or child under HRIFA',
          es: 'Cónyuge o hijo/a maltratado/a bajo HRIFA',
          ru: 'Подвергавшийся насилию супруг/ребёнок согласно HRIFA',
        },
        qualifier: {
          en: 'The abused husband, wife, or child of a green card holder who got their card through the Haitian Refugee Immigration Fairness Act (HRIFA)',
          es: 'El esposo, esposa o hijo/a maltratado/a de un titular de tarjeta verde que obtuvo su tarjeta a través de HRIFA',
          ru: 'Подвергавшийся насилию муж, жена или ребёнок обладателя грин-карты, получившего её по Закону о справедливости иммиграции гаитянских беженцев (HRIFA)',
        },
      },
    ],
  },
  {
    type: 'table',
    id: 'other',
    title: {
      en: 'Green Card through Other Categories',
      es: 'Tarjeta Verde por Otras Categorías',
      ru: 'Грин-карта через другие категории',
    },
    intro: {
      en: 'A number of special laws and programs give specific groups of people a path to a green card.',
      es: 'Varias leyes y programas especiales ofrecen a grupos específicos de personas un camino hacia una tarjeta verde.',
      ru: 'Ряд специальных законов и программ предоставляет определённым группам людей путь к получению грин-карты.',
    },
    colHeader1: {
      en: 'Who you can apply as',
      es: 'Cómo puede solicitar',
      ru: 'Кем вы можете подать заявку',
    },
    colHeader2: {
      en: 'Who you need to be',
      es: 'Quién debe ser usted',
      ru: 'Кем вы должны быть',
    },
    rows: [
      {
        id: 'lrif',
        name: {
          en: 'Liberian Refugee Immigration Fairness (LRIF)',
          es: 'Equidad de Inmigración para Refugiados Liberianos (LRIF)',
          ru: 'Справедливость иммиграции либерийских беженцев (LRIF)',
        },
        qualifier: {
          en: 'A person from Liberia who has lived continuously in the U.S. since at least November 20, 2014; OR the husband, wife, or child of such a person',
          es: 'Una persona de Liberia que ha vivido continuamente en los EE.UU. desde al menos el 20 de noviembre de 2014; O el esposo, esposa o hijo/a de esa persona',
          ru: 'Гражданин Либерии, непрерывно проживающий в США с 20 ноября 2014 года; ИЛИ муж, жена или ребёнок такого человека',
        },
      },
      {
        id: 'dv-lottery',
        name: {
          en: 'Diversity Immigrant Visa (DV Lottery)',
          es: 'Visa de Inmigrante por Diversidad (Lotería DV)',
          ru: 'Иммиграционная виза разнообразия (лотерея DV)',
        },
        qualifier: {
          en: "Someone who was selected in the U.S. government's annual green card lottery (open to people from countries that send few immigrants to the U.S.)",
          es: 'Alguien que fue seleccionado en la lotería anual de tarjetas verdes del gobierno de los EE.UU. (abierta a personas de países que envían pocos inmigrantes a los EE.UU.)',
          ru: 'Человек, выбранный в ежегодной лотерее грин-карт правительства США (открыта для граждан стран, из которых в США приезжает мало иммигрантов)',
        },
      },
      {
        id: 'cuban-adjustment',
        name: {
          en: 'Cuban Adjustment Act',
          es: 'Ley de Ajuste Cubano',
          ru: 'Закон о кубинской адаптации',
        },
        qualifier: {
          en: 'A person who was born in Cuba or is a Cuban citizen; OR the husband, wife, or child of such a person',
          es: 'Una persona nacida en Cuba o ciudadano cubano; O el esposo, esposa o hijo/a de esa persona',
          ru: 'Человек, рождённый на Кубе или являющийся гражданином Кубы; ИЛИ муж, жена или ребёнок такого человека',
        },
      },
      {
        id: 'cuban-adjustment-abuse',
        name: {
          en: 'Abused spouse or child under the Cuban Adjustment Act',
          es: 'Cónyuge o hijo/a maltratado/a bajo la Ley de Ajuste Cubano',
          ru: 'Подвергавшийся насилию супруг/ребёнок согласно Закону о кубинской адаптации',
        },
        qualifier: {
          en: 'The abused husband, wife, or child of a Cuban person',
          es: 'El esposo, esposa o hijo/a maltratado/a de una persona cubana',
          ru: 'Подвергавшийся насилию муж, жена или ребёнок гражданина Кубы',
        },
      },
      {
        id: 'hrifa-dependent',
        name: {
          en: 'Dependent under HRIFA',
          es: 'Dependiente bajo HRIFA',
          ru: 'Иждивенец согласно HRIFA',
        },
        qualifier: {
          en: 'The husband, wife, or child of a green card holder who got their card through the Haitian Refugee Immigration Fairness Act (HRIFA)',
          es: 'El esposo, esposa o hijo/a de un titular de tarjeta verde que obtuvo su tarjeta a través de HRIFA',
          ru: 'Муж, жена или ребёнок обладателя грин-карты, получившего её по Закону о справедливости иммиграции гаитянских беженцев (HRIFA)',
        },
      },
      {
        id: 'hrifa-abuse-other',
        name: {
          en: 'Abused spouse or child under HRIFA',
          es: 'Cónyuge o hijo/a maltratado/a bajo HRIFA',
          ru: 'Подвергавшийся насилию супруг/ребёнок согласно HRIFA',
        },
        qualifier: {
          en: 'The abused husband, wife, or child of a green card holder who got their card through HRIFA',
          es: 'El esposo, esposa o hijo/a maltratado/a de un titular de tarjeta verde que obtuvo su tarjeta a través de HRIFA',
          ru: 'Подвергавшийся насилию муж, жена или ребёнок обладателя грин-карты, получившего её по HRIFA',
        },
      },
      {
        id: 'lautenberg',
        name: {
          en: 'Lautenberg parolee',
          es: 'Liberto de Lautenberg',
          ru: 'Помилованный по программе Лаутенберга',
        },
        qualifier: {
          en: 'Someone who was let into the U.S. as a Lautenberg parolee (a special program for certain religious minorities from the former Soviet Union and Southeast Asia)',
          es: 'Alguien que fue admitido en los EE.UU. como liberto de Lautenberg (un programa especial para ciertas minorías religiosas de la ex Unión Soviética y el Sudeste Asiático)',
          ru: 'Человек, допущенный в США по программе Лаутенберга (специальная программа для определённых религиозных меньшинств из бывшего Советского Союза и Юго-Восточной Азии)',
        },
      },
      {
        id: 'indochinese',
        name: {
          en: 'Indochinese Parole Adjustment Act of 2000',
          es: 'Ley de Ajuste de Libertad Condicional de Indochina de 2000',
          ru: 'Закон 2000 года об адаптации условно-досрочно освобождённых из Индокитая',
        },
        qualifier: {
          en: 'A person from Vietnam, Cambodia, or Laos who was let into the U.S. before October 1, 1997, through a refugee or resettlement program',
          es: 'Una persona de Vietnam, Camboya o Laos que fue admitida en los EE.UU. antes del 1 de octubre de 1997, a través de un programa de refugiados o reasentamiento',
          ru: 'Гражданин Вьетнама, Камбоджи или Лаоса, допущенный в США до 1 октября 1997 года по программе беженцев или переселения',
        },
      },
      {
        id: 'american-indian-canada',
        name: {
          en: 'American Indian born in Canada',
          es: 'Indígena americano nacido en Canadá',
          ru: 'Американский индеец, рождённый в Канаде',
        },
        qualifier: {
          en: 'A person born in Canada who has at least 50% American Indian ancestry and whose main home is in the U.S.',
          es: 'Una persona nacida en Canadá que tiene al menos un 50% de ascendencia indígena americana y cuyo hogar principal está en los EE.UU.',
          ru: 'Человек, рождённый в Канаде, у которого не менее 50% коренных американских предков и чей основной дом находится в США',
        },
      },
      {
        id: 'diplomat-born',
        name: {
          en: 'Person born in the U.S. to a foreign diplomat',
          es: 'Persona nacida en EE.UU. con padre/madre diplomático extranjero',
          ru: 'Человек, рождённый в США у иностранного дипломата',
        },
        qualifier: {
          en: "Someone born in the U.S. whose parent was a foreign diplomat assigned to the U.S. at the time of birth",
          es: 'Alguien nacido en los EE.UU. cuyo padre o madre era un diplomático extranjero asignado a los EE.UU. en el momento del nacimiento',
          ru: 'Человек, рождённый в США, чей родитель был иностранным дипломатом, находившимся в командировке в США в момент рождения',
        },
      },
      {
        id: 'section-13',
        name: {
          en: 'Section 13 — diplomat unable to return home',
          es: 'Sección 13 — diplomático que no puede regresar a su país',
          ru: 'Раздел 13 — дипломат, не способный вернуться на родину',
        },
        qualifier: {
          en: 'A foreign diplomat or high-ranking official who was stationed in the U.S. and cannot safely return to their home country',
          es: 'Un diplomático extranjero o funcionario de alto rango que estuvo asignado en los EE.UU. y no puede regresar con seguridad a su país de origen',
          ru: 'Иностранный дипломат или высокопоставленный чиновник, находившийся в командировке в США и не способный безопасно вернуться в свою страну',
        },
      },
    ],
  },
  {
    type: 'simple',
    id: 'registry',
    title: {
      en: 'Green Card through Registry',
      es: 'Tarjeta Verde por Registro',
      ru: 'Грин-карта через реестр',
    },
    text: {
      en: 'If you have lived in the U.S. continuously since before January 1, 1972, you may be able to apply for a green card through the Registry program — even if you entered without permission or stayed longer than your visa allowed.',
      es: 'Si ha vivido en los EE.UU. de forma continua desde antes del 1 de enero de 1972, es posible que pueda solicitar una tarjeta verde a través del programa de Registro, incluso si entró sin permiso o se quedó más tiempo del permitido por su visa.',
      ru: 'Если вы непрерывно проживаете в США с периода до 1 января 1972 года, вы, возможно, сможете подать заявление на грин-карту по программе реестра — даже если въехали без разрешения или превысили срок визы.',
    },
  },
]
