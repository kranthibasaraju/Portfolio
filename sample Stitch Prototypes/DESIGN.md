# Design System Document: Technical Sophistication & Editorial Precision

## 1. Overview & Creative North Star: "The Digital Alchemist"
This design system moves away from the "template-heavy" look of standard engineering portfolios, instead adopting a **Creative North Star of "The Digital Alchemist."** It treats data not as cold numbers, but as a premium, fluid resource. 

To break the rigid grid of traditional technical sites, we employ **Intentional Asymmetry**. Large `display-lg` typography should overlap with `surface-container` elements, and content blocks should shift off-center to create an editorial flow. We aren't just displaying code; we are curating an intellectual narrative through depth, light, and motion.

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a deep, nocturnal foundation, using electric accents to represent the "spark" of intelligence within the data.

### Surface Hierarchy & Nesting
We define depth through **Tonal Layering**, not lines. 
- **Base Layer:** `surface` (#0b1326) is the infinite canvas.
- **Sectioning:** Use `surface-container-low` (#131b2e) for large background shifts to denote new content areas.
- **Project Cards:** Use `surface-container-highest` (#2d3449) to create a "lifted" feel for high-priority items.

**The "No-Line" Rule:** 1px solid borders are strictly prohibited for layout sectioning. Separation must be achieved via background color shifts (e.g., a `surface-container-low` block sitting on a `surface` background) or vertical breathing room using the `24` (6rem) spacing token.

### The "Glass & Gradient" Rule
- **Glassmorphism:** For floating navigation or modal overlays, use `surface-variant` (#2d3449) at 60% opacity with a `20px` backdrop-blur. 
- **Signature Textures:** Apply a linear gradient from `primary` (#b4c5ff) to `primary-container` (#001442) at a 135-degree angle for hero backgrounds or primary call-to-actions. This provides a "glow" effect that mimics a high-end monitor or terminal.

## 3. Typography: The Technical Editorial
We pair the geometric authority of **Space Grotesk** with the functional precision of **Inter**.

- **Display & Headlines (Space Grotesk):** Use `display-lg` (3.5rem) for impact. To achieve the "Editorial" look, reduce letter-spacing to `-0.04em` on headlines.
- **Body & Technical Specs (Inter):** Use `body-md` (0.875rem) for descriptions. For technical metadata (e.g., Python, PyTorch, AWS), use `label-md` with `font-weight: 500` to maintain a "monospaced feel" without sacrificing readability.
- **Hierarchy Role:** Headlines should be high-contrast (`on-surface`), while secondary descriptions use `on-surface-variant` (#c6c6cd) to create a clear visual path for the eye.

## 4. Elevation & Depth: Atmospheric Layering
Traditional shadows look "muddy" on dark slate. We use light and transparency to simulate height.

- **The Layering Principle:** Nested components must always be "lighter" than their parent. A card (`surface-container-high`) placed on a section (`surface-container-low`) creates a natural, soft lift.
- **Ambient Shadows:** For "floating" items, use a shadow with a `48px` blur, 0px offset, and 6% opacity of `primary` (#b4c5ff). This mimics a blue-tinted light source reflecting off the surface.
- **The "Ghost Border" Fallback:** For interactive inputs or button boundaries, use `outline-variant` (#45464d) at **20% opacity**. It should be felt, not seen.

## 5. Components: The Primitive Set

### Buttons & Interaction
- **Primary:** Gradient fill (Primary to Primary-Container), `round-md` (0.375rem) corners. No border.
- **Secondary:** Transparent background with a "Ghost Border" of `primary` at 20%. 
- **Interaction:** On hover, primary buttons should increase their `surface-tint` intensity.

### Technical Data Chips
- **Style:** Use `secondary-container` (#00a572) for the background and `on-secondary` (#003824) for text. 
- **Shape:** `round-full` for a sleek, pill-like appearance. These represent "data nodes" in the portfolio.

### Project Cards & Content Blocks
- **The "No-Divider" Rule:** Forbid the use of `<hr>` or border lines between items. Use `spacing-12` (3rem) of vertical space or a background shift to `surface-container-lowest` to separate projects.
- **Visuals:** Project thumbnails should have a subtle `0.5rem` (lg) corner radius and a `10%` opacity `primary` overlay to unify them with the system's color profile.

### Input Fields
- **State:** Active inputs use a `secondary` (#4edea3) "Ghost Border."
- **Feedback:** Error states use `error` (#ffb4ab) text with no background fill to maintain the clean, dark aesthetic.

## 6. Do’s and Don’ts

### Do:
- **Use "White Space" as a Tool:** Give the AI models and data visualizations room to breathe. Use `spacing-20` (5rem) between major story beats.
- **Embrace Asymmetry:** Align the title to the left (0%) and the project description to the right (offset by 2 columns) to create a sophisticated, non-linear flow.
- **Color Accentuate:** Reserve `secondary` (Mint) and `tertiary` (Light Blue) strictly for data points, code highlights, or success states.

### Don’t:
- **Don't use pure black (#000000):** It kills the "Digital Alchemist" depth. Always use `surface` (#0b1326).
- **Don't use heavy shadows:** They look like "dirt" on deep slate backgrounds. Use tonal shifts instead.
- **Don't use standard icons:** Opt for thin-stroke (1px or 1.5px) SVG icons that match the `outline` token weight to maintain the technical feel.