# Project 1 — Enterprise SaaS Pricing Table

**Objective:** Build a responsive, accessible pricing table for a B2B SaaS product using semantic HTML tables and CSS styling.

## Industry Requirements

- Use proper `<table>`, `<thead>`, `<tbody>`, `<tr>`, and `<th>`/`<td>` structure for screen-reader compatibility — **don't** use Flexbox/Grid divs to fake a table; tabular data deserves a real `<table>`.
- Highlight the "Recommended" pricing tier visually (scale + box-shadow).
- Add hover states on rows to improve data readability.

## Step 1 — Structure the Data with a Real Table

```html
<table class="pricing-matrix">
  <caption>Enterprise Licensing Tiers</caption>
  <thead>
    <tr>
      <th scope="col">Features</th>
      <th scope="col">Basic</th>
      <th scope="col" class="highlight">Pro (Recommended)</th>
      <th scope="col">Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">API Limits</th>
      <td>10k / mo</td>
      <td class="highlight">100k / mo</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <th scope="row">Support</th>
      <td>Email</td>
      <td class="highlight">Priority Email + Chat</td>
      <td>Dedicated Manager</td>
    </tr>
    <tr>
      <th scope="row">Users</th>
      <td>5</td>
      <td class="highlight">25</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <th scope="row">Price</th>
      <td>$29/mo</td>
      <td class="highlight">$99/mo</td>
      <td>Custom</td>
    </tr>
  </tbody>
</table>
```

Using a native `<table>` (instead of Flexbox/Grid) gives screen readers the correct row/column relationships automatically — important for accessibility and for any automated tools parsing the data.

## Step 2 — Style and Highlight the Recommended Tier

```css
.pricing-matrix {
  width: 100%;
  border-collapse: collapse;
  font-family: system-ui, sans-serif;
}

.pricing-matrix caption {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.pricing-matrix th,
.pricing-matrix td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.pricing-matrix thead th {
  background: #1e293b;
  color: white;
}

/* Highlight the "Recommended" column */
.pricing-matrix .highlight {
  background: #eff6ff;
  font-weight: 600;
  box-shadow: inset 0 0 0 2px #2563eb;
  transform: scale(1.03);
  position: relative;
}

/* Zebra-striping for readability */
.pricing-matrix tbody tr:nth-child(odd) {
  background: #f8fafc;
}

/* Hover state for readability */
.pricing-matrix tbody tr:hover {
  background: #f1f5f9;
}
```

## Step 3 — Responsive Behavior (table on small screens)

Tables can overflow on mobile. Wrap it in a scrollable container instead of breaking the semantic structure:

```css
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

```html
<div class="table-wrapper">
  <table class="pricing-matrix">...</table>
</div>
```

## Key Takeaways

- Real `<table>` markup beats div-based fake tables for accessibility and correctness.
- `scope="col"`/`scope="row"` on `<th>` tells screen readers what each header relates to.
- Use `nth-child` zebra-striping + hover states for readability on data-heavy tables.
- Wrap wide tables in a horizontally scrollable container for mobile, rather than restructuring the table itself.
