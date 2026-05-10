import Link from "next/link";
import { APP_NAME, PRICE, VERSION } from "../lib/constants";

export const metadata = {
  title: `Release notes - ${APP_NAME}`,
  description: `Changelog for ${APP_NAME} ${VERSION}`,
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <main className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
          &lt; Back
        </Link>

        <h1 className="mt-6 mb-2 text-5xl font-semibold tracking-[-2px]">Release notes</h1>
        <p className="mb-12 text-white/60">What&apos;s new in each version of {APP_NAME}.</p>

        <article className="mb-12 space-y-4">
          <header className="flex items-baseline gap-3 border-b border-white/10 pb-3">
            <h2 className="text-2xl font-semibold">May 2026 Pro and Profile update</h2>
            <span className="font-mono text-xs text-white/40">Latest</span>
          </header>

          <ul className="list-inside list-disc space-y-2 leading-relaxed text-white/80">
            <li>Gated Feed, Favorites, and Profile behind VidDL Pro.</li>
            <li>Added AI Profile analysis from saved favorites, Feed evidence, and Library history.</li>
            <li>Polished Feed spacing, card density, and top filter toolbar layout.</li>
            <li>Simplified Settings Cloud Destinations into one selector-driven setup section.</li>
            <li>Removed legacy upload automation rules, updater integration, and companion-entrypoint scope.</li>
            <li>Fixed AI Profile narrative rendering for flattened cached analysis text.</li>
          </ul>
        </article>

        <article className="mb-12 space-y-4">
          <header className="flex items-baseline gap-3 border-b border-white/10 pb-3">
            <h2 className="text-2xl font-semibold">May 2026 Feed update</h2>
          </header>

          <ul className="list-inside list-disc space-y-2 leading-relaxed text-white/80">
            <li>Added built-in Feed tab for supported discovery sources.</li>
            <li>Added hover preview scrub on Feed cards.</li>
            <li>Added batch select and extract from Feed.</li>
            <li>Added native extraction without yt-dlp for direct MP4 qualities.</li>
            <li>Added per-site UI theming in Feed.</li>
            <li>Added advanced filtering with per-site capability awareness.</li>
            <li>Preserved Feed state across tab switches.</li>
            <li>Added lazy background detail resolution for Feed metadata.</li>
            <li>Added Feed favorites for saving items before extraction.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <header className="flex items-baseline gap-3 border-b border-white/10 pb-3">
            <h2 className="text-2xl font-semibold">v{VERSION}</h2>
            <span className="font-mono text-xs text-white/40">Initial release</span>
          </header>

          <ul className="list-inside list-disc space-y-2 leading-relaxed text-white/80">
            <li>Initial public release of VidDL 2.0.</li>
            <li>Native macOS app for Apple Silicon and Intel.</li>
            <li>Local MP4 saves with queue management.</li>
            <li>HLS stream extraction with automatic remuxing.</li>
            <li>Direct uploads to Mega and Google Drive.</li>
            <li>Pro tier ({PRICE} one-time): unlimited downloads, Feed, Favorites, Profile, larger batches, multi-cloud upload, and processing tools.</li>
          </ul>
        </article>
      </main>
    </div>
  );
}
