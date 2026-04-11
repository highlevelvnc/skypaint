```markdown
# Design System Specification: The Electric Kinetic

## 1. Overview & Creative North Star
**Creative North Star: "The Neon Luminary"**

This design system rejects the static, boxy nature of traditional enterprise software. Instead, it embraces a "Neon Luminary" aesthetic—a high-tech, editorial-inspired environment where light is the primary architect. We move beyond "blue and white" into a deep, immersive space defined by kinetic energy, vibrant accents, and atmospheric depth.

The system breaks the "template" look through:
*   **Intentional Asymmetry:** Overlapping glass panels and offset typography to create movement.
*   **Luminous Depth:** Replacing heavy shadows with inner glows and backlighting.
*   **High-Contrast Scale:** Pairing massive `display-lg` headlines with compact, precise `label-sm` metadata to create a sophisticated, technical hierarchy.

---

## 2. Colors: The Chromatic Engine
We use a foundation of deep midnight tones to allow our electric accents to "pop" with maximum luminance.

### The Palette
*   **Foundation:** The deep `#06092f` (`surface`) serves as our canvas, providing a high-contrast base for vibrancy.
*   **The Primary Core:** `primary` (`#94abf5`) and `on_primary_container` (`#001e5a`) maintain the heritage blue but are elevated through light.
*   **Electric Accents:** Our "vibrancy" comes from the `secondary` (`#00d2fd` electric blue) and `tertiary` (`#b6ffed` vivid teal). Use these for high-action touchpoints and visual highlights.

### The "No-Line" Rule
**Borders are forbidden for sectioning.** To define boundaries, use tonal shifts between surface tiers. 
*   Place a `surface_container_high` module on a `surface` background. 
*   The transition should be felt, not seen as a stroke. 1px solid lines age a design; color-blocking and negative space modernize it.

### The "Glass & Gradient" Rule
To achieve the "High-Tech" feel, primary CTAs and Hero sections must utilize **Signature Textures**:
*   **Linear Pulse:** A gradient from `primary` (#94abf5) to `secondary` (#00d2fd) at a 135-degree angle.
*   **Glassmorphism:** For floating overlays (modals, dropdowns), use `surface_variant` at 60% opacity with a `40px` backdrop blur.

---

## 3. Typography: Editorial Tech
We use a dual-font strategy to balance technical precision with modern friendliness.

*   **Space Grotesk (The Technical Edge):** Used for `display`, `headline`, and `title` scales. Its geometric, slightly quirky terminals give the UI a futuristic, "NASA-meets-Vogue" aesthetic.
*   **Plus Jakarta Sans (The Human Element):** Used for `body` and `label` scales. It is highly legible and provides a soft counterpoint to the sharp display type.

**Hierarchy Note:** Use `display-lg` (3.5rem) sparingly for "wow" moments. Ensure `label-md` is always uppercase with a `0.05rem` letter-spacing when used for categories to reinforce the high-end editorial look.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are replaced with **Ambient Luminescence**.

*   **The Layering Principle:** Stacking follows a logical light source.
    *   *Base:* `surface`
    *   *Mid-ground:* `surface_container_low` (for subtle grouping)
    *   *Foreground:* `surface_container_highest` (for interactive cards)
*   **Ambient Shadows:** If a floating element requires a shadow, use a `24px` blur with 8% opacity. The shadow color must be `primary_dim` (`#849be4`), never pure black. This creates a "glow" rather than a "weight."
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline_variant` at 15% opacity. It should feel like a faint reflection on the edge of a glass pane.

---

## 5. Components

### Interactive States: The "Pulse" Logic
Standard hover states are replaced with kinetic feedback:
1.  **Hover:** Scale element by `1.02%`. Apply an outer glow using the `secondary` color at 20% opacity.
2.  **Active (Click):** Scale element down to `0.98%`.
3.  **Focus:** A 2px "Ghost Border" using `tertiary_fixed`.

### Buttons
*   **Primary:** A gradient-filled container (`primary` to `secondary`) with `on_primary_container` text. `full` roundedness.
*   **Secondary (Glass):** `surface_bright` at 20% opacity with a 10% `outline_variant` ghost border. 
*   **Tertiary:** Text-only in `secondary_dim` with an underline that expands from center on hover.

### Cards & Lists
*   **The Divider Ban:** Never use horizontal lines. Use 24px–32px of vertical padding (`spacing-xl`) or a shift to `surface_container_lowest` to separate items.
*   **Cards:** Use `lg` (1rem) corner radius. Elements inside should feel "nested" through subtle shifts in surface container colors.

### Inputs & Fields
*   **Default:** `surface_container_highest` background, no border. 
*   **Active:** The bottom edge glows with a 2px `secondary` gradient line. Label slides up and shrinks to `label-sm`.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use `tertiary` (`#b6ffed`) for success states or "New" indicators—it feels more "electric" than standard green.
*   **DO** use asymmetrical margins. If a left margin is 40px, try a right margin of 80px for a high-end editorial feel.
*   **DO** lean into `backdrop-blur`. Every modal or popover should feel like a pane of frosted glass.

### Don’t
*   **DON'T** use 100% opaque black or white. Everything should be tinted by the `surface` or `primary` tones.
*   **DON'T** use standard "Drop Shadows." Use tonal shifts or subtle glows.
*   **DON'T** clutter the screen. If you have five pieces of information, highlight one with `display-sm` and tuck the others away in `label-md`.

### Final Note to Designers
This system is alive. It is a machine made of light and glass. When in doubt, ask yourself: *"Does this feel like a flat template, or does it feel like a high-tech instrument?"* Every interaction should feel like a spark of energy.```