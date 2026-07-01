# 12 — Transform

The `transform` property lets you visually move, rotate, scale, or skew an element **without affecting document flow** (other elements don't shift around it).

## Translate (move)

```css
transform: translateX(20px);
transform: translateY(-10px);
transform: translate(20px, -10px); /* x, y together */
```

Common for centering elements precisely or creating hover-slide effects:
```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Scale (resize)

```css
transform: scale(1.5);      /* 150% size, both axes */
transform: scaleX(1.2);     /* widen only */
transform: scaleY(0.8);     /* squash only */
transform: scale(1.2, 0.8); /* x, y together */
```

Common for hover-grow effects on cards/buttons:
```css
.card:hover {
  transform: scale(1.05);
}
```

## Rotate

```css
transform: rotate(45deg);
transform: rotate(-90deg);
```

## Skew

```css
transform: skewX(20deg);
transform: skewY(10deg);
transform: skew(20deg, 10deg);
```

## Combining Multiple Transforms

```css
transform: translateX(20px) rotate(15deg) scale(1.1);
```
Order matters — transforms apply left to right, each affecting the result of the previous.

## `transform-origin` — pivot point for rotate/scale

```css
transform-origin: center;    /* default */
transform-origin: top left;
transform-origin: 0 0;
```

```css
.card {
  transform-origin: top left;
  transform: rotate(5deg); /* rotates around top-left corner instead of center */
}
```

## 3D Transforms

```css
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: perspective(500px) rotateY(30deg);
```

`perspective` gives 3D depth context — without it, 3D rotations look flat.

## Why Use Transform Instead of `top`/`left`/`width` for Animation?

`transform` (and `opacity`) are handled by the GPU and don't trigger layout recalculation — making them far more performant for animations than changing `top`, `left`, `width`, or `height`, which force the browser to recompute layout for every frame.

```css
/* ❌ Less performant — triggers layout recalculation every frame */
.box:hover { left: 20px; }

/* ✅ More performant — GPU-accelerated, no layout recalculation */
.box:hover { transform: translateX(20px); }
```

## Key Takeaways

- `transform` doesn't affect document flow — surrounding elements stay put.
- `translate`, `scale`, `rotate`, `skew` are the four core transform functions; combine them in one declaration.
- Prefer `transform`/`opacity` over `top`/`left`/`width` for animations — much better performance.
