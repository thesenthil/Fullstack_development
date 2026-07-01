# Project 3 — CSS Custom Properties Dark Mode System

**Objective:** Architect a scalable theming system using CSS variables (custom properties) to toggle seamlessly between Light and Dark UI modes.

## Industry Requirements

- Define all semantic colors (e.g., `text-primary`, `bg-surface`) at the `:root` level.
- Override the variables within a `[data-theme="dark"]` attribute selector.
- Respect the user's OS preference using the `prefers-color-scheme` media query.

## Step 1 — Stop Hardcoding Colors. Abstract into Variables

Hardcoding hex values directly on elements means changing your color scheme later requires hunting down every instance. Instead, define the palette once and reference it everywhere.

```css
/* 1. Define the base light theme */
:root {
  --bg-base: #ffffff;
  --bg-surface: #f8fafc;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --accent: #2563eb;
  --border: #e2e8f0;
}

/* 2. Define the dark theme overrides */
[data-theme="dark"] {
  --bg-base: #0f172a;
  --bg-surface: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent: #38bdf8;
  --border: #334155;
}

/* 3. Apply variables to components — never hardcode colors directly */
body {
  background-color: var(--bg-base);
  color: var(--text-main);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px;
}

a {
  color: var(--accent);
}

.text-muted {
  color: var(--text-muted);
}
```

A single state change (`data-theme="dark"`) instantly repaints the entire DOM — no per-component JavaScript dark mode logic needed.

## Step 2 — Respect OS-Level Preference Automatically

```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-base: #0f172a;
    --bg-surface: #1e293b;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent: #38bdf8;
    --border: #334155;
  }
}
```

This pattern means: "use dark theme automatically if the OS prefers it, **unless** the user has explicitly chosen light mode via `data-theme='light'`." It respects both system preference and manual user override.

## Step 3 — Toggle Button with JavaScript

```html
<button id="theme-toggle">🌓 Toggle Theme</button>
```

```js
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved preference on page load
const saved = localStorage.getItem('theme');
if (saved) root.setAttribute('data-theme', saved);

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
});
```

## Step 4 — Smooth Transition Between Themes

```css
body, .card, input, button {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

Without this, the theme switch feels abrupt — a short transition on color-related properties makes it feel polished.

## Key Takeaways

- Define semantic variable **names** (`--text-main`, `--bg-surface`) rather than color-literal names (`--blue`, `--dark-gray`) — this lets the same variable mean different actual colors per theme.
- `[data-theme="dark"]` attribute selector + `:root` variable overrides is the standard scalable pattern for theming.
- Combine with `prefers-color-scheme` to respect OS settings by default, while still allowing manual override.
- Add a short `transition` on color properties so theme switching feels smooth, not jarring.
