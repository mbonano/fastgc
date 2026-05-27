import type { T } from '../data/content'

export interface ImpactItem { heading: T; text: T }
export interface CanDoItem { action: T; explanation: T; source: string; sourceUrl: string | null }
export interface CannotDoItem { limitation: T; explanation: T; source: string; sourceUrl: string | null }

export const rightsUI = {
  pageTitle: {
    en: 'Legal Rights & Recent Policies',
    es: 'Derechos Legales y Políticas Recientes',
    ru: 'Правовые права и последние изменения в политике',
  },
  pageSubtitle: {
    en: 'Know the laws that protect you — and the recent policy changes that may affect your case.',
    es: 'Conozca las leyes que le protegen y los cambios de política recientes que pueden afectar su caso.',
    ru: 'Знайте законы, которые вас защищают, и последние изменения политики, которые могут повлиять на ваше дело.',
  },

  // USCIS Memo
  memoBadge: {
    en: 'New Policy — May 21, 2026',
    es: 'Nueva Política — 21 de mayo de 2026',
    ru: 'Новая политика — 21 мая 2026 г.',
  },
  memoTitle: {
    en: 'USCIS Memo PM-602-0199: Stricter Green Card Reviews',
    es: 'Memo PM-602-0199 de USCIS: Revisiones Más Estrictas para Tarjeta Verde',
    ru: 'Меморандум USCIS PM-602-0199: Более строгие проверки при выдаче грин-карт',
  },
  memoIntro: {
    en: 'On May 21, 2026, USCIS issued a new rule (Memo PM-602-0199). It tells immigration officers to treat getting a green card inside the U.S. as a special privilege, not an automatic right. Officers now have more power to say no.',
    es: 'El 21 de mayo de 2026, USCIS emitió una nueva regla (Memo PM-602-0199). Le indica a los oficiales de inmigración que traten la obtención de una tarjeta verde dentro de los EE.UU. como un privilegio especial, no como un derecho automático. Los oficiales ahora tienen más poder para decir que no.',
    ru: '21 мая 2026 года USCIS выпустил новое правило (Меморандум PM-602-0199). Оно предписывает иммиграционным сотрудникам рассматривать получение грин-карты внутри США как особую привилегию, а не автоматическое право. Теперь у сотрудников больше полномочий для отказа.',
  },
  memoSourceLabel: {
    en: 'View official memo (USCIS.gov)',
    es: 'Ver memo oficial (USCIS.gov)',
    ru: 'Просмотреть официальный меморандум (USCIS.gov)',
  },
  memoKeyImpactsHeader: {
    en: 'Key Impacts',
    es: 'Impactos Clave',
    ru: 'Ключевые последствия',
  },

  // ICE & CBP Powers
  iceCbpTitle: {
    en: 'ICE & CBP: Powers and Limits',
    es: 'ICE y CBP: Poderes y Límites',
    ru: 'ICE и CBP: полномочия и ограничения',
  },
  iceCbpIntro: {
    en: 'Immigration and Customs Enforcement (ICE) and Customs and Border Protection (CBP) have real legal powers — but the U.S. Constitution strictly limits what they can do.',
    es: 'Inmigración y Control de Aduanas (ICE) y la Protección Aduanera y Fronteriza (CBP) tienen poderes legales reales, pero la Constitución de los EE.UU. limita estrictamente lo que pueden hacer.',
    ru: 'Иммиграционная и таможенная полиция (ICE) и Таможенная и пограничная охрана (CBP) обладают реальными правовыми полномочиями — но Конституция США строго ограничивает их действия.',
  },
  canDoHeader: {
    en: 'What They CAN Legally Do',
    es: 'Lo Que PUEDEN Hacer Legalmente',
    ru: 'Что они МОГУТ делать по закону',
  },
  canDoSubheader: {
    en: 'These actions are permitted under U.S. law',
    es: 'Estas acciones están permitidas por la ley de los EE.UU.',
    ru: 'Эти действия разрешены законодательством США',
  },
  cannotDoHeader: {
    en: 'Your Rights: What They CANNOT Do',
    es: 'Sus Derechos: Lo Que NO Pueden Hacer',
    ru: 'Ваши права: что они НЕ МОГУТ делать',
  },
  cannotDoSubheader: {
    en: 'These are constitutional protections that apply to every person in the U.S.',
    es: 'Estas son protecciones constitucionales que aplican a toda persona en los EE.UU.',
    ru: 'Это конституционные защиты, действующие для каждого человека в США',
  },
  legalSourceLabel: {
    en: 'Legal source:',
    es: 'Fuente legal:',
    ru: 'Правовая основа:',
  },
  protectedByLabel: {
    en: 'Protected by:',
    es: 'Protegido por:',
    ru: 'Защищено:',
  },

  disclaimer: {
    en: 'This information is for general education only — not legal advice. If you are detained or approached by ICE or CBP, contact a licensed immigration attorney immediately.',
    es: 'Esta información es solo para educación general — no es asesoramiento legal. Si es detenido o abordado por ICE o CBP, comuníquese inmediatamente con un abogado de inmigración con licencia.',
    ru: 'Эта информация предназначена только для общего образования — не для юридических консультаций. Если вас задержали или к вам подошли агенты ICE или CBP, немедленно свяжитесь с лицензированным иммиграционным адвокатом.',
  },
} satisfies Record<string, T>

export const memoImpacts: ImpactItem[] = [
  {
    heading: {
      en: 'Stricter Reviews for Everyone',
      es: 'Revisiones Más Estrictas para Todos',
      ru: 'Более строгие проверки для всех',
    },
    text: {
      en: 'Meeting the basic eligibility rules is no longer enough. Officers will look at your entire life history and can deny your application if they decide you do not deserve the privilege.',
      es: 'Cumplir las reglas básicas de elegibilidad ya no es suficiente. Los oficiales revisarán toda su historia de vida y pueden denegar su solicitud si deciden que usted no merece el privilegio.',
      ru: 'Соответствия базовым требованиям больше недостаточно. Сотрудники будут изучать всю вашу жизненную историю и могут отказать в рассмотрении заявления, если решат, что вы не заслуживаете этой привилегии.',
    },
  },
  {
    heading: {
      en: 'Zero Tolerance for Past Mistakes',
      es: 'Cero Tolerancia para Errores Pasados',
      ru: 'Нулевая терпимость к прошлым ошибкам',
    },
    text: {
      en: 'Officers will be very strict about any instance of working without authorization or staying in the U.S. past your visa or status expiration date.',
      es: 'Los oficiales serán muy estrictos con cualquier caso de trabajo sin autorización o de permanecer en los EE.UU. más allá de la fecha de vencimiento de su visa o estatus.',
      ru: 'Сотрудники будут очень строги в отношении любых случаев работы без разрешения или пребывания в США после истечения срока визы или статуса.',
    },
  },
  {
    heading: {
      en: 'High Risk for Tourists & Students',
      es: 'Alto Riesgo para Turistas y Estudiantes',
      ru: 'Высокий риск для туристов и студентов',
    },
    text: {
      en: 'People on student (F-1) or tourist (B-2) visas face high risk. Applying for a green card contradicts the temporary nature of those visas, which officers can now use as a reason for denial.',
      es: 'Las personas con visas de estudiante (F-1) o turista (B-2) enfrentan un alto riesgo. Solicitar una tarjeta verde contradice la naturaleza temporal de esas visas, lo que los oficiales ahora pueden usar como razón para denegar la solicitud.',
      ru: 'Люди со студенческими (F-1) или туристическими (B-2) визами находятся под высоким риском. Подача заявления на грин-карту противоречит временному характеру этих виз — сотрудники теперь могут использовать это как основание для отказа.',
    },
  },
  {
    heading: {
      en: 'Work Visas Are Safer, But Not Immune',
      es: 'Las Visas de Trabajo Son Más Seguras, Pero No Inmunes',
      ru: 'Рабочие визы безопаснее, но не застрахованы',
    },
    text: {
      en: 'People on H-1B or L-1 work visas are in a safer position because those visas legally allow you to pursue a green card. However, any past mistakes can still lead to a denial.',
      es: 'Las personas con visas de trabajo H-1B o L-1 están en una posición más segura porque esas visas le permiten legalmente buscar una tarjeta verde. Sin embargo, cualquier error pasado todavía puede conducir a una denegación.',
      ru: 'Люди с рабочими визами H-1B или L-1 находятся в более безопасном положении, поскольку эти визы юридически позволяют добиваться грин-карты. Однако любые прошлые ошибки всё равно могут привести к отказу.',
    },
  },
  {
    heading: {
      en: 'Who Is Protected From This Rule',
      es: 'Quién Está Protegido de Esta Regla',
      ru: 'Кто защищён от этого правила',
    },
    text: {
      en: 'Refugees, asylees, and victims of abuse or crime — including VAWA, U visa, T visa, and SIJ applicants — are protected. This stricter policy does not apply to them.',
      es: 'Los refugiados, asilados y víctimas de abuso o crimen — incluyendo solicitantes de VAWA, visa U, visa T y SIJ — están protegidos. Esta política más estricta no se les aplica.',
      ru: 'Беженцы, лица, получившие убежище, и жертвы насилия или преступлений — включая заявителей по VAWA, визам U, T и SIJ — находятся под защитой. Эта более строгая политика на них не распространяется.',
    },
  },
]

export const canDoItems: CanDoItem[] = [
  {
    action: {
      en: 'The 100-Mile Border Zone',
      es: 'La Zona Fronteriza de 100 Millas',
      ru: '100-мильная пограничная зона',
    },
    explanation: {
      en: 'Within 100 air miles of any U.S. border or coastline, Border Patrol can legally board and search buses, trains, and ships without needing a specific reason.',
      es: 'Dentro de 100 millas aéreas de cualquier frontera o costa de los EE.UU., la Patrulla Fronteriza puede legalmente abordar y registrar autobuses, trenes y barcos sin necesidad de una razón específica.',
      ru: 'В пределах 100 воздушных миль от любой границы или побережья США Пограничный патруль может законно подниматься на борт и обыскивать автобусы, поезда и суда без необходимости в конкретном основании.',
    },
    source: '8 U.S. Code § 1357',
    sourceUrl: 'https://www.law.cornell.edu/uscode/text/8/1357',
  },
  {
    action: {
      en: 'Permanent Checkpoints',
      es: 'Puestos de Control Permanentes',
      ru: 'Постоянные контрольно-пропускные пункты',
    },
    explanation: {
      en: 'They can set up permanent checkpoints within the 100-mile zone and briefly stop vehicles to ask about citizenship — without needing a specific reason to stop you.',
      es: 'Pueden establecer puestos de control permanentes dentro de la zona de 100 millas y detener brevemente vehículos para preguntar sobre la ciudadanía, sin necesidad de una razón específica para detenerle.',
      ru: 'Они могут устанавливать постоянные КПП в 100-мильной зоне и кратковременно останавливать транспортные средства для вопросов о гражданстве — без необходимости в конкретной причине.',
    },
    source: 'United States v. Martinez-Fuerte (1976)',
    sourceUrl: 'https://supreme.justia.com/cases/federal/us/428/543/',
  },
  {
    action: {
      en: 'Roving Patrols',
      es: 'Patrullas Móviles',
      ru: 'Патрули на дорогах',
    },
    explanation: {
      en: 'When agents are driving around (not at a fixed checkpoint), they can only pull your vehicle over if they have "reasonable suspicion" — a specific, articulable reason to believe you are violating an immigration law.',
      es: 'Cuando los agentes patrullan (no en un puesto de control fijo), solo pueden detener su vehículo si tienen "sospecha razonable" — una razón específica y articulable para creer que usted está violando una ley de inmigración.',
      ru: 'Когда агенты патрулируют на автомобиле (не на фиксированном КПП), они могут остановить ваш автомобиль только при наличии «разумного подозрения» — конкретного, обоснованного основания полагать, что вы нарушаете иммиграционный закон.',
    },
    source: 'United States v. Brignoni-Ponce (1975)',
    sourceUrl: 'https://supreme.justia.com/cases/federal/us/422/873/',
  },
  {
    action: {
      en: 'Arrests in Public Places',
      es: 'Arrestos en Lugares Públicos',
      ru: 'Аресты в общественных местах',
    },
    explanation: {
      en: 'ICE agents can arrest someone in a public place if they have an administrative warrant (Form I-200 or I-205) issued by the agency — this is not the same as a criminal warrant signed by a judge.',
      es: 'Los agentes de ICE pueden arrestar a alguien en un lugar público si tienen una orden administrativa (Formulario I-200 o I-205) emitida por la agencia — esto no es lo mismo que una orden penal firmada por un juez.',
      ru: 'Агенты ICE могут арестовать человека в общественном месте при наличии административного ордера (Форма I-200 или I-205), выданного агентством — это не то же самое, что уголовный ордер, подписанный судьёй.',
    },
    source: 'Immigration and Nationality Act (INA) § 287',
    sourceUrl: null,
  },
]

export const cannotDoItems: CannotDoItem[] = [
  {
    limitation: {
      en: 'Enter Your Home Without Permission',
      es: 'Entrar a Su Hogar Sin Permiso',
      ru: 'Входить в ваш дом без разрешения',
    },
    explanation: {
      en: 'ICE CANNOT enter your private home without your consent UNLESS they have a criminal warrant signed by a judge. An ICE administrative warrant (I-200 or I-205) does NOT give them the right to force entry. Forcing their way in violates the 4th Amendment.',
      es: 'ICE NO PUEDE entrar a su hogar privado sin su consentimiento A MENOS QUE tengan una orden penal firmada por un juez. Una orden administrativa de ICE (I-200 o I-205) NO les da el derecho a forzar la entrada. Forzar la entrada viola la 4ª Enmienda.',
      ru: 'ICE НЕ МОЖЕТ войти в ваш частный дом без вашего согласия, ЕСЛИ ТОЛЬКО у них нет уголовного ордера, подписанного судьёй. Административный ордер ICE (I-200 или I-205) НЕ даёт им права на принудительный вход. Принудительный вход нарушает 4-ю поправку.',
    },
    source: 'Fourth Amendment, U.S. Constitution',
    sourceUrl: 'https://constitution.congress.gov/constitution/amendment-4/',
  },
  {
    limitation: {
      en: 'Hold You Too Long at a Checkpoint',
      es: 'Detenerle Demasiado Tiempo en un Puesto de Control',
      ru: 'Задерживать вас надолго на КПП',
    },
    explanation: {
      en: 'They CANNOT keep you stopped at a checkpoint for an extended time just to investigate your immigration status unless they have reasonable suspicion of a crime. A stop must be brief.',
      es: 'NO PUEDEN mantenerle detenido en un puesto de control durante un tiempo prolongado solo para investigar su estatus migratorio a menos que tengan sospecha razonable de un delito. Una detención debe ser breve.',
      ru: 'Они НЕ МОГУТ удерживать вас на КПП длительное время только для расследования вашего иммиграционного статуса, если у них нет разумного подозрения в преступлении. Остановка должна быть кратковременной.',
    },
    source: 'Rodriguez v. United States (2015)',
    sourceUrl: 'https://supreme.justia.com/cases/federal/us/575/13-9972/',
  },
  {
    limitation: {
      en: 'Search Your Car Without Cause',
      es: 'Registrar Su Automóvil Sin Causa',
      ru: 'Обыскивать ваш автомобиль без причины',
    },
    explanation: {
      en: 'They CANNOT search inside your vehicle without your permission or without "probable cause" — concrete evidence that you are hiding something illegal.',
      es: 'NO PUEDEN registrar el interior de su vehículo sin su permiso o sin "causa probable" — evidencia concreta de que está ocultando algo ilegal.',
      ru: 'Они НЕ МОГУТ обыскивать ваш автомобиль без вашего разрешения или без «вероятной причины» — конкретных доказательств того, что вы скрываете что-то незаконное.',
    },
    source: 'Almeida-Sanchez v. United States (1973)',
    sourceUrl: 'https://supreme.justia.com/cases/federal/us/413/266/',
  },
  {
    limitation: {
      en: 'Arrest You for Staying Silent',
      es: 'Arrestarle por Guardar Silencio',
      ru: 'Арестовывать вас за молчание',
    },
    explanation: {
      en: 'You have the right to remain silent under the 5th Amendment. ICE CANNOT legally arrest you or search you just because you refuse to answer questions about your birthplace or citizenship status.',
      es: 'Usted tiene el derecho de guardar silencio bajo la 5ª Enmienda. ICE NO PUEDE arrestarle legalmente ni registrarle solo porque usted se niegue a responder preguntas sobre su lugar de nacimiento o estatus de ciudadanía.',
      ru: 'У вас есть право хранить молчание по 5-й поправке. ICE НЕ МОЖЕТ законно арестовать или обыскать вас только потому, что вы отказываетесь отвечать на вопросы о месте рождения или гражданстве.',
    },
    source: 'Fifth Amendment, U.S. Constitution',
    sourceUrl: 'https://constitution.congress.gov/constitution/amendment-5/',
  },
]
