import type { T } from '../data/content'

type ImpactItem = { heading: T; text: T }
type CanDoItem = { action: T; explanation: T; source: string; sourceUrl: string | null }
type CannotDoItem = { limitation: T; explanation: T; source: string; sourceUrl: string | null }

export const iceUI = {
  pageTitle: {
    en: 'ICE & Your Rights',
    es: 'ICE y Sus Derechos',
    ru: 'ICE и Ваши Права',
  },
  pageSubtitle: {
    en: 'Immigration agents have real powers — but the U.S. Constitution also gives you real rights. Knowing the difference can protect you and your family.',
    es: 'Los agentes de inmigración tienen poderes reales — pero la Constitución de los EE.UU. también le otorga derechos reales. Conocer la diferencia puede protegerle a usted y a su familia.',
    ru: 'У иммиграционных агентов есть реальные полномочия — но Конституция США также наделяет вас реальными правами. Знание разницы может защитить вас и вашу семью.',
  },
  memoSectionBadge: {
    en: 'Important: New Rule — May 2026',
    es: 'Importante: Nueva Regla — Mayo 2026',
    ru: 'Важно: Новое правило — май 2026',
  },
  memoSectionIntro: {
    en: 'On May 21, 2026, USCIS issued a new policy (Memo PM-602-0199) giving officers more power to deny green card applications. Getting a green card inside the U.S. is now treated as a privilege, not an automatic right.',
    es: 'El 21 de mayo de 2026, USCIS emitió una nueva política (Memo PM-602-0199) que otorga a los oficiales más poder para denegar solicitudes de tarjeta verde. Obtener una tarjeta verde dentro de los EE.UU. ahora se trata como un privilegio, no como un derecho automático.',
    ru: '21 мая 2026 года USCIS выпустил новую политику (Меморандум PM-602-0199), дающую сотрудникам больше полномочий для отказа в выдаче грин-карт. Получение грин-карты внутри США теперь рассматривается как привилегия, а не как автоматическое право.',
  },
  canDoHeader: {
    en: 'What ICE & CBP Can Legally Do',
    es: 'Lo Que ICE y CBP Pueden Hacer Legalmente',
    ru: 'Что ICE и CBP могут делать по закону',
  },
  canDoSubheader: {
    en: 'These are actions allowed by U.S. law',
    es: 'Estas son acciones permitidas por la ley de los EE.UU.',
    ru: 'Это действия, разрешённые законодательством США',
  },
  cannotDoHeader: {
    en: 'Your Rights: What They CANNOT Do',
    es: 'Sus Derechos: Lo Que NO Pueden Hacer',
    ru: 'Ваши Права: Что они НЕ МОГУТ делать',
  },
  cannotDoSubheader: {
    en: 'These are constitutional protections that apply to everyone in the U.S.',
    es: 'Estas son protecciones constitucionales que se aplican a todos en los EE.UU.',
    ru: 'Это конституционные защиты, действующие для всех в США',
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
    en: 'This information is for general education only — not legal advice. If you are detained or approached by ICE, contact a licensed immigration attorney immediately.',
    es: 'Esta información es solo para educación general — no es asesoramiento legal. Si es detenido o abordado por ICE, contacte inmediatamente a un abogado de inmigración con licencia.',
    ru: 'Эта информация предназначена только для общего образования — не для юридических консультаций. Если вас задержали или к вам подошли агенты ICE, немедленно обратитесь к лицензированному иммиграционному адвокату.',
  },
  bannerInsideDetail: {
    en: 'Border Patrol has expanded powers in your area, including checkpoint stops and vehicle searches. Know your rights.',
    es: 'La Patrulla Fronteriza tiene poderes ampliados en su área, incluyendo detenciones en puestos de control y registros de vehículos. Conozca sus derechos.',
    ru: 'Пограничный патруль имеет расширенные полномочия в вашем районе, включая остановки на КПП и обыски транспортных средств. Знайте свои права.',
  },
  bannerOutsideDetail: {
    en: "Standard constitutional protections apply in your area. Border Patrol's expanded powers do not apply here.",
    es: 'Las protecciones constitucionales estándar se aplican en su área. Los poderes ampliados de la Patrulla Fronteriza no aplican aquí.',
    ru: 'В вашем районе действуют стандартные конституционные защиты. Расширенные полномочия Пограничного патруля здесь не применяются.',
  },
  bannerZoneNote: {
    en: 'The 100-mile border zone includes all land borders and all U.S. coastlines (8 U.S.C. § 1357).',
    es: 'La zona fronteriza de 100 millas incluye todas las fronteras terrestres y todas las costas de los EE.UU. (8 U.S.C. § 1357).',
    ru: '100-мильная пограничная зона включает все сухопутные границы и все побережья США (8 U.S.C. § 1357).',
  },
  bannerLocationHint: {
    en: 'Enable location access in your browser to check your border zone status.',
    es: 'Active el acceso a la ubicación en su navegador para verificar su estado en la zona fronteriza.',
    ru: 'Включите доступ к местоположению в браузере, чтобы проверить статус пограничной зоны.',
  },
  mapLegend: {
    en: 'Dashed circle = 100-mile radius from your location',
    es: 'Círculo punteado = radio de 100 millas desde su ubicación',
    ru: 'Пунктирный круг = радиус 100 миль от вашего местоположения',
  },
  mapYourLocation: {
    en: 'Your location',
    es: 'Su ubicación',
    ru: 'Ваше местоположение',
  },
  mapMilesFromBorder: {
    en: 'miles from nearest U.S. border',
    es: 'millas de la frontera más cercana de los EE.UU.',
    ru: 'миль до ближайшей границы США',
  },
  milesAbbrev: {
    en: 'mi from nearest border',
    es: 'mi de la frontera más cercana',
    ru: 'миль до ближайшей границы',
  },
} satisfies Record<string, T>

export const uscisImpacts: ImpactItem[] = [
  {
    heading: {
      en: 'Stricter Reviews for Everyone',
      es: 'Revisiones Más Estrictas para Todos',
      ru: 'Более строгие проверки для всех',
    },
    text: {
      en: "Meeting the basic rules is no longer enough. Officers now look at your entire life history and can deny your application if they decide you don't deserve the privilege of a green card.",
      es: 'Cumplir las reglas básicas ya no es suficiente. Los oficiales ahora revisan toda su historia de vida y pueden denegar su solicitud si deciden que usted no merece el privilegio de una tarjeta verde.',
      ru: 'Выполнения основных требований больше недостаточно. Сотрудники теперь изучают всю вашу жизненную историю и могут отказать в выдаче грин-карты, если решат, что вы не заслуживаете этой привилегии.',
    },
  },
  {
    heading: {
      en: 'Zero Tolerance for Past Mistakes',
      es: 'Cero Tolerancia para Errores Pasados',
      ru: 'Нулевая терпимость к прошлым ошибкам',
    },
    text: {
      en: 'Officers will be very strict about any time you worked without permission or stayed in the U.S. past your visa expiration date.',
      es: 'Los oficiales serán muy estrictos con cualquier momento en que usted haya trabajado sin permiso o permanecido en los EE.UU. más allá de la fecha de vencimiento de su visa.',
      ru: 'Сотрудники будут очень строги в отношении любых случаев, когда вы работали без разрешения или оставались в США после истечения срока визы.',
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
      ru: 'Люди со студенческими (F-1) или туристическими (B-2) визами находятся под высоким риском. Подача заявления на грин-карту противоречит временному характеру этих виз, что сотрудники теперь могут использовать как основание для отказа.',
    },
  },
  {
    heading: {
      en: 'Work Visas Are Safer, But Not Immune',
      es: 'Las Visas de Trabajo Son Más Seguras, Pero No Inmunes',
      ru: 'Рабочие визы безопаснее, но не защищены',
    },
    text: {
      en: 'People on H-1B or L-1 work visas are safer because those visas legally allow you to pursue a green card. But any past mistakes can still lead to a denial.',
      es: 'Las personas con visas de trabajo H-1B o L-1 están más seguras porque esas visas legalmente le permiten buscar una tarjeta verde. Pero cualquier error pasado aún puede llevar a una denegación.',
      ru: 'Люди с рабочими визами H-1B или L-1 находятся в более безопасном положении, поскольку эти визы юридически позволяют добиваться грин-карты. Но любые прошлые ошибки всё равно могут привести к отказу.',
    },
  },
  {
    heading: {
      en: 'Who Is Protected From This Rule',
      es: 'Quién Está Protegido de Esta Regla',
      ru: 'Кто защищён от этого правила',
    },
    text: {
      en: 'Refugees, asylees, and victims of abuse or crime (VAWA, U visa, T visa, and SIJ applicants) are protected. This stricter rule does not apply to them.',
      es: 'Los refugiados, asilados y víctimas de abuso o crimen (solicitantes de VAWA, visa U, visa T y SIJ) están protegidos. Esta regla más estricta no se aplica a ellos.',
      ru: 'Беженцы, лица, получившие убежище, и жертвы насилия или преступлений (заявители по VAWA, визам U, T и SIJ) защищены. Это более строгое правило не распространяется на них.',
    },
  },
]

export const canDoItems: CanDoItem[] = [
  {
    action: {
      en: 'The 100-Mile Zone',
      es: 'La Zona de 100 Millas',
      ru: '100-мильная зона',
    },
    explanation: {
      en: 'Within 100 air miles of any U.S. border or coastline, Border Patrol can legally board and search buses, trains, and ships — without needing a specific reason.',
      es: 'Dentro de 100 millas aéreas de cualquier frontera o costa de los EE.UU., la Patrulla Fronteriza puede legalmente abordar y registrar autobuses, trenes y barcos — sin necesidad de una razón específica.',
      ru: 'В радиусе 100 воздушных миль от любой границы или побережья США Пограничный патруль может законно садиться и осматривать автобусы, поезда и корабли — без необходимости в конкретном основании.',
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
      es: 'Pueden establecer puestos de control permanentes dentro de la zona de 100 millas y detener brevemente vehículos para preguntar sobre la ciudadanía — sin necesidad de una razón específica para detenerle.',
      ru: 'Они могут создавать постоянные контрольно-пропускные пункты в 100-мильной зоне и кратковременно останавливать транспортные средства для вопросов о гражданстве — без необходимости в конкретной причине.',
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
      en: 'If agents are driving around (not at a checkpoint), they can only pull your vehicle over if they have "reasonable suspicion" — a specific, articulable reason to think you\'re violating an immigration law.',
      es: 'Si los agentes están conduciendo (no en un puesto de control), solo pueden detener su vehículo si tienen "sospecha razonable" — una razón específica y articulable para creer que usted está violando una ley de inmigración.',
      ru: 'Если агенты патрулируют на автомобиле (не на КПП), они могут остановить ваш автомобиль только при наличии «разумного подозрения» — конкретного, обоснованного основания полагать, что вы нарушаете иммиграционный закон.',
    },
    source: 'United States v. Brignoni-Ponce (1975)',
    sourceUrl: 'https://supreme.justia.com/cases/federal/us/422/873/',
  },
  {
    action: {
      en: 'Arrests in Public',
      es: 'Arrestos en Lugares Públicos',
      ru: 'Аресты в общественных местах',
    },
    explanation: {
      en: 'ICE agents can arrest people in public places if they have an administrative warrant (Form I-200 or I-205) issued by the agency — not a court.',
      es: 'Los agentes de ICE pueden arrestar personas en lugares públicos si tienen una orden administrativa (Formulario I-200 o I-205) emitida por la agencia — no por un tribunal.',
      ru: 'Агенты ICE могут арестовывать людей в общественных местах при наличии административного ордера (Форма I-200 или I-205), выданного агентством — не судом.',
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
      en: 'ICE CANNOT enter your private home without your consent UNLESS they have a criminal warrant signed by a judge. An ICE administrative warrant does NOT give them the right to force entry. Forcing their way in violates the 4th Amendment.',
      es: 'ICE NO PUEDE entrar a su hogar privado sin su consentimiento A MENOS QUE tengan una orden penal firmada por un juez. Una orden administrativa de ICE NO les da el derecho de forzar la entrada. Forzar la entrada viola la 4ª Enmienda.',
      ru: 'ICE НЕ МОЖЕТ войти в ваш частный дом без вашего согласия, ЕСЛИ ТОЛЬКО у них нет уголовного ордера, подписанного судьёй. Административный ордер ICE НЕ даёт им права на принудительный вход. Принудительный вход нарушает 4-ю поправку.',
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
      en: 'They CANNOT keep you stopped for an extended time at a checkpoint just to investigate your immigration status unless they have reasonable suspicion of a crime. A stop must be brief.',
      es: 'NO PUEDEN mantenerle detenido por un tiempo prolongado en un puesto de control solo para investigar su estatus migratorio a menos que tengan sospecha razonable de un crimen. Una detención debe ser breve.',
      ru: 'Они НЕ МОГУТ удерживать вас на КПП длительное время только для проверки иммиграционного статуса, если у них нет разумного подозрения в совершении преступления. Остановка должна быть кратковременной.',
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
      en: 'They CANNOT search inside your vehicle without your permission or without "probable cause" — strong proof that you are hiding something illegal.',
      es: 'NO PUEDEN registrar el interior de su vehículo sin su permiso o sin "causa probable" — prueba sólida de que usted está ocultando algo ilegal.',
      ru: 'Они НЕ МОГУТ обыскивать ваш автомобиль без вашего разрешения или без «вероятной причины» — веского доказательства того, что вы скрываете что-то незаконное.',
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
