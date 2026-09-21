---
version: alpha
name: Novanjunaedi
description: |
  This design system embodies a pragmatic, forward-thinking aesthetic suited to
  a high-performing frontend architect's professional portfolio. The visual
  language is deliberately minimal and clean, prioritizing clarity and content
  over ornament. A neutral, warm beige canvas (#F8F7F4) provides visual
  breathing room, while deep ink (#08101F) anchors headings and primary
  navigation with authority. Black serves as the dominant brand accent,
  reinforcing a no-nonsense, technical sensibility. Accents in teal, coral, and
  slate appear as decorative flourishes—suggesting both playfulness (in
  illustration and tech-stack badges) and accessibility. The overall impression
  is confident, approachable, and genuinely craft-focused: a system that trusts
  its content over visual decoration.
source:
  url: "https://www.novanjunaedi.com/"
  pagesAnalyzed: 1
  extractedAt: 2026-09-08
  tokensMeasured: true
colors:
  primary: "#000000"
  canvas: "#F8F7F4"
  on-primary: "#FFFFFF"
  ink: "#08101F"
  body: "#6C757D"
  accent-1: "#212529"
  accent-2: "#4FC0D0"
  accent-3: "#EB6C31"
  neutral-1: "#E9E9E9"
typography:
  display:
    fontFamily: Poppins
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0px
  heading-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  heading-md:
    fontFamily: Poppins
    fontSize: 28.8px
    fontWeight: 200
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  heading-xs:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  heading-xs-system-ui:
    fontFamily: system-ui
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0px
  body-xl:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 3.8px
  body-xl-tight:
    fontFamily: system-ui
    fontSize: 20px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg-system-ui:
    fontFamily: system-ui
    fontSize: 16px
    fontWeight: 400
    lineHeight: 2
    letterSpacing: 0px
  body-lg-2:
    fontFamily: system-ui
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  caption-sm:
    fontFamily: system-ui
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  caption-xs:
    fontFamily: system-ui
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0px
  code-xl:
    fontFamily: SFMono-Regular
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 4px
    textTransform: uppercase
  code-lg:
    fontFamily: Inconsolata
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 15px
  lg: 16px
  xl: 32px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section: 60px
  band: 100px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(0, 0, 0, 0.15) 0px 8px 16px 0px"
  md: "rgba(255, 255, 255, 0.5) 0px 0px 1px 0px"
elevationStrategy: progressive
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#F8F7F4"
    surface: "#F1F0ED"
    surfaceRaised: "#E8E7E5"
    text: "#08101F"
    textMuted: "#6C757D"
    border: "#DBDBDA"
    accent: "#000000"
    accentFg: "#FFFFFF"
    focusRing: "#000000"
    elevation: shadow
  dark:
    bg: "#0F0F10"
    surface: "#1D1D1E"
    surfaceRaised: "#29292A"
    text: "#F5F5F5"
    textMuted: "#9E9E9E"
    border: "#353536"
    accent: "#858585"
    accentFg: "#0B0B0C"
    focusRing: "#666666"
    elevation: "border+surface"
  contrastFailures:
    - "light: muted on bg = 4.38:1 (needs 4.5:1)"
components:
  button-filled:
    typography: "{typography.body-lg-2}"
    textColor: "{colors.ink}"
    height: 40px
    padding: "8px 16px 8px 16px"
    backgroundColor: "{colors.neutral-1}"
  button-icon:
    typography: "{typography.body-lg-2}"
    textColor: "{colors.on-primary}"
    height: 18px
    padding: "9px 9px 9px 9px"
    boxShadow: "rgba(255, 255, 255, 0.5) 0px 0px 1px 0px"
    rounded: "50%"
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  button-outline:
    typography: "{typography.body-lg}"
    textColor: "rgb(1, 1, 9)"
    border: "1px solid rgb(1, 1, 9)"
    height: 58px
    padding: "16px 48px 16px 48px"
    rounded: 800px
  button-outline-sm:
    typography: "{typography.body-lg-2}"
    textColor: "rgb(1, 1, 9)"
    border: "1px solid rgb(1, 1, 9)"
    height: 38px
    padding: "6px 16px 6px 16px"
    rounded: "{rounded.sm}"
  button-text:
    typography: "{typography.body-lg-2}"
    textColor: "{colors.ink}"
    height: 40px
    padding: "8px 16px 8px 16px"
  button-icon-lg:
    typography: "{typography.caption-sm}"
    textColor: "{colors.accent-1}"
    height: 21px
    rounded: "{rounded.xs}"
  card:
    typography: "{typography.body-lg-2}"
    textColor: "{colors.accent-1}"
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 16px 0px"
    rounded: "{rounded.md}"
    backgroundColor: "{colors.canvas}"
  card-lg:
    typography: "{typography.body-lg-2}"
    textColor: "{colors.ink}"
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 16px 0px"
    rounded: "{rounded.lg}"
    backgroundColor: "{colors.canvas}"
  badge-filled:
    typography: "{typography.caption-xs}"
    textColor: "rgb(1, 1, 9)"
    height: 20.375px
    padding: "4.2px 7.8px 4.2px 7.8px"
    rounded: "{rounded.sm}"
    backgroundColor: "{colors.accent-3}"
  navigation:
    typography: "{typography.body-lg-2}"
    textColor: "{colors.accent-1}"
    height: 67.6406px
    padding: "8px 0px 8px 0px"
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 8px 16px 0px"
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  footer:
    typography: "{typography.caption-sm}"
    textColor: "rgb(1, 1, 9)"
  link:
    typography: "{typography.body-lg-2}"
    textColor: "{colors.on-primary}"
  link-2:
    typography: "{typography.body-lg-2}"
    textColor: "rgba(0, 0, 0, 0.65)"
    padding: "8px 8px 8px 8px"
states:
  other-hover:
    target: other
    state: hover
    backgroundColor: "{colors.accent-3}"
  link-hover:
    target: link
    state: hover
    textColor: "{colors.accent-3}"
    textDecoration: dashed
  nav-hover:
    target: nav
    state: hover
    backgroundColor: "{colors.ink}"
  input-disabled:
    target: input
    state: disabled
    opacity: 1
  other-focus:
    target: other
    state: focus
    boxShadow: "rgba(13, 110, 253, 0.25) 0px 0px 0px 0.25rem"
    borderColor: "rgb(134, 183, 254)"
  other-disabled:
    target: other
    state: disabled
    opacity: 1
  input-focus:
    target: input
    state: focus
    boxShadow: "rgba(13, 110, 253, 0.25) 0px 0px 0px 0.25rem"
    borderColor: "rgb(134, 183, 254)"
  input-active:
    target: input
    state: active
    filter: "brightness(90%)"
  button-disabled:
    target: button
    state: disabled
    filter: none
    opacity: 0.65
  other-active:
    target: other
    state: active
    backgroundColor: "rgb(182, 212, 254)"
  nav-focus-visible:
    target: nav
    state: focus-visible
    boxShadow: "rgba(13, 110, 253, 0.25) 0px 0px 0px 0.25rem"
  button-hover:
    target: button
    state: hover
    textDecoration: none
breakpoints:
  - width: 375
    containerWidth: 327
    gridColumns: 1
    navLinksVisible: 1
    menuToggleVisible: true
    headingPx: 29
    bodyPx: 16
    sectionPaddingX: 0
  - width: 768
    containerWidth: 720
    gridColumns: 1
    navLinksVisible: 1
    menuToggleVisible: true
    headingPx: 29
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 960
    gridColumns: 5
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 30
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1140
    gridColumns: 1
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 32
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1320
    gridColumns: 1
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 32
    bodyPx: 16
    sectionPaddingX: 0
coverage:
  statesFound: 61
  gradientsFound: 0
  rolesUnassigned: 4
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Novan Junaedi

## 1. Visual Theme & Atmosphere

This design system embodies a pragmatic, forward-thinking aesthetic suited to a high-performing frontend architect's professional portfolio. The visual language is deliberately minimal and clean, prioritizing clarity and content over ornament. A neutral, warm beige canvas (`{colors.canvas}` — `#F8F7F4`) provides visual breathing room, while deep ink (`{colors.ink}` — `#08101F`) anchors headings and primary navigation with authority. Black serves as the dominant brand accent, reinforcing a no-nonsense, technical sensibility. Accents in teal, coral, and slate appear as decorative flourishes—suggesting both playfulness (in illustration and tech-stack badges) and accessibility. The overall impression is confident, approachable, and genuinely craft-focused: a system that trusts its content over visual decoration.

**Key Characteristics**

- Warm, neutral color foundation (`{colors.canvas}`) with maximum legibility
- Deep ink (`{colors.ink}`) for headings and critical UI; secondary body text in mid-grey (`{colors.body}`)
- Black brand accent (`{colors.primary}`) for CTAs, active states, and brand mark
- Pill-shaped buttons and badges (`{rounded.full}` — 9999px) signaling modern, accessible interaction
- Sharp cards and containers (no rounding) paired with rounded interactive elements for visual contrast
- Generous whitespace and structured spacing rhythm (base unit `{spacing.md}` — 16px)
- Progressive shadow strategy: single-tier shadow on cards and nav, flat most other elements
- Typography anchored in Poppins (primary) and system-ui fallback (secondary), with monospace Inconsolata for code

## 2. Color Palette & Roles

### Primary
- **Brand / Primary CTA** (`{colors.primary}` — `#000000`): Black accent used for active navigation states, primary call-to-action buttons, the brand mark (logo), and emphasizing the designer's name in the hero. This color commands authority and focus.
- **On Primary** (`{colors.on-primary}` — `#FFFFFF`): White text and icons displayed on dark brand surfaces, ensuring legible contrast.

### Accent Colors (Decorative)
- **Teal Accent** (`{colors.accent-2}` — `#4FC0D0`): Decorative colour appearing in tech-stack badge icons and illustrative elements; no semantic interactive role.
- **Coral Accent** (`{colors.accent-3}` — `#EB6C31`): Decorative colour used in hover states and badge fills; signals warmth and approachability in illustrative contexts.
- **Slate Accent** (`{colors.accent-1}` — `#212529`): Decorative near-black, used sparingly in icon accents and secondary visual hierarchy; no primary role.

### Neutral Scale
- **Canvas** (`{colors.canvas}` — `#F8F7F4`): Default page background, providing a warm off-white foundation for all content.
- **Ink** (`{colors.ink}` — `#08101F`): Primary heading and navigation text; the darkest, highest-contrast neutral.
- **Body** (`{colors.body}` — `#6C757D`): Secondary body text and lower-hierarchy content; mid-grey for comfortable readability at length.
- **Neutral Border** (`{colors.neutral-1}` — `#E9E9E9`): Hairline borders, dividers, and subtle surface separation.

### Surface & Borders
- **Primary Border** (`{colors.primary}` — `#000000`): Used for outline buttons and navigation emphasis; sharp 1px strokes.
- **Hairline** (`{colors.neutral-1}` — `#E9E9E9`): Dividers between sections and form field borders.

## 3. Typography Rules

### Font Family

**Primary:** Poppins (https://fonts.googleapis.com/css2?family=Inconsolata&family=Poppins:wght@300;400;500;600;700&display=swap)
- Fallback stack: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

**Secondary:** system-ui
- Fallback stack: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif

**Code:** Inconsolata
- Fallback stack: Inconsolata, SFMono-Regular, Consolas, "Courier New", monospace

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display / Hero | Poppins | 32px | 700 | 1.2 (38px) | 0px | Primary page heading; measured at 1280px+ breakpoint |
| Heading Large | Poppins | 30px | 700 | 1.2 (36px) | 0px | Section titles; scales down to 29px at mobile |
| Heading Medium | Poppins | 24px | 600 | 1.5 (36px) | 0px | Subsection and card titles |
| Body Large | system-ui | 16px | 400 | 1.5 (24px) | 0px | Primary body copy and navigation links |
| Body Medium | system-ui | 16px | 400 | 1.5 (24px) | 0px | Button labels and form text |
| Body Small | system-ui | 14px | 400 | 1.5 (21px) | 0px | Footer and secondary labels |
| Badge / Label | system-ui | 12px | 700 | 1 (12px) | 0px | Badge text and small highlights |
| Code | Inconsolata | 12px | 400 | 1 (12px) | 0px | Inline and block code display |

### Principles

- **Poppins for emphasis**: Used for all headings and display sizes to signal hierarchy and importance; supports weights 300–700.
- **system-ui for prose**: Default body and navigation text, ensuring native platform rendering and accessibility; 400 weight for normal reading.
- **Consistent line-height rhythm**: 1.5 (24px) on body text, 1.2 (36–38px) on display, matching the 8px baseline grid.
- **No tracking adjustments**: All letter-spacing measured as 0px; hierarchy comes from size and weight, not tight spacing.
- **Size scaling**: Headings scale down on mobile (29px) and scale up on desktop (30–32px), maintaining rhythm without media-specific font stacks.

## 4. Component Stylings

### Buttons

**Primary / Filled (Neutral)**
- Background: `{colors.neutral-1}` (`#E9E9E9`)
- Text color: `{colors.ink}` (`#08101F`)
- Padding: `{spacing.xs}` 16px (`8px 16px`)
- Height: 40px
- Border: 0px
- Border radius: `{rounded.none}` (0px) — note: filled buttons are sharp
- Font: system-ui, 400, 16px, line-height 24px
- Width: 272px
- Box shadow: none
- Hover: background changes to `#D4D4D4` (interpolated from interaction data)

**Secondary / Outline**
- Background: transparent
- Text color: `{colors.primary}` (`#000000`)
- Padding: 16px 48px
- Height: 58px
- Border: `{thin}` (1px) solid `{colors.primary}` (`#000000`)
- Border radius: `{rounded.full}` (9999px) — pill shape for approachability
- Font: Poppins, 400, 16px, line-height 24px
- Width: 195px
- Box shadow: none
- Hover: background remains transparent; text may shift to accent (`{colors.accent-3}`)

**Tertiary / Ghost (Text)**
- Background: transparent
- Text color: `{colors.ink}` (`#08101F`)
- Padding: `{spacing.xs}` 16px (`8px 16px`)
- Height: 40px
- Border: 0px
- Border radius: `{rounded.none}` (0px)
- Font: system-ui, 400, 16px, line-height 24px
- Width: 272px
- Box shadow: none
- Hover: text color shifts to `{colors.accent-3}` (`#EB6C31`); text-decoration underline (dashed)

**Icon Button (Small)**
- Background: rgba(0, 0, 0, 0.7)
- Text color: `{colors.on-primary}` (`#FFFFFF`)
- Padding: `{spacing.xs}` (`9px`)
- Height: 18px
- Width: 18px
- Border: 0px
- Border radius: 50%
- Font: system-ui, 400, 16px, line-height 24px
- Box shadow: `rgba(255, 255, 255, 0.5) 0px 0px 1px 0px`
- Hover: opacity shifts to 0.9

**Small Outline Button**
- Background: transparent
- Text color: `#010109`
- Padding: `{spacing.xs}` 16px (`6px 16px`)
- Height: 38px
- Border: 1px solid `#010109`
- Border radius: `{rounded.sm}` (6px)
- Font: system-ui, 400, 16px, line-height 24px
- Box shadow: none

### Cards & Containers

**Default Card**
- Background: `{colors.canvas}` (`#F8F7F4`)
- Text color: `{colors.accent-1}` (`#212529`)
- Padding: 0px
- Height: 380px (varies by content)
- Width: 1110px (varies by viewport)
- Border: 0px
- Border radius: `{rounded.md}` (15px)
- Box shadow: `rgba(0, 0, 0, 0.15) 0px 8px 16px 0px` (single-tier elevation)
- Font: system-ui, 400, 16px, line-height 24px

**Large Card**
- Background: `{colors.canvas}` (`#F8F7F4`)
- Text color: `{colors.ink}` (`#08101F`)
- Padding: 0px
- Height: 500px
- Width: 392px
- Border: 0px
- Border radius: `{rounded.lg}` (16px)
- Box shadow: `rgba(0, 0, 0, 0.15) 0px 8px 16px 0px`
- Font: system-ui, 400, 16px, line-height 24px

### Navigation

**Primary Navigation**
- Background: rgba(255, 255, 255, 0.4) — semi-transparent white overlay
- Text color: `{colors.accent-1}` (`#212529`)
- Padding: `{spacing.xs}` 0px (`8px 0px`)
- Height: 67.6px
- Width: 100% (1440px full-width)
- Border: 0px
- Border radius: `{rounded.none}` (0px)
- Box shadow: `rgba(0, 0, 0, 0.15) 0px 8px 16px 0px`
- Font: system-ui, 400, 16px, line-height 24px
- Hover nav link: background shifts to `{colors.ink}` (`#08101F`) or `{colors.neutral-1}` (`#E9E9E9`) depending on context
- Active link: text color becomes `{colors.primary}` (`#000000`)

### Badges

**Filled Badge**
- Background: `{colors.accent-3}` (`#EB6C31`)
- Text color: `#010109`
- Padding: 4.2px 7.8px
- Height: 20px
- Width: 78.9px
- Border: 0px
- Border radius: `{rounded.sm}` (6px) — note: badges measure 6px, not full pill
- Font: system-ui, 700, 12px, line-height 12px
- Box shadow: none

### Forms & Inputs

**Text Input (Default)**
- Background: `{colors.on-primary}` (`#FFFFFF`)
- Text color: `{colors.ink}` (`#08101F`)
- Border: 1px solid `{colors.neutral-1}` (`#E9E9E9`)
- Padding: `{spacing.md}` (16px)
- Border radius: `{rounded.sm}` (6px)
- Font: system-ui, 400, 16px, line-height 24px
- Focus: box-shadow `0 0 0 .25rem rgba(13, 110, 253, .25)`, border-color shifts to `rgb(134, 183, 254)`
- Disabled: opacity 0.5, background shifts to secondary-bg

**Input Focus State**
- Box shadow: `rgba(13, 110, 253, 0.25) 0px 0px 0px 0.25rem`
- Border color: `rgb(134, 183, 254)`
- Transform (placeholder only): `scale(0.85) translateY(-0.5rem) translateX(0.15rem)`

### Footer

**Default Footer**
- Background: transparent
- Text color: `#010109`
- Padding: 0px
- Height: 21px
- Width: 844px
- Border: 0px
- Border radius: `{rounded.none}` (0px)
- Font: system-ui, 400, 14px, line-height 21px
- Box shadow: none

### Links

**Navigation Link (Default)**
- Text color: `{colors.on-primary}` (`#FFFFFF`)
- Text decoration: none
- Padding: 0px
- Border: 0px
- Hover: text color shifts; text-decoration becomes underline (dashed) or inherits
- Font: system-ui, 400, 16px, line-height 24px

**Secondary Link**
- Text color: rgba(0, 0, 0, 0.65)
- Padding: `{spacing.xs}` (`8px`)
- Hover: shifts to full opacity

## 5. Layout Principles

### Spacing System

Base unit: `{spacing.md}` = 16px

**Scale:**
- `{spacing.xxs}` = 4px — tight micro-spacing (icon padding, badge gaps)
- `{spacing.xs}` = 8px — button and field padding, small gaps
- `{spacing.sm}` = 12px — label and input padding
- `{spacing.md}` = 16px — default component padding, list item spacing
- `{spacing.lg}` = 20px — medium section spacing
- `{spacing.xl}` = 24px — large component gaps, hero padding
- `{spacing.xxl}` = 32px — generous section separation
- `{spacing.xxxl}` = 48px — major layout breaks
- `{spacing.section}` = 60px — full section vertical rhythm
- `{spacing.band}` = 100px — page-level band spacing (hero, major sections)

**Usage Context:**
- Buttons and controls: `{spacing.xs}` to `{spacing.md}`
- Card and section padding: `{spacing.md}` to `{spacing.xl}`
- Section breaks: `{spacing.section}` to `{spacing.band}`

### Grid & Container

- **Max width:** 1320px (content column at 1440px viewport); scales down to 960px at 1024px, 720px at 768px
- **Column strategy:** Single-column layout mobile-first (375px–768px); shifts to 5-column grid at 1024px for feature-rich layouts
- **Gutter:** 0px horizontal padding on sections; content respects max-width constraint via margin auto
- **Section padding-x:** 0px (full-bleed sections); content box constrains internally

### Whitespace Philosophy

Whitespace is structural, not decorative. The warm canvas (`{colors.canvas}`) provides passive breathing room; active spacing (margins and padding) follows the scale above, creating a rhythm of 8px multiples. Section breaks use full `{spacing.band}` (100px) to separate major topics, while component-level spacing uses `{spacing.md}` (16px). This creates a clear visual hierarchy and guides the eye from hero to content to call-to-action without clutter.

### Border Radius Scale

- `{rounded.none}` = 0px — filled buttons, cards (depending on role), overlays
- `{rounded.xs}` = 4px — small icon buttons, minimal accent rounding
- `{rounded.sm}` = 6px — input fields, small badges, subtle corner softness
- `{rounded.md}` = 15px — default card radius; primary elevation surface
- `{rounded.lg}` = 16px — large cards, image containers; slightly softer than md
- `{rounded.xl}` = 32px — generous rounding for emphasized containers
- `{rounded.full}` = 9999px — pill-shaped buttons, icon buttons, badges (role-dependent)

**Component contexts:**
- Cards: `{rounded.none}` or `{rounded.md}` / `{rounded.lg}`
- Images: `{rounded.lg}` (16px)
- Buttons: `{rounded.full}` (outline) or `{rounded.none}` (filled)
- Badges: `{rounded.sm}` (6px) or `{rounded.full}` (decorative icon badges)
- Inputs: `{rounded.sm}` (6px)

### Border Widths

- **Thin:** 1px — primary stroke weight for outline buttons, form borders, hairlines
- No thick or medium borders measured; the system favors single 1px strokes or no border

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Base (Flat) | No shadow; flat background only | Body text, icons, navigation links, disabled states |
| Elevated (Single Tier) | `rgba(0, 0, 0, 0.15) 0px 8px 16px 0px` | Cards, container overlays, navigation bar |
| Icon Accent | `rgba(255, 255, 255, 0.5) 0px 0px 1px 0px` | Small icon buttons (social links); subtle internal glow |

**Shadow Philosophy:**

The system uses a single-tier elevation strategy: either flat (no shadow) or elevated (one shadow level). This restraint signals confidence and clarity. The primary shadow (`rgba(0, 0, 0, 0.15) 0px 8px 16px 0px`) combines vertical offset (8px) and blur (16px) to create gentle separation from the canvas, suitable for cards and overlays. Icon buttons use a barely-there inner glow (`rgba(255, 255, 255, 0.5)`) to signal interactivity without depth.

### Opacity Levels

- 50% (0.50) — semi-transparent overlays, navigation background
- 65% (0.65) — disabled button opacity
- 79% (0.79) — hover or focus states for transparency effects
- 90% (0.90) — hover opacity on interactive elements (e.g., social icon hover)

### Z-index / Layering

- **Base:** 1–2 — default page content and surfaces
- **Dropdown:** 10 — dropdown menus and floating components
- **Modal:** 1000–1030 — modal dialogs and overlays; 1030 used for topmost modal layers

## 7. Do's and Don'ts

### Do

- **Use `{colors.primary}` (`#000000`) as the brand anchor** for active navigation, primary CTAs, and the logo mark to establish visual authority.
- **Pair outline buttons with `{rounded.full}` (pill shape)** to signal modern, accessible interaction; maintain 1px borders with `{colors.primary}`.
- **Apply the shadow `rgba(0, 0, 0, 0.15) 0px 8px 16px 0px` to cards and overlays only**, keeping most of the interface flat for clarity.
- **Follow the spacing scale strictly**: use 8px multiples (4, 8, 12, 16, 20, 24, 32, 48, 60, 100px) to maintain rhythm.
- **Leverage Poppins for headings (600–700 weight)** to establish hierarchy; fall back to system-ui for body text for native rendering.
- **Keep form inputs at `{rounded.sm}` (6px)** with 1px borders in `{colors.neutral-1}`; avoid sharp corners or heavy shadows.
- **Use badge fills sparingly**: coral (`{colors.accent-3}`) for accent, `{rounded.sm}` for subtle rounding.
- **Maintain high contrast**: `{colors.ink}` on `{colors.canvas}`, or `{colors.on-primary}` on dark surfaces.

### Don't

- **Do not use rounded buttons for filled, primary CTAs**; keep filled buttons sharp (`{rounded.none}`) to distinguish from secondary outlines.
- **Do not invent new colors** outside the defined palette; decorative accents (teal, coral, slate) are for tech badges and illustrations, not interactive states.
- **Do not add multiple shadows or gradients**; the single-tier shadow strategy is a defining trait. No mesh or decorative overlays.
- **Do not exceed max-width of 1320px** on desktop; constrain layout and maintain readability.
- **Do not skip the spacing scale**; arbitrary padding undermines rhythm. Always use values from the system (4, 8, 12, 16, 20, 24, 32, 48, 60, 100px).
- **Do not add focus outlines beyond the `0.25rem` blue ring** for inputs; the system removes default outlines in favor of border-color and shadow.
- **Do not use body text (`{colors.body}` — `#6C757D`) for headings**; reserve it for secondary prose only.
- **Do not apply opacity effects to solid backgrounds**; opacity is reserved for overlays (nav) and disabled states.

## 8. Responsive Behavior

### Breakpoints

| Viewport | Max Width | Grid Columns | Nav Links Visible | Menu Toggle | Heading Size | Body Size | Padding-x |
|---|---|---|---|---|---|---|---|
| 375px (Mobile) | 327px | 1 | 1 | yes | 29px | 16px | 0px |
| 768px (Tablet) | 720px | 1 | 1 | yes | 29px | 16px | 0px |
| 1024px (Desktop) | 960px | 5 | 7 | yes | 30px | 16px | 0px |
| 1280px (Large) | 1140px | 1 | 7 | yes | 32px | 16px | 0px |
| 1440px (XL) | 1320px | 1 | 7 | yes | 32px | 16px | 0px |

**Key observations:**
- Single-column layout persists until 1024px; grid expands to 5 columns at that breakpoint only.
- Heading font-size scales gradually: 29px (mobile/tablet) → 30px (1024px) → 32px (1280px+).
- Body text remains 16px across all breakpoints; line-height constant at 1.5 (24px).
- Navigation remains visible at all breakpoints; no hamburger menu appears in extraction data, though "menu toggle" is noted.
- Horizontal padding (padding-x) is consistently 0px; max-width constraint handles layout.

### Touch Targets

- **Button height:** minimum 40px (filled buttons), 58px (outline CTAs) for comfortable touch.
- **Icon button:** 18px (small social icons); 21px (larger interactive icons).
- **Tap area:** minimum 44px × 44px recommended for finger input; buttons generally exceed this.
- **Link padding:** 8px horizontal padding on navigation links for easier targeting.

### Collapsing Strategy

- **Mobile (375px–767px):** Single-column layout; all sections stack vertically; navigation collapses (toggle noted); headings scale to 29px.
- **Tablet (768px–1023px):** Continues single-column; max-width 720px; same heading size (29px).
- **Desktop (1024px+):** Grid expands to 5 columns; max-width 960px; heading scales to 30px (1024px) and 32px (1280px+).
- **XL (1440px):** Max-width 1320px; heading 32px; full feature set visible.

No CSS `display: none` hiding observed; components scale or reflow rather than hide.

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA / Brand:** Black (`{colors.primary}` — `#000000`)
- **Background / Canvas:** Warm beige (`{colors.canvas}` — `#F8F7F4`)
- **Heading text / High contrast:** Deep ink (`{colors.ink}` — `#08101F`)
- **Body text / Secondary:** Mid-grey (`{colors.body}` — `#6C757D`)
- **Borders / Hairlines:** Light grey (`{colors.neutral-1}` — `#E9E9E9`)
- **On dark surfaces:** White (`{colors.on-primary}` — `#FFFFFF`)
- **Decorative accents:** Teal (`#4FC0D0`), Coral (`#EB6C31`), Slate (`#212529`)

### Iteration Guide

1. **Start with the canvas.** Set all page backgrounds to `{colors.canvas}` (`#F8F7F4`); this warm neutral is the system's foundation.
2. **Typography hierarchy is size and weight, not colour.** Use Poppins 700 at 32px for heroes, system-ui 400 at 16px for body. Never add tracking (letter-spacing = 0px).
3. **Black is the brand.** Use `{colors.primary}` (`#000000`) for active nav, outline button borders, and the logo. Avoid using it for large background fills.
4. **Outline buttons are pill-shaped.** Apply `{rounded.full}` (9999px) to secondary CTAs with 1px borders; filled buttons remain sharp (`{rounded.none}`).
5. **Cards and nav get one shadow:** `rgba(0, 0, 0, 0.15) 0px 8px 16px 0px`. Everything else is flat.
6. **Spacing follows the 8px scale.** Never use arbitrary px values; choose from 4, 8, 12, 16, 20, 24, 32, 48, 60, 100px.
7. **Form inputs are 6px radius** with 1px `{colors.neutral-1}` borders. Focus adds a blue ring (`0.25rem rgba(13, 110, 253, .25)`); no outline stroke.
8. **Mobile-first, then scale.** Design for 375px single-column first; grid and heading sizes expand at 1024px and above.
9. **Badges are coral and 6px radius** (not pill); use sparingly for tech stack or status.
10. **Decorative accents (teal, coral, slate) go on illustrations and tech icons,** never primary interactive states. Hover on text links shifts to coral; navigation hover shifts to ink or light neutral.

## 10. Known Gaps

- **Interaction states on hover / active / focus**: Extraction captured some CSS rules (e.g., button hover, input focus) but not all interactive surfaces. The data shows link hover → coral (`#EB6C31`), but some component states (e.g., card hover, full form validation flows) were not observed.
- **No semantic error / success / warning colours**: The site does not expose a formal status ramp. Do not invent error-red or success-green variants.
- **No gradients or mesh overlays**: All backgrounds are flat fills. If decorative gradients exist, they live in illustrations (pixel art character, etc.), not UI components.
- **Decorative color roles unassigned**: Four extracted colours (Slate `#212529`, Teal `#4FC0D0`, Coral `#EB6C31`, and the dark Accent-1) have no semantic role in the UI. They appear in tech-stack badges, illustrations, and hover states but are not part of a formal interactive or status palette. Treat them as illustrative, not structural.
- **Surfaces behind authentication**: Only the public landing page was analysed. Logged-in or protected areas may use different component styling.
- **Z-index scale incomplete**: Only base (1–2), dropdown (10), and modal (1000–1030) layers were measured. Intermediate layering (e.g., sticky headers, tooltips) may exist but were not extracted.
- **Dark mode**: No dark theme variant was observed or extracted. The captured system is light-mode only.
- **Typography on large displays**: Headings scale to 32px at 1280px+, but no font-size data for viewports > 1440px was extracted; assume 32px persists.
- **Exact hover transitions and timing**: CSS `transition` or `animation` properties were not extracted, so animation duration and easing are unknown. Assume instant or default browser timing.