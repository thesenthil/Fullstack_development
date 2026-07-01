# 02 — Headings

HTML provides 6 levels of headings, `<h1>` through `<h6>`, used to define the hierarchy and structure of your content.

```html
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Minor Heading</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>
```

## Visual Result (default browser styling)

| Tag | Relative Size | Typical Use |
|-----|---------------|-------------|
| `<h1>` | Largest | Page title (use **once** per page) |
| `<h2>` | Large | Major sections |
| `<h3>` | Medium | Subsections |
| `<h4>` | Smaller | Sub-subsections |
| `<h5>` | Small | Rarely used |
| `<h6>` | Smallest | Rarely used |

## Rules & Best Practices

1. **Use only one `<h1>` per page** — it represents the main topic (important for SEO and accessibility).
2. **Don't skip levels** for styling reasons (e.g., don't jump from `<h2>` straight to `<h5>` just because it "looks right" — use CSS to change size instead).
3. Headings should reflect **document outline/structure**, not just visual size. Screen readers use headings to let users navigate the page.
4. Never use a heading tag just to make text bold/big — use CSS (`font-weight`, `font-size`) for that instead.

```html
<!-- ✅ Good structure -->
<h1>My Blog</h1>
  <h2>Travel</h2>
    <h3>Japan Trip</h3>
  <h2>Food</h2>
    <h3>Pasta Recipes</h3>

<!-- ❌ Bad — skips levels, misuses hierarchy -->
<h1>My Blog</h1>
<h5>Travel</h5>
<h2>Japan Trip</h2>
```

## Accessibility Tip

Screen reader users often jump between headings to scan a page (like a table of contents). A clean, logical heading order makes your site usable for everyone.

## Key Takeaways

- 6 levels: `h1` (most important) → `h6` (least important).
- One `h1` per page.
- Use headings for structure, not for visual styling — that's what CSS is for.
