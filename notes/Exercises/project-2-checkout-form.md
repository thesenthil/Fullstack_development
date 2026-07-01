# Project 2 — Accessible E-Commerce Checkout Form

**Objective:** Build a secure, user-friendly checkout input flow using advanced HTML5 form attributes and CSS validation states.

## Industry Requirements

- Every `<input>` must have a programmatically associated `<label>`.
- Use HTML5 input types (`email`, `tel`, `number`) to trigger the correct mobile keyboard.
- Use CSS `:valid` and `:invalid` pseudo-classes for real-time visual feedback.

## Step 1 — Group Fields with `<fieldset>` + `<legend>`

Grouping related fields is critical for users navigating via keyboard or screen reader — it gives context ("this set of fields is about Shipping").

```html
<form action="/api/checkout" method="POST" class="checkout-form">
  <fieldset>
    <legend>Shipping Information</legend>

    <div class="form-group">
      <label for="full-name">Full Name</label>
      <input type="text" id="full-name" name="full_name" required>
    </div>

    <div class="form-group">
      <label for="email">Email Address</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required
        placeholder="name@company.com">
      <span class="error-msg">Please enter a valid email.</span>
    </div>

    <div class="form-group">
      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" placeholder="+1 555 123 4567">
    </div>

    <div class="form-group">
      <label for="address">Street Address</label>
      <input type="text" id="address" name="address" required>
    </div>

    <div class="form-group">
      <label for="zip">ZIP / Postal Code</label>
      <input type="text" id="zip" name="zip" pattern="[0-9]{5,6}" required>
    </div>
  </fieldset>

  <fieldset>
    <legend>Payment Details</legend>

    <div class="form-group">
      <label for="card-number">Card Number</label>
      <input 
        type="text" 
        id="card-number" 
        name="card_number" 
        inputmode="numeric" 
        pattern="[0-9\s]{13,19}" 
        required 
        placeholder="1234 5678 9012 3456">
    </div>

    <div class="form-group">
      <label for="quantity">Quantity</label>
      <input type="number" id="quantity" name="quantity" min="1" max="10" value="1">
    </div>
  </fieldset>

  <button type="submit" class="btn-primary">Complete Purchase</button>
</form>
```

## Step 2 — Real-Time Validation Styling with `:valid` / `:invalid`

```css
.checkout-form {
  max-width: 480px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
}

fieldset {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

legend {
  font-weight: 600;
  padding: 0 8px;
}

.form-group { margin-bottom: 16px; }

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
}

/* Only show validation state AFTER the user has interacted (use :user-invalid in modern browsers,
   or apply via a "touched" class with JS for broader support) */
input:focus {
  outline: 2px solid #2563eb;
  outline-offset: 1px;
}

input:valid {
  border-color: #16a34a;
}

input:invalid:not(:placeholder-shown) {
  border-color: #dc2626;
}

/* Error message only shows when the adjacent input is invalid AND has been touched */
.error-msg {
  display: none;
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: 4px;
}

input:invalid:not(:placeholder-shown) + .error-msg {
  display: block;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: #1d4ed8;
}
```

## Why the Adjacent Sibling Selector (`+`) Matters Here

```css
input:invalid:not(:placeholder-shown) + .error-msg { display: block; }
```

This shows the error message **only** when the input directly before it is both invalid and has been touched (no longer showing its placeholder) — giving real-time feedback without flashing errors on an empty, untouched form.

## Key Takeaways

- `<fieldset>`/`<legend>` give logical grouping that's essential for keyboard and screen-reader navigation.
- The right `type` (`email`, `tel`, `number`) gives free validation and the correct mobile keyboard.
- `:invalid:not(:placeholder-shown)` is a clean CSS-only pattern for "show error only after the user has typed something."
- Always pair visual color cues (red/green borders) with text (`.error-msg`) — never rely on color alone.
