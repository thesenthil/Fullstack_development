# 01 — HTML Basics & Document Structure

## What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the **structure** of a page using elements (tags), not how it looks (that's CSS's job).

## Basic Document Structure

Every HTML file starts with this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Breaking it down

| Part | Purpose |
|------|---------|
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 document |
| `<html lang="en">` | Root element; `lang` helps screen readers & SEO |
| `<head>` | Metadata — not visible on the page (title, charset, links to CSS/JS) |
| `<meta charset="UTF-8">` | Sets character encoding so symbols/emojis render correctly |
| `<meta name="viewport"...>` | Makes the page responsive on mobile devices |
| `<title>` | Text shown in the browser tab |
| `<body>` | Everything visible to the user goes here |

## Elements & Tags

An **element** = opening tag + content + closing tag.

```html
<p>This is the content</p>
```

- `<p>` → opening tag
- `This is the content` → content
- `</p>` → closing tag

Some elements are **self-closing** (no content, no closing tag needed):

```html
<br>
<hr>
<img src="photo.jpg" alt="A photo">
<input type="text">
```

## Attributes

Attributes give extra information about an element. They go inside the opening tag as `name="value"` pairs.

```html
<a href="https://example.com" target="_blank">Visit Site</a>
```

- `href` → the link destination
- `target="_blank"` → opens in a new tab

Common universal attributes: `id`, `class`, `style`, `title`, `data-*`, `lang`.

## Comments

```html
<!-- This is a comment, not shown on the page -->
```

## Nesting Rule

Elements must close in the reverse order they opened (like a stack):

```html
<!-- ✅ Correct -->
<div><p><strong>Text</strong></p></div>

<!-- ❌ Wrong — tags cross over -->
<div><p><strong>Text</p></strong></div>
```

## Key Takeaways

- HTML defines **structure**, not style.
- Always start with `<!DOCTYPE html>`.
- `<head>` = metadata, `<body>` = visible content.
- Tags must be properly nested and closed.
