# 18 — CSS Best Practices

## 1. Use a CSS Reset / Normalize

Browsers apply different default styles to elements. Start every project with a reset:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Or use a more thorough reset library (e.g., `normalize.css`) for consistent cross-browser defaults.

## 2. Always Set `box-sizing: border-box` Globally

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```
Makes width/height math predictable everywhere (see `07_Box_Model.md`).

## 3. Use a Consistent Naming Convention

**BEM (Block Element Modifier)** is the most widely used convention:

```css
.card { }                /* Block */
.card__title { }         /* Element — part of the block */
.card__title--large { }  /* Modifier — variation of the element */
```

```html
<div class="card card--featured">
  <h2 class="card__title">Title</h2>
  <p class="card__description">Text</p>
</div>
```

Benefits: avoids specificity wars, makes relationships between classes obvious, prevents style leakage between components.

## 4. Avoid `!important`

```css
/* ❌ Avoid — fights the cascade, hard to override later */
.btn { color: red !important; }

/* ✅ Better — fix specificity properly, or reduce nesting */
.btn { color: red; }
```
`!important` should be a last resort (e.g., overriding inline styles from a CMS you don't control), not a habit.

## 5. Keep Specificity Low and Flat

```css
/* ❌ Overly specific, hard to override */
div.container ul.nav li.item a.link { color: blue; }

/* ✅ Flat, reusable */
.nav-link { color: blue; }
```

## 6. Use Relative Units for Scalability

Prefer `rem` for font sizes/spacing and `%`/`fr` for layout widths over hardcoded `px` everywhere — keeps the site consistent and accessible (respects user font-size preferences).

## 7. Organize CSS Logically

Common structure for a mid-sized project:

```
styles/
├── base/         → reset, typography, variables
├── components/   → buttons, cards, forms (reusable pieces)
├── layout/       → header, footer, grid, nav
├── pages/        → page-specific overrides
└── main.css      → imports everything
```

## 8. Use CSS Variables for Repeated Values

```css
:root {
  --primary: #2563eb;
  --spacing: 8px;
  --radius: 6px;
}
```
Single source of truth for colors, spacing, and other design tokens (see `15_Variables.md`).

## 9. Mobile-First Media Queries

```css
.box { padding: 16px; }

@media (min-width: 768px) {
  .box { padding: 32px; }
}
```
Write base styles for mobile, layer on enhancements for larger screens.

## 10. Comment Sparingly but Usefully

```css
/* ==========================================================
   Navigation Component
   ========================================================== */
.nav { ... }
```
Comment the "why," not the obvious "what" (the code already shows what).

## 11. Avoid Deep Nesting (in Sass/Less or nested CSS)

```scss
// ❌ Too deep — fragile, high specificity
.page .sidebar .widget .title { color: blue; }

// ✅ Flat
.widget-title { color: blue; }
```

## 12. Performance Tips

- Animate `transform`/`opacity`, not `width`/`top`/`margin` (see `12_Transform.md`).
- Minimize use of `*` universal selectors in large stylesheets (mild performance cost at scale).
- Use `will-change` sparingly for elements about to animate — overuse can hurt performance.

```css
.modal {
  will-change: transform, opacity;
}
```

## 13. Accessibility Is Part of "Best Practice" CSS

- Never remove `:focus` outlines without a replacement.
- Respect `prefers-reduced-motion` and `prefers-color-scheme`.
- Maintain sufficient color contrast.

## Quick Checklist

- [ ] CSS reset + `box-sizing: border-box` applied globally
- [ ] Consistent naming convention (BEM or similar)
- [ ] No `!important` except as a rare, deliberate override
- [ ] CSS variables for repeated colors/spacing
- [ ] Mobile-first media queries
- [ ] Logical file/folder organization
- [ ] Accessible focus states and reduced-motion support

## Key Takeaways

- Predictability (`border-box`, low specificity, consistent naming) beats cleverness.
- Variables + a clear naming convention scale far better than ad-hoc class names.
- Good CSS architecture pays off most as a project grows — invest in structure early.
