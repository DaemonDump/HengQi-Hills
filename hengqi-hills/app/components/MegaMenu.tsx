"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Bath,
  Bed,
  BookOpen,
  Droplets,
  Dice5,
  Gamepad2,
  GitBranch,
  Handshake,
  Hammer,
  Mail,
  Mountain,
  Palette,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS, type NavItem, type NavSection } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const ICONS = {
  Award,
  Bath,
  Bed,
  BookOpen,
  Droplets,
  Dice5,
  Gamepad2,
  GitBranch,
  Handshake,
  Hammer,
  Mail,
  Mountain,
  Palette,
  TrendingUp,
  Users
} as const;

function getFallbackId(title: string) {
  switch (title) {
    case "Diverge Lab":
      return "diverge";
    case "Everpeak Arena":
      return "everpeak";
    case "Crossroads":
    case "Crossroads Lounge":
      return "crossroads";
    case "Nexus":
    case "Nexus Stay":
      return "nexus";
    case "联系":
      return "contact";
    default:
      return null;
  }
}

function getSectionAnchor(itemId: NavItem["id"], title: string) {
  if (itemId === "brand") {
    if (title === "品牌故事") return "brand-story";
    if (title === "视觉识别") return "visual-system";
    if (title === "发展历程") return "milestones";
  }
  if (itemId === "spaces") {
    if (title === "Diverge Lab") return "diverge-lab";
    if (title === "Everpeak Arena") return "everpeak-arena";
    if (title === "Crossroads Lounge") return "crossroads-lounge";
    if (title === "Nexus Stay") return "nexus-stay";
  }
  if (itemId === "experience") {
    if (title === "电竞") return "esports";
    if (title === "洗浴") return "bath";
    if (title === "桌游") return "tabletop";
    if (title === "住宿") return "stay";
  }
  if (itemId === "cooperation") {
    if (title === "品牌授权") return "licensing";
    if (title === "空间改造") return "renovation";
    if (title === "投资合作") return "investment";
  }
  if (itemId === "about") {
    if (title === "团队") return "team";
    if (title === "联系") return "contact";
  }
  return null;
}

function SectionLink({
  item,
  section,
  onNavigate,
  className
}: {
  item: NavItem;
  section: NavSection;
  onNavigate: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const Icon = ICONS[section.icon];
  const sectionAnchor = getSectionAnchor(item.id, section.title);
  const href = sectionAnchor ? `${item.href}#${sectionAnchor}` : item.href;

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-20 items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/10",
        className
      )}
      onClick={(e) => {
        if (!sectionAnchor) {
          onNavigate();
          return;
        }
        if (pathname === item.href) {
          const el = document.getElementById(sectionAnchor);
          if (el) {
            e.preventDefault();
            window.history.pushState(null, "", `#${sectionAnchor}`);
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            onNavigate();
            return;
          }
        }
        onNavigate();
      }}
    >
      <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-white/10 bg-black/30 text-text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold tracking-tight text-text-primary">
          {section.title}
        </span>
        <span
          className="mt-1 block text-xs leading-snug text-text-tertiary"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {section.desc}
        </span>
      </span>
    </Link>
  );
}

export function MegaMenu({
  mode,
  open,
  activeItem,
  items = NAV_ITEMS,
  onClose,
  onNavigate,
  onSelectItem
}: {
  mode: "desktop" | "mobile";
  open: boolean;
  activeItem: NavItem | null;
  items?: NavItem[];
  onClose: () => void;
  onNavigate: () => void;
  onSelectItem: (id: NavItem["id"]) => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            className={cn(
              "fixed inset-0 z-40 bg-black/50 touch-pan-y",
              mode === "desktop" ? "top-14" : "top-0"
            )}
            aria-label="关闭菜单"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
          />

          {mode === "desktop" ? (
            <motion.div
              className="fixed inset-x-0 top-14 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl shadow-2xl shadow-black/50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseLeave={onClose}
            >
              <div className="mx-auto max-h-96 max-w-screen-2xl overflow-auto px-6 py-4 md:px-8">
                {activeItem ? (
                  <>
                    <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {activeItem.sections.map((section) => (
                        <SectionLink
                          key={section.title}
                          item={activeItem}
                          section={section}
                          onNavigate={onNavigate}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </motion.div>
          ) : (
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 w-full bg-black/70 backdrop-blur-2xl shadow-2xl shadow-black/50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex h-14 items-center justify-between border-b border-white/10 px-6">
                <div className="text-sm font-semibold tracking-tight text-text-primary">
                  菜单
                </div>
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-primary"
                  aria-label="关闭菜单"
                  onClick={onClose}
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>

              <div className="h-[calc(100vh-56px)] overflow-auto px-6 py-6">
                <div className="space-y-2">
                  {items.map((item) => (
                    <button
                      key={item.id}
                        type="button"
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-text-primary transition-colors hover:border-white/20 hover:bg-white/10",
                          activeItem?.id === item.id ? "border-white/20" : undefined
                        )}
                        onClick={() => onSelectItem(item.id)}
                      >
                        <span>{item.label}</span>
                        <span className="text-text-tertiary">→</span>
                    </button>
                  ))}
                </div>

                {activeItem ? (
                  <>
                    <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-3">
                      {activeItem.sections.map((section) => (
                        <SectionLink
                          key={section.title}
                          item={activeItem}
                          section={section}
                          onNavigate={onNavigate}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </motion.aside>
          )}
        </>
      ) : null}
    </AnimatePresence>
  );
}
