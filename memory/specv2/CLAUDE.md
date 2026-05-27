# FastGC — App Spec v2

This document defines the full product specification for the FastGC application. Implement everything described here against the data in `research/application_types.yaml`.

---

## Data Source

All content comes from `research/application_types.yaml`. The relevant top-level keys are:

- `static_elements` — header and body copy
- `application_types` — the list of green card pathways, each with structured fields

---

## Session Management

### Landing Screen

Before showing the main application, display a full-screen landing prompt with two options:

- **Start New Session** — clears any existing saved state and begins fresh
- **Resume Session** — restores the user's previously saved selections (if any exist)

Session state must be persisted in `localStorage` under a single key (e.g. `fastgc_session`). The stored object should include:

```ts
{
  selectedTypes: string[],         // application type names the user checked
  currentStep: "selection" | "details",
  language: "en" | "es" | "ru"
}
```

If no saved session exists, "Resume Session" should be disabled (greyed out).

---

## Global Layout

### Header

A sticky top header row with two sections:

- **Left** — `static_elements.header_title` as the site logo/name and `static_elements.header_description` as a subtitle
- **Right** — a language selector dropdown with three options:
  - English (`en`)
  - Español (`es`)
  - Русский (`ru`)

Changing the language re-renders all visible text. The selected language is persisted in session state.

### Footer

A single footer line using `static_elements.footer_disclaimer`. Display it verbatim, including the source attribution line.

---

## Page 1 — Application Type Selection

### Route: `/`

### Body Header

Directly below the site header, render:

- A heading using `static_elements.body_title`
- A paragraph using `static_elements.body_description`
- An instruction line: *"Select any and all green card application types that apply to your situation."*

### Application Type List

Render one accordion section per item in `application_types`. Each section has:

**Collapsed state:**

- Checkbox (left-aligned) — when checked, this application type is added to `selectedTypes` in session state
- Application type name (`name` field) as the section title
- `simple_description` as a one-line subtitle
- Expand/collapse chevron (right-aligned)

**Expanded state:**

Clicking anywhere on the header row (except the checkbox) expands the section. When expanded, display:

1. `explanation` — a prose paragraph describing the pathway
2. A two-column table:

| Who you can apply as | Who you need to be |
|---|---|
| `applicants[n].who_you_can_apply_as` | `applicants[n].who_you_need_to_be` |

*(One row per entry in `applicants`. Some application types have no `applicants` field — omit the table for those.)*

3. **Target Timeline** — label + `target_timeline` value
4. **Can file concurrently?** — label + `can_file_concurrently` value
5. **Common waivers needed** — label + `common_waivers_needed` value

The checkbox and expansion state are independent. A user can expand a section without selecting it.

### Navigation

Place a **Next →** button both:
- Immediately above the first accordion section
- Immediately below the last accordion section

Both buttons do the same thing: navigate to Page 2. The button is disabled (visually greyed out, non-interactive) if zero application types are selected. The button is enabled as soon as at least one type is checked.

On click, transition to Page 2 and save `currentStep: "details"` to session state.

---

## Page 2 — Application Details

### Route: `/details`

Redirect to `/` if `selectedTypes` is empty.

### Layout

For each application type in `selectedTypes` (in the same order they appear in `application_types.yaml`), render a full-detail card. Between cards render a visible horizontal divider.

### Per-Type Detail Card

Display all of the following fields, in this order:

1. **Name** (`name`) — section heading (h2)
2. **Simple description** (`simple_description`) — lead paragraph
3. **Explanation** (`explanation`) — prose paragraph
4. **Who can apply** — two-column table (same structure as Page 1 expanded view); omit if no `applicants`
5. **Target Timeline** — `target_timeline`
6. **Steps** — numbered list from `steps[]`
7. **Action Items** — bulleted list from `action_items[]`
8. **Country-Specific Info** — `country_specific_info` (if present)
9. **Can File Concurrently?** — `can_file_concurrently`
10. **Common Waivers Needed** — `common_waivers_needed`
11. **Prevention Tips** — bulleted list from `prevention_suggestions[]`
12. **Communication Templates** — for each entry in `communication_templates[]`:
    - Recipient label
    - When to send
    - The template text rendered in a monospace/code block

### Navigation

- A **← Back** button at the top returns the user to Page 1 (preserving all selections)
- A **Download PDF** button at the top and bottom of the page triggers a client-side PDF export (see below)

---

## PDF Export

When the user clicks **Download PDF**:

- Generate a PDF containing only the selected application types
- Include all detail fields in the same order as Page 2
- Include the `static_elements.footer_disclaimer` at the end of the PDF
- Filename: `fastgc-application-guide.pdf`
- Use a client-side library (e.g. `jsPDF` + `html2canvas`, or `@react-pdf/renderer`) — no server required
- The PDF should be generated in the currently selected language

---

## Internationalization (i18n)

The language dropdown must translate all visible text: UI labels, navigation buttons, section headings, and all content fields drawn from `application_types.yaml`.

### Supported Languages

| Code | Label |
|---|---|
| `en` | English |
| `es` | Español |
| `ru` | Русский |

### Implementation

- Use a translation layer (e.g. `next-intl`, or a lightweight custom context) so that switching languages re-renders all text instantly without a page reload
- UI strings (e.g. "Next", "Back", "Download PDF", "Who you can apply as", "Who you need to be", "Steps", "Action Items", etc.) must have translations for all three languages
- YAML content strings (all `application_types` fields and `static_elements`) must also be translated
- Store translations in `/messages/en.json`, `/messages/es.json`, `/messages/ru.json`
- The selected language is persisted in `localStorage` session state

---

## Visual Design

- Use Tailwind CSS v4 (via `@theme inline {}` in CSS — no `tailwind.config.*`)
- The design should feel clean, trustworthy, and accessible — appropriate for a legal/immigration context
- Accordion sections should use a subtle border and soft shadow on expand
- The applicant table should use alternating row shading for readability
- Checkboxes should be styled with Tailwind (not browser-default) — visually prominent
- The **Next →** button when disabled should use a muted color with `cursor-not-allowed`
- Mobile-first responsive layout; table on Page 2 must scroll horizontally on small screens
- Color palette: neutral whites/grays with a single accent color (e.g. slate-blue or teal) for interactive elements

---

## File Structure

```
app/
  page.tsx                    # Page 1 — selection
  details/
    page.tsx                  # Page 2 — details + PDF
  layout.tsx                  # Root layout with header/footer
  globals.css                 # Tailwind v4 imports + @theme

components/
  SessionLanding.tsx          # New / Resume session modal
  LanguageSelector.tsx        # Dropdown in header
  ApplicationTypeAccordion.tsx
  ApplicantTable.tsx
  DetailCard.tsx
  PdfExportButton.tsx

lib/
  session.ts                  # localStorage read/write helpers
  applicationTypes.ts         # Typed data from YAML (import/parse at build time)
  pdf.ts                      # PDF generation logic

messages/
  en.json
  es.json
  ru.json
```

---

## Implementation Notes

- Parse `research/application_types.yaml` at build time (e.g. using `js-yaml` in a server component or `generateStaticParams`) — do not ship the raw YAML to the client
- All pages use the Next.js App Router. Params are always `await`ed per the project's breaking-change notes
- `fetch` is not cached by default in this Next.js version — use the `use cache` directive if any server-side data fetching is added later
- No authentication required; sessions are anonymous and local-only
