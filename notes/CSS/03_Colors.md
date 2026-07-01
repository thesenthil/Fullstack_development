# 03 — Colors

CSS supports several ways to define color values.

## Color Formats

### Named colors
```css
color: red;
color: dodgerblue;
color: transparent;
```

### Hexadecimal
```css
color: #ff0000;     /* red */
color: #f00;        /* shorthand red */
color: #ff000080;   /* red with 50% alpha (8-digit hex) */
```

### RGB / RGBA
```css
color: rgb(255, 0, 0);          /* red */
color: rgba(255, 0, 0, 0.5);    /* red, 50% opacity */
```

### HSL / HSLA (Hue, Saturation, Lightness — intuitive for adjusting shades)
```css
color: hsl(0, 100%, 50%);       /* red */
color: hsla(0, 100%, 50%, 0.5); /* red, 50% opacity */
```

- **Hue**: 0–360 (color wheel position; 0=red, 120=green, 240=blue)
- **Saturation**: 0–100% (gray to full color)
- **Lightness**: 0–100% (black to white)

HSL is great for design systems — keep hue fixed, vary lightness for tints/shades:
```css
--brand: hsl(220, 90%, 50%);
--brand-light: hsl(220, 90%, 70%);
--brand-dark: hsl(220, 90%, 30%);
```

## Where Colors Apply

```css
.box {
  color: #333;                 /* text color */
  background-color: #f5f5f5;   /* background fill */
  border: 2px solid #ccc;      /* border color */
  box-shadow: 0 2px 8px rgba(0,0,0,0.2); /* shadow color */
}
```

## Opacity vs Alpha Channel

```css
/* opacity affects the WHOLE element including children */
.box { opacity: 0.5; }

/* alpha (rgba/hsla) affects ONLY that specific property */
.box { background-color: rgba(0,0,0,0.5); }
```

`opacity` makes everything inside semi-transparent (text, borders, children too). Use alpha channel colors instead when you only want the background/border transparent, not the text.

## `currentColor` Keyword

```css
.icon {
  color: blue;
  border: 1px solid currentColor; /* border matches text color automatically */
}
```

## Key Takeaways

- Hex and `rgb()` are most common; `hsl()` is most intuitive for generating color variations.
- Use rgba/hsla (alpha channel) instead of `opacity` when only the background/border should be transparent.
- `currentColor` lets borders/shadows automatically match the text color.
