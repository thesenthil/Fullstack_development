# 04 — Backgrounds

Properties controlling an element's background fill — color, image, gradient, and how they behave.

## Background Color

```css
.box { background-color: #f0f0f0; }
```

## Background Image

```css
.hero {
  background-image: url('hero.jpg');
}
```

## Background Repeat

```css
background-repeat: repeat;     /* default — tiles in both directions */
background-repeat: no-repeat;  /* shows once */
background-repeat: repeat-x;   /* tiles horizontally only */
background-repeat: repeat-y;   /* tiles vertically only */
```

## Background Position

```css
background-position: center;
background-position: top right;
background-position: 50% 50%;
background-position: 20px 40px;
```

## Background Size

```css
background-size: cover;    /* fills the container, may crop, no distortion */
background-size: contain;  /* fits entirely inside, may leave empty space */
background-size: 100% 100%; /* stretches to exact size (can distort) */
background-size: 300px 200px;
```

## Background Attachment

```css
background-attachment: scroll; /* default — scrolls with page */
background-attachment: fixed;  /* stays fixed during scroll (parallax effect) */
background-attachment: local;  /* scrolls with the element's own content */
```

## Shorthand Property

```css
.hero {
  background: url('hero.jpg') no-repeat center/cover;
  /*           image            repeat  position/size */
}
```

Full shorthand order: `color image repeat attachment position/size`

## Gradients

### Linear gradient
```css
.box {
  background: linear-gradient(to right, #3498db, #8e44ad);
}
.box2 {
  background: linear-gradient(45deg, red, yellow, green);
}
```

### Radial gradient
```css
.box {
  background: radial-gradient(circle, #fff, #333);
}
```

## Multiple Backgrounds (layered)

```css
.box {
  background: 
    url('overlay.png') no-repeat center/cover,
    linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('photo.jpg') no-repeat center/cover;
}
```
Layers stack top to bottom in the order listed (first = topmost).

## Common Pattern: Hero Section with Dark Overlay

```css
.hero {
  background: 
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('banner.jpg') no-repeat center/cover;
  height: 400px;
  color: white;
}
```

## Key Takeaways

- `background-size: cover` is the most common choice for full-bleed hero images.
- Use the shorthand `background` property to combine image, repeat, position, and size cleanly.
- Gradients can be combined with images by layering multiple backgrounds.
