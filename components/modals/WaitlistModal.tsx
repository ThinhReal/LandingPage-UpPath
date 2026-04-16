"use client";

import { useEffect, useId, useRef, useState } from "react";

type WaitlistModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialEmail?: string;
};

export function WaitlistModal({ open, onOpenChange, initialEmail = "" }: WaitlistModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState(initialEmail);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLInputElement>("input[type=email]")?.focus();
    }, 0);
    return () => window.clearTimeout(t);
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setMessage("Vui lòng nhập email.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "waitlist_modal" }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Có lỗi xảy ra.");
        return;
      }
      setStatus("success");
      setMessage("Cảm ơn bạn! Chúng tôi đã ghi nhận email và sẽ liên hệ khi ra mắt.");
    } catch {
      setStatus("error");
      setMessage("Không thể kết nối. Thử lại sau.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-up-ink/60 backdrop-blur-sm"
        aria-label="Đóng"
        onClick={() => onOpenChange(false)}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md rounded-2xl border border-up-border bg-white p-6 shadow-2xl shadow-up-ink/20"
      >
        <h2 id={titleId} className="text-lg font-semibold text-up-ink">
          Tham gia Waitlist
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-up-muted">
          Xác nhận lần cuối để nhận thông báo ra mắt và giữ ưu đãi{" "}
          <span className="font-medium text-up-teal-dark">giảm 20% trọn đời</span>.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-xl border border-up-teal/30 bg-up-mint-soft/50 px-4 py-3 text-sm text-up-ink">
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="sr-only" htmlFor="waitlist-email-modal">
                Email
              </label>
              <input
                id="waitlist-email-modal"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập địa chỉ email của bạn..."
                className="w-full rounded-xl border border-up-border bg-up-card px-4 py-3 text-sm outline-none ring-up-teal/40 placeholder:text-up-muted/80 focus:border-up-teal focus:ring-2"
              />
            </div>
            {message && status === "error" ? (
              <p className="text-sm text-red-600" role="alert">
                {message}
              </p>
            ) : null}
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-xl border border-up-border px-4 py-2.5 text-sm font-medium text-up-muted transition hover:bg-up-surface"
              >
                Hủy
              </button>
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-xl bg-up-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black/90 disabled:opacity-60"
              >
                {status === "loading" ? "Đang gửi…" : "Xác nhận đăng ký"}
              </button>
            </div>
          </form>
        )}

        {status === "success" ? (
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="mt-6 w-full rounded-xl bg-up-teal py-3 text-sm font-semibold text-white hover:bg-up-teal-dark"
          >
            Đóng
          </button>
        ) : null}
      </div>
    </div>
  );
}
