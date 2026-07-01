# 01 — CSS Basics

## What is CSS?

CSS (Cascading Style Sheets) controls the **presentation** of HTML — colors, layout, fonts, spacing, animations. HTML = structure, CSS = style.

## Three Ways to Add CSS

### 1. Inline (on the element itself — avoid, hard to maintain)
```html
<p style="color: blue; font-size: 18px;">Styled text</p>
```

### 2. Internal (inside `<style>` in `<head>`)
```html
<head>
  <style>
    p { color: blue; font-size: 18px; }
  </style>
</head>
```

### 3. External (separate `.css` file — **best practice**)
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```
```css
/* style.css */
p {
  color: blue;
  font-size: 18px;
}
```

External stylesheets are reusable across multiple pages, cacheable by the browser, and keep structure (HTML) separate from style (CSS).

## Basic Syntax

```css
selector {
  property: value;
  property: value;
}
```

```css
h1 {
  color: #2563eb;
  font-size: 32px;
  text-align: center;
}
```

- **Selector** — what to style (e.g., `h1`, `.class`, `#id`)
- **Property** — what aspect to change (`color`, `margin`, `font-size`)
- **Value** — the setting (`red`, `20px`, `bold`)
- Each declaration ends with a semicolon `;`

## Comments

```css
/* This is a CSS comment */
p {
  color: red; /* inline comment too */
}
```

## The Cascade — How Conflicting Styles Are Resolved

When multiple rules target the same element, CSS resolves conflicts using:

1. **Importance** — `!important` overrides everything (use sparingly).
2. **Specificity** — more specific selectors win (IDs > classes > elements).
3. **Source order** — later rules override earlier ones if specificity is equal.

```css
p { color: blue; }
p { color: red; }   /* This wins — comes later, same specificity */
```

## Units Overview

| Unit | Type | Notes |
|------|------|-------|
| `px` | Absolute | Fixed pixel size |
| `%` | Relative | Relative to parent |
| `em` | Relative | Relative to parent's font-size |
| `rem` | Relative | Relative to root (`<html>`) font-size — preferred for consistency |
| `vw` / `vh` | Relative | Relative to viewport width/height (1vw = 1% of viewport width) |

```css
.box {
  width: 50%;      /* half of parent */
  font-size: 1.5rem; /* 1.5x root font size */
  padding: 2em;     /* 2x this element's font size */
}
```

## Key Takeaways

- External stylesheets (`<link>`) are the standard, maintainable approach.
- CSS rules follow the cascade: importance → specificity → source order.
- Prefer `rem` for font sizes and consistent spacing across a project.
