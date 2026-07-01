# 05 — Links

The `<a>` (anchor) tag creates hyperlinks — the core of the "web" in World Wide Web.

```html
<a href="https://example.com">Visit Example</a>
```

## Key Attributes

| Attribute | Purpose |
|-----------|---------|
| `href` | Destination URL (required) |
| `target` | Where to open the link |
| `rel` | Relationship/security info for the link |
| `download` | Forces the browser to download the file instead of navigating |
| `title` | Tooltip text on hover |

## `target` Values

```html
<a href="https://example.com" target="_blank">Opens in new tab</a>
<a href="page2.html" target="_self">Opens in same tab (default)</a>
```

⚠️ **Security tip:** Always pair `target="_blank"` with `rel="noopener noreferrer"` to prevent the new page from accessing your original page via `window.opener`:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
```

## Types of Links

### 1. External link
```html
<a href="https://google.com">Google</a>
```

### 2. Internal/relative link (within your site)
```html
<a href="/about.html">About Us</a>
<a href="../images/photo.jpg">Photo</a>
```

### 3. Anchor link (jump to a section on the same page)
```html
<a href="#section2">Jump to Section 2</a>
...
<h2 id="section2">Section 2</h2>
```

### 4. Email link
```html
<a href="mailto:hello@example.com">Email Us</a>
<a href="mailto:hello@example.com?subject=Hello&body=Hi there">Email with subject</a>
```

### 5. Phone link
```html
<a href="tel:+1234567890">Call Us</a>
```

### 6. Download link
```html
<a href="report.pdf" download>Download Report</a>
<a href="report.pdf" download="my-report.pdf">Download with custom name</a>
```

## Absolute vs Relative URLs

```html
<!-- Absolute — full URL -->
<a href="https://example.com/about">About</a>

<!-- Relative — path based on current file's location -->
<a href="about.html">About</a>
<a href="/about.html">About (relative to site root)</a>
<a href="../about.html">About (one folder up)</a>
```

## Styling Link States (CSS preview)

Links have 4 pseudo-class states, conventionally styled in this order (LVHA):

```css
a:link    { color: blue; }    /* unvisited */
a:visited { color: purple; }  /* visited */
a:hover   { color: red; }     /* mouse over */
a:active  { color: orange; }  /* being clicked */
```

## Key Takeaways

- `href` is required for a link to work.
- Use `target="_blank"` + `rel="noopener noreferrer"` for external links opening in new tabs.
- `mailto:` and `tel:` create email/phone shortcuts.
- Anchor links (`#id`) jump within the same page.
