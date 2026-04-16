"use client";

import { Rocket } from "lucide-react";

type AIInitCardProps = {
  onStartTest?: () => void;
};

export function AIInitCard({ onStartTest }: AIInitCardProps) {
  return (
    <section
      id="test-ai"
      className="scroll-mt-24 border-b border-up-border/60 bg-gradient-to-b from-up-surface to-background py-16 sm:py-20"
    >
      <div className="mx-auto max-w-lg px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-xl shadow-up-ink/20 sm:p-8">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-up-mint/20 text-up-teal">
              <Rocket className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">Khởi tạo dữ liệu AI</h3>
              <p className="mt-1 text-sm text-slate-400">
                Bắt đầu bài test 30 câu để nhận kết quả định hướng nghề nghiệp cá nhân hóa.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onStartTest}
            className="mt-5 w-full rounded-xl bg-up-teal px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-up-teal/20 transition hover:bg-up-teal-dark"
          >
            Bắt đầu Test 30 Câu
          </button>
        </div>
      </div>
    </section>
  );
}
