import { BookOpen, Check, Video } from "lucide-react";

const checks = [
  {
    title: "Chia chặng rõ ràng:",
    body: "Mỗi giai đoạn có mục tiêu, thời gian và output cụ thể để bạn luôn biết đang ở đâu.",
  },
  {
    title: "Tài nguyên chọn lọc:",
    body: "Khóa học, bài đọc và bài tập được gợi ý theo đúng trình độ và hướng nghề của bạn.",
  },
  {
    title: "Job Matching:",
    body: "Gợi ý vị trí phù hợp dựa trên kỹ năng đang có và khoảng cách cần lấp đầy.",
  },
];

const phases = [
  {
    title: "Giai đoạn 1 — Khởi động",
    items: [
      { type: "video" as const, label: "Video: Tổng quan ngành" },
      { type: "doc" as const, label: "Tài liệu: Thuật ngữ cốt lõi" },
    ],
  },
  {
    title: "Giai đoạn 2 — Phân tích kỹ năng",
    items: [
      { type: "video" as const, label: "Video: Framework phân tích" },
      { type: "doc" as const, label: "Checklist: Bài tập thực hành" },
    ],
  },
  {
    title: "Giai đoạn 3 — Thực chiến",
    items: [
      { type: "video" as const, label: "Case study: Mini project" },
      { type: "doc" as const, label: "Template: Trình bày kết quả" },
    ],
  },
];

function ResourceIcon({ type }: { type: "video" | "doc" }) {
  if (type === "video") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-up-mint/30 text-up-teal-dark">
        <Video className="h-4 w-4" aria-hidden />
      </span>
    );
  }
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-up-surface text-up-teal-dark">
      <BookOpen className="h-4 w-4" aria-hidden />
    </span>
  );
}

export function CoreValues() {
  return (
    <section id="lo-trinh" className="scroll-mt-24 border-b border-up-border/60 bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:gap-16 sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-up-teal-dark">
            GIÁ TRỊ CỐT LÕI
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-up-ink sm:text-3xl">
            Không nói suông. Chúng tôi đưa sẵn tài nguyên cho bạn.
          </h2>
          <ul className="mt-8 space-y-6">
            {checks.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-up-mint/40 text-up-teal-dark">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-up-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-up-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-up-border bg-gradient-to-br from-white to-up-surface p-6 shadow-lg shadow-up-ink/5 sm:p-8">
          <h3 className="text-lg font-semibold text-up-ink">Ví dụ: Hệ thống phân tích kỹ năng</h3>
          <p className="mt-1 text-sm text-up-muted">
            Một lộ trình minh họa với đủ video & tài liệu đi kèm từng chặng.
          </p>
          <div className="mt-6 space-y-5">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="rounded-xl border border-up-border/80 bg-white/80 p-4"
              >
                <p className="text-sm font-semibold text-up-ink">{phase.title}</p>
                <ul className="mt-3 space-y-2">
                  {phase.items.map((res) => (
                    <li key={res.label} className="flex items-center gap-3 text-sm text-up-muted">
                      <ResourceIcon type={res.type} />
                      <span>{res.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
