# Project 4 — The Corporate Dashboard Layout

**Objective:** Structure a complex web application layout featuring a fixed sidebar, a top navigation bar, and a scrollable main content area using semantic HTML.

## Industry Requirements

- Use `<aside>` for the sidebar navigation.
- Use `<header>` for the top utility bar.
- Use `<main>` for the dynamic dashboard widgets.
- Ensure the layout fills the viewport height exactly without body scroll (only the main content area scrolls).

## Step 1 — Build the Semantic Skeleton

Constructing the skeleton of a web app requires careful placement of semantic tags. This structure ensures that even without CSS, the document flows logically.

```html
<div class="app-layout">
  <aside class="app-sidebar">
    <nav>
      <!-- Navigation Links -->
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#analytics">Analytics</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  </aside>

  <div class="app-wrapper">
    <header class="app-header">
      <!-- User Profile & Search -->
      <input type="search" placeholder="Search...">
      <div class="user-profile">Jane Doe</div>
    </header>

    <main class="app-content">
      <!-- Dashboard Data -->
      <h1>Dashboard</h1>
      <p>Widgets go here...</p>
    </main>
  </div>
</div>
```

This structural pattern is the standard for almost every modern admin panel, SaaS application, and internal tool interface.

## Step 2 — Lock the Layout to Viewport Height

The key requirement: the page itself shouldn't scroll — only `.app-content` should.

```css
* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  height: 100%;
  overflow: hidden; /* prevent the whole page from scrolling */
}

.app-layout {
  display: flex;
  height: 100vh;
}

.app-sidebar {
  width: 240px;
  flex-shrink: 0; /* never shrink the sidebar */
  background: #1e293b;
  color: white;
  padding: 20px;
  overflow-y: auto; /* sidebar scrolls independently if its content is long */
}

.app-wrapper {
  flex: 1; /* takes all remaining horizontal space */
  display: flex;
  flex-direction: column;
  min-width: 0; /* prevents flex children from overflowing */
}

.app-header {
  height: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid #e2e8f0;
  background: white;
}

.app-content {
  flex: 1; /* fills all remaining vertical space */
  overflow-y: auto; /* ONLY this scrolls */
  padding: 24px;
  background: #f8fafc;
}
```

## Step 3 — Sidebar Navigation Styling

```css
.app-sidebar nav ul {
  list-style: none;
}

.app-sidebar nav a {
  display: block;
  color: #cbd5e1;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 4px;
  transition: background 0.2s ease;
}

.app-sidebar nav a:hover {
  background: #334155;
  color: white;
}
```

## Step 4 — Make It Responsive (collapse sidebar on mobile)

```css
@media (max-width: 768px) {
  .app-sidebar {
    position: fixed;
    left: -240px; /* hidden off-screen by default */
    height: 100vh;
    z-index: 100;
    transition: left 0.3s ease;
  }
  .app-sidebar.open {
    left: 0;
  }
}
```

A JS toggle (adding/removing the `.open` class on a hamburger menu click) would reveal the sidebar on mobile.

## Why This Pattern Works

| Technique | Purpose |
|-----------|---------|
| `height: 100vh` on `.app-layout` | Locks the whole app to exactly the viewport height |
| `overflow: hidden` on `html, body` | Stops the outer page from ever scrolling |
| `flex-shrink: 0` on sidebar/header | Keeps fixed-size elements from being squashed by flexbox |
| `flex: 1` + `overflow-y: auto` on `.app-content` | Only the main content area scrolls independently |

## Key Takeaways

- Semantic structure (`<aside>`, `<header>`, `<main>`) makes the dashboard understandable even without CSS loaded.
- Locking `html, body` height + giving only `.app-content` `overflow-y: auto` is the standard trick for "app shell" layouts (Gmail, Slack, most SaaS dashboards use this pattern).
- `flex-shrink: 0` is essential on fixed-size flex children (sidebar, header) so they don't get compressed.
