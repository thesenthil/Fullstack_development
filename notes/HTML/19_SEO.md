# 19 — SEO (Search Engine Optimization) with HTML

SEO is the practice of structuring your content so search engines can crawl, understand, and rank it well. Good HTML is the foundation of good SEO.

## 1. Title Tag

The single most important on-page SEO element — shown as the clickable headline in search results.

```html
<title>Best Coffee Shops in Mumbai | CityGuide</title>
```

- Keep it under ~60 characters (gets truncated otherwise).
- Put important keywords near the front.
- Make every page's title unique.

## 2. Meta Description

```html
<meta name="description" content="Discover the top 10 coffee shops in Mumbai, hand-picked for ambiance, quality, and price.">
```

- Doesn't directly affect rankings but heavily influences click-through rate from search results.
- Keep it under ~155-160 characters.

## 3. Heading Hierarchy

```html
<h1>Best Coffee Shops in Mumbai</h1>
  <h2>South Mumbai</h2>
    <h3>Cafe Mocha</h3>
  <h2>Bandra</h2>
    <h3>Kala Ghoda Cafe</h3>
```

- One `<h1>` per page, containing the primary keyword.
- Logical hierarchy helps search engines understand content structure.

## 4. Semantic HTML

Search engines weigh semantic structure (`<article>`, `<nav>`, `<main>`) more meaningfully than generic `<div>` soup — it helps them identify what content actually matters on the page.

## 5. Image Optimization

```html
<img src="cafe-mocha-interior.jpg" alt="Cozy interior of Cafe Mocha in South Mumbai">
```

- Descriptive, keyword-relevant `alt` text (also serves accessibility).
- Descriptive file names (`cafe-interior.jpg`, not `IMG_4821.jpg`).
- Compressed file sizes for fast load times (page speed is a ranking factor).

## 6. Internal & External Links

```html
<p>Read more in our <a href="/guide/mumbai-cafes">complete cafe guide</a>.</p>
<p>According to <a href="https://timesofindia.com" rel="nofollow">Times of India</a>...</p>
```

- Internal links help search engines discover and understand site structure.
- Use descriptive anchor text (not "click here").
- `rel="nofollow"` tells search engines not to pass ranking credit to an external link.

## 7. URL Structure

```
✅ Good: example.com/blog/best-coffee-shops-mumbai
❌ Bad:  example.com/page?id=4827&cat=12
```

Clean, readable, keyword-containing URLs are easier for both users and search engines.

## 8. Canonical Tags (avoid duplicate content penalties)

```html
<link rel="canonical" href="https://example.com/blog/best-coffee-shops-mumbai">
```

Tells search engines which URL is the "original" version when the same content is accessible via multiple URLs.

## 9. Structured Data (Schema.org / JSON-LD)

Helps search engines display rich results (star ratings, prices, FAQs directly in search results):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Chocolate Cake",
  "author": "Jane Doe",
  "prepTime": "PT20M"
}
</script>
```

## 10. Mobile-Friendliness

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Google uses **mobile-first indexing** — it primarily evaluates the mobile version of your site for ranking.

## SEO Quick Checklist

- [ ] Unique `<title>` and `<meta description>` per page
- [ ] One `<h1>`, logical heading hierarchy
- [ ] Descriptive `alt` text on all images
- [ ] Semantic HTML structure (`<main>`, `<article>`, `<nav>`)
- [ ] Fast-loading, compressed images
- [ ] Clean, readable URLs
- [ ] Mobile-responsive viewport meta tag
- [ ] Internal links with descriptive anchor text

## Key Takeaways

- SEO starts with clean, semantic, well-structured HTML — not tricks.
- `<title>` and meta description drive click-through; headings and semantics drive understanding/ranking.
- Page speed and mobile-friendliness are now core ranking factors, not afterthoughts.
