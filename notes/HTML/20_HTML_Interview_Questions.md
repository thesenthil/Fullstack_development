# 20 — HTML Interview Questions

## Beginner Level

**1. What is HTML?**
HTML (HyperText Markup Language) is the standard markup language used to structure content on the web — defining elements like headings, paragraphs, links, and images.

**2. What is the difference between HTML elements and tags?**
A tag is the markup syntax itself (e.g., `<p>`), while an element is the tag plus its content and closing tag (e.g., `<p>Hello</p>`).

**3. What is the difference between `<div>` and `<span>`?**
`<div>` is a block-level container (full width, new line); `<span>` is an inline container (only as wide as its content, stays in line with surrounding text).

**4. What is semantic HTML? Give examples.**
HTML that conveys meaning about its content, not just appearance. Examples: `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>` vs meaningless `<div>`.

**5. What's the difference between `id` and `class`?**
`id` must be unique per page (one element only); `class` can be reused across multiple elements. `id` has higher CSS specificity.

**6. What does the `DOCTYPE` declaration do?**
`<!DOCTYPE html>` tells the browser to render the page in standards mode according to HTML5 rules, avoiding "quirks mode."

**7. Difference between `<b>` and `<strong>`, `<i>` and `<em>`?**
`<b>`/`<i>` are purely visual (bold/italic). `<strong>`/`<em>` carry semantic meaning (importance/emphasis) that's also conveyed to screen readers.

**8. What are void/self-closing elements? Name a few.**
Elements with no closing tag/content: `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>`.

## Intermediate Level

**9. What's the difference between `<section>` and `<div>`?**
`<section>` is semantic — represents a thematic grouping of content, usually with a heading. `<div>` has no meaning, used purely for styling/layout grouping.

**10. Explain the difference between `GET` and `POST` form methods.**
`GET` appends data to the URL (visible, bookmarkable, size-limited, used for non-sensitive reads like search). `POST` sends data in the request body (not visible in URL, no size limit, used for sensitive/large data submissions).

**11. What is the purpose of the `alt` attribute on `<img>`?**
Provides alternative text for screen readers and shown if the image fails to load; also used by search engines for image SEO.

**12. What's the difference between `localStorage`, `sessionStorage`, and cookies?** *(often asked alongside HTML)*
- `localStorage` — persists indefinitely, ~5-10MB, client-side only.
- `sessionStorage` — cleared when the tab closes, same size limits.
- `cookies` — small (~4KB), sent to server with every request, can have an expiry date.

**13. What is the difference between `<script>`, `<script async>`, and `<script defer>`?**
- `<script>` — blocks HTML parsing until downloaded and executed.
- `<script async>` — downloads in parallel, executes as soon as ready (order not guaranteed).
- `<script defer>` — downloads in parallel, executes after HTML parsing completes, in order.

**14. How do you make a website responsive using only HTML?**
Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — this alone enables proper mobile scaling; actual responsive layout still requires CSS.

**15. What is the difference between `<ol>` and `<ul>`?**
`<ol>` = ordered list (numbered, implies sequence). `<ul>` = unordered list (bulleted, no implied order).

## Advanced Level

**16. What is the Shadow DOM?**
A way to encapsulate a component's internal HTML/CSS so it doesn't leak into or get affected by the rest of the page's styles — used heavily in Web Components.

**17. What are data attributes (`data-*`) used for?**
Custom attributes to store extra information directly on HTML elements, accessible via JavaScript (`element.dataset.foo`), without polluting class names or needing extra DB calls.

```html
<button data-user-id="42" data-action="delete">Delete</button>
```

**18. What is the difference between `<iframe>` and embedding content directly?**
`<iframe>` loads an entirely separate, isolated document (own DOM, own JS context) inside your page — useful for third-party content but has performance/security tradeoffs (use `sandbox` for untrusted content).

**19. How does the browser handle malformed/invalid HTML?**
Browsers use error-correction algorithms to "fix" invalid markup as they parse it (auto-closing tags, reordering misplaced elements) rather than failing outright — this is part of the HTML5 parsing spec, but you shouldn't rely on it; always write valid markup.

**20. What's the difference between `<link>` and `<a>`?**
`<link>` (in `<head>`) connects external resources to the document (stylesheets, icons, fonts) and is not visible/clickable. `<a>` (anchor) creates a clickable hyperlink visible in the page body.

**21. Explain progressive enhancement vs graceful degradation.**
- **Progressive enhancement** — build a basic, functional experience first (works everywhere), then layer on advanced features for capable browsers.
- **Graceful degradation** — build the full-featured experience first, then ensure it still works (degrades acceptably) on older/less capable browsers.

**22. What is the critical rendering path?**
The sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on screen: parse HTML → build DOM → parse CSS → build CSSOM → combine into render tree → layout → paint.

---
*Tip: For interviews, be ready to explain not just "what" a tag does but "why" you'd choose it over alternatives — that's what distinguishes junior from mid-level answers.*
