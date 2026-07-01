# 03 — Paragraphs

The `<p>` element defines a paragraph of text — a block of content.

```html
<p>This is a paragraph. Browsers automatically add space before and after it.</p>
<p>This is another, separate paragraph.</p>
```

## Key Behaviors

- `<p>` is a **block-level element** — it always starts on a new line and takes up the full width available.
- Browsers automatically add margin above and below each `<p>`.
- You **cannot nest** block-level elements like `<div>` or another `<p>` inside a `<p>` (invalid HTML), but inline elements like `<strong>`, `<em>`, `<a>` are fine.

```html
<!-- ✅ Valid -->
<p>This text has <strong>bold</strong> and <em>italic</em> words.</p>

<!-- ❌ Invalid — block element inside a paragraph -->
<p>Some text <div>A div</div> more text</p>
```

## Line Breaks vs Paragraphs

Don't use multiple `<br>` tags to fake paragraph spacing — use separate `<p>` tags instead.

```html
<!-- ❌ Bad practice -->
<p>Line one<br><br>Line two</p>

<!-- ✅ Good practice -->
<p>Line one</p>
<p>Line two</p>
```

Use `<br>` only for genuine line breaks within the same logical block, like a mailing address or poem line:

```html
<p>
  123 Main Street<br>
  Springfield, USA
</p>
```

## Whitespace Handling

HTML collapses multiple spaces/line breaks in source code into a single space when rendered:

```html
<p>This    has     extra      spaces.</p>
<!-- Renders as: This has extra spaces. -->
```

To preserve exact spacing/line breaks, use the `<pre>` tag (covered in Formatting Tags).

## Key Takeaways

- `<p>` = block-level paragraph of text.
- Don't nest block elements inside `<p>`.
- Use separate `<p>` tags for separate paragraphs, not stacked `<br>` tags.
- Whitespace in HTML source is collapsed when rendered.
