# 14 — Iframe

The `<iframe>` (inline frame) embeds another HTML document inside the current page — commonly used for YouTube videos, Google Maps, embedded payment forms, etc.

## Basic Usage

```html
<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  width="560" 
  height="315" 
  title="YouTube video player">
</iframe>
```

## Key Attributes

| Attribute | Purpose |
|-----------|---------|
| `src` | URL of the page to embed |
| `width` / `height` | Dimensions in pixels |
| `title` | **Required for accessibility** — describes the iframe content to screen readers |
| `allow` | Permissions policy (e.g., `fullscreen`, `camera`, `microphone`) |
| `allowfullscreen` | Allows the embedded content to go fullscreen |
| `loading` | `lazy` defers loading offscreen iframes |
| `sandbox` | Restricts what the embedded content can do (security) |
| `referrerpolicy` | Controls what referrer info is sent |

## Embedding a Google Map

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style="border:0;"
  loading="lazy"
  title="Office location map">
</iframe>
```

## Security — `sandbox`

The `sandbox` attribute restricts the embedded page's capabilities (no scripts, no forms, no popups, etc., unless explicitly allowed):

```html
<iframe src="untrusted-page.html" sandbox></iframe>

<!-- Allow specific things only -->
<iframe src="page.html" sandbox="allow-scripts allow-same-origin"></iframe>
```

⚠️ Only embed content from sources you trust. Iframes from untrusted sources are a common attack vector (clickjacking, malicious scripts).

## Common Sandbox Values

| Value | Allows |
|-------|--------|
| `allow-scripts` | JavaScript execution |
| `allow-forms` | Form submission |
| `allow-same-origin` | Treat embedded content as same-origin |
| `allow-popups` | Opening new windows/tabs |
| `allow-fullscreen` | Fullscreen API |

## Responsive Iframe (CSS trick)

```html
<div class="video-wrapper">
  <iframe src="..." title="Embedded video"></iframe>
</div>
```

```css
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}
```

## Key Takeaways

- Always include a descriptive `title` attribute for accessibility.
- Use `loading="lazy"` for performance on pages with multiple iframes.
- Use `sandbox` to limit capabilities of untrusted embedded content.
- Make iframes responsive with a CSS aspect-ratio wrapper, or the modern `aspect-ratio` property.
