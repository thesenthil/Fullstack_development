# 18 — Accessibility (a11y)

Accessibility means building websites usable by everyone, including people using screen readers, keyboard-only navigation, or other assistive technology.

## Why It Matters

- **Ethical** — equal access to information for people with disabilities.
- **Legal** — many countries require accessible websites (ADA, WCAG compliance).
- **SEO** — accessible markup overlaps heavily with what search engines value.
- **Better UX for everyone** — good a11y practices (clear labels, keyboard support) improve usability broadly.

## 1. Use Semantic HTML First

The single biggest accessibility win is simply using the right tag for the job — `<button>` instead of a styled `<div>`, real headings instead of bold `<span>`s, etc. Semantic tags come with built-in keyboard support and screen reader behavior for free.

```html
<!-- ✅ Accessible by default -->
<button onclick="submitForm()">Submit</button>

<!-- ❌ Needs manual keyboard/ARIA work to behave like a button -->
<div onclick="submitForm()">Submit</div>
```

## 2. Alt Text for Images

```html
<img src="chart.png" alt="Bar chart showing 40% revenue growth in Q3">

<!-- decorative-only image — empty alt, hides it from screen readers -->
<img src="divider.png" alt="">
```

## 3. Labels for Form Inputs

```html
<label for="email">Email</label>
<input type="email" id="email" name="email">
```

Never rely on `placeholder` alone — it disappears once the user types and isn't reliably announced by all screen readers.

## 4. ARIA Attributes (when semantic HTML isn't enough)

ARIA (Accessible Rich Internet Applications) attributes add accessibility info when native HTML can't express it — for example, custom-built widgets (dropdowns, modals, tabs).

| Attribute | Purpose |
|-----------|---------|
| `role` | Defines what kind of element this is (e.g., `role="button"`, `role="dialog"`) |
| `aria-label` | Provides an accessible name when no visible text exists |
| `aria-labelledby` | Points to another element's `id` as the label |
| `aria-hidden="true"` | Hides purely decorative elements from screen readers |
| `aria-expanded` | Tells screen readers if a collapsible element is open/closed |
| `aria-live` | Announces dynamic content changes (e.g., live chat, notifications) |

```html
<button aria-label="Close menu" onclick="closeMenu()">✕</button>

<div role="alert" aria-live="assertive">
  Your form was submitted successfully!
</div>
```

> **First rule of ARIA: don't use ARIA if a native HTML element already does the job.** Use `<button>`, not `<div role="button">`, whenever possible.

## 5. Keyboard Navigation

All interactive elements must be reachable and usable via keyboard alone (Tab, Enter, Space, Arrow keys).

```html
<!-- Native elements are keyboard-accessible automatically -->
<a href="/page">Link</a>
<button>Click</button>
<input type="text">
```

Use `tabindex` carefully:
- `tabindex="0"` — adds element into natural tab order (use on custom interactive elements).
- `tabindex="-1"` — removes from tab order but allows programmatic focus.
- Avoid positive `tabindex` values (e.g., `tabindex="5"`) — they break natural tab order.

## 6. Color Contrast

Text must have sufficient contrast against its background (WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text). Don't rely on color alone to convey meaning (e.g., red/green for error/success — also add icons or text).

## 7. Focus Indicators

Never remove the visible focus outline (`outline: none;`) without providing a clear visual replacement — keyboard users rely on it to know where they are on the page.

```css
/* ❌ Bad — removes focus indicator entirely */
button:focus { outline: none; }

/* ✅ Good — custom but still visible */
button:focus { outline: 2px solid #2563eb; outline-offset: 2px; }
```

## 8. Skip Links

Let keyboard users skip repetitive navigation and jump straight to main content:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
...
<main id="main-content">...</main>
```

## Quick Accessibility Checklist

- [ ] Every image has meaningful `alt` text (or `alt=""` if decorative)
- [ ] Every form input has an associated `<label>`
- [ ] Heading levels are in logical order
- [ ] Page is fully usable with keyboard only (Tab/Enter/Space)
- [ ] Color contrast meets WCAG AA
- [ ] Focus states are visible
- [ ] Interactive elements use semantic tags (`<button>`, `<a>`) not bare `<div>`s

## Key Takeaways

- Semantic HTML is the foundation of accessibility — start there before reaching for ARIA.
- Labels, alt text, and keyboard support are the highest-impact, lowest-effort wins.
- ARIA fills gaps only where native HTML can't — it doesn't replace semantic markup.
