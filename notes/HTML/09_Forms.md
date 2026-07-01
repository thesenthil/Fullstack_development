# 09 — Forms

Forms collect user input and send it to a server (or handle it with JavaScript).

## Basic Structure

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <button type="submit">Submit</button>
</form>
```

## Form Attributes

| Attribute | Purpose |
|-----------|---------|
| `action` | URL where form data is sent |
| `method` | `GET` (data in URL, for searches/filters) or `POST` (data in request body, for sensitive/large data) |
| `enctype` | Encoding type — use `multipart/form-data` when uploading files |
| `autocomplete` | `on`/`off` — browser autofill behavior |
| `novalidate` | Disables built-in HTML5 validation |

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="resume">
</form>
```

## `<label>` — Critical for Accessibility

Always connect a label to its input using matching `for`/`id`:

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

This lets users click the label text to focus the input, and lets screen readers announce what the field is for.

Alternative: wrap the input inside the label (no `for`/`id` needed):
```html
<label>
  Email:
  <input type="email" name="email">
</label>
```

## Grouping Fields — `<fieldset>` + `<legend>`

```html
<fieldset>
  <legend>Shipping Address</legend>
  <label for="street">Street:</label>
  <input type="text" id="street" name="street">
</fieldset>
```

`<fieldset>` draws a box around related fields; `<legend>` titles the group. Important for screen readers navigating long forms.

## Key Input Attributes

| Attribute | Purpose |
|-----------|---------|
| `name` | Key used when data is submitted (required for the field to be sent) |
| `id` | Used to link with `<label for="">` |
| `placeholder` | Greyed-out hint text (not a substitute for a label) |
| `required` | Field must be filled before submitting |
| `disabled` | Field is unusable and not submitted |
| `readonly` | Field is visible/submitted but can't be edited |
| `value` | Default/pre-filled value |
| `maxlength` / `minlength` | Character limits |
| `pattern` | Regex validation pattern |

```html
<input 
  type="text" 
  name="username" 
  placeholder="Enter username" 
  required 
  minlength="3" 
  maxlength="20">
```

## `<select>` Dropdown

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">-- Select --</option>
  <option value="us">United States</option>
  <option value="in">India</option>
  <option value="uk">United Kingdom</option>
</select>
```

With grouped options:
```html
<select name="car">
  <optgroup label="German Cars">
    <option value="bmw">BMW</option>
    <option value="audi">Audi</option>
  </optgroup>
  <optgroup label="Japanese Cars">
    <option value="toyota">Toyota</option>
  </optgroup>
</select>
```

## `<textarea>` — Multi-line Text

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="5" cols="30" placeholder="Type here..."></textarea>
```

## Buttons

```html
<button type="submit">Submit</button>   <!-- submits the form -->
<button type="reset">Reset</button>     <!-- clears the form -->
<button type="button">Click Me</button> <!-- does nothing by default, used with JS -->
```

## Datalist — Autocomplete Suggestions

```html
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>
```

## Key Takeaways

- `action` + `method` define where/how data is sent.
- Always pair `<label for="">` with input `id` for accessibility.
- `<fieldset>`/`<legend>` group related fields.
- `required`, `pattern`, `min`/`max` give free built-in validation.
