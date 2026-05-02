import Link from "next/link";
import { APP_NAME, VERSION } from "../lib/constants";

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

        <article className="space-y-4">
          <header className="flex items-baseline gap-3 border-b border-white/10 pb-3">
            <h2 className="text-2xl font-semibold">v{VERSION}</h2>
            <span className="font-mono text-xs text-white/40">Latest</span>
          </header>

          <ul className="list-inside list-disc space-y-2 leading-relaxed text-white/80">
            <li>Initial public release of VidDL 2.0.</li>
            <li>Native macOS app for Apple Silicon and Intel.</li>
            <li>Local MP4 saves with queue management.</li>
            <li>HLS stream extraction with automatic remuxing.</li>
            <li>Direct uploads to Mega and Google Drive.</li>
            <li>Pro tier ($0.99 one-time): unlimited downloads, 2x cloud transfer speed, saved presets.</li>
          </ul>
        </article>
      </main>
    </div>
  );
}
