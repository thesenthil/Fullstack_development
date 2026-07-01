# 10 — Input Types

HTML5 introduced many specialized `<input>` types beyond plain text — each gives built-in validation and the right mobile keyboard.

## Full Reference Table

| Type | Purpose | Example |
|------|---------|---------|
| `text` | Single-line plain text | `<input type="text">` |
| `password` | Masked text input | `<input type="password">` |
| `email` | Validates email format, shows @ keyboard on mobile | `<input type="email">` |
| `number` | Numeric input with up/down arrows | `<input type="number" min="0" max="10">` |
| `tel` | Phone number, shows numeric keyboard | `<input type="tel">` |
| `url` | Validates URL format | `<input type="url">` |
| `search` | Styled as a search box (adds clear "x" button) | `<input type="search">` |
| `date` | Date picker | `<input type="date">` |
| `time` | Time picker | `<input type="time">` |
| `datetime-local` | Date + time picker | `<input type="datetime-local">` |
| `month` | Month/year picker | `<input type="month">` |
| `week` | Week picker | `<input type="week">` |
| `color` | Color picker swatch | `<input type="color">` |
| `range` | Slider input | `<input type="range" min="0" max="100">` |
| `checkbox` | Toggle on/off, multiple selectable | `<input type="checkbox">` |
| `radio` | Single choice from a group | `<input type="radio" name="plan">` |
| `file` | File upload | `<input type="file" accept="image/*">` |
| `hidden` | Invisible field, still submitted | `<input type="hidden" name="token">` |
| `submit` | Submit button | `<input type="submit" value="Send">` |
| `reset` | Reset button | `<input type="reset">` |
| `button` | Generic button | `<input type="button" value="Click">` |
| `image` | Submit button styled as an image | `<input type="image" src="go.png">` |

## Checkboxes (multiple selection)

```html
<label><input type="checkbox" name="hobbies" value="reading"> Reading</label>
<label><input type="checkbox" name="hobbies" value="gaming"> Gaming</label>
<label><input type="checkbox" name="hobbies" value="music" checked> Music</label>
```

## Radio Buttons (single selection — note the shared `name`)

```html
<label><input type="radio" name="plan" value="basic"> Basic</label>
<label><input type="radio" name="plan" value="pro" checked> Pro</label>
<label><input type="radio" name="plan" value="enterprise"> Enterprise</label>
```

Radio buttons in the same group **must share the same `name`** so only one can be selected at a time.

## Number & Range

```html
<input type="number" name="qty" min="1" max="10" step="1" value="1">
<input type="range" name="volume" min="0" max="100" value="50">
```

## File Upload

```html
<input type="file" name="avatar" accept="image/png, image/jpeg">
<input type="file" name="docs" multiple>  <!-- allow multiple files -->
```

## Useful Validation Attributes (work across many input types)

| Attribute | Effect |
|-----------|--------|
| `required` | Must be filled |
| `min` / `max` | Numeric or date range limits |
| `step` | Increment step for numbers/ranges |
| `pattern` | Custom regex validation |
| `maxlength` / `minlength` | Character count limits |
| `autofocus` | Auto-focuses field on page load |
| `autocomplete` | `on`/`off` browser suggestions |

```html
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters" required>
```

## Key Takeaways

- Choosing the right `type` gives free validation + the correct mobile keyboard.
- Radio buttons need a shared `name` to function as a group; checkboxes don't.
- Combine types with `required`, `min`/`max`, and `pattern` for robust client-side validation.
