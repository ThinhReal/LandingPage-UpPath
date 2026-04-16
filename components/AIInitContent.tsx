"use client";

import { Rocket } from "lucide-react";
import type { IndustryId, NicheId } from "@/lib/riasec";
import { INDUSTRY_OPTIONS, NICHES_BY_INDUSTRY } from "@/lib/riasec";
import { useMemo, useState } from "react";

type AIInitContentProps = {
  className?: string;
  onStartTest?: (payload: { industry: IndustryId; niche: NicheId }) => void;
  showHeading?: boolean;
};

export function AIInitContent({
  className = "",
  onStartTest,
  showHeading = true,
}: AIInitContentProps) {
  const [industry, setIndustry] = useState<IndustryId | "">("");
  const [niche, setNiche] = useState<NicheId | "">("");

  const nicheOptions = useMemo(
    () => (industry ? NICHES_BY_INDUSTRY[industry] : []),
    [industry],
  );

  function handleIndustryChange(value: string) {
    const nextIndustry = value as IndustryId | "";
    setIndustry(nextIndustry);
    setNiche("");
  }

  const canStart = Boolean(industry && niche);

  return (
    <div className={className}>
      {showHeading ? (
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-up-mint/20 text-up-teal">
            <Rocket className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">Khởi tạo dữ liệu AI</h3>
            <p className="mt-1 text-sm text-slate-400">
              Chọn lĩnh vực để AI cá nhân hóa bộ câu hỏi đánh giá 30 câu.
            </p>
          </div>
        </div>
      ) : null}

      <div className={showHeading ? "mt-6" : ""}>
        <label className="text-xs font-medium text-slate-300" htmlFor="ai-industry">
          Lĩnh vực chính
        </label>
        <select
          id="ai-industry"
          value={industry}
          onChange={(e) => handleIndustryChange(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none ring-up-teal/40 focus:border-up-teal focus:ring-2"
        >
          <option value="" disabled>
            Chọn lĩnh vực chính...
          </option>
          {INDUSTRY_OPTIONS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>

      {industry ? (
        <div className="mt-3">
          <label className="text-xs font-medium text-slate-300" htmlFor="ai-niche">
            Ngách chuyên môn cụ thể
          </label>
          <select
            id="ai-niche"
            value={niche}
            onChange={(e) => setNiche(e.target.value as NicheId | "")}
            className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 outline-none ring-up-teal/40 focus:border-up-teal focus:ring-2"
          >
            <option value="" disabled>
              Chọn ngách chuyên môn...
            </option>
            {nicheOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          if (!canStart || !industry || !niche) return;
          onStartTest?.({ industry, niche });
        }}
        disabled={!canStart}
        className="mt-4 w-full rounded-xl bg-up-teal px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-up-teal/20 transition enabled:hover:bg-up-teal-dark disabled:cursor-not-allowed disabled:opacity-50"
      >
        Bắt đầu Test 30 Câu
      </button>
    </div>
  );
}
