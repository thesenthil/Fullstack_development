# 17 — Media Queries

Media queries apply CSS rules conditionally based on device characteristics — screen width, orientation, resolution, and more.

## Basic Syntax

```css
@media (condition) {
  /* CSS rules applied only when condition is true */
}
```

```css
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

## Width-Based Queries (most common)

```css
@media (min-width: 768px) { ... }   /* applies at 768px and WIDER */
@media (max-width: 767px) { ... }   /* applies at 767px and NARROWER */

/* Range — applies only between two widths */
@media (min-width: 768px) and (max-width: 1023px) {
  /* tablet-only styles */
}
```

## Combining Multiple Conditions

### `and` — all conditions must be true
```css
@media (min-width: 768px) and (orientation: landscape) {
  ...
}
```

### Comma `,` — acts like OR (any condition true)
```css
@media (max-width: 600px), (orientation: portrait) {
  ...
}
```

### `not` — negates a query
```css
@media not all and (min-width: 768px) {
  ...
}
```

## Orientation

```css
@media (orientation: portrait) { ... }
@media (orientation: landscape) { ... }
```

## `prefers-color-scheme` — Respect OS Dark Mode Setting

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
    color: #f8fafc;
  }
}
```

Often combined with CSS variables for a complete theming system:

```css
:root {
  --bg: white;
  --text: black;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --text: white;
  }
}
body {
  background: var(--bg);
  color: var(--text);
}
```

## `prefers-reduced-motion` — Accessibility for Motion-Sensitive Users

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Print Styles

```css
@media print {
  nav, footer, .no-print {
    display: none;
  }
  body {
    font-size: 12pt;
    color: black;
  }
}
```

## Common Real-World Pattern: Mobile-First Layout Switch

```css
/* Mobile base: stacked */
.layout {
  display: flex;
  flex-direction: column;
}

/* Tablet+: side by side */
@media (min-width: 768px) {
  .layout {
    flex-direction: row;
  }
}
```

## Media Queries in HTML (alternative to CSS)

```html
<link rel="stylesheet" media="(min-width: 768px)" href="desktop.css">
```

## Container Queries (modern alternative — query a parent container, not the viewport)

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

Unlike media queries (which respond to the **viewport**), container queries respond to the size of a specific **parent container** — useful for components that need to adapt regardless of where they're placed on the page.

## Key Takeaways

- `min-width` queries build up from mobile (mobile-first); `max-width` queries build down from desktop.
- `prefers-color-scheme` and `prefers-reduced-motion` let you respect user OS-level accessibility/UX preferences.
- Container queries (newer) solve the case where media queries fall short — adapting based on a component's own container size, not the whole viewport.
