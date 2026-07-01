# 12 — Audio

The `<audio>` tag embeds sound content without requiring a plugin (replaced old Flash-based players).

## Basic Usage

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

- Multiple `<source>` tags provide format fallbacks — the browser picks the first one it supports.
- Text after the sources only shows if the browser supports neither.

## Key Attributes

| Attribute | Purpose |
|-----------|---------|
| `controls` | Shows the built-in play/pause/volume UI |
| `autoplay` | Starts playing automatically (often blocked by browsers unless muted) |
| `loop` | Replays automatically when finished |
| `muted` | Starts muted |
| `preload` | `none`, `metadata`, or `auto` — hints how much to preload |
| `src` | Can be used directly on `<audio>` if only one format is needed |

```html
<audio src="podcast.mp3" controls preload="metadata"></audio>
```

## Autoplay Best Practice

Most browsers block autoplay with sound to prevent annoying users. If you need autoplay, it must be muted:

```html
<audio src="ambient.mp3" autoplay muted loop></audio>
```

## Common Audio Formats

| Format | Notes |
|--------|-------|
| `.mp3` | Universally supported, good compression |
| `.ogg` | Open format, good for Firefox/Chrome |
| `.wav` | Uncompressed, large file size, high quality |

## Key Takeaways

- `<audio controls>` gives a ready-made player with zero JavaScript.
- Provide multiple `<source>` formats for cross-browser support.
- Autoplay with sound is generally blocked — mute it if autoplay is required.
