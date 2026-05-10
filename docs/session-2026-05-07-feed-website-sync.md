# VidDL Web Feed Sync Session - 2026-05-07

## Scope

This session investigated `/Users/kalyannath/Projects/viddlweb`, then updated the static Next.js marketing site so it matches the current VidDL macOS app state after the Feed, Favorites, Files, native extractor, and seedbox work.

2026-05-09 follow-up: the website was updated again for the current native Pro/Profile/Settings state.

## Source Of Truth Checked

- `viddlweb` is a static Next.js App Router site on `main`, remote `https://github.com/knath2000/viddlweb.git`.
- The native VidDL app now exposes these primary destinations: Home, Feed, Favorites, Library, Files, Profile, Settings.
- The native app README confirms Pro remains a one-time `$0.99` purchase.
- The native app now exposes Profile as a primary destination and gates Feed, Favorites, and Profile behind Pro.
- The latest native changelog confirms Settings Cloud Destinations was simplified into one selector-driven section.
- Legacy upload automation rules, updater integration, and companion-entrypoint scope were removed from the native app.
- AI Profile analysis now uses saved favorites, Feed evidence, and Library history, with formatting fixes for cached flattened narratives.
- The native app changelog confirms the recent Feed and native extractor work:
  - Built-in Feed sources with search, filtering, and preview support.
  - Feed batch selection and extraction.
  - Feed hover preview scrub.
  - Site-capability-aware filtering and sorting.
  - Lazy detail-page date resolution.
  - Site-specific Feed theming.
  - Native extraction through player iframe handling with referer-aware MP4 qualities.

## Website Changes

- Updated hero subtitle to lead with built-in Feed discovery and extraction.
- Added hero chips for Feed discovery and native extractors.
- Replaced the mock app sidebar destinations with Home, Feed, Favorites, Library, Files, Profile, Settings.
- Replaced the old PreviewTour tabs with the current app destinations.
- Added new mock preview screens:
  - `FeedScreen`
  - `FavoritesScreen`
  - `FilesScreen`
  - `ProfileScreen`
- Removed the stale `DownloadsScreen` mock.
- Updated the mock app top badges from only `YT-DLP READY` to `NATIVE EXTRACTORS`, `YT-DLP 1700+`, and `PRO`.
- Updated the source chip row to generic labels: FD, NAT, YT, HLS, MP4, plus `+1.7K`.
- Expanded feature pills and cards to cover Feed, Favorites, batch extract, native extraction, and seedbox Files.
- Added AI Profile as a Pro feature card, Pro benefit, preview tab, FAQ item, and changelog entry.
- Updated Pro messaging around unlimited downloads, Feed discovery, saved Feed Favorites, AI Profile analysis, and advanced cloud/seedbox workflows.
- Updated Settings preview to show one Cloud Destinations selector with per-destination setup fields.
- Removed provider-specific public marketing labels and stale browser-extension wording from rendered website copy.
- Updated the displayed DMG size from `18 MB` to `4.8 MB` based on the local generated DMG.
- Changed the workflow from three steps to four:
  1. Browse Feed or paste URLs.
  2. Pick quality and destination.
  3. Download or upload.
  4. Send to cloud or seedbox.
- Updated neutral mock queue/library item labels to better reflect Feed, native extraction, batch extraction, cloud, and seedbox use.
- Added a May 2026 Feed update entry to `/changelog`.
- Updated FAQ answers and made FAQ accordion items open by default so answers are visible in the rendered page.
- Kept the `$4.99` crossed-out price with `$0.99` launch price because the native app README confirms `$0.99` is still current.

## Key Files Changed

- `app/page.tsx`
- `app/lib/constants.ts`
- `app/lib/icons.tsx`
- `app/components/AppWindowMockup.tsx`
- `app/components/PreviewTour.tsx`
- `app/components/DownloadCTA.tsx`
- `app/components/FAQItem.tsx`
- `app/components/preview/HomeBusy.tsx`
- `app/components/preview/FeedScreen.tsx`
- `app/components/preview/FavoritesScreen.tsx`
- `app/components/preview/FilesScreen.tsx`
- `app/components/preview/ProfileScreen.tsx`
- `app/components/preview/DownloadsScreen.tsx` removed
- `app/changelog/page.tsx`

## Verification

Passed:

```sh
npm run lint
npx tsc --noEmit
git diff --check
```

Still blocked in this Codex sandbox:

```sh
npm run build
```

The build fails because `next/font/google` cannot fetch Geist and Geist Mono from `fonts.googleapis.com` while network access is restricted. This is the same build blocker observed before these content changes.

## Git State Notes

- The existing untracked `.claude/` worktree directory was left untouched and should stay out of commits unless intentionally cleaned up.
- Stage specific changed files by name when committing; do not use `git add -A`.

## Publish Notes

The original checkout's `.git` directory may be read-only in this Codex sandbox. In that case, local staging fails before Git can create `.git/index.lock`:

```text
fatal: Unable to create '/Users/kalyannath/Projects/viddlweb/.git/index.lock': Operation not permitted
```

When committing from an unrestricted local shell, stage the specific changed files and commit with a conventional message:

```sh
git add app/changelog/page.tsx app/components/AppWindowMockup.tsx app/components/DownloadCTA.tsx app/components/FAQItem.tsx app/components/PreviewTour.tsx app/components/preview/DownloadsScreen.tsx app/components/preview/HomeBusy.tsx app/components/preview/FavoritesScreen.tsx app/components/preview/FeedScreen.tsx app/components/preview/FilesScreen.tsx app/lib/constants.ts app/lib/icons.tsx app/page.tsx docs/mascot-video-system.md docs/session-2026-05-07-feed-website-sync.md
git commit -m "feat: sync site with feed app state"
git push origin main
```
