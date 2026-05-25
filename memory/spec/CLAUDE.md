# FastGC — Product Specification

## Overview

FastGC is a web application that helps immigrants understand the U.S. green card application process and learn every legal path to accelerate it. The primary audience is immigrants who may not be fluent in English and who have little or no knowledge of U.S. immigration law. All content must be written in plain, simple language — no legal jargon.

**Source of truth for eligibility categories:** [USCIS Green Card Eligibility Categories](https://www.uscis.gov/green-card/green-card-eligibility-categories)

---

## Target Audience

- People currently living in the U.S. on a visa who want a green card
- People outside the U.S. who want to immigrate permanently
- English as a second language (ESL) speakers
- People with no prior knowledge of U.S. immigration law

**Writing standard:** Use simple sentences, common words, and short paragraphs. Imagine explaining to a friend who just arrived in the U.S. Never use terms like "adjudication," "prima facie," "bona fide," or other legalese without immediately explaining them in plain words.

---

## Main Page — `/`

### Layout

- Full-width, single-column layout
- Fixed header with site name and language selector
- Introductory paragraph
- Expandable sections for each eligibility category group
- Footer with disclaimer and source attribution

### Header

- **Left:** Site logo/name "FastGC"
- **Right:** Language dropdown — options: English, Español, Русский
  - Switching language immediately re-renders all content in the selected language
  - Selected language is persisted in `localStorage`
  - Default: browser language if supported, otherwise English

### Intro Section

Brief paragraph (2–3 sentences) explaining:
- What a green card is (permanent U.S. residency)
- That you must qualify under at least one category to apply
- That this page shows all the ways you can qualify

### Eligibility Categories

Eight top-level groups, each rendered as an expandable accordion section. Sections are collapsed by default. An "Expand all / Collapse all" toggle sits above the list.

Each accordion section header shows the group name. When expanded, it shows a table or list of subcategories with:
- **Subcategory name** (linked to a future detail page)
- **Who qualifies** — a plain-language explanation (see content below)

---

## Content: All Eligibility Categories

Content must be accurate to USCIS data but rewritten in plain language. The descriptions below are the *plain-language target* for each entry.

---

### 1. Green Card through Family

You may qualify through a family member who is a U.S. citizen or a green card holder.

| Who you can apply as | Who you need to be |
|---|---|
| **Immediate relative of a U.S. citizen** | The husband or wife of a U.S. citizen; OR a child (unmarried, under 21) of a U.S. citizen; OR a parent of a U.S. citizen who is at least 21 years old |
| **Other family member (preference categories)** | An unmarried adult son or daughter of a U.S. citizen; OR a married son or daughter of a U.S. citizen; OR a brother or sister of a U.S. citizen (citizen must be at least 21); OR the husband or wife of a green card holder; OR an unmarried child (under 21) of a green card holder; OR an unmarried adult son or daughter of a green card holder |
| **Fiancé(e) of a U.S. citizen or their child** | Someone who entered the U.S. on a K-1 visa to marry a U.S. citizen; OR a child who entered on a K-2 visa as the child of a K-1 fiancé(e) |
| **Widow or widower of a U.S. citizen** | Someone whose U.S. citizen spouse died, and who was legally married to that person when they died |
| **VAWA self-petitioner (abuse victim)** | An abused husband or wife of a U.S. citizen or green card holder; OR an abused unmarried child (under 21) of a U.S. citizen or green card holder; OR an abused parent of a U.S. citizen |

---

### 2. Green Card through Employment

You may qualify because of your job skills, education, or investment in the U.S. economy.

| Who you can apply as | Who you need to be |
|---|---|
| **Immigrant worker — Priority (EB-1)** | Someone with extraordinary ability in science, arts, education, business, or sports; OR an outstanding professor or researcher; OR a top-level manager or executive at a multinational company |
| **Immigrant worker — Advanced degree or exceptional ability (EB-2)** | Someone whose job requires an advanced degree (master's or higher); OR someone with exceptional ability in science, arts, or business; OR a person seeking a national interest waiver (your work greatly benefits the U.S.) |
| **Immigrant worker — Skilled, professional, or unskilled (EB-3)** | A skilled worker (job requires at least 2 years of training or experience); OR a professional (job requires at least a 4-year U.S. bachelor's degree); OR an unskilled worker (job requires less than 2 years of training) |
| **Physician National Interest Waiver** | A doctor who agrees to work full-time in a medically underserved area in the U.S. for a set period of time |
| **Immigrant investor (EB-5)** | Someone who has invested (or is in the process of investing) at least $1,050,000 in a new U.S. business that creates full-time jobs for at least 10 workers (investment can be $800,000 if the business is in a low-employment or rural area) |

---

### 3. Green Card as a Special Immigrant

Certain groups of people have their own special path to a green card.

| Who you can apply as | Who you need to be |
|---|---|
| **Religious worker** | A minister or other religious worker who is coming to the U.S. to work for a nonprofit religious organization |
| **Special Immigrant Juvenile** | A young person (under 21) who was abused, abandoned, or neglected by a parent, and who has a court order protecting them |
| **Afghan or Iraqi national** | An Afghan or Iraqi person who worked as a translator or interpreter for the U.S. government; OR an Iraqi person who worked for the U.S. government in Iraq for at least 1 year after March 20, 2003; OR an Afghan person who worked for the U.S. government or NATO forces (ISAF) |
| **International broadcaster** | Someone coming to the U.S. to work in media for the U.S. Agency for Global Media (USAGM) or a USAGM partner organization |
| **International organization employee or NATO employee (or their family)** | A retired officer or employee of a qualifying international organization or NATO; OR an eligible family member of such a person |

---

### 4. Green Card through Refugee or Asylee Status

If you came to the U.S. as a refugee or were granted asylum, you can apply for a green card after one year.

| Who you can apply as | Who you need to be |
|---|---|
| **Asylee** | Someone who was granted asylum in the U.S. at least 1 year ago |
| **Refugee** | Someone who entered the U.S. as a refugee at least 1 year ago |

---

### 5. Green Card for Human Trafficking and Crime Victims

If you are a victim of trafficking or certain crimes and you helped law enforcement, you may be able to get a green card.

| Who you can apply as | Who you need to be |
|---|---|
| **Human trafficking victim** | Someone who currently has a T visa (given to victims of human trafficking) |
| **Crime victim** | Someone who currently has a U visa (given to victims of certain crimes who helped police or prosecutors) |

---

### 6. Green Card for Victims of Abuse

If you have been abused or hurt by someone in your family and you are living in the U.S., there may be a way for you to get a green card without your abuser's help.

| Who you can apply as | Who you need to be |
|---|---|
| **VAWA self-petitioner (abuse victim)** | An abused husband or wife of a U.S. citizen or green card holder; OR an abused unmarried child (under 21) of a U.S. citizen or green card holder; OR an abused parent of a U.S. citizen |
| **Special Immigrant Juvenile** | A child who was abused, abandoned, or neglected by a parent, and who has been placed under the protection of a court |
| **Abused spouse or child under the Cuban Adjustment Act** | The abused husband, wife, or child of a Cuban person |
| **Abused spouse or child under HRIFA** | The abused husband, wife, or child of a green card holder who got their card through the Haitian Refugee Immigration Fairness Act (HRIFA) |

---

### 7. Green Card through Other Categories

A number of special laws and programs give specific groups of people a path to a green card.

| Who you can apply as | Who you need to be |
|---|---|
| **Liberian Refugee Immigration Fairness (LRIF)** | A person from Liberia who has lived continuously in the U.S. since at least November 20, 2014; OR the husband, wife, or child of such a person |
| **Diversity Immigrant Visa (DV Lottery)** | Someone who was selected in the U.S. government's annual green card lottery (open to people from countries that send few immigrants to the U.S.) |
| **Cuban Adjustment Act** | A person who was born in Cuba or is a Cuban citizen; OR the husband, wife, or child of such a person |
| **Abused spouse or child under the Cuban Adjustment Act** | The abused husband, wife, or child of a Cuban person |
| **Dependent under HRIFA** | The husband, wife, or child of a green card holder who got their card through HRIFA |
| **Abused spouse or child under HRIFA** | The abused husband, wife, or child of a green card holder who got their card through HRIFA |
| **Lautenberg parolee** | Someone who was let into the U.S. as a Lautenberg parolee (a special program for certain religious minorities from the former Soviet Union and Southeast Asia) |
| **Indochinese Parole Adjustment Act of 2000** | A person from Vietnam, Cambodia, or Laos who was let into the U.S. before October 1, 1997, through a refugee or resettlement program |
| **American Indian born in Canada** | A person born in Canada who has at least 50% American Indian ancestry and whose main home is in the U.S. |
| **Person born in the U.S. to a foreign diplomat** | Someone born in the U.S. whose parent was a foreign diplomat assigned to the U.S. at the time of birth |
| **Section 13 (diplomat unable to return home)** | A foreign diplomat or high-ranking official who was stationed in the U.S. and cannot safely return to their home country |

---

### 8. Green Card through Registry

If you have lived in the U.S. continuously since before January 1, 1972, you may be able to apply for a green card through the Registry program, even if you entered without permission or overstayed a visa.

---

## Detail Pages — `/category/[slug]`

Each subcategory links to a detail page. These are v2 scope, but the spec should include the planned structure:

- **Plain-language title**
- **Who qualifies** (expanded, with examples)
- **How to apply** — step-by-step, numbered list
- **How long it takes** — typical processing times
- **Ways to speed it up** — this is the core FastGC value proposition; for each category, document every legal method to reduce wait time (e.g., premium processing, national interest waiver, concurrent filing, priority dates, etc.)
- **Forms you will need** — list form numbers with plain-language names
- **Can your family come with you?** — yes/no and who qualifies as a derivative
- **Common mistakes to avoid**
- **Official USCIS link** for further reading

---

## Localization

- Supported languages: English (`en`), Spanish (`es`), Russian (`ru`)
- Language selector: dropdown in the top-right corner of the header
- All page content — headers, body text, table content, button labels — must be translated
- USCIS links should point to Spanish equivalents when available (USCIS provides Spanish pages at `/es/...`)
- Use `next-intl` or equivalent i18n library
- Translation files live at `messages/en.json`, `messages/es.json`, `messages/ru.json`
- Selected language is saved in `localStorage` under the key `fastgc_lang`
- On first visit, default to the browser's preferred language if it's in the supported list; otherwise default to English

---

## Technical Requirements

- **Framework:** Next.js (App Router) with React 19 and TypeScript
- **Styling:** Tailwind CSS v4
- **Rendering:** Server-rendered by default; accordion open/close state is client-side only
- **Accessibility:** All accordion sections must be keyboard navigable and use proper `aria-expanded` attributes; language selector must be accessible
- **No external data fetching on the main page** — all eligibility content is static and bundled at build time
- **SEO:** Each page has a proper `<title>` and `<meta description>` in all three languages using Next.js metadata API

---

## Out of Scope (v1)

- User accounts or saved progress
- Form filing assistance
- Attorney matching or referrals
- Priority date tracker
- Push notifications
- Mobile app
