# 06 — Fonts

## Font Family

```css
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
```

Always provide a **fallback chain** — if the first font isn't available, the browser tries the next, ending with a generic family.

### Generic Font Families
| Generic | Example fonts |
|---------|---------------|
| `serif` | Times New Roman, Georgia |
| `sans-serif` | Arial, Helvetica |
| `monospace` | Courier New, Consolas |
| `cursive` | Comic Sans, Brush Script |
| `fantasy` | Decorative display fonts |

## Font Size

```css
font-size: 16px;
font-size: 1rem;     /* relative to root element's font-size (preferred) */
font-size: 1.5em;    /* relative to parent's font-size */
font-size: 120%;
```

## Font Weight

```css
font-weight: normal;   /* 400 */
font-weight: bold;     /* 700 */
font-weight: 300;      /* light */
font-weight: 600;      /* semi-bold */
```

Numeric scale (100–900) gives finer control than just `normal`/`bold`, but only works if the loaded font file includes that weight.

## Font Style

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

## Shorthand

```css
font: italic bold 18px/1.5 'Helvetica Neue', sans-serif;
/*    style  weight size/line-height  family */
```

## Loading Custom Fonts — `@font-face`

```css
@font-face {
  font-family: 'CustomFont';
  src: url('fonts/custom.woff2') format('woff2'),
       url('fonts/custom.woff') format('woff');
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

- `font-display: swap` shows fallback text immediately, then swaps to the custom font once loaded — avoids invisible text while loading (FOIT).

## Google Fonts (common real-world pattern)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```
```css
body { font-family: 'Inter', sans-serif; }
```

## Responsive Typography

```css
html { font-size: 100%; }      /* 16px baseline, respects user browser settings */

h1 { font-size: clamp(1.75rem, 4vw, 3rem); } /* scales smoothly between min and max */
```

`clamp(min, preferred, max)` gives fluid typography that scales with viewport width but never goes below/above set limits.

## Key Takeaways

- Always include a font fallback chain ending in a generic family.
- Prefer `rem` for font-size so the whole page scales consistently with the root font-size.
- Use `@font-face` + `font-display: swap` for custom fonts to avoid invisible-text flashes.
