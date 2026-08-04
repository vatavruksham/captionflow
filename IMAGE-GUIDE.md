# CaptionFlow — Image Guide

## Concept
AI Caption Generator — multi-platform captions, hooks, hashtags, emoji control, A/B
variants, and brand voice. Visual language: cyan + coral gradients, clean caption-card
UI, abstract speech-bubble and typography motifs. No literal social platform logos
baked into artwork, no readable text/taglines rendered in images.

## Local Images (generated, compressed, committed to `public/images/`)
- `public/images/hero-dashboard.jpg` — home hero caption generator preview.
- `public/images/og.jpg` — 1200×630 social share preview.
- `public/images/features/multi-platform-captions.jpg` — Multi-Platform Captions feature.
- `public/images/features/hooks.jpg` — Scroll-Stopping Hooks feature.
- `public/images/features/hashtags.jpg` — Smart Hashtags feature.
- `public/images/features/emoji-control.jpg` — Emoji Control feature.
- `public/images/features/ab-variants.jpg` — A/B Variants feature.
- `public/images/features/brand-voice.jpg` — Brand Voice feature.

All images were generated locally, resized, and compressed to JPEG (25–95 KB range)
before committing — no remote hotlinking in production.

## Regeneration Prompts (Midjourney / DALL-E / SDXL)

### Hero
"Modern mobile app UI mockup for an AI caption generator, showing a phone screen with
a social media post photo and three caption suggestion cards below it with blurred
placeholder text lines and small hashtag pills, cyan and coral gradient accents, clean
minimal professional interface design, soft glassmorphism cards, floating abstract
speech bubble icons in the background, no readable text or logos --ar 16:9"

### Feature Cards
1. **Multi-Platform Captions** — "Abstract illustration of one glowing speech bubble
   branching into four differently shaped speech bubble icons, cyan and coral
   gradient, clean modern flat vector style, no readable text --ar 4:3"
2. **Scroll-Stopping Hooks** — "Abstract illustration of a glowing magnet pulling in
   floating eye icons and attention symbols, cyan and coral gradient lighting, clean
   modern flat vector style, no readable text --ar 4:3"
3. **Smart Hashtags** — "Abstract illustration of several glowing hashtag symbols
   orbiting a central bright hashtag symbol, cyan and coral gradient, clean modern flat
   vector style, no readable words --ar 4:3"
4. **Emoji Control** — "Abstract illustration of a horizontal slider dial with simple
   smiley face circle icons trailing from empty to full, cyan and coral gradient, clean
   modern flat vector style, no readable text --ar 4:3"
5. **A/B Variants** — "Abstract illustration of a single path splitting into two
   branching paths leading to two glowing card icons, cyan and coral gradient, clean
   modern flat vector style, no readable text --ar 4:3"
6. **Brand Voice** — "Abstract illustration of a glowing sound waveform flowing into
   and forming a speech bubble shape, cyan and coral gradient, clean modern flat vector
   style, no readable text --ar 4:3"

## Testimonial & Team Avatars
DiceBear "notionists" style (clean professional line-art), seeded by name:
```
https://api.dicebear.com/7.x/notionists/svg?seed={FullName}
```

## Notes
- No text sentences or marketing copy are baked into any generated artwork.
- Feature and hero images live under `public/images/` — run `node scripts/check-images.mjs`
  to verify all required local images are present before deploying.
