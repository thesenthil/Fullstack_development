# 07 — Box Model

Every HTML element is a rectangular box made up of four layers, from inside out:

```
┌─────────────────────────────────────┐
│              margin                  │
│  ┌─────────────────────────────┐    │
│  │           border             │    │
│  │  ┌───────────────────────┐  │    │
│  │  │       padding          │  │    │
│  │  │  ┌─────────────────┐  │  │    │
│  │  │  │     content      │  │  │    │
│  │  │  └─────────────────┘  │  │    │
│  │  └───────────────────────┘  │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

| Layer | Purpose |
|-------|---------|
| **Content** | The actual text/image/element content |
| **Padding** | Space between content and border (inside the box) |
| **Border** | A line around the padding |
| **Margin** | Space outside the border, between this box and others |

## Width & Height

```css
.box {
  width: 300px;
  height: 200px;
}
```

By default, `width`/`height` apply only to the **content box** — padding and border are added on top, making the box visually bigger than the set size.

## Padding

```css
padding: 20px;                  /* all sides */
padding: 10px 20px;             /* vertical | horizontal */
padding: 10px 20px 15px 5px;    /* top | right | bottom | left (clockwise) */

padding-top: 10px;
padding-right: 20px;
padding-bottom: 15px;
padding-left: 5px;
```

## Border

```css
border: 2px solid #333;
/*      width style color */

border-width: 2px;
border-style: solid;    /* solid, dashed, dotted, double, none */
border-color: #333;
border-radius: 8px;     /* rounded corners */
border-radius: 50%;     /* makes a square element a perfect circle */
```

## Margin

```css
margin: 20px;
margin: 10px 20px;             /* vertical | horizontal */
margin: 10px 20px 15px 5px;    /* top | right | bottom | left */
margin: 0 auto;                /* centers a block element horizontally */
```

### Margin Collapsing (important gotcha!)

When two vertical margins meet (e.g., bottom margin of one element + top margin of the next), they **collapse** into a single margin equal to the larger of the two — they don't add up.

```css
.box1 { margin-bottom: 30px; }
.box2 { margin-top: 20px; }
/* Actual gap between them = 30px (not 50px) */
```

This only happens with vertical margins of normal-flow block elements — it doesn't apply to flex/grid children, padding, or horizontal margins.

## `box-sizing` — The Most Important Box Model Property

```css
/* Default — width/height apply to content only; padding/border ADD to total size */
.box { box-sizing: content-box; }

/* width/height INCLUDE padding and border — much more predictable */
.box { box-sizing: border-box; }
```

**Best practice — apply globally at the top of every project:**
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

### Example: Why `border-box` Matters

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

| `box-sizing` | Actual rendered width |
|--------------|------------------------|
| `content-box` (default) | 300 + 20×2 + 5×2 = **350px** |
| `border-box` | exactly **300px** (padding/border eat into the content area) |

`border-box` makes layouts far more predictable, which is why almost every modern CSS reset sets it globally.

## Key Takeaways

- Box model layers: content → padding → border → margin.
- Vertical margins between block elements **collapse** (don't add).
- Always set `box-sizing: border-box` globally — it makes width/height calculations sane.
