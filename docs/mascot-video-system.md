# VidDL Mascot And Video System

## Current Project State

`viddlweb` is a static Next.js App Router landing page for VidDL. The current visual direction is a dark, professional macOS software site with polished Asian ecommerce campaign energy layered in through mascots, coupon chips, glow stickers, and short muted loop videos.

The repo is not currently initialized as a Git repository. The app builds as a static route at `/`.

## Implemented Components

- `MascotSticker`: shared wrapper around `next/image` for consistent mascot sizing, optional framing, optional float animation, and decorative/semantic alt behavior.
- `LoopVideo`: shared decorative video wrapper using `autoPlay`, `muted`, `loop`, `playsInline`, and `preload="metadata"`.
- `MascotCallout`: hero mascot and speech bubble near the app mockup, with a subtle hero loop video.
- `FeatureCard`: now supports contextual mascot thumbnails without changing card dimensions.
- `DownloadCTA`: uses the large hype mascot and a cloud transfer loop video.

## Asset Inventory

Final mascot files live in `public/`:

- `mascot-viddl-hero.png`: hero helper mascot.
- `mascot-viddl-hype.png`: large download/CTA celebration mascot.
- `mascot-coupon-pro.png`: Pro coupon mascot.
- `mascot-cloud-transfer.png`: Mega/Drive/cloud transfer mascot.
- `mascot-queue-speed.png`: queue and speed mascot.
- `mascot-browser-capture.png`: Safari/browser capture mascot.
- `mascot-library-archive.png`: library/history/archive mascot.
- `mascot-tools-setup.png`: settings/setup/tools mascot.
- `mascot-local-safe.png`: local/private save mascot.
- `mascot-quick-action.png`: menu bar/Siri/quick-action mascot.
- `mascot-batch-links.png`: paste/drop/batch URL mascot.
- `mascot-download-complete.png`: completed downloads mascot.
- `mascot-support-faq.png`: FAQ/support mascot.
- `mascot-release-notes.png`: release notes/update mascot.

Source exports with baked checkerboard backgrounds were preserved as `*-source.png` where applicable. Final `public/mascot-*.png` files were cleaned to real alpha PNGs and verified with `sips -g hasAlpha`.

Loop videos live in `public/videos/`:

- `hero-mascot-loop.mp4`: subtle hero helper loop.
- `pro-coupon-loop.mp4`: Pro/coupon celebration loop.
- `cloud-transfer-loop.mp4`: cloud transfer loop.

## Wiring Map

- Hero:
  - `mascot-viddl-hero.png` in `MascotCallout`.
  - `hero-mascot-loop.mp4` near the speech bubble.
- Feature cards:
  - Paste pages: `mascot-batch-links.png`.
  - Quality/destination: `mascot-tools-setup.png`.
  - Local MP4: `mascot-local-safe.png`.
  - Mega/Drive: `mascot-cloud-transfer.png`.
  - Track everything: `mascot-library-archive.png`.
- Feature pill hover accents:
  - Menu bar and Siri: `mascot-quick-action.png`.
  - Safari extension: `mascot-browser-capture.png`.
- Preview:
  - Home preview title: `mascot-queue-speed.png`.
  - Library header: `mascot-library-archive.png`.
- Workflow:
  - Step 01: `mascot-batch-links.png`.
  - Step 02: `mascot-tools-setup.png`.
  - Step 03: `mascot-download-complete.png`.
- Pro:
  - `mascot-coupon-pro.png` beside the price and in the side panel.
  - `pro-coupon-loop.mp4` in the desktop Pro side panel.
- Download CTA:
  - `mascot-viddl-hype.png` as the large CTA mascot.
  - `cloud-transfer-loop.mp4` as a desktop cloud transfer accent.
- FAQ/footer:
  - `mascot-support-faq.png` near the support line.
  - `mascot-release-notes.png` on Release notes hover.

## Design Rules

- Keep the header restrained and professional.
- Use one large mascot per section at most.
- Use small mascots as contextual stickers, not as a dense illustration dump.
- Keep mascots out of the app mockup unless they represent in-app UI.
- Hide or reduce decorative motion under `prefers-reduced-motion`.
- Prefer real alpha PNGs for free-floating mascot art. If a future generated asset has baked background/checkerboard, clean it before wiring.

## Verification

Commands run successfully:

```bash
npm run lint
npm run build
```

Static asset checks:

```bash
sips -g hasAlpha public/mascot-*.png
```

Final mascot outputs report `hasAlpha: yes`. The existing local dev server at `http://localhost:3000` responded with `200`, and sampled mascot/video asset URLs responded with `200`.

## Useful Follow-Up

Do a browser visual pass at desktop, tablet, and 390px mobile. The implementation is intentionally restrained, but the automated alpha cleanup may leave slight edge artifacts on a few assets generated with checkerboard previews. If one looks rough in-browser, regenerate or manually clean only that specific file.
