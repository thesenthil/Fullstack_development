# 02 — Selectors

Selectors determine **which elements** a CSS rule applies to.

## Basic Selectors

```css
/* Universal selector — every element */
* { margin: 0; padding: 0; }

/* Type/element selector */
p { color: black; }

/* Class selector — reusable, dot prefix */
.highlight { background: yellow; }

/* ID selector — unique, hash prefix */
#header { background: navy; }

/* Grouping selector — apply same rule to multiple */
h1, h2, h3 { font-family: sans-serif; }
```

## Combinators

```css
/* Descendant — any nested level */
div p { color: gray; }

/* Child — direct children only */
div > p { color: gray; }

/* Adjacent sibling — immediately after */
h2 + p { font-weight: bold; }

/* General sibling — any sibling after */
h2 ~ p { color: green; }
```

```html
<div>
  <p>Selected by "div p" and "div > p"</p>
  <span><p>Selected by "div p" only (not a direct child)</p></span>
</div>
<h2>Title</h2>
<p>Selected by "h2 + p" and "h2 ~ p"</p>
<p>Selected by "h2 ~ p" only (not adjacent)</p>
```

## Attribute Selectors

```css
input[type="text"] { border: 1px solid gray; }
a[target="_blank"] { color: orange; }
a[href^="https"] { color: green; }   /* starts with */
a[href$=".pdf"] { color: red; }      /* ends with */
a[href*="example"] { color: blue; }  /* contains */
```

## Pseudo-Classes (state-based)

```css
a:hover { color: red; }
button:active { transform: scale(0.95); }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(2) { background: lightgray; }
li:nth-child(odd) { background: #f0f0f0; }
li:nth-child(even) { background: #e0e0e0; }
input:checked { accent-color: green; }
input:disabled { opacity: 0.5; }
p:not(.special) { color: gray; }
```

## Pseudo-Elements (target a part of an element)

```css
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; }
.quote::before { content: "“"; }
.quote::after { content: "”"; }
input::placeholder { color: lightgray; }
```

```html
<p class="quote">This is a famous quote</p>
```
```css
.quote::before { content: open-quote; }
.quote::after { content: close-quote; }
```

## Specificity (which rule wins?)

Specificity is calculated as a weighted score (roughly: inline > ID > class/attribute/pseudo-class > element).

| Selector Type | Specificity Weight |
|----------------|---------------------|
| Inline style | 1000 |
| ID (`#id`) | 100 |
| Class/attribute/pseudo-class (`.class`, `[type]`, `:hover`) | 10 |
| Element/pseudo-element (`p`, `::before`) | 1 |
| Universal (`*`) | 0 |

```css
p { color: blue; }              /* specificity: 1 */
.text { color: green; }         /* specificity: 10 — wins over above */
#main { color: red; }           /* specificity: 100 — wins over above */
```

Higher specificity always wins, regardless of source order. Equal specificity → last rule in the source wins.

## Key Takeaways

- Combinators (`space`, `>`, `+`, `~`) control how deeply/widely a selector matches.
- Pseudo-classes target **states** (`:hover`, `:focus`); pseudo-elements target **parts** (`::before`, `::first-line`).
- Specificity score determines which conflicting rule wins — IDs beat classes beat elements.
