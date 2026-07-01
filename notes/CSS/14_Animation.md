# 14 — Animation

`@keyframes` + `animation` let you define multi-step, complex, and looping animations — more powerful than transitions.

## Defining Keyframes

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

Or use percentage-based steps for more control:

```css
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
```

## Applying an Animation

```css
.box {
  animation-name: slideIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
```

## Shorthand

```css
.box {
  animation: slideIn 0.5s ease-out forwards;
  /*         name     duration timing fill-mode */
}
```

## Key Animation Properties

| Property | Purpose | Common Values |
|----------|---------|----------------|
| `animation-name` | Which `@keyframes` to use | custom name |
| `animation-duration` | How long one cycle takes | `0.5s`, `2s` |
| `animation-timing-function` | Pacing curve | `ease`, `linear`, `ease-in-out` |
| `animation-delay` | Wait before starting | `0.2s` |
| `animation-iteration-count` | How many times to repeat | `1`, `3`, `infinite` |
| `animation-direction` | Play direction | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | State before/after animation | `none`, `forwards`, `backwards`, `both` |
| `animation-play-state` | Pause/resume | `running`, `paused` |

## `animation-fill-mode` Explained

```css
animation-fill-mode: none;      /* default — reverts to original styles after */
animation-fill-mode: forwards;  /* keeps the styles from the LAST keyframe */
animation-fill-mode: backwards; /* applies the FIRST keyframe's styles during the delay */
animation-fill-mode: both;      /* combines forwards + backwards */
```

`forwards` is the most commonly used — without it, the element snaps back to its pre-animation state once the animation ends.

## Looping Animations

```css
.spinner {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

## Alternate Direction (back-and-forth, like a pulse)

```css
.pulse {
  animation: pulse 1.5s ease-in-out infinite alternate;
}
@keyframes pulse {
  from { transform: scale(1); }
  to   { transform: scale(1.1); }
}
```

## Common Real-World Patterns

### Loading spinner
```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #eee;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Fade + slide in on page load
```css
.hero {
  animation: fadeSlideUp 0.6s ease-out forwards;
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Attention-grabbing shake (e.g., invalid form field)
```css
.shake {
  animation: shake 0.4s;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25%      { transform: translateX(-8px); }
  75%      { transform: translateX(8px); }
}
```

## Performance Tip

Like transitions, animate `transform` and `opacity` whenever possible — they're GPU-accelerated and don't trigger layout recalculation, unlike animating `width`, `height`, `top`, `left`, or `margin`.

## Key Takeaways

- `@keyframes` defines the steps; `animation` applies them with timing/looping control.
- `animation-fill-mode: forwards` keeps the final keyframe's styles after the animation ends.
- `animation-iteration-count: infinite` + `animation-direction: alternate` create looping back-and-forth effects (spinners, pulses).
