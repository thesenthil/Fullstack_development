# 06 — Images

The `<img>` tag embeds images. It's a **self-closing/void element** — no closing tag, no content.

```html
<img src="photo.jpg" alt="A description of the photo">
```

## Essential Attributes

| Attribute | Purpose |
|-----------|---------|
| `src` | Path to the image file (required) |
| `alt` | Alternative text — shown if image fails to load, read by screen readers (required for accessibility) |
| `width` / `height` | Dimensions in pixels (helps prevent layout shift while loading) |
| `loading` | `lazy` defers loading offscreen images for performance |
| `title` | Tooltip on hover |

```html
<img 
  src="dog.jpg" 
  alt="A golden retriever sitting in a park" 
  width="400" 
  height="300" 
  loading="lazy">
```

## Why `alt` Matters

1. **Accessibility** — screen readers announce the `alt` text to visually impaired users.
2. **SEO** — search engines use `alt` text to understand image content.
3. **Fallback** — shown if the image fails to load or is slow on a poor connection.

```html
<!-- ✅ Good — descriptive -->
<img src="cake.jpg" alt="Chocolate birthday cake with candles">

<!-- ❌ Bad — empty or missing -->
<img src="cake.jpg">
<img src="cake.jpg" alt="">  <!-- only OK if image is purely decorative -->
```

## Responsive Images

### `srcset` — serve different image sizes for different screens
```html
<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
  alt="Responsive landscape photo">
```

### `<picture>` — serve entirely different images/formats based on conditions
```html
<picture>
  <source media="(min-width: 800px)" srcset="desktop.jpg">
  <source media="(min-width: 480px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="Hero banner">
</picture>
```

`<picture>` is also used for modern image formats with fallback:

```html
<picture>
  <source srcset="photo.webp" type="image/webp">
  <source srcset="photo.jpg" type="image/jpeg">
  <img src="photo.jpg" alt="Fallback description">
</picture>
```

## Figure & Caption

Use `<figure>` + `<figcaption>` to associate an image with a caption semantically:

```html
<figure>
  <img src="chart.png" alt="Sales growth chart for 2025">
  <figcaption>Fig 1. Quarterly sales growth, 2025</figcaption>
</figure>
```

## Image Formats Quick Reference

| Format | Best for |
|--------|----------|
| `.jpg/.jpeg` | Photos (lossy compression) |
| `.png` | Graphics/logos needing transparency |
| `.svg` | Icons/logos (scalable, no quality loss) |
| `.webp` | Modern format — smaller size, good quality |
| `.gif` | Simple animations |

## Key Takeaways

- Always include meaningful `alt` text.
- Use `width`/`height` to avoid layout shift.
- Use `srcset`/`picture` for responsive, performant images.
- Use `<figure>`/`<figcaption>` for captioned images.
