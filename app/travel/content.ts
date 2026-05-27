import type { T } from '../data/content'

export type SafetyLevel = 'safe' | 'risk' | 'restricted' | 'unsafe'

export interface StatusRow {
  status: T
  safetyLevel: SafetyLevel
  safetyLabel: T
  rule: T
}

export const travelUI = {
  pageTitle: {
    en: 'Travel & Documentation',
    es: 'Viajes y Documentación',
    ru: 'Поездки и Документация',
  },
  pageSubtitle: {
    en: 'Traveling outside the U.S. while your immigration case is pending can have serious and permanent consequences. Read this before booking any trip.',
    es: 'Viajar fuera de los EE.UU. mientras su caso de inmigración está pendiente puede tener consecuencias graves y permanentes. Lea esto antes de reservar cualquier viaje.',
    ru: 'Поездки за пределы США во время рассмотрения вашего иммиграционного дела могут иметь серьёзные и постоянные последствия. Прочитайте это перед бронированием любой поездки.',
  },
  warningHeading: {
    en: 'Important Warning Before You Travel',
    es: 'Advertencia Importante Antes de Viajar',
    ru: 'Важное предупреждение перед поездкой',
  },
  warningText: {
    en: 'International travel while an immigration application is pending carries serious legal risks. Being allowed back into the U.S. is never guaranteed. Customs and Border Protection (CBP) makes the final decision at every port of entry — even if you have all the right documents.',
    es: 'Los viajes internacionales mientras una solicitud de inmigración está pendiente conllevan serios riesgos legales. Nunca está garantizado que se le permita regresar a los EE.UU. La Aduana y Protección Fronteriza (CBP) toma la decisión final en cada puerto de entrada — incluso si usted tiene todos los documentos correctos.',
    ru: 'Международные поездки во время рассмотрения иммиграционного заявления несут серьёзные правовые риски. Разрешение на въезд обратно в США никогда не гарантировано. Таможенная и пограничная охрана (CBP) принимает окончательное решение в каждом пункте въезда — даже если у вас все правильные документы.',
  },
  warningAttorney: {
    en: 'Always consult with a licensed immigration attorney before traveling outside the U.S.',
    es: 'Siempre consulte con un abogado de inmigración con licencia antes de viajar fuera de los EE.UU.',
    ru: 'Всегда консультируйтесь с лицензированным иммиграционным адвокатом перед поездкой за пределы США.',
  },
  internationalBadge: {
    en: 'International Travel Only',
    es: 'Solo Viajes Internacionales',
    ru: 'Только международные поездки',
  },
  statusSectionHeader: {
    en: 'International Travel Safety by Your Immigration Status',
    es: 'Seguridad en Viajes Internacionales según Su Estatus Migratorio',
    ru: 'Безопасность международных поездок по вашему иммиграционному статусу',
  },
  statusSectionSubheader: {
    en: 'This applies to travel outside the United States only. Find your situation below to understand the risks.',
    es: 'Esto aplica únicamente a viajes fuera de los Estados Unidos. Encuentre su situación a continuación para entender los riesgos.',
    ru: 'Это относится только к поездкам за пределы США. Найдите свою ситуацию ниже, чтобы понять риски.',
  },
  docsSectionHeader: {
    en: 'Documents You Must Carry When Traveling',
    es: 'Documentos Que Debe Llevar al Viajar',
    ru: 'Документы, которые необходимо взять с собой',
  },
  docsSectionSubheader: {
    en: 'Bring originals — not photocopies — for all documents',
    es: 'Lleve originales — no fotocopias — de todos los documentos',
    ru: 'Берите оригиналы — не фотокопии — всех документов',
  },
  tipsSectionHeader: {
    en: 'Practical Tips',
    es: 'Consejos Prácticos',
    ru: 'Практические советы',
  },
  disclaimer: {
    en: 'This information is for general education only — not legal advice. Always consult a licensed immigration attorney before making any travel decisions.',
    es: 'Esta información es solo para educación general — no es asesoramiento legal. Siempre consulte a un abogado de inmigración con licencia antes de tomar cualquier decisión de viaje.',
    ru: 'Эта информация предназначена только для общего образования — не для юридических консультаций. Всегда консультируйтесь с лицензированным иммиграционным адвокатом перед принятием любых решений о поездках.',
  },
} satisfies Record<string, T>

export const travelByStatus: StatusRow[] = [
  {
    status: {
      en: 'Pending I-485 — General',
      es: 'I-485 Pendiente — General',
      ru: 'Ожидающий I-485 — Общий',
    },
    safetyLevel: 'risk',
    safetyLabel: {
      en: 'High Risk if Unprepared',
      es: 'Alto Riesgo sin Preparación',
      ru: 'Высокий риск без подготовки',
    },
    rule: {
      en: 'Leaving the U.S. without an approved Advance Parole document (Form I-131) generally results in the abandonment and denial of your I-485 application. Do not travel without it.',
      es: 'Salir de los EE.UU. sin un documento de Advance Parole aprobado (Formulario I-131) generalmente resulta en el abandono y denegación de su solicitud I-485. No viaje sin él.',
      ru: 'Выезд из США без одобренного документа Advance Parole (Форма I-131) обычно приводит к отзыву и отклонению вашего заявления I-485. Не путешествуйте без него.',
    },
  },
  {
    status: {
      en: 'Pending I-485 with Valid H-1B or L-1 Status',
      es: 'I-485 Pendiente con Estatus H-1B o L-1 Válido',
      ru: 'Ожидающий I-485 с действующим статусом H-1B или L-1',
    },
    safetyLevel: 'safe',
    safetyLabel: {
      en: 'Generally Safe',
      es: 'Generalmente Seguro',
      ru: 'Как правило, безопасно',
    },
    rule: {
      en: 'H-1B and L-1 are "dual-intent" visas. Holders can travel and re-enter using their valid visa stamp without needing Advance Parole and without abandoning their green card application.',
      es: 'Las visas H-1B y L-1 son visas de "doble intención". Los titulares pueden viajar y reingresar usando su sello de visa válido sin necesitar Advance Parole y sin abandonar su solicitud de tarjeta verde.',
      ru: 'H-1B и L-1 — это визы «двойного намерения». Их держатели могут путешествовать и въезжать обратно, используя действующую визовую отметку, без Advance Parole и без отзыва заявления на грин-карту.',
    },
  },
  {
    status: {
      en: 'Refugees and Asylees',
      es: 'Refugiados y Asilados',
      ru: 'Беженцы и лица, получившие убежище',
    },
    safetyLevel: 'restricted',
    safetyLabel: {
      en: 'Highly Restricted',
      es: 'Altamente Restringido',
      ru: 'Строго ограничено',
    },
    rule: {
      en: 'Travel to your country of feared persecution can be seen as giving up your refugee or asylee status. You must travel using a Refugee Travel Document — not your home country passport.',
      es: 'Viajar a su país de persecución temida puede interpretarse como la renuncia a su estatus de refugiado o asilado. Debe viajar usando un Documento de Viaje para Refugiados — no su pasaporte del país de origen.',
      ru: 'Поездка в страну, где вы опасаетесь преследования, может рассматриваться как отказ от статуса беженца или лица, получившего убежище. Вы должны путешествовать с Проездным документом беженца — не с паспортом страны происхождения.',
    },
  },
  {
    status: {
      en: 'People with Past Unlawful Presence or Criminal History',
      es: 'Personas con Presencia Ilegal Previa o Antecedentes Penales',
      ru: 'Лица с прошлым незаконным пребыванием или судимостью',
    },
    safetyLevel: 'unsafe',
    safetyLabel: {
      en: 'Unsafe — Do Not Travel',
      es: 'Inseguro — No Viaje',
      ru: 'Небезопасно — не путешествуйте',
    },
    rule: {
      en: 'Even with approved Advance Parole, leaving the U.S. can trigger 3-year or 10-year bars on returning, or cause intense scrutiny and denial of entry at the border.',
      es: 'Incluso con Advance Parole aprobado, salir de los EE.UU. puede activar prohibiciones de regreso de 3 o 10 años, o causar un escrutinio intenso y denegación de entrada en la frontera.',
      ru: 'Даже при одобренном Advance Parole, выезд из США может повлечь 3-летний или 10-летний запрет на возвращение, или привести к интенсивной проверке и отказу в въезде на границе.',
    },
  },
]

export const requiredDocuments: T[] = [
  {
    en: 'A valid, unexpired passport from your country of citizenship.',
    es: 'Un pasaporte válido y vigente de su país de ciudadanía.',
    ru: 'Действующий, не просроченный паспорт вашей страны гражданства.',
  },
  {
    en: 'An approved Advance Parole Document (Form I-512) — OR a valid dual-intent visa stamp (H-1B or L-1). You need one of these to be re-admitted.',
    es: 'Un documento de Advance Parole aprobado (Formulario I-512) — O un sello de visa de doble intención válido (H-1B o L-1). Necesita uno de estos para ser readmitido.',
    ru: 'Одобренный документ Advance Parole (Форма I-512) — ИЛИ действующая визовая отметка двойного намерения (H-1B или L-1). Вам нужен один из них для повторного въезда.',
  },
  {
    en: 'The original Form I-797C Notice of Action (receipt notice) for your pending I-485 application.',
    es: 'El Formulario I-797C original de Aviso de Acción (aviso de recibo) para su solicitud I-485 pendiente.',
    ru: 'Оригинал Формы I-797C — Уведомление о действии (уведомление о получении) для вашего ожидающего заявления I-485.',
  },
  {
    en: 'For employment-based applicants: Recent pay stubs and a current employment verification letter from your employer.',
    es: 'Para solicitantes basados en empleo: Talones de pago recientes y una carta de verificación de empleo actual de su empleador.',
    ru: 'Для заявителей на основе трудоустройства: Последние квитанции о зарплате и текущее письмо о подтверждении трудоустройства от вашего работодателя.',
  },
  {
    en: 'If applicable: Original marriage certificate or civil documents connecting you (as a derivative applicant) to the main person on the application.',
    es: 'Si aplica: Certificado de matrimonio original o documentos civiles que le vinculen a usted (como solicitante derivado) con la persona principal de la solicitud.',
    ru: 'При необходимости: Оригинал свидетельства о браке или гражданские документы, связывающие вас (как зависимого заявителя) с основным лицом в заявлении.',
  },
]

export interface DomesticTravelItem {
  title: T
  body: T
  highlight?: 'warning' | 'tip' | 'info'
}

export const domesticTravelUI = {
  sectionHeader: {
    en: 'Domestic Travel Within the U.S.',
    es: 'Viajes Domésticos Dentro de los EE.UU.',
    ru: 'Внутренние перелёты в пределах США',
  },
  sectionSubheader: {
    en: 'What to know before flying inside the United States',
    es: 'Lo que necesita saber antes de volar dentro de los Estados Unidos',
    ru: 'Что нужно знать перед внутренними рейсами в США',
  },
} satisfies Record<string, T>

export const domesticTravelItems: DomesticTravelItem[] = [
  {
    title: {
      en: 'REAL ID Now Required for Domestic Flights',
      es: 'Se Requiere REAL ID para Vuelos Domésticos',
      ru: 'REAL ID теперь обязателен для внутренних рейсов',
    },
    body: {
      en: 'As of May 7, 2025, federal law requires all travelers 18 and older to present a REAL ID-compliant driver\'s license or another federally accepted ID to board domestic commercial flights. Standard state licenses marked "Federal Limits Apply" or "Not for Federal Identification" are no longer accepted at TSA checkpoints.',
      es: 'A partir del 7 de mayo de 2025, la ley federal exige que todos los viajeros de 18 años o más presenten una licencia de conducir que cumpla con REAL ID u otra identificación aceptada a nivel federal para abordar vuelos comerciales domésticos. Las licencias estatales estándar marcadas con "Federal Limits Apply" o "Not for Federal Identification" ya no son aceptadas en los puntos de control de la TSA.',
      ru: 'С 7 мая 2025 года федеральный закон требует, чтобы все путешественники 18 лет и старше предъявляли водительское удостоверение, соответствующее стандарту REAL ID, или другое федерально признанное удостоверение личности для посадки на внутренние коммерческие рейсы. Стандартные государственные удостоверения с пометкой «Federal Limits Apply» или «Not for Federal Identification» больше не принимаются на контрольно-пропускных пунктах TSA.',
    },
    highlight: 'warning',
  },
  {
    title: {
      en: 'Acceptable Alternatives if You Cannot Get a REAL ID',
      es: 'Alternativas Aceptables si No Puede Obtener una REAL ID',
      ru: 'Допустимые альтернативы, если вы не можете получить REAL ID',
    },
    body: {
      en: 'If you cannot obtain a REAL ID due to your pending immigration status, the TSA explicitly accepts an unexpired foreign passport or an unexpired Employment Authorization Document (EAD card / Form I-766) as valid primary identification for domestic flights.',
      es: 'Si no puede obtener una REAL ID debido a su estatus migratorio pendiente, la TSA acepta explícitamente un pasaporte extranjero vigente o un Documento de Autorización de Empleo vigente (tarjeta EAD / Formulario I-766) como identificación primaria válida para vuelos domésticos.',
      ru: 'Если вы не можете получить REAL ID из-за своего незавершённого иммиграционного статуса, TSA явно принимает действующий иностранный паспорт или действующий документ о разрешении на работу (карта EAD / Форма I-766) в качестве действительного основного удостоверения личности для внутренних рейсов.',
    },
    highlight: 'tip',
  },
  {
    title: {
      en: 'CBP Agents Are Active at Many Domestic Airports',
      es: 'Agentes de CBP Están Activos en Muchos Aeropuertos Domésticos',
      ru: 'Агенты CBP активно работают во многих внутренних аэропортах',
    },
    body: {
      en: 'Many major domestic airports in Texas, California, Florida, and upstate New York fall within the 100-mile border zone. CBP agents frequently conduct internal checkpoints or roving operations at these domestic terminals. TSA agents are also authorized to refer individuals to CBP if they suspect an immigration violation during routine ID checks.',
      es: 'Muchos aeropuertos domésticos importantes en Texas, California, Florida y el norte del estado de Nueva York se encuentran dentro de la zona fronteriza de 100 millas. Los agentes de CBP frecuentemente realizan puntos de control internos u operaciones itinerantes en estas terminales domésticas. Los agentes de la TSA también están autorizados a remitir a personas a CBP si sospechan una violación de inmigración durante los controles de identificación de rutina.',
      ru: 'Многие крупные внутренние аэропорты в Техасе, Калифорнии, Флориде и северной части штата Нью-Йорк находятся в пределах 100-мильной пограничной зоны. Агенты CBP часто проводят внутренние контрольно-пропускные пункты или мобильные операции в этих внутренних терминалах. Агенты TSA также уполномочены направлять людей к CBP, если они подозревают нарушение иммиграционного законодательства во время плановых проверок удостоверений личности.',
    },
    highlight: 'warning',
  },
  {
    title: {
      en: 'Flying Domestically with a Pending I-485',
      es: 'Volar Domésticamente con una I-485 Pendiente',
      ru: 'Внутренние перелёты при ожидающем рассмотрении I-485',
    },
    body: {
      en: 'Domestic flights do not require an Advance Parole document (Form I-131) because you are not leaving the United States. However, anyone flying domestically with a pending Adjustment of Status (I-485) should always carry their original I-797C Notice of Action receipt. If stopped by CBP, this receipt proves you have an authorized period of stay.',
      es: 'Los vuelos domésticos no requieren un documento de Advance Parole (Formulario I-131) porque usted no está saliendo de los Estados Unidos. Sin embargo, cualquier persona que vuele domésticamente con un Ajuste de Estatus (I-485) pendiente siempre debe llevar su Aviso de Acción I-797C original. Si CBP le detiene, este recibo prueba que tiene un período de estadía autorizado.',
      ru: 'Внутренние рейсы не требуют документа Advance Parole (Форма I-131), поскольку вы не покидаете Соединённые Штаты. Однако любой, кто летит внутренними рейсами при ожидающем рассмотрении заявления на изменение статуса (I-485), всегда должен иметь при себе оригинал уведомления I-797C Notice of Action. Если CBP задержит вас, эта квитанция подтверждает, что у вас есть авторизованный период пребывания.',
    },
    highlight: 'info',
  },
  {
    title: {
      en: 'High Risk for Undocumented Individuals',
      es: 'Alto Riesgo para Personas Indocumentadas',
      ru: 'Высокий риск для лиц без документов',
    },
    body: {
      en: 'For individuals without legal status or a pending application, domestic air travel is extremely high risk. Using a foreign passport as TSA identification often triggers additional scrutiny, and encountering CBP at a domestic terminal can lead directly to detention and removal proceedings.',
      es: 'Para las personas sin estatus legal o una solicitud pendiente, los viajes aéreos domésticos son de riesgo extremadamente alto. Usar un pasaporte extranjero como identificación en la TSA a menudo desencadena un escrutinio adicional, y encontrarse con CBP en una terminal doméstica puede llevar directamente a la detención e inicio de procedimientos de deportación.',
      ru: 'Для лиц без законного статуса или ожидающего заявления внутренние авиаперелёты несут крайне высокий риск. Использование иностранного паспорта в качестве удостоверения личности для TSA часто вызывает дополнительную проверку, а встреча с CBP в внутреннем терминале может привести непосредственно к задержанию и возбуждению процедуры депортации.',
    },
    highlight: 'warning',
  },
]

export const practicalTips: T[] = [
  {
    en: 'Do NOT book non-refundable flights until your Advance Parole is approved in hand.',
    es: 'NO reserve vuelos no reembolsables hasta que su Advance Parole esté aprobado y en mano.',
    ru: 'НЕ бронируйте невозвратные билеты, пока у вас на руках не будет одобренный Advance Parole.',
  },
  {
    en: 'Advance Parole processing currently takes 3–6 months. Plan far ahead.',
    es: 'El procesamiento del Advance Parole actualmente toma de 3 a 6 meses. Planifique con mucha anticipación.',
    ru: 'Обработка Advance Parole в настоящее время занимает 3–6 месяцев. Планируйте заранее.',
  },
  {
    en: 'If your Advance Parole is expired when you return, CBP can deny your entry.',
    es: 'Si su Advance Parole está vencido cuando regrese, CBP puede denegar su entrada.',
    ru: 'Если ваш Advance Parole истёк к моменту возвращения, CBP может отказать вам в въезде.',
  },
  {
    en: 'Keep digital and physical copies of all documents in separate places.',
    es: 'Guarde copias digitales y físicas de todos los documentos en lugares separados.',
    ru: 'Храните цифровые и физические копии всех документов в разных местах.',
  },
  {
    en: 'If CBP questions you at the port of entry, you have the right to request a deferred inspection and to contact an attorney.',
    es: 'Si CBP le interroga en el puerto de entrada, usted tiene derecho a solicitar una inspección diferida y a contactar a un abogado.',
    ru: 'Если CBP задаёт вам вопросы в пункте въезда, вы имеете право запросить отложенную проверку и связаться с адвокатом.',
  },
]
