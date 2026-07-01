# 11 — Grid

CSS Grid is a **two-dimensional** layout system — controls rows AND columns simultaneously. Use Grid for overall page layout; use Flexbox for simpler 1D component layout (they work great together).

## Setup

```css
.container {
  display: grid;
}
```

## Defining Columns & Rows

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 fixed columns */
  grid-template-rows: 100px 100px;           /* 2 fixed rows */
  gap: 16px;
}
```

## The `fr` Unit (fractional space — the heart of Grid)

```css
grid-template-columns: 1fr 1fr 1fr; /* 3 equal-width columns */
grid-template-columns: 2fr 1fr;     /* first column is 2x the width of second */
grid-template-columns: 200px 1fr;   /* fixed sidebar + flexible main area */
```

## `repeat()` — avoid writing the same value over and over

```css
grid-template-columns: repeat(3, 1fr);        /* same as 1fr 1fr 1fr */
grid-template-columns: repeat(4, minmax(150px, 1fr));
```

## Responsive Grid Without Media Queries

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

This is one of Grid's most powerful patterns: columns automatically wrap and resize based on available space — no media query needed. `auto-fit` collapses empty tracks; `auto-fill` keeps them (useful when you want consistent track sizing even with fewer items).

## Placing Items Explicitly

```css
.item {
  grid-column: 1 / 3;  /* start at line 1, end at line 3 (spans 2 columns) */
  grid-row: 1 / 2;
}

/* shorthand using "span" */
.item {
  grid-column: span 2; /* spans 2 columns from current position */
}
```

## Named Grid Areas (highly readable layout technique)

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100vh;
}

.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

This visually represents the layout right in the CSS — extremely readable for full-page layouts.

## Alignment in Grid

```css
.container {
  justify-items: center;  /* horizontal alignment of items within their cells */
  align-items: center;    /* vertical alignment of items within their cells */
  justify-content: center; /* horizontal alignment of the whole grid within container */
  align-content: center;   /* vertical alignment of the whole grid within container */
}
```

## Common Real-World Pattern: Classic Holy Grail Layout

```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 16px;
}
```

## Grid vs Flexbox — When to Use Which

| | Flexbox | Grid |
|---|---------|------|
| Dimensions | One (row OR column) | Two (rows AND columns) |
| Best for | Navbars, button groups, card rows, centering | Full page layouts, image galleries, dashboards |
| Content-driven sizing | Items can dictate container size | Container defines structure, items fit into it |

They're not competitors — Grid for the overall page skeleton, Flexbox for component-level alignment inside each grid area.

## Key Takeaways

- `fr` unit + `repeat()` are the backbone of flexible Grid layouts.
- `repeat(auto-fit, minmax(...))` creates responsive grids with zero media queries.
- Named `grid-template-areas` makes complex page layouts self-documenting.
