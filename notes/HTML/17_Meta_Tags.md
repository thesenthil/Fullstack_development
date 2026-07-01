# 17 — Meta Tags

`<meta>` tags live inside `<head>` and provide metadata about the document — invisible to users but read by browsers, search engines, and social platforms.

## Essential Meta Tags (every page should have these)

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <meta name="description" content="A concise summary of the page for search results.">
</head>
```

| Tag | Purpose |
|-----|---------|
| `<meta charset="UTF-8">` | Character encoding — supports all languages/symbols/emojis |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Makes the page responsive on mobile |
| `<meta name="description" content="...">` | Summary shown in search engine results |

## SEO-Related Meta Tags

```html
<meta name="keywords" content="html, css, web development">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">
```

`robots` controls search engine crawling:
- `index, follow` — default, index this page and follow its links
- `noindex, nofollow` — exclude from search results entirely

## Open Graph Tags (social media previews — Facebook, LinkedIn, WhatsApp)

```html
<meta property="og:title" content="My Awesome Page">
<meta property="og:description" content="A great description for social shares.">
<meta property="og:image" content="https://example.com/preview.jpg">
<meta property="og:url" content="https://example.com">
<meta property="og:type" content="website">
```

## Twitter Card Tags

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="My Awesome Page">
<meta name="twitter:description" content="A great description.">
<meta name="twitter:image" content="https://example.com/preview.jpg">
```

## Other Useful Meta Tags

```html
<!-- Auto-refresh the page every 30 seconds -->
<meta http-equiv="refresh" content="30">

<!-- Theme color for mobile browser UI -->
<meta name="theme-color" content="#3498db">

<!-- Prevent automatic phone number detection/styling on iOS -->
<meta name="format-detection" content="telephone=no">
```

## Favicon (technically a `<link>`, always paired with meta tags)

```html
<link rel="icon" type="image/png" href="favicon.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
```

## Complete Real-World `<head>` Example

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio | Jane Doe</title>
  <meta name="description" content="Jane Doe's portfolio showcasing web development projects.">
  <meta name="author" content="Jane Doe">

  <meta property="og:title" content="Jane Doe Portfolio">
  <meta property="og:description" content="Web developer portfolio.">
  <meta property="og:image" content="/preview.jpg">

  <link rel="icon" href="/favicon.png">
  <link rel="stylesheet" href="/style.css">
</head>
```

## Key Takeaways

- `charset` and `viewport` are non-negotiable on every page.
- `description` directly affects how your page appears in Google search results.
- Open Graph + Twitter Card tags control how your link looks when shared on social media.
