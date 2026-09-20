# Quiet Luxury refinement — warm linen, burgundy, antique gold, floating cards

The page keeps all content and structure. Only the visual language changes: a warmer paper-like background, a deeper restrained red, an antique gold, more breathing room, and soft floating panels instead of hard grey outlines.

## 1. Colour shift

| Role | Now | New |
| --- | --- | --- |
| Page background | cool near-white | warm linen `#FAF9F5` |
| Accent red (buttons, eyebrows, links) | bright ember red | deep burgundy `#8C0C10` |
| Gold (rules, stars, small marks) | bright yellow-gold | antique brass gold `#C59B27` |
| Section tint ("cream" bands) | light beige | a slightly deeper warm linen so bands read as paper, not grey |
| Ink / text | near-black warm | unchanged, softened a touch warmer |

Burgundy stays the single action colour: primary buttons, eyebrow labels, links on hover, focus rings. Gold stays decorative only — thin rules, rating stars, numerals — never a button.

Contrast is checked so white text on burgundy and ink text on linen both stay comfortably readable, including at small sizes.

## 2. Floating cards instead of grey frames

Every boxed element currently drawn with a hard 1px grey outline becomes a soft floating panel:

- warm white surface on the linen background
- an ambient, very diffuse shadow (two layers: a hairline contact shadow plus a wide soft blur) with no visible edge
- a hairline warm border kept only where two panels touch or where the panel sits on white
- slightly more inner padding so content is not tight against the edge

Applies to: enquiry form panel, lead magnet panel, hotel cards, destination cards on the Vietnam collection page, video thumbnails, review cards, FAQ rows, itinerary day panels, similar-journey cards, quick-fact tiles.

Horizontal hairline rules (section separators, list dividers, founder blocks) stay — they are part of the editorial feel and are not replaced by boxes.

## 3. Whitespace and rhythm

- Section vertical spacing increases roughly 25–30%, with a consistent rhythm: large gap between sections, medium between a heading and its content, small inside a card.
- Headings get a touch more space beneath them and slightly tighter line spacing, so the type block reads as one shape.
- Body text line length is capped for comfortable reading; intro paragraphs sit narrower than the full container.
- Mobile keeps roughly 70% of the desktop spacing so the page does not become endless on a phone.

## 4. Motion restraint

Only one subtle motion: cards lift very slightly on hover with the shadow deepening. No animated entrances, no parallax. Reduced-motion preference disables it.

## 5. What does not change

Content, sections, itinerary, videos, reviews, trust details, forms, database wiring, fonts (Fraunces + Inter), container width, and SEO markup all stay exactly as they are.

## Technical notes

- Convert the three brand hexes to oklch and update `src/styles.css` tokens: `--background`, `--card`, `--cream`, `--secondary`, `--muted`, `--accent`, `--primary`/`--ember`/`--ring`, `--gold`, `--border`, `--input`, plus `--shadow-soft` and a new `--shadow-float` (ambient two-layer blur).
- Add a `card-float` utility (surface + radius + ambient shadow + hairline border + hover lift, gated by `prefers-reduced-motion`) and a `measure` utility for readable line length.
- Replace `border border-border` / boxed containers in `src/components/JourneyPage.tsx` (3 occurrences plus form/hotel/review/FAQ/video blocks) and `src/routes/vietnam.tsx` (10 border usages) with `card-float`; keep `border-t border-border` hairline rules.
- Bump section padding from `py-24 md:py-32` to the new rhythm in the shared `Section` component and the ad-hoc sections (hero, enquiry, footer, Vietnam page).
- Verify with a typecheck, a build check, and Playwright screenshots at 375 / 768 / 1440 px for overflow and contrast.
