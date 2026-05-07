import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";
import React from "react";

export type IconName =
  | "Home" | "History" | "Library" | "Download" | "Cloud" | "Clock" | "ArrowUpDown" | "Cpu" | "Settings"
  | "Video" | "Link2" | "Zap" | "Clapperboard" | "Search" | "Play" | "HardDrive" | "FolderOpen" | "List" | "Menu" | "Globe" | "Mic"
  | "Link" | "CloudUpload" | "UploadCloud" | "BarChart3" | "Check" | "ChevronDown" | "Star" | "Gift" | "Tag" | "Sparkles"
  | "Rss" | "Heart" | "SquareCheckBig" | "Server" | "Files" | "Folder" | "RadioTower" | "ListChecks" | "WandSparkles";

const ICON_MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  Home: Lucide.Home,
  History: Lucide.History,
  Library: Lucide.Library,
  Download: Lucide.Download,
  Cloud: Lucide.Cloud,
  Clock: Lucide.Clock,
  ArrowUpDown: Lucide.ArrowUpDown,
  Cpu: Lucide.Cpu,
  Settings: Lucide.Settings,
  Video: Lucide.Video,
  Link2: Lucide.Link2,
  Zap: Lucide.Zap,
  Clapperboard: Lucide.Clapperboard,
  Search: Lucide.Search,
  Play: Lucide.Play,
  HardDrive: Lucide.HardDrive,
  FolderOpen: Lucide.FolderOpen,
  List: Lucide.List,
  Menu: Lucide.Menu,
  Globe: Lucide.Globe,
  Mic: Lucide.Mic,
  Link: Lucide.Link,
  CloudUpload: Lucide.CloudUpload,
  UploadCloud: Lucide.UploadCloud,
  BarChart3: Lucide.BarChart3,
  Check: Lucide.Check,
  ChevronDown: Lucide.ChevronDown,
  Star: Lucide.Star,
  Gift: Lucide.Gift,
  Tag: Lucide.Tag,
  Sparkles: Lucide.Sparkles,
  Rss: Lucide.Rss,
  Heart: Lucide.Heart,
  SquareCheckBig: Lucide.SquareCheckBig,
  Server: Lucide.Server,
  Files: Lucide.Files,
  Folder: Lucide.Folder,
  RadioTower: Lucide.RadioTower,
  ListChecks: Lucide.ListChecks,
  WandSparkles: Lucide.WandSparkles,
};

interface IconProps extends LucideProps {
  name: IconName | string;
  fallback?: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, fallback = "Home", ...props }) => {
  const key = (name as IconName) in ICON_MAP ? (name as IconName) : fallback;
  const Comp = ICON_MAP[key] || ICON_MAP[fallback];
  return <Comp {...props} />;
};

export function getIcon(name: IconName | string, fallback: IconName = "Home"): React.ComponentType<LucideProps> {
  const key = (name as IconName) in ICON_MAP ? (name as IconName) : fallback;
  return ICON_MAP[key] || ICON_MAP[fallback];
}
