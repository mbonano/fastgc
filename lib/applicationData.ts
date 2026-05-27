export type Lang = 'en' | 'es' | 'ru'
export type T = Record<Lang, string>

export interface Applicant {
  id: string
  whoAs: T
  whoBe: T
}

export interface CommunicationTemplate {
  recipient: T
  whenToSend: T
  template: string
}

export interface ApplicationType {
  id: string
  name: T
  simpleDescription: T
  explanation: T
  applicants: Applicant[]
  targetTimeline: T
  canFileConcurrently: T
  commonWaivers: T
  steps: T[]
  actionItems: T[]
  countrySpecificInfo: T
  preventionSuggestions: T[]
  communicationTemplates: CommunicationTemplate[]
}

export const applicationTypes: ApplicationType[] = [
  {
    id: 'family',
    name: {
      en: 'Green Card through Family',
      es: 'Tarjeta Verde por Familia',
      ru: 'Грин-карта через семью',
    },
    simpleDescription: {
      en: 'You may qualify through a family member who is a U.S. citizen or a green card holder.',
      es: 'Puede calificar a través de un familiar que sea ciudadano estadounidense o titular de una tarjeta verde.',
      ru: 'Вы можете получить право на грин-карту через члена семьи, который является гражданином США или обладателем грин-карты.',
    },
    explanation: {
      en: 'This category allows U.S. citizens and lawful permanent residents to sponsor certain family members for a green card. Immediate relatives of U.S. citizens have special priority and do not have to wait for a visa number. Family preference categories, however, are subject to annual numerical limits and often face significant wait times. This remains the most common pathway for family reunification in the U.S. immigration system.',
      es: 'Esta categoría permite a los ciudadanos estadounidenses y residentes permanentes legales patrocinar a ciertos familiares para obtener una tarjeta verde. Los familiares inmediatos de los ciudadanos de los EE.UU. tienen prioridad especial y no tienen que esperar un número de visa. Sin embargo, las categorías de preferencia familiar están sujetas a límites numéricos anuales y con frecuencia enfrentan tiempos de espera significativos.',
      ru: 'Эта категория позволяет гражданам США и законным постоянным жителям спонсировать определённых членов семьи для получения грин-карты. Ближайшие родственники граждан США пользуются особым приоритетом и не обязаны ждать номера визы. Однако категории семейного предпочтения подпадают под ежегодные численные ограничения и нередко сопряжены со значительными сроками ожидания.',
    },
    applicants: [
      {
        id: 'immediate-relative',
        whoAs: {
          en: 'Immediate relative of a U.S. citizen',
          es: 'Familiar directo de un ciudadano estadounidense',
          ru: 'Ближайший родственник гражданина США',
        },
        whoBe: {
          en: 'The husband or wife of a U.S. citizen; OR a child (unmarried, under 21) of a U.S. citizen; OR a parent of a U.S. citizen who is at least 21 years old.',
          es: 'El esposo o esposa de un ciudadano estadounidense; O un hijo/a (soltero/a, menor de 21 años) de un ciudadano estadounidense; O un padre o madre de un ciudadano estadounidense que tenga al menos 21 años.',
          ru: 'Муж или жена гражданина США; ИЛИ ребёнок (не состоящий в браке, до 21 года) гражданина США; ИЛИ родитель гражданина США, которому уже есть 21 год.',
        },
      },
      {
        id: 'family-preference',
        whoAs: {
          en: 'Other family member (preference categories)',
          es: 'Otro familiar (categorías de preferencia)',
          ru: 'Другой член семьи (категории предпочтения)',
        },
        whoBe: {
          en: 'An unmarried adult son or daughter of a U.S. citizen; OR a married son or daughter of a U.S. citizen; OR a brother or sister of a U.S. citizen (citizen must be at least 21); OR the husband or wife of a green card holder; OR an unmarried child (under 21) of a green card holder; OR an unmarried adult son or daughter of a green card holder.',
          es: 'Un hijo/a adulto soltero/a de un ciudadano estadounidense; O un hijo/a casado/a de un ciudadano estadounidense; O un hermano/a de un ciudadano estadounidense (el ciudadano debe tener al menos 21 años); O el esposo/a de un titular de tarjeta verde; O un hijo/a soltero/a (menor de 21 años) de un titular de tarjeta verde; O un hijo/a adulto soltero/a de un titular de tarjeta verde.',
          ru: 'Незамужний/неженатый совершеннолетний сын или дочь гражданина США; ИЛИ женатый/замужняя сын или дочь гражданина США; ИЛИ брат или сестра гражданина США (гражданину должно быть не менее 21 года); ИЛИ муж или жена обладателя грин-карты; ИЛИ ребёнок (до 21 года) обладателя грин-карты; ИЛИ незамужний/неженатый совершеннолетний сын или дочь обладателя грин-карты.',
        },
      },
      {
        id: 'fiance',
        whoAs: {
          en: 'Fiancé(e) of a U.S. citizen or their child',
          es: 'Prometido/a de un ciudadano estadounidense o su hijo/a',
          ru: 'Жених/невеста гражданина США или их ребёнок',
        },
        whoBe: {
          en: 'Someone who entered the U.S. on a K-1 visa to marry a U.S. citizen; OR a child who entered on a K-2 visa as the child of a K-1 fiancé(e)',
          es: 'Alguien que entró a los EE.UU. con una visa K-1 para casarse con un ciudadano estadounidense; O un hijo/a que entró con una visa K-2 como hijo/a del prometido/a K-1',
          ru: 'Человек, въехавший в США по визе K-1 для вступления в брак с гражданином США; ИЛИ ребёнок, въехавший по визе K-2 как ребёнок жениха/невесты K-1',
        },
      },
      {
        id: 'widow',
        whoAs: {
          en: 'Widow or widower of a U.S. citizen',
          es: 'Viudo/a de un ciudadano estadounidense',
          ru: 'Вдовец или вдова гражданина США',
        },
        whoBe: {
          en: 'Someone whose U.S. citizen spouse died, and who was legally married to that person when they died',
          es: 'Alguien cuyo cónyuge ciudadano estadounidense falleció, y que estaba legalmente casado/a con esa persona cuando murió',
          ru: 'Человек, чей супруг/супруга — гражданин США — скончался, и кто состоял в законном браке с этим человеком на момент смерти',
        },
      },
      {
        id: 'vawa-family',
        whoAs: {
          en: 'VAWA self-petitioner (abuse victim)',
          es: 'Autopeticionario VAWA (víctima de abuso)',
          ru: 'Самостоятельный петиционер по VAWA (жертва насилия)',
        },
        whoBe: {
          en: 'An abused husband or wife of a U.S. citizen or green card holder; OR an abused unmarried child (under 21) of a U.S. citizen or green card holder; OR an abused parent of a U.S. citizen.',
          es: 'Un esposo/a maltratado/a de un ciudadano estadounidense o titular de tarjeta verde; O un hijo/a soltero/a maltratado/a (menor de 21 años) de un ciudadano estadounidense o titular de tarjeta verde; O un padre/madre maltratado/a de un ciudadano estadounidense.',
          ru: 'Подвергавшийся насилию муж или жена гражданина США или обладателя грин-карты; ИЛИ подвергавшийся насилию несовершеннолетний ребёнок (до 21 года) гражданина США или обладателя грин-карты; ИЛИ подвергавшийся насилию родитель гражданина США.',
        },
      },
    ],
    targetTimeline: {
      en: '10–14 months for immediate relatives of U.S. citizens. 2 to 20+ years for family preference categories, depending on the priority date.',
      es: '10–14 meses para familiares inmediatos de ciudadanos estadounidenses. De 2 a más de 20 años para categorías de preferencia familiar, según la fecha de prioridad.',
      ru: '10–14 месяцев для ближайших родственников граждан США. От 2 до более чем 20 лет для категорий семейного предпочтения в зависимости от приоритетной даты.',
    },
    canFileConcurrently: {
      en: 'Yes, for Immediate Relatives of U.S. Citizens. No, for Family Preference categories (unless their priority date is current on the Visa Bulletin).',
      es: 'Sí, para familiares inmediatos de ciudadanos estadounidenses. No, para categorías de preferencia familiar (a menos que la fecha de prioridad esté vigente en el Boletín de Visas).',
      ru: 'Да, для ближайших родственников граждан США. Нет, для категорий семейного предпочтения (если только приоритетная дата не является текущей по Визовому бюллетеню).',
    },
    commonWaivers: {
      en: 'I-601A (Provisional Unlawful Presence Waiver) is very common for applicants who entered without inspection and must process abroad. I-601 (Waiver of Grounds of Inadmissibility) for fraud or criminal issues.',
      es: 'El I-601A (Renuncia Provisional de Presencia Ilegal) es muy común para solicitantes que entraron sin inspección y deben tramitar en el extranjero. El I-601 (Renuncia de Motivos de Inadmisibilidad) para problemas de fraude o penales.',
      ru: 'I-601A (Предварительное освобождение от незаконного присутствия) очень распространён для заявителей, въехавших без разрешения. I-601 (Освобождение от оснований недопустимости) — для мошенничества или уголовных вопросов.',
    },
    steps: [
      { en: 'Sponsor files Form I-130, Petition for Alien Relative.', es: 'El patrocinador presenta el Formulario I-130, Petición de Familiar Extranjero.', ru: 'Спонсор подаёт форму I-130, Петицию об иностранном родственнике.' },
      { en: 'If inside the U.S. and eligible, applicant files Form I-485, Adjustment of Status (can be concurrent with I-130 for immediate relatives).', es: 'Si está dentro de los EE.UU. y es elegible, el solicitante presenta el Formulario I-485, Solicitud de Ajuste de Estatus (puede ser simultáneo con el I-130 para familiares inmediatos).', ru: 'Если заявитель находится в США и имеет право, он подаёт форму I-485, Заявление об изменении статуса (может быть одновременно с I-130 для ближайших родственников).' },
      { en: 'If outside the U.S., case goes to the National Visa Center (NVC) for consular processing once I-130 is approved and a visa is available.', es: 'Si está fuera de los EE.UU., el caso va al Centro Nacional de Visas (NVC) para procesamiento consular una vez aprobado el I-130 y disponible una visa.', ru: 'Если заявитель находится за пределами США, дело передаётся в Национальный визовый центр (NVC) для консульской обработки после одобрения I-130.' },
      { en: 'Attend biometrics appointment.', es: 'Asistir a la cita de biometría.', ru: 'Явиться на процедуру снятия биометрических данных.' },
      { en: 'Attend green card interview at a USCIS office or U.S. Embassy/Consulate.', es: 'Asistir a la entrevista de tarjeta verde en una oficina de USCIS o Embajada/Consulado de los EE.UU.', ru: 'Пройти собеседование для получения грин-карты в офисе USCIS или посольстве/консульстве США.' },
      { en: 'Receive decision and subsequent Green Card.', es: 'Recibir la decisión y la posterior Tarjeta Verde.', ru: 'Получить решение и последующую грин-карту.' },
    ],
    actionItems: [
      { en: "Confirm the sponsor's U.S. citizenship or lawful permanent resident status with original certificates.", es: 'Confirmar la ciudadanía estadounidense o el estatus de residente permanente legal del patrocinador con certificados originales.', ru: 'Подтвердить гражданство США или статус законного постоянного жителя спонсора оригинальными документами.' },
      { en: 'Obtain certified copies of civil documents establishing the relationship (e.g., marriage certificates, birth certificates).', es: 'Obtener copias certificadas de documentos civiles que acrediten la relación (p. ej., certificados de matrimonio, actas de nacimiento).', ru: 'Получить заверенные копии гражданских документов, подтверждающих родство (например, свидетельства о браке, свидетельства о рождении).' },
      { en: 'Spouse/Sponsor: Must complete Form I-864 (Affidavit of Support) and provide recent tax returns to prove financial ability.', es: 'Cónyuge/Patrocinador: Debe completar el Formulario I-864 (Declaración de Manutención) y proporcionar declaraciones de impuestos recientes para demostrar capacidad financiera.', ru: 'Супруг/Спонсор: Должен заполнить форму I-864 (Аффидевит о поддержке) и предоставить налоговые декларации для подтверждения финансовой состоятельности.' },
      { en: 'Pay filing fees: $675 for online I-130 (or $680 paper), $1,440 for I-485.', es: 'Pagar las tarifas de presentación: $675 para el I-130 en línea (o $680 en papel), $1,440 para el I-485.', ru: 'Оплатить регистрационные сборы: $675 за онлайн-подачу I-130 (или $680 за бумажную), $1 440 за I-485.' },
      { en: 'Complete a medical examination by a USCIS-approved civil surgeon (Form I-693).', es: 'Completar un examen médico por un cirujano civil aprobado por USCIS (Formulario I-693).', ru: 'Пройти медицинский осмотр у гражданского хирурга, утверждённого USCIS (форма I-693).' },
    ],
    countrySpecificInfo: {
      en: 'Applicants from Mexico, India, mainland China, and the Philippines generally face much longer wait times in the family preference categories due to per-country visa limits. Immediate relatives of U.S. citizens are not affected by these caps.',
      es: 'Los solicitantes de México, India, China continental y Filipinas generalmente enfrentan tiempos de espera mucho más largos en las categorías de preferencia familiar debido a los límites de visas por país. Los familiares inmediatos de ciudadanos estadounidenses no se ven afectados por estos límites.',
      ru: 'Заявители из Мексики, Индии, материкового Китая и Филиппин, как правило, сталкиваются со значительно более длительными сроками ожидания в категориях семейного предпочтения из-за ограничений на количество виз на страну. Ближайших родственников граждан США эти ограничения не затрагивают.',
    },
    preventionSuggestions: [
      { en: 'Ensure the Form I-864 Affidavit of Support is meticulously completed with current tax transcripts; this is the most common reason for a Request for Evidence (RFE).', es: 'Asegúrese de que el Formulario I-864 esté completado meticulosamente con transcripciones de impuestos actuales; esta es la razón más común para una Solicitud de Evidencia (RFE).', ru: 'Убедитесь, что форма I-864 заполнена тщательно с актуальными налоговыми выписками; это наиболее распространённая причина запроса доказательств (RFE).' },
      { en: 'Submit Form I-693 (Medical Exam) along with the initial I-485 filing to avoid an RFE later in the process.', es: 'Presente el Formulario I-693 (Examen Médico) junto con la presentación inicial del I-485 para evitar una RFE más adelante en el proceso.', ru: 'Подайте форму I-693 (медицинский осмотр) вместе с первоначальной подачей I-485, чтобы избежать запроса доказательств на более позднем этапе.' },
    ],
    communicationTemplates: [
      {
        recipient: { en: 'USCIS', es: 'USCIS', ru: 'USCIS' },
        whenToSend: {
          en: 'If the application falls outside normal processing times.',
          es: 'Si la solicitud tarda más de lo normal en procesarse.',
          ru: 'Если заявление обрабатывается дольше обычных сроков.',
        },
        template: `Subject: Outside Normal Processing Time Inquiry - Receipt Number [Insert Receipt Number]
Dear USCIS Officer,
I am writing to inquire about the status of my Form I-130 / I-485, Receipt Number [Receipt Number]. According to the current processing times published on the USCIS website, my case is now outside the normal processing window. Please let me know if any additional information is needed to continue processing my case.
Sincerely,
[Your Name]
[Your A-Number, if applicable]`,
      },
    ],
  },

  {
    id: 'employment',
    name: {
      en: 'Green Card through Employment',
      es: 'Tarjeta Verde por Empleo',
      ru: 'Грин-карта через трудоустройство',
    },
    simpleDescription: {
      en: 'You may qualify because of your job skills, education, or investment in the U.S. economy.',
      es: 'Puede calificar por sus habilidades laborales, educación o inversión en la economía de los Estados Unidos.',
      ru: 'Вы можете получить право на грин-карту благодаря профессиональным навыкам, образованию или инвестициям в экономику США.',
    },
    explanation: {
      en: 'This pathway is for foreign nationals seeking permanent residence based on their job skills, education, or investment. It is divided into five preference categories (EB-1 through EB-5). Most employment categories require a U.S. employer to sponsor the applicant and obtain a labor certification. Self-petitioning is only available for specific EB-1, National Interest Waiver (EB-2), and EB-5 categories.',
      es: 'Esta vía es para extranjeros que buscan residencia permanente en función de sus habilidades laborales, educación o inversión. Se divide en cinco categorías de preferencia (EB-1 a EB-5). La mayoría de las categorías de empleo requieren que un empleador estadounidense patrocine al solicitante y obtenga una certificación laboral. La autopetición solo está disponible para categorías específicas de EB-1, la Exención por Interés Nacional (EB-2) y EB-5.',
      ru: 'Этот путь предназначен для иностранных граждан, ищущих постоянное место жительства на основании профессиональных навыков, образования или инвестиций. Он разделён на пять категорий предпочтения (EB-1 — EB-5). Большинство категорий требуют, чтобы работодатель США спонсировал заявителя и получил трудовую сертификацию. Самостоятельная подача петиции доступна только для EB-1, EB-2 с освобождением в национальных интересах и EB-5.',
    },
    applicants: [
      {
        id: 'eb1',
        whoAs: {
          en: 'Immigrant worker — Priority (EB-1)',
          es: 'Trabajador inmigrante — Prioridad (EB-1)',
          ru: 'Работник-иммигрант — Приоритет (EB-1)',
        },
        whoBe: {
          en: 'Someone with extraordinary ability in science, arts, education, business, or sports; OR an outstanding professor or researcher; OR a top-level manager or executive at a multinational company',
          es: 'Alguien con habilidades extraordinarias en ciencias, artes, educación, negocios o deportes; O un profesor o investigador destacado; O un gerente o ejecutivo de alto nivel en una empresa multinacional',
          ru: 'Человек с выдающимися способностями в науке, искусстве, образовании, бизнесе или спорте; ИЛИ выдающийся профессор или исследователь; ИЛИ менеджер или руководитель высшего звена транснациональной компании',
        },
      },
      {
        id: 'eb2',
        whoAs: {
          en: 'Immigrant worker — Advanced degree or exceptional ability (EB-2)',
          es: 'Trabajador inmigrante — Título avanzado o habilidad excepcional (EB-2)',
          ru: 'Работник-иммигрант — Учёная степень или исключительные способности (EB-2)',
        },
        whoBe: {
          en: "Someone whose job requires an advanced degree (master's or higher); OR someone with exceptional ability in science, arts, or business; OR a person seeking a national interest waiver (your work greatly benefits the U.S.)",
          es: 'Alguien cuyo trabajo requiere un título avanzado (maestría o superior); O alguien con habilidades excepcionales en ciencias, artes o negocios; O una persona que solicita una exención por interés nacional (su trabajo beneficia significativamente a los EE.UU.)',
          ru: 'Человек, чья работа требует учёной степени (магистра или выше); ИЛИ человек с исключительными способностями в науке, искусстве или бизнесе; ИЛИ человек, подающий на освобождение в национальных интересах',
        },
      },
      {
        id: 'eb3',
        whoAs: {
          en: 'Immigrant worker — Skilled, professional, or unskilled (EB-3)',
          es: 'Trabajador inmigrante — Calificado, profesional o no calificado (EB-3)',
          ru: 'Работник-иммигрант — Квалифицированный, специалист или неквалифицированный (EB-3)',
        },
        whoBe: {
          en: "A skilled worker (job requires at least 2 years of training or experience); OR a professional (job requires at least a 4-year U.S. bachelor's degree); OR an unskilled worker (job requires less than 2 years of training)",
          es: 'Un trabajador calificado (el trabajo requiere al menos 2 años de capacitación o experiencia); O un profesional (el trabajo requiere al menos una licenciatura de 4 años de EE.UU.); O un trabajador no calificado (el trabajo requiere menos de 2 años de capacitación)',
          ru: 'Квалифицированный работник (работа требует не менее 2 лет обучения или опыта); ИЛИ специалист (работа требует не менее 4-летней степени бакалавра США); ИЛИ неквалифицированный работник',
        },
      },
      {
        id: 'physician-niw',
        whoAs: {
          en: 'Physician National Interest Waiver',
          es: 'Exención de Interés Nacional para Médicos',
          ru: 'Освобождение врача в национальных интересах',
        },
        whoBe: {
          en: 'A doctor who agrees to work full-time in a medically underserved area in the U.S. for a set period of time',
          es: 'Un médico que acepta trabajar a tiempo completo en un área médicamente desatendida en los EE.UU. durante un período determinado',
          ru: 'Врач, соглашающийся работать полный рабочий день в медицински недостаточно обслуживаемом районе США в течение установленного периода',
        },
      },
      {
        id: 'eb5',
        whoAs: {
          en: 'Immigrant investor (EB-5)',
          es: 'Inversionista inmigrante (EB-5)',
          ru: 'Инвестор-иммигрант (EB-5)',
        },
        whoBe: {
          en: 'Someone who has invested (or is in the process of investing) at least $1,050,000 in a new U.S. business that creates full-time jobs for at least 10 workers (investment can be $800,000 if the business is in a low-employment or rural area)',
          es: 'Alguien que ha invertido (o está invirtiendo) al menos $1,050,000 en un nuevo negocio en los EE.UU. que crea empleos a tiempo completo para al menos 10 trabajadores (puede ser $800,000 en áreas rurales o de bajo empleo)',
          ru: 'Человек, инвестировавший не менее 1 050 000 долларов в новый бизнес в США, создающий рабочие места для не менее 10 работников (800 000 долларов в районах с низкой занятостью или сельской местности)',
        },
      },
    ],
    targetTimeline: {
      en: '1.5 to 3 years for most categories if priority date is current. Can exceed 10+ years for applicants from backlogged countries.',
      es: 'De 1.5 a 3 años para la mayoría de las categorías si la fecha de prioridad está vigente. Puede superar los 10 años para solicitantes de países con retraso.',
      ru: 'От 1,5 до 3 лет для большинства категорий при текущей приоритетной дате. Может превысить 10 лет для заявителей из стран с очередями.',
    },
    canFileConcurrently: {
      en: 'Yes, if the priority date is current under the Final Action Dates or Dates for Filing chart (depending on USCIS\'s monthly determination). Not possible if the category is backlogged.',
      es: 'Sí, si la fecha de prioridad está vigente según las Fechas de Acción Final o Fechas de Presentación (según la determinación mensual de USCIS). No es posible si la categoría tiene retraso.',
      ru: 'Да, если приоритетная дата является текущей по таблице окончательных дат или дат подачи (по ежемесячному определению USCIS). Невозможно, если категория в очереди.',
    },
    commonWaivers: {
      en: 'Waivers are less common here. I-601 for fraud or criminal issues, but unlawful presence waivers (I-601A) are extremely difficult to use since employment-based applicants usually require maintaining lawful status.',
      es: 'Las renuncias son menos comunes aquí. El I-601 para problemas de fraude o penales, pero las renuncias de presencia ilegal (I-601A) son extremadamente difíciles de usar ya que los solicitantes de base laboral generalmente deben mantener un estatus legal.',
      ru: 'Освобождения здесь менее распространены. I-601 для мошенничества или уголовных вопросов; освобождения от незаконного присутствия (I-601A) крайне сложно использовать, так как заявители должны, как правило, сохранять законный статус.',
    },
    steps: [
      { en: 'Employer obtains Prevailing Wage Determination and conducts recruitment (if PERM Labor Certification is required).', es: 'El empleador obtiene la Determinación de Salario Prevaleciente y realiza el proceso de contratación (si se requiere Certificación Laboral PERM).', ru: 'Работодатель получает определение преобладающей заработной платы и проводит набор персонала (если требуется сертификация PERM).' },
      { en: 'Employer files PERM Labor Certification with the Department of Labor.', es: 'El empleador presenta la Certificación Laboral PERM ante el Departamento de Trabajo.', ru: 'Работодатель подаёт трудовую сертификацию PERM в Министерство труда.' },
      { en: 'Employer files Form I-140, Immigrant Petition for Alien Worker.', es: 'El empleador presenta el Formulario I-140, Petición de Inmigrante para Trabajador Extranjero.', ru: 'Работодатель подаёт форму I-140, Петицию иммигранта для иностранного работника.' },
      { en: 'Applicant files Form I-485 when the priority date becomes current.', es: 'El solicitante presenta el Formulario I-485 cuando la fecha de prioridad se actualiza.', ru: 'Заявитель подаёт форму I-485, когда приоритетная дата становится актуальной.' },
      { en: 'Attend biometrics and, if scheduled, an interview.', es: 'Asistir a biometría y, si está programada, a una entrevista.', ru: 'Пройти биометрию и, если назначено, собеседование.' },
    ],
    actionItems: [
      { en: "Confirm applicant's educational credentials and secure foreign degree evaluations if necessary.", es: 'Confirmar las credenciales educativas del solicitante y obtener evaluaciones de títulos extranjeros si es necesario.', ru: 'Подтвердить образовательные документы заявителя и при необходимости получить оценку иностранных дипломов.' },
      { en: 'Employer: Gather corporate tax returns to demonstrate the ability to pay the proffered wage from the priority date onward.', es: 'Empleador: Recopilar declaraciones de impuestos corporativas para demostrar la capacidad de pagar el salario ofrecido desde la fecha de prioridad en adelante.', ru: 'Работодатель: Собрать корпоративные налоговые декларации для подтверждения способности выплачивать предложенную заработную плату с даты приоритета.' },
      { en: 'Pay filing fees: $715 for I-140, $1,440 for I-485. Optional $2,805 for Premium Processing of I-140.', es: 'Pagar las tarifas de presentación: $715 para el I-140, $1,440 para el I-485. Opcional $2,805 para Procesamiento Premium del I-140.', ru: 'Оплатить регистрационные сборы: $715 за I-140, $1 440 за I-485. Дополнительно $2 805 за ускоренную обработку I-140.' },
      { en: 'Obtain employment verification letters from previous employers to prove required experience.', es: 'Obtener cartas de verificación de empleo de empleadores anteriores para demostrar la experiencia requerida.', ru: 'Получить письма о подтверждении занятости от предыдущих работодателей для подтверждения необходимого опыта.' },
    ],
    countrySpecificInfo: {
      en: 'Severe retrogression exists for Indian and Chinese nationals in the EB-2 and EB-3 categories. Wait times for these individuals can stretch over a decade.',
      es: 'Existe una grave retrogresión para los nacionales de India y China en las categorías EB-2 y EB-3. Los tiempos de espera para estas personas pueden extenderse por más de una década.',
      ru: 'Для граждан Индии и Китая в категориях EB-2 и EB-3 наблюдается серьёзная ретрогрессия. Сроки ожидания для этих лиц могут превышать десятилетие.',
    },
    preventionSuggestions: [
      { en: 'Maintain valid nonimmigrant status (e.g., H-1B, L-1) throughout the process to ensure eligibility for Adjustment of Status.', es: 'Mantener un estatus de no inmigrante válido (p. ej., H-1B, L-1) durante todo el proceso para garantizar la elegibilidad para el Ajuste de Estatus.', ru: 'Поддерживать действительный неиммиграционный статус (например, H-1B, L-1) на протяжении всего процесса для обеспечения права на изменение статуса.' },
      { en: "If changing employers after filing I-485, ensure the new job falls under the 'same or similar' occupational classification to invoke AC21 portability.", es: "Si cambia de empleador después de presentar el I-485, asegúrese de que el nuevo trabajo esté dentro de la misma clasificación ocupacional o similar para invocar la portabilidad AC21.", ru: 'При смене работодателя после подачи I-485 убедитесь, что новая работа относится к той же или аналогичной профессиональной категории для применения переносимости AC21.' },
    ],
    communicationTemplates: [
      {
        recipient: {
          en: "Employer's HR or Immigration Counsel",
          es: 'RR.HH. del empleador o asesor de inmigración',
          ru: 'Отдел кадров работодателя или иммиграционный советник',
        },
        whenToSend: {
          en: 'Before the priority date becomes current, to prepare for I-485 filing.',
          es: 'Antes de que la fecha de prioridad se vuelva actual, para prepararse para la presentación del I-485.',
          ru: 'До того, как приоритетная дата станет текущей, для подготовки к подаче I-485.',
        },
        template: `Subject: Preparation for Adjustment of Status (I-485) Filing
Dear [Name],
I have been monitoring the monthly Visa Bulletin, and my priority date of [Date] is approaching the current cut-off date for my category. I would like to proactively gather the required documents (medical exam, birth certificates, etc.) for my Form I-485 filing. Could you please provide a checklist so we can file as soon as the date is current?
Thank you,
[Your Name]`,
      },
    ],
  },

  {
    id: 'special-immigrant',
    name: {
      en: 'Green Card as a Special Immigrant',
      es: 'Tarjeta Verde como Inmigrante Especial',
      ru: 'Грин-карта как специальный иммигрант',
    },
    simpleDescription: {
      en: 'Certain groups of people have their own special path to a green card.',
      es: 'Ciertos grupos de personas tienen su propio camino especial hacia una tarjeta verde.',
      ru: 'Определённые группы людей имеют свой особый путь к получению грин-карты.',
    },
    explanation: {
      en: 'This category covers specialized groups, including religious workers, Special Immigrant Juveniles (SIJ), and Afghan or Iraqi nationals who assisted the U.S. government. Each sub-group has highly specific eligibility requirements. It operates under the fourth employment preference (EB-4) category.',
      es: 'Esta categoría cubre grupos especializados, incluyendo trabajadores religiosos, Menores Inmigrantes Especiales (SIJ) y nacionales afganos o iraquíes que asistieron al gobierno de los EE.UU. Cada subgrupo tiene requisitos de elegibilidad muy específicos y opera bajo la cuarta categoría de preferencia de empleo (EB-4).',
      ru: 'Эта категория охватывает специализированные группы, включая религиозных работников, специальных иммигрантов-несовершеннолетних (SIJ) и граждан Афганистана или Ирака, оказывавших помощь правительству США. Каждая подгруппа имеет строго определённые требования к eligibility и действует в рамках четвёртой категории трудового предпочтения (EB-4).',
    },
    applicants: [
      {
        id: 'religious-worker',
        whoAs: {
          en: 'Religious worker',
          es: 'Trabajador religioso',
          ru: 'Религиозный работник',
        },
        whoBe: {
          en: 'A minister or other religious worker who is coming to the U.S. to work for a nonprofit religious organization',
          es: 'Un ministro u otro trabajador religioso que viene a los EE.UU. para trabajar en una organización religiosa sin fines de lucro',
          ru: 'Священнослужитель или другой религиозный работник, приезжающий в США для работы в некоммерческой религиозной организации',
        },
      },
      {
        id: 'sij',
        whoAs: {
          en: 'Special Immigrant Juvenile',
          es: 'Menor Inmigrante Especial',
          ru: 'Специальный иммигрант-несовершеннолетний',
        },
        whoBe: {
          en: 'A young person (under 21) who was abused, abandoned, or neglected by a parent, and who has a court order protecting them',
          es: 'Un joven (menor de 21 años) que fue abusado, abandonado o descuidado por un padre o madre, y que tiene una orden judicial que lo protege',
          ru: 'Молодой человек (до 21 года), которого родитель подверг насилию, бросил или не заботился о нём, и у которого есть судебный приказ о защите',
        },
      },
      {
        id: 'afghan-iraqi',
        whoAs: {
          en: 'Afghan or Iraqi national',
          es: 'Nacional afgano o iraquí',
          ru: 'Гражданин Афганистана или Ирака',
        },
        whoBe: {
          en: 'An Afghan or Iraqi person who worked as a translator or interpreter for the U.S. government; OR an Iraqi person who worked for the U.S. government in Iraq for at least 1 year after March 20, 2003; OR an Afghan person who worked for the U.S. government or NATO forces (ISAF)',
          es: 'Una persona afgana o iraquí que trabajó como traductor o intérprete para el gobierno de los EE.UU.; O una persona iraquí que trabajó para el gobierno de los EE.UU. en Irak durante al menos 1 año después del 20 de marzo de 2003; O una persona afgana que trabajó para el gobierno de los EE.UU. o las fuerzas de la OTAN (ISAF)',
          ru: 'Гражданин Афганистана или Ирака, работавший переводчиком для правительства США; ИЛИ гражданин Ирака, работавший для правительства США в Ираке не менее 1 года после 20 марта 2003 года; ИЛИ гражданин Афганистана, работавший для правительства США или сил НАТО (ISAF)',
        },
      },
      {
        id: 'broadcaster',
        whoAs: {
          en: 'International broadcaster',
          es: 'Difusor internacional',
          ru: 'Международный тележурналист',
        },
        whoBe: {
          en: 'Someone coming to the U.S. to work in media for the U.S. Agency for Global Media (USAGM) or a USAGM partner organization',
          es: 'Alguien que viene a los EE.UU. para trabajar en los medios para la Agencia de Medios Globales de EE.UU. (USAGM) o una organización asociada',
          ru: 'Человек, приезжающий в США для работы в СМИ Агентства США по глобальным медиа (USAGM) или организации-партнёра USAGM',
        },
      },
      {
        id: 'intl-org',
        whoAs: {
          en: 'International organization or NATO employee (or their family)',
          es: 'Empleado de organización internacional u OTAN (o sus familiares)',
          ru: 'Сотрудник международной организации или НАТО (или их семья)',
        },
        whoBe: {
          en: 'A retired officer or employee of a qualifying international organization or NATO; OR an eligible family member of such a person',
          es: 'Un oficial o empleado jubilado de una organización internacional calificada o de la OTAN; O un familiar elegible de esa persona',
          ru: 'Вышедший на пенсию офицер или сотрудник квалификационной международной организации или НАТО; ИЛИ подходящий член семьи такого лица',
        },
      },
    ],
    targetTimeline: {
      en: '1 to 3 years, depending on the specific sub-category and EB-4 visa availability.',
      es: 'De 1 a 3 años, dependiendo de la subcategoría específica y la disponibilidad de visas EB-4.',
      ru: 'От 1 до 3 лет в зависимости от конкретной подкатегории и наличия виз EB-4.',
    },
    canFileConcurrently: {
      en: 'Generally No for SIJ (unless a visa is immediately available, which is rare due to EB-4 backlogs). Sometimes Yes for Religious Workers if the priority date is current.',
      es: 'Generalmente No para SIJ (a menos que haya una visa inmediatamente disponible, lo cual es raro debido a los retrasos en EB-4). A veces Sí para Trabajadores Religiosos si la fecha de prioridad está vigente.',
      ru: 'Как правило, нет для SIJ (если только виза не доступна немедленно, что редко из-за очередей EB-4). Иногда да для религиозных работников, если приоритетная дата текущая.',
    },
    commonWaivers: {
      en: 'I-601 is commonly used for SIJ applicants to waive various inadmissibilities (like unlawful entry or minor juvenile infractions) using the generous SIJ-specific waiver standard.',
      es: 'El I-601 se usa comúnmente para solicitantes SIJ para renunciar a diversas inadmisibilidades (como entrada ilegal o infracciones menores juveniles) usando el estándar de renuncia específico de SIJ.',
      ru: 'I-601 обычно используется для заявителей SIJ для отмены различных оснований недопустимости (например, незаконного въезда или незначительных нарушений), применяя щедрый стандарт освобождения SIJ.',
    },
    steps: [
      { en: 'File Form I-360, Petition for Amerasian, Widow(er), or Special Immigrant.', es: 'Presentar el Formulario I-360, Petición para Amerasiano, Viudo/a o Inmigrante Especial.', ru: 'Подать форму I-360, Петицию для амерасиатца, вдовы/вдовца или специального иммигранта.' },
      { en: 'Obtain approval of the I-360 petition.', es: 'Obtener la aprobación de la petición I-360.', ru: 'Получить одобрение петиции I-360.' },
      { en: 'File Form I-485 to adjust status or proceed via consular processing.', es: 'Presentar el Formulario I-485 para ajustar el estatus o proceder mediante procesamiento consular.', ru: 'Подать форму I-485 для изменения статуса или пройти консульское оформление.' },
      { en: 'Attend biometrics and final interview.', es: 'Asistir a biometría y a la entrevista final.', ru: 'Пройти биометрию и финальное собеседование.' },
    ],
    actionItems: [
      { en: 'Verify specific category requirements (e.g., SIJs need a qualifying state juvenile court order prior to filing).', es: 'Verificar los requisitos específicos de la categoría (p. ej., los SIJ necesitan una orden judicial estatal de menores calificada antes de presentar la solicitud).', ru: 'Проверить конкретные требования категории (например, SIJ требуют соответствующего постановления суда по делам несовершеннолетних перед подачей).' },
      { en: 'Gather specialized evidence (e.g., proof of non-profit status for religious organizations, or U.S. military employment letters for translators).', es: 'Recopilar evidencia especializada (p. ej., prueba de estatus sin fines de lucro para organizaciones religiosas, o cartas de empleo militar de los EE.UU. para traductores).', ru: 'Собрать специализированные доказательства (например, подтверждение статуса некоммерческой организации для религиозных организаций или письма о военной службе США для переводчиков).' },
      { en: 'Confirm fee exemptions, as many Special Immigrant categories (like SIJ or Afghan/Iraqi translators) do not pay standard filing fees.', es: 'Confirmar las exenciones de tarifas, ya que muchas categorías de Inmigrante Especial (como SIJ o traductores afganos/iraquíes) no pagan las tarifas estándar de presentación.', ru: 'Подтвердить освобождение от сборов, так как многие категории специальных иммигрантов (например, SIJ или афгано-иракские переводчики) не платят стандартные регистрационные сборы.' },
    ],
    countrySpecificInfo: {
      en: 'The EB-4 category has faced broader backlogs recently affecting applicants globally, particularly from El Salvador, Guatemala, Honduras, and Mexico.',
      es: 'La categoría EB-4 ha enfrentado retrasos más amplios recientemente que afectan a solicitantes a nivel mundial, particularmente de El Salvador, Guatemala, Honduras y México.',
      ru: 'Категория EB-4 в последнее время столкнулась с более широкими задержками, затрагивающими заявителей по всему миру, особенно из Сальвадора, Гватемалы, Гондураса и Мексики.',
    },
    preventionSuggestions: [
      { en: "For SIJs, age-out rules are extremely strict; ensure the I-360 is filed before the applicant's 21st birthday.", es: 'Para los SIJ, las reglas de exclusión por edad son extremadamente estrictas; asegúrese de presentar el I-360 antes del 21.º cumpleaños del solicitante.', ru: 'Для SIJ правила исключения по возрасту крайне строгие; убедитесь, что форма I-360 подана до 21-летия заявителя.' },
      { en: 'For religious workers, the sponsoring organization must have its R-1/EB-4 tax-exempt documentation meticulously prepared to avoid fraud investigations.', es: 'Para los trabajadores religiosos, la organización patrocinadora debe tener su documentación de exención de impuestos R-1/EB-4 meticulosamente preparada para evitar investigaciones de fraude.', ru: 'Для религиозных работников спонсирующая организация должна тщательно подготовить документацию об освобождении от налогов R-1/EB-4, чтобы избежать расследований по подозрению в мошенничестве.' },
    ],
    communicationTemplates: [
      {
        recipient: {
          en: 'State Juvenile Court (for SIJ applicants)',
          es: 'Tribunal Juvenil Estatal (para solicitantes SIJ)',
          ru: 'Суд по делам несовершеннолетних штата (для заявителей SIJ)',
        },
        whenToSend: {
          en: 'To initiate the state court proceedings before the applicant turns 18 or 21 (depending on state law).',
          es: 'Para iniciar el proceso judicial estatal antes de que el solicitante cumpla 18 o 21 años (según la ley del estado).',
          ru: 'Для инициирования судебного разбирательства в суде штата до того, как заявителю исполнится 18 или 21 год (в зависимости от законодательства штата).',
        },
        template: `Subject: Petition for Predicate Order for Special Immigrant Juvenile Status
Dear Honorable Court,
We are filing the attached petition seeking a predicate order declaring that [Child's Name] is dependent on the court and that reunification with one or both parents is not viable due to abuse, neglect, or abandonment. This order is a time-sensitive prerequisite for federal immigration relief.
Respectfully,
[Your Name/Attorney]`,
      },
    ],
  },

  {
    id: 'refugee-asylee',
    name: {
      en: 'Green Card through Refugee or Asylee Status',
      es: 'Tarjeta Verde por Estatus de Refugiado o Asilado',
      ru: 'Грин-карта через статус беженца или лица, получившего убежище',
    },
    simpleDescription: {
      en: 'If you came to the U.S. as a refugee or were granted asylum, you can apply for a green card after one year.',
      es: 'Si llegó a los EE.UU. como refugiado o se le concedió asilo, puede solicitar una tarjeta verde después de un año.',
      ru: 'Если вы приехали в США в качестве беженца или вам было предоставлено убежище, вы можете подать заявление на грин-карту через год.',
    },
    explanation: {
      en: 'Foreign nationals admitted to the U.S. as refugees or granted asylum are required (refugees) or eligible (asylees) to apply for a green card after one year of physical presence in the United States. This category provides a permanent safe haven for those who fled persecution. Spouses and children granted derivative status can also adjust.',
      es: 'Los extranjeros admitidos en los EE.UU. como refugiados o a quienes se les concedió asilo están obligados (refugiados) o son elegibles (asilados) para solicitar una tarjeta verde después de un año de presencia física en los Estados Unidos. Esta categoría proporciona un refugio seguro permanente para quienes huyeron de la persecución.',
      ru: 'Иностранные граждане, допущенные в США в качестве беженцев или получившие убежище, обязаны (беженцы) или имеют право (лица с убежищем) подать заявление на грин-карту после одного года физического присутствия в США. Эта категория обеспечивает постоянное безопасное убежище для тех, кто бежал от преследований.',
    },
    applicants: [
      {
        id: 'asylee',
        whoAs: {
          en: 'Asylee',
          es: 'Asilado',
          ru: 'Лицо, получившее убежище',
        },
        whoBe: {
          en: 'Someone who was granted asylum in the U.S. at least 1 year ago',
          es: 'Alguien a quien se le concedió asilo en los EE.UU. hace al menos 1 año',
          ru: 'Человек, получивший убежище в США не менее 1 года назад',
        },
      },
      {
        id: 'refugee',
        whoAs: {
          en: 'Refugee',
          es: 'Refugiado',
          ru: 'Беженец',
        },
        whoBe: {
          en: 'Someone who entered the U.S. as a refugee at least 1 year ago',
          es: 'Alguien que entró a los EE.UU. como refugiado hace al menos 1 año',
          ru: 'Человек, въехавший в США в статусе беженца не менее 1 года назад',
        },
      },
    ],
    targetTimeline: {
      en: '1.5 to 2.5 years for the I-485 application to be processed, depending heavily on security background checks.',
      es: 'De 1.5 a 2.5 años para que se procese la solicitud I-485, dependiendo en gran medida de las verificaciones de antecedentes de seguridad.',
      ru: 'От 1,5 до 2,5 лет на обработку заявления I-485, в значительной мере в зависимости от проверок безопасности.',
    },
    canFileConcurrently: {
      en: 'Not applicable. The status (asylee/refugee) must be held for 1 year before filing the I-485.',
      es: 'No aplica. El estatus (asilado/refugiado) debe mantenerse durante 1 año antes de presentar el I-485.',
      ru: 'Не применимо. Статус (лица с убежищем/беженца) должен удерживаться в течение 1 года перед подачей I-485.',
    },
    commonWaivers: {
      en: 'Form I-602 (Application by Refugee for Waiver of Inadmissibility Grounds) for medical, criminal, or other grounds of inadmissibility. This waiver is much broader and more forgiving than the I-601.',
      es: 'Formulario I-602 (Solicitud de Refugiado para Renuncia de Motivos de Inadmisibilidad) para motivos médicos, penales u otros. Esta renuncia es mucho más amplia y permisiva que el I-601.',
      ru: 'Форма I-602 (заявление беженца об освобождении от оснований недопустимости) для медицинских, уголовных или иных оснований. Это освобождение значительно шире и мягче, чем I-601.',
    },
    steps: [
      { en: 'Accumulate one year of physical presence in the U.S. after being admitted as a refugee or granted asylum.', es: 'Acumular un año de presencia física en los EE.UU. después de ser admitido como refugiado o habérsele concedido el asilo.', ru: 'Накопить один год физического присутствия в США после получения статуса беженца или убежища.' },
      { en: 'File Form I-485, Application to Register Permanent Residence.', es: 'Presentar el Formulario I-485, Solicitud de Registro de Residencia Permanente.', ru: 'Подать форму I-485, Заявление о регистрации постоянного места жительства.' },
      { en: 'Attend biometrics appointment.', es: 'Asistir a la cita de biometría.', ru: 'Явиться на процедуру снятия биометрических данных.' },
      { en: 'Complete the medical exam (Form I-693).', es: 'Completar el examen médico (Formulario I-693).', ru: 'Пройти медицинский осмотр (форма I-693).' },
    ],
    actionItems: [
      { en: 'Confirm one full year of physical presence; track all international travel after being granted status.', es: 'Confirmar un año completo de presencia física; registrar todos los viajes internacionales después de obtener el estatus.', ru: 'Подтвердить один полный год физического присутствия; отслеживать все международные поездки после получения статуса.' },
      { en: 'Obtain proof of asylee or refugee status (e.g., I-94, Asylum approval letter, or Immigration Judge order).', es: 'Obtener prueba del estatus de asilado o refugiado (p. ej., I-94, carta de aprobación de asilo u orden del Juez de Inmigración).', ru: 'Получить подтверждение статуса лица с убежищем или беженца (например, I-94, письмо об одобрении убежища или постановление судьи по иммиграционным делам).' },
      { en: 'Refugees: Pay no fee for the I-485 application. Asylees: Pay the $1,440 fee or submit a fee waiver (Form I-912).', es: 'Refugiados: No pagan tarifa para la solicitud I-485. Asilados: Pagar la tarifa de $1,440 o presentar una exención de tarifa (Formulario I-912).', ru: 'Беженцы: подача I-485 бесплатна. Лица с убежищем: оплатить сбор $1 440 или подать заявление об освобождении от оплаты (форма I-912).' },
    ],
    countrySpecificInfo: {
      en: 'There are no per-country visa caps for asylees and refugees adjusting status. However, background checks can sometimes cause delays for applicants from regions with complex security concerns.',
      es: 'No existen límites de visa por país para asilados y refugiados que ajustan su estatus. Sin embargo, las verificaciones de antecedentes a veces pueden causar retrasos para solicitantes de regiones con problemas de seguridad complejos.',
      ru: 'Для лиц с убежищем и беженцев, изменяющих статус, ограничений по количеству виз на страну нет. Однако проверки биографических данных иногда могут вызывать задержки для заявителей из регионов со сложными проблемами безопасности.',
    },
    preventionSuggestions: [
      { en: 'Ensure you have not engaged in any conduct that would make you removable or trigger inadmissibility.', es: 'Asegúrese de no haber realizado ninguna conducta que lo haga deportable o que genere inadmisibilidad.', ru: 'Убедитесь, что вы не совершали действий, которые могут привести к высылке или признанию недопустимым.' },
      { en: 'Do not travel outside the U.S. without first obtaining a Refugee Travel Document, as doing so might risk your status.', es: 'No viaje fuera de los EE.UU. sin obtener primero un Documento de Viaje de Refugiado, ya que hacerlo podría poner en riesgo su estatus.', ru: 'Не выезжайте за пределы США без предварительного получения документа о путешествии беженца, поскольку это может поставить под угрозу ваш статус.' },
    ],
    communicationTemplates: [
      {
        recipient: { en: 'USCIS', es: 'USCIS', ru: 'USCIS' },
        whenToSend: {
          en: 'If an I-485 has been pending for an extensively long time, often due to security checks.',
          es: 'Si un I-485 ha estado pendiente durante mucho tiempo, generalmente debido a verificaciones de seguridad.',
          ru: 'Если I-485 ожидает рассмотрения в течение очень долгого времени, часто из-за проверок безопасности.',
        },
        template: `Subject: Case Inquiry - Asylee Adjustment of Status (Receipt Number [Insert Number])
Dear USCIS Officer,
I am requesting an update on my Form I-485, which has been pending for over [number] months. As an asylee, I understand that background checks take time, but my case is now well outside the published processing times. Could you please advise if there is any further documentation I can provide to assist in concluding the review of my application?
Sincerely,
[Your Name]`,
      },
    ],
  },

  {
    id: 'trafficking-crime',
    name: {
      en: 'Green Card for Human Trafficking and Crime Victims',
      es: 'Tarjeta Verde para Víctimas de Trata de Personas y Crímenes',
      ru: 'Грин-карта для жертв торговли людьми и преступлений',
    },
    simpleDescription: {
      en: 'If you are a victim of trafficking or certain crimes and you helped law enforcement, you may be able to get a green card.',
      es: 'Si es víctima de trata de personas o ciertos delitos y ayudó a las autoridades, es posible que pueda obtener una tarjeta verde.',
      ru: 'Если вы являетесь жертвой торговли людьми или определённых преступлений и помогали правоохранительным органам, вы, возможно, сможете получить грин-карту.',
    },
    explanation: {
      en: 'This category allows individuals who have been granted T nonimmigrant status (trafficking victims) or U nonimmigrant status (crime victims) to adjust to permanent resident status. These pathways are designed to protect vulnerable individuals who have cooperated with U.S. law enforcement. It requires continuous physical presence in the U.S. for a specified period.',
      es: 'Esta categoría permite a las personas a quienes se les ha otorgado el estatus de no inmigrante T (víctimas de trata) o U (víctimas de crímenes) ajustar su estatus a residente permanente. Estas vías están diseñadas para proteger a personas vulnerables que han cooperado con las autoridades de los EE.UU.',
      ru: 'Эта категория позволяет лицам, получившим неиммиграционный статус T (жертвы торговли людьми) или U (жертвы преступлений), изменить статус на постоянного жителя. Эти пути разработаны для защиты уязвимых лиц, сотрудничавших с правоохранительными органами США.',
    },
    applicants: [
      {
        id: 't-visa',
        whoAs: {
          en: 'Human trafficking victim',
          es: 'Víctima de trata de personas',
          ru: 'Жертва торговли людьми',
        },
        whoBe: {
          en: 'Someone who currently has a T visa (given to victims of human trafficking)',
          es: 'Alguien que actualmente tiene una visa T (otorgada a víctimas de trata de personas)',
          ru: 'Человек, у которого в настоящее время есть виза T (выдаётся жертвам торговли людьми)',
        },
      },
      {
        id: 'u-visa',
        whoAs: {
          en: 'Crime victim',
          es: 'Víctima de un delito',
          ru: 'Жертва преступления',
        },
        whoBe: {
          en: 'Someone who currently has a U visa (given to victims of certain crimes who helped police or prosecutors)',
          es: 'Alguien que actualmente tiene una visa U (otorgada a víctimas de ciertos delitos que ayudaron a la policía o fiscales)',
          ru: 'Человек, у которого в настоящее время есть виза U (выдаётся жертвам определённых преступлений, помогавшим полиции или прокуратуре)',
        },
      },
    ],
    targetTimeline: {
      en: '1.5 to 2.5 years after filing the adjustment application. The wait for the underlying U visa currently exceeds 5+ years.',
      es: 'De 1.5 a 2.5 años después de presentar la solicitud de ajuste. La espera por la visa U subyacente actualmente supera los 5 años.',
      ru: 'От 1,5 до 2,5 лет после подачи заявления на изменение статуса. Ожидание базовой визы U в настоящее время превышает 5 лет.',
    },
    canFileConcurrently: {
      en: 'Not applicable. The U or T status must be held for the required physical presence period (typically 3 years) before filing the I-485.',
      es: 'No aplica. El estatus U o T debe mantenerse durante el período de presencia física requerido (generalmente 3 años) antes de presentar el I-485.',
      ru: 'Не применимо. Статус U или T должен удерживаться в течение требуемого периода физического присутствия (как правило, 3 года) перед подачей I-485.',
    },
    commonWaivers: {
      en: 'Form I-192 (Application for Advance Permission to Enter as a Nonimmigrant) is filed during the initial U/T stage to waive almost any inadmissibility. Rarely is a waiver needed at the Green Card stage if previously waived.',
      es: 'El Formulario I-192 se presenta durante la etapa inicial U/T para renunciar a casi cualquier inadmisibilidad. Raramente se necesita una renuncia en la etapa de tarjeta verde si ya se renunció anteriormente.',
      ru: 'Форма I-192 подаётся на начальном этапе U/T для отмены практически любого основания недопустимости. На этапе грин-карты освобождение редко требуется, если оно уже было получено ранее.',
    },
    steps: [
      {
        en: 'Step 1: Hold valid T or U nonimmigrant status and meet the physical presence requirement (usually 3 years).',
        es: 'Paso 1: Mantenga un estatus de no inmigrante T o U válido y cumpla con el requisito de presencia física (generalmente 3 años).',
        ru: 'Шаг 1: Имейте действующий неиммиграционный статус T или U и соблюдайте требование физического присутствия (обычно 3 года).',
      },
      {
        en: 'Step 2: File Form I-485, Adjustment of Status.',
        es: 'Paso 2: Presente el Formulario I-485, Ajuste de Estatus.',
        ru: 'Шаг 2: Подайте Форму I-485, Изменение статуса.',
      },
      {
        en: 'Step 3: Provide evidence of ongoing cooperation with law enforcement (for U visa) or compliance with assistance requests (for T visa).',
        es: 'Paso 3: Proporcione evidencia de cooperación continua con las autoridades (para visa U) o cumplimiento con las solicitudes de asistencia (para visa T).',
        ru: 'Шаг 3: Предоставьте доказательства продолжающегося сотрудничества с правоохранительными органами (для визы U) или выполнения запросов о помощи (для визы T).',
      },
      {
        en: 'Step 4: Provide evidence of good moral character.',
        es: 'Paso 4: Proporcione evidencia de buena moral.',
        ru: 'Шаг 4: Предоставьте доказательства хорошего морального облика.',
      },
    ],
    actionItems: [
      {
        en: 'Obtain a newly signed certification or letter from the certifying law enforcement agency confirming ongoing cooperation.',
        es: 'Obtenga una certificación o carta recién firmada de la agencia certificadora que confirme la cooperación continua.',
        ru: 'Получите недавно подписанный сертификат или письмо от сертифицирующего правоохранительного органа, подтверждающего продолжающееся сотрудничество.',
      },
      {
        en: 'Gather affidavits and evidence demonstrating continuous physical presence in the U.S.',
        es: 'Recopile declaraciones juradas y evidencia que demuestre presencia física continua en los EE.UU.',
        ru: 'Соберите аффидевиты и доказательства, подтверждающие непрерывное физическое присутствие в США.',
      },
      {
        en: 'Request a fee waiver (Form I-912) as most U and T adjusters are eligible to waive the I-485 fee.',
        es: 'Solicite una exención de tarifa (Formulario I-912), ya que la mayoría de los ajustadores U y T son elegibles para eximir la tarifa del I-485.',
        ru: 'Запросите освобождение от уплаты сбора (Форма I-912), поскольку большинство лиц, изменяющих статус U и T, имеют право на это.',
      },
    ],
    countrySpecificInfo: {
      en: 'No country-specific caps apply, but the overall statutory limit of 10,000 U visas per year causes massive backlogs at the initial nonimmigrant stage.',
      es: 'No se aplican límites específicos por país, pero el límite legal general de 10,000 visas U por año causa enormes retrasos en la etapa inicial de no inmigrante.',
      ru: 'Специфические для страны ограничения не применяются, но общий законодательный лимит в 10 000 виз U в год вызывает огромные задержки на начальном этапе неиммиграционного статуса.',
    },
    preventionSuggestions: [
      {
        en: 'Never depart the United States without explicit authorization (Advance Parole) while in U or T status, as it breaks the continuous physical presence requirement.',
        es: 'Nunca salga de los Estados Unidos sin autorización explícita (Parole Anticipado) mientras se encuentre en estatus U o T, ya que rompe el requisito de presencia física continua.',
        ru: 'Никогда не покидайте США без явного разрешения (Advance Parole), находясь в статусе U или T, так как это нарушает требование непрерывного физического присутствия.',
      },
      {
        en: 'Compile extensive tax and police records to affirmatively prove good moral character.',
        es: 'Recopile extensos registros fiscales y policiales para probar afirmativamente la buena moral.',
        ru: 'Соберите обширные налоговые и полицейские записи для подтверждения хорошего морального облика.',
      },
    ],
    communicationTemplates: [
      {
        recipient: {
          en: 'Law Enforcement Agency/Prosecutor',
          es: 'Agencia de Aplicación de la Ley/Fiscal',
          ru: 'Правоохранительный орган/Прокурор',
        },
        whenToSend: {
          en: '3–4 months prior to filing the I-485 application.',
          es: '3 a 4 meses antes de presentar la solicitud I-485.',
          ru: 'За 3–4 месяца до подачи заявления I-485.',
        },
        template: `Subject: Request for Confirmation of Cooperation for U-Visa Adjustment
Dear [Officer/Prosecutor Name],
I was previously granted a U-visa based on my assistance in case [Case Number]. I am preparing to apply for my Green Card and kindly request a brief letter confirming that I have not unreasonably refused to provide assistance in the criminal investigation or prosecution since the issuance of my U-visa.
Thank you for your ongoing support.
Sincerely,
[Your Name]`,
      },
    ],
  },

  {
    id: 'abuse-victims',
    name: {
      en: 'Green Card for Victims of Abuse (VAWA)',
      es: 'Tarjeta Verde para Víctimas de Abuso (VAWA)',
      ru: 'Грин-карта для жертв насилия (VAWA)',
    },
    simpleDescription: {
      en: "If you have been abused or hurt by someone in your family and you are living in the U.S., there may be a way for you to get a green card without your abuser's help.",
      es: 'Si ha sido abusado/a o lastimado/a por alguien en su familia y vive en los EE.UU., puede haber una manera de obtener una tarjeta verde sin la ayuda de su agresor.',
      ru: 'Если вас обидели или причинили вам вред члены вашей семьи, и вы живёте в США, возможно, существует способ получить грин-карту без помощи обидчика.',
    },
    explanation: {
      en: "Under the Violence Against Women Act (VAWA), abused spouses, children, and parents of U.S. citizens or lawful permanent residents can self-petition for a green card. This allows victims to seek safety and independence without the abuser's knowledge. It applies to all genders, despite the name of the act.",
      es: 'Bajo la Ley de Violencia contra la Mujer (VAWA), los cónyuges, hijos y padres abusados de ciudadanos estadounidenses o residentes permanentes legales pueden autopeticionarse para una tarjeta verde. Esto permite a las víctimas buscar seguridad e independencia sin el conocimiento del agresor. Se aplica a todos los géneros.',
      ru: 'В соответствии с Законом о насилии в отношении женщин (VAWA), подвергавшиеся насилию супруги, дети и родители граждан США или законных постоянных жителей могут самостоятельно подать петицию на грин-карту. Это позволяет жертвам искать безопасность без ведома обидчика. Закон применяется ко всем полам.',
    },
    applicants: [
      {
        id: 'vawa-self',
        whoAs: {
          en: 'VAWA self-petitioner (abuse victim)',
          es: 'Autopeticionario VAWA (víctima de abuso)',
          ru: 'Самостоятельный петиционер по VAWA (жертва насилия)',
        },
        whoBe: {
          en: 'An abused husband or wife of a U.S. citizen or green card holder; OR an abused unmarried child (under 21) of a U.S. citizen or green card holder; OR an abused parent of a U.S. citizen',
          es: 'Un esposo/a maltratado/a de un ciudadano estadounidense o titular de tarjeta verde; O un hijo/a soltero/a maltratado/a (menor de 21 años) de un ciudadano estadounidense o titular de tarjeta verde; O un padre/madre maltratado/a de un ciudadano estadounidense',
          ru: 'Подвергавшийся насилию муж или жена гражданина США или обладателя грин-карты; ИЛИ подвергавшийся насилию несовершеннолетний ребёнок (до 21 года) гражданина США; ИЛИ подвергавшийся насилию родитель гражданина США',
        },
      },
      {
        id: 'sij-abuse',
        whoAs: {
          en: 'Special Immigrant Juvenile',
          es: 'Menor Inmigrante Especial',
          ru: 'Специальный иммигрант-несовершеннолетний',
        },
        whoBe: {
          en: 'A child who was abused, abandoned, or neglected by a parent, and who has been placed under the protection of a court',
          es: 'Un niño/a que fue abusado/a, abandonado/a o descuidado/a por un padre o madre, y que ha sido colocado/a bajo la protección de un tribunal',
          ru: 'Ребёнок, которого родитель подверг насилию, бросил или не заботился о нём, и который был взят под защиту суда',
        },
      },
      {
        id: 'cuban-abuse',
        whoAs: {
          en: 'Abused spouse or child under the Cuban Adjustment Act',
          es: 'Cónyuge o hijo/a maltratado/a bajo la Ley de Ajuste Cubano',
          ru: 'Подвергавшийся насилию супруг/ребёнок согласно Закону о кубинской адаптации',
        },
        whoBe: {
          en: 'The abused husband, wife, or child of a Cuban person',
          es: 'El esposo, esposa o hijo/a maltratado/a de una persona cubana',
          ru: 'Подвергавшийся насилию муж, жена или ребёнок гражданина Кубы',
        },
      },
      {
        id: 'hrifa-abuse',
        whoAs: {
          en: 'Abused spouse or child under HRIFA',
          es: 'Cónyuge o hijo/a maltratado/a bajo HRIFA',
          ru: 'Подвергавшийся насилию супруг/ребёнок согласно HRIFA',
        },
        whoBe: {
          en: 'The abused husband, wife, or child of a green card holder who got their card through the Haitian Refugee Immigration Fairness Act (HRIFA)',
          es: 'El esposo, esposa o hijo/a maltratado/a de un titular de tarjeta verde que obtuvo su tarjeta a través de HRIFA',
          ru: 'Подвергавшийся насилию муж, жена или ребёнок обладателя грин-карты, получившего её по Закону о справедливости иммиграции гаитянских беженцев (HRIFA)',
        },
      },
    ],
    targetTimeline: {
      en: '2.5 to 4 years for the I-360 approval, followed by the I-485 process (timeline varies based on visa availability).',
      es: 'De 2.5 a 4 años para la aprobación del I-360, seguido del proceso I-485 (el plazo varía según la disponibilidad de visas).',
      ru: 'От 2,5 до 4 лет на одобрение I-360, затем процесс I-485 (сроки варьируются в зависимости от наличия виз).',
    },
    canFileConcurrently: {
      en: 'Yes, if the abuser is a U.S. Citizen. If the abuser is a Lawful Permanent Resident, concurrent filing is only allowed if the family preference priority date is current.',
      es: 'Sí, si el agresor es ciudadano de los EE.UU. Si el agresor es Residente Permanente Legal, la presentación simultánea solo se permite si la fecha de prioridad de preferencia familiar está vigente.',
      ru: 'Да, если обидчик является гражданином США. Если обидчик является законным постоянным жителем, одновременная подача разрешена только при текущей приоритетной дате семейного предпочтения.',
    },
    commonWaivers: {
      en: 'VAWA applicants have special exemptions for unlawful presence and unauthorized work. If waivers are needed for criminal or fraud issues, an I-601 is used with a specialized "extreme hardship" standard for VAWA self-petitioners.',
      es: 'Los solicitantes VAWA tienen exenciones especiales por presencia ilegal y trabajo no autorizado. Si se necesitan renuncias por problemas penales o de fraude, se usa un I-601 con el estándar especializado de "dificultad extrema" para autopeticionarios VAWA.',
      ru: 'Заявители VAWA имеют специальные освобождения от незаконного присутствия и несанкционированной работы. При необходимости освобождений по уголовным или мошенническим вопросам используется I-601 со специализированным стандартом "крайних трудностей".',
    },
    steps: [
      {
        en: 'Step 1: File Form I-360, self-petition, with evidence of the relationship, abuse, and good moral character.',
        es: 'Paso 1: Presente el Formulario I-360, autopetición, con evidencia de la relación, el abuso y el buen carácter moral.',
        ru: 'Шаг 1: Подайте Форму I-360, самостоятельную петицию, с доказательствами родства, насилия и хорошего морального облика.',
      },
      {
        en: "Step 2: Receive a 'Prima Facie' determination, allowing access to certain public benefits.",
        es: "Paso 2: Reciba una determinación 'Prima Facie', que permite el acceso a ciertos beneficios públicos.",
        ru: "Шаг 2: Получите определение 'Prima Facie', позволяющее получить доступ к определённым государственным льготам.",
      },
      {
        en: 'Step 3: Once the I-360 is approved and a visa is available, file Form I-485 to adjust status.',
        es: 'Paso 3: Una vez que el I-360 sea aprobado y haya una visa disponible, presente el Formulario I-485 para ajustar el estatus.',
        ru: 'Шаг 3: После одобрения I-360 и наличии доступной визы подайте Форму I-485 для изменения статуса.',
      },
      {
        en: 'Step 4: Attend biometrics and an interview (if not waived).',
        es: 'Paso 4: Asista a biometría y una entrevista (si no se omite).',
        ru: 'Шаг 4: Пройдите биометрию и собеседование (если не отменено).',
      },
    ],
    actionItems: [
      {
        en: 'Establish strict confidentiality protocols; ensure USCIS has a safe mailing address.',
        es: 'Establezca protocolos estrictos de confidencialidad; asegúrese de que USCIS tenga una dirección postal segura.',
        ru: 'Установите строгие протоколы конфиденциальности; убедитесь, что USCIS имеет безопасный почтовый адрес.',
      },
      {
        en: 'Collect police reports, medical records, or psychological evaluations proving extreme cruelty or battery.',
        es: 'Recopile informes policiales, registros médicos o evaluaciones psicológicas que prueben crueldad extrema o agresión.',
        ru: 'Соберите полицейские отчёты, медицинские записи или психологические оценки, подтверждающие крайнее насилие или избиение.',
      },
      {
        en: 'Obtain police clearance letters from every place lived in the past 3 years to prove good moral character.',
        es: 'Obtenga cartas de antecedentes policiales de todos los lugares donde vivió en los últimos 3 años para demostrar buen carácter moral.',
        ru: 'Получите справки об отсутствии судимости из всех мест проживания за последние 3 года для подтверждения хорошего морального облика.',
      },
    ],
    countrySpecificInfo: {
      en: 'Wait times for the I-485 stage align with family-based priority dates if the abuser is a permanent resident. If the abuser is a U.S. citizen, the visa is immediately available.',
      es: 'Los tiempos de espera para la etapa I-485 se alinean con las fechas de prioridad familiares si el agresor es residente permanente. Si el agresor es ciudadano de EE.UU., la visa está disponible de inmediato.',
      ru: 'Сроки ожидания на этапе I-485 соответствуют семейным приоритетным датам, если обидчик является постоянным жителем. Если обидчик является гражданином США, виза доступна немедленно.',
    },
    preventionSuggestions: [
      {
        en: 'Do not use your home address on any USCIS forms if you still live with or are hiding from the abuser; use a trusted attorney or P.O. Box.',
        es: 'No use su dirección de casa en ningún formulario de USCIS si todavía vive con el agresor o se está escondiendo de él; use un abogado de confianza o un apartado postal.',
        ru: 'Не используйте домашний адрес в формах USCIS, если вы всё ещё живёте с обидчиком или скрываетесь от него; используйте адрес доверенного адвоката или почтовый ящик.',
      },
      {
        en: 'Ensure the evidence of a good faith marriage is exceptionally strong, as USCIS scrutinizes this heavily.',
        es: 'Asegúrese de que la evidencia de un matrimonio de buena fe sea excepcionalmente sólida, ya que USCIS la examina muy detenidamente.',
        ru: 'Убедитесь, что доказательства добросовестного брака исключительно убедительны, поскольку USCIS тщательно их проверяет.',
      },
    ],
    communicationTemplates: [
      {
        recipient: {
          en: 'Psychologist/Medical Professional',
          es: 'Psicólogo/Profesional de la Salud',
          ru: 'Психолог/Медицинский специалист',
        },
        whenToSend: {
          en: 'At the beginning of evidence gathering for the I-360 petition.',
          es: 'Al inicio de la recopilación de pruebas para la petición I-360.',
          ru: 'В начале сбора доказательств для петиции I-360.',
        },
        template: `Subject: Request for VAWA Evaluation
Dear Dr. [Name],
I am currently working on an immigration case under the VAWA provisions for victims of domestic abuse. I am reaching out to schedule a psychological evaluation to document the emotional and psychological impact of the extreme cruelty I experienced. Your detailed report will serve as critical evidence for my self-petition.
Thank you,
[Your Name]`,
      },
    ],
  },

  {
    id: 'registry',
    name: {
      en: 'Green Card through Registry',
      es: 'Tarjeta Verde por Registro',
      ru: 'Грин-карта через реестр',
    },
    simpleDescription: {
      en: 'If you have lived in the U.S. continuously since before January 1, 1972, you may be able to apply for a green card through the Registry program — even if you entered without permission or stayed longer than your visa allowed.',
      es: 'Si ha vivido en los EE.UU. de forma continua desde antes del 1 de enero de 1972, es posible que pueda solicitar una tarjeta verde a través del programa de Registro, incluso si entró sin permiso o se quedó más tiempo del permitido.',
      ru: 'Если вы непрерывно проживаете в США с периода до 1 января 1972 года, вы, возможно, сможете подать заявление на грин-карту по программе реестра — даже если въехали без разрешения или превысили срок визы.',
    },
    explanation: {
      en: 'Registry is an obscure but powerful provision allowing individuals who have been continuously present in the U.S. since before January 1, 1972, to apply for a green card. It is intended for long-term undocumented individuals. Applicants must demonstrate good moral character and not be deportable on certain severe grounds.',
      es: 'El Registro es una disposición poco conocida pero poderosa que permite a las personas que han estado continuamente presentes en los EE.UU. desde antes del 1 de enero de 1972 solicitar una tarjeta verde. Está destinada a personas indocumentadas de largo plazo que deben demostrar buena moral y no ser deportables por ciertos motivos graves.',
      ru: 'Реестр — малоизвестное, но мощное положение, позволяющее лицам, непрерывно находившимся в США до 1 января 1972 года, подать заявление на грин-карту. Предназначено для давно проживающих нелегальных иммигрантов. Заявители должны продемонстрировать хороший моральный облик.',
    },
    applicants: [],
    targetTimeline: {
      en: '1 to 2 years, primarily depending on background checks and local field office interview queues.',
      es: 'De 1 a 2 años, principalmente dependiendo de las verificaciones de antecedentes y las colas de entrevistas en las oficinas locales.',
      ru: 'От 1 до 2 лет, в первую очередь в зависимости от проверок биографических данных и очередей на собеседования в местных офисах.',
    },
    canFileConcurrently: {
      en: 'Yes, the I-485 is filed directly as the primary application; there is no underlying petition like an I-130 or I-140.',
      es: 'Sí, el I-485 se presenta directamente como la solicitud principal; no hay una petición subyacente como un I-130 o I-140.',
      ru: 'Да, I-485 подаётся непосредственно как основное заявление; нет базовой петиции типа I-130 или I-140.',
    },
    commonWaivers: {
      en: 'Registry applicants are statutorily exempt from many inadmissibility grounds (like unlawful entry or being a public charge). Criminal waivers (I-601) may be needed for specific offenses.',
      es: 'Los solicitantes de Registro están estatutariamente exentos de muchos motivos de inadmisibilidad (como entrada ilegal o ser una carga pública). Pueden necesitarse renuncias penales (I-601) para infracciones específicas.',
      ru: 'Заявители реестра по закону освобождены от многих оснований недопустимости (например, незаконного въезда или угрозы стать нахлебником). Уголовные освобождения (I-601) могут потребоваться для конкретных правонарушений.',
    },
    steps: [
      {
        en: "Step 1: File Form I-485, Adjustment of Status, indicating eligibility under 'Registry'.",
        es: "Paso 1: Presente el Formulario I-485, Ajuste de Estatus, indicando elegibilidad bajo 'Registro'.",
        ru: "Шаг 1: Подайте Форму I-485, Изменение статуса, указав право на участие по программе 'Реестр'.",
      },
      {
        en: 'Step 2: Submit copious evidence establishing continuous residence since before January 1, 1972.',
        es: 'Paso 2: Presente abundante evidencia que establezca residencia continua desde antes del 1 de enero de 1972.',
        ru: 'Шаг 2: Предоставьте обширные доказательства непрерывного проживания с периода до 1 января 1972 года.',
      },
      {
        en: 'Step 3: Attend biometrics appointment.',
        es: 'Paso 3: Asista a la cita de biometría.',
        ru: 'Шаг 3: Посетите биометрическую запись.',
      },
      {
        en: 'Step 4: Attend an interview with a USCIS officer to review historical evidence.',
        es: 'Paso 4: Asista a una entrevista con un oficial de USCIS para revisar la evidencia histórica.',
        ru: 'Шаг 4: Пройдите собеседование с сотрудником USCIS для проверки исторических доказательств.',
      },
    ],
    actionItems: [
      {
        en: 'Gather chronological documentation (rent receipts, tax returns, bank statements, affidavits) for every single year since 1972.',
        es: 'Recopile documentación cronológica (recibos de alquiler, declaraciones de impuestos, estados de cuenta bancarios, declaraciones juradas) para cada año desde 1972.',
        ru: 'Соберите хронологическую документацию (квитанции об аренде, налоговые декларации, банковские выписки, аффидевиты) за каждый год начиная с 1972 года.',
      },
      {
        en: 'Submit Form I-485 and pay the $1,440 fee.',
        es: 'Presente el Formulario I-485 y pague la tarifa de $1,440.',
        ru: 'Подайте Форму I-485 и оплатите сбор в размере $1,440.',
      },
      {
        en: 'Obtain police clearances to establish good moral character.',
        es: 'Obtenga certificados de antecedentes penales para establecer buen carácter moral.',
        ru: 'Получите справки об отсутствии судимости для подтверждения хорошего морального облика.',
      },
    ],
    countrySpecificInfo: {
      en: 'There are no per-country visa limits for Registry applicants. Nationality is largely irrelevant as long as the 1972 cutoff is met.',
      es: 'No hay límites de visa por país para los solicitantes de Registro. La nacionalidad es en gran medida irrelevante siempre que se cumpla con el límite de 1972.',
      ru: 'Для заявителей реестра нет ограничений виз по странам. Национальность в основном не имеет значения, если соблюдается рубеж 1972 года.',
    },
    preventionSuggestions: [
      {
        en: "Any prolonged departures from the U.S. can break the 'continuous residence' requirement; prepare to explain any trips outside the U.S.",
        es: "Cualquier salida prolongada de los EE.UU. puede romper el requisito de 'residencia continua'; prepárese para explicar cualquier viaje fuera de los EE.UU.",
        ru: "Любые длительные выезды из США могут нарушить требование 'непрерывного проживания'; будьте готовы объяснить любые поездки за рубеж.",
      },
      {
        en: 'Do not rely solely on affidavits; objective documentary evidence is vital for older periods.',
        es: 'No dependa únicamente de declaraciones juradas; la evidencia documental objetiva es vital para períodos más antiguos.',
        ru: 'Не полагайтесь исключительно на аффидевиты; объективные документальные доказательства жизненно важны для более ранних периодов.',
      },
    ],
    communicationTemplates: [
      {
        recipient: {
          en: 'Historical Employer or Landlord',
          es: 'Empleador histórico o propietario',
          ru: 'Бывший работодатель или арендодатель',
        },
        whenToSend: {
          en: 'During the initial phase of gathering 1970s/1980s documentary evidence.',
          es: 'Durante la fase inicial de recopilación de documentos de la década de 1970/1980.',
          ru: 'На начальном этапе сбора архивных документов 1970-х/1980-х годов.',
        },
        template: `Subject: Request for Affidavit/Records of Residence
Dear [Name or Institution],
I am preparing an application for U.S. permanent residency based on my continuous presence in the U.S. since before 1972. I request a sworn affidavit or copies of any archival records you may have confirming my employment/residency with you during the period of [Year] to [Year]. This evidence is crucial for my case.
Thank you,
[Your Name]`,
      },
    ],
  },

  {
    id: 'other',
    name: {
      en: 'Green Card through Other Categories',
      es: 'Tarjeta Verde por Otras Categorías',
      ru: 'Грин-карта через другие категории',
    },
    simpleDescription: {
      en: 'A number of special laws and programs give specific groups of people a path to a green card.',
      es: 'Varias leyes y programas especiales ofrecen a grupos específicos de personas un camino hacia una tarjeta verde.',
      ru: 'Ряд специальных законов и программ предоставляет определённым группам людей путь к получению грин-карты.',
    },
    explanation: {
      en: 'This umbrella category includes various specific programs like the Diversity Immigrant Visa Program (Visa Lottery) and the Cuban Adjustment Act. These paths usually depend on the applicant\'s nationality, specific legislative acts, or luck in a randomized lottery.',
      es: 'Esta categoría general incluye varios programas específicos como el Programa de Visa de Inmigrante por Diversidad (Lotería de Visas) y la Ley de Ajuste Cubano. Estas vías generalmente dependen de la nacionalidad del solicitante, actos legislativos específicos o la suerte en una lotería.',
      ru: 'Эта объединяющая категория включает различные программы, такие как Программа иммиграционных виз разнообразия (визовая лотерея) и Закон о кубинской адаптации. Эти пути обычно зависят от национальности заявителя, конкретных законодательных актов или удачи в лотерее.',
    },
    applicants: [
      {
        id: 'lrif',
        whoAs: {
          en: 'Liberian Refugee Immigration Fairness (LRIF)',
          es: 'Equidad de Inmigración para Refugiados Liberianos (LRIF)',
          ru: 'Справедливость иммиграции либерийских беженцев (LRIF)',
        },
        whoBe: {
          en: 'A person from Liberia who has lived continuously in the U.S. since at least November 20, 2014; OR the husband, wife, or child of such a person',
          es: 'Una persona de Liberia que ha vivido continuamente en los EE.UU. desde al menos el 20 de noviembre de 2014; O el esposo, esposa o hijo/a de esa persona',
          ru: 'Гражданин Либерии, непрерывно проживающий в США с 20 ноября 2014 года; ИЛИ муж, жена или ребёнок такого человека',
        },
      },
      {
        id: 'dv-lottery',
        whoAs: {
          en: 'Diversity Immigrant Visa (DV Lottery)',
          es: 'Visa de Inmigrante por Diversidad (Lotería DV)',
          ru: 'Иммиграционная виза разнообразия (лотерея DV)',
        },
        whoBe: {
          en: "Someone who was selected in the U.S. government's annual green card lottery (open to people from countries that send few immigrants to the U.S.)",
          es: 'Alguien que fue seleccionado en la lotería anual de tarjetas verdes del gobierno de los EE.UU. (abierta a personas de países que envían pocos inmigrantes a los EE.UU.)',
          ru: 'Человек, выбранный в ежегодной лотерее грин-карт правительства США (открыта для граждан стран, из которых в США приезжает мало иммигрантов)',
        },
      },
      {
        id: 'cuban-adjustment',
        whoAs: {
          en: 'Cuban Adjustment Act',
          es: 'Ley de Ajuste Cubano',
          ru: 'Закон о кубинской адаптации',
        },
        whoBe: {
          en: 'A person who was born in Cuba or is a Cuban citizen; OR the husband, wife, or child of such a person',
          es: 'Una persona nacida en Cuba o ciudadano cubano; O el esposo, esposa o hijo/a de esa persona',
          ru: 'Человек, рождённый на Кубе или являющийся гражданином Кубы; ИЛИ муж, жена или ребёнок такого человека',
        },
      },
      {
        id: 'lautenberg',
        whoAs: {
          en: 'Lautenberg parolee',
          es: 'Liberto de Lautenberg',
          ru: 'Помилованный по программе Лаутенберга',
        },
        whoBe: {
          en: 'Someone who was let into the U.S. as a Lautenberg parolee (a special program for certain religious minorities from the former Soviet Union and Southeast Asia)',
          es: 'Alguien que fue admitido en los EE.UU. como liberto de Lautenberg (un programa especial para ciertas minorías religiosas de la ex Unión Soviética y el Sudeste Asiático)',
          ru: 'Человек, допущенный в США по программе Лаутенберга (специальная программа для определённых религиозных меньшинств из бывшего СССР и Юго-Восточной Азии)',
        },
      },
      {
        id: 'american-indian-canada',
        whoAs: {
          en: 'American Indian born in Canada',
          es: 'Indígena americano nacido en Canadá',
          ru: 'Американский индеец, рождённый в Канаде',
        },
        whoBe: {
          en: 'A person born in Canada who has at least 50% American Indian ancestry and whose main home is in the U.S.',
          es: 'Una persona nacida en Canadá que tiene al menos un 50% de ascendencia indígena americana y cuyo hogar principal está en los EE.UU.',
          ru: 'Человек, рождённый в Канаде, у которого не менее 50% коренных американских предков и чей основной дом находится в США',
        },
      },
      {
        id: 'diplomat-born',
        whoAs: {
          en: 'Person born in the U.S. to a foreign diplomat',
          es: 'Persona nacida en EE.UU. con padre/madre diplomático extranjero',
          ru: 'Человек, рождённый в США у иностранного дипломата',
        },
        whoBe: {
          en: "Someone born in the U.S. whose parent was a foreign diplomat assigned to the U.S. at the time of birth",
          es: 'Alguien nacido en los EE.UU. cuyo padre o madre era un diplomático extranjero asignado a los EE.UU. en el momento del nacimiento',
          ru: 'Человек, рождённый в США, чей родитель был иностранным дипломатом в командировке в США на момент рождения',
        },
      },
      {
        id: 'section-13',
        whoAs: {
          en: 'Section 13 — diplomat unable to return home',
          es: 'Sección 13 — diplomático que no puede regresar a su país',
          ru: 'Раздел 13 — дипломат, не способный вернуться на родину',
        },
        whoBe: {
          en: 'A foreign diplomat or high-ranking official who was stationed in the U.S. and cannot safely return to their home country',
          es: 'Un diplomático extranjero o funcionario de alto rango que estuvo asignado en los EE.UU. y no puede regresar con seguridad a su país de origen',
          ru: 'Иностранный дипломат или высокопоставленный чиновник, находившийся в командировке в США и не способный безопасно вернуться в свою страну',
        },
      },
    ],
    targetTimeline: {
      en: 'Varies widely. Diversity Visas must be processed within the fiscal year (fast). Others take 1–3 years.',
      es: 'Varía ampliamente. Las Visas de Diversidad deben procesarse dentro del año fiscal (rápido). Otras toman de 1 a 3 años.',
      ru: 'Варьируется значительно. Визы разнообразия должны быть оформлены в течение финансового года (быстро). Другие занимают 1–3 года.',
    },
    canFileConcurrently: {
      en: 'Yes, for Diversity Visa winners, the I-485 can be filed immediately once the rank number is current. For Cuban Adjustment, the I-485 is filed directly after 1 year of physical presence.',
      es: 'Sí, para los ganadores de la Visa de Diversidad, el I-485 se puede presentar inmediatamente una vez que el número de rango está vigente. Para el Ajuste Cubano, el I-485 se presenta directamente después de 1 año de presencia física.',
      ru: 'Да, для победителей визовой лотереи I-485 можно подать сразу, как только номер очереди станет текущим. Для кубинской адаптации I-485 подаётся напрямую после 1 года физического присутствия.',
    },
    commonWaivers: {
      en: 'Standard I-601 or I-601A waivers apply, depending on the specific path. Diversity Visa applicants are strictly scrutinized and often require waivers for prior misrepresentations or unlawful presence.',
      es: 'Se aplican las renuncias estándar I-601 o I-601A, según la vía específica. Los solicitantes de Visa de Diversidad son estrictamente examinados y con frecuencia requieren renuncias por declaraciones falsas previas o presencia ilegal.',
      ru: 'Применяются стандартные освобождения I-601 или I-601A в зависимости от конкретного пути. Заявители на визу разнообразия строго проверяются и нередко требуют освобождений за предыдущие искажения или незаконное присутствие.',
    },
    steps: [
      {
        en: 'Step 1: Establish eligibility under the specific sub-category (e.g., winning the DV lottery or being a Cuban native).',
        es: 'Paso 1: Establezca elegibilidad bajo la subcategoría específica (por ejemplo, ganar la lotería DV o ser nativo cubano).',
        ru: 'Шаг 1: Установите право на участие в конкретной подкатегории (например, выигрыш в лотерее DV или кубинское происхождение).',
      },
      {
        en: 'Step 2: File Form I-485 (if in the U.S.) or pursue Consular Processing (if outside).',
        es: 'Paso 2: Presente el Formulario I-485 (si está en los EE.UU.) o tramite el Procesamiento Consular (si está fuera).',
        ru: 'Шаг 2: Подайте Форму I-485 (если в США) или пройдите консульскую обработку (если за рубежом).',
      },
      {
        en: 'Step 3: Attend biometrics and/or medical examinations.',
        es: 'Paso 3: Asista a biometría y/o exámenes médicos.',
        ru: 'Шаг 3: Пройдите биометрию и/или медицинские обследования.',
      },
      {
        en: 'Step 4: Complete the green card interview.',
        es: 'Paso 4: Complete la entrevista de tarjeta verde.',
        ru: 'Шаг 4: Пройдите собеседование для получения грин-карты.',
      },
    ],
    actionItems: [
      {
        en: 'Diversity Visa: Must rapidly submit DS-260 and track visa bulletin, as the visa must be issued before September 30 of that fiscal year.',
        es: 'Visa de Diversidad: Debe presentar rápidamente el DS-260 y rastrear el boletín de visas, ya que la visa debe emitirse antes del 30 de septiembre de ese año fiscal.',
        ru: 'Виза разнообразия: необходимо быстро подать DS-260 и отслеживать визовый бюллетень, так как виза должна быть выдана до 30 сентября данного финансового года.',
      },
      {
        en: 'Cuban Adjustment: Must prove one year of physical presence after a lawful admission or parole into the U.S.',
        es: 'Ajuste Cubano: Debe demostrar un año de presencia física después de una admisión legal o libertad condicional en los EE.UU.',
        ru: 'Кубинская адаптация: необходимо доказать один год физического присутствия после законного въезда или условного освобождения в США.',
      },
      {
        en: 'Pay associated category-specific fees.',
        es: 'Pague las tarifas asociadas específicas de la categoría.',
        ru: 'Оплатите связанные с категорией сборы.',
      },
    ],
    countrySpecificInfo: {
      en: 'Diversity Visas are only available to countries with historically low rates of immigration to the U.S. (excluding countries like India, China, Mexico).',
      es: 'Las Visas de Diversidad solo están disponibles para países con tasas históricamente bajas de inmigración a los EE.UU. (excluyendo países como India, China, México).',
      ru: 'Визы разнообразия доступны только гражданам стран с исторически низкими показателями иммиграции в США (за исключением таких стран, как Индия, Китай, Мексика).',
    },
    preventionSuggestions: [
      {
        en: 'For Diversity Visas, time is of the essence; failing to finalize the process by September 30 results in total forfeiture of the green card.',
        es: 'Para las Visas de Diversidad, el tiempo es esencial; no finalizar el proceso antes del 30 de septiembre resulta en la pérdida total de la tarjeta verde.',
        ru: 'Для виз разнообразия время имеет решающее значение; невыполнение процесса до 30 сентября приводит к полной потере грин-карты.',
      },
      {
        en: "Under the Cuban Adjustment Act, ensure that your initial entry was fully documented as a valid 'admission or parole'.",
        es: "Bajo la Ley de Ajuste Cubano, asegúrese de que su entrada inicial esté completamente documentada como una 'admisión o libertad condicional' válida.",
        ru: "В соответствии с Законом о кубинской адаптации убедитесь, что ваш первоначальный въезд полностью задокументирован как законный 'admission or parole'.",
      },
    ],
    communicationTemplates: [
      {
        recipient: {
          en: 'Kentucky Consular Center (KCC) — For Diversity Visa',
          es: 'Centro Consular de Kentucky (KCC) — Para Visa de Diversidad',
          ru: 'Консульский центр Кентукки (KCC) — для визы разнообразия',
        },
        whenToSend: {
          en: "If you submitted the DS-260 and your lottery rank number is current, but you haven't received an interview notice.",
          es: 'Si presentó el DS-260 y su número de rango de lotería está vigente, pero no ha recibido un aviso de entrevista.',
          ru: 'Если вы подали DS-260 и ваш номер в лотерее является текущим, но вы не получили уведомление о собеседовании.',
        },
        template: `Subject: Inquiry Regarding DV Interview Scheduling - Case Number [Insert Case Number]
Dear KCC,
I am a Diversity Visa selectee for Fiscal Year [Year]. My case number is [Case Number]. According to the recent Visa Bulletin, my number is current. I submitted my DS-260 on [Date]. Due to the strict September 30 deadline for visa issuance, I am inquiring if my case is ready to be scheduled for an interview.
Sincerely,
[Your Name]`,
      },
    ],
  },
]
