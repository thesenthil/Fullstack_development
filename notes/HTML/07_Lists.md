# 07 — Lists

HTML offers three types of lists: unordered, ordered, and description lists.

## Unordered List (bullets)

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

Output:
- Apple
- Banana
- Cherry

## Ordered List (numbered)

```html
<ol>
  <li>Preheat oven</li>
  <li>Mix ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>
```

Output:
1. Preheat oven
2. Mix ingredients
3. Bake for 30 minutes

### Ordered List Attributes

```html
<ol start="5">          <!-- start counting from 5 -->
<ol reversed>            <!-- count downward -->
<ol type="A">             <!-- A, B, C... -->
<ol type="i">             <!-- i, ii, iii... -->
```

`type` values: `1` (default), `A`, `a`, `I`, `i`.

## Description List (term + definition)

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — defines structure.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — defines presentation.</dd>
</dl>
```

- `<dl>` = description list wrapper
- `<dt>` = description term
- `<dd>` = description detail/definition

## Nested Lists

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

## Lists for Navigation (common real-world pattern)

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

This is the standard semantic pattern for nav menus — CSS later removes the bullets/numbering with `list-style: none;`.

## Key Takeaways

- `<ul>` = unordered (bullets), `<ol>` = ordered (numbers), `<dl>` = term/definition pairs.
- `<li>` is the list item, used inside both `<ul>` and `<ol>`.
- Lists can be nested for hierarchical content.
- Lists are the standard semantic structure for navigation menus.
