# 09 — Position

The `position` property controls how an element is placed in the document, working together with `top`, `right`, `bottom`, `left`, and `z-index`.

## Values

### `static` (default)
Normal document flow. `top`/`left`/etc. have no effect.

```css
.box { position: static; }
```

### `relative`
Stays in normal flow, but can be nudged from its original position using `top`/`right`/`bottom`/`left`. The space it originally occupied is **preserved** (other elements don't move in to fill it).

```css
.box {
  position: relative;
  top: 10px;   /* nudges 10px down from its normal spot */
  left: 20px;  /* nudges 20px right */
}
```

Also commonly used just to establish a **positioning context** for an absolutely positioned child (see below) — without offsetting itself at all.

### `absolute`
Removed from normal flow entirely (other elements behave as if it's not there). Positioned relative to the **nearest ancestor with `position` other than `static`** (or the `<html>` viewport if none exists).

```css
.parent {
  position: relative; /* establishes positioning context */
}
.child {
  position: absolute;
  top: 0;
  right: 0; /* pins to top-right corner of .parent */
}
```

This **parent-relative + child-absolute** pattern is extremely common — e.g., a badge in the corner of a card, a close button in a modal.

### `fixed`
Removed from normal flow. Positioned relative to the **browser viewport** — stays in place even when the page scrolls.

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

### `sticky`
Hybrid of `relative` and `fixed`. Behaves like `relative` until the scroll position crosses a threshold, then "sticks" like `fixed` within its parent's bounds.

```css
.section-header {
  position: sticky;
  top: 0; /* sticks to the top of viewport once scrolled into that position */
}
```

## `z-index` — Stacking Order

Only works on positioned elements (`position` ≠ `static`). Higher values appear on top.

```css
.modal {
  position: fixed;
  z-index: 1000;
}
.overlay {
  position: fixed;
  z-index: 999;
}
```

## Quick Comparison Table

| Value | In normal flow? | Positioned relative to | Common use |
|-------|------------------|--------------------------|------------|
| `static` | Yes | N/A | Default |
| `relative` | Yes (space reserved) | Its own original position | Minor nudges, positioning context for children |
| `absolute` | No | Nearest positioned ancestor | Badges, dropdowns, tooltips, modals |
| `fixed` | No | Viewport | Sticky navbars, floating action buttons |
| `sticky` | Yes (until threshold) | Nearest scrolling ancestor | Sticky table headers, section nav |

## Common Pattern: Centering an Absolute Element

```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Key Takeaways

- `relative` + `absolute` on a child is the standard pattern for precisely positioned UI elements within a container.
- `fixed` pins to the viewport; `sticky` pins within its scrolling parent only after a scroll threshold.
- `z-index` only works on positioned elements (not `static`).
