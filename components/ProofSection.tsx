"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

const proofUrl = process.env.NEXT_PUBLIC_PROOF_IFRAME_URL?.trim();

export function ProofSection() {
  const [iframeError, setIframeError] = useState(false);
  const hasUrl = Boolean(proofUrl && proofUrl.length > 0);

  return (
    <section
      id="ban-demo"
      className="scroll-mt-24 border-b border-up-proof/20 bg-up-proof py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-up-proof-accent">
          BẰNG CHỨNG THÉP
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Trăm nghe không bằng một thấy.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Xem trực tiếp giao diện lộ trình (ví dụ ngành kế toán) được nhúng từ bản demo thật.
        </p>

        <div className="mt-10 text-left">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-slate-800/80 px-3 py-2">
              <span className="flex gap-1.5" aria-hidden>
                <span className="h-3 w-3 rounded-full bg-red-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-400/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
              </span>
              <div className="ml-2 flex min-h-8 flex-1 items-center rounded-md bg-slate-900/80 px-3 text-xs text-slate-400">
                {hasUrl ? proofUrl : "Cấu hình NEXT_PUBLIC_PROOF_IFRAME_URL để hiển thị demo"}
              </div>
            </div>
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              {hasUrl && !iframeError ? (
                <iframe
                  title="Demo lộ trình UpPath"
                  src={proofUrl}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setIframeError(true)}
                />
              ) : (
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-4 p-8 text-center">
                  <p className="max-w-md text-sm text-slate-400">
                    {iframeError
                      ? "Không thể nhúng trang này (có thể bị chặn bởi chính sách iframe). Hãy mở trong tab mới."
                      : "Thêm URL demo vào biến môi trường NEXT_PUBLIC_PROOF_IFRAME_URL để xem bản nhúng."}
                  </p>
                  {hasUrl ? (
                    <a
                      href={proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
                    >
                      Mở trong tab mới
                      <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
