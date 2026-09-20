# Absolute Asia Travel — Vietnam Private Journey Redesign

## Goal
Rebuild the current landing page at `/` using Absolute Asia Travel’s existing consumer content and authentic media, styled in the exact editorial design language of the referenced Designed Journeys Partner Portal commit. The result remains a premium private-travel page for international travelers, not a trade or B2B page.

## Source and design fidelity
- Preserve the source page’s meaningful copy, facts, pricing, rating, contacts, license number, reviews, FAQs, videos, and calls to action without inventing claims.
- Reuse the source page’s destination photography, founder/team portraits, traveler-video thumbnails, membership marks, and official license image.
- Carry over the reference project’s Fraunces/Inter typography, warm ivory/charcoal/red/gold palette, 80rem editorial container, restrained 4px corners, fine borders, section rhythm, image proportions, button treatment, and low-motion interactions.
- Use Absolute Asia Travel branding and consumer-facing language throughout.

## Page composition
1. Compact credentials bar and premium, mobile-ready navigation.
2. Full-width destination hero with “Authentic Vietnam,” 10-day private journey positioning, route, rating, visible price, and two requested actions.
3. Click-to-load featured journey video and source photography strip.
4. Quick facts and sticky section navigation.
5. “What You Actually Get” editorial benefits.
6. Private journey versus standard tour pacing comparison.
7. Complete ten-day itinerary with route overview, accessible day accordions, and Expand All / Collapse All controls.
8. Click-to-load traveler video gallery containing every source traveler video and context.
9. VIP benefits, full inclusions/exclusions, and handpicked hotels.
10. Founders, Hanoi team, license/trust credentials, contact details, and enlargeable official license image.
11. Verified reviews with the source segmentation and TripAdvisor links.
12. Complete FAQ with accessible accordions and FAQ structured data.
13. Secondary Vietnam planning guide form with an inline thank-you state.
14. Primary journey enquiry form, contact options, and source footer content.
15. Compact mobile sticky “Customize My Journey” action that does not obscure content.

## Interaction and quality
- Lazy-load imagery and load YouTube players only after a visitor selects a thumbnail.
- Keep video areas at 16:9, use semantic headings, visible focus states, labeled forms, and keyboard-operable dialogs/accordions.
- Keep the lead guide secondary; no popups or aggressive sales behavior.
- Add page-specific title, description, Open Graph metadata, Organization schema, and FAQ schema.
- Verify no horizontal overflow or content collisions at 375, 390, 430, 768, 1024, and 1440px.
- Compare the finished page against the captured source inventory to confirm no meaningful section, itinerary detail, video, review, or trust element is missing.

## Technical details
- Implement reusable React sections and small interaction components within the existing TanStack Start app.
- Define all visual values as semantic Tailwind v4 tokens in the global design system; avoid ad hoc component colors.
- Keep submissions as clear in-page confirmation experiences; no persistent storage or email delivery is added because the request is for the redesigned landing page presentation.
