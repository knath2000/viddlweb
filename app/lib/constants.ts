export const APP_NAME = "VidDL" as const;
export const VERSION = "2.0.0" as const;
export const MIN_MACOS = "macOS 14+" as const;
export const PRICE = "$0.99" as const;
export const DOWNLOAD_URL =
  "https://ntljfyjjg5ctumgj.public.blob.vercel-storage.com/VidDL-2.0.0.dmg?download=1" as const;

export const SITE_TITLE = "VidDL — Fast macOS Video Downloader";
export const SITE_DESCRIPTION =
  "Extract video from supported pages and save locally or send to Mega and Google Drive. Native macOS app with queue, library, transfers, and Pro features.";

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
  { label: "History", icon: "History", color: "#E8933C" },
  { label: "Library", icon: "Library", color: "#7FFF00" },
  { label: "Downloads", icon: "Download", color: "#FF6B6B" },
  { label: "Mega", icon: "Cloud", color: "#FFD700" },
  { label: "Scheduler", icon: "Clock", color: "#B388FF" },
  { label: "Transfers", icon: "ArrowUpDown", color: "#FF1493" },
  { label: "Processing", icon: "Cpu", color: "#00BFFF" },
  { label: "Settings", icon: "Settings", color: "#6B7280" },
] as const;

export const PLATFORM_ICONS = [
  { name: "YT", color: "#FF0000" },
  { name: "IG", color: "#E1306C" },
  { name: "TT", color: "#000000" },
  { name: "VM", color: "#1AB7EA" },
  { name: "TW", color: "#1DA1F2" },
  { name: "TK", color: "#FF0050" },
] as const;

export const FEATURE_PILLS = [
  { label: "Local MP4 saves", icon: "HardDrive" },
  { label: "HLS streams", icon: "Play" },
  { label: "Mega uploads", icon: "Cloud" },
  { label: "Google Drive", icon: "FolderOpen" },
  { label: "Queue tracking", icon: "List" },
  { label: "Menu bar mode", icon: "Menu", mascot: "quickAction" },
  { label: "Safari extension", icon: "Globe", mascot: "browserCapture" },
  { label: "Siri Shortcuts", icon: "Mic", mascot: "quickAction" },
] as const;

export const MAIN_FEATURES = [
  {
    title: "Paste supported video pages",
    description: "Drop or paste links from many video sources. Supports direct streams and HLS.",
    icon: "Link",
    color: "#00BFFF",
    badge: "NEW",
    mascot: "batchLinks",
  },
  {
    title: "Choose quality & destination",
    description: "Pick resolution, format, and where to save — local folder, Mega, or Google Drive.",
    icon: "Settings",
    color: "#E8933C",
    mascot: "toolsSetup",
  },
  {
    title: "Save locally as MP4",
    description: "Fast local downloads with progress, queue management, and automatic organization.",
    icon: "Download",
    color: "#FF6B6B",
    badge: "FAST",
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
    title: "Track everything",
    description: "Full history, active transfers, processing queue, and detailed logs in one place.",
    icon: "BarChart3",
    color: "#B388FF",
    badge: "PRO",
    mascot: "libraryArchive",
  },
] as const;

export const PROMO_POINTS = [
  "One-time unlock",
  "Cloud transfer boost",
  "Queue-friendly workflow",
] as const;

export const LIBRARY_SAMPLES = [
  { title: "Travel recap", date: "Today", duration: "12:34" },
  { title: "Workshop recording", date: "Yesterday", duration: "45:12" },
  { title: "Product demo", date: "Mar 12", duration: "08:45" },
  { title: "Lecture archive", date: "Mar 10", duration: "1:22:09" },
  { title: "Clip collection", date: "Mar 8", duration: "23:17" },
  { title: "Team sync", date: "Mar 5", duration: "34:56" },
] as const;

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Paste or drop URLs",
    desc: "Copy links from your browser or drag files. Supports batch paste.",
    mascot: "batchLinks",
  },
  {
    step: "02",
    title: "Pick quality & destination",
    desc: "Select format, resolution, and target: local, Mega, or Google Drive.",
    mascot: "toolsSetup",
  },
  {
    step: "03",
    title: "Download or upload",
    desc: "Queue starts automatically. Track progress in real time.",
    mascot: "downloadComplete",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What does VidDL support?",
    a: "VidDL works with many supported video pages and stream hosts. It handles direct downloads, HLS streams, and common hosting patterns. Support is updated regularly.",
  },
  {
    q: "Does VidDL work with HLS streams?",
    a: "Yes. It can detect and download HLS playlists, remuxing to MP4 where possible for maximum compatibility.",
  },
  {
    q: "Can VidDL upload to Mega or Google Drive?",
    a: "Absolutely. Connect your Mega or Google Drive account once in Settings and send completed downloads directly to the cloud with one click or automatically.",
  },
  {
    q: "Is VidDL free?",
    a: "Core downloading is free to start. Pro unlocks higher limits, faster cloud workflows, priority updates, and supports ongoing development. One-time purchase.",
  },
  {
    q: "Does VidDL run on Windows?",
    a: "VidDL is a native macOS application built for Apple Silicon and Intel Macs running macOS 14 or later.",
  },
  {
    q: "Why might VidDL need yt-dlp, ffmpeg, Mega, or rclone?",
    a: "yt-dlp and ffmpeg power extraction and remuxing for many sources. Mega and rclone enable seamless cloud transfers. These are bundled or configured automatically where possible.",
  },
] as const;
