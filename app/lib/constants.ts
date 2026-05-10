export const APP_NAME = "VidDL" as const;
export const VERSION = "2.0.0" as const;
export const MIN_MACOS = "macOS 14+" as const;
export const PRICE = "$0.99" as const;
export const DOWNLOAD_URL =
  "https://ntljfyjjg5ctumgj.public.blob.vercel-storage.com/VidDL-2.0.0.dmg?download=1" as const;

export const SITE_TITLE = "VidDL — Fast macOS Video Downloader";
export const SITE_DESCRIPTION =
  "Download supported video pages, browse Pro Feed discovery, and analyze saved favorites with AI Profile insights.";

export const MASCOTS = {
  hero: {
    src: "/mascot-viddl-hero.png",
    alt: "VidDL camera mascot",
    placement: "Hero helper",
    size: "hero",
  },
  hype: {
    src: "/mascot-viddl-hype.png",
    alt: "VidDL celebration mascot",
    placement: "Download CTA",
    size: "cta",
  },
  couponPro: {
    src: "/mascot-coupon-pro.png",
    alt: "VidDL Pro coupon mascot",
    placement: "Pro offer",
    size: "section",
  },
  cloudTransfer: {
    src: "/mascot-cloud-transfer.png",
    alt: "VidDL cloud transfer mascot",
    placement: "Cloud transfer features",
    size: "section",
  },
  queueSpeed: {
    src: "/mascot-queue-speed.png",
    alt: "VidDL queue speed mascot",
    placement: "Queue and speed",
    size: "card",
  },
  browserCapture: {
    src: "/mascot-browser-capture.png",
    alt: "VidDL browser capture mascot",
    placement: "Browser capture",
    size: "card",
  },
  libraryArchive: {
    src: "/mascot-library-archive.png",
    alt: "VidDL library archive mascot",
    placement: "Library preview",
    size: "section",
  },
  toolsSetup: {
    src: "/mascot-tools-setup.png",
    alt: "VidDL setup tools mascot",
    placement: "Setup and tools",
    size: "card",
  },
  localSafe: {
    src: "/mascot-local-safe.png",
    alt: "VidDL local save mascot",
    placement: "Local saves",
    size: "card",
  },
  quickAction: {
    src: "/mascot-quick-action.png",
    alt: "VidDL quick action mascot",
    placement: "Quick actions",
    size: "card",
  },
  batchLinks: {
    src: "/mascot-batch-links.png",
    alt: "VidDL batch links mascot",
    placement: "Batch link capture",
    size: "card",
  },
  downloadComplete: {
    src: "/mascot-download-complete.png",
    alt: "VidDL completed download mascot",
    placement: "Download complete",
    size: "section",
  },
  supportFaq: {
    src: "/mascot-support-faq.png",
    alt: "VidDL support mascot",
    placement: "FAQ support",
    size: "card",
  },
  releaseNotes: {
    src: "/mascot-release-notes.png",
    alt: "VidDL release notes mascot",
    placement: "Release notes",
    size: "card",
  },
} as const;

export type MascotKey = keyof typeof MASCOTS;

export const NAV_ITEMS = [
  { label: "Home", icon: "Home", color: "#00BFFF" },
  { label: "Feed", icon: "Rss", color: "#E8933C" },
  { label: "Favorites", icon: "Heart", color: "#FF1493" },
  { label: "Library", icon: "Library", color: "#7FFF00" },
  { label: "Files", icon: "Folder", color: "#FFD700" },
  { label: "Profile", icon: "WandSparkles", color: "#FCD34D" },
  { label: "Settings", icon: "Settings", color: "#6B7280" },
] as const;

export const PLATFORM_ICONS = [
  { name: "FD", color: "#B388FF" },
  { name: "NAT", color: "#FF6B6B" },
  { name: "YT", color: "#00BFFF" },
  { name: "HLS", color: "#7FFF00" },
  { name: "MP4", color: "#E8933C" },
] as const;

export const FEATURE_PILLS = [
  { label: "Built-in Feed", icon: "Rss", mascot: "browserCapture" },
  { label: "Favorites", icon: "Heart", mascot: "libraryArchive" },
  { label: "AI Profile", icon: "WandSparkles", mascot: "supportFaq" },
  { label: "Batch extract", icon: "SquareCheckBig", mascot: "batchLinks" },
  { label: "Native extractors", icon: "RadioTower" },
  { label: "Local MP4 saves", icon: "HardDrive" },
  { label: "HLS streams", icon: "Play" },
  { label: "Mega uploads", icon: "Cloud" },
  { label: "Google Drive", icon: "FolderOpen" },
  { label: "Seedbox Files", icon: "Server", mascot: "cloudTransfer" },
  { label: "Queue tracking", icon: "ListChecks" },
  { label: "Menu bar mode", icon: "Menu", mascot: "quickAction" },
  { label: "Siri Shortcuts", icon: "Mic", mascot: "quickAction" },
] as const;

export const MAIN_FEATURES = [
  {
    title: "Browse the built-in Feed",
    description: "Discover videos from supported Feed sources with search, filters, site theming, and hover preview scrub.",
    icon: "Rss",
    color: "#E8933C",
    badge: "PRO",
    mascot: "browserCapture",
  },
  {
    title: "Save Feed favorites",
    description: "Mark feed items for later before extraction, then search, sort, open, copy, or extract from Favorites.",
    icon: "Heart",
    color: "#FF1493",
    badge: "PRO",
    mascot: "libraryArchive",
  },
  {
    title: "Build your AI Profile",
    description: "Analyze saved favorites, Feed evidence, and Library history to surface performers, categories, tags, and quality patterns.",
    icon: "WandSparkles",
    color: "#FCD34D",
    badge: "PRO",
    mascot: "supportFaq",
  },
  {
    title: "Batch select & extract",
    description: "Multi-select videos from the Feed and send them into extraction together instead of opening each item one by one.",
    icon: "SquareCheckBig",
    color: "#7FFF00",
    mascot: "batchLinks",
  },
  {
    title: "Paste supported video pages",
    description: "Drop or paste links from 1,700+ yt-dlp sites plus VidDL native extractors.",
    icon: "Link",
    color: "#00BFFF",
    mascot: "batchLinks",
  },
  {
    title: "Native MP4 extraction",
    description: "Resolve direct MP4 qualities without yt-dlp from supported native extractors where available.",
    icon: "RadioTower",
    color: "#FF6B6B",
    mascot: "localSafe",
  },
  {
    title: "Choose quality & destination",
    description: "Pick resolution, format, and where to save — local folder, Mega, Google Drive, or seedbox.",
    icon: "Settings",
    color: "#E8933C",
    mascot: "toolsSetup",
  },
  {
    title: "Save locally as MP4",
    description: "Fast local downloads with progress, queue management, and automatic organization.",
    icon: "Download",
    color: "#FF6B6B",
    mascot: "localSafe",
  },
  {
    title: "Send to Mega",
    description: "Upload directly to your Mega account with transfer tracking and resume support.",
    icon: "CloudUpload",
    color: "#FFD700",
    badge: "PRO",
    mascot: "cloudTransfer",
  },
  {
    title: "Send to Google Drive",
    description: "Authenticate once and push files straight to Drive with folder selection.",
    icon: "UploadCloud",
    color: "#7FFF00",
    mascot: "cloudTransfer",
  },
  {
    title: "Manage seedbox files",
    description: "Browse remote folders, track seedbox transfers, and keep cloud handoffs visible inside VidDL.",
    icon: "Server",
    color: "#FFD700",
    badge: "PRO",
    mascot: "cloudTransfer",
  },
  {
    title: "Track everything",
    description: "Home queue, Library timeline, active transfers, processed files, and detailed logs stay in one workflow.",
    icon: "BarChart3",
    color: "#B388FF",
    badge: "PRO",
    mascot: "libraryArchive",
  },
] as const;

export const PROMO_POINTS = [
  "One-time unlock",
  "Feed, Favorites, Profile",
  "Advanced workflows",
] as const;

export const LIBRARY_SAMPLES = [
  { title: "Featured studio clip", date: "Today", duration: "12:34" },
  { title: "Saved feed pick", date: "Yesterday", duration: "45:12" },
  { title: "Native MP4 extract", date: "Mar 12", duration: "08:45" },
  { title: "Cloud transfer archive", date: "Mar 10", duration: "1:22:09" },
  { title: "Batch extraction set", date: "Mar 8", duration: "23:17" },
  { title: "Seedbox collection", date: "Mar 5", duration: "34:56" },
] as const;

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Browse Feed or paste URLs",
    desc: "Discover videos in Feed, favorite them, or paste supported links directly.",
    mascot: "browserCapture",
  },
  {
    step: "02",
    title: "Pick quality & destination",
    desc: "Select format, resolution, and target: local, cloud, or seedbox.",
    mascot: "toolsSetup",
  },
  {
    step: "03",
    title: "Download or upload",
    desc: "Extract one item or batch selections and track progress in the Home queue.",
    mascot: "downloadComplete",
  },
  {
    step: "04",
    title: "Send to cloud or seedbox",
    desc: "Optionally move files to Mega, Google Drive, or seedbox storage.",
    mascot: "cloudTransfer",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What does VidDL support?",
    a: "VidDL supports 1,700+ sites via yt-dlp, selected native streaming-host extractors, and direct HLS or MP4 URLs.",
  },
  {
    q: "What does VidDL Pro unlock?",
    a: "Pro unlocks unlimited downloads, Feed discovery, saved Feed Favorites, AI Profile analysis, higher concurrent download limits, larger batch downloads, multi-cloud upload, video processing tools, audio downloads, and subtitles.",
  },
  {
    q: "What is AI Profile?",
    a: "AI Profile analyzes saved favorites, Feed evidence, and Library history to summarize recurring performers, categories, tags, studios, and preferred quality patterns.",
  },
  {
    q: "Does VidDL work with HLS streams?",
    a: "Yes. VidDL detects and downloads HLS (.m3u8) streams, remuxing them to MP4 automatically.",
  },
  {
    q: "Can VidDL upload to Mega or Google Drive?",
    a: "Yes. Authenticate once and VidDL uploads directly to your account with transfer tracking and resume support.",
  },
  {
    q: "Is VidDL free?",
    a: "VidDL is free to download and includes 3 free downloads. Pro ($0.99 one-time) removes limits and unlocks advanced features. No subscription.",
  },
  {
    q: "Does VidDL run on Windows?",
    a: "No. VidDL is a native macOS app for macOS 14 and later, supporting both Apple Silicon and Intel.",
  },
  {
    q: "Does VidDL require any setup?",
    a: "Only yt-dlp and ffmpeg are required for full site support. The app will prompt you to install them via Homebrew on first launch.",
  },
] as const;
