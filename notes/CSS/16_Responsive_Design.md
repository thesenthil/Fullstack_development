# 16 — Responsive Design

Responsive design means a website adapts its layout to look good on any screen size — phone, tablet, desktop.

## 1. The Viewport Meta Tag (mandatory foundation)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without this, mobile browsers render the page at desktop width and zoom out — breaking responsive CSS entirely.

## 2. Fluid/Relative Units Instead of Fixed Pixels

```css
/* ❌ Fixed — doesn't adapt */
.container { width: 960px; }

/* ✅ Fluid — adapts to screen */
.container { width: 90%; max-width: 1200px; margin: 0 auto; }
```

| Unit | Relative to |
|------|-------------|
| `%` | Parent element |
| `vw` / `vh` | Viewport width/height |
| `rem` | Root font-size |
| `em` | Parent font-size |

## 3. `max-width` Instead of Fixed `width`

```css
img {
  max-width: 100%;
  height: auto; /* preserves aspect ratio */
}
```

This single rule prevents images from overflowing their containers on small screens — one of the most important responsive image rules.

## 4. Flexible Layout Systems

Flexbox and Grid (covered earlier) are inherently responsive-friendly:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

This grid reflows from multiple columns to a single column automatically as the screen shrinks — no media query required.

## 5. Mobile-First vs Desktop-First Approach

**Mobile-first** (recommended modern approach): write base styles for mobile, then add complexity for larger screens using `min-width` media queries.

```css
/* Base styles = mobile */
.container { padding: 16px; }

/* Enhance for tablets and up */
@media (min-width: 768px) {
  .container { padding: 32px; }
}

/* Enhance for desktop */
@media (min-width: 1024px) {
  .container { padding: 64px; }
}
```

**Desktop-first** (older approach): write desktop styles first, then override for smaller screens with `max-width` media queries.

```css
.container { padding: 64px; }

@media (max-width: 768px) {
  .container { padding: 16px; }
}
```

Mobile-first is generally preferred because most traffic is mobile, and it forces simpler, more deliberate base styles.

## 6. Common Breakpoints (general guideline, not fixed law)

```css
/* Small phones */
@media (min-width: 375px) { ... }

/* Tablets */
@media (min-width: 768px) { ... }

/* Laptops */
@media (min-width: 1024px) { ... }

/* Large desktops */
@media (min-width: 1440px) { ... }
```

Real projects should base breakpoints on where your **content** actually breaks, not arbitrary device widths.

## 7. Responsive Typography

```css
h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
}
```

`clamp(min, preferred, max)` lets text scale fluidly with the viewport without a media query.

## 8. Hiding/Showing Content Responsively

```css
.mobile-only { display: none; }
.desktop-only { display: block; }

@media (max-width: 768px) {
  .mobile-only { display: block; }
  .desktop-only { display: none; }
}
```

## Key Takeaways

- The viewport meta tag is non-negotiable — without it, nothing else responsive works.
- Favor fluid units (`%`, `rem`, `fr`) and `max-width: 100%` on images over fixed pixel sizing.
- Modern Flexbox/Grid patterns (like `auto-fit`/`minmax`) reduce the need for media queries.
- Mobile-first (`min-width` queries) is the modern standard approach.
