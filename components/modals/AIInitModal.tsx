"use client";

import { AIInitContent } from "@/components/AIInitContent";
import { JOB_DATABASE } from "@/data/jobDatabase";
import { RIASEC_QUESTIONS } from "@/data/riasecQuestions";
import {
  INITIAL_SCORES,
  NICHES_BY_INDUSTRY,
  calculateHollandCode,
  rankTopJobs,
  submitAnswer,
  type IndustryId,
  type NicheId,
  type RankedJob,
  type ScoreMap,
  type Trait,
} from "@/lib/riasec";
import { useEffect, useId, useMemo, useState } from "react";

type AIInitModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function AIInitModal({ open, onOpenChange }: AIInitModalProps) {
  const titleId = useId();
  const [step, setStep] = useState<"init" | "question" | "result">("init");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryId | null>(null);
  const [selectedNiche, setSelectedNiche] = useState<NicheId | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState<ScoreMap>(INITIAL_SCORES);
  const [hollandCode, setHollandCode] = useState<string>("");
  const [topJobs, setTopJobs] = useState<RankedJob[]>([]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const currentQuestion = RIASEC_QUESTIONS[questionIndex];
  const selectedNicheLabel = useMemo(() => {
    if (!selectedIndustry || !selectedNiche) return "";
    const found = NICHES_BY_INDUSTRY[selectedIndustry].find((n) => n.value === selectedNiche);
    return found?.label ?? selectedNiche;
  }, [selectedIndustry, selectedNiche]);

  function handleStart(payload: { industry: IndustryId; niche: NicheId }) {
    setSelectedIndustry(payload.industry);
    setSelectedNiche(payload.niche);
    setStep("question");
    setQuestionIndex(0);
    setScores(INITIAL_SCORES);
    setHollandCode("");
    setTopJobs([]);
  }

  function handleAnswer(point: number) {
    if (!currentQuestion) return;
    const nextScores = submitAnswer(scores, currentQuestion.trait as Trait, point);
    const isLast = questionIndex === RIASEC_QUESTIONS.length - 1;

    if (!isLast) {
      setScores(nextScores);
      setQuestionIndex((v) => v + 1);
      return;
    }

    if (!selectedIndustry || !selectedNiche) return;
    const code = calculateHollandCode(nextScores);
    const ranked = rankTopJobs({
      jobs: JOB_DATABASE,
      industry: selectedIndustry,
      niche: selectedNiche,
      userScores: nextScores,
    });
    setScores(nextScores);
    setHollandCode(code);
    setTopJobs(ranked);
    setStep("result");
  }

  if (!open) return null;

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
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl"
      >
        <span id={titleId} className="sr-only">
          Khởi tạo dữ liệu AI
        </span>
        {step === "init" ? <AIInitContent showHeading onStartTest={handleStart} /> : null}

        {step === "question" && currentQuestion ? (
          <div>
            <p className="text-xs font-medium text-up-mint">Bài Test RIASEC</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Câu {questionIndex + 1}/30
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-200">{currentQuestion.text}</p>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-5">
              {[
                { point: 1, label: "Rất ghét" },
                { point: 2, label: "Không thích" },
                { point: 3, label: "Bình thường" },
                { point: 4, label: "Thích" },
                { point: 5, label: "Rất thích" },
              ].map((opt) => (
                <button
                  key={opt.point}
                  type="button"
                  onClick={() => handleAnswer(opt.point)}
                  className="rounded-xl border border-white/15 bg-slate-900/70 px-3 py-3 text-sm text-slate-200 transition hover:border-up-teal hover:bg-slate-800"
                >
                  <span className="block font-semibold">{opt.point}</span>
                  <span className="mt-1 block text-xs">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === "result" ? (
          <div>
            <p className="text-xs font-medium text-up-mint">Kết quả phân tích</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Mã Holland: {hollandCode}</h3>
            <p className="mt-1 text-sm text-slate-300">Ngách đã phân tích: {selectedNicheLabel}</p>
            <div className="mt-5 space-y-3">
              {topJobs.map((job, idx) => (
                <article
                  key={job.id}
                  className="rounded-xl border border-white/10 bg-slate-900/70 p-4"
                >
                  <p className="text-xs font-semibold text-up-mint">Top {idx + 1}</p>
                  <h4 className="mt-1 text-base font-semibold text-white">{job.title}</h4>
                  <p className="mt-1 text-sm text-slate-300">{job.description}</p>
                  <p className="mt-2 text-xs text-slate-400">
                    Mã nghề: {job.hollandCode} · Độ phù hợp:{" "}
                    <span className="font-semibold text-up-mint">{job.matchPercent}%</span>
                  </p>
                </article>
              ))}
              {topJobs.length === 0 ? (
                <p className="rounded-xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300">
                  Chưa có dữ liệu nghề cho ngành đã chọn.
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-6 w-full rounded-xl bg-up-teal px-4 py-3 text-sm font-semibold text-white transition hover:bg-up-teal-dark"
            >
              Đóng kết quả
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
