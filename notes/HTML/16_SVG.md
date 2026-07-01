# 16 — SVG

SVG (Scalable Vector Graphics) is an XML-based format for drawing vector graphics directly in HTML. Unlike raster images (jpg/png), SVGs scale infinitely without losing quality.

## Inline SVG

```html
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#3498db" />
</svg>
```

Because it's inline HTML, you can style and animate it directly with CSS and JavaScript.

## Common SVG Shapes

```html
<svg width="300" height="200">
  <!-- Rectangle -->
  <rect x="10" y="10" width="100" height="60" fill="tomato" />

  <!-- Circle -->
  <circle cx="200" cy="50" r="40" fill="dodgerblue" />

  <!-- Line -->
  <line x1="0" y1="100" x2="300" y2="100" stroke="black" stroke-width="2" />

  <!-- Polygon (triangle) -->
  <polygon points="50,150 100,190 0,190" fill="green" />

  <!-- Text -->
  <text x="150" y="180" font-size="20" fill="black">SVG Text</text>

  <!-- Custom path -->
  <path d="M10 80 Q 95 10 180 80" stroke="purple" fill="transparent" stroke-width="3" />
</svg>
```

## `viewBox` — The Key to Scalability

```html
<svg viewBox="0 0 100 100" width="50" height="50">
```

`viewBox="min-x min-y width height"` defines the internal coordinate system. The SVG then scales to fit whatever `width`/`height` (or CSS size) you give it — this is why SVGs stay crisp at any size.

## SVG as an `<img>` (simple, non-interactive)

```html
<img src="logo.svg" alt="Company logo" width="120">
```

Use this when you don't need to style individual parts with CSS/JS — just need a scalable icon/logo.

## Styling SVG with CSS

When SVG is inline (not via `<img>`), you can target it directly:

```html
<svg>
  <circle class="dot" cx="50" cy="50" r="40" />
</svg>
```

```css
.dot {
  fill: #3498db;
  stroke: #2c3e50;
  stroke-width: 3;
}
.dot:hover {
  fill: #e74c3c;
}
```

## Inline SVG vs `<img src="">` vs CSS `background-image`

| Method | Stylable with CSS | Interactive (JS events) | Use Case |
|--------|---------------------|---------------------------|----------|
| Inline `<svg>` | ✅ Yes, fully | ✅ Yes | Icons needing hover/animation effects |
| `<img src="icon.svg">` | ❌ No (treated as image) | ❌ No | Simple logos, decorative icons |
| CSS `background-image: url(icon.svg)` | ❌ No | ❌ No | Decorative background graphics |

## Why SVG Over PNG for Icons/Logos

- Infinitely scalable, sharp on any screen (including retina/high-DPI).
- Usually smaller file size for simple shapes.
- Can be styled/animated with CSS and JS when inline.
- Accessible — can include `<title>` and ARIA attributes.

## Key Takeaways

- SVG = vector graphics, scales without quality loss.
- `viewBox` defines the internal coordinate system that enables scaling.
- Inline SVG can be styled with CSS and manipulated with JS; `<img src="">` SVG cannot.
- Prefer SVG over raster formats for icons, logos, and simple illustrations.
