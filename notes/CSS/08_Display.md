# 08 — Display

The `display` property is the single most important property for controlling layout behavior — it determines how an element generates boxes.

## Core Values

```css
display: block;
display: inline;
display: inline-block;
display: none;
display: flex;
display: grid;
```

## `block`

- Takes the full width available.
- Always starts on a new line.
- Respects `width`, `height`, `margin`, `padding` fully.
- Examples: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<ul>`.

```css
.box { display: block; }
```

## `inline`

- Takes only as much width as its content needs.
- Does **not** start on a new line — flows with surrounding text.
- `width`/`height` are **ignored**. Vertical `margin`/`padding` don't push surrounding content (though they still render visually).
- Examples: `<span>`, `<a>`, `<strong>`, `<em>`.

```css
.box { display: inline; }
```

## `inline-block`

- Best of both: flows inline (doesn't force a new line) **but** respects `width`, `height`, and full margin/padding.
- Common for nav items, buttons, badges sitting in a row.

```css
.nav-item { display: inline-block; width: 100px; padding: 10px; }
```

## `none`

- Completely removes the element from the page — no space reserved, not in the layout at all (different from `visibility: hidden`, which hides it but keeps its space).

```css
.hidden { display: none; }
```

```css
/* Comparison */
.a { display: none; }       /* gone entirely, no space reserved */
.b { visibility: hidden; }  /* invisible but space still reserved */
```

## `flex` and `grid`

Turn the element into a **flex container** or **grid container**, changing how its direct children are laid out. (Covered fully in `10_Flexbox.md` and `11_Grid.md`.)

```css
.container { display: flex; }
.container { display: grid; }
```

## Quick Comparison Table

| Value | New line? | Respects width/height? | Common use |
|-------|-----------|--------------------------|------------|
| `block` | Yes | Yes | Layout containers, paragraphs |
| `inline` | No | No | Text-level styling |
| `inline-block` | No | Yes | Buttons, nav items, badges |
| `none` | N/A (removed) | N/A | Toggling visibility/hidden content |
| `flex` | Yes (as container) | Yes | 1D layouts (rows/columns) |
| `grid` | Yes (as container) | Yes | 2D layouts (rows AND columns) |

## Changing an Element's Default Display

Every HTML element has a default `display` value, but you can override it:

```css
li { display: inline-block; }  /* turns list items into a horizontal row */
a  { display: block; }          /* makes a link fill its container, full clickable area */
```

## Key Takeaways

- `block` = full width, new line; `inline` = content width, no new line, ignores width/height; `inline-block` = combines both benefits.
- `display: none` removes the element from layout entirely — unlike `visibility: hidden`.
- `flex`/`grid` unlock powerful modern layout systems for an element's children.
