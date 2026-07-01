# 15 — CSS Variables (Custom Properties)

CSS variables let you define reusable values once and reference them throughout your stylesheet — essential for theming, design systems, and dark mode.

## Defining Variables

Variables are conventionally defined on `:root` (the `<html>` element) so they're globally accessible:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #64748b;
  --spacing-unit: 8px;
  --font-main: 'Inter', sans-serif;
  --border-radius: 6px;
}
```

## Using Variables — `var()`

```css
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
  font-family: var(--font-main);
}
```

## Fallback Values

```css
color: var(--text-color, #333); /* uses #333 if --text-color isn't defined */
```

## Why Use CSS Variables Instead of Just Repeating Values?

```css
/* ❌ Without variables — repeated, hard to maintain */
.btn-primary { background: #2563eb; }
.link { color: #2563eb; }
.badge { border-color: #2563eb; }
/* Changing the brand color means hunting down every instance */

/* ✅ With variables — change once, updates everywhere */
:root { --brand: #2563eb; }
.btn-primary { background: var(--brand); }
.link { color: var(--brand); }
.badge { border-color: var(--brand); }
```

## Scoped Variables (not just global)

Variables can be redefined within any selector — they cascade and override like normal CSS:

```css
:root {
  --card-bg: white;
}
.dark-section {
  --card-bg: #1e293b; /* overrides only within .dark-section and its children */
}
.card {
  background: var(--card-bg);
}
```

## Real-World Use Case: Dark Mode Theming System

```css
:root {
  --bg-base: #ffffff;
  --text-main: #1e293b;
  --accent: #2563eb;
  --border: #e2e8f0;
}

[data-theme="dark"] {
  --bg-base: #0f172a;
  --text-main: #f8fafc;
  --accent: #38bdf8;
  --border: #334155;
}

body {
  background-color: var(--bg-base);
  color: var(--text-main);
  transition: background-color 0.3s ease;
}

.card {
  border: 1px solid var(--border);
}
```

```html
<body data-theme="dark">
```

A single attribute toggle (`data-theme="dark"`) instantly repaints the entire site — no per-component dark-mode logic needed.

## CSS Variables vs Sass/Less Variables

| | CSS Custom Properties | Sass/Less Variables |
|---|------------------------|------------------------|
| Runtime | Live in the browser, can change dynamically (JS, media queries, `:hover`) | Compiled away at build time — static |
| Scope | Cascades like normal CSS, can be scoped per-selector | Global or scoped at compile time only |
| JS access | Yes — `getComputedStyle()` / `element.style.setProperty()` | No — doesn't exist at runtime |

## Updating Variables with JavaScript

```js
document.documentElement.style.setProperty('--primary-color', '#e74c3c');
```

This is how many JS-powered theme switchers work — toggle a single variable and the whole UI updates instantly.

## Key Takeaways

- Define variables on `:root` for global access; redefine them in nested selectors to scope/override.
- Variables are the backbone of maintainable design systems and dark mode theming.
- Unlike Sass variables, CSS custom properties are live at runtime — accessible and changeable via JavaScript.
