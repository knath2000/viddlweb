# VidDL Web UI Polish Session - 2026-05-02

## Scope

This session reviewed and improved the VidDL landing page screen by screen from user-supplied screenshots. The project is a static Next.js App Router site in `/Users/kalyannath/Projects/viddlweb`, published from `main` to `https://github.com/knath2000/viddlweb.git`.

## Product And Design Direction

- VidDL is positioned as a fast native macOS video downloader for local saves, Mega, and Google Drive.
- The site uses a dark premium macOS software style with restrained mascot/coupon energy.
- Screens should show the real app surface, not generic marketing placeholders.
- Mascots work best as confident stickers or single focal accents; repeated or low-opacity mascot usage reads as noise.
- Pro messaging should use one clear signal at a time: gold marks gated or premium features.

## Changes Implemented

### Hero

- Reduced promotional clutter to one primary message and one CTA.
- Removed the duplicate header CTA and the floating CTA price badge.
- Changed the hero headline from brand repetition to a value proposition.
- Collapsed trust chips into one row.
- Moved the mascot callout so it no longer covers the mockup status bar.
- Removed barely visible decorative sparkle noise.

### Features

- Removed mixed badge taxonomy from non-Pro feature cards.
- Kept only `PRO` badges for gated features.
- Enlarged feature icon tiles.
- Moved mascots to the top of cards as visible sticker accents.
- Removed the bottom mascot row so card heights stay uniform.
- Converted solid accent lines into softer gradient bars.

### Live Preview

- Replaced the duplicate idle Home mockup with a four-tab app tour: Home, Downloads, Library, Settings.
- Added `PreviewTour` as the client-side tab controller.
- Refactored `AppWindowMockup` to accept `screen` and `sidebarActive` props.
- Added populated preview screens under `app/components/preview/`.
- Home now shows active, queued, and completed download rows.
- Downloads now shows Active and Recent sections.
- Library now renders inside the macOS window chrome.
- Settings now shows cloud connections, default quality, and save folder controls.
- Removed the stale `LIVE PREVIEW` pill and redundant Home/Library section labels.
- Moved `helper online` to the bottom status bar and increased non-hero mockup height for the populated tour.

### Workflow

- Normalized the three workflow cards so none appears selected at rest.
- Replaced faint connector lines with clearer chevron direction cues.
- Demoted large number circles into small `STEP` eyebrow labels.
- Kept mascots as the visual hero and animated all three with staggered delays.

### Pro Section

- Added a direct `Download VidDL` CTA linking to `DOWNLOAD_URL`.
- Made the price the visual anchor with a larger `$0.99` lockup and struck-through `$4.99` reference.
- Removed the duplicate static coupon mascot so the animated coupon card carries the personality.
- Rewrote benefits with more concrete value: unlimited daily downloads, faster cloud transfers, saved presets/templates, priority extractor updates.
- Filled out the right promo card with included-feature copy.

### Download CTA And Changelog

- Added a static `/changelog` route with v2.0.0 release notes.
- Replaced alert-based Release notes actions with real links.
- Changed the CTA sticker from `One-time purchase` to `Free download`.
- Updated the gift sticker variant to use a download icon.
- Removed the floating video tile from `DownloadCTA` because its baked-in video background looked separate from the page.

### FAQ

- Promoted the FAQ heading to match other section hierarchy.
- Rewrote the first FAQ answer with concrete supported platform names.
- Reframed the last FAQ question from developer-oriented dependency language to user-facing setup language.

## Key Files Changed

- `app/page.tsx`
- `app/lib/constants.ts`
- `app/components/AppWindowMockup.tsx`
- `app/components/PreviewTour.tsx`
- `app/components/preview/HomeBusy.tsx`
- `app/components/preview/DownloadsScreen.tsx`
- `app/components/preview/LibraryScreen.tsx`
- `app/components/preview/SettingsScreen.tsx`
- `app/components/FeatureCard.tsx`
- `app/components/MascotCallout.tsx`
- `app/components/DownloadCTA.tsx`
- `app/components/PromoSticker.tsx`
- `app/globals.css`
- `app/changelog/page.tsx`

## Verification

- `npm run lint` passed.
- `npm run build` passed.
- `/` and `/changelog` responded with HTTP 200 from the local dev server.
- The production build includes static routes for `/` and `/changelog`.

## Deferred

- History, Mega, Scheduler, Transfers, and Processing preview screens remain out of scope.
- No URL hash routing for preview tabs.
- No checksum link or MDX changelog source yet.
- Revisit reduced-motion policy before production release if the full motion system remains enabled during testing.
