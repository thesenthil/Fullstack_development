# 11 — Semantic Tags

Semantic elements clearly describe their meaning to both the browser and the developer — unlike generic `<div>`/`<span>`, which carry no meaning.

## Why Semantics Matter

1. **Accessibility** — screen readers use semantic tags to help users navigate (e.g., "jump to navigation", "jump to main content").
2. **SEO** — search engines weigh semantic structure when ranking/understanding pages.
3. **Readability** — code is self-documenting; other developers (and future you) understand the layout instantly.

## Page Layout Semantic Tags

```html
<body>
  <header>
    <h1>Site Title</h1>
    <nav>...</nav>
  </header>

  <main>
    <article>
      <h2>Blog Post Title</h2>
      <section>
        <h3>Introduction</h3>
        <p>...</p>
      </section>
    </article>

    <aside>
      <h3>Related Links</h3>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 My Site</p>
  </footer>
</body>
```

## Reference Table

| Tag | Meaning |
|-----|---------|
| `<header>` | Introductory content — logo, title, nav (can be used per-page or per-section) |
| `<nav>` | Navigation links block |
| `<main>` | The primary, unique content of the page (only one per page) |
| `<article>` | Self-contained, independently distributable content (blog post, news article, forum post) |
| `<section>` | A thematic grouping of content, usually with its own heading |
| `<aside>` | Tangentially related content — sidebars, pull quotes, ads |
| `<footer>` | Footer content — copyright, links, contact info |
| `<figure>` + `<figcaption>` | Self-contained media (image/chart) with a caption |
| `<details>` + `<summary>` | Native expand/collapse widget |
| `<time>` | Machine-readable date/time |
| `<address>` | Contact info for the page/article author |

## `<section>` vs `<article>` vs `<div>`

- **`<article>`** — could stand alone if pulled out of the page (e.g., a blog post, a product card).
- **`<section>`** — a meaningful, themed chunk of a page, usually has its own heading; doesn't necessarily make sense in isolation.
- **`<div>`** — no meaning at all; pure layout/styling container, use only when no semantic tag fits.

```html
<article>
  <h2>How to Learn CSS</h2>
  <section>
    <h3>Step 1: Basics</h3>
    <p>...</p>
  </section>
  <section>
    <h3>Step 2: Layout</h3>
    <p>...</p>
  </section>
</article>
```

## `<details>` / `<summary>` — Native Accordion

```html
<details>
  <summary>Click to expand FAQ</summary>
  <p>Here is the hidden answer content, shown when expanded.</p>
</details>
```

No JavaScript needed — the browser handles open/close natively.

## `<time>` — Machine-Readable Dates

```html
<p>Published on <time datetime="2026-06-21">June 21, 2026</time>.</p>
```

The `datetime` attribute lets browsers/search engines parse the actual date, even if the visible text is formatted differently.

## Key Takeaways

- Use semantic tags whenever a meaningful one exists; fall back to `<div>`/`<span>` only for pure styling hooks.
- One `<main>` per page; `<header>`/`<footer>` can appear multiple times (e.g., per `<article>`).
- `<article>` = standalone content, `<section>` = themed chunk, `<div>` = no meaning.
