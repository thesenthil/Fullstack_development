# 10 — Flexbox

Flexbox (Flexible Box Layout) is a **one-dimensional** layout system — arranges items in a row OR a column, with powerful alignment and distribution control.

## Setup

```css
.container {
  display: flex;
}
```

This turns `.container` into a **flex container**; its direct children become **flex items** automatically.

## Container Properties (apply to the parent)

### `flex-direction` — main axis direction
```css
flex-direction: row;            /* default — left to right */
flex-direction: row-reverse;
flex-direction: column;         /* top to bottom */
flex-direction: column-reverse;
```

### `justify-content` — alignment along the main axis
```css
justify-content: flex-start;    /* default — items packed at start */
justify-content: flex-end;
justify-content: center;
justify-content: space-between; /* even space BETWEEN items, none at edges */
justify-content: space-around;  /* even space around each item */
justify-content: space-evenly;  /* perfectly even space everywhere */
```

### `align-items` — alignment along the cross axis
```css
align-items: stretch;     /* default — fills container height */
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: baseline;
```

### `flex-wrap` — allow items to wrap to new lines
```css
flex-wrap: nowrap;   /* default — forces items onto one line, shrinks them */
flex-wrap: wrap;      /* items wrap to next line when out of space */
```

### `gap` — spacing between items (modern, preferred over margins)
```css
gap: 16px;
gap: 16px 24px; /* row-gap column-gap */
```

### `align-content` — aligns multiple wrapped lines (only relevant with `flex-wrap: wrap`)
```css
align-content: space-between;
```

## Item Properties (apply to the children)

### `flex-grow` — how much an item grows to fill extra space
```css
.item { flex-grow: 1; } /* takes up all available extra space */
```

### `flex-shrink` — how much an item shrinks when space is tight
```css
.item { flex-shrink: 0; } /* never shrinks below its base size */
```

### `flex-basis` — the item's starting size before grow/shrink is applied
```css
.item { flex-basis: 200px; }
```

### `flex` shorthand
```css
flex: 1;            /* grow:1 shrink:1 basis:0 — equally share all space */
flex: 1 0 200px;     /* grow:1 shrink:0 basis:200px */
flex: none;          /* don't grow or shrink at all */
```

### `align-self` — override `align-items` for one specific item
```css
.item { align-self: flex-end; }
```

### `order` — visually reorder items without changing HTML
```css
.item-last { order: 1; }  /* default order is 0; higher = later */
```

## Common Real-World Patterns

### Perfectly centered content (both axes)
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### Navbar with logo left, links right
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Equal-width 3-column cards
```css
.cards {
  display: flex;
  gap: 20px;
}
.card {
  flex: 1; /* each card takes equal share of space */
}
```

### Sticky footer (footer always at bottom even on short pages)
```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1; /* pushes footer down by filling remaining space */
}
```

## Key Takeaways

- Flexbox is one-dimensional — great for rows/columns of items (navbars, card rows, centering).
- `justify-content` = main axis; `align-items` = cross axis.
- `flex: 1` is the most common shorthand for "share remaining space equally."
- Use `gap` instead of margins for spacing between flex items — cleaner, no edge-case margin issues.
