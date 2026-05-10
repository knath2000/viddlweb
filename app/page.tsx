import Link from "next/link";
import * as Lucide from "lucide-react";
import { Icon } from "./lib/icons";
import { AppWindowMockup } from "./components/AppWindowMockup";
import { GradientButton } from "./components/GradientButton";
import { NeonBadge } from "./components/NeonBadge";
import { FeatureCard } from "./components/FeatureCard";
import { PreviewTour } from "./components/PreviewTour";
import { FAQItem } from "./components/FAQItem";
import { DownloadCTA } from "./components/DownloadCTA";
import { MascotCallout } from "./components/MascotCallout";
import { MascotSticker } from "./components/MascotSticker";
import { LoopVideo } from "./components/LoopVideo";
import {
  APP_NAME,
  VERSION,
  MIN_MACOS,
  PRICE,
  DOWNLOAD_URL,
  FEATURE_PILLS,
  MAIN_FEATURES,
  WORKFLOW_STEPS,
  FAQ_ITEMS,
} from "./lib/constants";

export default function VidDLWebsite() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0F]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B6B] via-[#FF1493] to-[#B388FF] flex items-center justify-center">
              <Lucide.Video className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="font-semibold tracking-[-0.5px] text-xl">{APP_NAME}</div>
            <div className="text-[10px] px-1.5 py-px rounded bg-white/10 text-white/60 font-mono mt-0.5">
              {VERSION}
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#preview" className="hover:text-white transition-colors">Preview</a>
            <a href="#pro" className="hover:text-white transition-colors">Pro</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <GradientButton href={DOWNLOAD_URL} className="text-sm px-6 py-2.5">
              Get {APP_NAME}
            </GradientButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-mesh pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:items-start">
            {/* Left Text */}
            <div className="max-w-2xl lg:pt-8">
              <div className="mb-4 text-xs font-semibold tracking-[2px] text-white/45">
                VIDDL {VERSION} / FOR MACOS
              </div>

              <h1 className="max-w-[660px] text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-2px] md:tracking-[-3px] leading-[0.95] mb-5">
                Download videos to your Mac, fast.
              </h1>
              <p className="max-w-xl text-xl md:text-2xl text-white/70 tracking-[-0.7px] leading-snug mb-8">
                Paste supported links, browse the Pro Feed, save favorites, and let VidDL handle extraction, HLS, queues, MP4 saves, and AI Profile insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <GradientButton href={DOWNLOAD_URL} className="text-base px-9 py-4 shine-hover" style={{ boxShadow: "0 0 0 1px rgba(255,107,107,0.4), 0 15px 40px -10px rgba(255,107,107,0.6)" }}>
                  <Lucide.Download className="w-4 h-4" />
                  Download for Mac
                </GradientButton>
                <a href="#preview" className="secondary-btn px-8 py-4 text-sm flex items-center justify-center">
                  See what’s new
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <div className="coupon-chip">
                  <span className="font-mono">v{VERSION}</span>
                </div>
                <div className="coupon-chip">
                  <Icon name="Rss" className="w-3 h-3" /> Feed discovery
                </div>
                <div className="coupon-chip">
                  <Icon name="RadioTower" className="w-3 h-3" /> Native extractors
                </div>
                <div className="coupon-chip">
                  <Icon name="WandSparkles" className="w-3 h-3" /> AI Profile
                </div>
                <div className="coupon-chip">
                  <Icon name="HardDrive" className="w-3 h-3" /> {MIN_MACOS}
                </div>
                <div className="coupon-chip">
                  <Icon name="Play" className="w-3 h-3" /> HLS ready
                </div>
                <div className="coupon-chip">
                  <Icon name="Cloud" className="w-3 h-3" /> Cloud transfers
                </div>
                <div className="coupon-chip coupon-chip--hot">
                  <Icon name="Star" className="w-3 h-3" /> Pro {PRICE}
                </div>
              </div>
            </div>

            {/* Right: App Mockup + Mascot */}
            <div className="relative mt-8 lg:mt-0 flex items-end justify-end overflow-visible">
              <div className="relative w-full max-w-[720px] xl:max-w-[720px]">
                <AppWindowMockup variant="hero" />
                <MascotCallout />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-t border-white/10 bg-black/20 py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {FEATURE_PILLS.map((pill, idx) => (
              <div key={idx} className="feature-pill group relative">
                <Icon name={pill.icon} className="w-3.5 h-3.5 text-white/60" />
                {pill.label}
                {"mascot" in pill && (
                  <div className="feature-pill-mascot pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 opacity-0 transition duration-200 group-hover:opacity-100 md:block">
                    <MascotSticker mascot={pill.mascot} size="tiny" framed />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs tracking-[2px] text-white/40 mb-2">POWERFUL YET SIMPLE</div>
          <h2 className="text-5xl tracking-[-2px] font-semibold">Everything you need.<br />Nothing you don’t.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MAIN_FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              badge={("badge" in feature ? feature.badge : undefined) as string | undefined}
              mascot={("mascot" in feature ? feature.mascot : undefined)}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT PREVIEW SECTION */}
      <section id="preview" className="bg-[#0A0A12] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-4xl md:text-5xl tracking-[-1.5px] font-semibold">See the app in action</h2>
            <p className="mt-3 max-w-md text-white/60">
              Click through the current surfaces — Home, Feed, Favorites, Library, Files, Profile, and Settings.
            </p>
          </div>

          <PreviewTour />
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-[#FF6B6B] text-xs tracking-[2px] mb-2">FOUR STEPS</div>
          <h2 className="text-4xl tracking-tight font-semibold">From feed or link to file in seconds</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {WORKFLOW_STEPS.map((step, index) => (
            <div key={index} className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#16161C] p-6 text-center shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]">
              <MascotSticker
                mascot={step.mascot}
                size="card"
                floating
                className={`mx-auto mb-6 hidden sm:block ${index === 1 ? "[animation-delay:300ms]" : ""} ${index === 2 ? "[animation-delay:600ms]" : ""} ${index === 3 ? "[animation-delay:900ms]" : ""}`}
              />
              <div className="mb-3 text-xs font-semibold tracking-[2px] text-[#FF6B6B]">STEP {step.step}</div>
              <div className="font-semibold text-lg tracking-tight mb-2">{step.title}</div>
              <p className="text-sm text-white/60 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRO SECTION */}
      <section id="pro" className="border-y border-white/10 bg-[#0A0A12] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <NeonBadge variant="gold">LAUNCH PRICE</NeonBadge>
              </div>

              <h2 className="text-5xl tracking-[-2px] font-semibold mb-3">Go Pro once.<br />Keep downloading.</h2>
              <div className="mb-2 flex items-end justify-center gap-3 lg:justify-start">
                <div className="pb-3 text-2xl font-semibold tracking-tight text-white/25 line-through">$4.99</div>
                <div className="text-8xl font-semibold tracking-tighter text-[#FFD700]">{PRICE}</div>
              </div>
              <div className="text-white/50 mb-8">One-time. No subscription. Ever.</div>

              <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 mb-10 text-left">
                {[
                  "Unlimited daily downloads",
                  "Feed discovery and saved Favorites",
                  "AI Profile analysis",
                  "Advanced cloud and seedbox workflows",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <Lucide.Check className="w-4 h-4 mt-0.5 text-[#7FFF00] flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>

              <p className="text-xs text-white/50 max-w-xs mx-auto lg:mx-0 mb-6">
                Free includes 3 downloads. Pro removes limits and unlocks Feed, Favorites, Profile, and advanced workflows.
              </p>

              <div className="flex flex-col items-center gap-2 lg:items-start">
                <GradientButton href={DOWNLOAD_URL} className="px-8 py-3 text-sm">
                  <Lucide.Download className="h-4 w-4" />
                  Download VidDL
                </GradientButton>
                <div className="text-xs text-white/40">
                  Free to start • Upgrade in-app for {PRICE}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-3 rounded-3xl border border-[#FFD700]/20 bg-[#FFD700]/[0.04] p-4 shadow-2xl">
              <LoopVideo
                src="/videos/pro-coupon-loop.mp4"
                className="h-40 w-full rounded-2xl border border-white/10 object-cover"
              />
              <div className="flex items-center gap-3 text-left">
                <MascotSticker mascot="couponPro" size="tiny" />
                <div>
                  <div className="text-sm font-semibold text-[#FCD34D]">Pro coupon ready</div>
                  <div className="text-xs text-white/45">One tiny unlock. Feed, Favorites, Profile.</div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-xs leading-relaxed text-white/45">
                Includes instant activation, unlimited downloads, AI Profile analysis, and advanced cloud workflows.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <DownloadCTA />
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 bg-black/30 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-xs tracking-[2px] text-white/40 mb-1">QUESTIONS</div>
            <h2 className="text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
          </div>

          <div className="divide-y divide-white/10">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem key={index} question={item.q} answer={item.a} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-center text-xs text-white/40">
            <MascotSticker mascot="supportFaq" size="tiny" className="hidden sm:block" />
            <div>
              Still have questions? Email <span className="text-white/70">support@viddl.app</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-xs text-white/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
          <div>© {new Date().getFullYear()} VidDL. All rights reserved. macOS only.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <Link href="/changelog" className="group relative inline-flex items-center gap-1 hover:text-white">
              Release notes
              <span className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 opacity-0 transition group-hover:opacity-100 md:block">
                <MascotSticker mascot="releaseNotes" size="micro" framed />
              </span>
            </Link>
            <a href="#" className="hover:text-white">GitHub (yt-dlp)</a>
          </div>
          <div className="font-mono">Built for macOS 14+</div>
        </div>
      </footer>
    </div>
  );
}
