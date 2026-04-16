"use client";

import { ShieldCheck } from "lucide-react";
import { useState } from "react";

type WaitlistInlineCardProps = {
  onContinue: (email: string) => void;
};

export function WaitlistInlineCard({ onContinue }: WaitlistInlineCardProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    onContinue(trimmed);
  }

  return (
    <section className="border-b border-up-border/60 bg-background py-10 sm:py-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="rounded-2xl border border-up-border/80 bg-up-card p-6 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)] sm:p-8">
          <h2 className="text-lg font-semibold text-up-ink">Tham gia Waitlist</h2>
          <p className="mt-2 text-sm leading-relaxed text-up-muted">
            Để lại email để nhận thông báo khi UpPath chính thức ra mắt, đồng thời giữ ngay
            ưu đãi giảm giá 20% trọn đời.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <label className="sr-only" htmlFor="waitlist-email-inline">
              Email
            </label>
            <input
              id="waitlist-email-inline"
              type="email"
              autoComplete="email"
              placeholder="Nhập địa chỉ email của bạn..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-12 flex-1 rounded-xl border border-up-border bg-white px-4 text-sm text-up-ink outline-none ring-up-teal/40 placeholder:text-up-muted/80 focus:border-up-teal focus:ring-2"
            />
            <button
              type="submit"
              className="min-h-12 shrink-0 rounded-xl bg-up-ink px-6 text-sm font-semibold text-white transition hover:bg-black/90 sm:min-w-[180px]"
            >
              Xác nhận đăng ký
            </button>
          </form>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-up-muted sm:justify-start">
            <ShieldCheck className="h-4 w-4 shrink-0 text-up-teal" aria-hidden />
            Chúng tôi cam kết không spam email của bạn.
          </p>
        </div>
      </div>
    </section>
  );
}
