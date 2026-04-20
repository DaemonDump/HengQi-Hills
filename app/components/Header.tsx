"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MegaMenu } from "@/app/components/MegaMenu";
import { NAV_ITEMS, type NavItem } from "@/lib/navigation";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<NavItem["id"] | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDesktopMenuOpen = activeMenu !== null && !mobileOpen;
  const isAnyMenuOpen = isDesktopMenuOpen || mobileOpen;
  const activeItem = activeMenu
    ? NAV_ITEMS.find((i) => i.id === activeMenu) ?? null
    : null;

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!isAnyMenuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isAnyMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-text-primary"
          onClick={() => {
            setActiveMenu(null);
            setMobileOpen(false);
          }}
        >
          <img
            src="/images/logo.png"
            alt="HengQi Hills"
            className="h-9 w-9 mt-1"
          />
          HengQi Hills
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeMenu === item.id && isDesktopMenuOpen;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={[
                  "text-sm transition-colors",
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                ].join(" ")}
                aria-expanded={isActive}
                onMouseEnter={() => {
                  setMobileOpen(false);
                  setActiveMenu(item.id);
                }}
                onFocus={() => {
                  setMobileOpen(false);
                  setActiveMenu(item.id);
                }}
                onClick={() => {
                  setActiveMenu(null);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-primary transition-colors hover:bg-white/5 md:hidden"
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          onClick={() => {
            setMobileOpen((v) => !v);
            setActiveMenu((prev) => prev ?? "brand");
          }}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <MegaMenu
        mode="desktop"
        open={isDesktopMenuOpen}
        activeItem={activeItem}
        onClose={() => setActiveMenu(null)}
        onNavigate={() => setActiveMenu(null)}
        onSelectItem={(id) => setActiveMenu(id)}
      />

      <MegaMenu
        mode="mobile"
        open={mobileOpen}
        activeItem={activeItem}
        onClose={() => setMobileOpen(false)}
        onNavigate={() => {
          setMobileOpen(false);
          setActiveMenu(null);
        }}
        onSelectItem={(id) => setActiveMenu(id)}
      />
    </header>
  );
}
