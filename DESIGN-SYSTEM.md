# Design system — Jesse Lee Despard

**Purpose:** Single reference for brand tokens, accessibility, typography, spacing, and UI patterns. Read this (and `src/styles/theme.css`) before changing styles or adding components.

**Sources:** `src/styles/theme.css`, `src/app/components/AccessibilityAuditReport.tsx`, `src/app/components/AccessibilityReport.tsx`, `src/app/components/Navigation.tsx`, `src/app/components/Button.tsx`, `src/app/components/CTAStrip.tsx`.

---

## 1. Color tokens

Brand colors live on `:root` in `src/styles/theme.css`. Use **CSS variables only** in application UI (see [§7 Rules](#7-rules)).

| Token | Hex (authoritative in `theme.css`) | Intended use |
|--------|-------------------------------------|--------------|
| `--charcoal` | `#1e1e1e` | Primary dark surfaces (hero, secondary buttons, CTA strip button, emphasis text on light). |
| `--cream` | `#faf7f2` | Warm page sections, nav bar background, alternating bands. |
| `--teal` | `#2c6e7f` | Mid teal: ghost buttons, decorative gradients, UI where **large/bold** text applies (see accessibility notes). |
| `--teal-dark` | `#1f5364` | **Default accent** for labels, tags, borders, focus rings, inline links on light backgrounds (better than `--teal` at small sizes). |
| `--terra` | `#c4622d` | Terracotta / CTA strip backgrounds. **Never** put white text on terra (fails contrast — use charcoal). |
| `--gold` | `#d4a843` | Primary CTA fill, gold text **on dark only**; eyebrow on hero. **Do not** use as default link or small body color on cream/white. |
| `--gray` | `#888888` | Muted UI (e.g. inactive tab badge background with charcoal label — audited). |
| `--light-gray` | `#eeeeee` | Borders, dividers, disabled surfaces. |
| `--dark-gray` | `#444444` | Body copy, metadata, **navigation link** text on cream. |
| `--white` | `#ffffff` | Cards on cream, text on charcoal, outline button borders on dark. |

**Brand link tokens** (see [§3 Link states](#3-link-states)): `--brand-link`, `--brand-link-hover`, `--brand-link-active`, `--brand-link-visited`, `--brand-link-on-dark`, `--brand-link-on-dark-hover`, `--brand-link-on-dark-active`, `--brand-link-focus-ring`, `--brand-link-focus-ring-on-dark`.

**Figma / shadcn layer:** `theme.css` also defines `--background`, `--foreground`, `--primary`, `--muted`, `--destructive`, etc. Prefer **brand tokens** for marketing pages; use shadcn tokens where components already depend on them.

---

## 2. WCAG accessibility

**Targets (WCAG 2.x):**

- **Body copy (normal text):** ≥ **4.5:1** (AA), ≥ **7:1** (AAA).
- **Large text** (≥24px regular or ≥18.66px bold; audit also treats **≥14px bold** as large for some components): ≥ **3:1** (AA), ≥ **4.5:1** (AAA).
- **Non-text UI** (focus ring, borders under 3px): ≥ **3:1** against adjacent colors (AA).

Ratios below come from **`AccessibilityAuditReport.tsx`** (post-fix) and **`AccessibilityReport.tsx`** where noted. “AA” / “AAA” reflect the audit’s stated level for that element.

### Core text & surfaces

| Foreground | Background | Ratio | Normal text | Large / bold |
|------------|------------|-------|-------------|--------------|
| `--charcoal` | `--white` | ~15.3:1 | AAA | AAA |
| `--charcoal` | `--cream` | ~14.8:1 (wordmark) | AAA | AAA |
| `--dark-gray` | `--white` | ~9.7:1 | AAA | AAA |
| `--dark-gray` | `--cream` | ~9.7:1 | AAA | AAA |
| `--teal-dark` | `--white` | ~6.8:1 | AA | AA+ |
| `--teal-dark` | `--cream` | ~6.8:1 | AA | AA+ |
| `--white` | `--charcoal` | ~15.3:1 | AAA | AAA |
| `--gold` | `--charcoal` | ~7.9:1 | AAA | AAA |
| `rgba(255,255,255,0.6)` | `--charcoal` | ~9.2:1 (audit: inactive tab) | AAA | AAA |
| `rgba(255,255,255,0.7)` | `--charcoal` | ~10.7:1 | AAA | AAA |
| `rgba(255,255,255,0.82)` | `--charcoal` | ~13.8:1 | AAA | AAA |

### Gold on cream (advisory)

| Foreground | Background | Ratio | Notes |
|------------|------------|-------|--------|
| `--gold` | `--cream` | ~3.9:1 | Fails **4.5:1** for normal text. Use only for **large/bold** accents (e.g. 24px+ bold episode numbers) or prefer gold on **charcoal**. |

### Buttons (audited)

| Variant | FG | BG | Ratio | Level (audit) |
|---------|----|----|-------|----------------|
| Primary | `--charcoal` | `--gold` | 7.9:1 | AAA (`AccessibilityAuditReport`) |
| Primary (alt doc) | `--charcoal` | `--gold` | 6.4:1 | AA large (`AccessibilityReport`) |
| Secondary | `--white` | `--charcoal` | 15.3:1 | AAA |
| Disabled text | `--charcoal` | `--light-gray` | 13.3:1 | AAA |

### Terracotta CTA strip

| Element | FG | BG | Ratio | Level |
|---------|----|----|-------|--------|
| Title | `--charcoal` | `--terra` | 6.3:1 | AA |
| Description | `rgba(30,30,30,0.85)` | `--terra` | 5.4:1 | AA |
| Strip button | `--white` | `--charcoal` | 15.3:1 | AAA |

**Critical rule:** **Do not** use **white** on **`--terra`** for headings (only ~3.4:1 — see `AccessibilityReport` CTA Strip).

### Teal vs teal-dark

- **`--teal`** on white ~**4.7:1** — acceptable for **14px bold** (large text) per `AccessibilityReport` (Ghost Button).
- **`--teal-dark`** on white/cream ~**6.8:1** — use for **11–12px labels**, tags, links, and anywhere normal-weight small text appears (`AccessibilityAuditReport`).

### Navigation (cream)

| Element | FG | BG | Ratio | Level |
|---------|----|----|-------|--------|
| Wordmark | `--charcoal` | `--cream` | 14.8:1 | AAA |
| Links | `--dark-gray` | `--cream` | 8.9:1 / 9.7:1 | AAA |
| Active underline | `--teal-dark` | `--cream` | 6.8:1 | AA |

---

## 3. Link states

**Canonical inline / card links on light surfaces (white or cream):**

- Implemented as **`.brand-link`** in `theme.css` (not for main nav copy color — nav stays `--dark-gray`).

| State | Token / color | On `--white` / `--cream` | Contrast note |
|-------|----------------|---------------------------|---------------|
| Default | `var(--brand-link)` → `--teal-dark` | ~6.8:1 vs white | AA normal text |
| Hover / active | `var(--brand-link-hover)` → `--charcoal` | ~15.3:1 vs white | AAA |
| Visited | `var(--brand-link-visited)` → `--teal-dark` | Same as default | AA |
| Focus visible | `outline: 3px solid var(--brand-link-focus-ring)` | Ring vs surface ~6.8:1 vs white | Matches audit “Focus Indicators” |

**Links on dark (`--charcoal`):** use **`.brand-link.brand-link--on-dark`**.

| State | Token |
|-------|--------|
| Default | `--brand-link-on-dark` (`--white`) |
| Hover / active | `--brand-link-on-dark-hover` / `-active` (`--gold`) — gold on charcoal ~7.9:1 |
| Focus | `3px solid var(--brand-link-focus-ring-on-dark)` (`--white`) |

**Card CTA link style:** add **`.brand-link--cta`** for **14px / bold / DM Sans** (WorkCard / WritingPostCard pattern in audit).

**Navigation:** Primary nav items use **teal-dark** only for **active underline** and **focus outline**; link color remains **`--dark-gray`** (not `.brand-link`).

---

## 4. Typography

**Font loading:** `src/styles/fonts.css` — Google Fonts: **DM Sans** (400, 500, 700), **Lora** (400, 400 italic).

| Role | Family | Weight | Typical sizes | Where used |
|------|--------|--------|----------------|------------|
| Display / UI | DM Sans | 700 | 12px labels; 14–18px UI; 24–48px heroes | Nav, buttons, section labels, card titles, headings |
| Display / UI | DM Sans | 500 | 14–16px | Default nav links |
| Body | Lora | 400 (italic for subheads) | 16–18px | Paragraphs, descriptions, podcast copy |
| Base HTML | (theme) | medium / normal | `var(--text-*)` via Tailwind | Fallback `theme.css` `@layer base` |

**Audit-driven sizes** (prefer even values): **12, 14, 16, 18, 24, 32, 48px** where components were fixed.

**Component examples:**

- **Button** (`Button.tsx`): DM Sans **700**; **14px** (medium) or **15px** (large); line height inherited.
- **Navigation:** Wordmark **15px / 700**; desktop links **14px / 500**; mobile menu **16px / 500**; Hiring CTA **14–16px / 700** on gold.
- **CTA strip:** Title **21px / 700**; description **16px** Lora; button **15px / 700**.

---

## 5. Spacing

**Grid:** Use an **8-point** baseline: multiples of **8px** for padding, margin, and gap unless a legacy value is explicitly documented.

**Practical scale:** `8, 16, 24, 32, 40, 48, 64, 80, 96` (and **100** for hero padding where already used).

| Pattern | Value | Source |
|---------|--------|--------|
| Section padding (desktop) | `80px` vertical, `48px` horizontal | Many page sections (`*-section-padding`) |
| Section padding (mobile) | `48px` vertical, `24px` horizontal | Breakpoint ~768px |
| Nav bar | `20px` × `48px` padding desktop; `16px` × `24px` mobile | `Navigation.tsx` (consider normalizing toward 8pt long-term) |
| Nav link gap | `32px` | `Navigation.tsx` |
| Max content width | `1200px`–`1400px` depending on layout | Nav 1400px; strips/cards often 1200px |
| Button padding | `14px 32px` (large), `12px 28px` (medium) | `Button.tsx` |
| CTA strip | `48px` section padding; `32px` flex gap | `CTAStrip.tsx` |
| Focus outline offset | `2px`–`4px` | Nav / brand-link |

**Rule:** Prefer **8n** for new work; when touching legacy **20px** nav padding, align to **16px** or **24px** if layout allows.

---

## 6. Component patterns

### Section labels (“eyebrows”)

- **Family:** DM Sans **700**
- **Size:** **12px**
- **Letter-spacing:** ~**1.5px–2px**
- **Transform:** `uppercase` for global section labels
- **Color:** **`--teal-dark`** on **cream** or **white** (AA/AAA for small caps)
- **Avoid:** `--gold` on `--cream` for small uppercase labels (~3.9:1) — use gold on **charcoal** or reserved for large display

### Gold hero eyebrow (e.g. case studies)

- Gold text on **charcoal** (~7.9:1) is approved.
- Optional gold **border** at low opacity on dark heroes (see case study CSS).

### Hero structure

- **Background:** `--charcoal`
- **Title:** `--white`, large DM Sans bold
- **Subtitle:** muted white (`color-mix` / ~60–65% opacity) — AA for large italic
- **Meta labels:** `--gold`; **meta values:** high-opacity white
- **Bottom accent:** gradient using `--teal` + `--gold` (case study pattern)

### Cards (work / writing / case study)

- **Surface:** `--white` on `--cream` sections common
- **Border:** `1px solid var(--light-gray)`; left accent **`--teal`** or **`--teal-dark`** (3–4px) per template
- **Tag / badge:** **`--teal-dark`**
- **Title:** **`--charcoal`**
- **Description:** **`--dark-gray`**, **≥16px**
- **Link row:** **`--teal-dark`**, **14px bold** — or use `.brand-link.brand-link--cta`

### Navigation

- **Bar:** `--cream`, bottom border `--light-gray`
- **Wordmark:** `--charcoal`
- **Links:** `--dark-gray`; **hover** charcoal
- **Active:** `2px` bottom border **`--teal-dark`**
- **Focus:** `2px solid #1F5364` (should be `var(--teal-dark)` when refactored)
- **Hiring CTA:** gold pill, charcoal text (primary button pattern)

### Buttons (`Button.tsx`)

- **Primary:** charcoal on gold (`variant="primary"`)
- **Secondary:** white on charcoal
- **Outline:** white text + `2px` white border (for use **on dark** only)

### CTA strip (`CTAStrip.tsx`)

- **Background:** `--terra`
- **Text:** charcoal (title + description with ~0.85 opacity)
- **Button:** white on charcoal

---

## 7. Rules

### Never hardcode (use variables)

- **No hardcoded values without explicit permission.** All colors, font sizes, font families, and spacing must reference CSS variables from `theme.css`. If a value doesn't have a variable yet, create the variable first, then reference it. No exceptions unless explicitly approved.
- All **brand** fills, strokes, and text colors: **`var(--charcoal)`**, **`var(--cream)`**, **`var(--teal)`**, **`var(--teal-dark)`**, **`var(--terra)`**, **`var(--gold)`**, **`var(--gray)`**, **`var(--light-gray)`**, **`var(--dark-gray)`**, **`var(--white)`**.
- **Links** on marketing pages: prefer **`.brand-link`** classes or **`--brand-link*`** tokens.

**Tech debt:** Some files (e.g. `Navigation.tsx`, `Button.tsx`, `CTAStrip.tsx`) still use raw hex — align with tokens when editing.

### No direct file edits without approval

- **All changes to project files must go through the developer (Jesse) via Cursor.** Do not edit files in the project folder directly, especially since this project is stored in GitHub. Jesse controls what gets committed.

### Safe foreground ↔ background matrix (summary)

| | `--white` | `--cream` | `--charcoal` | `--terra` |
|--|-----------|-----------|--------------|------------|
| `--charcoal` | ✅ | ✅ | — | ✅ (title/desc) |
| `--dark-gray` | ✅ | ✅ | — | — |
| `--teal-dark` | ✅ | ✅ | ⚠️ underline only | — |
| `--teal` | ✅ (large/bold) | ✅ (large/bold) | — | — |
| `--white` | — | — | ✅ | ❌ (CTA copy) |
| `--gold` | ❌ default link | ⚠️ large only | ✅ | ❌ |

### QA checklist

1. Small text on cream/white uses **`--teal-dark`**, not **`--teal`**, not **`--gold`** (except documented large text).
2. No **white** on **`--terra`** for primary copy.
3. Focus states visible: **teal-dark** ring on light; **white** on dark.
4. Run or consult **`AccessibilityAuditReport`** when introducing new pairings.

---

## 8. Related files

| File | Role |
|------|------|
| `src/styles/theme.css` | Tokens, `.brand-link*` utilities |
| `src/styles/index.css` | Imports theme + Tailwind |
| `src/styles/fonts.css` | Font imports |
| `src/app/components/AccessibilityAuditReport.tsx` | Post-fix contrast matrix (source of truth for ratios) |
| `src/app/components/AccessibilityReport.tsx` | Earlier WCAG narrative + ghost button / terra warnings |

---

*Last aligned with codebase conventions: April 2026. Update this document when tokens or audit data change.*
