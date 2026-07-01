# 05 — Text

Properties controlling how text content is displayed (separate from font choice, which is in `06_Fonts.md`).

## Text Color & Alignment

```css
color: #333;
text-align: left;    /* left, right, center, justify */
```

## Text Decoration

```css
text-decoration: underline;
text-decoration: line-through;
text-decoration: none;          /* commonly used to remove default link underline */
text-decoration: underline wavy red;  /* shorthand: line + style + color */
```

## Text Transform

```css
text-transform: uppercase;   /* HELLO WORLD */
text-transform: lowercase;   /* hello world */
text-transform: capitalize;  /* Hello World */
text-transform: none;        /* default */
```

## Letter & Word Spacing

```css
letter-spacing: 2px;   /* space between letters */
word-spacing: 5px;     /* space between words */
```

## Line Height

```css
line-height: 1.5;    /* unitless = multiplier of font-size (preferred) */
line-height: 24px;   /* fixed pixel value */
```

Unitless values are preferred because they scale properly when font-size changes, and they're inherited as a ratio (not a fixed pixel value) by child elements.

## White Space Handling

```css
white-space: normal;    /* default — collapses spaces, wraps text */
white-space: nowrap;    /* prevents text from wrapping */
white-space: pre;       /* preserves whitespace and line breaks exactly */
white-space: pre-wrap;  /* preserves whitespace, but still wraps */
```

## Text Overflow (truncating with ellipsis)

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
This 3-property combo is the standard recipe for "Lorem ipsum dolor sit..." truncation.

## Word Break / Overflow Wrap

```css
word-break: break-all;     /* break mid-word if needed (e.g. long URLs) */
overflow-wrap: break-word; /* break only when a word is too long to fit */
```

## Text Shadow

```css
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
/*           x-off y-off blur  color */
```

## Vertical Align (for inline/inline-block elements)

```css
vertical-align: middle;
vertical-align: top;
vertical-align: baseline; /* default */
```

## Text Indent

```css
text-indent: 30px; /* indents only the first line of a block */
```

## Key Takeaways

- Use unitless `line-height` for predictable, scalable spacing.
- The ellipsis-truncation trio (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`) is essential for card/list UI.
- `text-transform` changes display only — the underlying text content is unchanged (important for accessibility/copy-paste).
