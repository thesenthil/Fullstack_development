# 13 — Transition

Transitions create smooth animations between two states of a property (e.g., default → hover) without JavaScript.

## Basic Syntax

```css
.box {
  transition: property duration timing-function delay;
}
```

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: darkblue;
}
```

## Individual Properties

```css
transition-property: background-color;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0.1s;
```

## `transition-property` — what to animate

```css
transition-property: all;            /* animate every changing property */
transition-property: transform;      /* animate only transform */
transition-property: background-color, transform; /* multiple specific properties */
```

`all` is convenient but can hurt performance if many properties change at once — be specific when possible.

## `transition-duration` — how long

```css
transition-duration: 0.3s;  /* 300 milliseconds */
transition-duration: 200ms;
```

## `transition-timing-function` — the pacing curve

```css
transition-timing-function: linear;       /* constant speed */
transition-timing-function: ease;         /* default — starts slow, speeds up, ends slow */
transition-timing-function: ease-in;      /* starts slow */
transition-timing-function: ease-out;     /* ends slow */
transition-timing-function: ease-in-out;  /* slow start AND end */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* custom curve */
```

## `transition-delay` — wait before starting

```css
transition-delay: 0.2s; /* waits 200ms before the transition begins */
```

## Multiple Transitions on Different Properties

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}
```

## Common Real-World Patterns

### Button hover
```css
.btn {
  background: #3498db;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
}
```

### Smooth accordion/dropdown expand
```css
.dropdown {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.dropdown.open {
  max-height: 500px;
}
```

### Fade-in on load (with JS toggling a class)
```css
.fade {
  opacity: 0;
  transition: opacity 0.5s ease;
}
.fade.visible {
  opacity: 1;
}
```

## Transition vs Animation — When to Use Which

| | Transition | Animation (`@keyframes`) |
|---|------------|----------------------------|
| Trigger | State change (hover, class toggle) | Can run automatically, looped, on a timeline |
| Complexity | Simple A → B | Multiple steps/keyframes |
| Control | duration, timing, delay | Same plus iteration count, direction, fill-mode |

Use **transitions** for simple two-state interactions (hover, focus, toggles). Use **`@keyframes` animations** (next topic) for multi-step or looping effects.

## Key Takeaways

- `transition: property duration timing-function delay;` is the full shorthand.
- Be specific with `transition-property` instead of `all` when performance matters.
- Transitions only animate between two known states — for complex multi-step motion, use `@keyframes` animation instead.
