"use client";

import { Logo } from "@/components/Logo";

const nav = [
  { label: "Lộ trình", href: "#lo-trinh" },
  { label: "Bản Demo", href: "#ban-demo" },
  { label: "Test AI 30 Câu", href: "#test-ai" },
  { label: "Bảng giá", href: "#bang-gia" },
];

type HeaderProps = {
  onWaitlistClick: () => void;
};

export function Header({ onWaitlistClick }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-up-border/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="shrink-0 rounded-md outline-none ring-up-teal focus-visible:ring-2">
          <Logo />
        </a>

        <nav
          className="flex max-w-[min(52vw,14rem)] flex-1 justify-end gap-3 overflow-x-auto text-xs font-medium text-up-muted sm:max-w-none sm:justify-center sm:gap-5 sm:text-sm md:flex-[1]"
          aria-label="Điều hướng chính"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap transition-colors hover:text-up-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onWaitlistClick}
          className="shrink-0 rounded-full bg-up-ink px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 sm:px-5"
        >
          Tham gia Waitlist
        </button>
      </div>
    </header>
  );
}
