# 19 — CSS Interview Questions

## Beginner Level

**1. What is CSS and how is it different from HTML?**
CSS controls presentation (style/layout); HTML controls structure/content. They're separated for maintainability and reusability.

**2. What are the three ways to apply CSS?**
Inline (`style=""`), internal (`<style>` in `<head>`), and external (`<link>` to a `.css` file). External is best practice.

**3. What is the CSS box model?**
Every element is a box made of content, padding, border, and margin (inside to outside). See `07_Box_Model.md`.

**4. Difference between `class` and `id` selectors?**
`class` (`.name`) is reusable across many elements, lower specificity. `id` (`#name`) must be unique per page, higher specificity.

**5. What's the difference between `relative`, `absolute`, `fixed`, and `sticky` positioning?**
See `09_Position.md` — summary: `relative` nudges from its own position (space preserved); `absolute` positions relative to nearest positioned ancestor (removed from flow); `fixed` positions relative to viewport; `sticky` is relative until a scroll threshold, then sticks like fixed.

**6. What is specificity?**
A scoring system determining which CSS rule wins when multiple rules target the same element. Roughly: inline > ID > class/attribute/pseudo-class > element.

## Intermediate Level

**7. Explain the difference between `display: none` and `visibility: hidden`.**
`display: none` removes the element from layout entirely (no space reserved). `visibility: hidden` hides it visually but its space is still reserved in the layout.

**8. What is the difference between `em` and `rem`?**
`em` is relative to the **parent's** font-size (compounds when nested). `rem` is relative to the **root** (`<html>`) font-size only — more predictable, generally preferred.

**9. What is flexbox vs grid — when would you use each?**
Flexbox = one-dimensional (row or column), great for component-level layout (navbars, card rows). Grid = two-dimensional (rows and columns together), great for full-page layout.

**10. What is the CSS cascade?**
The algorithm browsers use to resolve conflicting rules: importance (`!important`) → specificity → source order (later wins if equal specificity).

**11. What does `box-sizing: border-box` do, and why is it useful?**
Makes `width`/`height` include padding and border in the total size (instead of adding to it). Makes layout math predictable — almost always applied globally as a best practice.

**12. What's the difference between `transition` and `animation`?**
`transition` animates between two states (e.g. default → hover) and needs a trigger. `animation` (with `@keyframes`) can define multiple steps and loop automatically without an external trigger.

**13. How do CSS variables (`--custom-property`) work, and why use them?**
Defined with `--name: value;` (often on `:root`), used with `var(--name)`. They're live at runtime (unlike Sass variables), enable easy theming/dark mode, and provide a single source of truth for repeated values.

**14. What is a media query and how does mobile-first design work?**
`@media (condition) { }` applies CSS conditionally (e.g. screen width). Mobile-first means writing base styles for small screens, then using `min-width` queries to add complexity for larger screens.

## Advanced Level

**15. Explain margin collapsing.**
When two vertical margins of adjacent block elements meet, they collapse into a single margin equal to the larger value (they don't add together). Doesn't apply to flex/grid children or horizontal margins.

**16. What is the difference between `auto-fit` and `auto-fill` in CSS Grid?**
Both with `repeat()` and `minmax()`: `auto-fit` collapses empty tracks to 0 width, letting existing items stretch to fill the space. `auto-fill` keeps empty tracks at their minimum size, even if no items occupy them.

**17. How does `z-index` work, and why might it "not work" sometimes?**
`z-index` controls stacking order, but **only applies to positioned elements** (`position` other than `static`). It also operates within "stacking contexts" — a `z-index` of 9999 inside a low z-index parent stacking context can still appear behind a sibling with a lower `z-index` but no such parent constraint.

**18. What's the difference between `inline`, `inline-block`, and `block`?**
`block` = full width, new line, respects width/height. `inline` = content-sized, no new line, ignores width/height. `inline-block` = content-sized like inline but respects width/height like block.

**19. What is BEM and why use it?**
Block-Element-Modifier naming convention (`.block__element--modifier`). Keeps specificity flat and consistent, makes component relationships clear from the class name alone, and prevents style collisions in large codebases.

**20. How would you implement a fully responsive image gallery without media queries?**
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```
`auto-fit` + `minmax()` automatically adjusts column count based on available space.

**21. What causes layout thrashing/reflow, and how do you avoid it in CSS animations?**
Animating properties like `width`, `height`, `top`, `left`, or `margin` forces the browser to recalculate layout on every frame (expensive). Animating `transform` and `opacity` instead avoids layout recalculation entirely — they're handled by the compositor/GPU.

**22. Explain CSS specificity calculation with an example.**
```css
#nav .link:hover { color: red; }  
/* ID(100) + class(10) + pseudo-class(10) = 120 */

.nav a { color: blue; }
/* class(10) + element(1) = 11 */
```
The first rule (120) wins regardless of source order, because its specificity score is higher.

**23. What are container queries and how do they differ from media queries?**
Media queries respond to the **viewport** size. Container queries (`@container`) respond to the size of a specific **parent container**, letting a component adapt based on the space it's actually given, regardless of where it's placed on the page.

---
*Tip: For senior-level interviews, be ready to explain trade-offs (Flexbox vs Grid, em vs rem, transition vs animation) — not just definitions.*
