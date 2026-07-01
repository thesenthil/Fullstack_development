# 15 — Canvas

The `<canvas>` element provides a blank drawable region you control with JavaScript — used for graphics, games, charts, and image manipulation.

## Basic Usage

```html
<canvas id="myCanvas" width="400" height="300" style="border:1px solid #000;">
  Your browser does not support canvas.
</canvas>
```

By itself, `<canvas>` does nothing visible — you draw on it with JavaScript using the **Canvas 2D API** (or WebGL for 3D).

## Drawing with JavaScript

```html
<canvas id="myCanvas" width="400" height="300"></canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw a filled rectangle
  ctx.fillStyle = '#3498db';
  ctx.fillRect(50, 50, 150, 100);

  // Draw a circle
  ctx.beginPath();
  ctx.arc(250, 150, 50, 0, Math.PI * 2);
  ctx.fillStyle = '#e74c3c';
  ctx.fill();

  // Draw text
  ctx.font = '20px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText('Hello Canvas', 50, 200);
</script>
```

## Common Canvas API Methods

| Method | Purpose |
|--------|---------|
| `fillRect(x, y, w, h)` | Draw a filled rectangle |
| `strokeRect(x, y, w, h)` | Draw an outlined rectangle |
| `clearRect(x, y, w, h)` | Clear a rectangular area |
| `beginPath()` | Start a new drawing path |
| `arc(x, y, radius, start, end)` | Draw a circle/arc |
| `moveTo(x, y)` / `lineTo(x, y)` | Draw lines |
| `fillText(text, x, y)` | Draw filled text |
| `drawImage(img, x, y)` | Draw an image onto the canvas |

## Canvas vs SVG — When to Use Which

| | Canvas | SVG |
|---|--------|-----|
| Rendering | Pixel-based (raster) | Vector-based |
| Scaling | Loses quality when scaled | Scales perfectly, no quality loss |
| Performance | Better for many objects (games, animations) | Better for few, complex, interactive shapes |
| DOM access | No — single element, drawn via JS | Yes — each shape is a DOM node, can attach CSS/events directly |
| Use case | Games, image editors, real-time graphics | Icons, logos, charts, diagrams |

## Real-World Uses

- Games (2D game engines often render to canvas)
- Image filters/editors (crop, resize, apply effects)
- Data visualization (some charting libraries use canvas for performance with large datasets)
- QR code / barcode generation

## Key Takeaways

- `<canvas>` is an empty drawing surface — all drawing logic happens in JavaScript.
- Use `getContext('2d')` for 2D drawing, `getContext('webgl')` for 3D.
- Choose Canvas over SVG when you need to render many objects fast (games); choose SVG when you need scalability and per-element interactivity (icons, diagrams).
