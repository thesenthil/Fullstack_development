# 08 — Tables

Tables display tabular (grid-like) data — rows and columns. **Never use tables for page layout** — that's what CSS Flexbox/Grid are for.

## Basic Structure

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>28</td>
      <td>NYC</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>34</td>
      <td>LA</td>
    </tr>
  </tbody>
</table>
```

## Element Reference

| Tag | Purpose |
|-----|---------|
| `<table>` | Wraps the whole table |
| `<thead>` | Header section |
| `<tbody>` | Body section (main data) |
| `<tfoot>` | Footer section (totals, summaries) |
| `<tr>` | Table row |
| `<th>` | Header cell (bold, centered by default) |
| `<td>` | Data cell |
| `<caption>` | Table title/description |
| `<colgroup>` / `<col>` | Style entire columns |

## Caption

```html
<table>
  <caption>Monthly Sales Report</caption>
  ...
</table>
```

## Footer Example

```html
<table>
  <thead>
    <tr><th>Item</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Coffee</td><td>$4</td></tr>
    <tr><td>Sandwich</td><td>$8</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>$12</td></tr>
  </tfoot>
</table>
```

## Merging Cells

### `colspan` — merge across columns
```html
<tr>
  <td colspan="2">Spans two columns</td>
</tr>
```

### `rowspan` — merge across rows
```html
<tr>
  <td rowspan="2">Spans two rows</td>
  <td>Row 1, Col 2</td>
</tr>
<tr>
  <td>Row 2, Col 2</td>
</tr>
```

## Accessibility — `scope` Attribute

Use `scope` on `<th>` to tell screen readers whether a header applies to a row or column:

```html
<th scope="col">Name</th>
<th scope="row">Total</th>
```

## Key Takeaways

- `<table>` → `<thead>`/`<tbody>`/`<tfoot>` → `<tr>` → `<th>`/`<td>`.
- Use `<caption>` for a table title and `scope` for accessibility.
- `colspan`/`rowspan` merge cells.
- Never use tables for visual page layout — use CSS Grid/Flexbox instead.
