# HTML Practice Exercises

Work through these in order. Try each one yourself first before checking the hint/solution approach.

## 1. Basic Page Skeleton
Create an HTML file with proper `<!DOCTYPE>`, `<html>`, `<head>` (with charset + viewport + title), and `<body>` containing an `<h1>` and one `<p>`.

## 2. Heading Hierarchy
Build a page outline for a recipe blog post using `<h1>`–`<h3>` correctly: page title → "Ingredients" section → "Method" section, each with appropriate sub-headings.

## 3. Text Formatting
Write a paragraph about your favorite hobby that includes: one `<strong>` word, one `<em>` word, an `<abbr>` with a tooltip, and a `<code>` snippet.

## 4. Links Practice
Create a small navigation with: one external link (opens in new tab, secure), one internal anchor link to a section further down the same page, one `mailto:` link, and one `tel:` link.

## 5. Image Gallery
Build a 3-image gallery using `<figure>` + `<figcaption>` for each image, all wrapped properly with meaningful `alt` text.

## 6. Lists Challenge
Create a nested unordered list representing a folder structure (e.g., a project folder with subfolders and files, 2 levels deep).

## 7. Table Builder
Build a table showing a weekly class schedule (days as columns, time slots as rows) using `<thead>`, `<tbody>`, and proper `scope` attributes.

## 8. Signup Form
Build a form with: text input (name), email input, password input, a `<select>` dropdown (country), 3 checkboxes (interests), and a submit button — all inputs properly labeled.

## 9. Semantic Page Layout
Convert a "div soup" layout into a fully semantic one using `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`.

```html
<!-- Starting point — refactor this -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="content">
  <div class="post">...</div>
  <div class="sidebar">...</div>
</div>
<div class="footer">...</div>
```

## 10. Media Embed
Embed one `<video>` (with `controls` and a `poster`) and one `<audio>` (with `controls`) on the same page.

## 11. Accessible Form Validation
Add `required`, `minlength`, `pattern`, and `aria-label` where appropriate to the form from exercise 8 so it's fully accessible and validates without JavaScript.

## 12. SVG Icon
Write an inline `<svg>` that draws a simple icon (e.g., a checkmark or a star) using `<path>` or basic shapes, sized with `viewBox`.

## 13. Mini Project — Personal Bio Card
Combine everything: a semantic page with `<header>` (your name + nav), `<main>` containing an `<article>` with a photo (`<figure>`), bio text, a skills `<ul>`, a contact `<form>`, and a `<footer>` with social links.

---
**Self-check questions after finishing:**
- Did you use exactly one `<h1>` per page?
- Does every image have meaningful `alt` text?
- Is every form input connected to a `<label>`?
- Did you choose semantic tags over generic `<div>`s wherever one existed?
