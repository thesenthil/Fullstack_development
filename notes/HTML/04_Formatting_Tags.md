# 04 — Text Formatting Tags

Inline tags used to style or give meaning to small pieces of text within a block.

## Bold & Strong

```html
<b>Bold text (visual only, no extra meaning)</b>
<strong>Important text (semantic — screen readers emphasize it)</strong>
```

> Use `<strong>` when the content is genuinely important. Use `<b>` only for stylistic bolding with no special importance (rare in modern HTML — usually CSS `font-weight` is better).

## Italic & Emphasis

```html
<i>Italic text (visual only — e.g. technical term, foreign word)</i>
<em>Emphasized text (semantic — changes meaning, like vocal stress)</em>
```

## Other Common Formatting Tags

| Tag | Purpose | Example Output |
|-----|---------|-----------------|
| `<mark>` | Highlighted text | <mark>highlighted</mark> |
| `<small>` | Smaller, fine-print text | small disclaimer text |
| `<del>` | Deleted/strikethrough text | ~~old price~~ |
| `<ins>` | Inserted/underlined text | new added text |
| `<sub>` | Subscript | H<sub>2</sub>O |
| `<sup>` | Superscript | x<sup>2</sup> |
| `<code>` | Inline code snippet | `const x = 5;` |
| `<pre>` | Preformatted text (preserves whitespace/line breaks) | multi-line code blocks |
| `<blockquote>` | Long quotation (block-level) | indented quote |
| `<q>` | Short inline quotation | adds quotation marks automatically |
| `<abbr>` | Abbreviation with tooltip | `<abbr title="HyperText Markup Language">HTML</abbr>` |
| `<cite>` | Citation/reference title | *The Great Gatsby* |
| `<kbd>` | Keyboard input | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| `<samp>` | Sample program output | `Error: file not found` |
| `<var>` | Variable name in math/code | *x* + *y* = *z* |

## Examples in Context

```html
<p>Use <code>console.log()</code> to debug your code.</p>

<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>

<p>The price is <del>$50</del> <ins>$35</ins> today only!</p>

<p>Water is <sub>H</sub>2<sub>O</sub> — wait, that's wrong, it's H<sub>2</sub>O.</p>

<blockquote cite="https://example.com">
  The only way to do great work is to love what you do.
</blockquote>

<p>According to <abbr title="World Health Organization">WHO</abbr>, ...</p>
```

## `<pre>` Preserves Formatting

```html
<pre>
function add(a, b) {
    return a + b;
}
</pre>
```

Everything inside `<pre>` — spaces, tabs, line breaks — is shown exactly as typed, in a monospace font.

## Key Takeaways

- Prefer **semantic** tags (`<strong>`, `<em>`) over purely visual ones (`<b>`, `<i>`) when meaning matters.
- `<code>` + `<pre>` are essential for showing code in documentation.
- `<mark>`, `<del>`, `<ins>` are great for highlighting changes/edits.
