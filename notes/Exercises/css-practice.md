# CSS Practice Exercises

Work through these in order, building on the HTML files from `html-practice.md` where relevant.

## 1. Reset & Variables Setup
Create a `style.css` starting with a universal `box-sizing: border-box` reset and a `:root` block defining at least 5 CSS variables (colors, spacing, radius, font).

## 2. Selector Practice
Given this HTML, write CSS that: makes all direct `<li>` children of `.menu` have a bottom border, makes every 3rd card a different background color, and styles only links that open in a new tab.
```html
<ul class="menu">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<div class="card"></div><div class="card"></div><div class="card"></div>
<a href="#" target="_blank">External</a>
```

## 3. Box Model Debug
Given a `.box` with `width: 300px; padding: 20px; border: 5px solid black;`, calculate its rendered width under `content-box` vs `border-box`. Then write the CSS to make it render at exactly 300px total.

## 4. Color & Background
Build a hero section with a linear gradient background, white centered text, and a semi-transparent dark overlay using a layered `background` (gradient + image).

## 5. Typography System
Define a type scale using `rem` and `clamp()`: `h1`, `h2`, `h3`, `p`, and `small`, each with appropriate `font-size`, `line-height`, and `font-weight`.

## 6. Flexbox: Navbar
Build a navbar with a logo on the left and nav links on the right, vertically centered, using Flexbox (no floats, no absolute positioning).

## 7. Flexbox: Equal-Height Cards
Build a row of 3 cards that are always equal width and equal height regardless of content length, with even gaps between them.

## 8. Grid: Responsive Gallery
Build an image gallery grid that automatically reflows from 1 column (mobile) to 4 columns (desktop) **without writing a single media query** (hint: `auto-fit` + `minmax`).

## 9. Grid: Page Layout
Build a full-page layout with header, sidebar, main content, and footer using `grid-template-areas`.

## 10. Position: Badge on a Card
Style a product card with a "Sale" badge pinned to the top-right corner using `position: relative` on the card and `position: absolute` on the badge.

## 11. Position: Sticky Header
Make a section header stick to the top of the viewport once scrolled to, using `position: sticky`.

## 12. Transition: Button Hover
Style a button that smoothly changes background color AND lifts up slightly (`translateY`) on hover, using a single `transition` shorthand for both properties.

## 13. Animation: Loading Spinner
Build a CSS-only spinning loader using `@keyframes` and `animation: ... infinite`.

## 14. Responsive: Mobile-First Layout
Take the page layout from exercise 9 and make it mobile-first: stacked on mobile, full grid layout from `768px` up.

## 15. Dark Mode Toggle (CSS Variables)
Build a light/dark theme system using CSS variables on `:root` and an override block for `[data-theme="dark"]`, applied to at least background, text, and border colors.

## 16. Mini Project — Pricing Card Component
Combine everything: a responsive pricing card with a badge, gradient header, flexbox-aligned price, hover lift transition, and dark mode support.

---
**Self-check questions after finishing:**
- Did you set `box-sizing: border-box` globally before anything else?
- Did you use `rem`/`%`/`fr` instead of hardcoded `px` for sizing where it matters?
- Could you explain *why* you chose Flexbox vs Grid for each layout exercise?
- Did any animation only ever touch `transform`/`opacity` for performance?
