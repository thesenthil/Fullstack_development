# 13 — Video

The `<video>` tag embeds video content natively in the browser.

## Basic Usage

```html
<video controls width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

## Key Attributes

| Attribute | Purpose |
|-----------|---------|
| `controls` | Shows play/pause/volume/fullscreen UI |
| `autoplay` | Plays automatically (must usually be combined with `muted`) |
| `loop` | Replays when finished |
| `muted` | Starts with no sound |
| `poster` | Image shown before playback starts |
| `width` / `height` | Dimensions in pixels |
| `preload` | `none`, `metadata`, `auto` |
| `playsinline` | Plays inline on mobile instead of forcing fullscreen (important for iOS) |

```html
<video 
  controls 
  poster="thumbnail.jpg" 
  width="800" 
  autoplay 
  muted 
  loop 
  playsinline>
  <source src="hero-video.mp4" type="video/mp4">
</video>
```

## Adding Captions/Subtitles — `<track>`

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track 
    src="subtitles-en.vtt" 
    kind="subtitles" 
    srclang="en" 
    label="English" 
    default>
</video>
```

`kind` values: `subtitles`, `captions`, `descriptions`, `chapters`, `metadata`.

## Common Video Formats

| Format | Notes |
|--------|-------|
| `.mp4` | Most widely supported, good compression |
| `.webm` | Open format, smaller size, great for web |
| `.ogg` | Less common today |

## Performance Tip

Always set `width`/`height` (or use CSS `aspect-ratio`) to prevent layout shift while the video loads. Use a `poster` image so the page doesn't show a blank black box before playback.

## Key Takeaways

- `<video controls>` provides a built-in player.
- Combine `autoplay` with `muted` for background/hero videos (browsers block non-muted autoplay).
- Use `<track>` for accessible captions/subtitles.
- Always set a `poster` and dimensions for better UX/performance.
